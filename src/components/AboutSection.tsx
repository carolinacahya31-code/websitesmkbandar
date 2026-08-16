import React, { useState } from 'react';
import { Users, GraduationCap, Briefcase, Building2, Calendar, Award, CheckCircle, ShieldCheck, Sparkles, Building, Monitor, Wrench, BookOpen, Trophy, Home, UserCheck } from 'lucide-react';
import { SCHOOL_INFO, SCHOOL_STATS, FACILITIES } from '../data/schoolData';
import { LogoPlaceholder } from './LogoPlaceholder';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Users: (props) => <Users {...props} />,
  GraduationCap: (props) => <GraduationCap {...props} />,
  Briefcase: (props) => <Briefcase {...props} />,
  Building2: (props) => <Building2 {...props} />,
  Calendar: (props) => <Calendar {...props} />,
  Award: (props) => <Award {...props} />,
  Building: (props) => <Building {...props} />,
  Monitor: (props) => <Monitor {...props} />,
  Wrench: (props) => <Wrench {...props} />,
  BookOpen: (props) => <BookOpen {...props} />,
  Trophy: (props) => <Trophy {...props} />,
  Home: (props) => <Home {...props} />
};

export const AboutSection: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(SCHOOL_INFO.principal.avatar);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (imgSrc === '/images/kepsek.jpg') {
      // Try direct ibb URL as backup
      setImgSrc('https://i.ibb.co/nsdm54Sw/2x3.jpg');
    } else {
      setHasError(true);
    }
  };

  return (
    <section id="tentang" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50/80 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Profil Sekolah
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Tentang <span className="text-red-600">SMK Negeri 1 Bandar</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Mengenal lebih dekat lembaga pendidikan kejuruan terdepan di Kabupaten Simalungun yang berdedikasi tinggi melahirkan generasi siap kerja, kreatif, dan berakhlak mulia.
          </p>
        </div>

        {/* Main Content Grid: About Text & Principal Speech */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* Left Column: School Description & Characteristics */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6 flex flex-col justify-between">
            <div className="space-y-4 text-left">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <LogoPlaceholder variant="light" />
                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-md">
                  NPSN: {SCHOOL_INFO.npsn}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                Pendidikan Kejuruan Unggulan Berbasis Industri & Karakter
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>SMK Negeri 1 Bandar</strong> didirikan pada tahun {SCHOOL_INFO.foundedYear} di wilayah strategis Kecamatan Bandar, Kabupaten Simalungun. Sejak awal berdiri, sekolah kami telah menjadi pilihan utama masyarakat dalam membina potensi peserta didik agar menguasai keterampilan vokasi yang dibutuhkan pasar kerja nasional.
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                Dengan menerapkan <strong>Kurikulum Merdeka</strong> dan sistem pembelajaran Teaching Factory (TEFA), siswa tidak hanya diajarkan teori akademik tetapi juga secara langsung mensimulasikan standar operasional di industri sesungguhnya.
              </p>

              {/* Characteristics Checklist */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>Lingkungan Asri:</strong> Kampus hijau yang aman, tertib, dan bersih.</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>Fasilitas Lengkap:</strong> Lab Komputer, Bengkel TEFA, & Perpustakaan.</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>Guru Profesional:</strong> Pengajar tersertifikasi & praktisi industri.</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>Bursa Kerja Khusus:</strong> Penyaluran lulusan cepat kerja ke DUDI.</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-xl border border-red-100 text-left flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-red-800 uppercase block">Status Akreditasi</span>
                <span className="text-sm font-semibold text-red-900">{SCHOOL_INFO.accreditation} oleh BAN-S/M</span>
              </div>
              <ShieldCheck className="w-8 h-8 text-red-600 shrink-0" />
            </div>
          </div>

          {/* Right Column: Principal Greeting Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-red-950 via-red-900 to-red-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden text-left border border-red-800/50">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
                Sambutan Kepala Sekolah
              </div>

              {/* Principal Photo & Details Card */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-black/20 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="relative shrink-0">
                  <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-xl overflow-hidden border-2 border-amber-400/80 shadow-lg bg-red-950 flex items-center justify-center">
                    {!hasError ? (
                      <img
                        src={imgSrc}
                        alt={SCHOOL_INFO.principal.name}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                        onError={handleImageError}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-2 text-center text-red-200">
                        <UserCheck className="w-8 h-8 text-amber-400 mb-1" />
                        <span className="text-[10px] font-bold">Rudi Harto Gultom</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-1 bg-amber-400 text-red-950 text-[10px] font-black px-2 py-0.5 rounded-md shadow uppercase tracking-wide">
                    Kepsek
                  </div>
                </div>

                <div className="text-center sm:text-left my-auto">
                  <h4 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug">
                    {SCHOOL_INFO.principal.name}
                  </h4>
                  <p className="text-xs text-amber-300/90 font-semibold mt-1">
                    {SCHOOL_INFO.principal.title}
                  </p>
                  <span className="inline-block mt-2 text-[11px] text-red-200/80 bg-red-900/60 px-2.5 py-1 rounded-md border border-red-700/50">
                    SMK Negeri 1 Bandar
                  </span>
                </div>
              </div>

              {/* Message Quote */}
              <div className="space-y-2 relative bg-red-900/40 p-4 rounded-xl border border-red-800/40">
                <span className="text-2xl text-amber-300 font-serif leading-none block">“</span>
                <p className="text-red-100 text-xs sm:text-sm leading-relaxed italic">
                  {SCHOOL_INFO.principal.message}
                </p>
                <span className="text-2xl text-amber-300 font-serif leading-none block text-right">”</span>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-red-800/60 flex items-center justify-between text-xs text-red-200 relative z-10">
              <span className="font-semibold text-red-300">SMK Bisa! SMK Hebat!</span>
              <span className="font-mono bg-amber-400/10 px-2.5 py-1 rounded text-amber-300 border border-amber-400/30 text-[11px]">
                Simalungun • Sumatera Utara
              </span>
            </div>
          </div>

        </div>

        {/* Statistics Cards Grid */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900">Statistik Utama Sekolah</h3>
            <p className="text-xs text-gray-500">Capaian & Data Faktual SMK Negeri 1 Bandar</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SCHOOL_STATS.map((stat, idx) => {
              const IconComponent = ICON_MAP[stat.iconName] || Users;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all text-center group"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight group-hover:text-red-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-gray-800 mt-1">{stat.label}</div>
                  <div className="text-[10px] text-gray-500 mt-1 line-clamp-2">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Facilities Preview Grid */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 text-left">
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">Sarana & Prasarana</span>
              <h3 className="text-2xl font-bold text-gray-900">Fasilitas Penunjang Pembelajaran</h3>
            </div>
            <p className="text-xs text-gray-500 mt-2 md:mt-0 max-w-md">
              Dilengkapi sarana modern untuk menciptakan pengalaman belajar kejuruan yang nyaman dan sesuai standar kerja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((fac) => {
              const IconComp = ICON_MAP[fac.iconName] || Building;
              return (
                <div
                  key={fac.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group text-left"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-xl shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {fac.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
