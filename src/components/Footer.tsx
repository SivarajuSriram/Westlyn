"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FiFacebook, FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const exploreLinks = ["Home", "About", "Projects", "Events", "Blogs", "Careers"];
  const supportLinks = ["NRI Support", "Partner With Us", "Contact", "Privacy Policy"];

  return (
    <footer className="w-full bg-black text-white pt-24 pb-12 font-sans overflow-hidden border-t border-white/5">
      <div className="w-full px-8 md:px-24">
        
        {/* Main Grid: 3 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">
          
          {/* Column 1: Logo & Brand Info */}
          <div className="space-y-8">
            <div className="w-48">
              <Image 
                src="/WestlynLogo.svg" 
                alt="Westlyn Logo" 
                width={180} 
                height={60} 
                className="object-contain brightness-0 invert" 
              />
            </div>
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xs">
              Crafting triplex boutique villas that redefine luxury living in the heart of Shankarpally.
            </p>
            {/* Social Icons moved here for better Column 1 balance */}
            <div className="flex gap-6 text-zinc-400">
              <FiFacebook size={18} className="hover:text-white transition-colors cursor-pointer" />
              <FiInstagram size={18} className="hover:text-white transition-colors cursor-pointer" />
              <FiYoutube size={18} className="hover:text-white transition-colors cursor-pointer" />
              <FiLinkedin size={18} className="hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Explore</h4>
            <ul className="grid grid-cols-1 gap-y-4 gap-x-4">
              {exploreLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-[13px] font-light text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">{/*Office address*/}</h4>
            <div className="space-y-6">
              <div>
                <span className="block text-[10px] text-zinc-600 uppercase font-bold mb-2 tracking-widest">{/*To be added*/}</span>
                <p className="text-sm font-light text-zinc-400 leading-relaxed">
                  {/*To be added*/}
                </p>
              </div>
              {/* <div>
                <span className="block text-[10px] text-zinc-600 uppercase font-bold mb-2 tracking-widest">Support</span>
                <ul className="space-y-2">
                  {supportLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link href="#" className="text-xs font-light text-zinc-500 hover:text-white transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>*/}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
            © 2026 Westlyn. All Rights Reserved.
          </p>
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
            Designed with Marks and methods
          </p>
        </div>

      </div>
    </footer>
  );
}