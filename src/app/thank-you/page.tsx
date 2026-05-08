"use client";
import Link from 'next/link';
import { Check, ArrowLeft, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThankYouPage() {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-[#FAFAFA] px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="w-24 h-24 bg-[#1A232E] text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
          <Check size={48} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-normal text-zinc-900 mb-6 tracking-tighter uppercase">
          Thank You
        </h1>
        
        <p className="text-zinc-500 font-light text-xl max-w-md mx-auto leading-relaxed mb-12">
          Your request has been received. You can now download the project details below.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Download Brochure Button */}
          <a 
            href="/Westlyn_Brochure.pdf" // Put your PDF in public folder
            download="Westlyn_Brochure"
            className="bg-[#1A232E] text-white px-10 py-5 rounded-full flex items-center gap-3 font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-all shadow-xl"
          >
            Download Brochure
            <Download size={16} />
          </a>

          {/* Back Link */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-black transition-colors uppercase tracking-[0.3em] text-[11px] font-bold border-b border-transparent hover:border-zinc-200 pb-1"
          >
            <ArrowLeft size={16} />
            Back to Westlyn
          </Link>
        </div>
      </motion.div>
    </main>
  );
}