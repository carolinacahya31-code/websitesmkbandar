import React from 'react';
import { Target, Compass, CheckCircle2, Award, Sparkles, HeartHandshake, ShieldCheck, Zap } from 'lucide-react';
import { VISI_MISI } from '../data/schoolData';

export const VisionMissionSection: React.FC = () => {
  const CORE_VALUES = [
    {
      title: 'SANTUN',
      desc: 'Berperilaku sopan, saling menghormati, dan menjunjung tinggi norma agama serta budaya bangsa.',
      icon: HeartHandshake,
      color: 'from-red-500 to-red-700'
    },
    {
      title: 'KREATIF',
      desc: 'Mampu berinovasi, memecahkan masalah teknis secara efektif, dan berpikir out-of-the-box.',
      icon: Zap,
      color: 'from-amber-500 to-red-600'
    },
    {
      title: 'MANDIRI',
      desc: 'Memiliki etos kerja kuat, disiplin diri tinggi, dan siap berwirausaha atau bekerja independen.',
      icon: ShieldCheck,
      color: 'from-red-600 to-red-800'
    },
    {
      title: 'BERKARAKTER',
      desc: 'Memegang teguh integritas, kejujuran, serta profil Pelajar Pancasila di mana pun berada.',
      icon: Award,
      color: 'from-red-700 to-gray-900'
    }
  ];

  return (
    <section id="visi-misi" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4" /> Arah & Cita-Cita Sekolah
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Visi & Misi <span className="text-red-600">SMK Negeri 1 Bandar</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Landasan filosofis dan langkah konkret sekolah dalam mewujudkan pendidikan vokasi berkualitas tinggi.
          </p>
        </div>

        {/* Visi Sekolah - Prominent Featured Card */}
        <div className="mb-16">
          <div className="relative rounded-3xl bg-gradient-to-br from-red-900 via-red-800 to-red-950 text-white p-8 sm:p-12 shadow-xl border border-red-700/50 overflow-hidden text-left">
            
            {/* Background Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-6 right-8 text-red-700/20">
              <Target className="w-48 h-48" />
            </div>

            <div className="relative z-10 max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-400 text-red-950 font-black text-xs px-3.5 py-1.5 rounded-xl uppercase tracking-widest shadow-sm">
                <Target className="w-4 h-4" /> VISI UTAMA SEKOLAH
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                "{VISI_MISI.visi}"
              </h3>

              <div className="pt-4 border-t border-red-700/60 flex flex-wrap items-center gap-6 text-xs text-red-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300" /> Unggul Prestasi
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300" /> Karakter Pancasila
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300" /> Daya Saing Global
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Misi Sekolah List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Title Box */}
          <div className="lg:col-span-4 space-y-4 text-left lg:sticky lg:top-28">
            <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-md">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-gray-900">
              Misi Strategis Sekolah
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Langkah-langkah terencana dan terukur yang dilaksanakan oleh seluruh civitas akademika untuk mencapai visi SMK Negeri 1 Bandar.
            </p>
          </div>

          {/* Right Misi Cards Grid */}
          <div className="lg:col-span-8 space-y-4 text-left">
            {VISI_MISI.misi.map((misiText, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-red-300 shadow-xs hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-9 h-9 rounded-xl bg-red-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <div className="space-y-1">
                  <p className="text-gray-800 text-sm font-medium leading-relaxed group-hover:text-gray-900">
                    {misiText}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Budaya & Karakter Sekolah (Core Values) */}
        <div>
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">Nilai Utama (Budaya Sekolah)</span>
            <h3 className="text-2xl font-bold text-gray-900">Karakter Lulusan SMKN 1 Bandar</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {CORE_VALUES.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all space-y-3 relative overflow-hidden group"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center shadow-md`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black text-gray-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
