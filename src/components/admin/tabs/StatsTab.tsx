import React, { useState } from 'react';
import { BarChart3, Save, CheckCircle2, Plus, Trash2, TrendingUp } from 'lucide-react';
import { useSchoolContent } from '../../../context/SchoolContext';
import { SchoolStat } from '../../../types';

export const StatsTab: React.FC = () => {
  const { schoolStats, updateSchoolStats } = useSchoolContent();
  const [stats, setStats] = useState<SchoolStat[]>(schoolStats);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSchoolStats(stats);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleUpdate = (index: number, field: keyof SchoolStat, val: any) => {
    const next = [...stats];
    next[index] = { ...next[index], [field]: val };
    setStats(next);
  };

  const handleAdd = () => {
    setStats([
      ...stats,
      {
        value: 100,
        suffix: '+',
        label: 'Statistik Baru',
        description: 'Keterangan ringkas'
      }
    ]);
  };

  const handleDelete = (index: number) => {
    setStats(stats.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-red-600" /> Statistik & Capaian Utama Sekolah
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Atur angka capaian yang tampil di baris metrik beranda (Siswa Aktif, Guru, Mitra Industri, Penyerapan Kerja).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs px-3.5 py-2.5 rounded-xl transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Metrik</span>
          </button>
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Simpan Statistik</span>
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-800 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Data Statistik Sekolah berhasil diperbarui!</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3 relative"
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="text-xs font-bold text-red-600 uppercase">Metrik #{idx + 1}</span>
              {stats.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleDelete(idx)}
                  className="text-gray-400 hover:text-red-600 p-1 rounded-lg"
                  title="Hapus Metrik"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-700 block">Nilai Angka</label>
                <input
                  type="number"
                  value={stat.value}
                  onChange={(e) => handleUpdate(idx, 'value', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-bold text-gray-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-700 block">Akhiran / Suffix (+ / %)</label>
                <input
                  type="text"
                  value={stat.suffix || ''}
                  onChange={(e) => handleUpdate(idx, 'suffix', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-bold"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-700 block">Label Utama</label>
              <input
                type="text"
                value={stat.label}
                onChange={(e) => handleUpdate(idx, 'label', e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-semibold"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-700 block">Deskripsi Tambahan</label>
              <input
                type="text"
                value={stat.description}
                onChange={(e) => handleUpdate(idx, 'description', e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs text-gray-600"
              />
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};
