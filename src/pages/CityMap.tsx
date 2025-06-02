
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCities } from '@/hooks/useContentGeneration';
import { cityToSlug } from '@/utils/cityUtils';

const CityMapPage = () => {
  const { data: cities, isLoading, error } = useCities();

  if (isLoading) {
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
                Carregando cidades...
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <Card key={index} className="animate-pulse">
                  <CardHeader className="bg-gray-200">
                    <div className="h-6 bg-gray-300 rounded"></div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      {[...Array(6)].map((_, cityIndex) => (
                        <div key={cityIndex} className="h-4 bg-gray-200 rounded"></div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Erro ao Carregar Cidades
            </h1>
            <p className="text-xl text-red-600">
              Não foi possível carregar as cidades. Tente novamente mais tarde.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Agrupar cidades por estado
  const stateGroups = cities?.reduce((acc: any, city: any) => {
    const stateName = city.states?.name;
    if (!stateName) return acc;
    
    if (!acc[stateName]) {
      acc[stateName] = [];
    }
    acc[stateName].push(city);
    return acc;
  }, {}) || {};

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
            {Object.entries(stateGroups).map(([stateName, stateCities]: [string, any]) => (
              <Card key={stateName} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  <CardTitle className="text-xl">{stateName}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    {stateCities.map((city: any) => (
                      <div key={city.id}>
                        <Link 
                          to={`/criacao-de-site-${cityToSlug(city.name)}`}
                          className="block text-sm text-gray-600 hover:text-purple-600 hover:underline transition-colors py-1"
                        >
                          🌐 Criação de Site em {city.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-sm">
                      Ver Todos os Serviços em {stateName}
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
