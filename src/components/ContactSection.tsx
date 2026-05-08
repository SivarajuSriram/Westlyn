"use client";
import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import LeadForm from './LeadForm'; 

export default function ContactSection() {
  return (
    /* REDUCED PADDING: from py-24 md:py-40 to py-12 md:py-20 */
    <section id="contact" className="w-full bg-white py-12 md:py-20 font-sans overflow-hidden">
      <div className="w-full px-8 md:px-24 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Column 1: Contact Information (Left Side) - TIGHTENED SPACING */}
        <div className="flex-1 space-y-10 md:space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-5xl font-normal text-zinc-900 leading-[1] tracking-tighter uppercase font-mosseta">
              Let's Connect
            </h2>
            {/* FIXED BOLDNESS: Ensured font-light and text-zinc-500 for a softer visual weight */}
            <p className="text-lg md:text-xl font-geologica font-light max-w-lg leading-relaxed tracking-tight text-zinc-500">
              Discover refined living at its finest. Connect with our team for a personalized site tour and exclusive project brochure. 
            </p>
          </div>

          <div className="space-y-8 md:space-y-10">
            {/* Phone Info - SLIGHTLY REDUCED ICON SIZE */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100 transition-all duration-500 group-hover:bg-zinc-900 group-hover:text-white group-hover:scale-110">
                <Phone size={20} strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-[10px] font-geologica uppercase tracking-[0.4em] text-zinc-400 font-bold block mb-1">
                  Call Us
                </span>
                <span className="text-xl md:text-2xl font-light font-geologica text-zinc-900 tracking-tighter">+91 12345 12345</span>
              </div>
            </div>

            {/* Email Info */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100 transition-all duration-500 group-hover:bg-zinc-900 group-hover:text-white group-hover:scale-110">
                <Mail size={20} strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-[10px] font-geologica uppercase tracking-[0.4em] text-zinc-400 font-bold block mb-1">
                  Email Us
                </span>
                <span className="text-xl font-geologica md:text-2xl font-light text-zinc-900 tracking-tighter">johndoe@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Lead Form Card (Right Side) - TIGHTENED PADDING */}
        <div className="w-full lg:w-[550px] xl:w-[600px] lg:sticky lg:top-32">
          <div className="bg-zinc-50 p-8 md:p-12 rounded-[48px] border border-zinc-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] animate-in fade-in slide-in-from-bottom-10 duration-1000">
            {/* REDUCED MARGIN: from mb-12 to mb-8 */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-normal text-zinc-900 mb-3 font-mosseta tracking-tighter uppercase">Register your interest</h3>
              <p className="text-zinc-500 font-light font-geologica text-base">Please fill in your details and we will get back to you shortly.</p>
            </div>
            
            <LeadForm buttonText="Submit Inquiry" />
          </div>
        </div>

      </div>
    </section>
  );
}