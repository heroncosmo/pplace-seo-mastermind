
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCities } from '@/hooks/useContentGeneration';
import { cityToSlug } from '@/utils/cityUtils';

const CityMap = () => {
  const { data: cities, isLoading, error } = useCities();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="animate-pulse">
            <CardHeader className="bg-gray-200">
              <div className="h-6 bg-gray-300 rounded"></div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-2">
                {[...Array(6)].map((_, cityIndex) => (
                  <div key={cityIndex} className="h-4 bg-gray-200 rounded"></div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Erro ao carregar cidades. Tente novamente mais tarde.</p>
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(stateGroups).map(([stateName, stateCities]: [string, any]) => (
        <Card key={stateName} className="hover:shadow-lg transition-shadow">
          <CardHeader className="bg-purple-50">
            <CardTitle className="text-lg text-purple-800">{stateName}</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-2">
              {stateCities.slice(0, 10).map((city: any) => {
                const citySlug = cityToSlug(city.name);
                return (
                  <Link 
                    key={city.id}
                    to={`/criacao-de-site-${citySlug}`}
                    className="block text-sm text-gray-600 hover:text-purple-600 hover:underline transition-colors"
                  >
                    Criação de Site em {city.name}
                  </Link>
                );
              })}
              {stateCities.length > 10 && (
                <p className="text-xs text-gray-500 pt-2">
                  + {stateCities.length - 10} cidades
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CityMap;
