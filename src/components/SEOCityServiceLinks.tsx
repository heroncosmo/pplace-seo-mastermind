
import React from 'react';
import { Link } from 'react-router-dom';
import { useCities, useServices } from '@/hooks/useContentGeneration';
import { cityToSlug } from '@/utils/cityUtils';

const SEOCityServiceLinks = () => {
  const { data: cities } = useCities();
  const { data: services } = useServices();

  const serviceRoutes = [
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Landing Page', slug: 'landing-page' },
    { name: 'LeadPilot', slug: 'leadpilot' },
    { name: 'SEO', slug: 'seo' },
    { name: 'Aplicativo Mobile', slug: 'aplicativo' },
    { name: 'Sistema com IA', slug: 'sistema-ia' },
    { name: 'Sites Institucionais', slug: 'sites-institucionais' },
    { name: 'Automação RPA', slug: 'automacao-rpa' },
    { name: 'Chatbots com IA', slug: 'chatbots-ia' },
    { name: 'Business Intelligence', slug: 'business-intelligence' },
    { name: 'Marketing Digital', slug: 'marketing-digital' },
    { name: 'Marketplace', slug: 'marketplace' },
    { name: 'Consultoria em TI', slug: 'consultoria-ti' },
    { name: 'Integração de Sistemas', slug: 'integracao-sistemas' },
    { name: 'Segurança Digital', slug: 'seguranca-digital' }
  ];

  if (!cities || !cities.length) {
    return null;
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Nossos Serviços em Todas as Cidades do Brasil
        </h2>
        
        {/* Grid de estados com suas cidades e serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(
            cities.reduce((acc: any, city: any) => {
              const stateName = city.states?.name;
              if (!stateName) return acc;
              
              if (!acc[stateName]) {
                acc[stateName] = [];
              }
              acc[stateName].push(city);
              return acc;
            }, {})
          ).map(([stateName, stateCities]: [string, any]) => (
            <div key={stateName} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-purple-600 mb-4">{stateName}</h3>
              
              {stateCities.slice(0, 8).map((city: any) => {
                const citySlug = cityToSlug(city.name);
                return (
                  <div key={city.id} className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{city.name}</h4>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      {/* Link principal da cidade */}
                      <Link 
                        to={`/criacao-de-site-${citySlug}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        Sites em {city.name}
                      </Link>
                      
                      {/* Links dos principais serviços */}
                      {serviceRoutes.slice(0, 7).map((service) => (
                        <Link 
                          key={service.slug}
                          to={`/${service.slug}-${citySlug}`}
                          className="text-gray-600 hover:text-purple-600 hover:underline"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
              
              {stateCities.length > 8 && (
                <p className="text-xs text-gray-500 mt-2">
                  + {stateCities.length - 8} cidades
                </p>
              )}
            </div>
          ))}
        </div>
        
        {/* Seção com todos os links para SEO */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Todos os Nossos Serviços por Cidade
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
            {cities.map((city: any) => {
              const citySlug = cityToSlug(city.name);
              return (
                <div key={city.id} className="space-y-1">
                  {serviceRoutes.map((service) => (
                    <Link 
                      key={`${service.slug}-${city.id}`}
                      to={`/${service.slug}-${citySlug}`}
                      className="block text-gray-500 hover:text-purple-600 hover:underline"
                    >
                      {service.name} {city.name}
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOCityServiceLinks;
