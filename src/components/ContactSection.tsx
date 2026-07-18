import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ChevronDown, ChevronUp, Star, CheckCircle, HelpCircle } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../data/companyData';

export default function ContactSection() {
  const [activeFaqId, setActiveFaqId] = useState<string | null>('faq-1');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cateringType: 'individual',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceLabels: { [key: string]: string } = {
      individual: 'Katering Personal Mandiri',
      corporate: 'Office Wellness Bento (Korporat)',
      event: 'Katering Event / Seminar'
    };

    const serviceText = serviceLabels[formData.cateringType] || formData.cateringType;

    const messageText = `Halo Admin PT. Dailybite, saya ingin menghubungi / mengajukan kerjasama katering dengan detail berikut:\n\n*Detail Kontak & Kerjasama:*\n- Nama Lengkap: ${formData.name}\n- Tipe Layanan: ${serviceText}\n- Email Bisnis: ${formData.email}\n- No. Telepon / WhatsApp: ${formData.phone}\n\n*Pesan Kebutuhan:*\n${formData.message}\n\nMohon bantu dihubungi kembali oleh pihak Dailybite. Terima kasih!`;
    const waUrl = `https://wa.me/6285819343733?text=${encodeURIComponent(messageText)}`;
    
    // Open in new tab
    window.open(waUrl, '_blank');

    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        cateringType: 'individual',
        message: ''
      });
    }, 4000);
  };

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <section id="contact" className="py-24 bg-editorial-cream border-b border-editorial-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Grid Section */}
        <div className="mb-32">
          <div className="text-left border-b border-editorial-black pb-12 mb-16 space-y-4">
            <span className="bg-editorial-tan/40 border border-editorial-black text-editorial-black text-[9px] font-bold tracking-widest uppercase px-3 py-1">
              KATA MEREKA
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-editorial-black leading-tight">
              Dipercaya oleh Individu & <span className="font-bold text-editorial-terracotta italic block sm:inline">Perusahaan Ternama</span>
            </h2>
            <p className="text-editorial-black/70 font-serif italic text-base sm:text-lg max-w-xl">
              Kisah transformasi gaya hidup lebih sehat dan bugar dari para pelanggan aktif yang mempercayakan nutrisi hariannya kepada PT. DailyBite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                id={`test-card-${t.id}`}
                className="bg-editorial-cream border border-editorial-black rounded-none p-6 flex flex-col justify-between hover:bg-editorial-tan/10 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex text-editorial-terracotta">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-3.5 w-3.5 fill-editorial-terracotta text-editorial-terracotta"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-editorial-black/80 leading-relaxed font-serif italic">
                    "{t.content}"
                  </p>
                </div>
                <div className="flex items-center space-x-3 pt-6 border-t border-editorial-black/10 mt-6">
                  <div className="h-10 w-10 rounded-none border border-editorial-black overflow-hidden shrink-0 bg-white">
                    <img src={t.avatar} alt={t.name} referrerPolicy="no-referrer" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif italic text-sm font-bold text-editorial-black leading-tight">{t.name}</h4>
                    <p className="text-[10px] text-editorial-black/60 font-semibold uppercase tracking-wider mt-1">
                      {t.role}
                      {t.company && <span className="block text-editorial-terracotta font-bold mt-0.5">{t.company}</span>}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ & Contact Form Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-editorial-black">
          
          {/* FAQ Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="flex items-center space-x-2 border-b border-editorial-black pb-3">
              <HelpCircle className="h-5 w-5 text-editorial-terracotta" />
              <h3 className="font-serif italic text-xl font-bold text-editorial-black">Pertanyaan Umum (FAQ)</h3>
            </div>
            <p className="text-xs text-editorial-black/60 uppercase tracking-widest">
              Informasi transparan mengenai langganan katering, pengiriman, dan kustomisasi menu sehat.
            </p>

            <div className="space-y-2 pt-2">
              {FAQS.map((faq) => {
                const isOpen = activeFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-editorial-cream border border-editorial-black rounded-none overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="text-xs font-bold text-editorial-black uppercase tracking-wider leading-snug">{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4 text-editorial-terracotta shrink-0 ml-3" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-editorial-black/50 shrink-0 ml-3" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-editorial-black/80 leading-relaxed border-t border-editorial-black/10 bg-editorial-tan/10 font-serif italic">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-editorial-cream border-2 border-editorial-black p-6 sm:p-8 rounded-none text-left">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="bg-editorial-tan/40 text-editorial-terracotta p-4 rounded-none border border-editorial-black w-fit mx-auto shadow-sm">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="font-serif italic text-2xl text-editorial-black">Pertanyaan Berhasil Terkirim!</h3>
                <p className="text-xs text-editorial-black/70 uppercase tracking-wider max-w-sm mx-auto leading-relaxed">
                  Terima kasih atas laporan Anda. Tim Ahli Gizi & Advisor Hubungan Korporat PT. DailyBite akan menghubungi Anda dalam waktu maks. 2 jam kerja.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-[9px] font-bold tracking-widest text-white bg-editorial-terracotta px-4 py-2 border border-editorial-terracotta hover:bg-editorial-black hover:border-editorial-black transition-colors uppercase"
                >
                  Kirim Pesan Baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-editorial-black pb-3">
                  <h3 className="font-serif italic text-xl font-bold text-editorial-black">Hubungi Kami / Ajukan Kerjasama</h3>
                  <p className="text-[10px] text-editorial-black/50 uppercase tracking-widest mt-1">Sampaikan kebutuhan katering sehat instansi korporat atau program personal Anda harian.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-editorial-black/50 uppercase tracking-widest">Nama Lengkap</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Sarah Wijaya"
                      className="w-full bg-editorial-cream border border-editorial-black rounded-none px-4 py-2.5 text-xs text-editorial-black placeholder-editorial-black/40 focus:outline-none focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-editorial-black/50 uppercase tracking-widest">Tipe Layanan</label>
                    <select
                      name="cateringType"
                      value={formData.cateringType}
                      onChange={handleInputChange}
                      className="w-full bg-editorial-cream border border-editorial-black rounded-none px-4 py-2.5 text-xs text-editorial-black focus:outline-none focus:bg-white font-semibold transition-all"
                    >
                      <option value="individual">Katering Personal Mandiri</option>
                      <option value="corporate">Office Wellness Bento (Korporat)</option>
                      <option value="event">Katering Event / Seminar</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-editorial-black/50 uppercase tracking-widest">Email Bisnis</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="sarah@perusahaan.com"
                      className="w-full bg-editorial-cream border border-editorial-black rounded-none px-4 py-2.5 text-xs text-editorial-black placeholder-editorial-black/40 focus:outline-none focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-editorial-black/50 uppercase tracking-widest">No. Telepon / WhatsApp</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0812XXXXXXXX"
                      className="w-full bg-editorial-cream border border-editorial-black rounded-none px-4 py-2.5 text-xs text-editorial-black placeholder-editorial-black/40 focus:outline-none focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-editorial-black/50 uppercase tracking-widest">Pesan Kebutuhan Anda</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Sebutkan detail perkiraan porsi, alergi makanan, atau jadwal uji coba katering..."
                    className="w-full bg-editorial-cream border border-editorial-black rounded-none px-4 py-2.5 text-xs text-editorial-black placeholder-editorial-black/40 focus:outline-none focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-editorial-terracotta hover:bg-editorial-black text-white text-xs font-bold tracking-[0.2em] uppercase py-4 rounded-none transition-all duration-300 border border-editorial-terracotta hover:border-editorial-black flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>KIRIM FORMULIR KERJASAMA</span>
                </button>
              </form>
            )}

            {/* Office Info Footer Row */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-editorial-black/20 text-xs text-editorial-black/75">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-editorial-terracotta shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="font-bold text-editorial-black uppercase tracking-wider text-[9px]">Dapur Pusat</p>
                  <p className="text-[10px] leading-tight text-editorial-black/70 mt-0.5">Jl. Kuliner Gizi Raya No. 42, Kebayoran Baru, Jakarta Selatan</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-editorial-terracotta shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="font-bold text-editorial-black uppercase tracking-wider text-[9px]">Jam Operasional</p>
                  <p className="text-[10px] leading-none text-editorial-black/70 mt-0.5">Setiap Hari: 05.00 - 18.00 WIB</p>
                  <p className="text-[10px] leading-none text-editorial-black/70 mt-1">CS Support: 24 Jam</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
