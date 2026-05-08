"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Search, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface PlansProps {
  onDownload: (title: string) => void;
}

export default function Plans({ onDownload }: PlansProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const masterPlanImg = "/plans/master-plan/MasterPlan.webp";

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // 1. Scroll Lock Logic
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isZoomed]);

  const resetTransform = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleClose = () => {
    setIsZoomed(false);
    resetTransform();
  };

  const handleDoubleClick = () => {
    if (scale > 1) resetTransform();
    else setScale(2.5);
  };

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

  return (
    <>
      {/* REDUCED PADDING: from py-24 md:py-32 to py-12 md:py-20 */}
      <section id="floor-plans" className="w-full bg-zinc-50 py-12 md:py-20 font-sans overflow-hidden">
        <div className="w-full px-8 md:px-24">
          {/* REDUCED MARGIN: from mb-16 md:mb-24 to mb-8 md:mb-12 */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-8 md:mb-12">
            <h2 className="text-2xl md:text-5xl font-normal text-zinc-900 tracking-tighter uppercase leading-none">
              Plans
            </h2>
          </div>

          <div className="w-full flex flex-col items-center">
            <div 
              onClick={() => setIsZoomed(true)}
              className="relative w-full max-w-5xl aspect-[16/10] bg-white rounded-[40px] overflow-hidden border border-zinc-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] group cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
            >
              <Image 
                src={masterPlanImg} 
                alt="Westlyn Master Plan" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="bg-white p-5 rounded-full shadow-2xl text-zinc-900 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                   <Search size={28} />
                 </div>
              </div>
            </div>

            {/* REDUCED MARGIN: from mt-16 md:mt-24 to mt-10 md:mt-12 */}
            <div className="mt-10 md:mt-12">
              <button 
                onClick={() => onDownload('Download Floor Plans')}
                className="bg-zinc-900 font-geologica text-white px-14 py-6 rounded-full text-[11px] md:text-[13px] font-bold uppercase tracking-[0.4em] hover:bg-black transition-all shadow-2xl active:scale-95"
              >
                Download Floor Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Image Lightbox - No Changes */}
      {isZoomed && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex flex-col animate-in fade-in duration-300">
          
          <div className="flex justify-end items-center px-6 py-6 text-white/80">
            <div className="flex items-center gap-6">
              <button onClick={() => setScale(Math.min(scale + 0.5, 5))} className="hover:text-white transition-colors"><ZoomIn size={24} /></button>
              <button onClick={() => setScale(Math.max(scale - 0.5, 1))} className="hover:text-white transition-colors"><ZoomOut size={24} /></button>
              <button onClick={resetTransform} className="hover:text-white transition-colors"><RotateCcw size={24} /></button>
              <button onClick={handleClose} className="hover:text-white transition-colors ml-4"><X size={36} strokeWidth={1} /></button>
            </div>
          </div>

          <div 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onDoubleClick={handleDoubleClick}
            className={`relative flex-1 flex items-center justify-center overflow-hidden touch-none ${scale > 1 ? 'cursor-grab' : 'cursor-default'} ${isDragging ? 'cursor-grabbing' : ''}`}
          >
            <div 
              className="relative w-full h-full transition-transform duration-200 ease-out flex items-center justify-center"
              style={{ 
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
              }}
            >
              <div className="relative w-screen h-screen px-4 md:px-20 py-10">
                <Image 
                  src={masterPlanImg} 
                  alt="Master Plan Full View" 
                  fill
                  className="object-contain pointer-events-none select-none p-4 md:p-16"
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}