
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CityMap from '@/components/CityMap';
import SEOCityServiceLinks from '@/components/SEOCityServiceLinks';

const Index = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5517981679818&text=QUERO%20MULTIPLICAR%20minhas%20vendas%20em%20500%25%20com%20a%20PPlace%21";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <Services />
      
      {/* Seção de Dominação Nacional */}
      <section className="py-32 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/40 mb-8 transform hover:scale-105 transition-all duration-300">
              <span className="text-yellow-300 mr-4 text-4xl animate-bounce">🌎</span>
              <span className="text-xl font-black text-white">DOMINAÇÃO NACIONAL</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8">
              DOMINAMOS o Brasil
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> INTEIRO</span>
            </h2>
            <p className="text-2xl lg:text-3xl text-purple-100 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
              Em <span className="font-black text-yellow-300">5.570 cidades brasileiras</span>, nossa tecnologia já 
              <span className="font-black text-green-300"> ELIMINOU concorrentes</span> e criou 
              <span className="font-black text-blue-300"> IMPÉRIOS digitais</span>
            </p>
            <Link to="/mapa-cidades">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-black text-2xl px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-500 border-4 border-purple-300">
                <span className="mr-3 text-3xl">🗺️</span>
                VER NOSSA DOMINAÇÃO
                <ArrowDown className="ml-4 h-6 w-6 animate-bounce" />
              </Button>
            </Link>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <CityMap />
          </div>
        </div>
      </section>

      {/* Links SEO para todas as combinações */}
      <SEOCityServiceLinks />

      <Testimonials />
      
      {/* CTA Final DEVASTADOR */}
      <section className="py-32 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Ultimate Success Badge */}
            <div className="inline-flex items-center px-12 py-6 rounded-full bg-gradient-to-r from-yellow-500/30 to-orange-500/30 backdrop-blur-sm border-2 border-yellow-400/50 mb-12 transform hover:scale-105 transition-all duration-300">
              <span className="text-yellow-300 mr-4 text-5xl animate-bounce">👑</span>
              <span className="text-2xl font-black text-white">SUAS VENDAS NUNCA MAIS SERÃO AS MESMAS</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Sua Concorrência vai 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> CHORAR </span>
              quando Você DOMINAR
            </h2>
            <p className="text-2xl lg:text-3xl text-purple-100 mb-16 max-w-5xl mx-auto leading-relaxed">
              Imagine seus concorrentes <span className="font-black text-red-300">PERDENDO clientes</span> para você todos os dias enquanto sua 
              <span className="font-black text-green-300"> IA trabalha 24/7</span> multiplicando suas vendas
            </p>
            
            {/* Stats de Destruição */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/30 hover:bg-white/20 transition-all duration-500 group transform hover:scale-110">
                <div className="text-6xl font-black text-red-300 mb-4 group-hover:scale-125 transition-transform duration-300">73%</div>
                <p className="text-white text-xl font-bold">dos concorrentes FALINDO</p>
                <p className="text-purple-200 text-lg mt-3">após implementação da nossa IA</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/30 hover:bg-white/20 transition-all duration-500 group transform hover:scale-110">
                <div className="text-6xl font-black text-yellow-300 mb-4 group-hover:scale-125 transition-transform duration-300">1.000+</div>
                <p className="text-white text-xl font-bold">Empresas já DOMINANDO</p>
                <p className="text-purple-200 text-lg mt-3">seus mercados com nossa tecnologia</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/30 hover:bg-white/20 transition-all duration-500 group transform hover:scale-110">
                <div className="text-6xl font-black text-green-300 mb-4 group-hover:scale-125 transition-transform duration-300">R$ 2M</div>
                <p className="text-white text-xl font-bold">Faturamento MÉDIO anual</p>
                <p className="text-purple-200 text-lg mt-3">dos nossos clientes após IA</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-black text-3xl lg:text-4xl px-20 py-10 rounded-3xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-500 transform hover:scale-110 border-4 border-yellow-300"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <span className="mr-4 text-4xl group-hover:animate-bounce">⚡</span>
                QUERO ELIMINAR CONCORRÊNCIA
                <span className="ml-4 text-4xl group-hover:animate-bounce">⚡</span>
              </Button>
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 font-black text-3xl lg:text-4xl px-20 py-10 rounded-3xl shadow-2xl hover:shadow-green-500/50 transition-all duration-500 transform hover:scale-110 border-4 border-green-300"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <span className="mr-4 text-4xl group-hover:animate-pulse">🏆</span>
                (17) 98167-9818
              </Button>
            </div>

            {/* Warning de Urgência */}
            <div className="p-12 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-3xl border-2 border-red-500/50 max-w-4xl mx-auto backdrop-blur-sm">
              <div className="flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-red-400 rounded-full mr-4 animate-ping"></div>
                <span className="text-3xl lg:text-4xl font-black text-orange-300">⚠️ AVISO CRÍTICO ⚠️</span>
              </div>
              <p className="text-2xl lg:text-3xl font-bold text-white">
                Seus concorrentes podem estar lendo isso AGORA. Cada segundo que você demora é uma 
                <span className="font-black text-red-300"> VANTAGEM que você dá para eles</span>. 
                <span className="font-black text-yellow-300"> Aja ANTES que seja tarde demais</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
