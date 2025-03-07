"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ParticleCanvas from './ParticleCanvas';

const Fennecxx = () => {

  const router = useRouter();

  return (
    <>
      <ParticleCanvas />
      <div className="min-h-screen w-full flex flex-col items-center justify-center relative">
        <main className="z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-2">Fennecxx&apos; Hyper Engine</h1>
          <p className="text-gray-300 text-2xl mb-8">the discrete, hyper-fast games website</p>
          
          <div className="flex gap-6 justify-center mb-8">
            <button onClick={() => router.push("/games")} className="bg-[#1a2942] hover:bg-[#243755] p-3 rounded-full flex items-center justify-center transition-colors w-36 h-12">
              <Image 
                src="/icons/games.svg" 
                alt="Games" 
                width={25}
                height={20} 
                className="invert"
              />
               ‎  Games
            </button>
            <button onClick={() => router.push("/apps")} className="bg-[#1a2942] hover:bg-[#243755] p-3 rounded-full flex items-center justify-center transition-colors w-36 h-12">
              <Image 
                src="/icons/apps.svg" 
                alt="Apps" 
                width={20}
                height={20} 
                className="invert"
              />
              ‎‎‎ Apps
            </button>
            {/* 
            <Link href="/games">
            <button className="bg-[#1a2942] hover:bg-[#243755] p-3 rounded-full flex items-center justify-center transition-colors w-36 h-12">
              <Image 
                src="/icons/settings.svg" 
                alt="Settings" 
                width={20}
                height={20} 
                className="invert"
              />
            </button>  
            </link>
            */}
          </div>
          
          <p className="text-gray-400 text-1.5xl text-sm mb-4">
            Created with <span className="text-blue-400">💙</span> by Fennecxx&apos; Crew
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link href="https://github.com/yosoyelarugula/Fennecxx-Hyper-Engine" className="text-gray-400 hover:text-white transition-colors">
              <Image 
                src="/icons/github.svg" 
                alt="GitHub" 
                width={36} 
                height={36} 
                className="invert"
              />
            </Link>
            <Link href="https://youtube.com/@Yo-Soy-El-Arugula" className="text-gray-400 hover:text-white transition-colors">
              <Image 
                src="/icons/youtube.svg" 
                alt="YouTube" 
                width={36} 
                height={36} 
                className="invert"
              />
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Fennecxx;
