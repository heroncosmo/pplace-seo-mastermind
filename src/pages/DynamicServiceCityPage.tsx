
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCities, useServices } from '@/hooks/useContentGeneration';
import { cityToSlug } from '@/utils/cityUtils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DynamicPageHero from '@/components/dynamic/DynamicPageHero';
import DynamicPageContent from '@/components/dynamic/DynamicPageContent';
import DynamicPageServices from '@/components/dynamic/DynamicPageServices';
import DynamicPageCTA from '@/components/dynamic/DynamicPageCTA';
import SEO from '@/components/SEO';

const DynamicServiceCityPage = () => {
  const { 0: routeParam } = useParams<{ 0: string }>();
  const { data: cities, isLoading: citiesLoading } = useCities();
  const { data: services, isLoading: servicesLoading } = useServices();

  console.log('=== DYNAMIC PAGE DEBUG ===');
  console.log('Route param:', routeParam);
  console.log('Current URL:', window.location.pathname);

  if (!routeParam) {
    console.error('❌ Nenhum parâmetro de rota encontrado');
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Erro: Parâmetro inválido</h1>
          <p className="text-gray-600">URL: {window.location.pathname}</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Mapear todos os tipos de serviços possíveis
  const serviceMap: Record<string, any> = {
    'ecommerce': {
      name: 'E-commerce',
      slug: 'ecommerce',
      description: 'Lojas virtuais completas',
      category: 'Desenvolvimento Web'
    },
    'landing-page': {
      name: 'Landing Page',
      slug: 'landing-page',
      description: 'Páginas de alta conversão',
      category: 'Marketing Digital'
    },
    'leadpilot': {
      name: 'LeadPilot',
      slug: 'leadpilot',
      description: 'Sistema inteligente de vendas',
      category: 'Inteligência Artificial'
    },
    'seo': {
      name: 'SEO',
      slug: 'seo',
      description: 'Otimização para motores de busca',
      category: 'Marketing Digital'
    },
    'aplicativo': {
      name: 'Aplicativo Mobile',
      slug: 'aplicativo',
      description: 'Apps para iOS e Android',
      category: 'Desenvolvimento Mobile'
    },
    'sistema-ia': {
      name: 'Sistema com IA',
      slug: 'sistema-ia',
      description: 'Sistemas inteligentes personalizados',
      category: 'Inteligência Artificial'
    },
    'sites-institucionais': {
      name: 'Sites Institucionais',
      slug: 'sites-institucionais',
      description: 'Sites corporativos profissionais',
      category: 'Desenvolvimento Web'
    },
    'automacao-rpa': {
      name: 'Automação RPA',
      slug: 'automacao-rpa',
      description: 'Automação de processos',
      category: 'Automação'
    },
    'chatbots-ia': {
      name: 'Chatbots com IA',
      slug: 'chatbots-ia',
      description: 'Assistentes virtuais inteligentes',
      category: 'Inteligência Artificial'
    },
    'business-intelligence': {
      name: 'Business Intelligence',
      slug: 'business-intelligence',
      description: 'Análise de dados e relatórios',
      category: 'Análise de Dados'
    },
    'marketing-digital': {
      name: 'Marketing Digital',
      slug: 'marketing-digital',
      description: 'Estratégias digitais completas',
      category: 'Marketing Digital'
    },
    'marketplace': {
      name: 'Marketplace',
      slug: 'marketplace',
      description: 'Plataformas de vendas online',
      category: 'E-commerce'
    },
    'consultoria-ti': {
      name: 'Consultoria em TI',
      slug: 'consultoria-ti',
      description: 'Consultoria tecnológica especializada',
      category: 'Consultoria'
    },
    'integracao-sistemas': {
      name: 'Integração de Sistemas',
      slug: 'integracao-sistemas',
      description: 'Integração e conectividade',
      category: 'Desenvolvimento'
    },
    'seguranca-digital': {
      name: 'Segurança Digital',
      slug: 'seguranca-digital',
      description: 'Proteção e segurança online',
      category: 'Segurança'
    },
    'criacao-de-site': {
      name: 'Criação de Sites',
      slug: 'criacao-de-site',
      description: 'Sites profissionais completos',
      category: 'Desenvolvimento Web'
    }
  };

  // Extrair serviço e cidade da URL
  const parts = routeParam.split('-');
  console.log('Parts da URL:', parts);

  let serviceSlug = '';
  let citySlug = '';

  // Lógica para identificar serviço e cidade
  if (parts.length >= 2) {
    if (parts[0] === 'criacao' && parts[1] === 'de' && parts[2] === 'site') {
      // Caso especial: criacao-de-site-cidade
      serviceSlug = 'criacao-de-site';
      citySlug = parts.slice(3).join('-');
    } else if (parts.length === 2) {
      // Caso simples: servico-cidade
      serviceSlug = parts[0];
      citySlug = parts[1];
    } else {
      // Casos com hífens no nome do serviço
      const possibleServices = Object.keys(serviceMap);
      for (const service of possibleServices) {
        if (routeParam.startsWith(service + '-')) {
          serviceSlug = service;
          citySlug = routeParam.substring(service.length + 1);
          break;
        }
      }
    }
  }

  console.log('Service slug extraído:', serviceSlug);
  console.log('City slug extraído:', citySlug);

  if (citiesLoading || servicesLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  // Buscar serviço
  const service = serviceMap[serviceSlug] || services?.find(s => s.slug === serviceSlug);
  
  if (!service) {
    console.error('❌ Serviço não encontrado:', serviceSlug);
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Serviço não encontrado</h1>
          <p className="text-gray-600">Serviço: {serviceSlug}</p>
          <p className="text-gray-600">URL: {window.location.pathname}</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Buscar cidade
  const city = cities?.find(c => cityToSlug(c.name) === citySlug);
  
  if (!city) {
    console.error('❌ Cidade não encontrada:', citySlug);
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Cidade não encontrada</h1>
          <p className="text-gray-600">Cidade: {citySlug}</p>
          <p className="text-gray-600">URL: {window.location.pathname}</p>
        </div>
        <Footer />
      </div>
    );
  }

  console.log('✅ Página dinâmica carregada com sucesso');
  console.log('Serviço:', service.name);
  console.log('Cidade:', city.name);

  const pageTitle = `${service.name} em ${city.name} - PPlace`;
  const pageDescription = `${service.description} em ${city.name}. Tecnologia de ponta com a PPlace.`;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords={`${service.name}, ${city.name}, tecnologia, desenvolvimento`}
        canonical={`https://pplace.com.br/${serviceSlug}-${citySlug}`}
      />
      
      <Header />
      <DynamicPageHero service={service} city={city} />
      <DynamicPageContent service={service} city={city} />
      <DynamicPageServices service={service} city={city} />
      <DynamicPageCTA service={service} city={city} />
      <Footer />
    </div>
  );
};

export default DynamicServiceCityPage;
