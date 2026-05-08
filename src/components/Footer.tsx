"use client";
import Image from 'next/image';
import { FiFacebook, FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi';

interface FooterProps {
  refs: {
    [key: string]: React.RefObject<HTMLElement | null>;
  };
}

export default function Footer({ refs }: FooterProps) {
  const scrollToSection = (sectionRef: React.RefObject<HTMLElement | null>) => {
    if (sectionRef?.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const exploreLinks = [
    { name: 'Home', ref: refs?.home },
    { name: 'Overview', ref: refs?.overview },
    { name: 'Amenities', ref: refs?.amenities },
    { name: 'Floor Plans', ref: refs?.plans },
    { name: 'Gallery', ref: refs?.gallery },
    { name: 'Location', ref: refs?.location },
    { name: 'Contact', ref: refs?.contact },
  ];

  return (
    <footer className="w-full bg-black text-white py-12 md:py-16 font-sans overflow-hidden border-t border-white/5">
      <div className="w-full px-8 md:px-24">
        
        {/* UPDATED: Changed to 2 columns and added justify-between for max separation */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          
          {/* Column 1: Logo & Brand Info (Moved Left) */}
          <div className="space-y-6">
            <div 
              className="w-32 md:w-40 cursor-pointer"
              onClick={() => scrollToSection(refs.home)}
            >
              <Image 
                src="/WestlynLogo.svg" 
                alt="Westlyn Logo" 
                width={160} 
                height={50} 
                className="object-contain brightness-0 invert" 
              />
            </div>
            <p className="text-zinc-500 font-geologica text-sm font-light leading-relaxed max-w-xs">
              Crafting triplex boutique villas that redefine luxury living in the heart of Shankarpally.
            </p>
            <div className="flex gap-6 text-zinc-500">
              <FiFacebook size={18} className="hover:text-white transition-colors cursor-pointer" />
              <FiInstagram size={18} className="hover:text-white transition-colors cursor-pointer" />
              <FiYoutube size={18} className="hover:text-white transition-colors cursor-pointer" />
              <FiLinkedin size={18} className="hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Column 2: Navigation Links (Moved Right) */}
          <div className="space-y-6 text-left md:text-right">
            <h4 className="text-[11px] font-bold font-mosseta uppercase tracking-[0.4em] text-zinc-600">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => scrollToSection(link.ref)}
                    className="text-[12px] font-light font-geologica text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-left md:text-right w-full"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ADDRESS COLUMN REMOVED */}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-zinc-700 font-geologica uppercase tracking-[0.2em]">
            © 2026 Westlyn. All Rights Reserved.
          </p>
          <p className="text-[10px] text-zinc-700 font-geologica uppercase tracking-[0.2em]">
            Designed By Marks and methods
          </p>
        </div>

      </div>
    </footer>
  );
}