
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-2xl font-bold text-white">PPlace</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/servicos" className="text-gray-300 hover:text-purple-400 transition-colors">
              Serviços
            </Link>
            <Link to="/mapa-cidades" className="text-gray-300 hover:text-purple-400 transition-colors">
              Cidades
            </Link>
            <Link to="/sobre" className="text-gray-300 hover:text-purple-400 transition-colors">
              Sobre
            </Link>
            <Link to="/contato" className="text-gray-300 hover:text-purple-400 transition-colors">
              Contato
            </Link>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Orçamento Grátis
            </Button>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <ArrowUp className="h-6 w-6" /> : <ArrowDown className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <nav className="flex flex-col space-y-4">
              <Link to="/servicos" className="text-gray-300 hover:text-purple-400 transition-colors">
                Serviços
              </Link>
              <Link to="/mapa-cidades" className="text-gray-300 hover:text-purple-400 transition-colors">
                Cidades
              </Link>
              <Link to="/sobre" className="text-gray-300 hover:text-purple-400 transition-colors">
                Sobre
              </Link>
              <Link to="/contato" className="text-gray-300 hover:text-purple-400 transition-colors">
                Contato
              </Link>
              <Button className="bg-purple-600 hover:bg-purple-700 w-fit">
                Orçamento Grátis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
