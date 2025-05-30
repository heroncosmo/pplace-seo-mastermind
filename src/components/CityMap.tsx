
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CityMap = () => {
  const states = [
    { name: "São Paulo", cities: ["São Paulo", "Campinas", "Santos", "Ribeirão Preto", "Cosmorama", "São José do Rio Preto"] },
    { name: "Rio de Janeiro", cities: ["Rio de Janeiro", "Niterói", "Duque de Caxias", "Nova Iguaçu"] },
    { name: "Minas Gerais", cities: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora"] },
    { name: "Rio Grande do Sul", cities: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Santa Maria"] },
    { name: "Paraná", cities: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa"] },
    { name: "Bahia", cities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari"] }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {states.map((state, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="bg-purple-50">
            <CardTitle className="text-lg text-purple-800">{state.name}</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-2">
              {state.cities.map((city, cityIndex) => (
                <Link 
                  key={cityIndex}
                  to={`/criacao-de-site-${city.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-sm text-gray-600 hover:text-purple-600 hover:underline transition-colors"
                >
                  Criação de Site em {city}
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CityMap;
