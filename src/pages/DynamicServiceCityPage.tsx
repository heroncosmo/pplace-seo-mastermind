
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import DynamicPageHero from '@/components/dynamic/DynamicPageHero';
import DynamicPageContent from '@/components/dynamic/DynamicPageContent';
import DynamicPageServices from '@/components/dynamic/DynamicPageServices';
import DynamicPageCTA from '@/components/dynamic/DynamicPageCTA';
import { slugToCity } from '@/utils/cityUtils';

const DynamicServiceCityPage = () => {
  const params = useParams();
  const location = useLocation();
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Mapeamento completo de serviços
  const serviceMap = {
    'ecommerce': { name: 'E-commerce', price: 2999, description: 'Lojas virtuais profissionais que vendem 24/7' },
    'landing-page': { name: 'Landing Page', price: 899, description: 'Páginas de conversão de alta performance' },
    'leadpilot': { name: 'LeadPilot', price: 4999, description: 'Sistema de IA que multiplica suas vendas' },
    'seo': { name: 'SEO', price: 799, description: 'Otimização para aparecer no Google' },
    'aplicativo': { name: 'Aplicativo Mobile', price: 8999, description: 'Apps nativos para Android e iOS' },
    'sistema-ia': { name: 'Sistema com IA', price: 12999, description: 'Soluções personalizadas com inteligência artificial' },
    'sites-institucionais': { name: 'Sites Institucionais', price: 1499, description: 'Sites profissionais para sua empresa' },
    'automacao-rpa': { name: 'Automação RPA', price: 7999, description: 'Automatização de processos empresariais' },
    'chatbots-ia': { name: 'Chatbots com IA', price: 3999, description: 'Atendimento automatizado inteligente' },
    'business-intelligence': { name: 'Business Intelligence', price: 9999, description: 'Análise de dados para decisões estratégicas' },
    'marketing-digital': { name: 'Marketing Digital', price: 1999, description: 'Estratégias digitais para crescimento' },
    'marketplace': { name: 'Marketplace', price: 15999, description: 'Plataformas de vendas online' },
    'consultoria-ti': { name: 'Consultoria em TI', price: 2999, description: 'Consultoria especializada em tecnologia' },
    'integracao-sistemas': { name: 'Integração de Sistemas', price: 5999, description: 'Conecte todos os seus sistemas' },
    'seguranca-digital': { name: 'Segurança Digital', price: 3499, description: 'Proteção completa para seu negócio digital' }
  };

  useEffect(() => {
    loadPageData();
  }, [location.pathname, params]);

  const loadPageData = async () => {
    try {
      console.log('=== DEBUG DINÂMICO INÍCIO ===');
      console.log('URL atual:', location.pathname);
      console.log('Params recebidos:', params);
      
      // Obter o parâmetro city diretamente do useParams
      const cityParam = params.city;
      console.log('City param:', cityParam);
      
      if (!cityParam) {
        console.error('Parâmetro city não encontrado');
        setLoading(false);
        return;
      }

      // Determinar o serviço baseado na rota atual
      let serviceSlug = '';
      const pathname = location.pathname;
      
      if (pathname.includes('/ecommerce-')) {
        serviceSlug = 'ecommerce';
      } else if (pathname.includes('/landing-page-')) {
        serviceSlug = 'landing-page';
      } else if (pathname.includes('/leadpilot-')) {
        serviceSlug = 'leadpilot';
      } else if (pathname.includes('/seo-')) {
        serviceSlug = 'seo';
      } else if (pathname.includes('/aplicativo-')) {
        serviceSlug = 'aplicativo';
      } else if (pathname.includes('/sistema-ia-')) {
        serviceSlug = 'sistema-ia';
      } else if (pathname.includes('/sites-institucionais-')) {
        serviceSlug = 'sites-institucionais';
      } else if (pathname.includes('/automacao-rpa-')) {
        serviceSlug = 'automacao-rpa';
      } else if (pathname.includes('/chatbots-ia-')) {
        serviceSlug = 'chatbots-ia';
      } else if (pathname.includes('/business-intelligence-')) {
        serviceSlug = 'business-intelligence';
      } else if (pathname.includes('/marketing-digital-')) {
        serviceSlug = 'marketing-digital';
      } else if (pathname.includes('/marketplace-')) {
        serviceSlug = 'marketplace';
      } else if (pathname.includes('/consultoria-ti-')) {
        serviceSlug = 'consultoria-ti';
      } else if (pathname.includes('/integracao-sistemas-')) {
        serviceSlug = 'integracao-sistemas';
      } else if (pathname.includes('/seguranca-digital-')) {
        serviceSlug = 'seguranca-digital';
      }
      
      console.log('Serviço determinado:', serviceSlug);

      // Verificar se o serviço existe
      const serviceData = serviceMap[serviceSlug as keyof typeof serviceMap];
      
      if (!serviceData) {
        console.error('Serviço não encontrado:', serviceSlug);
        console.log('Serviços disponíveis:', Object.keys(serviceMap));
        setLoading(false);
        return;
      }

      // Converter slug da cidade para nome legível
      const cityName = slugToCity(cityParam);
      
      console.log('Serviço encontrado:', serviceData.name);
      console.log('Nome da cidade convertido:', cityName);

      // Criar dados para a página
      const mockService = {
        name: serviceData.name,
        slug: serviceSlug,
        base_price: serviceData.price,
        description: serviceData.description
      };

      const mockCity = {
        name: cityName,
        slug: cityParam,
        states: { name: 'Brasil', code: 'BR' }
      };

      const mockContent = {
        title: `${serviceData.name} em ${cityName} - PPlace`,
        description: `${serviceData.name} profissional em ${cityName}. A PPlace oferece soluções completas em tecnologia com IA avançada para empresas de ${cityName}.`,
        meta_keywords: `${serviceData.name.toLowerCase()}, ${cityName.toLowerCase()}, desenvolvimento, IA, PPlace`,
        content: generateContent(serviceData.name, cityName)
      };

      setPageData({
        service: mockService,
        city: mockCity,
        content: mockContent
      });

      console.log('=== DADOS CARREGADOS COM SUCESSO ===');
      console.log('Service:', mockService);
      console.log('City:', mockCity);
    } catch (error) {
      console.error('Erro ao carregar dados da página:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateContent = (serviceName: string, cityName: string) => {
    return `
      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-gray-900">Por que escolher ${serviceName} da PPlace em ${cityName}?</h2>
        <p class="text-lg text-gray-700">
          A PPlace é líder em ${serviceName.toLowerCase()} em ${cityName}, oferecendo soluções inovadoras 
          que transformam negócios e multiplicam resultados. Nossa expertise em tecnologia e IA garante 
          que sua empresa em ${cityName} tenha as melhores ferramentas do mercado.
        </p>
        
        <h3 class="text-2xl font-bold text-purple-600">Vantagens exclusivas em ${cityName}:</h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>Atendimento personalizado para o mercado de ${cityName}</li>
          <li>Tecnologia de ponta com inteligência artificial</li>
          <li>Suporte local especializado 24/7</li>
          <li>Resultados comprovados em ${cityName}</li>
          <li>Preços competitivos para a região</li>
        </ul>
      </div>
    `;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando conteúdo otimizado...</p>
        </div>
      </div>
    );
  }

  if (!pageData || !pageData.service.name) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Página não encontrada</h1>
          <p className="text-xl text-gray-600 mb-4">O serviço ou cidade solicitada não foi encontrada.</p>
          <p className="text-gray-500">URL: {location.pathname}</p>
          <p className="text-sm text-gray-400 mt-4">Params: {JSON.stringify(params)}</p>
          <p className="text-sm text-gray-400 mt-2">Debug: Verifique o console para mais detalhes</p>
        </div>
        <Footer />
      </div>
    );
  }

  const { service, city, content } = pageData;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={content.title}
        description={content.description}
        keywords={content.meta_keywords}
        canonical={`https://pplace.com.br${location.pathname}`}
        city={city.name}
        service={service.name}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${service.name} em ${city.name}`,
          "description": content.description,
          "provider": {
            "@type": "Organization",
            "name": "PPlace"
          },
          "areaServed": {
            "@type": "City",
            "name": city.name
          }
        }}
      />
      
      <Header />
      <DynamicPageHero service={service} city={city} content={content} />
      <DynamicPageContent service={service} city={city} content={content} />
      <DynamicPageServices service={service} city={city} />
      <DynamicPageCTA service={service} city={city} />
      <Footer />
    </div>
  );
};

export default DynamicServiceCityPage;
