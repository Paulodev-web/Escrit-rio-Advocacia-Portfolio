import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-elegant-50/95 shadow-2xl backdrop-blur-xl border-b border-elegant-300' : 'bg-elegant-50/90 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative">
                <img 
                  src="/logosemfundo.png" 
                  alt="Escritório de Advocacia" 
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold text-brown-800 font-display leading-tight tracking-wider">ESCRITÓRIO DE ADVOCACIA</h1>
                <p className="text-xs text-brown-600 font-medium tracking-[0.15em] uppercase">Excelência Jurídica</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-brown-700 hover:text-accent-700 px-4 py-3 text-sm font-medium transition-all duration-300 relative group rounded-xl hover:bg-elegant-100/50"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-accent-600 transition-all duration-300 group-hover:w-6 rounded-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <a
              href="tel:+5511999999999"
              className="group lg:flex items-center space-x-2 text-brown-600 hover:text-accent-700 transition-all duration-300 px-2 lg:px-3 py-2 rounded-xl hover:bg-elegant-100 hidden"
            >
              <div className="w-7 h-7 lg:w-8 lg:h-8 bg-elegant-200 group-hover:bg-accent-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Phone size={12} className="lg:hidden" />
                <Phone size={14} className="hidden lg:block" />
              </div>
              <span className="text-xs lg:text-sm font-medium hidden lg:block">(11) 9999-9999</span>
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-600 hover:bg-accent-700 text-white px-3 lg:px-5 py-2 lg:py-2.5 rounded-xl text-xs lg:text-sm font-medium transition-all duration-300 flex items-center space-x-1 lg:space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle size={14} className="md:block lg:hidden" />
              <MessageCircle size={16} className="hidden lg:block" />
              <span className="hidden lg:block">Contato</span>
              <span className="lg:hidden">Chat</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-600 hover:bg-accent-700 text-white p-2 rounded-xl transition-all duration-300 shadow-lg"
            >
              <MessageCircle size={16} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brown-700 hover:text-accent-700 p-2 transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-elegant-50/95 backdrop-blur-xl shadow-2xl border-t border-elegant-300"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-3 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-brown-700 hover:text-accent-700 hover:bg-elegant-100 rounded-xl transition-all"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 mt-4 border-t border-elegant-300 space-y-3">
              <a
                href="tel:+5511999999999"
                className="flex items-center space-x-3 px-4 py-3 text-brown-700 bg-elegant-100 rounded-xl"
              >
                <div className="w-10 h-10 bg-accent-200 rounded-xl flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="font-medium">(11) 9999-9999</div>
                  <div className="text-sm text-brown-500">Ligue agora</div>
                </div>
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 bg-accent-600 text-white rounded-xl font-medium"
              >
                <MessageCircle size={18} />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;