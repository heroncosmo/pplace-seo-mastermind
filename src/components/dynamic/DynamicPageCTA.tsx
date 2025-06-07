
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
    <section className="relative py-32 overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-7xl mx-auto">
          {/* Success Badge */}
          <div className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 mb-12 transform hover:scale-105 transition-all duration-300">
            <span className="text-yellow-300 mr-4 text-4xl animate-bounce">🏆</span>
            <span className="text-xl font-black">Transformação Garantida</span>
          </div>

          {/* Main CTA Headline */}
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-none">
            Pronto para 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> DOMINAR </span>
            {city.name}?
          </h2>
          
          {/* Compelling Description */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-purple-100 mb-16 max-w-6xl mx-auto leading-relaxed font-light">
            Junte-se às <span className="font-black text-yellow-300">centenas de empresas</span> de {city.name} que já 
            <span className="font-black text-green-300"> MULTIPLICARAM seus resultados</span> com nossa expertise em 
            <span className="font-black text-blue-300"> {service.name}</span> e IA revolucionária!
          </p>
          
          {/* Advanced Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/30 hover:bg-white/20 transition-all duration-500 group transform hover:scale-110">
              <div className="text-5xl lg:text-6xl font-black text-yellow-300 mb-4 group-hover:scale-125 transition-transform duration-300">500%</div>
              <p className="text-purple-100 text-xl font-bold">Aumento médio de vendas</p>
              <p className="text-purple-200 text-lg mt-3">Com nossa IA revolucionária</p>
              <div className="w-full bg-yellow-500/20 h-2 rounded-full mt-4">
                <div className="w-full bg-yellow-400 h-2 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/30 hover:bg-white/20 transition-all duration-500 group transform hover:scale-110">
              <div className="text-5xl lg:text-6xl font-black text-green-300 mb-4 group-hover:scale-125 transition-transform duration-300">1.000+</div>
              <p className="text-purple-100 text-xl font-bold">Empresas transformadas</p>
              <p className="text-purple-200 text-lg mt-3">Em todo o Brasil</p>
              <div className="w-full bg-green-500/20 h-2 rounded-full mt-4">
                <div className="w-5/6 bg-green-400 h-2 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/30 hover:bg-white/20 transition-all duration-500 group transform hover:scale-110">
              <div className="text-5xl lg:text-6xl font-black text-blue-300 mb-4 group-hover:scale-125 transition-transform duration-300">98%</div>
              <p className="text-purple-100 text-xl font-bold">Satisfação dos clientes</p>
              <p className="text-purple-200 text-lg mt-3">Nota máxima sempre</p>
              <div className="w-full bg-blue-500/20 h-2 rounded-full mt-4">
                <div className="w-full bg-blue-400 h-2 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/30 hover:bg-white/20 transition-all duration-500 group transform hover:scale-110">
              <div className="text-5xl lg:text-6xl font-black text-orange-300 mb-4 group-hover:scale-125 transition-transform duration-300">24/7</div>
              <p className="text-purple-100 text-xl font-bold">Suporte premium</p>
              <p className="text-purple-200 text-lg mt-3">Com IA inclusa</p>
              <div className="w-full bg-orange-500/20 h-2 rounded-full mt-4">
                <div className="w-4/5 bg-orange-400 h-2 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Ultimate CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-10 justify-center mb-20">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-black text-3xl lg:text-4xl px-20 py-10 lg:px-24 lg:py-12 rounded-3xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-500 transform hover:scale-110 border-4 border-yellow-300"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <span className="mr-4 text-4xl group-hover:animate-bounce">🚀</span>
              COMEÇAR AGORA - ORÇAMENTO GRÁTIS
              <span className="ml-4 text-4xl group-hover:animate-bounce">🚀</span>
            </Button>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 font-black text-3xl lg:text-4xl px-20 py-10 lg:px-24 lg:py-12 rounded-3xl shadow-2xl hover:shadow-green-500/50 transition-all duration-500 transform hover:scale-110 border-4 border-green-300"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <span className="mr-4 text-4xl group-hover:animate-pulse">📱</span>
              WhatsApp: (17) 98167-9818
            </Button>
          </div>
          
          {/* Enhanced Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-purple-100 max-w-6xl mx-auto mb-16">
            <div className="flex flex-col items-center p-8 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <span className="text-5xl mb-4 animate-bounce">⚡</span>
              <p className="font-black text-xl text-center">Resposta em até 2 horas</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <span className="text-5xl mb-4 animate-bounce">🤝</span>
              <p className="font-black text-xl text-center">Consultoria gratuita</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <span className="text-5xl mb-4 animate-bounce">🏆</span>
              <p className="font-black text-xl text-center">Especialistas em {city.name}</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <span className="text-5xl mb-4 animate-bounce">✅</span>
              <p className="font-black text-xl text-center">Garantia de satisfação</p>
            </div>
          </div>

          {/* Ultimate Urgency Section */}
          <div className="p-12 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-3xl border-2 border-orange-500/50 max-w-5xl mx-auto backdrop-blur-sm">
            <div className="flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-red-400 rounded-full mr-4 animate-ping"></div>
              <span className="text-3xl lg:text-4xl font-black text-orange-300">🔥 MOMENTO CRÍTICO! 🔥</span>
            </div>
            <p className="text-2xl lg:text-3xl font-bold">
              Enquanto você hesita, <span className="font-black text-red-300">seus concorrentes</span> podem estar 
              <span className="font-black text-yellow-300"> fechando negócio conosco</span>. 
              <span className="font-black text-green-300"> Seja MAIS ESPERTO que eles</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicPageCTA;
