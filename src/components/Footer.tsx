import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-900 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-10 lg:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex items-center space-x-3 mb-4 justify-center md:justify-start">
              <img 
                src="/logo.png" 
                alt="Escritório de Advocacia" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-display tracking-wider">ESCRITÓRIO DE ADVOCACIA</h3>
                <p className="text-elegant-300 text-xs sm:text-sm font-medium tracking-wide">EXCELÊNCIA JURÍDICA</p>
              </div>
            </div>
            <p className="text-elegant-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base px-2 md:px-0">
              Há mais de 20 anos oferecendo serviços jurídicos de excelência, 
              sempre com ética, compromisso e foco nos melhores resultados para nossos clientes.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3 sm:space-x-4 justify-center md:justify-start">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-brown-800 hover:bg-accent-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} className="sm:hidden" />
                <Facebook size={20} className="hidden sm:block" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-brown-800 hover:bg-accent-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} className="sm:hidden" />
                <Instagram size={20} className="hidden sm:block" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-brown-800 hover:bg-accent-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="sm:hidden" />
                <Linkedin size={20} className="hidden sm:block" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-display">Links Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'Início', href: '#inicio' },
                { name: 'Sobre Nós', href: '#sobre' },
                { name: 'Áreas de Atuação', href: '#areas' },
                { name: 'Depoimentos', href: '#depoimentos' },
                { name: 'Contato', href: '#contato' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-elegant-300 hover:text-accent-300 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-display">Contato</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Phone size={16} className="text-accent-400 sm:hidden" />
                <Phone size={18} className="text-accent-400 hidden sm:block" />
                <div>
                  <p className="text-elegant-300 text-sm sm:text-base">(11) 3333-4444</p>
                  <p className="text-elegant-300 text-sm sm:text-base">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <Mail size={16} className="text-accent-400 mt-0.5 sm:hidden" />
                <Mail size={18} className="text-accent-400 mt-0.5 hidden sm:block" />
                <div className="min-w-0">
                  <p className="text-elegant-300 text-sm sm:text-base break-words">contato@advocaciaedireito.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <MapPin size={16} className="text-accent-400 mt-0.5 sm:hidden" />
                <MapPin size={18} className="text-accent-400 mt-0.5 hidden sm:block" />
                <div>
                  <p className="text-elegant-300 text-sm sm:text-base">Av. Paulista, 1000 - Sala 2020</p>
                  <p className="text-elegant-300 text-sm sm:text-base">São Paulo - SP, CEP 01310-100</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6">
              <p className="text-xs sm:text-sm text-elegant-400 mb-1 sm:mb-2">Horário de Funcionamento:</p>
              <p className="text-xs sm:text-sm text-elegant-400">Segunda à Sexta: 8h às 18h</p>
              <p className="text-xs sm:text-sm text-elegant-400">Sábado: 8h às 12h</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-4 sm:py-6 border-t border-elegant-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-elegant-400 text-xs sm:text-sm">
                © 2024 Advocacia & Direito. Todos os direitos reservados.
              </p>
              <p className="text-elegant-500 text-xs mt-1">
                OAB/SP 123.456 | CNPJ: 12.345.678/0001-90
              </p>
            </div>
            
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-elegant-400">
              <a href="#" className="hover:text-gold-300 transition-colors">
                Política de Privacidade
              </a>
              <span>|</span>
              <a href="#" className="hover:text-gold-300 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

            {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 sm:w-16 sm:h-16 bg-accent-gradient rounded-3xl flex items-center justify-center text-white shadow-2xl hover:shadow-accent-500/40 transition-all duration-500 hover:scale-110 border border-white/20"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle size={24} className="sm:hidden group-hover:scale-110 transition-transform duration-300" />
          <MessageCircle size={28} className="hidden sm:block group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
          </div>
          <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;