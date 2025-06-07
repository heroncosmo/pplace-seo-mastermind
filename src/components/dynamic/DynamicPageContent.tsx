
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DynamicPageContentProps {
  service: any;
  city: any;
  content?: any;
}

const DynamicPageContent = ({ service, city, content }: DynamicPageContentProps) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5517981679818&text=Oi%2C%20gostaria%20de%20um%20orçamento%20para%20${service.name}%20em%20${city.name}`;

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-8xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
            {/* Left Column - Content */}
            <div className="space-y-10">
              {/* Section Badge */}
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 shadow-lg">
                <span className="text-3xl mr-3">🏆</span>
                <span className="text-purple-700 font-black text-xl">Líderes Absolutos em {city.name}</span>
              </div>
              
              {/* Main Heading */}
              <h2 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                Por que a 
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> PPlace </span>
                domina {city.name}?
              </h2>
              
              {/* Description */}
              <p className="text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light">
                Somos os pioneiros em {service.name} com IA revolucionária em {city.name}. 
                Nossa tecnologia já transformou <span className="font-black text-purple-600">centenas de negócios</span> na região.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="group flex items-start space-x-6 p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl border border-purple-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:rotate-12 transition-transform duration-300">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3">Especialistas Locais</h3>
                    <p className="text-gray-700 text-lg">Conhecimento profundo do mercado de {city.name}</p>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-6 p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:rotate-12 transition-transform duration-300">
                    🤖
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3">IA de Ponta</h3>
                    <p className="text-gray-700 text-lg">Tecnologia que multiplica resultados</p>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-6 p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl border border-yellow-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:rotate-12 transition-transform duration-300">
                    📈
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3">Resultados Comprovados</h3>
                    <p className="text-gray-700 text-lg">500% aumento médio de vendas</p>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-6 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border border-indigo-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:rotate-12 transition-transform duration-300">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3">Entrega Expressa</h3>
                    <p className="text-gray-700 text-lg">Projetos em tempo recorde</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Premium Quote Card */}
            <div className="lg:sticky lg:top-8">
              <Card className="border-4 border-purple-300 shadow-2xl bg-gradient-to-br from-white to-purple-50 overflow-hidden transform hover:scale-105 transition-all duration-500">
                <CardHeader className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden p-10">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <span className="text-5xl mr-4 animate-bounce">🎁</span>
                      <div>
                        <CardTitle className="text-3xl lg:text-4xl font-black">
                          Oferta Exclusiva
                        </CardTitle>
                        <p className="text-purple-100 text-xl font-medium">Para empresas de {city.name}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-10 space-y-8">
                  {/* Price Display */}
                  <div className="text-center">
                    <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                      R$ {service.base_price?.toLocaleString('pt-BR')}
                    </div>
                    <p className="text-gray-700 text-2xl font-bold">Preço especial para {city.name}</p>
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-lg font-black mt-4 border-2 border-green-300">
                      <span className="mr-2 text-2xl">💰</span>
                      Economia de até 40%
                    </div>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                      <span className="text-green-600 text-3xl">✅</span>
                      <span className="text-lg font-black text-gray-700">Consultoria grátis</span>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200">
                      <span className="text-blue-600 text-3xl">✅</span>
                      <span className="text-lg font-black text-gray-700">Suporte 24/7</span>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
                      <span className="text-purple-600 text-3xl">✅</span>
                      <span className="text-lg font-black text-gray-700">IA incluída</span>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border-2 border-orange-200">
                      <span className="text-orange-600 text-3xl">✅</span>
                      <span className="text-lg font-black text-gray-700">Garantia total</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="space-y-6">
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-black text-2xl py-8 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-105 border-4 border-purple-300"
                      onClick={() => window.open(whatsappUrl, '_blank')}
                    >
                      <span className="mr-3 text-3xl animate-bounce">🚀</span>
                      QUERO MEU ORÇAMENTO GRÁTIS
                    </Button>
                    <p className="text-sm text-gray-600 text-center leading-relaxed font-medium">
                      ✅ Resposta em até 2 horas • ✅ Sem compromisso • ✅ Especialistas locais em {city.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Rich Content Section */}
          {content?.content && (
            <div className="prose prose-2xl prose-purple max-w-none bg-white rounded-3xl p-16 shadow-2xl border-2 border-gray-200">
              <div dangerouslySetInnerHTML={{ __html: content.content }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DynamicPageContent;
