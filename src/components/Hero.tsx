
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              PPlace
            </span>
            <br />
            Tecnologia que Transforma
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Criamos sites, e-commerce, landing pages e sistemas revolucionários com IA. 
            <br />
            <span className="text-purple-400 font-semibold">Especialistas em LeadPilot</span> - 
            O sistema que multiplica suas vendas!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
              Começar Agora
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-4">
              Ver LeadPilot
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-2">1000+</h3>
              <p className="text-gray-300">Sites Criados</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
              <p className="text-gray-300">Cidades Atendidas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-2">99%</h3>
              <p className="text-gray-300">Satisfação</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;
