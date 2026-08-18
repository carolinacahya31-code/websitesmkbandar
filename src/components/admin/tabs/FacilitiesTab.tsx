import React, { useState } from 'react';
import { Building, Plus, Edit3, Trash2, Save, X, CheckCircle2, Sparkles } from 'lucide-react';
import { useSchoolContent } from '../../../context/SchoolContext';
import { Facility } from '../../../types';

export const FacilitiesTab: React.FC = () => {
  const { facilities, addFacility, editFacility, deleteFacility } = useSchoolContent();
  const [editingFacility, setEditingFacility] = useState<Facility | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');

  const [formData, setFormData] = useState<Facility>({
    id: '',
    name: '',
    description: '',
    image: '',
    category: 'Akademik & Praktik',
    iconName: 'Laptop'
  });

  const handleStartCreate = () => {
    setIsCreatingNew(true);
    setEditingFacility(null);
    setFormData({
      id: `fac-${Date.now()}`,
      name: '',
      description: '',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      category: 'Akademik & Praktik',
      iconName: 'Laptop'
    });
  };

  const handleStartEdit = (fac: Facility) => {
    setEditingFacility(fac);
    setIsCreatingNew(false);
    setFormData(fac);
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.image) return;

    if (isCreatingNew) {
      addFacility(formData);
      setSavedMessage('Fasilitas baru berhasil ditambahkan!');
    } else {
      editFacility(formData.id, formData);
      setSavedMessage('Perubahan fasilitas berhasil disimpan!');
    }

    setIsCreatingNew(false);
    setEditingFacility(null);
    setTimeout(() => setSavedMessage(''), 3000);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Hapus fasilitas "${name}"?`)) {
      deleteFacility(id);
      setSavedMessage('Fasilitas berhasil dihapus.');
      setTimeout(() => setSavedMessage(''), 3000);
    }
  };

  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Building className="w-5 h-5 text-red-600" /> Fasilitas & Sarana Prasarana ({facilities.length} Sarana)
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Kelola laboratorium, bengkel praktik, perpustakaan, sarana olahraga, dan fasilitas penunjang.
          </p>
        </div>

        {!isCreatingNew && !editingFacility && (
          <button
            onClick={handleStartCreate}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Fasilitas Baru</span>
          </button>
        )}
      </div>

      {savedMessage && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-800 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{savedMessage}</span>
        </div>
      )}

      {/* Inline Form */}
      {(isCreatingNew || editingFacility) && (
        <form onSubmit={handleSaveForm} className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-red-200 shadow-xl space-y-5 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h3 className="text-lg font-black text-gray-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-600" />
              <span>{isCreatingNew ? 'Tambah Fasilitas Baru' : 'Edit Fasilitas'}</span>
            </h3>
            <button
              type="button"
              onClick={() => {
                setIsCreatingNew(false);
                setEditingFacility(null);
              }}
              className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 block">Nama Fasilitas</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Contoh: Lab Komputer & Jaringan"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 font-semibold"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 block">Kategori</label>
              <input
                type="text"
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="Akademik / Praktik / Olahraga / Umum"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600"
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-bold text-gray-700 block">Tautan Gambar / Foto Fasilitas</label>
              <input
                type="text"
                required
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600"
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-bold text-gray-700 block">Deskripsi Fasilitas</label>
              <textarea
                rows={3}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 resize-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
            <button
              type="button"
              onClick={() => {
                setIsCreatingNew(false);
                setEditingFacility(null);
              }}
              className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl"
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Fasilitas</span>
            </button>
          </div>
        </form>
      )}

      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {facilities.map((fac) => (
          <div
            key={fac.id}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-44 bg-gray-100 overflow-hidden">
                <img
                  src={fac.image}
                  alt={fac.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5 bg-gray-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                  {fac.category}
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h4 className="text-sm font-bold text-gray-900">{fac.name}</h4>
                <p className="text-xs text-gray-500 line-clamp-2">{fac.description}</p>
              </div>
            </div>

            <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-end gap-2">
              <button
                onClick={() => handleStartEdit(fac)}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white border border-gray-200 hover:border-red-300 text-gray-700 hover:text-red-600 text-xs font-bold transition-colors cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(fac.id, fac.name)}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Hapus</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
