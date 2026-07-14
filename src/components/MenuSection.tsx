import { useState } from 'react';
import { Search, Star, MessageCircle, Scale, Flame, Sparkles, X, ChevronRight, Check, Leaf } from 'lucide-react';
import { MENUS, MEAL_PLANS } from '../data/companyData';
import { MenuItem } from '../types';

export default function MenuSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);
  
  // Custom serving multiplier for interactive modal
  const [servingSize, setServingSize] = useState<'regular' | 'double-protein' | 'extra-portion'>('regular');

  const categories = [
    { id: 'all', label: 'SEMUA MENU' },
    { id: 'indonesian', label: 'NUSANTARA' },
    { id: 'western', label: 'WESTERN' },
    { id: 'asian', label: 'ASIAN FUSION' },
    { id: 'salad-bowl', label: 'SALADS' }
  ];

  const filteredMenus = MENUS.filter(menu => {
    const matchesSearch = menu.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          menu.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          menu.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || menu.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleOpenModal = (menu: MenuItem) => {
    setSelectedMenu(menu);
    setServingSize('regular');
  };

  const handleCloseModal = () => {
    setSelectedMenu(null);
  };

  // Nutrition & Price Recalculator based on serving size
  const getRecalculatedValues = (menu: MenuItem) => {
    let multiplier = 1;
    let proteinAddon = 0;
    let label = 'Regular';
    let priceAddon = 0;

    if (servingSize === 'double-protein') {
      multiplier = 1.1; // slight change in general carbs/fats
      proteinAddon = 15; // +15g protein
      label = 'Double Protein (+15g)';
      priceAddon = 15000;
    } else if (servingSize === 'extra-portion') {
      multiplier = 1.35; // 35% more overall food
      label = 'Porsi Extra Jumbo (+35%)';
      priceAddon = 25000;
    }

    const price = menu.price + priceAddon;
    const calories = Math.round(menu.calories * multiplier + (servingSize === 'double-protein' ? 60 : 0));
    const protein = Math.round(menu.protein * (servingSize === 'extra-portion' ? 1.35 : 1) + proteinAddon);
    const carbs = Math.round(menu.carbs * multiplier);
    const fat = Math.round(menu.fat * multiplier);

    return { price, calories, protein, carbs, fat, label };
  };

  // Draft WhatsApp order message
  const getWhatsAppLink = (menu: MenuItem, recalculated: any) => {
    const baseText = `Halo Admin PT. Dailybite, saya ingin memesan menu katering sehat berikut:\n\n*Menu:* ${menu.name}\n*Pilihan Porsi:* ${recalculated.label}\n*Energi:* ${recalculated.calories} kkal\n*Rincian Gizi:* P: ${recalculated.protein}g, C: ${recalculated.carbs}g, F: ${recalculated.fat}g\n*Harga:* Rp ${recalculated.price.toLocaleString('id-ID')}\n\nMohon dibantu info ketersediaan slot katering terdekat. Terima kasih!`;
    return `https://wa.me/6281234567890?text=${encodeURIComponent(baseText)}`;
  };

  return (
    <section id="menu" className="py-24 bg-editorial-cream border-b border-editorial-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left border-b border-editorial-black pb-12 mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 border border-editorial-black px-3 py-1 bg-editorial-tan/40 text-editorial-black text-[10px] font-bold tracking-widest uppercase">
            <Sparkles className="h-3 w-3 text-editorial-terracotta" />
            <span>KREASI DAPUR KAMI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-editorial-black leading-tight">
            Jelajahi Menu Sehat & <span className="font-bold text-editorial-terracotta italic block sm:inline">Sajian Premium</span>
          </h2>
          <p className="text-editorial-black/70 font-serif italic text-base sm:text-lg max-w-2xl leading-relaxed">
            Dimasak segar harian oleh koki terbaik, setiap menu telah terkalibrasi kandungan nutrisinya untuk menjaga performa fisik dan mental urban professional.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 bg-editorial-cream border border-editorial-black p-1 rounded-none w-full md:w-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-none text-[9px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-editorial-black text-white'
                    : 'text-editorial-black/60 hover:text-editorial-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-editorial-black/60 h-4 w-4" />
            <input
              type="text"
              placeholder="Cari rasa atau bahan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-editorial-cream border border-editorial-black rounded-none text-xs font-bold tracking-wider placeholder-editorial-black/40 uppercase focus:outline-none focus:bg-white transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Menu Grid */}
        {filteredMenus.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {filteredMenus.map((menu) => (
              <div
                key={menu.id}
                id={`menu-card-${menu.id}`}
                className="bg-editorial-cream border border-editorial-black rounded-none overflow-hidden transition-all duration-300 flex flex-col h-full hover:bg-editorial-tan/10"
              >
                {/* Image & Rating Overlay */}
                <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-editorial-black">
                  <img
                    src={menu.image}
                    alt={menu.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[15%] contrast-[105%]"
                  />
                  <div className="absolute top-3 right-3 bg-editorial-cream border border-editorial-black px-2.5 py-1 text-[9px] font-bold text-editorial-black uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <Star className="h-3 w-3 fill-editorial-terracotta text-editorial-terracotta" />
                    <span>{menu.rating.toFixed(1)}</span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-editorial-terracotta text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1">
                      {menu.calories} kkal
                    </span>
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-editorial-terracotta uppercase">
                      {menu.category.replace('-', ' ')}
                    </span>
                    <h3 className="font-serif italic text-lg text-editorial-black font-semibold line-clamp-1">
                      {menu.name}
                    </h3>
                    <p className="text-xs text-editorial-black/70 line-clamp-2 leading-relaxed">
                      {menu.description}
                    </p>
                  </div>

                  {/* Nutrition Split Row */}
                  <div className="border border-editorial-black/20 p-2 grid grid-cols-3 gap-1 text-center text-[9px] font-bold uppercase text-editorial-black/60 bg-editorial-tan/10">
                    <div className="border-r border-editorial-black/10">
                      <span className="text-editorial-terracotta">P: {menu.protein}g</span>
                    </div>
                    <div className="border-r border-editorial-black/10">
                      <span>C: {menu.carbs}g</span>
                    </div>
                    <div>
                      <span>F: {menu.fat}g</span>
                    </div>
                  </div>

                  {/* Price & Action Button */}
                  <div className="pt-3 border-t border-editorial-black/20 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-editorial-black/50 block leading-none uppercase">Est. Harga</span>
                      <span className="text-sm font-serif font-bold text-editorial-black mt-1 block">
                        Rp {menu.price.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <button
                      id={`inspect-btn-${menu.id}`}
                      onClick={() => handleOpenModal(menu)}
                      className="bg-editorial-black hover:bg-editorial-terracotta text-white px-3.5 py-2 rounded-none text-[9px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-1 shadow-sm border border-editorial-black"
                    >
                      <span>DETAIL GIZI</span>
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-editorial-cream rounded-none p-12 text-center border-2 border-editorial-black max-w-md mx-auto">
            <Scale className="h-10 w-10 text-editorial-black/40 mx-auto mb-4" />
            <h3 className="font-serif italic text-lg text-editorial-black">Menu Tidak Ditemukan</h3>
            <p className="text-xs text-editorial-black/60 mt-2 uppercase tracking-wider">Coba kata kunci pencarian lain atau pilih kategori berbeda.</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
              className="mt-4 text-[9px] font-bold tracking-widest text-white bg-editorial-terracotta px-4 py-2 border border-editorial-terracotta hover:bg-editorial-black hover:border-editorial-black transition-colors uppercase"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Program Diet Section - Displaying Plans */}
        <div id="diet" className="mt-32 border-t border-editorial-black pt-24">
          <div className="text-left border-b border-editorial-black pb-12 mb-16 space-y-4">
            <div className="inline-flex items-center space-x-1.5 border border-editorial-black px-3 py-1 bg-editorial-tan/40 text-editorial-black text-[10px] font-bold tracking-widest uppercase">
              <Leaf className="h-3 w-3 text-editorial-terracotta" />
              <span>LANGGANAN SEHAT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-editorial-black leading-tight">
              Pilihan Paket <span className="font-bold text-editorial-terracotta italic block sm:inline">Berlangganan Sehat</span>
            </h2>
            <p className="text-editorial-black/70 font-serif italic text-base sm:text-lg max-w-2xl leading-relaxed">
              Pilih program nutrisi khusus yang selaras dengan misi kesehatan tubuh Anda. Gratis pengiriman & konsultasi ahli gizi harian.
            </p>
          </div>

          {/* Plan Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 text-left">
            {MEAL_PLANS.map((plan: any) => (
              <div
                key={plan.id}
                id={`plan-card-${plan.id}`}
                className="bg-editorial-cream border border-editorial-black rounded-none p-5 flex flex-col justify-between hover:bg-editorial-tan/10 transition-colors"
              >
                <div className="space-y-4">
                  <div className="aspect-[16/10] rounded-none overflow-hidden border border-editorial-black">
                    <img
                      src={plan.image}
                      alt={plan.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-[15%]"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-editorial-terracotta tracking-widest uppercase block">{plan.idealFor}</span>
                    <h3 className="font-serif italic text-xl font-semibold text-editorial-black leading-tight">
                      {plan.name}
                    </h3>
                  </div>
                  <p className="text-xs text-editorial-black/80 leading-relaxed font-sans">
                    {plan.description}
                  </p>
                  <ul className="space-y-2 pt-3 border-t border-editorial-black/20">
                    {plan.features.map((feat: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-start space-x-2 text-xs text-editorial-black/70 font-sans">
                        <Check className="h-3.5 w-3.5 text-editorial-terracotta shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-editorial-black/20 mt-6 space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[9px] font-bold text-editorial-black/50 uppercase">LANGGANAN</span>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-editorial-black/60 uppercase leading-none">Mulai dari</p>
                      <p className="text-lg font-serif font-bold text-editorial-terracotta mt-1">
                        Rp {plan.pricePerDay.toLocaleString('id-ID')}<span className="text-[10px] font-sans font-normal text-editorial-black/60">/hari</span>
                      </p>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo, saya tertarik dengan program katering kustom: *${plan.name}* PT. Dailybite. Bagaimana langkah pendaftaran awal dan konsultasi gizinya?`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-editorial-black hover:bg-editorial-terracotta text-white text-center py-3 rounded-none text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-editorial-black"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>DAFTAR / KONSULTASI</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Calorie Recalculator Modal */}
        {selectedMenu && (
          <div
            id="menu-detail-modal"
            className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-editorial-black/75 backdrop-blur-sm animate-fadeIn"
          >
            <div className="relative bg-editorial-cream rounded-none w-full max-w-2xl overflow-hidden shadow-2xl border-[6px] border-editorial-black flex flex-col md:flex-row text-left animate-slideUp">
              
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 bg-editorial-cream border border-editorial-black hover:bg-editorial-black hover:text-white text-editorial-black p-2 rounded-none shadow-sm transition-all focus:outline-none"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Modal Left - Image */}
              <div className="md:w-1/2 relative bg-white border-r border-editorial-black">
                <img
                  src={selectedMenu.image}
                  alt={selectedMenu.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover min-h-[250px] md:absolute md:inset-0 grayscale-[10%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-editorial-black/90 via-editorial-black/25 to-transparent p-6 flex flex-col justify-end text-white">
                  <span className="bg-editorial-terracotta w-fit text-[8px] font-bold tracking-widest uppercase px-2.5 py-1 mb-2">
                    NILAI GIZI TERUJI
                  </span>
                  <h3 className="font-serif italic text-2xl font-bold leading-tight">{selectedMenu.name}</h3>
                  <p className="text-[10px] text-editorial-cream/80 mt-1 uppercase tracking-wider flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-editorial-terracotta text-editorial-terracotta" />
                    {selectedMenu.rating} (Premium Culinary)
                  </p>
                </div>
              </div>

              {/* Modal Right - Recalculator & Order */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="font-mono text-[9px] font-bold text-editorial-black/50 uppercase tracking-[0.2em] border-b border-editorial-black/20 pb-2 mb-4">
                    KUSTOMISASI SAJIAN
                  </h4>
                  
                  {/* Portion Selectors */}
                  <p className="text-[10px] font-bold text-editorial-black uppercase tracking-wider mb-2">Pilih Ukuran Porsi:</p>
                  <div className="grid grid-cols-3 gap-1 mb-4">
                    {[
                      { id: 'regular', label: 'REGULAR 1X' },
                      { id: 'double-protein', label: 'DOUBLE PRO' },
                      { id: 'extra-portion', label: 'EXTRA JUMBO' }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => setServingSize(opt.id as any)}
                        className={`py-2 text-[9px] font-bold tracking-wider transition-all duration-300 border ${
                          servingSize === opt.id
                            ? 'bg-editorial-black border-editorial-black text-white'
                            : 'bg-editorial-cream border-editorial-black/30 text-editorial-black/60 hover:border-editorial-black hover:text-editorial-black'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  {/* Recalculated values visualization */}
                  {(() => {
                    const rec = getRecalculatedValues(selectedMenu);
                    return (
                      <div className="space-y-4">
                        <div className="border border-editorial-black/20 p-4 space-y-3 bg-editorial-tan/10">
                          <div className="flex justify-between items-center border-b border-editorial-black/10 pb-2">
                            <span className="text-[10px] text-editorial-black/50 font-bold uppercase">Estimasi Energi</span>
                            <span className="text-sm font-serif font-bold text-editorial-terracotta flex items-center gap-1">
                              <Flame className="h-4 w-4" />
                              {rec.calories} kkal
                            </span>
                          </div>
                          
                          {/* Progress bars for Macronutrients */}
                          <div className="space-y-2.5">
                            {/* Protein */}
                            <div className="space-y-1">
                              <div className="flex justify-between text-[9px] font-bold uppercase text-editorial-black/60">
                                <span>Protein</span>
                                <span className="text-editorial-terracotta">{rec.protein}g / {servingSize === 'double-protein' ? '55g' : '40g'}</span>
                              </div>
                              <div className="w-full bg-editorial-tan h-1">
                                <div
                                  className="bg-editorial-terracotta h-1 transition-all duration-500"
                                  style={{ width: `${Math.min((rec.protein / (servingSize === 'double-protein' ? 55 : 40)) * 100, 100)}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            {/* Carbs */}
                            <div className="space-y-1">
                              <div className="flex justify-between text-[9px] font-bold uppercase text-editorial-black/60">
                                <span>Karbohidrat</span>
                                <span>{rec.carbs}g</span>
                              </div>
                              <div className="w-full bg-editorial-tan h-1">
                                <div
                                  className="bg-editorial-black h-1 transition-all duration-500"
                                  style={{ width: `${Math.min((rec.carbs / 80) * 100, 100)}%` }}
                                ></div>
                              </div>
                            </div>

                            {/* Fat */}
                            <div className="space-y-1">
                              <div className="flex justify-between text-[9px] font-bold uppercase text-editorial-black/60">
                                <span>Lemak Sehat</span>
                                <span>{rec.fat}g</span>
                              </div>
                              <div className="w-full bg-editorial-tan h-1">
                                <div
                                  className="bg-editorial-black/65 h-1 transition-all duration-500"
                                  style={{ width: `${Math.min((rec.fat / 35) * 100, 100)}%` }}
                                ></div>
                              </div>
                            </div>

                          </div>
                        </div>

                        {/* Final Recalculated Price & CTA */}
                        <div className="pt-4 flex items-center justify-between border-t border-editorial-black/20">
                          <div>
                            <span className="text-[9px] font-bold text-editorial-black/50 block leading-none uppercase">ESTIMASI BIAYA</span>
                            <span className="text-lg font-serif font-bold text-editorial-black mt-1 block">
                              Rp {rec.price.toLocaleString('id-ID')}
                            </span>
                          </div>
                          <a
                            href={getWhatsAppLink(selectedMenu, rec)}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-editorial-terracotta hover:bg-editorial-black text-white px-5 py-3 rounded-none text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300 flex items-center gap-1.5 border border-editorial-terracotta hover:border-editorial-black"
                          >
                            <MessageCircle className="h-3.5 w-3.5" />
                            <span>PESAN SEKARANG</span>
                          </a>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
