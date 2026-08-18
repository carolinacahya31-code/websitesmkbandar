import React, { useState } from 'react';
import {
  LayoutDashboard,
  Building2,
  UserCheck,
  Compass,
  BookOpen,
  Camera,
  Building,
  BarChart3,
  HelpCircle,
  MessageSquare,
  LogOut,
  Eye,
  RotateCcw,
  Download,
  Upload,
  ShieldCheck,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  School
} from 'lucide-react';
import { useSchoolContent } from '../../context/SchoolContext';
import { OverviewTab } from './tabs/OverviewTab';
import { GeneralInfoTab } from './tabs/GeneralInfoTab';
import { PrincipalTab } from './tabs/PrincipalTab';
import { VisiMisiTab } from './tabs/VisiMisiTab';
import { MajorsTab } from './tabs/MajorsTab';
import { FacilitiesTab } from './tabs/FacilitiesTab';
import { GalleryTab } from './tabs/GalleryTab';
import { StatsTab } from './tabs/StatsTab';
import { FaqsTab } from './tabs/FaqsTab';
import { MessagesTab } from './tabs/MessagesTab';

export const AdminDashboard: React.FC = () => {
  const {
    schoolInfo,
    logoutAdmin,
    setCurrentView,
    resetToDefault,
    exportDataToJson,
    importDataFromJson,
    contactMessages
  } = useSchoolContent();

  const [activeTab, setActiveTab] = useState<string>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [backupNotice, setBackupNotice] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Ringkasan', icon: LayoutDashboard, badge: null },
    { id: 'info', label: 'Informasi Umum', icon: Building2, badge: null },
    { id: 'principal', label: 'Kepala Sekolah', icon: UserCheck, badge: null },
    { id: 'visimisi', label: 'Visi & Misi', icon: Compass, badge: null },
    { id: 'majors', label: 'Program Keahlian', icon: BookOpen, badge: null },
    { id: 'gallery', label: 'Galeri Foto', icon: Camera, badge: null },
    { id: 'facilities', label: 'Fasilitas Sekolah', icon: Building, badge: null },
    { id: 'stats', label: 'Statistik Capaian', icon: BarChart3, badge: null },
    { id: 'faqs', label: 'FAQ PPDB', icon: HelpCircle, badge: null },
    {
      id: 'messages',
      label: 'Pesan Masuk',
      icon: MessageSquare,
      badge: contactMessages.length > 0 ? contactMessages.length : null
    }
  ];

  const handleExport = () => {
    const json = exportDataToJson();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_smkn1bandar_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setBackupNotice('File backup JSON berhasil didownload!');
    setTimeout(() => setBackupNotice(null), 3000);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        if (content) {
          const success = importDataFromJson(content);
          if (success) {
            setBackupNotice('Data berhasil diimpor dan diperbarui!');
          } else {
            setBackupNotice('Format file JSON tidak valid.');
          }
          setTimeout(() => setBackupNotice(null), 3000);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    if (
      window.confirm(
        'Apakah Anda yakin ingin mereset seluruh data website ke konfigurasi standar default SMKN 1 Bandar?'
      )
    ) {
      resetToDefault();
      setBackupNotice('Semua data berhasil dikembalikan ke standar awal!');
      setTimeout(() => setBackupNotice(null), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans antialiased text-gray-900">
      
      {/* Top Navbar */}
      <header className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 text-white sticky top-0 z-40 shadow-md border-b border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-red-200 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-red-600 border border-red-400/40 flex items-center justify-center text-white shadow-sm font-black text-sm">
                <School className="w-5 h-5 text-white" />
              </div>
              <div className="text-left hidden sm:block">
                <div className="text-sm font-black tracking-tight leading-tight flex items-center gap-1.5">
                  <span>Panel Admin SMKN 1 Bandar</span>
                  <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase">
                    PRO
                  </span>
                </div>
                <div className="text-[11px] text-red-200">Content Management System</div>
              </div>
            </div>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setCurrentView('website')}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all cursor-pointer border border-white/10"
            >
              <Eye className="w-4 h-4 text-amber-300" />
              <span className="hidden md:inline">Tinjau Website</span>
            </button>

            <button
              onClick={logoutAdmin}
              className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Keluar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Backup Notification Toast */}
      {backupNotice && (
        <div className="bg-amber-500 text-white text-xs font-bold py-2 px-4 text-center animate-in fade-in duration-200">
          {backupNotice}
        </div>
      )}

      {/* Dashboard Main Container */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar Navigation */}
        <aside
          className={`lg:w-64 shrink-0 space-y-4 ${
            mobileMenuOpen ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="bg-white rounded-3xl p-3 border border-gray-200 shadow-xs space-y-1 text-left">
            <div className="px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-gray-400">
              Menu Pengelolaan
            </div>

            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-red-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    <span>{tab.label}</span>
                  </div>
                  {tab.badge !== null && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                        isActive ? 'bg-white text-red-600' : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Backup & System Tools */}
          <div className="bg-white rounded-3xl p-4 border border-gray-200 shadow-xs space-y-2 text-left">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 px-1">
              Alat & Cadangan Data
            </div>

            <button
              onClick={handleExport}
              className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-600" />
              <span>Ekspor Backup JSON</span>
            </button>

            <label className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
              <Upload className="w-4 h-4 text-blue-600" />
              <span>Impor Backup JSON</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
            </label>

            <button
              onClick={handleReset}
              className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer pt-2 border-t border-gray-100"
            >
              <RotateCcw className="w-4 h-4 text-red-600" />
              <span>Reset ke Default</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-white/70 rounded-3xl p-4 sm:p-8 border border-gray-200 shadow-xs min-h-[600px]">
          {activeTab === 'overview' && <OverviewTab setActiveTab={setActiveTab} />}
          {activeTab === 'info' && <GeneralInfoTab />}
          {activeTab === 'principal' && <PrincipalTab />}
          {activeTab === 'visimisi' && <VisiMisiTab />}
          {activeTab === 'majors' && <MajorsTab />}
          {activeTab === 'gallery' && <GalleryTab />}
          {activeTab === 'facilities' && <FacilitiesTab />}
          {activeTab === 'stats' && <StatsTab />}
          {activeTab === 'faqs' && <FaqsTab />}
          {activeTab === 'messages' && <MessagesTab />}
        </main>
      </div>

    </div>
  );
};
