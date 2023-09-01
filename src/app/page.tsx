import Logo from '@/components/logo';
import Image from 'next/image';

export default function Home() {
    return (
        <main className='flex flex-col justify-center text-center items-center h-screen bg-[#1a1f24]'>
            <Logo/>
            <Image src={'/download.png'} alt='logo' width={150} height={150} className='pt-10'/>
        </main>
    );
}
