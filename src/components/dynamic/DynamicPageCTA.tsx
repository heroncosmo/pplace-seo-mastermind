
import React from 'react';
import { Button } from '@/components/ui/button';

interface DynamicPageCTAProps {
  service: any;
  city: any;
}

const DynamicPageCTA = ({ service, city }: DynamicPageCTAProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para Revolucionar seu Negócio em {city.name}?
        </h2>
        <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
          Junte-se a centenas de empresas de {city.name} que já transformaram seus resultados com a PPlace. 
          Nossa expertise em {service.name} e IA vai levar seu negócio ao próximo nível!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-300 mb-2">400%</div>
            <p className="text-purple-100">Aumento médio de vendas</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-green-300 mb-2">500+</div>
            <p className="text-purple-100">Empresas atendidas</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-300 mb-2">98%</div>
            <p className="text-purple-100">Satisfação dos clientes</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold text-lg px-8 py-4 shadow-xl">
            🚀 COMEÇAR AGORA - Orçamento Grátis
          </Button>
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 font-bold text-lg px-8 py-4 shadow-xl">
            📱 WhatsApp: (11) 99999-9999
          </Button>
        </div>
        
        <div className="text-purple-100 space-y-2">
          <p>✅ Resposta em até 2 horas</p>
          <p>✅ Consultoria gratuita e sem compromisso</p>
          <p>✅ Atendimento especializado para {city.name}</p>
        </div>
      </div>
    </section>
  );
};

export default DynamicPageCTA;
