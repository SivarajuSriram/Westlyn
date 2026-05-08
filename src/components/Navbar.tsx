"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, Menu } from 'lucide-react';

interface NavbarProps {
  refs: {
    [key: string]: React.RefObject<HTMLElement | null>;
  };
}

export default function Navbar({ refs }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement | null>) => {
    setIsMenuOpen(false); 
    if (sectionRef?.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop, 
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { name: 'Home', ref: refs.home },
    { name: 'Overview', ref: refs.overview },
    { name: 'Amenities', ref: refs.amenities },
    { name: 'Floor Plans', ref: refs.plans },
    { name: 'Gallery', ref: refs.gallery },
    { name: 'Location', ref: refs.location },
    { name: 'Contact', ref: refs.contact },
  ];

  return (
    <>
      {/* Smart Navbar Wrapper - REDUCED PADDING: from py-8 to py-4 md:py-6 */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-8 py-4 md:px-16 md:py-6 transition-all duration-500 ease-in-out ${
          isScrolled ? 'bg-black/90 backdrop-blur-md py-3 md:py-4' : 'bg-transparent'
        } ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Logo - UPDATED ALT TEXT & DIMENSIONS */}
        <div 
          className="relative h-10 w-32 md:h-12 md:w-40 cursor-pointer" 
          onClick={() => scrollToSection(refs.home)}
        >
          <Image 
            src="/WestlynLogo.svg" 
            alt="Westlyn" 
            fill 
            className="object-contain brightness-0 invert" 
          />
        </div>

        {/* Menu Icon Toggle */}
        <button 
          onClick={() => setIsMenuOpen(true)} 
          className="text-white hover:text-[#b4945c] transition-colors p-2"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Side Pop-up (Drawer) */}
      <div className={`fixed inset-0 z-[150] flex justify-end transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        <div 
          className="absolute inset-0 bg-black/60 transition-opacity duration-500" 
          onClick={() => setIsMenuOpen(false)} 
        />
        
        {/* REDUCED TOP PADDING: from pt-32 to pt-20 md:pt-24 */}
        <div className={`relative h-full w-full md:w-[450px] bg-black p-12 flex flex-col justify-start pt-20 md:pt-24 transition-transform duration-500 ease-out will-change-transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform duration-300"
          >
            <X size={32} strokeWidth={1} />
          </button>

          <div className="flex flex-col space-y-6 md:space-y-8 font-sans">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.ref)}
                className="text-3xl md:text-5xl text-white font-mosseta font-light uppercase tracking-tighter hover:text-[#b4945c] transition-colors text-left"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}