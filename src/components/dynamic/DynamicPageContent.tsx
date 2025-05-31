
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DynamicPageContentProps {
  service: any;
  city: any;
  content: any;
}

const DynamicPageContent = ({ service, city, content }: DynamicPageContentProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Por que escolher a PPlace em {city.name}?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Especialistas Locais</h3>
                    <p className="text-gray-600">
                      Conhecemos profundamente o mercado de {city.name} e criamos estratégias específicas para o público local.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">IA Avançada</h3>
                    <p className="text-gray-600">
                      Utilizamos inteligência artificial de última geração para otimizar conversões e automatizar processos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Resultados Comprovados</h3>
                    <p className="text-gray-600">
                      Já ajudamos centenas de empresas em {city.name} a multiplicarem suas vendas online.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="border-2 border-purple-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <CardTitle className="text-2xl">🎁 Oferta Exclusiva para {city.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">
                        R$ {service.base_price?.toLocaleString('pt-BR')}
                      </div>
                      <p className="text-gray-600">Preço especial para {city.name}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-500">✅</span>
                        <span>Consultoria gratuita inclusa</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-500">✅</span>
                        <span>Suporte 24/7 com IA</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-500">✅</span>
                        <span>Garantia de satisfação</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-500">✅</span>
                        <span>Entrega em tempo recorde</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {content?.content && (
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: content.content }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DynamicPageContent;
