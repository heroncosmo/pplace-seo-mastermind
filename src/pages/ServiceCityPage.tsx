
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { slugToCity } from '@/utils/cityUtils';

const ServiceCityPage = () => {
  const params = useParams();
  const url = window.location.pathname;
  
  // Extrair serviço e cidade da URL
  const serviceSlug = url.split('-')[0].substring(1); // Remove a barra inicial
  const citySlug = url.split('-').slice(1).join('-');
  const cityName = slugToCity(citySlug);

  const serviceData = {
    'ecommerce': {
      name: 'E-commerce',
      title: 'E-commerce',
      description: 'Criação de lojas virtuais profissionais',
      price: 'R$ 2.999',
      features: [
        'Catálogo de produtos ilimitado',
        'Sistema de pagamento integrado (PIX, Cartão, Boleto)',
        'Gestão completa de estoque',
        'Painel administrativo intuitivo',
        'Integração com Correios',
        'Relatórios de vendas detalhados',
        'Design responsivo',
        'SEO otimizado'
      ]
    },
    'landing': {
      name: 'Landing Page',
      title: 'Landing Page',
      description: 'Páginas de alta conversão para capturar leads',
      price: 'R$ 899',
      features: [
        'Design focado em conversão',
        'Copywriting persuasivo incluído',
        'Formulários otimizados',
        'Integração com WhatsApp',
        'Análise de comportamento',
        'Otimização para Google Ads',
        'Mobile-first design',
        'Analytics avançado'
      ]
    },
    'leadpilot': {
      name: 'LeadPilot',
      title: 'Sistema LeadPilot',
      description: 'Sistema de IA que multiplica suas vendas',
      price: 'R$ 4.999',
      features: [
        'Inteligência Artificial avançada',
        'Qualificação automática de leads',
        'Chatbot 24/7',
        'Integração WhatsApp Business',
        'Dashboard de métricas',
        'Funil de vendas automatizado',
        'Análise preditiva',
        'Relatórios em tempo real'
      ]
    },
    'seo': {
      name: 'SEO',
      title: 'SEO Local',
      description: 'Otimização para aparecer no Google',
      price: 'R$ 799/mês',
      features: [
        'Auditoria SEO completa',
        'Otimização para busca local',
        'Google Meu Negócio otimizado',
        'Criação de conteúdo local',
        'Link building regional',
        'Monitoramento de posições',
        'Relatórios mensais',
        'Suporte especializado'
      ]
    },
    'aplicativo': {
      name: 'Aplicativo',
      title: 'Aplicativo Mobile',
      description: 'Apps nativos para Android e iOS',
      price: 'R$ 8.999',
      features: [
        'Desenvolvimento nativo',
        'Design UX/UI profissional',
        'Publicação nas lojas',
        'Push notifications',
        'Integração com APIs',
        'Sistema de login',
        'Atualizações incluídas',
        'Suporte pós-lançamento'
      ]
    },
    'sistema': {
      name: 'Sistema com IA',
      title: 'Sistema com Inteligência Artificial',
      description: 'Soluções personalizadas com IA',
      price: 'R$ 12.999',
      features: [
        'IA personalizada para seu negócio',
        'Automação de processos',
        'Machine Learning aplicado',
        'Dashboard analytics',
        'Integração com sistemas existentes',
        'API personalizada',
        'Treinamento da equipe',
        'Suporte especializado'
      ]
    }
  };

  const service = serviceData[serviceSlug as keyof typeof serviceData] || serviceData['ecommerce'];

  const competitors = [
    'Empresas locais ultrapassadas',
    'Soluções genéricas sem personalização',
    'Sistemas que não geram resultados',
    'Atendimento demorado e impessoal'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={`${service.title} em ${cityName} - PPlace | Especialistas Locais`}
        description={`${service.description} em ${cityName}. A PPlace é especialista em ${service.name.toLowerCase()} para empresas de ${cityName}. Orçamento grátis e resultados garantidos.`}
        keywords={`${service.name.toLowerCase()} ${cityName.toLowerCase()}, ${service.description.toLowerCase()} ${cityName.toLowerCase()}, pplace ${cityName.toLowerCase()}`}
        canonical={`https://pplace.com.br${url}`}
        city={cityName}
        service={service.name}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${service.title} em ${cityName}`,
          "description": `${service.description} em ${cityName}`,
          "provider": {
            "@type": "Organization",
            "name": "PPlace"
          },
          "areaServed": {
            "@type": "City",
            "name": cityName
          }
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.title} em {cityName}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              A PPlace é especialista em {service.description.toLowerCase()} para empresas de {cityName}. 
              Somos líderes em tecnologia e já transformamos centenas de negócios na região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-white text-purple-900 hover:bg-gray-100"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5517981679818&text=Oi%2C%20tudo%20bem%3F%20Gostaria%20de%20um%20orçamento%20para%20' + service.name + '%20em%20' + cityName, '_blank')}
              >
                Orçamento Gratuito para {cityName}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-900"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5517981679818&text=Oi%2C%20tudo%20bem%3F%20Gostaria%20de%20falar%20sobre%20' + service.name + '%20em%20' + cityName, '_blank')}
              >
                WhatsApp: (17) 98167-9818
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold text-yellow-400 mb-2">{service.price}</div>
                <p className="text-purple-100">A partir de</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold text-yellow-400 mb-2">7-15 dias</div>
                <p className="text-purple-100">Prazo de entrega</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold text-yellow-400 mb-2">12 meses</div>
                <p className="text-purple-100">Garantia inclusa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Informações do Serviço */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Por que escolher a PPlace para {service.title} em {cityName}?
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Especialistas Locais em {cityName}</h3>
                    <p className="text-gray-600">Conhecemos o mercado local e criamos soluções específicas para empresas de {cityName}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Resultados Comprovados</h3>
                    <p className="text-gray-600">Já ajudamos dezenas de empresas em {cityName} a multiplicarem suas vendas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Tecnologia de Ponta</h3>
                    <p className="text-gray-600">Utilizamos as mais modernas tecnologias do mercado, incluindo IA</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Atendimento Personalizado</h3>
                    <p className="text-gray-600">Suporte dedicado e atendimento rápido para empresas de {cityName}</p>
                  </div>
                </div>
              </div>

              {/* O que está incluso */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">
                    O que está incluso no seu {service.title}:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Formulário de Orçamento */}
            <div>
              <Card className="sticky top-8">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <CardTitle className="text-2xl">
                    Orçamento Gratuito para {cityName}
                  </CardTitle>
                  <p>Receba uma proposta personalizada em até 2 horas</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Seu nome completo"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Seu melhor e-mail"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="WhatsApp com DDD"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Nome da sua empresa"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder={`Conte-nos sobre seu projeto de ${service.name.toLowerCase()} em ${cityName}...`}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3">
                      Solicitar Orçamento Gratuito
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      ✅ Resposta em até 2 horas • ✅ Sem compromisso • ✅ Especialistas locais
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Diferenciais vs Concorrência */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            PPlace vs Concorrência em {cityName}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-red-200">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-600">❌ Concorrência</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {competitors.map((item, index) => (
                      <li key={index} className="flex items-center text-red-600">
                        <span className="mr-3">❌</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-600">✅ PPlace</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center text-green-600">
                      <span className="mr-3">✅</span>
                      Líderes em tecnologia e inovação
                    </li>
                    <li className="flex items-center text-green-600">
                      <span className="mr-3">✅</span>
                      Soluções 100% personalizadas
                    </li>
                    <li className="flex items-center text-green-600">
                      <span className="mr-3">✅</span>
                      Resultados reais e mensuráveis
                    </li>
                    <li className="flex items-center text-green-600">
                      <span className="mr-3">✅</span>
                      Suporte especializado 24/7
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para transformar seu negócio em {cityName}?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Junte-se às empresas de {cityName} que escolheram a PPlace e multiplicaram seus resultados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5517981679818&text=Oi%2C%20tudo%20bem%3F%20Gostaria%20de%20um%20orçamento%20para%20' + service.name + '%20em%20' + cityName, '_blank')}
            >
              Solicitar Orçamento para {cityName}
            </Button>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5517981679818&text=Oi%2C%20tudo%20bem%3F%20Gostaria%20de%20falar%20sobre%20' + service.name + '%20em%20' + cityName, '_blank')}
            >
              WhatsApp: (17) 98167-9818
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServiceCityPage;
