
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5517981679818&text=Quero%20DOMINAR%20meu%20mercado%20com%20a%20tecnologia%20REVOLUCIONÁRIA%20da%20PPlace%21";

  const services = [
    {
      icon: "🛒",
      title: "E-commerce SUPREMO",
      description: "Lojas virtuais que DOMINAM o mercado e vendem enquanto você dorme",
      price: "R$ 2.999",
      results: "300% mais vendas",
      gradient: "from-blue-600 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      borderColor: "border-blue-300",
      features: ["IA de vendas automática", "Conversão GARANTIDA", "Suporte VIP 24/7"],
      persuasion: "Imagine faturar R$ 50.000/mês no piloto automático"
    },
    {
      icon: "📄",
      title: "Landing Pages KILLER",
      description: "Páginas que HIPNOTIZAM visitantes e os transformam em clientes pagantes",
      price: "R$ 899",
      results: "25% conversão",
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-300",
      features: ["Copywriting magnético", "Design IRRESISTÍVEL", "Otimização IA"],
      persuasion: "De 100 visitantes, 25 viram clientes REAIS"
    },
    {
      icon: "🤖",
      title: "LeadPilot REVOLUCIONÁRIO",
      description: "IA que qualifica leads e MULTIPLICA vendas sem você mover um dedo",
      price: "R$ 4.999",
      results: "500% ROI",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-300",
      features: ["IA AVANÇADA", "Automação TOTAL", "ROI EXPLOSIVO"],
      persuasion: "Cada R$ 1 investido retorna R$ 5 em vendas"
    },
    {
      icon: "📱",
      title: "Apps DOMINANTES",
      description: "Aplicativos que CONQUISTAM usuários e geram receita recorrente",
      price: "R$ 8.999",
      results: "80% retenção",
      gradient: "from-indigo-600 to-blue-600",
      bgGradient: "from-indigo-50 to-blue-50",
      borderColor: "border-indigo-300",
      features: ["iOS + Android", "IA integrada", "Performance MÁXIMA"],
      persuasion: "Sua marca no bolso de MILHÕES de pessoas"
    },
    {
      icon: "🔍",
      title: "SEO DOMINANTE",
      description: "Apareça em 1º lugar no Google e ROUBE clientes da concorrência",
      price: "R$ 799/mês",
      results: "#1 no Google",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-300",
      features: ["Ranking #1 GARANTIDO", "Tráfego EXPLOSIVO", "Leads QUALIFICADOS"],
      persuasion: "Seja encontrado por quem TEM DINHEIRO para comprar"
    },
    {
      icon: "🧠",
      title: "IA PERSONALIZADA",
      description: "Sistemas inteligentes que dão VANTAGEM COMPETITIVA impossível de copiar",
      price: "R$ 12.999",
      results: "Vantagem única",
      gradient: "from-yellow-600 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-300",
      features: ["IA EXCLUSIVA", "Automação ÚNICA", "Concorrência ELIMINADA"],
      persuasion: "Tecnologia que seus concorrentes NUNCA terão"
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
            Soluções que DOMINAM Mercados
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8">
            Tecnologia que 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> ELIMINA </span>
            sua Concorrência
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-700 max-w-5xl mx-auto font-light leading-relaxed">
            Cada solução é projetada para 
            <span className="font-black text-purple-600"> MULTIPLICAR seus resultados</span> e criar uma
            <span className="font-black text-orange-600"> vantagem competitiva impossível de copiar</span>
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-2xl transition-all duration-700 border-4 ${service.borderColor} group hover:scale-105 bg-gradient-to-br ${service.bgGradient} overflow-hidden relative transform`}
            >
              {/* Premium Badge */}
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-black px-4 py-2 rounded-full shadow-lg">
                  🏆 PREMIUM
                </div>
              </div>

              {/* Results Badge */}
              <div className="absolute top-6 left-6 z-10">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-black px-4 py-2 rounded-full shadow-lg">
                  {service.results}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="text-center relative overflow-hidden pb-8 pt-16">
                <div className="relative z-10">
                  <div className={`w-24 h-24 bg-gradient-to-r ${service.gradient} rounded-3xl flex items-center justify-center text-5xl mb-8 mx-auto shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl text-gray-900 group-hover:text-purple-600 transition-colors mb-6 font-black leading-tight">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="text-center space-y-8 pb-10 px-8">
                <p className="text-gray-700 text-xl leading-relaxed font-medium">{service.description}</p>
                
                {/* Persuasion Hook */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl p-6">
                  <p className="text-lg font-black text-gray-800">{service.persuasion}</p>
                </div>
                
                <div className="space-y-6">
                  <div className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-3 text-lg text-gray-700">
                        <span className="text-green-500 text-xl">✅</span>
                        <span className="font-bold">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-2xl text-white font-black py-6 text-xl rounded-2xl transition-all duration-500 group-hover:scale-110 border-2 border-white/20`}
                    onClick={() => window.open(whatsappUrl, '_blank')}
                  >
                    <span className="mr-3 text-2xl">🚀</span>
                    QUERO DOMINAR AGORA
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
              Pronto para DOMINAR seu mercado?
            </h3>
            <p className="text-2xl lg:text-3xl mb-10 opacity-90 font-light">
              Nossa equipe de <span className="font-black">especialistas elite</span> vai criar uma solução 
              <span className="font-black text-yellow-300"> impossível de copiar</span> para eliminar sua concorrência
            </p>
            <Button 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-black text-2xl lg:text-3xl px-16 py-8 rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-500 border-4 border-yellow-300"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <span className="mr-4 text-3xl animate-bounce">🧠</span>
              QUERO ELIMINAR CONCORRÊNCIA
              <span className="ml-4 text-3xl animate-bounce">🚀</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
