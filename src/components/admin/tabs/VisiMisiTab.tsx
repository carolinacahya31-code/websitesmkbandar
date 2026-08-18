import React, { useState } from 'react';
import { Target, Compass, Save, Plus, Trash2, CheckCircle2, GripVertical } from 'lucide-react';
import { useSchoolContent, VisiMisiType } from '../../../context/SchoolContext';

export const VisiMisiTab: React.FC = () => {
  const { visiMisi, updateVisiMisi } = useSchoolContent();
  const [formData, setFormData] = useState<VisiMisiType>(visiMisi);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [newMisiText, setNewMisiText] = useState('');
  const [newTujuanText, setNewTujuanText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateVisiMisi(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleAddMisi = () => {
    if (newMisiText.trim()) {
      setFormData({
        ...formData,
        misi: [...formData.misi, newMisiText.trim()]
      });
      setNewMisiText('');
    }
  };

  const handleDeleteMisi = (index: number) => {
    setFormData({
      ...formData,
      misi: formData.misi.filter((_, i) => i !== index)
    });
  };

  const handleUpdateMisiItem = (index: number, val: string) => {
    const updated = [...formData.misi];
    updated[index] = val;
    setFormData({ ...formData, misi: updated });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-red-600" /> Visi & Misi Strategis
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Kelola teks visi utama sekolah dan butir-butir misi yang tampil pada halaman Visi & Misi.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer shrink-0"
        >
          <Save className="w-4 h-4" />
          <span>Simpan Visi & Misi</span>
        </button>
      </div>

      {savedSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-800 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Visi & Misi Sekolah berhasil disimpan!</span>
        </div>
      )}

      {/* Visi Section */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wider">
          <Target className="w-4 h-4" />
          <span>Visi Utama Sekolah</span>
        </div>
        <textarea
          rows={3}
          value={formData.visi}
          onChange={(e) => setFormData({ ...formData, visi: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none leading-relaxed uppercase font-semibold text-gray-800"
          required
        />
        <p className="text-[11px] text-gray-500">
          Visi sekolah umumnya ditulis menggunakan huruf kapital untuk menegaskan moto dan arah capaian IDUKA.
        </p>
      </div>

      {/* Misi Section (Dynamic List) */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div>
            <span className="text-sm font-bold text-gray-900 uppercase tracking-wider text-red-600 block">
              Daftar Misi Sekolah ({formData.misi.length} Butir)
            </span>
            <span className="text-xs text-gray-500">
              Setiap butir misi akan diberi nomor otomatis pada tampilan publik.
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {formData.misi.map((misiItem, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl border border-gray-200/80">
              <span className="w-8 h-8 rounded-lg bg-red-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </span>
              <input
                type="text"
                value={misiItem}
                onChange={(e) => handleUpdateMisiItem(idx, e.target.value)}
                className="flex-1 px-3 py-2 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm focus:border-red-600 focus:ring-1 focus:ring-red-600/20 outline-none"
              />
              <button
                type="button"
                onClick={() => handleDeleteMisi(idx)}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                title="Hapus Butir Misi"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Add new Misi item */}
        <div className="pt-3 border-t border-gray-100 flex gap-2">
          <input
            type="text"
            placeholder="Ketik butir misi baru di sini..."
            value={newMisiText}
            onChange={(e) => setNewMisiText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddMisi();
              }
            }}
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
          />
          <button
            type="button"
            onClick={handleAddMisi}
            className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-black text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Misi</span>
          </button>
        </div>
      </div>
    </form>
  );
};
