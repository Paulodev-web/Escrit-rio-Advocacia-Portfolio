import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Empresária',
      content: 'Profissionais extremamente competentes e dedicados. Resolveram meu caso trabalhista com agilidade e transparência total. Recomendo sem hesitação!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'João Santos',
      role: 'Aposentado',
      content: 'Após anos tentando resolver questões previdenciárias, encontrei neste escritório a solução. Atendimento humanizado e resultado excelente.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Ana Costa',
      role: 'Professora',
      content: 'Excelência técnica aliada à ética profissional. Cuidaram do meu divórcio com muito cuidado e conseguiram o melhor acordo para minha família.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Carlos Oliveira',
      role: 'Contador',
      content: 'Precisei de consultoria empresarial e encontrei um escritório que realmente entende do negócio. Suporte jurídico de primeira qualidade.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Lucia Ferreira',
      role: 'Comerciante',
      content: 'Atendimento excepcional desde o primeiro contato. Resolveram meu problema imobiliário de forma eficiente e com preço justo.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Roberto Lima',
      role: 'Engenheiro',
      content: 'Profissionais que realmente se importam com o cliente. Acompanharam meu caso criminal do início ao fim com dedicação total.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  // Navegação do carrossel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play funcionalidade
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 segundos

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay]);

  // Pausar auto-play ao hover
  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  // Suporte a gestos de toque
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="depoimentos" className="py-12 sm:py-16 lg:py-20 bg-elegant-gradient">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-800 mb-3 sm:mb-4 font-display px-2">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-lg sm:text-xl text-brown-600 max-w-3xl mx-auto px-2">
            A confiança de nossos clientes é o que nos motiva a buscar sempre a excelência 
            em todos os serviços prestados.
          </p>
        </motion.div>

        {/* Carrossel Container */}
        <div className="relative">
          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="card-premium p-5 sm:p-6 lg:p-7 hover-lift group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <Quote className="text-accent-300 group-hover:text-accent-400 transition-colors duration-300" size={32} />
                </div>
                
                <p className="text-brown-700 mb-4 sm:mb-6 leading-relaxed italic text-base">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-accent-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center space-x-3 pt-3 sm:pt-4 border-t border-elegant-200/60">
                  <img
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-elegant-200 ring-offset-2"
                  />
                  <div>
                    <h4 className="font-semibold text-brown-800 font-display text-base">{testimonial.name}</h4>
                    <p className="text-brown-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Carrossel */}
          <div 
            className="md:hidden relative overflow-hidden pb-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="card-premium p-6 group h-full mx-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ minHeight: "300px" }}
                  >
                    <div className="flex items-center mb-3 sm:mb-4">
                      <Quote className="text-accent-300 group-hover:text-accent-400 transition-colors duration-300" size={28} />
                    </div>
                    
                    <p className="text-brown-700 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-accent-400 fill-current" />
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-3 pt-3 sm:pt-4 border-t border-elegant-200/60">
                      <img
                        src={testimonial.image}
                        alt={`Foto de ${testimonial.name}`}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-elegant-200 ring-offset-2"
                      />
                      <div>
                        <h4 className="font-semibold text-brown-800 font-display text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-brown-600 text-xs sm:text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>


          </div>

          {/* Indicadores - Mobile */}
          <div className="md:hidden flex justify-center space-x-3 mt-8 pb-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-accent-600 scale-125 shadow-md' 
                    : 'bg-elegant-400 hover:bg-accent-300'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="card-premium p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-brown-800 mb-4 font-display">
              Seja o Próximo Cliente Satisfeito
            </h3>
            <p className="text-brown-600 mb-6">
              Entre em contato conosco e descubra como podemos ajudar você.
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;