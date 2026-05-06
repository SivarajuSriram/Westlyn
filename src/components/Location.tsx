import { MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Location() {
  const landmarks = [
    { name: "Neopolis", dist: "25 Mins" },
    { name: "Kandi Chevella Highway", dist: "300 Feet" },
    { name: "Kokapet", dist: "Easy Access" },
    { name: "Shankarpally Junction", dist: "Nearby" },
    { name: "Financial District", dist: "Quick Access" },
  ];

  return (
    <section id="location" className="w-full bg-black py-32 font-sans">
      <div className="w-full px-8 md:px-24">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Left: Info */}
          <div className="space-y-12">
            <h2 className="text-7xl font-normal text-white">Location</h2>
            <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-xl">
              Strategically located to provide the best connectivity while keeping you away from the noise. A perfect balance of accessibility and serenity.
            </p>
            
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest block mb-4">Nearby Landmarks</span>
              {landmarks.map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-4 text-white">
                    <MapPin size={18} className="text-zinc-500" />
                    <span className="text-lg font-light">{item.name}</span>
                  </div>
                  <span className="bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-tighter">
                    {item.dist}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Map */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-full min-h-[600px] rounded-[50px] overflow-hidden border border-white/10 shadow-2xl">
            {/* Map Placeholder - Replace with Google Maps Embed */}
            <div className="absolute inset-0 bg-zinc-800">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15227.823365630846!2d78.33092629613907!3d17.41390671000186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94788f8c70c5%3A0xab6ff27f0783ae19!2sNanakramguda%2C%20Telangana!5e0!3m2!1sen!2sin!4v1778072969828!5m2!1sen!2sin" width="600" height="800" loading="lazy"></iframe>
            </div>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
              <button className="bg-white text-black px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-2xl">
                View On Map
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}