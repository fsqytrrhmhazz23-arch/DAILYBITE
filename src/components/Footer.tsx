import { Leaf, Award, Mail, Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-editorial-black text-editorial-cream/70 pt-20 pb-8 text-left border-t border-editorial-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links & Bio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-editorial-cream/10 pb-16">
          
          {/* Column 1 - Bio & Branding (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="font-serif font-light text-2xl tracking-[0.15em] text-white">
                DAILY<span className="font-bold text-editorial-terracotta">BITE</span>
              </span>
            </div>
            
            <p className="text-xs text-editorial-cream/80 leading-relaxed font-sans">
              <strong>PT. Dailybite Nusantara</strong> adalah pelopor penyedia layanan katering gizi premium berbasis sains pangan di Indonesia. Berkomitmen menciptakan diet harian seimbang demi memelihara kesehatan metabolik jangka panjang secara paripurna.
            </p>

            <div className="flex items-center space-x-2.5 text-[9px] bg-white/5 px-3 py-2 border border-white/10 w-fit font-mono tracking-wider">
              <ShieldCheck className="h-4 w-4 text-editorial-terracotta shrink-0" />
              <span className="text-editorial-cream/90 uppercase">
                HALAL ID00210000287121122 | DINKES P-IRT 506317402014-26
              </span>
            </div>
          </div>

          {/* Column 2 - Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] border-b border-white/10 pb-2">Program Gizi</h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li><a href="#diet" className="hover:text-editorial-terracotta transition-colors">Fat Loss & Shredded</a></li>
              <li><a href="#diet" className="hover:text-editorial-terracotta transition-colors">Fit & Active (Balanced)</a></li>
              <li><a href="#diet" className="hover:text-editorial-terracotta transition-colors">Muscle Builder (Bulk)</a></li>
              <li><a href="#diet" className="hover:text-editorial-terracotta transition-colors">Office Wellness Bento</a></li>
              <li><a href="#menu" className="hover:text-editorial-terracotta transition-colors">Catering Event & Seminar</a></li>
            </ul>
          </div>

          {/* Column 3 - Company Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] border-b border-white/10 pb-2">Perusahaan</h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li><a href="#about" className="hover:text-editorial-terracotta transition-colors">Tentang PT. Dailybite</a></li>
              <li><a href="#about" className="hover:text-editorial-terracotta transition-colors">Visi & Misi Bisnis</a></li>
              <li><a href="#about" className="hover:text-editorial-terracotta transition-colors">4 Komitmen Utama</a></li>
              <li><a href="#contact" className="hover:text-editorial-terracotta transition-colors">Karir & Internship</a></li>
              <li><a href="#contact" className="hover:text-editorial-terracotta transition-colors">Kontak Hubungan Pers</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-xs font-sans">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] border-b border-white/10 pb-2">Hubungi Layanan Gizi</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-editorial-terracotta shrink-0 mt-0.5" />
                <span className="leading-relaxed text-editorial-cream/80">
                  <strong>Pusat Layanan:</strong> Jl. Kuliner Gizi Raya No. 42, Kebayoran Baru, Jakarta Selatan, 12160
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-editorial-terracotta shrink-0" />
                <span>+62 (21) 5088-2940 (Kemitraan Korporat)</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-editorial-terracotta shrink-0" />
                <span>info@dailybite.co.id | sales@dailybite.co.id</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar - Copyrights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] space-y-4 sm:space-y-0 text-editorial-cream/40 uppercase tracking-widest font-mono">
          <p>© 2026 PT. Dailybite Nusantara. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <a href="#about" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <span>Made for</span>
              <Heart className="h-3 w-3 fill-editorial-terracotta text-editorial-terracotta" />
              <span>Indonesia Sehat</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
