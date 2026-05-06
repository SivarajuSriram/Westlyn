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
  
  // Ref to store the last scroll position without triggering re-renders
  const lastScrollY = useRef(0);

  // 1. Logic to Lock/Unlock Scroll
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

  // 2. Smart Scroll Logic (Hide on Down, Show on Up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine background state (glassmorphism vs transparent)
      setIsScrolled(currentScrollY > 50);

      // Smart Header Logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down & passed threshold - Hide
        setIsVisible(false);
      } else {
        // Scrolling up - Show
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
      {/* Smart Navbar Wrapper */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-8 py-8 md:px-16 transition-all duration-500 ease-in-out ${
          isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent'
        } ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Logo */}
        <div 
          className="relative h-18 w-42 cursor-pointer" 
          onClick={() => scrollToSection(refs.home)}
        >
          <Image 
            src="/WestlynLogo.svg" 
            alt="Ankura Homes" 
            fill 
            className="object-center brightness-0 invert" 
          />
        </div>

        {/* Menu Icon Toggle */}
        <button 
          onClick={() => setIsMenuOpen(true)} 
          className="text-white hover:text-[#b4945c] transition-colors p-2"
        >
          <Menu size={32} strokeWidth={1.5} />
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
        
        <div className={`relative h-full w-full md:w-[450px] bg-black p-12 flex flex-col justify-start pt-32 transition-transform duration-500 ease-out will-change-transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform duration-300"
          >
            <X size={40} strokeWidth={1} />
          </button>

          <div className="flex flex-col space-y-8 font-sans">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.ref)}
                className="text-4xl md:text-5xl text-white font-light uppercase tracking-tighter hover:text-[#b4945c] transition-colors text-left"
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