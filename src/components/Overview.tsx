import { CheckCircle2 } from 'lucide-react';

export default function Overview() {
  return (
    <section className="w-full bg-zinc-50 py-32 font-sans overflow-hidden">
      <div className="w-full px-8 md:px-24 flex flex-col lg:flex-row justify-between items-start gap-24">
        
        {/* Descriptive Column */}
        <div className="flex-1 max-w-4xl">
          <div className="mb-10">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-2">
              {/*TG RERA REGISTRATION NO*/}
            </span>
            <span className="text-base font-bold text-[#b4945c] tracking-widest">{/*TG RERA REGISTRATION NO*/}</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-normal text-zinc-900 mb-10">
            Overview
          </h2>
          
          <p className="text-zinc-500 text-xl md:text-2xl leading-[1.7] font-light">
            An unmatched villa community of rare luxury rising in the west of Hyderabad, IQON WEST 
            is crafted on undulating landscaped grounds, drawing you into realms of greenery, 
            serenity, and space without compromising connectivity. Featuring contemporary 
            architecture and elegant interiors, these villas are designed to bring romance back 
            into everyday living.
          </p>
        </div>

        {/* Floating Card Column 
        <div className="w-full lg:w-[450px] sticky top-32">
          <div className="bg-white p-10 rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.06)] border border-zinc-50">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-2 h-2 bg-black rounded-full" />
              <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] text-black">
                Project Highlights
              </h4>
            </div>
            
            <ul className="space-y-8">
              {[
                "Lavish 30,000 sq.ft. Clubhouse",
                "40% Open Spaces",
                "High Ceilings (11.3 ft)",
                "Strategic Shankarpally Location"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-5 group">
                  <CheckCircle2 size={24} className="text-zinc-200 group-hover:text-[#b4945c] transition-colors shrink-0" />
                  <span className="text-zinc-600 text-lg font-light border-b border-zinc-50 w-full pb-5">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>*/}
      </div>
    </section>
  );
}