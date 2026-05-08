"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onDownload: (title:string) => void;
}

export default function Hero({ onDownload }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Provision for Desktop Images
  const desktopImages = [
    "/1.webp",
    "/2.webp",
    "/3.webp",
    "/4.webp",
    "/5.webp",
    "/6.webp",
    "/7.webp",
    "/8.webp",
  ];

  // 2. Provision for Mobile Images (Portrait aspect ratios look better on phones)
  const mobileImages = [
    "/1.webp",
    "/3.webp",
    "/7.webp",
  ];

  // Auto-transition logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % desktopImages.length);
    }, 5000); // Transitions every 5 seconds
    return () => clearInterval(timer);
  }, [desktopImages.length]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center font-sans overflow-hidden bg-black">
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        {/* Render Desktop Images */}
        {desktopImages.map((src, index) => (
          <div
            key={`desktop-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out hidden md:block ${
              index === currentIndex ? "opacity-50" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Westlyn Architecture Desktop ${index + 1}`}
              fill
              quality={100}
              unoptimized
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}

        {/* Render Mobile Images */}
        {mobileImages.map((src, index) => (
          <div
            key={`mobile-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out block md:hidden ${
              index === currentIndex ? "opacity-50" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Westlyn Architecture Mobile ${index + 1}`}
              fill
              quality={100}
              unoptimized
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}

        {/* Darker Gradient Overlay - Shared across all slides */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[1]" />
      </div>

      {/* Content Container - Exactly as per your layout */}
      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center">        
        <h1 className="text-xl md:text-5xl tracking-[0.15em] mb-12 opacity-90 uppercase">
          A NEIGHBOURHOOD Forged in Time
        </h1>

        <button 
          onClick={() => { onDownload('Download Brochure');}}
          className="relative z-20 bg-white font-geologica text-black px-14 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-100 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] active:scale-95"
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