import Image from 'next/image';

export default function Home() {
    return (
        <main className='flex flex-col justify-center text-center items-center h-screen bg-[#1a1f24]'>
            <p className='text-3xl text-slate-100'>Vamos Ajudar?</p>
            <Image src={'/logo.png'} alt='logo' width={300} height={300} />
            <Image src={'/download.png'} alt='logo' width={150} height={150} />
        </main>
    );
}
