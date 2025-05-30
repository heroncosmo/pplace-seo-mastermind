
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CityMapPage = () => {
  const brazilStates = [
    {
      name: "São Paulo",
      cities: [
        "São Paulo", "Campinas", "Santos", "Ribeirão Preto", "Cosmorama", 
        "São José do Rio Preto", "Sorocaba", "Osasco", "Santo André", 
        "São Bernardo do Campo", "Guarulhos", "Bauru", "Piracicaba"
      ]
    },
    {
      name: "Rio de Janeiro",
      cities: [
        "Rio de Janeiro", "Niterói", "Duque de Caxias", "Nova Iguaçu",
        "Belford Roxo", "São Gonçalo", "Campos dos Goytacazes", "Petrópolis"
      ]
    },
    {
      name: "Minas Gerais",
      cities: [
        "Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora",
        "Betim", "Montes Claros", "Ribeirão das Neves", "Uberaba"
      ]
    },
    {
      name: "Rio Grande do Sul",
      cities: [
        "Porto Alegre", "Caxias do Sul", "Pelotas", "Santa Maria",
        "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo"
      ]
    },
    {
      name: "Paraná",
      cities: [
        "Curitiba", "Londrina", "Maringá", "Ponta Grossa",
        "Cascavel", "São José dos Pinhais", "Foz do Iguaçu", "Colombo"
      ]
    },
    {
      name: "Bahia",
      cities: [
        "Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari",
        "Juazeiro", "Ilhéus", "Itabuna", "Lauro de Freitas"
      ]
    },
    {
      name: "Santa Catarina",
      cities: [
        "Florianópolis", "Joinville", "Blumenau", "São José",
        "Criciúma", "Chapecó", "Itajaí", "Lages"
      ]
    },
    {
      name: "Goiás",
      cities: [
        "Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde",
        "Luziânia", "Águas Lindas de Goiás", "Valparaíso de Goiás"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Criação de Sites em Todo o Brasil
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvemos sites, e-commerce e sistemas com IA para empresas em todas as cidades brasileiras. 
              Encontre sua cidade e descubra nossos serviços localizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brazilStates.map((state, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  <CardTitle className="text-xl">{state.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    {state.cities.map((city, cityIndex) => (
                      <div key={cityIndex}>
                        <Link 
                          to={`/criacao-de-site-${city.toLowerCase().replace(/\s+/g, '-').replace(/ç/g, 'c').replace(/ã/g, 'a').replace(/á/g, 'a').replace(/é/g, 'e').replace(/ê/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ô/g, 'o').replace(/ú/g, 'u')}`}
                          className="block text-sm text-gray-600 hover:text-purple-600 hover:underline transition-colors py-1"
                        >
                          🌐 Criação de Site em {city}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-sm">
                      Ver Todos os Serviços em {state.name}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-purple-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Não encontrou sua cidade?
              </h2>
              <p className="text-gray-600 mb-6">
                Atendemos todas as cidades do Brasil! Entre em contato conosco e criaremos 
                uma página personalizada para sua região.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Solicitar Atendimento na Sua Cidade
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CityMapPage;
