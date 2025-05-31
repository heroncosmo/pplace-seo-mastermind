
import React from 'react';
import { Button } from '@/components/ui/button';

interface DynamicPageHeroProps {
  service: any;
  city: any;
  content: any;
}

const DynamicPageHero = ({ service, city, content }: DynamicPageHeroProps) => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {content?.title || `${service.name} em ${city.name}`}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
          {content?.description || `A PPlace é líder em ${service.name} em ${city.name}. Criamos soluções inovadoras com IA que transformam negócios e multiplicam resultados.`}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              R$ {service.base_price?.toLocaleString('pt-BR')}
            </div>
            <p className="text-purple-100">Investimento em {city.name}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <p className="text-purple-100">Suporte com IA</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">7-15 dias</div>
            <p className="text-purple-100">Entrega garantida</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold shadow-lg">
            🚀 Orçamento Gratuito em 2h
          </Button>
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 font-bold shadow-lg">
            📱 WhatsApp: (11) 99999-9999
          </Button>
        </div>
        
        <div className="mt-8 text-sm opacity-80">
          ✅ Sem compromisso • ✅ Resposta em 2h • ✅ Especialistas em {city.name}
        </div>
      </div>
    </section>
  );
};

export default DynamicPageHero;
