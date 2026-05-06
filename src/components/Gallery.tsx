"use client";
import Image from 'next/image';

export default function Gallery() {
  // Dummy images representing high-end villa interiors and exteriors
  const images = {
    main: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    entry: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    bedroom: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop",
    theatre: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop",
    living: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop",
  };

  return (
    <section id="gallery" className="w-full bg-white py-20 md:py-32 font-sans overflow-hidden">
      <div className="w-full px-6 md:px-24">
        {/* Adjusted title to match the Quiet Luxury aesthetic */}
        <h2 className="text-5xl md:text-8xl font-normal text-zinc-900 mb-12 md:mb-20 tracking-tighter uppercase">
          Gallery
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 h-auto lg:h-[800px]">
          {/* Main Large Image - Left Side */}
          <div className="lg:col-span-7 relative rounded-[24px] md:rounded-[40px] overflow-hidden shadow-sm group cursor-pointer aspect-[4/5] lg:aspect-auto">
            <Image 
              src={images.main} 
              alt="Villa Exterior" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          
          {/* Right Column Grid - 2x2 Bento */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6">
            <div className="relative rounded-[20px] md:rounded-[30px] overflow-hidden aspect-square lg:aspect-auto group cursor-pointer shadow-sm">
              <Image 
                src={images.entry} 
                alt="Entry Way" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
            </div>
            <div className="relative rounded-[20px] md:rounded-[30px] overflow-hidden aspect-square lg:aspect-auto group cursor-pointer shadow-sm">
              <Image 
                src={images.bedroom} 
                alt="Master Bedroom" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
            </div>
            <div className="relative rounded-[20px] md:rounded-[30px] overflow-hidden aspect-square lg:aspect-auto group cursor-pointer shadow-sm">
              <Image 
                src={images.theatre} 
                alt="Home Theatre" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
            </div>
            <div className="relative rounded-[20px] md:rounded-[30px] overflow-hidden aspect-square lg:aspect-auto group cursor-pointer shadow-sm">
              <Image 
                src={images.living} 
                alt="Living Area" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              {/* Overlay with luxury tracking */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-500">
                <span className="text-white text-xs md:text-xl font-bold uppercase tracking-[0.4em]">
                  +4 More
                </span>
                <div className="w-8 h-[1px] bg-white/50 mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}