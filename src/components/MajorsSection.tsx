import React, { useState } from 'react';
import { Cpu, FlaskConical, Network, Code, Car, Wrench, Calculator, FileSpreadsheet, ArrowRight, X, Check, Briefcase, GraduationCap, Sparkles, Building } from 'lucide-react';
import { MAJORS } from '../data/schoolData';
import { Major } from '../types';

const MAJOR_ICONS: Record<string, React.FC<{ className?: string }>> = {
  Cpu: (props) => <Cpu {...props} />,
  FlaskConical: (props) => <FlaskConical {...props} />,
  Network: (props) => <Network {...props} />,
  Code: (props) => <Code {...props} />,
  Car: (props) => <Car {...props} />,
  Wrench: (props) => <Wrench {...props} />,
  Calculator: (props) => <Calculator {...props} />,
  FileSpreadsheet: (props) => <FileSpreadsheet {...props} />
};

export const MajorsSection: React.FC = () => {
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(null);

  return (
    <section id="program" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" /> Vokasi Masa Depan
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Program <span className="text-red-600">Keahlian</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Dua program keahlian unggulan berstandar industri dengan sarana praktik terlengkap untuk menyiapkan siswa menjadi tenaga ahli otomasi dan kimia industri profesional.
          </p>
        </div>

        {/* Majors Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 text-left">
          {MAJORS.map((major) => {
            const IconComp = MAJOR_ICONS[major.iconName] || Network;
            return (
              <div
                key={major.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Major Image & Code Badge */}
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={major.image}
                      alt={major.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white font-extrabold text-xs px-3 py-1 rounded-lg shadow-md uppercase tracking-wider">
                        {major.code}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-red-600 flex items-center justify-center shrink-0 shadow-md">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug drop-shadow-sm">
                        {major.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {major.shortDesc}
                    </p>

                    {/* Key Competencies Preview */}
                    <div className="space-y-1.5 pt-2 border-t border-gray-100">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                        Kompetensi Utama:
                      </span>
                      {major.keyCompetencies.slice(0, 3).map((comp, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                          <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                          <span className="truncate">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedMajor(major)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-red-50 hover:bg-red-600 text-red-700 hover:text-white font-bold text-xs py-3 px-4 rounded-xl border border-red-200 hover:border-red-600 transition-all cursor-pointer group/btn"
                  >
                    <span>Detail Program Keahlian</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Major Detail Modal */}
      {selectedMajor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 text-left relative">
            
            {/* Modal Header Banner */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src={selectedMajor.image}
                alt={selectedMajor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
              
              <button
                onClick={() => setSelectedMajor(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
                <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider">
                  Kode: {selectedMajor.code}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black">{selectedMajor.name}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Deskripsi Lengkap</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{selectedMajor.fullDesc}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Competencies */}
                <div className="bg-red-50/60 p-5 rounded-2xl border border-red-100 space-y-3">
                  <div className="flex items-center gap-2 text-red-800 font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-red-600" />
                    <span>Kompetensi & Keterampilan</span>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-700">
                    {selectedMajor.keyCompetencies.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Career Prospects */}
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
                    <GraduationCap className="w-4 h-4 text-red-600" />
                    <span>Prospek Karir & Pekerjaan</span>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-700">
                    {selectedMajor.careerProspects.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Lab Facilities */}
              <div className="p-5 bg-white border border-gray-200 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
                  <Building className="w-4 h-4 text-red-600" />
                  <span>Fasilitas Lab & Bengkel Praktik</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedMajor.labFacilities.map((facility, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-800 text-xs px-3 py-1.5 rounded-xl border border-gray-200">
                      {facility}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedMajor(null)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
