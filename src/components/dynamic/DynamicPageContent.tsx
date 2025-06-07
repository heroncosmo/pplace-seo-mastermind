
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DynamicPageContentProps {
  service: any;
  city: any;
  content: any;
}

const DynamicPageContent = ({ service, city, content }: DynamicPageContentProps) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5517981679818&text=Oi%2C%20gostaria%20de%20um%20orçamento%20para%20${service.name}%20em%20${city.name}`;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero content section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                <span className="mr-2">🏆</span>
                Líderes em {city.name}
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Por que escolher a 
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> PPlace </span>
                em {city.name}?
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Somos especialistas em {service.name} com foco no mercado de {city.name}. 
                Nossa tecnologia de IA avançada já transformou centenas de negócios na região.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Especialistas Locais</h3>
                    <p className="text-gray-600">Conhecimento profundo do mercado de {city.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                    🤖
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">IA Avançada</h3>
                    <p className="text-gray-600">Tecnologia de ponta para resultados superiores</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                    📈
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Resultados Comprovados</h3>
                    <p className="text-gray-600">Centenas de empresas transformadas em {city.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Entrega Rápida</h3>
                    <p className="text-gray-600">Projetos entregues em tempo recorde</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Formulário de orçamento melhorado */}
            <div className="lg:sticky lg:top-8">
              <Card className="border-2 border-purple-200 shadow-2xl bg-gradient-to-br from-white to-purple-50 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">🎁</span>
                      <div>
                        <CardTitle className="text-2xl lg:text-3xl font-bold">
                          Oferta Exclusiva
                        </CardTitle>
                        <p className="text-purple-100">Para empresas de {city.name}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      R$ {service.base_price?.toLocaleString('pt-BR')}
                    </div>
                    <p className="text-gray-600 text-lg">Preço especial para {city.name}</p>
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mt-2">
                      <span className="mr-1">💰</span>
                      Economia de até 40%
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <span className="text-green-600 text-xl">✅</span>
                      <span className="text-sm font-medium text-gray-700">Consultoria grátis</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <span className="text-blue-600 text-xl">✅</span>
                      <span className="text-sm font-medium text-gray-700">Suporte 24/7</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                      <span className="text-purple-600 text-xl">✅</span>
                      <span className="text-sm font-medium text-gray-700">IA incluída</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                      <span className="text-orange-600 text-xl">✅</span>
                      <span className="text-sm font-medium text-gray-700">Garantia total</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => window.open(whatsappUrl, '_blank')}
                    >
                      🚀 QUERO MEU ORÇAMENTO GRÁTIS
                    </Button>
                    <p className="text-xs text-gray-500 text-center leading-relaxed">
                      ✅ Resposta em até 2 horas • ✅ Sem compromisso • ✅ Especialistas locais em {city.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Conteúdo adicional */}
          {content?.content && (
            <div className="prose prose-lg prose-purple max-w-none bg-white rounded-2xl p-12 shadow-lg border border-gray-200">
              <div dangerouslySetInnerHTML={{ __html: content.content }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DynamicPageContent;
