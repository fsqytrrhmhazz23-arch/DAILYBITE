import { useState } from 'react';
import { Leaf, Sparkles, ShieldCheck, ArrowRight, Star, Heart } from 'lucide-react';
import { COMPANY_TAGLINE, COMPANY_SUBTITLE, MENUS } from '../data/companyData';

interface HeroProps {
  onLearnMoreClick: (id: string) => void;
}

export default function Hero({ onLearnMoreClick }: HeroProps) {
  // Let's spotlight two best selling menus in the hero for interactive toggling!
  const heroShowcase = [
    {
      menuId: 'menu-2', // Salmon
      title: 'Premium Salmon',
      subtitle: 'Omega-3 Rich Energy',
      badgeColor: 'border-editorial-black text-editorial-black bg-editorial-tan/30'
    },
    {
      menuId: 'menu-3', // Bulgogi
      title: 'Low-Carb Shirataki',
      subtitle: 'Ketogenic Lean Power',
      badgeColor: 'border-editorial-black text-editorial-black bg-editorial-tan/30'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeSpotlight = heroShowcase[activeIndex];
  const activeMenuData = MENUS.find(m => m.id === activeSpotlight.menuId) || MENUS[1];

  return (
    <section
      id="hero"
      className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-editorial-cream border-b border-editorial-black"
    >
      {/* Background subtle layout lines */}
      <div className="absolute top-0 bottom-0 left-1/4 w-px bg-editorial-black/10 hidden lg:block pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-1/4 w-px bg-editorial-black/10 hidden lg:block pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Tagline Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center space-x-2 border border-editorial-black px-4 py-2 rounded-none bg-editorial-cream text-editorial-black text-xs font-bold tracking-[0.2em] uppercase"
            >
              <Sparkles className="h-3.5 w-3.5 text-editorial-terracotta animate-pulse" />
              <span>Catering Premium Jakarta</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-6xl lg:text-[80px] font-serif italic font-light tracking-tight text-editorial-black leading-[0.95]"
            >
              The Art of <br />
              <span className="font-bold text-editorial-terracotta tracking-tighter not-italic uppercase block mt-2">
                Every Meal.
              </span>
            </h1>

            {/* Description */}
            <div className="flex gap-6 items-start pt-2">
              <div className="w-1.5 h-16 bg-editorial-terracotta shrink-0"></div>
              <p id="hero-subtitle" className="text-editorial-black/80 font-serif italic text-lg sm:text-xl leading-relaxed max-w-xl">
                {COMPANY_SUBTITLE}
              </p>
            </div>

            {/* Trust Indicators (Editorial Style) */}
            <div id="hero-trust" className="grid grid-cols-3 gap-2 border-t border-b border-editorial-black py-5 max-w-lg">
              <div className="text-left">
                <p className="text-[10px] font-bold text-editorial-black/50 tracking-wider uppercase mb-1">SERTIFIKASI</p>
                <p className="text-xs font-serif font-bold text-editorial-black">100% Halal MUI</p>
              </div>
              <div className="text-left border-l border-editorial-black/20 pl-4">
                <p className="text-[10px] font-bold text-editorial-black/50 tracking-wider uppercase mb-1">KEPUASAN</p>
                <p className="text-xs font-serif font-bold text-editorial-black">4.9 / 5.0 Rating</p>
              </div>
              <div className="text-left border-l border-editorial-black/20 pl-4">
                <p className="text-[10px] font-bold text-editorial-black/50 tracking-wider uppercase mb-1">NUTRISI</p>
                <p className="text-xs font-serif font-bold text-editorial-black">Clinically Designed</p>
              </div>
            </div>

            {/* Action buttons */}
            <div id="hero-actions" className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                id="hero-primary-cta"
                onClick={() => onLearnMoreClick('menu')}
                className="bg-editorial-terracotta hover:bg-editorial-black text-white px-8 py-4 rounded-none text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center space-x-2 border border-editorial-terracotta hover:border-editorial-black"
              >
                <span>LIHAT MENU SEHAT</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                id="hero-secondary-cta"
                onClick={() => onLearnMoreClick('planner')}
                className="bg-transparent border border-editorial-black hover:bg-editorial-black hover:text-white text-editorial-black px-8 py-4 rounded-none text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>HITUNG KALORI</span>
              </button>
            </div>
          </div>

          {/* Right Column - Interactive Food Spotlight Card */}
          <div className="lg:col-span-5 relative">
            <div
              id="hero-spotlight-card"
              className="bg-editorial-cream border-2 border-editorial-black rounded-none p-4 shadow-sm"
            >
              {/* Card Image section with badging */}
              <div className="relative aspect-[4/3] rounded-none overflow-hidden border border-editorial-black">
                <img
                  src={activeMenuData.image}
                  alt={activeMenuData.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[15%] contrast-[105%]"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  <span className="bg-editorial-black text-white px-3 py-1 rounded-none text-[9px] font-bold tracking-wider uppercase">
                    SPOTLIGHT
                  </span>
                  <span className={`px-2.5 py-1 rounded-none text-[9px] font-bold border ${activeSpotlight.badgeColor}`}>
                    {activeSpotlight.title}
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-editorial-black to-transparent p-4 text-white">
                  <p className="font-serif italic text-lg leading-tight">{activeMenuData.name}</p>
                  <p className="text-[10px] text-editorial-cream/80 uppercase tracking-widest mt-1">
                    {activeMenuData.calories} kkal · Premium Wellness
                  </p>
                </div>
              </div>

              {/* Nutrition Dashboard (Interactive) */}
              <div className="mt-4 space-y-4">
                <div className="flex justify-between items-center text-[10px] font-bold text-editorial-black/50 uppercase tracking-[0.15em] border-b border-editorial-black/20 pb-1.5">
                  <span>Informasi Nilai Gizi</span>
                  <span className="text-editorial-terracotta">PRESISI KLINIS</span>
                </div>
                
                <div className="grid grid-cols-4 gap-1">
                  <div className="bg-editorial-cream border border-editorial-black/40 p-2 text-center">
                    <p className="text-[9px] font-bold text-editorial-black/50 uppercase leading-none">Energi</p>
                    <p className="text-sm font-serif font-bold text-editorial-black mt-1">{activeMenuData.calories}</p>
                    <p className="text-[8px] text-editorial-black/60 leading-none">kkal</p>
                  </div>
                  <div className="bg-editorial-terracotta text-white p-2 text-center">
                    <p className="text-[9px] font-bold text-white/80 uppercase leading-none">Protein</p>
                    <p className="text-sm font-serif font-bold text-white mt-1">{activeMenuData.protein}g</p>
                    <p className="text-[8px] text-white/90 leading-none">42% AKG</p>
                  </div>
                  <div className="bg-editorial-cream border border-editorial-black/40 p-2 text-center">
                    <p className="text-[9px] font-bold text-editorial-black/50 uppercase leading-none">Karbo</p>
                    <p className="text-sm font-serif font-bold text-editorial-black mt-1">{activeMenuData.carbs}g</p>
                    <p className="text-[8px] text-editorial-black/60 leading-none">30% AKG</p>
                  </div>
                  <div className="bg-editorial-cream border border-editorial-black/40 p-2 text-center">
                    <p className="text-[9px] font-bold text-editorial-black/50 uppercase leading-none">Lemak</p>
                    <p className="text-sm font-serif font-bold text-editorial-black mt-1">{activeMenuData.fat}g</p>
                    <p className="text-[8px] text-editorial-black/60 leading-none">28% AKG</p>
                  </div>
                </div>

                {/* Dish Selector Button */}
                <div className="pt-3 flex items-center justify-between border-t border-editorial-black/20">
                  <span className="text-[10px] text-editorial-black/60 font-serif italic">Ganti highlight menu:</span>
                  <div className="flex border border-editorial-black p-0.5 bg-editorial-cream">
                    {heroShowcase.map((item, idx) => (
                      <button
                        key={item.menuId}
                        onClick={() => setActiveIndex(idx)}
                        className={`px-3 py-1 rounded-none text-[10px] font-bold tracking-wider transition-all duration-300 ${
                          activeIndex === idx
                            ? 'bg-editorial-black text-white'
                            : 'text-editorial-black/60 hover:text-editorial-black'
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
