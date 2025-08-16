import React from 'react';
import { Shield, Phone, MessageCircle, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const AntiScamAlert: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-elegant-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent-gradient rounded-3xl flex items-center justify-center shadow-2xl">
              <Shield className="text-white" size={32} />
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-800 mb-4 sm:mb-6 font-display">
            Comunicado Oficial de Segurança
          </h2>
          
          <div className="card-premium p-6 sm:p-8 lg:p-10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Security Notice */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brown-700 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Lock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-brown-800 mb-4 font-display">Diretrizes de Segurança</h3>
                    <p className="text-brown-700 mb-4 leading-relaxed">
                      Este escritório <strong>jamais solicita</strong> movimentações financeiras através de canais não oficiais.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-elegant-100/50 p-4 rounded-xl border border-elegant-200">
                    <h4 className="font-semibold text-brown-800 mb-2">Práticas Vedadas:</h4>
                    <ul className="space-y-2 text-sm text-brown-700">
                      <li className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-elegant-600 rounded-full"></div>
                        <span>Transferências para contas de terceiros</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-elegant-600 rounded-full"></div>
                        <span>Solicitações de pagamento antecipado</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-elegant-600 rounded-full"></div>
                        <span>Urgências financeiras por telefone</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-elegant-600 rounded-full"></div>
                        <span>Depósitos em contas pessoais</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Official Channels */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-gradient rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-brown-800 mb-4 font-display">Canais Autenticados</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-2xl border border-elegant-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent-600 rounded-2xl flex items-center justify-center">
                        <MessageCircle className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-brown-800">WhatsApp Oficial</p>
                        <p className="text-accent-700 text-lg font-bold">(11) 99999-9999</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-elegant-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent-700 rounded-2xl flex items-center justify-center">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-brown-800">Linha Direta</p>
                        <p className="text-accent-700 text-lg font-bold">(11) 3333-4444</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 lg:mt-10 pt-6 lg:pt-8 border-t border-elegant-200">
              <div className="text-center">
                <p className="text-elegant-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
                  <strong className="text-brown-800">Política de Verificação:</strong> 
                  Toda comunicação financeira oficial será sempre confirmada através dos canais authenticados listados acima. 
                  A segurança de nossos clientes é inegociável.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AntiScamAlert;