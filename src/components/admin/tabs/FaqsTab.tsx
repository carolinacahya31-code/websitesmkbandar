import React, { useState } from 'react';
import { HelpCircle, Plus, Edit3, Trash2, Save, X, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { useSchoolContent } from '../../../context/SchoolContext';
import { FaqItem } from '../../../types';

export const FaqsTab: React.FC = () => {
  const { faqs, addFaq, editFaq, deleteFaq, updateFaqs } = useSchoolContent();
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');

  const [formData, setFormData] = useState<FaqItem>({
    question: '',
    answer: '',
    category: 'PPDB & Pendaftaran'
  });

  const categories = ['PPDB & Pendaftaran', 'Program Keahlian', 'Fasilitas & Biaya', 'Karir & Penyaluran'];

  const handleStartCreate = () => {
    setIsCreatingNew(true);
    setEditingIndex(null);
    setFormData({
      question: '',
      answer: '',
      category: 'PPDB & Pendaftaran'
    });
  };

  const handleStartEdit = (index: number, item: FaqItem) => {
    setEditingIndex(index);
    setIsCreatingNew(false);
    setFormData(item);
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.question.trim() || !formData.answer.trim()) return;

    if (isCreatingNew) {
      addFaq(formData);
      setSavedMessage('Pertanyaan FAQ baru berhasil ditambahkan!');
    } else if (editingIndex !== null) {
      editFaq(editingIndex, formData);
      setSavedMessage('Pertanyaan FAQ berhasil diperbarui!');
    }

    setIsCreatingNew(false);
    setEditingIndex(null);
    setTimeout(() => setSavedMessage(''), 3000);
  };

  const handleDelete = (index: number) => {
    if (window.confirm('Hapus butir tanya jawab ini?')) {
      deleteFaq(index);
      setSavedMessage('Pertanyaan FAQ berhasil dihapus.');
      setTimeout(() => setSavedMessage(''), 3000);
    }
  };

  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-red-600" /> FAQ & Tanya Jawab ({faqs.length} Pertanyaan)
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Kelola daftar pertanyaan yang sering diajukan calon siswa dan orang tua murid.
          </p>
        </div>

        {!isCreatingNew && editingIndex === null && (
          <button
            onClick={handleStartCreate}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Pertanyaan Baru</span>
          </button>
        )}
      </div>

      {savedMessage && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-800 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{savedMessage}</span>
        </div>
      )}

      {/* Form add/edit */}
      {(isCreatingNew || editingIndex !== null) && (
        <form onSubmit={handleSaveForm} className="bg-white p-6 rounded-2xl border-2 border-red-200 shadow-lg space-y-4 animate-in slide-in-from-top-3 duration-200">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <h3 className="text-base font-bold text-gray-900">
              {isCreatingNew ? 'Tambah FAQ Baru' : 'Edit Pertanyaan FAQ'}
            </h3>
            <button
              type="button"
              onClick={() => {
                setIsCreatingNew(false);
                setEditingIndex(null);
              }}
              className="p-1.5 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 block">Kategori FAQ</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 block">Pertanyaan</label>
              <input
                type="text"
                required
                placeholder="Contoh: Apa saja syarat pendaftaran peserta didik baru?"
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 font-semibold"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 block">Jawaban Lengkap</label>
              <textarea
                rows={3}
                required
                placeholder="Tuliskan jawaban yang jelas dan informatif..."
                value={formData.answer}
                onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 resize-none leading-relaxed"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
            <button
              type="button"
              onClick={() => {
                setIsCreatingNew(false);
                setEditingIndex(null);
              }}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl"
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-2 rounded-xl shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Simpan FAQ</span>
            </button>
          </div>
        </form>
      )}

      {/* FAQs List */}
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs hover:border-gray-300 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-4"
          >
            <div className="space-y-1.5 flex-1">
              <div className="inline-block bg-red-50 text-red-700 text-[10px] font-extrabold px-2.5 py-0.5 rounded-md uppercase">
                {faq.category || 'Umum'}
              </div>
              <h4 className="text-sm font-bold text-gray-900 leading-snug">{faq.question}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>

            <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-start">
              <button
                onClick={() => handleStartEdit(idx, faq)}
                className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                title="Edit FAQ"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(idx)}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                title="Hapus FAQ"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
