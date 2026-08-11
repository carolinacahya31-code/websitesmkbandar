import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowUp, GraduationCap } from 'lucide-react';
import { SCHOOL_INFO, MAJORS } from '../data/schoolData';
import { LogoPlaceholder } from './LogoPlaceholder';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-red-950 via-red-900 to-black text-white pt-16 pb-8 border-t border-red-800 text-left relative overflow-hidden">
      {/* Decorative Blur Ambient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-red-800/60">
          
          {/* Column 1: Brand & Logo Placeholder */}
          <div className="lg:col-span-4 space-y-4">
            <LogoPlaceholder variant="dark" />
            
            <div>
              <h3 className="text-xl font-black text-white tracking-tight">
                SMK Negeri 1 Bandar
              </h3>
              <p className="text-xs text-red-300 font-semibold uppercase tracking-wider mt-0.5">
                Kabupaten Simalungun, Sumatera Utara
              </p>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              Mewujudkan generasi siap kerja, kreatif, dan berakhlak mulia melalui pendidikan kejuruan berstandar nasional dan kemitraan dunia usaha/dunia industri.
            </p>

            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 bg-red-900/80 border border-red-700/60 px-3 py-1.5 rounded-xl text-xs font-mono text-amber-300">
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>NPSN: {SCHOOL_INFO.npsn} | {SCHOOL_INFO.accreditation}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider border-b border-red-800/80 pb-2 inline-block">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#beranda" onClick={(e) => handleNavClick(e, '#beranda')} className="hover:text-amber-300 transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#tentang" onClick={(e) => handleNavClick(e, '#tentang')} className="hover:text-amber-300 transition-colors">Tentang Sekolah</a>
              </li>
              <li>
                <a href="#visi-misi" onClick={(e) => handleNavClick(e, '#visi-misi')} className="hover:text-amber-300 transition-colors">Visi & Misi</a>
              </li>
              <li>
                <a href="#program" onClick={(e) => handleNavClick(e, '#program')} className="hover:text-amber-300 transition-colors">Program Keahlian</a>
              </li>
              <li>
                <a href="#galeri" onClick={(e) => handleNavClick(e, '#galeri')} className="hover:text-amber-300 transition-colors">Galeri Foto</a>
              </li>
              <li>
                <a href="#kontak" onClick={(e) => handleNavClick(e, '#kontak')} className="hover:text-amber-300 transition-colors">Kontak & Lokasi</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Program Keahlian Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider border-b border-red-800/80 pb-2 inline-block">
              Program Keahlian
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {MAJORS.map((m) => (
                <li key={m.id} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <a href="#program" onClick={(e) => handleNavClick(e, '#program')} className="hover:text-amber-300 transition-colors">
                    {m.name} ({m.code})
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider border-b border-red-800/80 pb-2 inline-block">
              Kontak Resmi
            </h4>
            
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-400 shrink-0" />
                <span className="truncate">{SCHOOL_INFO.email}</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase block mb-2">Media Sosial:</span>
              <div className="flex items-center gap-2">
                <a
                  href={SCHOOL_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-red-900 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook SMKN 1 Bandar"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={SCHOOL_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-red-900 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram SMKN 1 Bandar"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={SCHOOL_INFO.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-red-900 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                  aria-label="YouTube SMKN 1 Bandar"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            <a
              href="#kontak"
              onClick={(e) => handleNavClick(e, '#kontak')}
              className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-sm transition-colors text-center block cursor-pointer"
            >
              Hubungi Kami
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            © 2026 SMK Negeri 1 Bandar. Semua Hak Dilindungi.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-gray-300 hover:text-amber-300 transition-colors cursor-pointer bg-red-900/60 px-3 py-1.5 rounded-lg border border-red-800"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
