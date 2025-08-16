import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-elegant-200 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-elegant-gradient"></div>
        <div className="absolute inset-0 bg-brown-900/15"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        
        {/* Main Content - Centered */}
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="w-full max-w-4xl text-center">
            
            {/* Logo Central */}
            <motion.div
              className="mb-8 animation-optimized no-flicker"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ 
                transform: "translateZ(0)",
                willChange: "transform, opacity"
              }}
            >
              <img 
                src="/logosemfundo.png" 
                alt="Escritório de Advocacia" 
                className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain"
                style={{ transform: "translateZ(0)" }}
              />
            </motion.div>
            
            {/* Main Title */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-brown-800 mb-6 leading-tight font-display tracking-wider no-flicker"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{ 
                transform: "translateZ(0)",
                willChange: "transform, opacity"
              }}
            >
              ESCRITÓRIO DE
              <span className="block text-accent-600 mt-2">ADVOCACIA</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-brown-700 mb-10 max-w-3xl mx-auto leading-relaxed font-serif no-flicker"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              style={{ 
                transform: "translateZ(0)",
                willChange: "transform, opacity"
              }}
            >
              Mais de 20 anos de experiência oferecendo soluções jurídicas personalizadas 
              com ética, compromisso e resultados comprovados.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 no-flicker"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              style={{ 
                transform: "translateZ(0)",
                willChange: "transform, opacity"
              }}
            >
              {/* Primary Button */}
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-accent-600 hover:bg-accent-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>Consulta Gratuita</span>
                <ArrowRight size={20} />
              </button>
              
              {/* Secondary Button */}
              <a
                href="tel:+5511999999999"
                className="w-full sm:w-auto bg-elegant-100/60 backdrop-blur-sm border border-brown-300/30 text-brown-800 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-elegant-200/80"
              >
                <Phone size={20} />
                <span>(11) 9999-9999</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar - Bottom */}
        <motion.div
          className="bg-brown-800/90 backdrop-blur-sm border-t border-brown-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-elegant-50 mb-1 font-display group-hover:text-accent-300 transition-colors">
                  20+
                </div>
                <div className="text-sm md:text-base text-elegant-200">
                  Anos de Experiência
                </div>
              </div>
              
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-elegant-50 mb-1 font-display group-hover:text-accent-300 transition-colors">
                  5.000+
                </div>
                <div className="text-sm md:text-base text-elegant-200">
                  Clientes Atendidos
                </div>
              </div>
              
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-elegant-50 mb-1 font-display group-hover:text-accent-300 transition-colors">
                  98%
                </div>
                <div className="text-sm md:text-base text-elegant-200">
                  Taxa de Sucesso
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>
        
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border border-brown-600/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brown-600/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;