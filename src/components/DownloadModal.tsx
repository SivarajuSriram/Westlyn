"use client";
import { X } from 'lucide-react';
import LeadForm from './LeadForm';
import { useEffect } from 'react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function DownloadModal({ isOpen, onClose, title }: DownloadModalProps) {

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* Exactly matches the design of your inline card */}
      <div className="relative w-full max-w-[600px] bg-white p-10 md:p-14 rounded-[50px] shadow-[0_50px_100px_rgba(0,0,0,0.04)] border border-zinc-50 animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-10 right-10 text-zinc-300 hover:text-black transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <h3 className="text-3xl font-normal text-zinc-900 mb-2 tracking-tighter uppercase">{title}</h3>
          <p className="text-zinc-400 mb-12 font-geologica font-light">Fill in your details to proceed.</p>
          
          {/* Shared Form Logic */}
          <LeadForm buttonText="Download Brochure" />
        </div>
      </div>
    </div>
  );
}