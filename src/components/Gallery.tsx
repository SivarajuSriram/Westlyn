"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Interaction State
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);

  const allImages = [
    "/gallery/gallery-1.webp",
    "/gallery/gallery-2.webp",
    "/gallery/gallery-3.webp",
    "/gallery/gallery-4.webp",
    "/gallery/gallery-5.webp",
    "/gallery/gallery-6.webp",
    "/gallery/gallery-7.webp",
    "/gallery/gallery-8.webp",
    "/gallery/gallery-9.webp",
    "/gallery/gallery-10.webp",
  ];

  const resetTransform = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    resetTransform();
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
    resetTransform();
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    resetTransform();
  };

  // Zoom Logic: Mouse Wheel
  const handleWheel = (e: React.WheelEvent) => {
    if (!isOpen) return;
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(scale + delta, 1), 5);
    setScale(newScale);
    if (newScale === 1) setPosition({ x: 0, y: 0 });
  };

  // Zoom Logic: Double Click
  const handleDoubleBox = () => {
    if (scale > 1) resetTransform();
    else setScale(2.5);
  };

  // Pan Logic: Dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    /* REDUCED PADDING: from py-24 md:py-40 to py-12 md:py-20 */
    <section id="gallery" className="w-full bg-zinc-50 py-12 md:py-20 font-sans overflow-hidden">
      <div className="w-full px-8 md:px-24">
        {/* REDUCED MARGIN: from mb-20 md:mb-28 to mb-10 md:mb-12 */}
        <h2 className="text-2xl md:text-5xl font-normal text-zinc-900 mb-10 md:mb-12 tracking-tighter uppercase">
          Gallery
        </h2>
        
        {/* REDUCED GAP: from gap-6 md:gap-10 to gap-4 md:gap-6 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 h-auto lg:h-[750px]">
          {/* Main Big Image */}
          <div 
            onClick={() => openModal(0)} 
            className="lg:col-span-7 relative rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group cursor-pointer aspect-[4/5] lg:aspect-auto"
          >
            <Image src={allImages[0]} alt="Villa Exterior" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          
          {/* Small Images Grid - REDUCED GAP: from gap-6 md:gap-10 to gap-4 md:gap-6 */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6">
            <div onClick={() => openModal(1)} className="relative rounded-[30px] overflow-hidden aspect-square lg:aspect-auto group cursor-pointer shadow-md">
              <Image src={allImages[1]} alt="Entry Way" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
            <div onClick={() => openModal(2)} className="relative rounded-[30px] overflow-hidden aspect-square lg:aspect-auto group cursor-pointer shadow-md">
              <Image src={allImages[2]} alt="Master Bedroom" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
            <div onClick={() => openModal(3)} className="relative rounded-[30px] overflow-hidden aspect-square lg:aspect-auto group cursor-pointer shadow-md">
              <Image src={allImages[3]} alt="Home Theatre" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
            <div onClick={() => openModal(4)} className="relative rounded-[30px] overflow-hidden aspect-square lg:aspect-auto group cursor-pointer shadow-md">
              <Image src={allImages[4]} alt="Living Area" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
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

      {/* Advanced Lightbox Modal (No Changes) */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col animate-in fade-in duration-300">
          <div className="flex justify-between items-center px-6 py-6 text-white/80">
            <div className="text-[10px] uppercase tracking-widest font-geologica font-light hidden md:block">
              TIP: USE MOUSE WHEEL, DOUBLE-CLICK OR PINCH TO ZOOM. DRAG TO PAN.
            </div>
            <div className="flex items-center gap-6 ml-auto">
              <button onClick={() => setScale(Math.min(scale + 0.5, 5))} className="hover:text-white transition-colors"><ZoomIn size={24} /></button>
              <button onClick={() => setScale(Math.max(scale - 0.5, 1))} className="hover:text-white transition-colors"><ZoomOut size={24} /></button>
              <button onClick={resetTransform} className="hover:text-white transition-colors"><RotateCcw size={24} /></button>
              <button onClick={closeModal} className="hover:text-white transition-colors ml-4"><X size={36} strokeWidth={1} /></button>
            </div>
          </div>

          <div 
            ref={containerRef}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onDoubleClick={handleDoubleBox}
            className={`relative flex-1 flex items-center justify-center overflow-hidden p-0 touch-none ${scale > 1 ? 'cursor-grab' : 'cursor-default'} ${isDragging ? 'cursor-grabbing' : ''}`}
          >
            <button onClick={prevImage} className="absolute left-4 md:left-10 z-20 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 hidden md:flex">
              <ChevronLeft size={36} strokeWidth={1} />
            </button>

            <div 
              className="relative w-full h-full transition-transform duration-200 ease-out flex items-center justify-center"
              style={{ 
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
              }}
            >
              <div className="relative w-[95vw] h-[85vh]">
                <Image 
                  src={allImages[currentIndex]} 
                  alt="Gallery image" 
                  fill 
                  unoptimized={true}
                  className="object-contain pointer-events-none select-none"
                  priority
                />
              </div>
            </div>

            <button onClick={nextImage} className="absolute right-4 md:right-10 z-20 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 hidden md:flex">
              <ChevronRight size={36} strokeWidth={1} />
            </button>
          </div>

          <div className="px-10 py-10 flex justify-between items-center border-t border-white/5">
              <div className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-bold">
                {currentIndex + 1} / {allImages.length}
              </div>
              <div className="h-8 w-24 relative opacity-50 grayscale invert">
                 <Image src="/WestlynLogo.svg" alt="Westlyn Logo" fill className="object-contain" />
              </div>
          </div>
        </div>
      )}
    </section>
  );
}