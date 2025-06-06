
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
      icon: "🛒",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
      borderColor: "border-blue-200"
    },
    {
      title: `Landing Pages ${city.name}`,
      description: `Páginas de alta conversão otimizadas para ${city.name}`,
      price: "R$ 899",
      icon: "📄",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      title: `LeadPilot ${city.name}`,
      description: `Sistema de IA que multiplica vendas em ${city.name}`,
      price: "R$ 4.999",
      icon: "🤖",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      title: `Apps Mobile ${city.name}`,
      description: `Aplicativos nativos para empresas de ${city.name}`,
      price: "R$ 8.999",
      icon: "📱",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      borderColor: "border-indigo-200"
    },
    {
      title: `SEO Local ${city.name}`,
      description: `Otimização para aparecer no Google em ${city.name}`,
      price: "R$ 799/mês",
      icon: "🔍",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-200"
    },
    {
      title: `IA Personalizada ${city.name}`,
      description: `Sistemas inteligentes sob medida para ${city.name}`,
      price: "R$ 12.999",
      icon: "🧠",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            <span className="mr-2">🚀</span>
            Soluções Completas
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Outros Serviços 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Premium </span>
            em {city.name}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme completamente seu negócio com nossa suíte completa de soluções tecnológicas 
            desenvolvidas especialmente para empresas de {city.name}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {relatedServices.map((relatedService, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-2xl transition-all duration-500 border-2 ${relatedService.borderColor} group hover:scale-105 bg-gradient-to-br ${relatedService.bgGradient} overflow-hidden relative`}
            >
              {/* Badge de destaque */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              </div>

              <CardHeader className="text-center relative overflow-hidden pb-6">
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${relatedService.gradient} rounded-full flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {relatedService.icon}
                  </div>
                  <CardTitle className="text-xl lg:text-2xl text-gray-900 group-hover:text-purple-600 transition-colors mb-4 font-bold">
                    {relatedService.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="text-center space-y-6 pb-8">
                <p className="text-gray-600 text-lg leading-relaxed">{relatedService.description}</p>
                
                <div className="space-y-4">
                  <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${relatedService.gradient} bg-clip-text text-transparent`}>
                    {relatedService.price}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <span className="text-green-500">✅</span>
                      <span>Consultoria gratuita</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <span className="text-green-500">✅</span>
                      <span>Suporte 24/7</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <span className="text-green-500">✅</span>
                      <span>Garantia total</span>
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${relatedService.gradient} hover:shadow-lg text-white font-bold py-3 rounded-xl transition-all duration-300 group-hover:scale-105`}
                    onClick={() => window.open(`https://api.whatsapp.com/send?phone=5517981679818&text=Gostaria%20de%20saber%20mais%20sobre%20${relatedService.title}`, '_blank')}
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action adicional */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Quer uma solução personalizada para {city.name}?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nossa equipe de especialistas pode criar uma solução única para seu negócio
            </p>
            <Button 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold text-lg px-8 py-3 rounded-xl"
              onClick={() => window.open(`https://api.whatsapp.com/send?phone=5517981679818&text=Gostaria%20de%20uma%20solução%20personalizada%20para%20minha%20empresa%20em%20${city.name}`, '_blank')}
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicPageServices;
