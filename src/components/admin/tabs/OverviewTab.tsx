import React from 'react';
import { LayoutDashboard, BookOpen, Camera, Building, MessageSquare, HelpCircle, Eye, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';
import { useSchoolContent } from '../../../context/SchoolContext';

interface OverviewTabProps {
  setActiveTab: (tabId: string) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ setActiveTab }) => {
  const { schoolInfo, majors, galleryItems, facilities, contactMessages, faqs, setCurrentView } = useSchoolContent();

  const cards = [
    {
      title: 'Program Keahlian',
      count: majors.length,
      desc: 'Jurusan TOI & TKI',
      icon: BookOpen,
      color: 'bg-red-600',
      tabId: 'majors'
    },
    {
      title: 'Foto Galeri',
      count: galleryItems.length,
      desc: 'Dokumentasi kegiatan',
      icon: Camera,
      color: 'bg-amber-600',
      tabId: 'gallery'
    },
    {
      title: 'Fasilitas Sekolah',
      count: facilities.length,
      desc: 'Lab, bengkel & sarana',
      icon: Building,
      color: 'bg-emerald-600',
      tabId: 'facilities'
    },
    {
      title: 'Pesan Masuk',
      count: contactMessages.length,
      desc: 'Formulir kontak publik',
      icon: MessageSquare,
      color: 'bg-blue-600',
      tabId: 'messages'
    },
    {
      title: 'Pertanyaan FAQ',
      count: faqs.length,
      desc: 'Tanya jawab PPDB',
      icon: HelpCircle,
      color: 'bg-purple-600',
      tabId: 'faqs'
    }
  ];

  return (
    <div className="space-y-8 text-left">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg border border-red-800/50">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Selamat Datang, Administrator
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Pusat Pengelolaan Konten Website {schoolInfo.name}
          </h2>
          <p className="text-red-100 text-sm leading-relaxed">
            Kelola data sekolah, ubah sambutan kepala sekolah, perbarui jurusan, unggah foto kegiatan, sesuaikan visi-misi, serta tanggapi pesan dari masyarakat secara langsung dan realtime.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setCurrentView('website')}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-900 font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <Eye className="w-4 h-4 text-red-600" />
              <span>Lihat Tampilan Website Langsung</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Statistik Ringkas Konten</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {cards.map((card) => {
            const IconComp = card.icon;
            return (
              <div
                key={card.tabId}
                onClick={() => setActiveTab(card.tabId)}
                className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md hover:border-red-300 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl ${card.color} text-white flex items-center justify-center shadow-xs`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-gray-900 group-hover:text-red-600 transition-colors">
                    {card.count}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Action Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Card Summary */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <h3 className="text-base font-bold text-gray-900">Identitas Sekolah Terpasang</h3>
            <button
              onClick={() => setActiveTab('info')}
              className="text-xs font-bold text-red-600 hover:text-red-700 cursor-pointer"
            >
              Ubah Data
            </button>
          </div>
          <div className="space-y-2 text-xs text-gray-700">
            <div className="flex justify-between py-1 border-b border-gray-50">
              <span className="text-gray-500">Nama Sekolah:</span>
              <span className="font-bold text-gray-900">{schoolInfo.name}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-50">
              <span className="text-gray-500">NPSN:</span>
              <span className="font-bold font-mono text-gray-900">{schoolInfo.npsn}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-50">
              <span className="text-gray-500">Akreditasi:</span>
              <span className="font-bold text-red-600">{schoolInfo.accreditation}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-50">
              <span className="text-gray-500">Kepala Sekolah:</span>
              <span className="font-bold text-gray-900">{schoolInfo.principal.name}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-gray-500">Telepon / Kontak:</span>
              <span className="font-bold text-gray-900">{schoolInfo.phone}</span>
            </div>
          </div>
        </div>

        {/* Quick Instructions */}
        <div className="bg-red-50/70 p-6 rounded-2xl border border-red-100 space-y-3">
          <h3 className="text-base font-bold text-red-950 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-red-600" /> Petunjuk Pengelolaan
          </h3>
          <ul className="space-y-2 text-xs text-red-900 leading-relaxed list-disc list-inside">
            <li>Semua perubahan data langsung tersimpan secara otomatis dan langsung tampil di website.</li>
            <li>Anda dapat menambahkan foto galeri baru, mengedit jurusan, atau memperbarui informasi kontak kapan saja.</li>
            <li>Gunakan tombol <strong>Ekspor Cadangan (JSON)</strong> untuk mendownload backup data jika diperlukan.</li>
            <li>Jika ingin mengembalikan data ke format bawaan awal sekolah, gunakan fitur <strong>Reset ke Default</strong>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
