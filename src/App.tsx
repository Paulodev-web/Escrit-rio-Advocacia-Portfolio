import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import AntiScamAlert from './components/AntiScamAlert';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Previne scroll indesejado em dispositivos touch
    const handleTouchMove = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      const carouselContainer = target.closest('.carousel-container');
      
      if (carouselContainer) {
        // Se está em um container de carrossel, verifica se é movimento horizontal
        const touches = e.touches[0];
        const deltaX = Math.abs(touches.clientX - (touches as any).startX);
        const deltaY = Math.abs(touches.clientY - (touches as any).startY);
        
        if (deltaX > deltaY) {
          e.preventDefault();
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touches = e.touches[0];
      (touches as any).startX = touches.clientX;
      (touches as any).startY = touches.clientY;
    };

    // Adiciona listeners globais para prevenir scroll em carrosséis
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
      <AntiScamAlert />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;