import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { MajorsSection } from './components/MajorsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-red-600 selection:text-white">
      {/* Sticky & Responsive Navigation Bar */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        {/* 1. Beranda (Hero Section) */}
        <HeroSection />

        {/* 2. Tentang Sekolah */}
        <AboutSection />

        {/* 3. Visi & Misi */}
        <VisionMissionSection />

        {/* 4. Program Keahlian */}
        <MajorsSection />

        {/* 5. Galeri Foto */}
        <GallerySection />

        {/* 6. Kontak & Lokasi */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
