
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const brazilCities = {
    "São Paulo": [
      "São Paulo", "Campinas", "Santos", "Ribeirão Preto", "Cosmorama", 
      "São José do Rio Preto", "Sorocaba", "Osasco", "Santo André", 
      "São Bernardo do Campo", "Guarulhos", "Bauru", "Piracicaba",
      "Jundiaí", "Diadema", "Mauá", "Carapicuíba", "Itaquaquecetuba"
    ],
    "Rio de Janeiro": [
      "Rio de Janeiro", "Niterói", "Duque de Caxias", "Nova Iguaçu",
      "Belford Roxo", "São Gonçalo", "Campos dos Goytacazes", "Petrópolis",
      "Volta Redonda", "Magé", "Itaboraí", "Macaé", "Cabo Frio"
    ],
    "Minas Gerais": [
      "Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora",
      "Betim", "Montes Claros", "Ribeirão das Neves", "Uberaba",
      "Governador Valadares", "Ipatinga", "Sete Lagoas", "Divinópolis"
    ],
    "Paraná": [
      "Curitiba", "Londrina", "Maringá", "Ponta Grossa",
      "Cascavel", "São José dos Pinhais", "Foz do Iguaçu", "Colombo",
      "Guarapuava", "Paranaguá", "Araucária", "Toledo"
    ],
    "Rio Grande do Sul": [
      "Porto Alegre", "Caxias do Sul", "Pelotas", "Santa Maria",
      "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo",
      "Rio Grande", "Alvorada", "Passo Fundo", "Sapucaia do Sul"
    ],
    "Bahia": [
      "Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari",
      "Juazeiro", "Ilhéus", "Itabuna", "Lauro de Freitas",
      "Jequié", "Alagoinhas", "Paulo Afonso", "Simões Filho"
    ],
    "Santa Catarina": [
      "Florianópolis", "Joinville", "Blumenau", "São José",
      "Criciúma", "Chapecó", "Itajaí", "Lages",
      "Palhoça", "Balneário Camboriú", "Brusque", "Tubarão"
    ],
    "Goiás": [
      "Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde",
      "Luziânia", "Águas Lindas de Goiás", "Valparaíso de Goiás",
      "Trindade", "Formosa", "Novo Gama", "Itumbiara", "Senador Canedo"
    ]
  };

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
            <p className="text-sm text-gray-500">
              © 2024 PPlace. Todos os direitos reservados.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><Link to="/servicos/ecommerce" className="text-gray-400 hover:text-purple-400 transition-colors">E-commerce</Link></li>
              <li><Link to="/servicos/landing-pages" className="text-gray-400 hover:text-purple-400 transition-colors">Landing Pages</Link></li>
              <li><Link to="/servicos/leadpilot" className="text-gray-400 hover:text-purple-400 transition-colors">LeadPilot</Link></li>
              <li><Link to="/servicos/aplicativos" className="text-gray-400 hover:text-purple-400 transition-colors">Aplicativos</Link></li>
              <li><Link to="/servicos/sistemas-ia" className="text-gray-400 hover:text-purple-400 transition-colors">Sistemas IA</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Principais Cidades</h3>
            <div className="space-y-1 max-h-48 overflow-y-auto">
              {Object.entries(brazilCities).map(([state, cities]) => (
                <div key={state} className="mb-3">
                  <h4 className="text-sm font-semibold text-purple-300 mb-1">{state}</h4>
                  {cities.slice(0, 4).map((city) => (
                    <Link 
                      key={city}
                      to={`/criacao-de-site-${city.toLowerCase().replace(/\s+/g, '-').replace(/[áàâãä]/g, 'a').replace(/[éèêë]/g, 'e').replace(/[íìîï]/g, 'i').replace(/[óòôõö]/g, 'o').replace(/[úùûü]/g, 'u').replace(/ç/g, 'c')}`}
                      className="block text-xs text-gray-400 hover:text-purple-400 transition-colors py-0.5"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <Link to="/mapa-cidades" className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold">
              Ver todas as cidades →
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:contato@lojapplace.com" className="hover:text-purple-400 transition-colors">
                  📧 contato@lojapplace.com
                </a>
              </li>
              <li>
                <a 
                  href="https://api.whatsapp.com/send?phone=5517981679818&text=Oi%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20PPlace%20para%20minha%20empresa." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  📱 (17) 98167-9818
                </a>
              </li>
              <li>🌐 Todo o Brasil</li>
              <li>⏰ 24/7 Suporte Online</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
