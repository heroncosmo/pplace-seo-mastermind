
import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CityPage = () => {
  const { city } = useParams();
  const cityName = city?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || '';

  const services = [
    {
      title: `E-commerce em ${cityName}`,
      description: `Criamos lojas virtuais profissionais para empresas de ${cityName} com sistema completo de vendas online`,
      price: "A partir de R$ 2.999"
    },
    {
      title: `Landing Pages ${cityName}`,
      description: `Páginas de conversão otimizadas para capturar leads de clientes em ${cityName}`,
      price: "A partir de R$ 899"
    },
    {
      title: `Sites Institucionais ${cityName}`,
      description: `Sites profissionais que transmitem credibilidade para sua empresa em ${cityName}`,
      price: "A partir de R$ 1.499"
    },
    {
      title: `Sistema LeadPilot ${cityName}`,
      description: `Revolucione suas vendas em ${cityName} com nosso sistema de IA para conversão de leads`,
      price: "A partir de R$ 4.999"
    },
    {
      title: `Aplicativos Mobile ${cityName}`,
      description: `Apps nativos para Android e iOS para empresas de ${cityName}`,
      price: "A partir de R$ 8.999"
    },
    {
      title: `SEO Local ${cityName}`,
      description: `Otimização para aparecer no Google quando pesquisarem em ${cityName}`,
      price: "A partir de R$ 799/mês"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Criação de Sites em {cityName}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A PPlace é especialista em desenvolvimento web e sistemas com IA para empresas de {cityName}. 
            Criamos sites que vendem, convertem e geram resultados reais!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              Orçamento Gratuito
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
              Ver Portfólio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços em {cityName}
            </h2>
            <p className="text-xl text-gray-600">
              Soluções completas em tecnologia para empresas de {cityName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600 mb-4">{service.price}</div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Por que escolher a PPlace em {cityName}?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">✅ Especialistas Locais</h3>
                <p className="text-gray-600">
                  Conhecemos o mercado de {cityName} e criamos soluções específicas para o público local.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">🚀 Tecnologia Avançada</h3>
                <p className="text-gray-600">
                  Utilizamos as mais modernas tecnologias e IA para criar sistemas únicos em {cityName}.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">📈 Resultados Comprovados</h3>
                <p className="text-gray-600">
                  Já ajudamos centenas de empresas em {cityName} a aumentarem suas vendas online.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">🎯 SEO Otimizado</h3>
                <p className="text-gray-600">
                  Seus clientes em {cityName} te encontrarão facilmente no Google.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para dominar o mercado digital de {cityName}?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Entre em contato agora e receba um orçamento personalizado para sua empresa em {cityName}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              WhatsApp: (11) 99999-9999
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              contato@pplace.com.br
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CityPage;
