"use client";
import React from 'react';

interface AmenitiesProps {
  onDownload: (title: string) => void;
}

export default function Amenities({ onDownload } : AmenitiesProps) {
  const list = [
    { 
      name: "Pickleball Court", 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 14l-6 6M12 12l3.5-3.5a4.95 4.95 0 1 1 7 7L19 19l-7-7z" />
          <circle cx="7" cy="7" r="2" />
        </svg>
      ) 
    },
    { 
      name: "Half Basketball Court", 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 0 20M2 12a15.3 15.3 0 0 1 20 0M7 3.3a14 14 0 0 1 0 17.4M17 3.3a14 14 0 0 0 0 17.4" />
        </svg>
      ) 
    },
    { 
      name: "Amphitheatre", 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 20a10 10 0 0 0-20 0" />
          <path d="M18 20a6 6 0 0 0-12 0" />
          <path d="M14 20a2 2 0 0 0-4 0" />
        </svg>
      ) 
    },
    { 
      name: "Miyawaki Forest", 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M12 5l-4 4M12 5l4 4M7 20v-5M7 15l-3 3M7 15l3 3M17 20v-7M17 13l-3 3M17 13l3 3" />
        </svg>
      ) 
    },
    { 
      name: "Swimming Pool", 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 6c.6 0 1.2.4 1.4.8C3.8 8.1 4.7 9 6 9s2.2-.9 2.6-2.2c.2-.4.8-.8 1.4-.8s1.2.4 1.4.8c.4 1.3 1.3 2.2 2.6 2.2s2.2-.9 2.6-2.2c.2-.4.8-.8 1.4-.8s1.2.4 1.4.8c.4 1.3 1.3 2.2 2.6 2.2" />
          <path d="M2 12c.6 0 1.2.4 1.4.8.4 1.3 1.3 2.2 2.6 2.2s2.2-.9 2.6-2.2c.2-.4.8-.8 1.4-.8s1.2.4 1.4.8c.4 1.3 1.3 2.2 2.6 2.2s2.2-.9 2.6-2.2c.2-.4.8-.8 1.4-.8s1.2.4 1.4.8c.4 1.3 1.3 2.2 2.6 2.2" />
        </svg>
      ) 
    },
    { 
      name: "Meditation Deck", 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="2" />
          <path d="M12 11v11M8 22h8M12 11l-4 4M12 11l4 4" />
        </svg>
      ) 
    },
    { 
      name: "Cricket Pitch", 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 20v-8M12 20v-8M16 20v-8M6 20h12" />
          <circle cx="12" cy="6" r="2" />
        </svg>
      ) 
    },
    { 
      name: "Co-working Spaces", 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M2 20h20M7 20v-4M17 20v-4" />
        </svg>
      ) 
    },
  ];

  return (
    <section id="amenities" className="w-full bg-white py-12 md:py-20 font-sans">
      <div className="w-full px-8 md:px-24">
        
        <h2 className="text-2xl md:text-5xl font-normal text-zinc-900 mb-10 md:mb-12 tracking-tighter uppercase leading-none">
          Amenities
        </h2>
        
        {/* UPDATED: Changed lg:grid-cols-4 and kept compact card padding p-6 md:p-8 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {list.map((item, i) => (
            <div 
              key={i} 
              className="group bg-zinc-50 p-6 md:p-8 rounded-[30px] border border-zinc-100 flex flex-col items-start gap-6 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-default"
            >
              <div className="text-zinc-400 group-hover:text-[#b4945c] transition-colors duration-500 transform group-hover:scale-110">
                {item.icon}
              </div>
              <span className="text-base md:text-lg font-light font-geologica text-zinc-800 leading-tight tracking-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex justify-center">
          <button 
            onClick={() => onDownload('View All Amenities')} 
            className="z-30 border border-zinc-900 px-14 py-5 rounded-full text-[11px] font-geologica font-bold uppercase tracking-[0.3em] hover:bg-zinc-900 hover:text-white transition-all duration-500 shadow-xl active:scale-95"
          >
            View All Amenities
          </button>
        </div>
      </div>
    </section>
  );
}