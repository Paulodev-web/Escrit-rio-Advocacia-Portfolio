import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Telefone',
      content: ['(11) 3333-4444', '(11) 99999-9999'],
      color: 'bg-accent-500'
    },
    {
      icon: <Mail size={24} />,
      title: 'E-mail',
      content: ['contato@advocaciaedireito.com', 'atendimento@advocaciaedireito.com'],
      color: 'bg-accent-600'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Endereço',
      content: ['Av. Paulista, 1000 - Sala 2020', 'São Paulo - SP, CEP 01310-100'],
      color: 'bg-accent-700'
    },
    {
      icon: <Clock size={24} />,
      title: 'Horário de Funcionamento',
      content: ['Segunda à Sexta: 8h às 18h', 'Sábado: 8h às 12h'],
      color: 'bg-accent-500'
    }
  ];



  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-800 mb-3 sm:mb-4 font-display px-2">
            Entre em Contato
          </h2>
          <p className="text-lg sm:text-xl text-brown-600 max-w-3xl mx-auto px-2">
            Estamos prontos para atendê-lo. Entre em contato conosco e agende sua consulta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            className="card-premium p-5 sm:p-6 lg:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-brown-800 mb-4 sm:mb-6 font-display">
              Envie sua Mensagem
            </h3>
            
            {isSubmitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-800 mb-2">
                  Mensagem Enviada!
                </h4>
                <p className="text-green-600">
                  Recebemos sua mensagem e entraremos em contato em breve.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Nome é obrigatório' })}
                    className="w-full px-4 py-3 border border-elegant-300 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-300 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'E-mail é obrigatório',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'E-mail inválido'
                      }
                    })}
                    className="w-full px-4 py-3 border border-elegant-300 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-300 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-elegant-300 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-300 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message', { required: 'Mensagem é obrigatória' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Descreva brevemente seu caso ou dúvida..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-accent-gradient text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  <span>Enviar Mensagem</span>
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Mobile Carousel */}
            <div className="sm:hidden">
              <div className="relative pb-4">
                <div className="overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}
                  >
                    {contactInfo.map((info, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="card-elegant p-5 mx-2" style={{ minHeight: "120px" }}>
                          <div className="flex items-start space-x-4">
                            <div className={`w-12 h-12 ${info.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                              {info.icon}
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="font-semibold text-brown-800 mb-2 font-display text-base">{info.title}</h4>
                              {info.content.map((item, idx) => (
                                <p key={idx} className="text-brown-600 text-sm break-words">{item}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                

                
                {/* Dots indicator */}
                <div className="flex justify-center mt-6 space-x-3 pb-2">
                  {contactInfo.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCardIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentCardIndex ? 'bg-accent-600 scale-125 shadow-md' : 'bg-elegant-400 hover:bg-accent-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="card-elegant p-4 sm:p-5 lg:p-6 hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  style={{ minHeight: "120px" }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${info.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                      <div className="scale-75 sm:scale-100">
                        {info.icon}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-brown-800 mb-1 sm:mb-2 font-display text-sm sm:text-base">{info.title}</h4>
                      {info.content.map((item, idx) => (
                        <p key={idx} className="text-brown-600 text-xs sm:text-sm break-words">{item}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              className="bg-gray-200 rounded-2xl overflow-hidden h-48 sm:h-56 lg:h-64"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0963916879997!2d-46.65427058502203!3d-23.561414884696857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt!2sbr!4v1642023456789!5m2!1spt!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do escritório"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;