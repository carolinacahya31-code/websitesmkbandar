import React, { useState } from 'react';
import { MessageSquare, Trash2, Mail, Phone, Calendar, User, CheckCircle2, AlertCircle } from 'lucide-react';
import { useSchoolContent } from '../../../context/SchoolContext';

export const MessagesTab: React.FC = () => {
  const { contactMessages, deleteContactMessage, clearAllContactMessages } = useSchoolContent();
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    if (window.confirm('Hapus pesan ini dari riwayat kotak masuk?')) {
      deleteContactMessage(id);
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus SEMUA pesan masuk?')) {
      clearAllContactMessages();
    }
  };

  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-red-600" /> Pesan Masuk & Permintaan Informasi ({contactMessages.length})
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Daftar pertanyaan dan pesan yang dikirim oleh pengunjung atau orang tua melalui formulir kontak di website.
          </p>
        </div>

        {contactMessages.length > 0 && (
          <button
            onClick={handleClearAll}
            className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-red-600 font-bold text-xs px-3.5 py-2 rounded-xl transition-all cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
            <span>Kosongkan Semua Pesan</span>
          </button>
        )}
      </div>

      {contactMessages.length === 0 ? (
        <div className="bg-white p-12 rounded-3xl border border-gray-200 text-center space-y-3">
          <div className="w-12 h-12 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-gray-900">Belum Ada Pesan Masuk</h3>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            Pesan yang dikirimkan pengunjung dari formulir kontak di website akan otomatis muncul di sini secara langsung.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {contactMessages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-xs hover:border-red-200 transition-all p-5 space-y-3"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-gray-100 pb-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-red-600" /> {msg.name}
                    </h4>
                    <span className="text-[10px] bg-red-50 text-red-700 font-bold px-2 py-0.5 rounded">
                      {msg.subject || 'Pertanyaan Umum'}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3 text-gray-400" /> {msg.email}
                    </span>
                    {msg.phone && (
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-emerald-600" /> {msg.phone}
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-gray-400">
                      <Calendar className="w-3 h-3" /> {msg.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${msg.email}?subject=Balasan: ${encodeURIComponent(msg.subject || 'Informasi SMKN 1 Bandar')}`}
                    className="inline-flex items-center gap-1 bg-red-50 hover:bg-red-600 text-red-700 hover:text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Balas Email</span>
                  </a>
                  {msg.phone && (
                    <a
                      href={`https://wa.me/${msg.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  )}
                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                    title="Hapus Pesan"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Message Content */}
              <div className="bg-gray-50 p-4 rounded-xl text-xs text-gray-700 leading-relaxed">
                {msg.message}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
