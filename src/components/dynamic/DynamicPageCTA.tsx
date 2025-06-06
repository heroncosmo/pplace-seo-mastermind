
import React from 'react';
import { Button } from '@/components/ui/button';

interface DynamicPageCTAProps {
  service: any;
  city: any;
}

const DynamicPageCTA = ({ service, city }: DynamicPageCTAProps) => {
  const whatsappMessage = `Oi%2C%20tudo%20bem%3F%20Quero%20revolucionar%20meu%20negócio%20em%20${city.name}%20com%20${service.name}%20da%20PPlace.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5517981679818&text=${whatsappMessage}`;

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background com gradientes e padrões */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-6xl mx-auto">
          {/* Badge superior */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="text-yellow-300 mr-2">🏆</span>
            <span className="text-sm font-medium">Transformação Garantida</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Pronto para 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Revolucionar </span>
            seu Negócio em {city.name}?
          </h2>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-purple-100 mb-12 max-w-5xl mx-auto leading-relaxed">
            Junte-se a centenas de empresas de {city.name} que já transformaram seus resultados com a PPlace. 
            Nossa expertise em <span className="text-yellow-300 font-bold">{service.name}</span> e IA vai levar seu negócio ao próximo nível!
          </p>
          
          {/* Stats impressionantes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-3 group-hover:scale-110 transition-transform duration-300">500%</div>
              <p className="text-purple-100 text-lg">Aumento médio de vendas</p>
              <p className="text-purple-200 text-sm mt-2">Com nossa IA avançada</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl lg:text-5xl font-bold text-green-300 mb-3 group-hover:scale-110 transition-transform duration-300">1.000+</div>
              <p className="text-purple-100 text-lg">Empresas transformadas</p>
              <p className="text-purple-200 text-sm mt-2">Em todo o Brasil</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl lg:text-5xl font-bold text-blue-300 mb-3 group-hover:scale-110 transition-transform duration-300">98%</div>
              <p className="text-purple-100 text-lg">Satisfação dos clientes</p>
              <p className="text-purple-200 text-sm mt-2">Nota máxima</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl lg:text-5xl font-bold text-orange-300 mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <p className="text-purple-100 text-lg">Suporte premium</p>
              <p className="text-purple-200 text-sm mt-2">Com IA inclusa</p>
            </div>
          </div>
          
          {/* CTAs principais */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold text-xl lg:text-2xl px-12 py-6 lg:px-16 lg:py-8 rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              🚀 COMEÇAR AGORA - ORÇAMENTO GRÁTIS
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 font-bold text-xl lg:text-2xl px-12 py-6 lg:px-16 lg:py-8 rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              📱 WhatsApp: (17) 98167-9818
            </Button>
          </div>
          
          {/* Trust indicators melhorados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-purple-100 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
              <span className="text-3xl mb-2">⚡</span>
              <p className="font-medium">Resposta em até 2 horas</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
              <span className="text-3xl mb-2">🤝</span>
              <p className="font-medium">Consultoria gratuita</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
              <span className="text-3xl mb-2">🏆</span>
              <p className="font-medium">Especialistas em {city.name}</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
              <span className="text-3xl mb-2">✅</span>
              <p className="font-medium">Garantia de satisfação</p>
            </div>
          </div>

          {/* Urgência */}
          <div className="mt-12 p-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl border border-orange-500/30 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl mr-3">⏰</span>
              <span className="text-xl font-bold text-orange-300">Oferta Limitada!</span>
            </div>
            <p className="text-lg">
              Primeiros 10 clientes de {city.name} ganham <span className="font-bold text-yellow-300">40% de desconto</span> + consultoria premium gratuita
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicPageCTA;
