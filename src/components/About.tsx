import { ShieldCheck, HeartPulse, Sparkles, ChefHat, Leaf, FileText, GraduationCap, BookOpen } from 'lucide-react';
import { CERTIFICATIONS } from '../data/companyData';
import fisqiyaPhoto from '../assets/images/fisqiya_profile_real_1784353712087.jpg';

export default function About() {
  const pillars = [
    {
      icon: Leaf,
      title: '100% Bahan Alami & Segar',
      desc: 'Kami bekerja sama langsung dengan kelompok petani lokal untuk memasok bahan sayur hidromulya dan daging premium bebas hormon.'
    },
    {
      icon: HeartPulse,
      title: 'Bimbingan Ahli Gizi Klinis',
      desc: 'Setiap resep dirancang dan dihitung kandungan nutrisinya (kalori, protein, lemak, karbo) secara presisi oleh ahli gizi bersertifikat.'
    },
    {
      icon: ChefHat,
      title: 'Kuliner Standar Bintang Lima',
      desc: 'Sehat tidak berarti hambar. Tim chef profesional kami meracik bumbu rempah alami tanpa tambahan MSG sintetis untuk rasa juara.'
    },
    {
      icon: ShieldCheck,
      title: 'Higienitas & Keamanan Pangan',
      desc: 'Proses memasak dilakukan di dapur steril berstandar HACCP dengan pengecekan suhu ketat dan pengemasan kedap udara (vacuum sealed).'
    }
  ];

  return (
    <section id="about" className="py-24 bg-editorial-cream border-b border-editorial-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-1.5 border border-editorial-black px-3 py-1 bg-editorial-tan/40 text-editorial-black text-[10px] font-bold tracking-widest uppercase">
              <Sparkles className="h-3 w-3 text-editorial-terracotta" />
              <span>SIAPA KAMI</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-editorial-black leading-tight">
              Melayani Kesehatan Indonesia Lewat <span className="font-bold text-editorial-terracotta block sm:inline italic">Sajian Bernutrisi Tinggi</span>
            </h2>
            
            <p className="text-editorial-black/80 leading-relaxed text-sm sm:text-base font-serif italic">
              Berdiri sejak tahun 2021, <strong>PT. DAILYBITE NUSANTARA</strong> lahir dari komitmen mendalam untuk merevolusi kebiasaan makan sehat di Indonesia. Kami memahami bahwa kesibukan perkotaan seringkali mengorbankan kualitas asupan makanan Anda.
            </p>
            <p className="text-editorial-black/70 leading-relaxed text-xs sm:text-sm">
              Melalui kombinasi keahlian medis klinis di bidang gizi dengan seni kuliner kelas dunia, kami menyediakan ratusan variasi menu harian yang dikirimkan langsung ke depan pintu Anda. Kami bangga melayani lebih dari 15.000 pelanggan aktif dan puluhan korporat besar di wilayah Jabodetabek.
            </p>
          </div>

          {/* Visi Misi Card Grid (Bento style) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="bg-editorial-terracotta text-white border border-editorial-black rounded-none p-6 text-left space-y-3">
              <span className="text-[9px] font-bold tracking-widest uppercase opacity-80">VISI KAMI</span>
              <p className="font-serif italic text-2xl">Pelopor Solusi Nutrisi</p>
              <p className="text-xs text-white/90 leading-relaxed">
                Menjadi mitra katering sehat dan wellness korporat nomor satu di Indonesia yang menginspirasi gaya hidup aktif, berenergi, serta bebas dari penyakit degeneratif.
              </p>
            </div>
            <div className="bg-editorial-cream border border-editorial-black rounded-none p-6 text-left space-y-3">
              <span className="text-[9px] font-bold tracking-widest text-editorial-black/50 uppercase">MISI KAMI</span>
              <p className="font-serif italic text-xl text-editorial-black">Integritas Gizi & Rasa</p>
              <ul className="text-xs text-editorial-black/80 space-y-2 list-disc pl-4 leading-relaxed">
                <li>Menyediakan makanan sehat berkualitas premium yang dapat diakses dengan mudah.</li>
                <li>Menerapkan transparansi informasi gizi pada setiap kemasan.</li>
                <li>Mendukung sirkularitas ekonomi petani lokal di Indonesia.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The 4 Pillars */}
        <div className="text-left border-t border-editorial-black pt-12 mb-12">
          <span className="text-[9px] font-bold tracking-widest text-editorial-terracotta uppercase">KOMITMEN KAMI</span>
          <h3 className="text-2xl sm:text-3xl font-serif text-editorial-black mt-1">4 Pilar Utama PT. DailyBite</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-20">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                id={`pillar-card-${idx}`}
                className="bg-editorial-cream border border-editorial-black rounded-none p-6 transition-all duration-300 hover:bg-editorial-tan/20 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="text-editorial-terracotta w-fit mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-serif italic text-lg text-editorial-black">{p.title}</h4>
                  <p className="text-xs text-editorial-black/75 mt-2 leading-relaxed">{p.desc}</p>
                </div>
                <div className="text-[10px] text-editorial-black/30 font-bold tracking-wider self-end mt-4">
                  0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Row */}
        <div className="bg-editorial-cream rounded-none p-8 border border-editorial-black">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-md space-y-2">
              <div className="flex items-center space-x-1.5 text-[9px] font-bold text-editorial-terracotta tracking-widest uppercase">
                <FileText className="h-3.5 w-3.5" />
                <span>LEGAL & SERTIFIKAT</span>
              </div>
              <h4 className="font-serif italic text-2xl text-editorial-black">Dapur Tersertifikasi Resmi</h4>
              <p className="text-xs text-editorial-black/75 leading-relaxed">
                Kami menjamin keamanan pangan harian Anda melalui audit berkala dari lembaga penilai sertifikasi independen nasional.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="bg-editorial-cream p-4 rounded-none border border-editorial-black flex flex-col items-center text-center space-y-2">
                  <div className="h-10 w-10 overflow-hidden flex items-center justify-center bg-white border border-editorial-black">
                    <img src={cert.logo} alt={cert.name} className="h-full w-full object-cover" />
                  </div>
                  <p className="text-xs font-serif font-bold text-editorial-black leading-none">{cert.name}</p>
                  <span className="text-[9px] font-mono text-editorial-black/60 bg-editorial-tan/40 px-2 py-0.5 border border-editorial-black/10">
                    {cert.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Developer / Student Profile Section */}
        <div id="student-profile" className="mt-20 border-t border-editorial-black pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Student Photo Column (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <div className="relative aspect-square w-full max-w-[280px] bg-white border-[6px] border-editorial-black shadow-lg overflow-hidden group">
                <img
                  src={fisqiyaPhoto}
                  alt="Fisqiya turrohmah azzahra"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] contrast-[105%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-editorial-black/80 text-white text-[9px] font-bold uppercase tracking-widest text-center py-2">
                  DIPERIKSA MAHASISWA ASLI
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-serif italic text-editorial-black font-semibold">Fisqiya turrohmah azzahra</p>
                <p className="text-[9px] font-bold text-editorial-black/50 uppercase tracking-widest">NIM. 11250011</p>
              </div>
            </div>

            {/* Student Academic Info Column (8 cols) */}
            <div className="lg:col-span-8 text-left space-y-6">
              <div className="inline-flex items-center space-x-1.5 border border-editorial-black px-3 py-1 bg-editorial-tan/40 text-editorial-black text-[10px] font-bold tracking-widest uppercase">
                <GraduationCap className="h-4 w-4 text-editorial-terracotta" />
                <span>AKADEMIK & SERTIFIKASI MAHASISWA</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-serif font-light tracking-tight text-editorial-black leading-tight">
                Profil Pengembang & <span className="font-bold text-editorial-terracotta italic block sm:inline">Kreator Sistem</span>
              </h3>

              {/* Grid of academic details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-editorial-black/20 py-6">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-editorial-black/40 uppercase tracking-widest">Nama Lengkap</span>
                  <p className="text-sm font-serif italic font-bold text-editorial-black">Fisqiya turrohmah azzahra</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-editorial-black/40 uppercase tracking-widest">Nomor Induk Mahasiswa</span>
                  <p className="text-sm font-mono font-bold text-editorial-black">11250011</p>
                </div>
                <div className="space-y-1 pt-2 border-t border-editorial-black/10 sm:border-none">
                  <span className="text-[9px] font-bold text-editorial-black/40 uppercase tracking-widest font-sans">Semester & Program</span>
                  <p className="text-sm font-serif italic font-bold text-editorial-black">Semester 2 (Dua)</p>
                </div>
                <div className="space-y-1 pt-2 border-t border-editorial-black/10 sm:border-none">
                  <span className="text-[9px] font-bold text-editorial-black/40 uppercase tracking-widest font-sans">Kelas Akademik</span>
                  <p className="text-sm font-serif italic font-bold text-editorial-black">Kelas Reguler C</p>
                </div>
              </div>

              {/* Big highlighted quote for UAS STIE Ekadharma Indonesia */}
              <div className="bg-editorial-terracotta text-white border border-editorial-black p-5 relative overflow-hidden">
                <div className="absolute right-3 bottom-1 text-white/5 font-serif font-bold text-6xl select-none uppercase pointer-events-none">
                  UAS
                </div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-white/80 mb-2">TUGAS BESAR AKHIR SEMESTER</p>
                <p className="font-serif italic text-lg sm:text-xl leading-relaxed">
                  "Website ini dibuat sebagai Ujian Akhir Semester Mata Kuliah Aplikasi Komputer Bisnis kampus STIE Ekadharma Indonesia"
                </p>
                <div className="mt-4 flex items-center space-x-2 text-[9px] font-bold uppercase tracking-wider text-white/90 font-mono">
                  <BookOpen className="h-4 w-4 text-editorial-cream" />
                  <span>STIE EKADHARMA INDONESIA • PRODI MANAJEMEN</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
