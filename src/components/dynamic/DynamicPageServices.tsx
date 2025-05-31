
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DynamicPageServicesProps {
  service: any;
  city: any;
}

const DynamicPageServices = ({ service, city }: DynamicPageServicesProps) => {
  const relatedServices = [
    {
      title: `E-commerce em ${city.name}`,
      description: `Lojas virtuais completas que vendem 24/7 em ${city.name}`,
      price: "R$ 2.999",
      icon: "🛒"
    },
    {
      title: `Landing Pages ${city.name}`,
      description: `Páginas de alta conversão otimizadas para ${city.name}`,
      price: "R$ 899",
      icon: "📄"
    },
    {
      title: `LeadPilot ${city.name}`,
      description: `Sistema de IA que multiplica vendas em ${city.name}`,
      price: "R$ 4.999",
      icon: "🤖"
    },
    {
      title: `Apps Mobile ${city.name}`,
      description: `Aplicativos nativos para empresas de ${city.name}`,
      price: "R$ 8.999",
      icon: "📱"
    },
    {
      title: `SEO Local ${city.name}`,
      description: `Otimização para aparecer no Google em ${city.name}`,
      price: "R$ 799/mês",
      icon: "🔍"
    },
    {
      title: `IA Personalizada ${city.name}`,
      description: `Sistemas inteligentes sob medida para ${city.name}`,
      price: "R$ 12.999",
      icon: "🧠"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Outros Serviços em {city.name}
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Soluções completas de tecnologia para empresas de {city.name}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {relatedServices.map((relatedService, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 group">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{relatedService.icon}</div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">
                  {relatedService.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{relatedService.description}</p>
                <div className="text-2xl font-bold text-purple-600 mb-4">
                  {relatedService.price}
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicPageServices;
