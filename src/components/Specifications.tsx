"use client";
import { useState } from 'react';
import { Plus, Minus, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Specifications() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const specs = [
    { title: "Structure", content: ["RCC framed structure (M-25 Mixed Concrete)", "Post-construction anti-termite treatment"] },
    { title: "Flooring", content: ["Premium Vitrified tiles for living and dining", "Anti-skid tiles for bathrooms"] },
    { title: "Painting", content: ["Internal: Smooth putty finish with acrylic emulsion", "External: Textured finish with weather-proof paint"] },
    { title: "Doors & Windows", content: ["Main Door: Teak wood frame with aesthetic shutter", "Windows: UPVC with safety grills"] },
    { title: "Kitchen", content: ["Granite platform with stainless steel sink", "Provisions for chimney and RO"] },
    { title: "Electrical", content: ["Concealed copper wiring", "Modular switches of reputed make"] },
    { title: "Ceiling", content: ["High Ceilings (11.3 ft)", "False ceiling provision in all rooms"] },
    { title: "Toilets", content: ["Wall-mounted EWC", "Premium CP fittings"] },
    { title: "Privacy", content: ["Independent walls for every villa", "Strategically placed windows for zero overlooking"] },
    { title: "Plastering", content: ["Double coat cement plastering", "Smooth finish for internal walls"] },
  ];

  return (
    /* FIX: Changed to bg-white for alternate theme logic and standardized padding */
    <section id="specifications" className="w-full bg-white py-24 md:py-40 font-sans">
      <div className="w-full px-8 md:px-24">
        
        {/* FIX: Header updated to match the luxury tracking and size */}
        <h2 className="text-2xl md:text-5xl font-normal text-zinc-900 mb-20 md:mb-32 tracking-tighter uppercase">
          Specifications
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 md:gap-x-24 ">
          {specs.map((spec, i) => (
            <div 
              key={i} 
              /* FIX: Added dynamic background and curves for the "Active" state */
              className={`transition-all duration-500 rounded-[32px] ${openIndex === i ? 'bg-zinc-50 px-6 md:px-10 shadow-sm' : 'bg-transparent border-b border-zinc-100 px-2'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-8 md:py-10 text-left group"
              >
                <span className={`text-xl md:text-2xl tracking-tight transition-colors font-geologica font-normal ${openIndex === i ? 'text-zinc-900' : 'text-zinc-500 group-hover:text-zinc-800'}`}>
                  {spec.title}
                </span>
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-zinc-900 border-zinc-900 text-white rotate-0' : 'border-zinc-200 text-zinc-400 group-hover:border-zinc-900 group-hover:text-zinc-900'}`}>
                  {openIndex === i ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-5 pb-10">
                      {spec.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="mt-1.5 w-5 h-5 rounded-full bg-zinc-900/5 flex items-center justify-center shrink-0">
                            <Check size={12} className="text-zinc-900" />
                          </div>
                          <span className="text-zinc-600 text-base md:text-lg font-geologica font-light leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}