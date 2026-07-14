import { useState, useEffect } from 'react';
import { Menu, X, Leaf, Utensils, Calculator, HelpCircle, Phone, Award } from 'lucide-react';
import { COMPANY_NAME } from '../data/companyData';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'BERANDA', icon: Leaf },
    { id: 'about', label: 'TENTANG', icon: Award },
    { id: 'menu', label: 'MENU SEHAT', icon: Utensils },
    { id: 'diet', label: 'PROGRAM', icon: Leaf },
    { id: 'planner', label: 'KALKULATOR', icon: Calculator },
    { id: 'contact', label: 'KONTAK', icon: Phone },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-editorial-cream/95 backdrop-blur-md shadow-sm border-b border-editorial-black py-4'
          : 'bg-transparent border-b border-editorial-black/10 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Editorial Headline */}
          <div
            id="header-logo-container"
            onClick={() => handleNavClick('hero')}
            className="flex flex-col text-left cursor-pointer group"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-editorial-terracotta leading-none">
              JAKARTA / EST. 2021
            </span>
            <span className="font-serif italic font-semibold text-2xl tracking-tight text-editorial-black mt-1">
              PT. DailyBite
            </span>
          </div>

          {/* Desktop Navigation with high tracking/editorial aesthetics */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-[10px] tracking-[0.25em] font-bold transition-all duration-300 py-1 ${
                    isActive
                      ? 'text-editorial-terracotta'
                      : 'text-editorial-black/60 hover:text-editorial-black'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-editorial-terracotta animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              id="header-cta-btn"
              onClick={() => handleNavClick('planner')}
              className="bg-editorial-black hover:bg-editorial-terracotta text-editorial-cream px-6 py-3 rounded-none text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-sm flex items-center space-x-2 border border-editorial-black"
            >
              <Calculator className="h-3.5 w-3.5" />
              <span>Kalkulasi Kalori</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-editorial-black hover:text-editorial-terracotta focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-panel" className="lg:hidden bg-editorial-cream border-b border-editorial-black animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between py-3.5 border-b border-editorial-black/10 text-[11px] tracking-[0.25em] font-bold transition-all ${
                    isActive
                      ? 'text-editorial-terracotta pl-2'
                      : 'text-editorial-black/75 hover:text-editorial-black'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[9px] opacity-40 font-serif italic">→</span>
                </button>
              );
            })}
            <div className="pt-4">
              <button
                id="mobile-header-cta-btn"
                onClick={() => handleNavClick('planner')}
                className="w-full bg-editorial-terracotta text-white py-4 rounded-none text-[10px] uppercase tracking-[0.2em] font-bold"
              >
                Uji Kalkulator Gizi
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
