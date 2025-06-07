
import React from 'react';
import { Button } from '@/components/ui/button';

interface DynamicPageHeroProps {
  service: any;
  city: any;
  content?: any;
}

const DynamicPageHero = ({ service, city, content }: DynamicPageHeroProps) => {
  const whatsappMessage = `Oi%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20${service.name}%20em%20${city.name}%20da%20PPlace.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5517981679818&text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Background System */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-7xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 mb-8 transform hover:scale-105 transition-all duration-300">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-yellow-300 font-semibold text-lg">🏆 Empresa Líder em {service.name} • {city.name}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
              {service.name}
            </span>
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-bold">
              que VENDE MAIS
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-purple-200 font-medium">
              em {city.name}
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl lg:text-4xl mb-12 text-purple-100 max-w-6xl mx-auto leading-relaxed font-light">
            A PPlace revoluciona negócios em {city.name} com 
            <span className="text-yellow-300 font-bold"> IA Avançada</span> que 
            <span className="text-green-300 font-bold"> multiplica vendas em até 500%</span>
          </p>
          
          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group transform hover:scale-105">
              <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-3 group-hover:scale-110 transition-transform duration-300">
                R$ {service.base_price?.toLocaleString('pt-BR')}
              </div>
              <p className="text-purple-100 text-lg font-medium">Investimento em {city.name}</p>
              <div className="w-full bg-yellow-500/20 h-1 rounded-full mt-3">
                <div className="w-3/4 bg-yellow-400 h-1 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group transform hover:scale-105">
              <div className="text-4xl md:text-5xl font-black text-green-300 mb-3 group-hover:scale-110 transition-transform duration-300">500%</div>
              <p className="text-purple-100 text-lg font-medium">Aumento médio vendas</p>
              <div className="w-full bg-green-500/20 h-1 rounded-full mt-3">
                <div className="w-full bg-green-400 h-1 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group transform hover:scale-105">
              <div className="text-4xl md:text-5xl font-black text-blue-300 mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <p className="text-purple-100 text-lg font-medium">IA trabalhando</p>
              <div className="w-full bg-blue-500/20 h-1 rounded-full mt-3">
                <div className="w-4/5 bg-blue-400 h-1 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group transform hover:scale-105">
              <div className="text-4xl md:text-5xl font-black text-orange-300 mb-3 group-hover:scale-110 transition-transform duration-300">1.000+</div>
              <p className="text-purple-100 text-lg font-medium">Clientes satisfeitos</p>
              <div className="w-full bg-orange-500/20 h-1 rounded-full mt-3">
                <div className="w-5/6 bg-orange-400 h-1 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Advanced CTA Section */}
          <div className="space-y-8 mb-16">
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-black text-2xl lg:text-3xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-500 transform hover:scale-110 border-4 border-yellow-300"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <span className="mr-3 text-3xl group-hover:animate-bounce">🚀</span>
                COMEÇAR AGORA
                <span className="ml-3 text-3xl group-hover:animate-bounce">🚀</span>
              </Button>
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 font-black text-2xl lg:text-3xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-500 transform hover:scale-110 border-4 border-green-300"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <span className="mr-3 text-3xl group-hover:animate-pulse">📱</span>
                (17) 98167-9818
              </Button>
            </div>
            
            {/* Urgency Indicator */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-400/30 backdrop-blur-sm max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <div className="w-4 h-4 bg-red-400 rounded-full mr-3 animate-ping"></div>
                <span className="text-2xl font-bold text-orange-300">⚡ OFERTA LIMITADA ⚡</span>
              </div>
              <p className="text-xl text-white">
                Primeiros <span className="font-black text-yellow-300">10 clientes</span> de {city.name} ganham 
                <span className="font-black text-green-300"> 40% DE DESCONTO</span>
              </p>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-purple-100 max-w-5xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <span className="text-4xl mb-3 animate-bounce">⚡</span>
              <p className="font-bold text-center">Resposta em 2 horas</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <span className="text-4xl mb-3 animate-bounce">🤝</span>
              <p className="font-bold text-center">Consultoria gratuita</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <span className="text-4xl mb-3 animate-bounce">🏆</span>
              <p className="font-bold text-center">Especialistas {city.name}</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <span className="text-4xl mb-3 animate-bounce">✅</span>
              <p className="font-bold text-center">Garantia satisfação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-4 border-white/50 rounded-full flex justify-center">
          <div className="w-2 h-4 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default DynamicPageHero;
