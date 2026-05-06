"use client";
import { useState } from 'react';
import { X, User, Phone, Mail, ChevronDown, Download, Check, Home, ArrowRight } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function DownloadModal({ isOpen, onClose, title }: DownloadModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-[600px] bg-white rounded-[40px] p-8 md:p-12 shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button onClick={() => { onClose(); setIsSubmitted(false); }} className="absolute top-8 right-8 text-zinc-400 hover:text-black">
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-normal text-zinc-900 mb-4">{title}</h2>
            <p className="text-zinc-500 font-light mb-12">Fill in your details to download the exclusive brochure.</p>

            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              <div className="flex items-center gap-4 border-b border-zinc-100 pb-4">
                <User size={20} className="text-zinc-400" />
                <input required type="text" placeholder="Your Name" className="w-full bg-transparent outline-none text-lg font-light" />
              </div>

              <div className="flex items-center gap-4 border-b border-zinc-100 pb-4">
                <div className="flex items-center gap-2 text-zinc-400 border-r border-zinc-100 pr-4">
                  <span className="text-sm font-bold">IN +91</span>
                  <ChevronDown size={14} />
                </div>
                <input required type="tel" placeholder="Phone Number" className="w-full bg-transparent outline-none text-lg font-light" />
              </div>

              <div className="flex items-center gap-4 border-b border-zinc-100 pb-4">
                <Mail size={20} className="text-zinc-400" />
                <input required type="email" placeholder="Email Address" className="w-full bg-transparent outline-none text-lg font-light" />
              </div>

              <div className="flex items-start gap-3">
                <input required type="checkbox" className="mt-1 accent-black" />
                <p className="text-[10px] text-zinc-400 leading-relaxed font-light">
                  Disclaimer: I authorize Ankura Homes and its representatives to Call, SMS, Email or WhatsApp me...
                </p>
              </div>

              <button className="w-full bg-black text-white py-6 rounded-full flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-[11px] hover:opacity-90 transition-all">
                {title} <Download size={18} />
              </button>
            </form>
          </div>
        ) : (
          /* THANK YOU PAGE STATE */
          <div className="text-center py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check size={40} />
            </div>
            <h2 className="text-5xl font-normal text-zinc-900 mb-6">Thank You!</h2>
            <p className="text-zinc-500 text-lg font-light mb-12 max-w-sm mx-auto">
              We have successfully received your details. Our team will get back to you shortly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => { onClose(); setIsSubmitted(false); }} className="w-full sm:w-auto border border-zinc-200 px-8 py-4 rounded-full flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all">
                <Home size={16} /> Back to Home
              </button>
              <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                Explore Projects <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}