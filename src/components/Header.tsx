
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5517981679818&text=Oi%2C%20tudo%20bem%3F%20Gostaria%20de%20falar%20com%20a%20PPlace%20sobre%20os%20serviços.";

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-purple-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-center items-center text-sm">
          <div className="flex items-center gap-6">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
            >
              <Phone className="h-4 w-4" />
              (17) 98167-9818
            </a>
            <a 
              href="mailto:contato@lojapplace.com"
              className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
            >
              <Mail className="h-4 w-4" />
              contato@lojapplace.com
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">PPlace</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">
              Início
            </Link>
            <Link to="/servicos" className="text-gray-600 hover:text-purple-600 transition-colors">
              Serviços
            </Link>
            <Link to="/leadpilot" className="text-gray-600 hover:text-purple-600 transition-colors">
              LeadPilot
            </Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-purple-600 transition-colors">
              Portfólio
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
              Blog
            </Link>
            <Link to="/contato" className="text-gray-600 hover:text-purple-600 transition-colors">
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Orçamento Grátis
            </Button>
            <Button 
              size="sm" 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/servicos" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/leadpilot" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                LeadPilot
              </Link>
              <Link 
                to="/portfolio" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfólio
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contato" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    window.open(whatsappUrl, '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  Orçamento Grátis
                </Button>
                <Button 
                  size="sm" 
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => {
                    window.open(whatsappUrl, '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
