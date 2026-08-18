import React, { useState } from 'react';
import { Camera, Plus, Edit3, Trash2, Save, X, Image as ImageIcon, CheckCircle2, Upload, Calendar, Tag } from 'lucide-react';
import { useSchoolContent } from '../../../context/SchoolContext';
import { GalleryItem } from '../../../types';

export const GalleryTab: React.FC = () => {
  const { galleryItems, addGalleryItem, editGalleryItem, deleteGalleryItem } = useSchoolContent();
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');
  const [imageMode, setImageMode] = useState<'url' | 'upload'>('url');

  const categories: GalleryItem['category'][] = [
    'Gedung & Fasilitas',
    'KBM & Praktik',
    'Ekstrakurikuler',
    'Prestasi & Event'
  ];

  const [formData, setFormData] = useState<GalleryItem>({
    id: '',
    title: '',
    category: 'KBM & Praktik',
    image: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleStartCreate = () => {
    setIsCreatingNew(true);
    setEditingItem(null);
    setFormData({
      id: `gal-${Date.now()}`,
      title: '',
      category: 'KBM & Praktik',
      image: '',
      description: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const handleStartEdit = (item: GalleryItem) => {
    setEditingItem(item);
    setIsCreatingNew(false);
    setFormData(item);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setFormData({ ...formData, image: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.image) return;

    if (isCreatingNew) {
      addGalleryItem(formData);
      setSavedMessage('Foto baru berhasil ditambahkan ke galeri!');
    } else {
      editGalleryItem(formData.id, formData);
      setSavedMessage('Data foto berhasil diperbarui!');
    }

    setIsCreatingNew(false);
    setEditingItem(null);
    setTimeout(() => setSavedMessage(''), 3000);
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Hapus foto "${title}" dari galeri?`)) {
      deleteGalleryItem(id);
      setSavedMessage('Foto berhasil dihapus.');
      setTimeout(() => setSavedMessage(''), 3000);
    }
  };

  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Camera className="w-5 h-5 text-red-600" /> Galeri Dokumentasi Kegiatan ({galleryItems.length} Foto)
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Unggah foto dokumentasi KBM, fasilitas, ekstrakurikuler, dan event prestasi sekolah.
          </p>
        </div>

        {!isCreatingNew && !editingItem && (
          <button
            onClick={handleStartCreate}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Foto Baru</span>
          </button>
        )}
      </div>

      {savedMessage && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-800 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{savedMessage}</span>
        </div>
      )}

      {/* Inline Form Add / Edit */}
      {(isCreatingNew || editingItem) && (
        <form onSubmit={handleSaveForm} className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-red-200 shadow-xl space-y-5 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h3 className="text-lg font-black text-gray-900 flex items-center gap-2">
              <Camera className="w-5 h-5 text-red-600" />
              <span>{isCreatingNew ? 'Tambah Foto Dokumentasi Baru' : 'Edit Foto Galeri'}</span>
            </h3>
            <button
              type="button"
              onClick={() => {
                setIsCreatingNew(false);
                setEditingItem(null);
              }}
              className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-bold text-gray-700 block">Judul Foto / Kegiatan</label>
              <input
                type="text"
                required
                placeholder="Contoh: Praktik Pemrograman PLC & Otomasi Industri"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 font-semibold"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 block">Kategori Galeri</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 bg-white"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 block">Tanggal Kegiatan (Opsional)</label>
              <input
                type="date"
                value={formData.date || ''}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600"
              />
            </div>
          </div>

          {/* Photo Input Mode */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-700 block">Sumber Gambar</label>
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
              <input
                type="text"
                required
                placeholder="https://images.unsplash.com/... atau https://i.ibb.co/..."
                value={formData.image.startsWith('data:') ? 'Foto terenkripsi (Base64)' : formData.image}
                onChange={(e) => {
                  if (!e.target.value.startsWith('Foto terenkripsi')) {
                    setFormData({ ...formData, image: e.target.value });
                  }
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600"
              />
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
                  <span className="text-xs font-bold text-gray-800 block">Klik untuk memilih file foto</span>
                  <span className="text-[11px] text-gray-500 block">Mendukung format JPG, PNG, WEBP</span>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 block">Keterangan / Deskripsi Foto</label>
            <textarea
              rows={2}
              placeholder="Ceritakan momen atau kegiatan yang berlangsung dalam foto..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 resize-none"
            />
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
            <button
              type="button"
              onClick={() => {
                setIsCreatingNew(false);
                setEditingItem(null);
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
              <span>Simpan Foto</span>
            </button>
          </div>
        </form>
      )}

      {/* Grid of gallery items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-44 bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5 bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              <div className="p-4 space-y-1.5">
                <h4 className="text-sm font-bold text-gray-900 line-clamp-1">{item.title}</h4>
                <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
                {item.date && (
                  <span className="text-[10px] text-gray-400 flex items-center gap-1 pt-1">
                    <Calendar className="w-3 h-3" /> {item.date}
                  </span>
                )}
              </div>
            </div>

            <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-end gap-2">
              <button
                onClick={() => handleStartEdit(item)}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white border border-gray-200 hover:border-red-300 text-gray-700 hover:text-red-600 text-xs font-bold transition-colors cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(item.id, item.title)}
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
