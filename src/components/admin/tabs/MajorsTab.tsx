import React, { useState } from 'react';
import { BookOpen, Plus, Edit3, Trash2, Save, X, Check, Image as ImageIcon, Sparkles, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { useSchoolContent } from '../../../context/SchoolContext';
import { Major } from '../../../types';

export const MajorsTab: React.FC = () => {
  const { majors, addMajor, editMajor, deleteMajor } = useSchoolContent();
  const [editingMajor, setEditingMajor] = useState<Major | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');

  // Form states for creating / editing
  const [formData, setFormData] = useState<Major>({
    id: '',
    code: '',
    name: '',
    iconName: 'Cpu',
    shortDesc: '',
    fullDesc: '',
    keyCompetencies: [''],
    careerProspects: [''],
    labFacilities: [''],
    image: ''
  });

  const handleStartCreate = () => {
    setIsCreatingNew(true);
    setEditingMajor(null);
    setFormData({
      id: `major-${Date.now()}`,
      code: '',
      name: '',
      iconName: 'Cpu',
      shortDesc: '',
      fullDesc: '',
      keyCompetencies: [''],
      careerProspects: [''],
      labFacilities: [''],
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
    });
  };

  const handleStartEdit = (major: Major) => {
    setEditingMajor(major);
    setIsCreatingNew(false);
    setFormData({
      ...major,
      keyCompetencies: major.keyCompetencies.length ? major.keyCompetencies : [''],
      careerProspects: major.careerProspects.length ? major.careerProspects : [''],
      labFacilities: major.labFacilities.length ? major.labFacilities : ['']
    });
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCompetencies = formData.keyCompetencies.filter(c => c.trim().length > 0);
    const cleanProspects = formData.careerProspects.filter(p => p.trim().length > 0);
    const cleanLabs = formData.labFacilities.filter(l => l.trim().length > 0);

    const payload: Major = {
      ...formData,
      keyCompetencies: cleanCompetencies.length > 0 ? cleanCompetencies : ['Kompetensi Standar Industri'],
      careerProspects: cleanProspects.length > 0 ? cleanProspects : ['Teknisi Profesional'],
      labFacilities: cleanLabs.length > 0 ? cleanLabs : ['Bengkel Praktik']
    };

    if (isCreatingNew) {
      addMajor(payload);
      setSavedMessage('Program keahlian baru berhasil ditambahkan!');
    } else {
      editMajor(formData.id, payload);
      setSavedMessage('Perubahan program keahlian berhasil disimpan!');
    }

    setIsCreatingNew(false);
    setEditingMajor(null);
    setTimeout(() => setSavedMessage(''), 3000);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus program keahlian "${name}"?`)) {
      deleteMajor(id);
      setSavedMessage(`Program keahlian ${name} berhasil dihapus.`);
      setTimeout(() => setSavedMessage(''), 3000);
    }
  };

  // Helper to update array fields (competencies, prospects, labs)
  const handleArrayChange = (field: 'keyCompetencies' | 'careerProspects' | 'labFacilities', index: number, value: string) => {
    const arr = [...formData[field]];
    arr[index] = value;
    setFormData({ ...formData, [field]: arr });
  };

  const handleAddArrayItem = (field: 'keyCompetencies' | 'careerProspects' | 'labFacilities') => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const handleRemoveArrayItem = (field: 'keyCompetencies' | 'careerProspects' | 'labFacilities', index: number) => {
    const arr = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: arr.length > 0 ? arr : [''] });
  };

  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-red-600" /> Program Keahlian ({majors.length} Jurusan)
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Kelola data kompetensi, prospek kerja, fasilitas bengkel, dan foto program keahlian.
          </p>
        </div>

        {!isCreatingNew && !editingMajor && (
          <button
            onClick={handleStartCreate}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Program Keahlian</span>
          </button>
        )}
      </div>

      {savedMessage && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-800 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{savedMessage}</span>
        </div>
      )}

      {/* Editor Modal / Inline Form */}
      {(isCreatingNew || editingMajor) && (
        <form onSubmit={handleSaveForm} className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-red-200 shadow-xl space-y-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h3 className="text-lg font-black text-gray-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-600" />
              <span>{isCreatingNew ? 'Tambah Program Keahlian Baru' : `Edit: ${formData.name}`}</span>
            </h3>
            <button
              type="button"
              onClick={() => {
                setIsCreatingNew(false);
                setEditingMajor(null);
              }}
              className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 block">Kode Singkat (Contoh: TOI / TKI)</label>
              <input
                type="text"
                required
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 font-bold uppercase"
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-bold text-gray-700 block">Nama Lengkap Jurusan</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 font-semibold"
              />
            </div>

            <div className="space-y-1 sm:col-span-2 md:col-span-3">
              <label className="text-xs font-bold text-gray-700 block">Tautan Gambar / Foto Jurusan</label>
              <input
                type="text"
                required
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 block">Deskripsi Singkat (Tampil di Kartu Depan)</label>
            <textarea
              rows={2}
              required
              value={formData.shortDesc}
              onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 resize-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 block">Deskripsi Lengkap (Tampil di Modal Detail)</label>
            <textarea
              rows={3}
              required
              value={formData.fullDesc}
              onChange={(e) => setFormData({ ...formData, fullDesc: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 resize-none leading-relaxed"
            />
          </div>

          {/* Competencies Array */}
          <div className="space-y-2 bg-gray-50 p-4 rounded-2xl border border-gray-200/80">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block">
                Kompetensi Utama
              </label>
              <button
                type="button"
                onClick={() => handleAddArrayItem('keyCompetencies')}
                className="text-[11px] font-bold text-red-600 hover:text-red-700 bg-white px-2.5 py-1 rounded-lg border border-red-200"
              >
                + Tambah Butir
              </button>
            </div>
            {formData.keyCompetencies.map((comp, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  type="text"
                  value={comp}
                  onChange={(e) => handleArrayChange('keyCompetencies', idx, e.target.value)}
                  placeholder={`Kompetensi ${idx + 1}`}
                  className="flex-1 px-3 py-2 bg-white rounded-xl border border-gray-200 text-xs focus:border-red-600 outline-none"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveArrayItem('keyCompetencies', idx)}
                  className="p-2 text-gray-400 hover:text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Career Prospects Array */}
          <div className="space-y-2 bg-gray-50 p-4 rounded-2xl border border-gray-200/80">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block">
                Prospek Karir & Pekerjaan
              </label>
              <button
                type="button"
                onClick={() => handleAddArrayItem('careerProspects')}
                className="text-[11px] font-bold text-red-600 hover:text-red-700 bg-white px-2.5 py-1 rounded-lg border border-red-200"
              >
                + Tambah Karir
              </button>
            </div>
            {formData.careerProspects.map((pros, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  type="text"
                  value={pros}
                  onChange={(e) => handleArrayChange('careerProspects', idx, e.target.value)}
                  placeholder={`Profesi / Karir ${idx + 1}`}
                  className="flex-1 px-3 py-2 bg-white rounded-xl border border-gray-200 text-xs focus:border-red-600 outline-none"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveArrayItem('careerProspects', idx)}
                  className="p-2 text-gray-400 hover:text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
            <button
              type="button"
              onClick={() => {
                setIsCreatingNew(false);
                setEditingMajor(null);
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
              <span>Simpan Program Keahlian</span>
            </button>
          </div>
        </form>
      )}

      {/* Majors List Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {majors.map((major) => (
          <div
            key={major.id}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  src={major.image}
                  alt={major.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-black px-2.5 py-1 rounded-lg uppercase tracking-wider">
                  {major.code}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-base font-bold text-gray-900">{major.name}</h3>
                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{major.shortDesc}</p>
                
                <div className="pt-2 text-[11px] text-gray-500 space-y-1">
                  <div><strong>Kompetensi:</strong> {major.keyCompetencies.length} butir</div>
                  <div><strong>Peluang Karir:</strong> {major.careerProspects.length} pilihan</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-end gap-2">
              <button
                onClick={() => handleStartEdit(major)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:border-red-300 text-gray-700 hover:text-red-600 text-xs font-bold transition-colors cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(major.id, major.name)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold transition-colors cursor-pointer"
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
