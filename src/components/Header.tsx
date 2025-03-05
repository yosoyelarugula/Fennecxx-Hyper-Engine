"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-[#0f172a]/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button 
          onClick={() => router.push('/')} 
          className="text-white text-xl font-bold flex items-center gap-2"
        >
          <Image 
            src="/icons/file.svg" 
            alt="Logo" 
            width={24} 
            height={24} 
          />
          Fennecxx Hyper Engine
        </button>
        
        <nav className="flex gap-6">
          <button 
            onClick={() => router.push('/')} 
            className="text-white/80 hover:text-white"
          >
            Home
          </button>
          <button 
            onClick={() => router.push('/games')} 
            className="text-white/80 hover:text-white"
          >
            Games
          </button>
          <button 
            onClick={() => router.push('/apps')} 
            className="text-white/80 hover:text-white"
          >
            Apps
          </button>
        </nav>
        
        <div className="flex gap-4">
          <button onClick={() => window.open('https://github.com/fennecxx', '_blank')}>
            <Image 
              src="/icons/github.svg" 
              alt="GitHub" 
              width={24} 
              height={24} 
              className="text-white/60 hover:text-white" 
            />
          </button>
          <button onClick={() => window.open('https://youtube.com/@fennecxx', '_blank')}>
            <Image 
              src="/icons/youtube.svg" 
              alt="YouTube" 
              width={24} 
              height={24} 
              className="text-white/60 hover:text-white" 
            />
          </button>
        </div>
      </div>
    </header>
  );
}