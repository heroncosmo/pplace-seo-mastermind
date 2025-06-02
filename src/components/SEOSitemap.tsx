
import React from 'react';
import { Link } from 'react-router-dom';
import { useCities } from '@/hooks/useContentGeneration';
import { cityToSlug } from '@/utils/cityUtils';

const SEOSitemap = () => {
  const { data: cities } = useCities();

  const allServices = [
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
    <div className="bg-gray-100 py-8 border-t">
      <div className="container mx-auto px-4">
        <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
          Mapa do Site - Todos os Serviços por Cidade
        </h3>
        
        <div className="text-xs text-gray-600 leading-relaxed">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cities.map((city: any) => {
              const citySlug = cityToSlug(city.name);
              return (
                <div key={city.id} className="space-y-1">
                  <h4 className="font-semibold text-gray-700 mb-2">{city.name}</h4>
                  
                  {/* Link principal da cidade */}
                  <Link 
                    to={`/criacao-de-site-${citySlug}`}
                    className="block hover:text-purple-600"
                  >
                    Sites {city.name}
                  </Link>
                  
                  {/* Links de todos os serviços */}
                  {allServices.map((service) => (
                    <Link 
                      key={`${service.slug}-${city.id}`}
                      to={`/${service.slug}-${citySlug}`}
                      className="block hover:text-purple-600"
                    >
                      {service.name} {city.name}
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            A PPlace atende todas as cidades do Brasil com serviços completos de tecnologia e desenvolvimento web.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SEOSitemap;
