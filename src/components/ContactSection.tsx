import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, HelpCircle, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO, FAQS } from '../data/schoolData';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="kontak" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" /> Hubungi Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Kontak & <span className="text-red-600">Peta Lokasi</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Punya pertanyaan mengenai program keahlian, pendaftaran siswa baru, atau kemitraan industri? Silakan hubungi kami atau kunjungi langsung kampus sekolah.
          </p>
        </div>

        {/* Contact Info Cards & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 text-left">
          
          {/* Left Column: Contact Cards & Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Alamat Sekolah</h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{SCHOOL_INFO.address}</p>
                </div>
              </div>
            </div>

            {/* Phone & Email Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase block">Telepon</span>
                  <span className="text-xs font-bold text-gray-800">{SCHOOL_INFO.phone}</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase block">Email Resmi</span>
                  <span className="text-xs font-bold text-gray-800 truncate block">{SCHOOL_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase block">Jam Operasional Layanan</span>
                <span className="text-xs font-bold text-gray-800">{SCHOOL_INFO.operatingHours}</span>
              </div>
            </div>

            {/* Google Maps Preview Embed */}
            <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="relative h-64 w-full rounded-xl overflow-hidden bg-gray-100">
                <iframe
                  title="Lokasi Peta SMK Negeri 1 Bandar"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d127480.1737494324!2d99.26455782948237!3d3.1590459997331903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssmk%20negeri%201%20bandar!5e0!3m2!1sid!2sid!4v1786433920694!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full filter saturate-150"
                />
                <div className="absolute bottom-2 right-2">
                  <a
                    href="https://www.google.com/maps/search/smk+negeri+1+bandar"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md text-red-700 font-bold text-xs px-3 py-1.5 rounded-lg shadow-md hover:bg-white transition-all"
                  >
                    <span>Buka Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-md border border-gray-100">
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">Kirim Pesan Ke Sekolah</h3>
            <p className="text-xs text-gray-500 mb-6">Isi formulir di bawah ini untuk terhubung langsung dengan tim humas SMKN 1 Bandar.</p>

            {submitted ? (
              <div className="p-8 bg-red-50 rounded-2xl border border-red-200 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-extrabold text-gray-900">Pesan Anda Berhasil Terkirim!</h4>
                <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                  Terima kasih, <strong>{formData.name}</strong>. Tim Humas SMK Negeri 1 Bandar akan merespons pesan Anda melalui email (<strong>{formData.email}</strong>) dalam kurun waktu 1x24 jam kerja.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 block">Nama Lengkap *</label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 block">Email Aktif *</label>
                    <input
                      type="email"
                      required
                      placeholder="contoh@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 block">Nomor HP / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="081234567890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 block">Subjek Pesan *</label>
                    <input
                      type="text"
                      required
                      placeholder="Misal: Informasi Pendaftaran / Kerjasama PKL"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 block">Isi Pesan *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tuliskan pertanyaan atau pesan Anda secara lengkap..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto text-left">
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">
              <HelpCircle className="w-3.5 h-3.5" /> Pertanyaan Sering Diajukan
            </div>
            <h3 className="text-2xl font-bold text-gray-900">FAQ Orang Tua & Calon Siswa</h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 flex items-center justify-between gap-4 text-left font-bold text-gray-900 text-sm sm:text-base hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <div className={`p-1.5 rounded-lg shrink-0 ${isOpen ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-500'}`}>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
