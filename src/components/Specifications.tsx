"use client";
import { useState } from 'react';
import { Plus, Minus, Check } from 'lucide-react';

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
    <section className="w-full bg-white py-32 font-sans">
      <div className="w-full px-8 md:px-24">
        <h2 className="text-6xl md:text-7xl font-normal text-zinc-900 mb-24">Specifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-2">
          {specs.map((spec, i) => (
            <div key={i} className="border-b border-zinc-100">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-8 text-left group"
              >
                <span className={`text-2xl font-light transition-colors ${openIndex === i ? 'text-zinc-900' : 'text-zinc-400 group-hover:text-zinc-600'}`}>
                  {spec.title}
                </span>
                <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-zinc-900 group-hover:text-zinc-900 transition-all">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-height-[500px] pb-8' : 'max-h-0'}`}>
                <ul className="space-y-4">
                  {spec.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={18} className="text-green-500 mt-1 shrink-0" />
                      <span className="text-zinc-500 text-lg font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}