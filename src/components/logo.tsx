'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function Logo() {
    const router = useRouter();
    const handleRandom = async () => {
        const res = await fetch('https://vamos-ajudar-api.henriquebarucco.com.br/v1/ong/random');

        const data = await res.json();

        if (res.status !== 200) {
            return;
        }

        router.push(`/${data.name}`);
    };

    return (
        <Image src={'/logo.png'} alt='logo' width={450} height={450} onClick={() => handleRandom()} className='hover:cursor-pointer' />
    );
}