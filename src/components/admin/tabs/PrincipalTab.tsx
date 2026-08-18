import React, { useState } from 'react';
import { UserCheck, Save, CheckCircle2, Upload, Image as ImageIcon, Sparkles } from 'lucide-react';
import { useSchoolContent } from '../../../context/SchoolContext';

export const PrincipalTab: React.FC = () => {
  const { schoolInfo, updatePrincipal } = useSchoolContent();
  const [formData, setFormData] = useState(schoolInfo.principal);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [imageMode, setImageMode] = useState<'url' | 'upload'>('url');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updatePrincipal(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setFormData({ ...formData, avatar: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-red-600" /> Profil & Sambutan Kepala Sekolah
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Atur nama kepala sekolah, jabatan resmi, foto profil, dan isi pesan sambutan pada halaman Tentang Sekolah.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer shrink-0"
        >
          <Save className="w-4 h-4" />
          <span>Simpan Sambutan</span>
        </button>
      </div>

      {savedSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-800 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Data Kepala Sekolah & Sambutan berhasil diperbarui!</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Fields */}
        <div className="lg:col-span-8 space-y-5">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider text-red-600 border-b border-gray-100 pb-2">
              Data Pribadi & Jabatan
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 block">Nama Lengkap & Gelar</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 block">Jabatan Resmi</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
                  required
                />
              </div>
            </div>

            {/* Photo Input Controls */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-700 block">Foto Resmi Kepala Sekolah</label>
                <div className="flex items-center gap-1 bg-gray-100 p-0.5 rounded-lg text-[11px] font-semibold">
                  <button
                    type="button"
                    onClick={() => setImageMode('url')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${imageMode === 'url' ? 'bg-white shadow-xs text-red-600 font-bold' : 'text-gray-600'}`}
                  >
                    Tautan URL
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageMode('upload')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${imageMode === 'upload' ? 'bg-white shadow-xs text-red-600 font-bold' : 'text-gray-600'}`}
                  >
                    Upload File
                  </button>
                </div>
              </div>

              {imageMode === 'url' ? (
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="https://... atau data:image/..."
                    value={formData.avatar.startsWith('data:') ? 'Foto terenkripsi (Base64)' : formData.avatar}
                    onChange={(e) => {
                      if (!e.target.value.startsWith('Foto terenkripsi')) {
                        setFormData({ ...formData, avatar: e.target.value });
                      }
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
                  />
                  <p className="text-[11px] text-gray-500">
                    Masukkan URL gambar langsung atau gunakan tombol Upload untuk mengganti foto dari komputer/HP.
                  </p>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 hover:border-red-400 rounded-2xl p-6 text-center bg-gray-50 cursor-pointer relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="space-y-2 pointer-events-none">
                    <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mx-auto">
                      <Upload className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-gray-800 block">Klik untuk memilih file foto dari komputer</span>
                    <span className="text-[11px] text-gray-500 block">Mendukung format JPG, PNG, WebP (Rasio pasfoto 2x3 atau 3x4)</span>
                  </div>
                </div>
              )}
            </div>

            {/* Principal Speech Textarea */}
            <div className="space-y-1 pt-2">
              <label className="text-xs font-bold text-gray-700 block">Naskah Sambutan Kepala Sekolah</label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none resize-none leading-relaxed"
                required
              />
            </div>
          </div>
        </div>

        {/* Right Column: Live Preview Card */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
            Pratinjau Kartu Sambutan
          </span>

          <div className="bg-gradient-to-br from-red-950 via-red-900 to-red-950 text-white p-6 rounded-2xl shadow-xl space-y-4 border border-red-800/50">
            <div className="flex items-center gap-4 bg-black/20 p-3.5 rounded-xl border border-white/10">
              <div className="relative shrink-0">
                <div className="w-20 h-28 rounded-xl overflow-hidden border-2 border-amber-400/80 shadow-md bg-red-950 flex items-center justify-center">
                  <img
                    src={formData.avatar}
                    alt={formData.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-1.5 -right-1 bg-amber-400 text-red-950 text-[9px] font-black px-1.5 py-0.5 rounded shadow">
                  KEPSEK
                </div>
              </div>

              <div>
                <h4 className="text-sm font-extrabold text-white leading-tight">{formData.name}</h4>
                <p className="text-[11px] text-amber-300 font-medium mt-0.5">{formData.title}</p>
                <span className="inline-block mt-2 text-[10px] text-red-200 bg-red-900/60 px-2 py-0.5 rounded">
                  SMKN 1 Bandar
                </span>
              </div>
            </div>

            <div className="p-3 bg-red-900/40 rounded-xl border border-red-800/40">
              <p className="text-red-100 text-xs italic line-clamp-4">
                "{formData.message}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
