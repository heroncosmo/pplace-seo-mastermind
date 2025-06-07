
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
      title: `E-commerce Supremo ${city.name}`,
      description: `Lojas virtuais que DOMINAM o mercado de ${city.name}`,
      price: "R$ 2.999",
      icon: "🛒",
      gradient: "from-blue-600 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      borderColor: "border-blue-300",
      features: ["IA de vendas", "Automação total", "Suporte 24/7"]
    },
    {
      title: `Landing Pages Killer ${city.name}`,
      description: `Páginas que CONVERTEM como nenhuma em ${city.name}`,
      price: "R$ 899",
      icon: "📄",
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-300",
      features: ["Alta conversão", "Design premium", "Otimização IA"]
    },
    {
      title: `LeadPilot Revolucionário ${city.name}`,
      description: `Sistema de IA que MULTIPLICA vendas em ${city.name}`,
      price: "R$ 4.999",
      icon: "🤖",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-300",
      features: ["IA avançada", "Automação total", "ROI garantido"]
    },
    {
      title: `Apps Mobile Dominantes ${city.name}`,
      description: `Aplicativos que LIDERAM o mercado de ${city.name}`,
      price: "R$ 8.999",
      icon: "📱",
      gradient: "from-indigo-600 to-blue-600",
      bgGradient: "from-indigo-50 to-blue-50",
      borderColor: "border-indigo-300",
      features: ["Nativo iOS/Android", "IA integrada", "Performance máxima"]
    },
    {
      title: `SEO Dominante ${city.name}`,
      description: `Posicionamento #1 no Google em ${city.name}`,
      price: "R$ 799/mês",
      icon: "🔍",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-300",
      features: ["Ranking #1", "Tráfego explosivo", "Leads qualificados"]
    },
    {
      title: `IA Personalizada ${city.name}`,
      description: `Sistemas inteligentes únicos para ${city.name}`,
      price: "R$ 12.999",
      icon: "🧠",
      gradient: "from-yellow-600 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-300",
      features: ["IA customizada", "Automação total", "Vantagem competitiva"]
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-300 shadow-xl text-lg font-black mb-8 transform hover:scale-105 transition-all duration-300">
            <span className="mr-3 text-3xl animate-bounce">🚀</span>
            Soluções Revolucionárias
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8">
            Outros Serviços 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> PREMIUM </span>
            em {city.name}
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-700 max-w-5xl mx-auto font-light leading-relaxed">
            Transforme completamente seu negócio com nossa suíte completa de soluções tecnológicas 
            <span className="font-black text-purple-600"> desenvolvidas especialmente</span> para empresas de {city.name}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
          {relatedServices.map((relatedService, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-2xl transition-all duration-700 border-4 ${relatedService.borderColor} group hover:scale-105 bg-gradient-to-br ${relatedService.bgGradient} overflow-hidden relative transform`}
            >
              {/* Premium Badge */}
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-black px-4 py-2 rounded-full shadow-lg">
                  🏆 PREMIUM
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="text-center relative overflow-hidden pb-8 pt-12">
                <div className="relative z-10">
                  <div className={`w-24 h-24 bg-gradient-to-r ${relatedService.gradient} rounded-3xl flex items-center justify-center text-5xl mb-8 mx-auto shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    {relatedService.icon}
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl text-gray-900 group-hover:text-purple-600 transition-colors mb-6 font-black leading-tight">
                    {relatedService.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="text-center space-y-8 pb-10 px-8">
                <p className="text-gray-700 text-xl leading-relaxed font-medium">{relatedService.description}</p>
                
                <div className="space-y-6">
                  <div className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${relatedService.gradient} bg-clip-text text-transparent`}>
                    {relatedService.price}
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {relatedService.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-3 text-lg text-gray-700">
                        <span className="text-green-500 text-xl">✅</span>
                        <span className="font-bold">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${relatedService.gradient} hover:shadow-2xl text-white font-black py-6 text-xl rounded-2xl transition-all duration-500 group-hover:scale-110 border-2 border-white/20`}
                    onClick={() => window.open(`https://api.whatsapp.com/send?phone=5517981679818&text=Gostaria%20de%20saber%20mais%20sobre%20${relatedService.title}`, '_blank')}
                  >
                    <span className="mr-3 text-2xl">🚀</span>
                    Solicitar Orçamento
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ultimate CTA Section */}
        <div className="text-center mt-24">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-16 text-white max-w-6xl mx-auto shadow-2xl border-4 border-purple-300 transform hover:scale-105 transition-all duration-500">
            <h3 className="text-4xl lg:text-5xl font-black mb-8">
              Quer DOMINAR {city.name} com uma solução única?
            </h3>
            <p className="text-2xl lg:text-3xl mb-10 opacity-90 font-light">
              Nossa equipe de <span className="font-black">especialistas elite</span> pode criar uma solução 
              <span className="font-black text-yellow-300"> revolucionária</span> para seu negócio
            </p>
            <Button 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-black text-2xl lg:text-3xl px-16 py-8 rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-500 border-4 border-yellow-300"
              onClick={() => window.open(`https://api.whatsapp.com/send?phone=5517981679818&text=Gostaria%20de%20uma%20solução%20revolucionária%20para%20minha%20empresa%20em%20${city.name}`, '_blank')}
            >
              <span className="mr-4 text-3xl animate-bounce">🧠</span>
              Falar com Especialista Elite
              <span className="ml-4 text-3xl animate-bounce">🚀</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicPageServices;
