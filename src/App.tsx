import { useState, useEffect } from 'react';
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
    </div>
  );
}
