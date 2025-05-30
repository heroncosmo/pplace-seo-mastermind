
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
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
            <ul className="space-y-2">
              <li><Link to="/criacao-de-site-sao-paulo" className="text-gray-400 hover:text-purple-400 transition-colors">São Paulo</Link></li>
              <li><Link to="/criacao-de-site-rio-de-janeiro" className="text-gray-400 hover:text-purple-400 transition-colors">Rio de Janeiro</Link></li>
              <li><Link to="/criacao-de-site-belo-horizonte" className="text-gray-400 hover:text-purple-400 transition-colors">Belo Horizonte</Link></li>
              <li><Link to="/criacao-de-site-cosmorama" className="text-gray-400 hover:text-purple-400 transition-colors">Cosmorama</Link></li>
              <li><Link to="/mapa-cidades" className="text-purple-400 hover:text-purple-300 transition-colors">Ver todas →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 contato@pplace.com.br</li>
              <li>📱 (11) 99999-9999</li>
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
