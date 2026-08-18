import React, { useState } from 'react';
import { Building2, Save, CheckCircle2, Globe, Phone, Mail, Clock, MapPin, Share2 } from 'lucide-react';
import { useSchoolContent, SchoolInfoType } from '../../../context/SchoolContext';

export const GeneralInfoTab: React.FC = () => {
  const { schoolInfo, updateSchoolInfo } = useSchoolContent();
  const [formData, setFormData] = useState<SchoolInfoType>(schoolInfo);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSchoolInfo(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-red-600" /> Informasi Umum Sekolah
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Atur identitas, nama sekolah, nomor pokok, kontak resmi, dan akun media sosial.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer shrink-0"
        >
          <Save className="w-4 h-4" />
          <span>Simpan Perubahan</span>
        </button>
      </div>

      {savedSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-800 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Perubahan Informasi Umum Sekolah berhasil disimpan dan aktif di website!</span>
        </div>
      )}

      {/* Grid: Identity Details */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider text-red-600 border-b border-gray-100 pb-2">
          Identitas Dasar Sekolah
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 block">Nama Resmi Sekolah</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 block">NPSN</label>
              <input
                type="text"
                value={formData.npsn}
                onChange={(e) => setFormData({ ...formData, npsn: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none font-mono"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 block">Akreditasi</label>
              <input
                type="text"
                value={formData.accreditation}
                onChange={(e) => setFormData({ ...formData, accreditation: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 block">Tagline Utama (Slogan)</label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 block">Sub-Tagline Sekolah</label>
            <input
              type="text"
              value={formData.subTagline}
              onChange={(e) => setFormData({ ...formData, subTagline: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
            />
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-bold text-gray-700 block">Alamat Lengkap Sekolah</label>
            <textarea
              rows={2}
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none resize-none"
            />
          </div>
        </div>
      </div>

      {/* Grid: Contact Information */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider text-red-600 border-b border-gray-100 pb-2">
          Kontak & Jam Operasional
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 block flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-red-600" /> Nomor Telepon Kantor
            </label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 block flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp Humas
            </label>
            <input
              type="text"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 block flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-red-600" /> Email Resmi Sekolah
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
            />
          </div>

          <div className="space-y-1 md:col-span-3">
            <label className="text-xs font-bold text-gray-700 block flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-600" /> Jam Operasional Layanan
            </label>
            <input
              type="text"
              value={formData.operatingHours}
              onChange={(e) => setFormData({ ...formData, operatingHours: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Grid: Social Media Links */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider text-red-600 border-b border-gray-100 pb-2 flex items-center gap-1.5">
          <Share2 className="w-4 h-4" /> Tautan Media Sosial Resmi
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 block">Facebook Page URL</label>
            <input
              type="url"
              value={formData.socials.facebook}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  socials: { ...formData.socials, facebook: e.target.value }
                })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 block">Instagram URL</label>
            <input
              type="url"
              value={formData.socials.instagram}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  socials: { ...formData.socials, instagram: e.target.value }
                })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 block">YouTube Channel URL</label>
            <input
              type="url"
              value={formData.socials.youtube}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  socials: { ...formData.socials, youtube: e.target.value }
                })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 block">TikTok Account URL</label>
            <input
              type="url"
              value={formData.socials.tiktok}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  socials: { ...formData.socials, tiktok: e.target.value }
                })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
        >
          <Save className="w-4 h-4" />
          <span>Simpan Perubahan Informasi</span>
        </button>
      </div>
    </form>
  );
};
