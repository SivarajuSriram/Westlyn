"use client";
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onDownload: () => void;
}

export default function Hero({ onDownload }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center font-sans overflow-hidden bg-black">
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/banner.webp" 
          alt="Iqon West Architecture"
          fill
          priority
          className="object-cover opacity-70" // Slightly higher opacity for better detail
        />
        {/* Darker Gradient Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Content Container - Added relative z-10 to ensure it sits on top */}
      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center">        
        <p className="text-lg md:text-xl font-light tracking-[0.15em] mb-12 opacity-90 uppercase">
          A NEIGHBOURHOOD Forged in Time
        </p>

        {/* Button Fix: Higher z-index and explicit solid background */}
        <button 
          onClick={onDownload}
          className="relative z-20 bg-white text-black px-14 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-100 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] active:scale-95"
        >
          Download Brochure
        </button>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="text-white/60 w-10 h-10 stroke-[1px]" />
      </div>
    </section>
  );
}