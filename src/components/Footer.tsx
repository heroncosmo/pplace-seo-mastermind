
import React from 'react';
import { Link } from 'react-router-dom';
import { useCities } from '@/hooks/useContentGeneration';

const Footer = () => {
  const { data: cities } = useCities();

  // Função para converter nome da cidade em slug
  const cityToSlug = (cityName: string) => {
    return cityName
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/[^a-z0-9-]/g, ''); // Remove caracteres especiais
  };

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

  // Pegar principais cidades para exibir na última coluna
  const allCities = cities?.slice(0, 50) || [];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <li><Link to="/ecommerce-sao-paulo" className="text-gray-400 hover:text-purple-400 transition-colors">E-commerce</Link></li>
              <li><Link to="/landing-page-sao-paulo" className="text-gray-400 hover:text-purple-400 transition-colors">Landing Pages</Link></li>
              <li><Link to="/leadpilot-sao-paulo" className="text-gray-400 hover:text-purple-400 transition-colors">LeadPilot</Link></li>
              <li><Link to="/aplicativo-sao-paulo" className="text-gray-400 hover:text-purple-400 transition-colors">Aplicativos</Link></li>
              <li><Link to="/sistema-ia-sao-paulo" className="text-gray-400 hover:text-purple-400 transition-colors">Sistemas IA</Link></li>
              <li><Link to="/seo-sao-paulo" className="text-gray-400 hover:text-purple-400 transition-colors">SEO</Link></li>
              <li><Link to="/business-intelligence-sao-paulo" className="text-gray-400 hover:text-purple-400 transition-colors">Business Intelligence</Link></li>
              <li><Link to="/marketing-digital-sao-paulo" className="text-gray-400 hover:text-purple-400 transition-colors">Marketing Digital</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Principais Cidades</h3>
            <div className="space-y-1 max-h-48 overflow-y-auto">
              {Object.entries(stateGroups).slice(0, 6).map(([stateName, stateCities]: [string, any]) => (
                <div key={stateName} className="mb-3">
                  <h4 className="text-sm font-semibold text-purple-300 mb-1">{stateName}</h4>
                  {stateCities.slice(0, 6).map((city: any) => {
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
            <h3 className="text-lg font-semibold mb-4">Todas as Cidades</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {allCities.map((city: any) => {
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
