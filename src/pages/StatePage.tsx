
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const StatePage = () => {
  const { state } = useParams();
  const stateName = state?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || '';

  const stateData: Record<string, any> = {
    'sao-paulo': {
      name: 'São Paulo',
      capital: 'São Paulo',
      cities: [
        'São Paulo', 'Campinas', 'Santos', 'Ribeirão Preto', 'Cosmorama',
        'São José do Rio Preto', 'Sorocaba', 'Osasco', 'Santo André',
        'São Bernardo do Campo', 'Guarulhos', 'Bauru', 'Piracicaba',
        'Jundiaí', 'São José dos Campos', 'Diadema', 'Mauá', 'Carapicuíba'
      ],
      region: 'Sudeste',
      economy: 'Centro econômico do Brasil',
      population: '46 milhões de habitantes',
      projects: 400
    },
    'rio-de-janeiro': {
      name: 'Rio de Janeiro',
      capital: 'Rio de Janeiro',
      cities: [
        'Rio de Janeiro', 'Niterói', 'Duque de Caxias', 'Nova Iguaçu',
        'Belford Roxo', 'São Gonçalo', 'Campos dos Goytacazes', 'Petrópolis',
        'Volta Redonda', 'Magé', 'Itaboraí', 'Nova Friburgo'
      ],
      region: 'Sudeste',
      economy: 'Turismo, petróleo e tecnologia',
      population: '17 milhões de habitantes',
      projects: 180
    },
    'minas-gerais': {
      name: 'Minas Gerais',
      capital: 'Belo Horizonte',
      cities: [
        'Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora',
        'Betim', 'Montes Claros', 'Ribeirão das Neves', 'Uberaba',
        'Ipatinga', 'Sete Lagoas', 'Divinópolis', 'Santa Luzia'
      ],
      region: 'Sudeste',
      economy: 'Mineração, agronegócio e indústria',
      population: '21 milhões de habitantes',
      projects: 150
    }
  };

  const currentState = stateData[state || ''] || {
    name: stateName,
    capital: stateName,
    cities: [stateName],
    region: 'Brasil',
    economy: 'Diversos setores',
    population: 'Milhões de habitantes',
    projects: 50
  };

  const services = [
    {
      name: 'E-commerce',
      description: 'Lojas virtuais completas',
      price: 'R$ 2.999',
      projects: Math.floor(currentState.projects * 0.3)
    },
    {
      name: 'Landing Pages',
      description: 'Páginas de alta conversão',
      price: 'R$ 899',
      projects: Math.floor(currentState.projects * 0.25)
    },
    {
      name: 'LeadPilot',
      description: 'Sistema de IA para vendas',
      price: 'R$ 4.999',
      projects: Math.floor(currentState.projects * 0.2)
    },
    {
      name: 'Apps Mobile',
      description: 'Aplicativos nativos',
      price: 'R$ 8.999',
      projects: Math.floor(currentState.projects * 0.15)
    },
    {
      name: 'SEO Local',
      description: 'Otimização para Google',
      price: 'R$ 799/mês',
      projects: Math.floor(currentState.projects * 0.1)
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={`Criação de Sites em ${currentState.name} - PPlace | Especialistas Locais`}
        description={`Criação de sites, e-commerce, landing pages e sistemas com IA em ${currentState.name}. A PPlace atende todas as cidades de ${currentState.name} com tecnologia de ponta.`}
        keywords={`criacao sites ${currentState.name.toLowerCase()}, desenvolvimento web ${currentState.name.toLowerCase()}, ecommerce ${currentState.name.toLowerCase()}, pplace ${currentState.name.toLowerCase()}`}
        canonical={`https://pplace.com.br/criacao-de-site-estado-${state}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `Criação de Sites em ${currentState.name}`,
          "description": `Serviços de desenvolvimento web em ${currentState.name}`,
          "provider": {
            "@type": "Organization",
            "name": "PPlace"
          },
          "areaServed": {
            "@type": "State",
            "name": currentState.name
          }
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Criação de Sites em {currentState.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            A PPlace é líder em tecnologia em {currentState.name}. Já criamos mais de {currentState.projects} projetos 
            em {currentState.cities.length}+ cidades do estado, transformando negócios com tecnologia de ponta.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{currentState.projects}+</div>
              <p className="text-purple-100">Projetos em {currentState.name}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{currentState.cities.length}+</div>
              <p className="text-purple-100">Cidades Atendidas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">99%</div>
              <p className="text-purple-100">Satisfação</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <p className="text-purple-100">Suporte Online</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              Orçamento Gratuito para {currentState.name}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
              Ver Todas as Cidades
            </Button>
          </div>
        </div>
      </section>

      {/* Informações do Estado */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Por que a PPlace é Líder em {currentState.name}?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">📍 Região {currentState.region}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{currentState.economy}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">👥 {currentState.population}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Mercado com imenso potencial digital</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">🏛️ Capital: {currentState.capital}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Centro de inovação e tecnologia</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços por Estado */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Nossos Serviços em {currentState.name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-600">{service.name}</CardTitle>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{service.price}</div>
                  <p className="text-sm text-green-600 mb-4">{service.projects} projetos realizados</p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-sm">
                    Ver Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cidades do Estado */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Cidades Atendidas em {currentState.name}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {currentState.cities.map((city: string, index: number) => (
              <Link 
                key={index}
                to={`/criacao-de-site-${city.toLowerCase().replace(/\s+/g, '-').replace(/ç/g, 'c').replace(/ã/g, 'a').replace(/á/g, 'a').replace(/é/g, 'e').replace(/ê/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ô/g, 'o').replace(/ú/g, 'u')}`}
                className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:bg-purple-50 border-2 hover:border-purple-200"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">🌐</div>
                  <h3 className="font-semibold text-gray-900 text-sm">{city}</h3>
                  <p className="text-xs text-gray-500 mt-1">Criação de Sites</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Não encontrou sua cidade? Atendemos TODAS as cidades de {currentState.name}!
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Solicitar Atendimento na Sua Cidade
            </Button>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso no Estado */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Cases de Sucesso em {currentState.name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                company: `Empresa A - ${currentState.capital}`,
                result: 'Aumento de 400% nas vendas',
                description: 'E-commerce revolucionou as vendas online'
              },
              {
                company: `Empresa B - ${currentState.cities[1] || currentState.capital}`,
                result: 'Conversão de 35% em leads',
                description: 'Landing page otimizada com LeadPilot'
              },
              {
                company: `Empresa C - ${currentState.cities[2] || currentState.capital}`,
                result: 'Economia de 80% em atendimento',
                description: 'Sistema com IA automatizou processos'
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-600">{testimonial.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-2">{testimonial.result}</div>
                  <p className="text-gray-600">{testimonial.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para dominar o mercado digital de {currentState.name}?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Junte-se às {currentState.projects}+ empresas que escolheram a PPlace em {currentState.name}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Orçamento Gratuito para {currentState.name}
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              WhatsApp: (11) 99999-9999
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default StatePage;
