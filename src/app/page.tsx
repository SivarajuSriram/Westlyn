"use client";
import Image from 'next/image';
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
  // 1. Only ONE state for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  
  const homeRef = useRef(null);
  const overviewRef = useRef(null);
  const amenitiesRef = useRef(null);
  const plansRef = useRef(null);
  const galleryRef = useRef(null);
  const locationRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    overview: overviewRef,
    amenities: amenitiesRef,
    plans: plansRef,
    gallery: galleryRef,
    location: locationRef,
    contact: contactRef,
  };

  // 2. Single function to handle all opens
  const handleOpenModal = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <main className="relative min-h-screen">
        <Navbar refs={sectionRefs} />
        
        {/* Attach handleOpenModal to all components */}
        <section ref={homeRef}>
          <Hero onDownload={handleOpenModal} />
        </section>

        <StatsSection/>
        <section ref={overviewRef}><Overview /></section>

        <section ref={plansRef}>
          <Plans onDownload={handleOpenModal} />
        </section>

        <section ref={amenitiesRef}>
          <Amenities onDownload={handleOpenModal} />
        </section>

        <section ref={galleryRef}><Gallery /></section>
        <section ref={locationRef}><Location /></section>
        <section ref={contactRef}><ContactSection/></section>
        
        <Footer refs={sectionRefs}/>

      
      {/* 3. Correct wiring: Both read and write to the SAME state */}
      <DownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={modalTitle} 
      />
    </main>
  );
}