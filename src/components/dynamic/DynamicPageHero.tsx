
import React from 'react';
import { Button } from '@/components/ui/button';

interface DynamicPageHeroProps {
  service: any;
  city: any;
  content: any;
}

const DynamicPageHero = ({ service, city, content }: DynamicPageHeroProps) => {
  const whatsappMessage = `Oi%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20${service.name}%20em%20${city.name}%20da%20PPlace.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5517981679818&text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradientes animados */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      
      {/* Elementos animados de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-6xl mx-auto">
          {/* Badge superior */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="text-yellow-300 mr-2">⭐</span>
            <span className="text-sm font-medium">Líder em {service.name} em {city.name}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              {service.name}
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              em {city.name}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-purple-100 max-w-5xl mx-auto leading-relaxed">
            A PPlace revoluciona seu negócio em {city.name} com 
            <span className="text-yellow-300 font-bold"> {service.name} </span>
            de última geração. Multiplique suas vendas com nossa IA avançada!
          </p>
          
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                R$ {service.base_price?.toLocaleString('pt-BR')}
              </div>
              <p className="text-purple-100 text-sm">Investimento em {city.name}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">500%</div>
              <p className="text-purple-100 text-sm">Aumento médio vendas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">24/7</div>
              <p className="text-purple-100 text-sm">Suporte com IA</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-2">7-15</div>
              <p className="text-purple-100 text-sm">Dias para entrega</p>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold text-xl px-12 py-6 rounded-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              🚀 COMEÇAR AGORA - GRÁTIS
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 font-bold text-xl px-12 py-6 rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              📱 WhatsApp: (17) 98167-9818
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span>Resposta em 2h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span>Especialistas em {city.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span>Garantia de satisfação</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default DynamicPageHero;
