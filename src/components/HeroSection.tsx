import React from 'react';
import { ArrowRight, Award, CheckCircle2, BookOpen, GraduationCap, Building2 } from 'lucide-react';
import { useSchoolContent } from '../context/SchoolContext';
import { LogoPlaceholder } from './LogoPlaceholder';

export const HeroSection: React.FC = () => {
  const { schoolInfo, majors, schoolStats } = useSchoolContent();

  const handleScrollTo = (targetId: string) => {
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
    <section id="beranda" className="relative bg-gray-900 text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image with Dark Red Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1920"
          alt={schoolInfo.name}
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-75"
        />
        {/* Red & Black Rich Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/95 via-red-900/85 to-gray-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Accreditation Badge & Logo Placeholder */}
            <div className="flex flex-wrap items-center gap-3">
              <LogoPlaceholder variant="dark" />
              <span className="inline-flex items-center gap-1.5 bg-red-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-red-400/40 shadow-sm">
                <Award className="w-4 h-4 text-amber-300" />
                <span>{schoolInfo.accreditation}</span>
              </span>
            </div>

            {/* School Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                {schoolInfo.name}
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-medium text-red-100 italic border-l-4 border-red-500 pl-4 py-1 bg-red-950/40 rounded-r-lg">
                "{schoolInfo.tagline}"
              </p>
            </div>

            {/* Short Description */}
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Sekolah Menengah Kejuruan berstandar nasional di Kabupaten Simalungun yang berkomitmen melahirkan lulusan berkompeten di bidang Teknik Otomasi Industri dan Teknik Kimia Industri. Siap bersaing di Industri 4.0 dengan dukungan laboratorium canggih dan kemitraan perusahaan terkemuka.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleScrollTo('tentang')}
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-red-600/30 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Kenali Kami</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => handleScrollTo('program')}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm transition-all cursor-pointer hover:border-white/40"
              >
                <BookOpen className="w-5 h-5 text-red-300" />
                <span>Program Keahlian</span>
              </button>
            </div>

            {/* Key Features Bullet List */}
            <div className="pt-6 border-t border-red-800/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-red-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                <span>Kurikulum Merdeka</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                <span>20 Mitra DUDI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                <span>Sertifikasi BNSP</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Decorative Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600 to-amber-500 opacity-30 blur-xl"></div>
              
              <div className="relative rounded-2xl bg-gray-900/90 border border-red-500/30 p-6 backdrop-blur-md shadow-2xl space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-red-800/50 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">Profil Keunggulan</h3>
                      <p className="text-xs text-red-300">{schoolInfo.name}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-full uppercase">
                    Penerimaan 2026
                  </span>
                </div>

                {/* Card Quick Features Grid */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="bg-red-950/60 border border-red-800/40 p-3 rounded-xl">
                    <span className="text-2xl font-extrabold text-white block">{majors.length}</span>
                    <span className="text-xs text-red-200">Program Keahlian</span>
                  </div>
                  <div className="bg-red-950/60 border border-red-800/40 p-3 rounded-xl">
                    <span className="text-2xl font-extrabold text-white block">
                      {schoolStats[0]?.value || 403}
                    </span>
                    <span className="text-xs text-red-200">Siswa Aktif</span>
                  </div>
                  <div className="bg-red-950/60 border border-red-800/40 p-3 rounded-xl">
                    <span className="text-2xl font-extrabold text-white block">
                      {schoolStats[3]?.value || 88}%
                    </span>
                    <span className="text-xs text-red-200">Serapan Kerja</span>
                  </div>
                  <div className="bg-red-950/60 border border-red-800/40 p-3 rounded-xl">
                    <span className="text-2xl font-extrabold text-amber-400 block">
                      {schoolStats[2]?.value || 20}
                    </span>
                    <span className="text-xs text-red-200">Mitra Industri</span>
                  </div>
                </div>

                {/* Program Keahlian Quick Info Banner */}
                <div className="bg-gradient-to-r from-red-600 to-red-800 p-4 rounded-xl text-left flex items-center justify-between gap-3 shadow-md">
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Program Keahlian Vokasi</h4>
                    <p className="text-xs text-red-100 truncate max-w-[180px]">
                      {majors.map(m => m.code).join(' & ')}
                    </p>
                  </div>
                  <button
                    onClick={() => handleScrollTo('program')}
                    className="bg-white text-red-700 hover:bg-red-50 font-extrabold text-xs px-3.5 py-2 rounded-lg shrink-0 transition-colors shadow-sm cursor-pointer"
                  >
                    Lihat Jurusan
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
