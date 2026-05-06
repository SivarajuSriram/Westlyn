"use client";
import { useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DownloadModal from '@/components/DownloadModal';
import Overview from '@/components/Overview';
import Amenities from '@/components/Amenities';
import Plans from '@/components/Plans';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StatsSection from '@/components/Stats';
import Specifications from '@/components/Specifications';

export default function Home() {
  const [modal, setModal] = useState({ isOpen: false, title: '' });
  
  const homeRef = useRef(null);
  const overviewRef = useRef(null);
  const amenitiesRef = useRef(null);
  const plansRef = useRef(null);
  const galleryRef = useRef(null);
  const locationRef = useRef(null);
  const contactRef = useRef(null);

  const openDownload = (title: string) => setModal({ isOpen: true, title });

  return (
    <main>
      <Navbar refs={{ home: homeRef, overview: overviewRef, amenities: amenitiesRef, plans: plansRef, gallery: galleryRef, location: locationRef, contact: contactRef}} />
      
      <section ref={homeRef}><Hero onDownload={() => openDownload('Download Brochure')} /></section>
      <StatsSection/>
      <section ref={overviewRef}><Overview /></section>
      <section ref={plansRef}><Plans onDownload={() => openDownload('Download Floor Plans')} /></section>
      <section ref={amenitiesRef}><Amenities /></section>
      <section ref={galleryRef}><Gallery /></section>
      <Specifications/>
      <section ref={locationRef}><Location /></section>
      <section ref={contactRef}><ContactSection/></section>
      <Footer/>
      
      <DownloadModal 
        isOpen={modal.isOpen} 
        onClose={() => setModal({ ...modal, isOpen: false })} 
        title={modal.title} 
      />
    </main>
  );
}