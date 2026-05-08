"use client";
import React, { useState, useEffect, useRef, useMemo, memo } from 'react';
import { User, Mail, ChevronDown, Download, Check, Search, Send, Loader2 } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en.json';
import { useRouter } from 'next/navigation'; 

const CountryItem = memo(({ country, onSelect }: { country: any; onSelect: (code: string) => void }) => (
  <div 
    onClick={() => onSelect(country.code)}
    className="p-3 text-zinc-600 text-xs hover:bg-zinc-50 hover:text-black cursor-pointer transition-colors flex items-center gap-4"
  >
    <img src={country.flag} alt="" className="w-5 h-3.5 object-cover" />
    <span className="flex-1 truncate">{country.name}</span>
    <span className="opacity-40 font-mono">+{country.dial}</span>
  </div>
));

interface LeadFormProps {
  buttonText: string;
  onSuccess?: () => void;
}

export default function LeadForm({ buttonText, onSuccess }: LeadFormProps) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false); 
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [country, setCountry] = useState('IN');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const allCountries = useMemo(() => {
    return getCountries().map((code) => ({
      code,
      name: en[code],
      flag: `https://flagcdn.com/w40/${code.toLowerCase()}.png`,
      dial: getCountryCallingCode(code)
    })).sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const selectedCountry = useMemo(() => {
    return allCountries.find(c => c.code === country) || allCountries.find(c => c.code === 'IN');
  }, [country, allCountries]);

  const filteredCountries = useMemo(() => {
    return allCountries.filter(c => 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.dial.includes(searchTerm)
    );
  }, [allCountries, searchTerm]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: `+${selectedCountry?.dial} ${formData.get('phone')}`,
      country: selectedCountry?.name,
      timestamp: new Date().toLocaleString()
    };

    try {
      await fetch('YOUR_PABBLY_WEBHOOK_URL', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data),
      });

      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'YOUR_SERVICE_ID',
          template_id: 'YOUR_TEMPLATE_ID',
          user_id: 'YOUR_PUBLIC_KEY',
          template_params: data
        }),
      });
      
      if (onSuccess) onSuccess();
      router.push('/thank-you');
      
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    /* REDUCED VERTICAL SPACING: from space-y-10 to space-y-6 */
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Input - REDUCED PADDING: from pb-4 to pb-3 */}
      <div className="flex items-center gap-4 border-b border-zinc-100 pb-3">
        <input required name="name" type="text" placeholder="Your Name" className="w-full bg-transparent text-lg font-geologica font-light outline-none placeholder:text-zinc-300" />
      </div>

      {/* Phone Input - REDUCED PADDING: from pb-4 to pb-3 */}
      <div className="flex items-center gap-4 border-b border-zinc-100 pb-3 relative">
        <div className="relative" ref={dropdownRef}>
          <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 text-zinc-400 cursor-pointer pr-4 border-r border-zinc-100 group">
            <img src={selectedCountry?.flag} alt="" className="w-5 h-3.5 object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all" />
            <span className="text-sm font-bold text-black">+{selectedCountry?.dial}</span>
            <ChevronDown size={40} className={`text-black transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </div>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute bottom-full left-0 w-64 bg-white border border-zinc-100 shadow-2xl z-50 mb-4 rounded-2xl overflow-hidden">
                <div className="p-3 bg-zinc-50 flex items-center gap-2">
                  <Search size={14} className="text-zinc-400" />
                  <input autoFocus type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-transparent border-none outline-none text-xs w-full" />
                </div>
                <div className="max-h-48 overflow-y-auto scrollbar-hide">
                  {filteredCountries.map(c => <CountryItem key={c.code} country={c} onSelect={(code) => { setCountry(code); setIsDropdownOpen(false); }} />)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <input required name="phone" type="tel" placeholder="Phone Number" className="w-full bg-transparent text-lg font-geologica font-light outline-none placeholder:text-zinc-300 tracking-wider" />
      </div>

      {/* Email Input - REDUCED PADDING: from pb-4 to pb-3 */}
      <div className="flex items-center gap-4 border-b border-zinc-100 pb-3">
        <input required name="email" type="email" placeholder="Email Address" className="w-full font-geologica bg-transparent text-lg font-light outline-none placeholder:text-zinc-300" />
      </div>

      {/* Disclaimer Checkbox - FIXED: Removed justify-center to force left-alignment */}
      <div className="flex items-start gap-4">
        <input required type="checkbox" checked={isAuthorized} onChange={(e) => setIsAuthorized(e.target.checked)} className="mt-1 h-4 w-4 accent-black rounded-sm border-zinc-200 cursor-pointer" />
        <p className="text-[11px] md:text-[12px] text-zinc-400 font-geologica font-light leading-snug select-none cursor-pointer text-left">
          Disclaimer: I authorize Westlyn and its representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DND/NDNC.
        </p>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={!isAuthorized || isPending}
        className="w-full bg-[#1A232E] text-white py-5 rounded-full flex items-center justify-center gap-3 font-geologica font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-all group disabled:opacity-30 disabled:cursor-not-allowed"
      >
        {isPending ? <Loader2 className="animate-spin" size={18} /> : (
          <>
            {buttonText}
            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}