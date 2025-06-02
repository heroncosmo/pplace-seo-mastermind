import React from 'react';
import { Link } from 'react-router-dom';
import { useCities } from '@/hooks/useContentGeneration';
import { cityToSlug } from '@/utils/cityUtils';
import SEOSitemap from './SEOSitemap';

const Footer = () => {
  const { data: cities } = useCities();

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

  // Principais cidades para destaque
  const mainCities = cities?.slice(0, 100) || [];

  // Serviços principais
  const mainServices = [
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Landing Pages', slug: 'landing-page' },
    { name: 'LeadPilot', slug: 'leadpilot' },
    { name: 'Aplicativos', slug: 'aplicativo' },
    { name: 'Sistemas IA', slug: 'sistema-ia' },
    { name: 'SEO', slug: 'seo' },
    { name: 'Business Intelligence', slug: 'business-intelligence' },
    { name: 'Marketing Digital', slug: 'marketing-digital' }
  ];

  return (
    <>
      {/* Sitemap completo para SEO */}
      <SEOSitemap />
      
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-2xl font-bold">PPlace</span>
              </div>
              <p className="text-gray-400 mb-4">
                Tecnologia e IA para transformar seu negócio em qualquer cidade do Brasil.
              </p>
              <div className="space-y-2 text-gray-400">
                <p>
                  <a 
                    href="mailto:contato@lojapplace.com" 
                    className="hover:text-purple-400 transition-colors"
                  >
                    📧 contato@lojapplace.com
                  </a>
                </p>
                <p>
                  <a 
                    href="https://api.whatsapp.com/send?phone=5517981679818&text=Oi%2C%20tudo%20bem%3F%20Preciso%20de%20ajuda%20com%20os%20serviços%20da%20PPlace." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    📱 (17) 98167-9818
                  </a>
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                © 2024 PPlace. Todos os direitos reservados.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                {mainServices.map((service) => (
                  <li key={service.slug}>
                    <Link 
                      to={`/${service.slug}-sao-paulo`} 
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Principais Estados</h3>
              <div className="space-y-1 max-h-48 overflow-y-auto">
                {Object.entries(stateGroups).slice(0, 8).map(([stateName, stateCities]: [string, any]) => (
                  <div key={stateName} className="mb-3">
                    <h4 className="text-sm font-semibold text-purple-300 mb-1">{stateName}</h4>
                    {stateCities.slice(0, 4).map((city: any) => {
                      const citySlug = cityToSlug(city.name);
                      return (
                        <Link 
                          key={city.id}
                          to={`/criacao-de-site-${citySlug}`}
                          className="block text-xs text-gray-400 hover:text-purple-400 transition-colors py-0.5"
                        >
                          {city.name}
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
              <Link to="/mapa-cidades" className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold">
                Ver todas as cidades →
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Cidades Populares</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {mainCities.slice(0, 20).map((city: any) => {
                  const citySlug = cityToSlug(city.name);
                  return (
                    <Link 
                      key={city.id}
                      to={`/criacao-de-site-${citySlug}`}
                      className="block text-xs text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      Sites em {city.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">SEO - Todas Cidades</h3>
              <div className="space-y-1 max-h-48 overflow-y-auto">
                {mainCities.slice(0, 30).map((city: any) => {
                  const citySlug = cityToSlug(city.name);
                  return (
                    <div key={city.id} className="space-y-1">
                      <Link 
                        to={`/ecommerce-${citySlug}`}
                        className="block text-xs text-gray-500 hover:text-purple-400 transition-colors"
                      >
                        E-commerce {city.name}
                      </Link>
                      <Link 
                        to={`/seo-${citySlug}`}
                        className="block text-xs text-gray-500 hover:text-purple-400 transition-colors"
                      >
                        SEO {city.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
