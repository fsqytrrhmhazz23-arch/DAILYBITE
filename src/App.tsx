import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import NutritionPlanner from './components/NutritionPlanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll tracking spy
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['hero', 'about', 'menu', 'planner', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for headers

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleLearnMore = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-editorial-cream text-editorial-black flex flex-col font-sans selection:bg-editorial-terracotta/20 selection:text-editorial-black antialiased">
      {/* Sticky Top Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onLearnMoreClick={handleLearnMore} />

        {/* Corporate Profile / About Us */}
        <About />

        {/* Interactive Menu Catalog & Subscription Plans */}
        <MenuSection />

        {/* Interactive Clinical Nutrition Planner Calculator */}
        <NutritionPlanner />

        {/* Testimonials, FAQs, and Corporate Contact Forms */}
        <ContactSection />
      </main>

      {/* Corporate Professional Footer */}
      <Footer />

      {/* Floating WhatsApp Chat CTA (Replaces previous Asisten AI concept) */}
      <a
        href="https://wa.me/6285819343733?text=Halo%20Admin%20PT.%20Dailybite%2C%20saya%20ingin%20berkonsultasi%20gizi%20dan%20bertanya%20tentang%20program%20katering%20sehat."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-editorial-black text-white px-5 py-3.5 shadow-xl transition-all duration-300 hover:scale-105 group border-2 border-editorial-black"
        id="floating-wa-btn"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="h-4 w-4 shrink-0" />
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-sans">
          Tanya Kami (WA)
        </span>
      </a>
    </div>
  );
}
