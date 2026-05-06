"use client";
import { useState } from 'react';
import { Phone, Mail, ChevronDown, Download, MapPin } from 'lucide-react';
import DownloadModal from './DownloadModal'; // Ensure the path is correct

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const handleTriggerModal = (e: React.FormEvent, title: string) => {
    e.preventDefault();
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <section id="contact" className="w-full bg-zinc-50 py-32 font-sans">
      <div className="w-full px-8 md:px-24 flex flex-col lg:flex-row gap-20 items-center">
        
        {/* Left Side: Contact Information */}
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-8xl font-normal text-zinc-900 leading-tight">
              Start your journey
            </h2>
            <p className="text-zinc-500 text-xl font-light max-w-lg leading-relaxed">
              Experience the pinnacle of luxury living. Reach out to our team for a personalized site visit and exclusive brochure.
            </p>
          </div>

          <div className="space-y-10">
            {/* Phone Info */}
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-zinc-100 transition-transform group-hover:scale-110">
                <Phone size={22} className="text-zinc-900" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold block mb-1">
                  Call Us
                </span>
                <span className="text-2xl font-medium text-zinc-900">+91 83676 70909</span>
              </div>
            </div>

            {/* Email Info */}
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-zinc-100 transition-transform group-hover:scale-110">
                <Mail size={22} className="text-zinc-900" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold block mb-1">
                  Email Us
                </span>
                <span className="text-2xl font-medium text-zinc-900">sales@ankurahomes.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Request Form Card */}
        <div className="w-full lg:w-[580px]">
          <div className="bg-white p-10 md:p-14 rounded-[50px] shadow-[0_50px_100px_rgba(0,0,0,0.04)] border border-zinc-50">
            <h3 className="text-3xl font-normal text-zinc-900 mb-2">Request Details</h3>
            <p className="text-zinc-400 mb-12 font-light">Fill in your details and we'll get back to you shortly.</p>
            
            <form 
              onSubmit={(e) => handleTriggerModal(e, "Enquiry Received")} 
              className="space-y-10"
            >
              {/* Name Input */}
              <div className="flex items-center gap-4 border-b border-zinc-100 pb-4">
                <input 
                  required 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent text-lg font-light outline-none placeholder:text-zinc-300" 
                />
              </div>
              
              {/* Phone Input with Country Code */}
              <div className="flex items-center gap-4 border-b border-zinc-100 pb-4">
                <div className="flex items-center gap-2 text-zinc-400 border-r border-zinc-100 pr-4">
                  <span className="text-sm font-bold">IN +91</span>
                  <ChevronDown size={14} />
                </div>
                <input 
                  required 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-transparent text-lg font-light outline-none placeholder:text-zinc-300" 
                />
              </div>

              {/* Email Input */}
              <div className="flex items-center gap-4 border-b border-zinc-100 pb-4">
                <input 
                  required 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent text-lg font-light outline-none placeholder:text-zinc-300" 
                />
              </div>

              {/* Disclaimer Checkbox */}
              <div className="flex items-start gap-4">
                <input 
                  required 
                  type="checkbox" 
                  className="mt-1.5 h-4 w-4 accent-black rounded-sm border-zinc-200" 
                />
                <p className="text-[10px] text-zinc-400 leading-relaxed font-light">
                  Disclaimer: I authorize Ankura Homes and its representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DND/NDNC.
                </p>
              </div>

              {/* Submit Button - Triggers Modal */}
              <button 
                type="submit"
                className="w-full bg-[#1A232E] text-white py-6 rounded-full flex items-center justify-center gap-3 font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-all group"
              >
                Submit Request
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Imported DownloadModal Component */}
      <DownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={modalTitle} 
      />
    </section>
  );
} 