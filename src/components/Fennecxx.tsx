"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ParticleCanvas from './ParticleCanvas';

const Fennecxx = () => {
  return (
    <>
      <ParticleCanvas />
      <div className="min-h-screen w-full flex flex-col items-center justify-center relative">
        <main className="z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-2">Fennecxx&apos; Hyper Engine</h1>
          <p className="text-gray-300 text-2xl mb-8">the discrete, hyper-fast games website</p>
          
          <div className="flex gap-6 justify-center mb-8">
            <button className="bg-[#1a2942] hover:bg-[#243755] p-3 rounded-full flex items-center justify-center transition-colors w-25 h-13">
              <Image 
                src="/icons/games.svg" 
                alt="Games" 
                width={30}
                height={30} 
                className="invert"
              />
               ‎ | Games
            </button>
            <button className="bg-[#1a2942] hover:bg-[#243755] p-3 rounded-full flex items-center justify-center transition-colors w-12 h-12">
              <Image 
                src="/icons/apps.svg" 
                alt="Apps" 
                width={160} 
                height={80} 
                className="invert"
              />
            </button>
            {/*  <button className="bg-[#1a2942] hover:bg-[#243755] p-3 rounded-full flex items-center justify-center transition-colors w-12 h-12">
              <Image 
                src="/icons/settings.svg" 
                alt="Settings" 
                width={80} 
                height={80} 
                className="invert"
              />
            </button>  */}
          </div>
          
          <p className="text-gray-400 text-1.5xl text-sm mb-4">
            Created with <span className="text-blue-400">💙</span> by Fennecxx&apos; Crew
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              <Image 
                src="/icons/github.svg" 
                alt="GitHub" 
                width={36} 
                height={36} 
                className="invert"
              />
            </Link>
            <Link href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
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