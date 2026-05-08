"use client";
import { MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Location() {
  const landmarks = [
    { name: "Neopolis", dist: "25 Mins" },
    { name: "Kandi Chevella Highway", dist: "300 Feet" },
    { name: "Kokapet", dist: "Easy Access" },
    { name: "Shankarpally Junction", dist: "Nearby" },
    { name: "Financial District", dist: "Quick Access" },
  ];

  return (
    /* REDUCED PADDING: from py-24 md:py-40 to py-12 md:py-20 */
    <section id="location" className="w-full bg-zinc-50 py-12 md:py-20 font-sans overflow-hidden">
      <div className="w-full px-8 md:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* Left Side: Info */}
          <div className="space-y-10 md:space-y-12">
            <div className="space-y-6">
              {/* REDUCED MARGIN: from mb-8/10 to implicit spacing in container */}
              <h2 className="text-2xl md:text-5xl font-normal text-zinc-900 tracking-tighter uppercase leading-none">
                Location
              </h2>
              <p className="text-lg md:text-xl font-geologica font-light leading-relaxed max-w-xl text-zinc-500">
                Positioned for seamless connectivity yet thoughtfully distanced from the city’s chaos. Stay close to everything that matters while enjoying peace and calm.
              </p>
            </div>
            
            <div className="space-y-4">
              <span className="text-[10px] font-bold font-geologica text-zinc-400 uppercase tracking-[0.3em] block mb-6">Nearby Landmarks</span>
              <div className="space-y-3">
                {landmarks.map((item, i) => (
                  <div 
                    key={i} 
                    /* REDUCED CARD PADDING: from p-6/8 to p-4 md:p-5 and rounded-[24px] */
                    className="flex items-center justify-between bg-white p-4 md:p-5 rounded-[24px] border border-zinc-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-500 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500">
                        <MapPin size={16} strokeWidth={1.5} />
                      </div>
                      <span className="text-base md:text-lg font-light font-geologica text-zinc-800 tracking-tight">{item.name}</span>
                    </div>
                    <span className="bg-zinc-900 font-geologica text-white px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest">
                      {item.dist}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Map & Button (Centered Alignment) */}
          <div className="flex flex-col items-center w-full gap-8">
            {/* Map Container */}
            <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden rounded-[40px] border border-zinc-200 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3641.680317737511!2d78.238811!3d17.498711999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI5JzU1LjQiTiA3OMKwMTQnMTkuNyJF!5e1!3m2!1sen!2sin!4v1778245787978!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Button wrapper remains centered */}
            <div className="w-full flex justify-center">
              <Link 
                href="https://maps.app.goo.gl/Hr985twoAA66XE3S6" 
                target="_blank" 
                className="w-full md:w-auto"
              >
                <button className="w-full md:w-auto bg-zinc-900 text-white px-12 py-5 rounded-full text-[11px] font-geologica font-bold uppercase tracking-[0.3em] shadow-2xl hover:bg-black hover:scale-[1.02] transition-all duration-500 flex items-center justify-center gap-3 active:scale-95">
                  View On Google Maps
                  <ExternalLink size={14} />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}