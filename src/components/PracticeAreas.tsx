import React from 'react';
import { 
  Scale, 
  Briefcase, 
  Users, 
  Home, 
  Car, 
  Heart,
  Building2,
  FileText 
} from 'lucide-react';
import { motion } from 'framer-motion';

const PracticeAreas: React.FC = () => {
  const areas = [
    {
      icon: <Scale size={32} />,
      title: 'Direito Civil',
      description: 'Contratos, responsabilidade civil, direitos reais e questões patrimoniais.',
      color: 'bg-accent-500'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Direito Trabalhista',
      description: 'Defesa dos direitos do trabalhador, rescisões e processos trabalhistas.',
      color: 'bg-accent-600'
    },
    {
      icon: <Users size={32} />,
      title: 'Direito Criminal',
      description: 'Defesa criminal, habeas corpus e acompanhamento processual.',
      color: 'bg-accent-700'
    },
    {
      icon: <Building2 size={32} />,
      title: 'Direito Empresarial',
      description: 'Constituição de empresas, contratos comerciais e consultoria jurídica.',
      color: 'bg-accent-500'
    },
    {
      icon: <Heart size={32} />,
      title: 'Direito de Família',
      description: 'Divórcio, guarda de filhos, pensão alimentícia e união estável.',
      color: 'bg-accent-600'
    },
    {
      icon: <Home size={32} />,
      title: 'Direito Imobiliário',
      description: 'Compra, venda, locação e regularização de propriedades.',
      color: 'bg-accent-700'
    },
    {
      icon: <Car size={32} />,
      title: 'Direito do Trânsito',
      description: 'Infrações, suspensão de CNH e acidentes de trânsito.',
      color: 'bg-accent-500'
    },
    {
      icon: <FileText size={32} />,
      title: 'Direito Previdenciário',
      description: 'Aposentadorias, auxílios e benefícios previdenciários.',
      color: 'bg-accent-600'
    }
  ];

  return (
    <section id="areas" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-800 mb-3 sm:mb-4 font-display px-2">
            Nossas Áreas de Atuação
          </h2>
          <p className="text-lg sm:text-xl text-brown-600 max-w-3xl mx-auto px-2">
            Oferecemos serviços jurídicos especializados em diversas áreas do direito, 
            sempre com foco na excelência e nos melhores resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              className="card-premium group p-5 sm:p-6 lg:p-7 hover-lift will-change-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
                opacity: { duration: 0.3 }
              }}
              viewport={{ once: true, margin: "-5%" }}
              style={{ 
                minHeight: "280px",
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased"
              }}
            >
              <div className="relative mb-4 sm:mb-5 lg:mb-6">
                <div 
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${area.color} rounded-2xl flex items-center justify-center text-white shadow-xl transform-gpu transition-transform duration-300 ease-out will-change-transform group-hover:scale-105`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="scale-75 sm:scale-90 lg:scale-100 transition-transform duration-200">
                    {area.icon}
                  </div>
                </div>
                <div 
                  className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-accent-200 rounded-full transform-gpu opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out"
                  style={{ willChange: 'opacity, transform' }}
                ></div>
              </div>
              
              <h3 
                className="text-lg sm:text-xl font-bold text-brown-800 mb-2 sm:mb-3 group-hover:text-accent-700 transition-colors duration-200 font-display leading-tight"
                style={{ WebkitFontSmoothing: 'antialiased' }}
              >
                {area.title}
              </h3>
              
              <p 
                className="text-brown-600 leading-relaxed text-sm sm:text-base mb-4 sm:mb-5"
                style={{ WebkitFontSmoothing: 'antialiased' }}
              >
                {area.description}
              </p>
              
              <div className="pt-3 sm:pt-4 border-t border-elegant-200/60">
                <button 
                  className="text-accent-600 hover:text-accent-800 font-medium text-sm flex items-center space-x-2 transform-gpu transition-all duration-200 ease-out"
                  style={{ willChange: 'transform, color' }}
                >
                  <span>Saiba mais</span>
                  <svg 
                    className="w-4 h-4 transform-gpu transition-transform duration-200 ease-out group-hover:translate-x-1"
                    style={{ willChange: 'transform' }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-brown-600 mb-6">
            Não encontrou sua área de interesse? Entre em contato conosco.
          </p>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Fale Conosco</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreas;