"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

interface PlansProps {
  onDownload: (title: string) => void;
}

type VillaType = 'A' | 'B' | 'C' | 'D';

export default function Plans({ onDownload }: PlansProps) {
  const [activeTab, setActiveTab] = useState<'master' | 'floor'>('master');
  const [activeType, setActiveType] = useState<VillaType>('A');

  // Working dummy images for architectural floor plans and master plans
  const images = {
    master: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop",
    blueprint: "https://imgs.search.brave.com/v69KOP7LxPxu4OvtszzvSLIB78wCnCV8Ct86_vcbbeQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODI3/NTE5NDQyL3ZlY3Rv/ci9mbG9vci1wbGFu/LXRvcC12aWV3LXRo/ZS1pbnRlcmlvci1k/ZXNpZ24tdGVycmFj/ZS10aGUtY290dGFn/ZS1pcy1hLWNvdmVy/ZWQtdmVyYW5kYS1s/YXlvdXQtb2YuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVkt/NDkwSEotRURTdXB4/UUNjNjZQNnpEdHpE/N2w5VFN5dG1Fc2VE/dTJma009"
  };

  const floorPlansData: Record<VillaType, { east: { title: string; img: string }[], west: { title: string; img: string }[] }> = {
    A: {
      east: [
        { title: "Ground Floor", img: images.blueprint },
        { title: "First Floor", img: images.blueprint },
        { title: "Second Floor", img: images.blueprint },
      ],
      west: [
        { title: "Ground Floor", img: images.blueprint },
        { title: "First Floor", img: images.blueprint },
        { title: "Second Floor", img: images.blueprint },
      ]
    },
    B: {
      east: [
        { title: "Ground Floor", img: images.blueprint },
        { title: "First Floor", img: images.blueprint },
        { title: "Second Floor", img: images.blueprint },
      ],
      west: [
        { title: "Ground Floor", img: images.blueprint },
        { title: "First Floor", img: images.blueprint },
        { title: "Second Floor", img: images.blueprint },
      ]
    },
    C: {
      east: [{ title: "Full Villa Plan", img: images.blueprint }],
      west: [{ title: "Full Villa Plan", img: images.blueprint }]
    },
    D: {
      east: [{ title: "Full Villa Plan", img: images.blueprint }],
      west: [{ title: "Full Villa Plan", img: images.blueprint }]
    }
  };

  const currentTypeData = floorPlansData[activeType];

  return (
    <section id="floor-plans" className="w-full bg-[#F9FAFB] py-20 md:py-32 font-sans overflow-hidden">
      <div className="w-full px-6 md:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-16 md:mb-20 gap-8">
          <h2 className="text-5xl md:text-8xl font-normal text-zinc-900 tracking-tighter">Plans</h2>
          
          <div className="bg-zinc-200/50 p-1 rounded-full flex">
            {(['master', 'floor'] as const).map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 md:px-10 py-3 md:py-4 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeTab === tab ? 'bg-black text-white shadow-xl' : 'text-zinc-500 hover:text-zinc-800'
                }`}
              >
                {tab === 'master' ? 'Master Plan' : 'Floor Plans'}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[500px]">
          {activeTab === 'master' ? (
            <div className="w-full flex flex-col items-center animate-in fade-in duration-700">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-white rounded-[24px] md:rounded-[40px] overflow-hidden border border-zinc-100 shadow-sm group cursor-pointer">
                <Image src={images.master} alt="Master Plan" fill className="object-contain p-4 md:p-12 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="bg-white p-4 md:p-5 rounded-full shadow-2xl text-zinc-900"><Search size={24} /></div>
                </div>
              </div>
              <button onClick={() => onDownload('Master Plan')} className="mt-12 md:mt-16 border border-zinc-900 px-10 md:px-14 py-4 md:py-5 rounded-full text-[9px] md:text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-900 hover:text-white transition-all">
                Download Master Plan
              </button>
            </div>
          ) : (
            <div className="w-full flex flex-col animate-in fade-in duration-700">
              
              <div className="flex justify-center mb-16 md:mb-24">
                <div className="bg-white/80 backdrop-blur shadow-sm p-1 rounded-full flex flex-wrap justify-center border border-zinc-100">
                  {(['A', 'B', 'C', 'D'] as VillaType[]).map((type) => (
                    <button 
                      key={type}
                      onClick={() => setActiveType(type)}
                      className={`px-6 md:px-12 py-2.5 md:py-4 rounded-full text-xs md:text-base font-bold uppercase transition-all duration-300 ${
                        activeType === type ? 'bg-zinc-900 text-white shadow-lg' : 'text-zinc-400 hover:text-zinc-900'
                      }`}
                    >
                      TYPE {type}
                    </button>
                  ))}
                </div>
              </div>

              {['east', 'west'].map((facing) => (
                <div key={facing} className="mb-20 md:mb-24 last:mb-0">
                  <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                    <h3 className="text-xl md:text-3xl font-medium text-zinc-900 uppercase tracking-[0.2em]">
                      {facing} Facing
                    </h3>
                    <div className="h-[1px] flex-1 bg-zinc-200" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {currentTypeData[facing as 'east' | 'west'].map((plan, i) => (
                      <div key={i} className="group">
                        <div className="relative aspect-[4/5] w-full bg-white rounded-[24px] md:rounded-[32px] overflow-hidden border border-zinc-100 shadow-sm transition-all duration-500 md:group-hover:shadow-2xl md:group-hover:-translate-y-2">
                          <img src={plan.img} alt={plan.title} className="w-full h-full object-contain" />
                        </div>
                        <p className="mt-6 md:mt-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 text-center">
                          {plan.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex justify-center mt-12 md:mt-20">
                <button 
                  onClick={() => onDownload('All Floor Plans')}
                  className="bg-zinc-900 text-white px-12 md:px-20 py-5 md:py-6 rounded-full text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-black transition-all shadow-xl active:scale-95"
                >
                  Download Floor Plans
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}