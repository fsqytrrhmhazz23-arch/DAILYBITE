import { MenuItem, MealPlan, Testimonial, FAQItem } from '../types';

export const COMPANY_NAME = 'PT. Dailybite';
export const COMPANY_TAGLINE = 'Nutrisi Terbaik untuk Hari-Hari Produktif Anda';
export const COMPANY_SUBTITLE = 'Penyedia layanan katering sehat premium, boks makan siang korporat, dan program diet personal dengan bahan organik 100% segar, dirancang oleh ahli gizi klinis dan disajikan oleh chef profesional.';

export const MENUS: MenuItem[] = [
  {
    id: 'menu-1',
    name: 'Nasi Bakar Cakalang Kemangi',
    description: 'Nasi merah aromatik yang dibakar dengan suwiran ikan cakalang bumbu kemangi pedas segar, disajikan dengan tempe bacem panggang dan tumis sayur.',
    category: 'indonesian',
    calories: 450,
    protein: 32,
    carbs: 50,
    fat: 12,
    price: 65000,
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
    tags: ['Rendah Lemak', 'Tinggi Serat', 'Indonesian Fusion'],
    rating: 4.8
  },
  {
    id: 'menu-2',
    name: 'Honey Mustard Glazed Salmon',
    description: 'Salmon panggang segar dengan lumuran saus madu mustard organik, disajikan dengan ubi madu panggang rosemary dan tumis brokoli asparagus.',
    category: 'western',
    calories: 520,
    protein: 38,
    carbs: 42,
    fat: 22,
    price: 95000,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
    tags: ['Omega 3', 'Gluten Free', 'Best Seller'],
    rating: 4.9
  },
  {
    id: 'menu-3',
    name: 'Beef Bulgogi Shira-bowl',
    description: 'Daging sapi sirloin iris tipis bumbu bulgogi autentik rendah sodium, disajikan di atas nasi shirataki hangat dengan bayam wijen dan kimchi buatan rumah.',
    category: 'asian',
    calories: 380,
    protein: 28,
    carbs: 32,
    fat: 14,
    price: 85000,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    tags: ['Keto Friendly', 'Rendah Kalori', 'Zero Rice'],
    rating: 4.7
  },
  {
    id: 'menu-4',
    name: 'Quinoa Avocado Superfood Salad',
    description: 'Kombinasi quinoa tri-color premium, irisan alpukat mentega, edamame, tomat ceri, dan bayam organik dengan siraman saus zesty lemon vinaigrette.',
    category: 'salad-bowl',
    calories: 340,
    protein: 10,
    carbs: 38,
    fat: 18,
    price: 60000,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    tags: ['100% Plant-Based', 'Superfood', 'Detox'],
    rating: 4.6
  },
  {
    id: 'menu-5',
    name: 'Ayam Betutu Kinoa Organik',
    description: 'Ayam kampung suwir bumbu khas Bali betutu kaya rempah alami, disajikan dengan kinoa tinggi serat, plecing kangkung rendah garam, dan sambal matah kelapa murni.',
    category: 'indonesian',
    calories: 420,
    protein: 35,
    carbs: 30,
    fat: 15,
    price: 70000,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80',
    tags: ['Tinggi Protein', 'Bumbu Rempah Alami', 'Favorit Nusantara'],
    rating: 4.9
  },
  {
    id: 'menu-6',
    name: 'Grilled Chicken Rosemary Pesto',
    description: 'Dada ayam tanpa kulit dipanggang rosemary, disiram pesto daun selasih buatan sendiri, disajikan dengan zucchini panggang dan kentang baby merah.',
    category: 'western',
    calories: 460,
    protein: 42,
    carbs: 28,
    fat: 18,
    price: 75000,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80',
    tags: ['Tinggi Protein', 'Rendah Karbo', 'Lean Muscle'],
    rating: 4.8
  },
  {
    id: 'menu-7',
    name: 'Thai Peanut Tempe Warm Bowl',
    description: 'Tempe organik panggang renyah, nasi basmati cokelat, brokoli kukus, kubis ungu, disiram saus kacang Thailand gurih manis yang kaya nutrisi nabati.',
    category: 'asian',
    calories: 390,
    protein: 18,
    carbs: 48,
    fat: 14,
    price: 55000,
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=600&q=80',
    tags: ['Vegetarian', 'Budget Friendly', 'Tinggi Serat'],
    rating: 4.5
  },
  {
    id: 'menu-8',
    name: 'Caesar Salad with Smoked Turkey',
    description: 'Selada romaine renyah hidromulya, irisan tebal kalkun asap premium, telur rebus organik, roti gandum crouton, disajikan dengan saus yoghurt Caesar rendah kalori.',
    category: 'salad-bowl',
    calories: 310,
    protein: 24,
    carbs: 15,
    fat: 16,
    price: 65000,
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80',
    tags: ['Sangat Rendah Kalori', 'Sgar & Renyah', 'Protein Bersih'],
    rating: 4.7
  }
];

