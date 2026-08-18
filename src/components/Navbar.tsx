import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Sparkles, ChevronRight, Lock, LayoutDashboard } from 'lucide-react';
import { LogoPlaceholder } from './LogoPlaceholder';
import { useSchoolContent } from '../context/SchoolContext';

export const Navbar: React.FC = () => {
  const { schoolInfo, isAdminLoggedIn, setCurrentView, setIsLoginModalOpen } = useSchoolContent();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  const navLinks = [
    { name: 'Beranda', href: '#beranda', id: 'beranda' },
    { name: 'Tentang Sekolah', href: '#tentang', id: 'tentang' },
    { name: 'Visi & Misi', href: '#visi-misi', id: 'visi-misi' },
    { name: 'Program Keahlian', href: '#program', id: 'program' },
    { name: 'Galeri', href: '#galeri', id: 'galeri' },
    { name: 'Kontak', href: '#kontak', id: 'kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Intersection detection for nav highlights
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
      setActiveSection(targetId);
    }
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-red-900 text-white text-xs py-2 px-4 border-b border-red-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 bg-red-800 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-red-700">
              <Sparkles className="w-3 h-3 text-amber-300" /> {schoolInfo.name}
            </span>
            <span className="text-red-100 font-medium truncate max-w-xl">{schoolInfo.address}</span>
          </div>
          <div className="flex items-center gap-4 text-red-200 text-xs">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <PhoneCall className="w-3 h-3 text-amber-300" /> {schoolInfo.phone}
            </span>

            {/* Quick Admin Trigger */}
            <button
              onClick={() => {
                if (isAdminLoggedIn) {
                  setCurrentView('admin');
                } else {
                  setIsLoginModalOpen(true);
                }
              }}
              className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-white/20 transition-colors cursor-pointer"
            >
              {isAdminLoggedIn ? (
                <>
                  <LayoutDashboard className="w-3 h-3 text-amber-300" />
                  <span>Dashboard Admin</span>
                </>
              ) : (
                <>
                  <Lock className="w-3 h-3 text-amber-300" />
                  <span>Login Admin</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-red-100'
            : 'bg-white py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & School Name */}
          <a
            href="#beranda"
            onClick={(e) => handleNavClick(e, '#beranda')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <LogoPlaceholder variant="compact" />
            <div className="flex flex-col border-l border-gray-200 pl-3">
              <span className="text-base sm:text-lg font-extrabold text-gray-900 tracking-tight leading-none group-hover:text-red-600 transition-colors">
                {schoolInfo.name}
              </span>
              <span className="text-[11px] font-semibold text-red-600 tracking-wide uppercase mt-1">
                Kabupaten Simalungun
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                    isActive
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-red-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            {isAdminLoggedIn ? (
              <button
                onClick={() => setCurrentView('admin')}
                className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-black text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <LayoutDashboard className="w-4 h-4 text-amber-400" />
                <span>Panel Admin</span>
              </button>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs px-3.5 py-2.5 rounded-xl transition-all cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-red-600" />
                <span>Admin</span>
              </button>
            )}

            <a
              href="#kontak"
              onClick={(e) => handleNavClick(e, '#kontak')}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span>Hubungi Kami</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-700 hover:text-red-600 hover:bg-red-50 focus:outline-none transition-colors border border-gray-200"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[105px] bg-white border-b border-gray-200 shadow-xl z-50 animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-3 pb-6 space-y-2 max-w-7xl mx-auto">
              <div className="p-2 mb-2 bg-red-50 rounded-lg border border-red-100 flex items-center justify-between">
                <LogoPlaceholder variant="compact" />
                <span className="text-xs font-bold text-red-800">{schoolInfo.name.toUpperCase()}</span>
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-red-600 text-white font-bold shadow-sm'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  </a>
                );
              })}

              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (isAdminLoggedIn) {
                      setCurrentView('admin');
                    } else {
                      setIsLoginModalOpen(true);
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-bold text-sm py-3 rounded-xl"
                >
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span>{isAdminLoggedIn ? 'Buka Panel Admin' : 'Login Admin Website'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
