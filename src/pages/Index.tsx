
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CityMap from '@/components/CityMap';
import SEOCityServiceLinks from '@/components/SEOCityServiceLinks';

const Index = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5517981679818&text=Oi%2C%20tudo%20bem%3F%20Gostaria%20de%20um%20orçamento%20para%20criação%20de%20site%20com%20a%20PPlace.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <Services />
      
      {/* Seção de Localizações */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Atendemos Todo o Brasil
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Criação de sites, e-commerce e sistemas em todas as cidades brasileiras
            </p>
            <Link to="/mapa-cidades">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Ver Todas as Cidades <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <CityMap />
        </div>
      </section>

      {/* Links SEO para todas as combinações */}
      <SEOCityServiceLinks />

      <Testimonials />
      
      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto para Revolucionar seu Negócio?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Junte-se a milhares de empresas que confiam na PPlace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-purple-600 border-white bg-white hover:bg-gray-100"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Solicitar Orçamento
            </Button>
            <Button 
              size="lg" 
              className="bg-purple-800 hover:bg-purple-900"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