export const MEAL_PLANS: MealPlan[] = [
  {
    id: 'plan-weight-loss',
    name: 'Weight Loss & Shredded',
    description: 'Program penurunan berat badan & pembakaran lemak tubuh secara konstan. Fokus pada asupan defisit kalori, rendah karbohidrat olahan, dan tinggi protein bersih.',
    pricePerDay: 75000,
    pricePerWeek: 490000,
    features: [
      '350 - 450 Kalori per boks makan',
      'Defisit kalori aman (dipandu Ahli Gizi)',
      'Tanpa MSG & menggunakan minyak kelapa kelor',
      'Konsultasi Gizi Gratis di awal program',
      'Menu ganti setiap hari selama 4 minggu'
    ],
    idealFor: 'Menurunkan berat badan, membakar lemak perut, & detoksifikasi tubuh.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80',
    colorTheme: 'emerald',
    accentBg: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    id: 'plan-balanced',
    name: 'Fit & Active (Balanced)',
    description: 'Menjaga kebugaran, energi harian, serta menyeimbangkan metabolisme tubuh. Menggunakan rasio makro seimbang: 45% karbohidrat kompleks, 30% protein, 25% lemak sehat.',
    pricePerDay: 80000,
    pricePerWeek: 520000,
    features: [
      '500 - 600 Kalori per boks makan',
      'Menjaga tingkat energi stabil sepanjang hari',
      'Membantu pencegahan diabetes & kolesterol',
      'Kompleks karbohidrat pilihan (Beras Merah, Ubi, Quinoa)',
      'Porsi kenyang pas untuk produktivitas prima'
    ],
    idealFor: 'Pekerja kantor aktif, maintenance berat badan, & gaya hidup sehat jangka panjang.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    colorTheme: 'blue',
    accentBg: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: 'plan-muscle-gain',
    name: 'Muscle Builder & Performance',
    description: 'Dioptimalkan untuk atlet, pencinta angkat beban, atau yang ingin menambah massa otot kering (lean bulk). Porsi protein ekstra tinggi dengan karbohidrat pengisi energi.',
    pricePerDay: 95000,
    pricePerWeek: 620000,
    features: [
      '750 - 900 Kalori per boks makan',
      '40g+ Protein murni per sajian katering',
      'Membantu pemulihan otot (muscle recovery) pasca latihan',
      'Daging sapi sirloin premium & dada ayam ganda',
      'Karbohidrat kompleks densitas tinggi untuk stamina'
    ],
    idealFor: 'Hipertrofi otot, penambahan berat badan sehat, & atlet performa.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    colorTheme: 'amber',
    accentBg: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    id: 'plan-corporate',
    name: 'Office Wellness Bento',
    description: 'Solusi makan siang sehat berskala besar untuk kantor. Dirancang khusus untuk menghindari fenomena kantuk setelah makan siang (postprandial somnolence) dengan indeks glikemik rendah.',
    pricePerDay: 55000,
    pricePerWeek: 250000,
    features: [
      '450 - 550 Kalori per boks bento',
      'Harga bersaing khusus kuantitas perusahaan',
      'Kemasan boks bio-degradable eco-friendly',
      'Pengiriman terjadwal serentak sebelum jam makan siang',
      'Meningkatkan produktivitas & wellness karyawan'
    ],
    idealFor: 'Perusahaan yang peduli kesehatan karyawan, katering event, & rapat direksi.',
    image: 'https://images.unsplash.com/photo-1536304997881-a372c179924b?auto=format&fit=crop&w=600&q=80',
    colorTheme: 'rose',
    accentBg: 'bg-rose-50 text-rose-700 border-rose-200'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Wijaya',
    role: 'Product Manager',
    company: 'Fintech Utama Indonesia',
    content: 'Berkat langganan paket Fit & Active PT. Dailybite, makan siang di kantor jadi lebih bernutrisi dan tidak bikin mengantuk. Berat badan saya stabil dan tubuh terasa jauh lebih ringan dan bertenaga!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-2',
    name: 'dr. Adrian Pratama, Sp.GK',
    role: 'Dokter Spesialis Gizi Klinik',
    company: 'Rumah Sakit Medika Sehat',
    content: 'Formulasi masakan PT. Dailybite sangat presisi dalam hitungan makronutrisi. Mereka jujur dengan gramasi protein dan karbohidrat, serta menggunakan garam rendah natrium. Sangat direkomendasikan untuk menunjang terapi diet sehat.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-3',
    name: 'Budi Santoso',
    role: 'VP of Human Resources',
    company: 'GoGlobal Digital',
    content: 'Kami berlangganan Office Wellness Bento untuk 120 staf kami setiap hari Senin-Jumat. Karyawan sangat antusias karena menu tidak membosankan dan rasanya lezat mirip restoran bintang lima namun versi sehatnya.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-4',
    name: 'Amalia Siregar',
    role: 'Fitness Coach & Influencer',
    company: 'Pulse Gym',
    content: 'Sebagai pelatih kebugaran, saya sangat ketat soal asupan. Paket Muscle Builder dari Dailybite menyelamatkan waktu masak saya. Rasanya juara, dagingnya empuk tidak alot, bumbunya meresap sampai ke serat terdalam!',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah menu PT. Dailybite bersertifikat Halal?',
    answer: 'Ya, seluruh dapur produksi, peralatan memasak, supplier bahan baku, hingga proses distribusi kami telah bersertifikat Halal secara resmi dari BPJPH dan MUI. Higienitas dapur kami juga bersertifikasi HACCP.'
  },
  {
    id: 'faq-2',
    question: 'Bagaimana sistem pengiriman makanan?',
    answer: 'Makanan dimasak segar setiap dini hari dan dikemas higienis. Pengiriman dilakukan oleh armada internal kami menggunakan tas thermal khusus untuk menjamin makanan sampai dalam kondisi hangat & segar sebelum pukul 11:30 WIB setiap harinya.'
  },
  {
    id: 'faq-3',
    question: 'Dapatkah saya memesan kustom menu jika memiliki alergi?',
    answer: 'Tentu saja bisa. Pada saat pendaftaran awal di portal kami atau melalui tim WhatsApp, Anda dapat mencantumkan daftar alergi atau makanan pantangan (seperti seafood, kacang-kacangan, telur, gluten). Tim Ahli Gizi kami akan memodifikasi menu khusus untuk Anda.'
  },
  {
    id: 'faq-4',
    question: 'Berapa batas minimal hari untuk pemesanan katering sehat?',
    answer: 'Kami menyediakan opsi berlangganan fleksibel mulai dari Program 5 Hari (Senin-Jumat), Program 20 Hari (Bulanan), hingga pemesanan Boks Event satuan minimal 15 porsi.'
  },
  {
    id: 'faq-5',
    question: 'Apakah bisa melakukan jeda/pause pengiriman katering?',
    answer: 'Bisa! Jika Anda sedang keluar kota atau memiliki urusan dinas, Anda bisa memberi tahu tim CS kami H-1 (sebelum jam 14:00 WIB) untuk menjeda langganan Anda. Sisa hari katering Anda tidak akan hangus dan digeser ke pekan berikutnya.'
  }
];

export const CERTIFICATIONS = [
  { name: 'MUI Halal Indonesia', logo: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=100&q=80', desc: 'ID00210000287121122' },
  { name: 'HACCP Certified', logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=100&q=80', desc: 'Food Safety Management Standards' },
  { name: 'Dinas Kesehatan P-IRT', logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=100&q=80', desc: 'Izin Operasional Higiene Sanitasi' }
];
