import React from 'react';
import { CheckCircle, Scale, Users, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const features = [
    {
      icon: <Scale size={24} />,
      title: 'Experiência Consolidada',
      description: 'Mais de duas décadas atuando em diversas áreas do direito com resultados excepcionais.'
    },
    {
      icon: <Users size={24} />,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção dedicada e estratégias jurídicas customizadas.'
    },
    {
      icon: <Trophy size={24} />,
      title: 'Resultados Comprovados',
      description: 'Histórico sólido de vitórias e soluções eficazes para nossos clientes.'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Ética e Transparência',
      description: 'Conduta íntegra e comunicação clara em todas as etapas do processo.'
    }
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-elegant-gradient">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-800 mb-4 sm:mb-6 font-display px-2 lg:px-0">
              Sobre Nosso Escritório
            </h2>
            
            <p className="text-base sm:text-lg text-brown-700 mb-4 sm:mb-6 leading-relaxed px-2 lg:px-0">
              Fundado em 2003, nosso escritório nasceu com o propósito de oferecer 
              serviços jurídicos de excelência, combinando tradição, inovação e 
              compromisso com a justiça.
            </p>
            
            <p className="text-base sm:text-lg text-brown-700 mb-6 sm:mb-8 leading-relaxed px-2 lg:px-0">
              Nossa equipe multidisciplinar está preparada para atender desde questões 
              pessoais até complexas demandas empresariais, sempre com foco na defesa 
              eficaz dos interesses de nossos clientes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-2 lg:px-0">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-200 rounded-xl flex items-center justify-center text-accent-700">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-800 mb-1 font-display">{feature.title}</h3>
                    <p className="text-sm text-brown-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mx-2 lg:mx-0">
              <img
                src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Escritório de advocacia - ambiente profissional"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-3 sm:-bottom-6 -left-1 sm:-left-6 card-premium p-4 sm:p-6 mx-2 lg:mx-0">
              <div className="flex items-center space-x-3 sm:space-x-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent-700 font-serif">20+</div>
                  <div className="text-xs text-elegant-500 font-medium uppercase tracking-wider">Anos</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-elegant-300"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent-700 font-serif">5k+</div>
                  <div className="text-xs text-elegant-500 font-medium uppercase tracking-wider">Clientes</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-elegant-300"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent-700 font-serif">98%</div>
                  <div className="text-xs text-elegant-500 font-medium uppercase tracking-wider">Sucesso</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;