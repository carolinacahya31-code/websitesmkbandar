import React, { useState } from 'react';
import { Camera, Image as ImageIcon, X, ChevronLeft, ChevronRight, Calendar, Tag, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = ['Semua', 'Gedung & Fasilitas', 'KBM & Praktik', 'Ekstrakurikuler', 'Prestasi & Event'];

  const filteredItems = activeCategory === 'Semua'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const activePhoto = selectedPhotoIndex !== null ? filteredItems[selectedPhotoIndex] : null;

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
    }
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev! === filteredItems.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="galeri" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Camera className="w-4 h-4" /> Dokumentasi Kegiatan
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Galeri <span className="text-red-600">SMK Negeri 1 Bandar</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Merekam momen kebersamaan, fasilitas pembelajaran, praktikum kejuruan, serta prestasi gemilang para siswa.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-red-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative bg-gray-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                
                <div className="flex justify-between items-center">
                  <span className="bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold leading-snug">{item.title}</h3>
                  <p className="text-xs text-gray-300 line-clamp-1">{item.description}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition-colors cursor-pointer z-50"
            aria-label="Tutup Galeri"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev Button */}
          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition-colors cursor-pointer z-50 hidden sm:block"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next Button */}
          <button
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition-colors cursor-pointer z-50 hidden sm:block"
            aria-label="Foto Selanjutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Photo Content Card */}
          <div className="max-w-4xl w-full bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-800 text-left flex flex-col max-h-[85vh]">
            <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center min-h-[300px]">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="max-h-[60vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-gray-900 space-y-3 border-t border-gray-800 text-white">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-md uppercase">
                  {activePhoto.category}
                </span>
                {activePhoto.date && (
                  <span className="text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {activePhoto.date}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-white">{activePhoto.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{activePhoto.description}</p>
            </div>
          </div>

        </div>
      )}
    </section>
  );
};
