
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import DynamicPageHero from '@/components/dynamic/DynamicPageHero';
import DynamicPageContent from '@/components/dynamic/DynamicPageContent';
import DynamicPageServices from '@/components/dynamic/DynamicPageServices';
import DynamicPageCTA from '@/components/dynamic/DynamicPageCTA';

const DynamicServiceCityPage = () => {
  const params = useParams();
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPageData();
  }, [params]);

  const loadPageData = async () => {
    try {
      const url = window.location.pathname;
      
      // Extrair serviço e cidade da URL
      const segments = url.split('-');
      let serviceName = '';
      let citySlug = '';
      let cityName = '';

      // Mapear serviços baseado na URL
      if (url.includes('/ecommerce-')) {
        serviceName = 'E-commerce';
        citySlug = url.replace('/ecommerce-', '');
      } else if (url.includes('/landing-page-')) {
        serviceName = 'Landing Page';
        citySlug = url.replace('/landing-page-', '');
      } else if (url.includes('/leadpilot-')) {
        serviceName = 'LeadPilot';
        citySlug = url.replace('/leadpilot-', '');
      } else if (url.includes('/seo-')) {
        serviceName = 'SEO';
        citySlug = url.replace('/seo-', '');
      } else if (url.includes('/aplicativo-')) {
        serviceName = 'Aplicativo Mobile';
        citySlug = url.replace('/aplicativo-', '');
      } else if (url.includes('/sistema-ia-')) {
        serviceName = 'Sistema com IA';
        citySlug = url.replace('/sistema-ia-', '');
      } else if (url.includes('/sites-institucionais-')) {
        serviceName = 'Sites Institucionais';
        citySlug = url.replace('/sites-institucionais-', '');
      } else if (url.includes('/automacao-rpa-')) {
        serviceName = 'Automação RPA';
        citySlug = url.replace('/automacao-rpa-', '');
      } else if (url.includes('/chatbots-ia-')) {
        serviceName = 'Chatbots com IA';
        citySlug = url.replace('/chatbots-ia-', '');
      } else if (url.includes('/business-intelligence-')) {
        serviceName = 'Business Intelligence';
        citySlug = url.replace('/business-intelligence-', '');
      } else if (url.includes('/marketing-digital-')) {
        serviceName = 'Marketing Digital';
        citySlug = url.replace('/marketing-digital-', '');
      } else if (url.includes('/marketplace-')) {
        serviceName = 'Marketplace';
        citySlug = url.replace('/marketplace-', '');
      } else if (url.includes('/consultoria-ti-')) {
        serviceName = 'Consultoria em TI';
        citySlug = url.replace('/consultoria-ti-', '');
      } else if (url.includes('/integracao-sistemas-')) {
        serviceName = 'Integração de Sistemas';
        citySlug = url.replace('/integracao-sistemas-', '');
      } else if (url.includes('/seguranca-digital-')) {
        serviceName = 'Segurança Digital';
        citySlug = url.replace('/seguranca-digital-', '');
      }

      // Converter slug da cidade para nome legível
      cityName = citySlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      // Criar dados simulados para a página
      const mockService = {
        name: serviceName,
        slug: serviceName.toLowerCase().replace(/\s+/g, '-'),
        base_price: getServicePrice(serviceName),
        description: getServiceDescription(serviceName)
      };

      const mockCity = {
        name: cityName,
        slug: citySlug,
        states: { name: 'Brasil', code: 'BR' }
      };

      const mockContent = {
        title: `${serviceName} em ${cityName} - PPlace`,
        description: `${serviceName} profissional em ${cityName}. A PPlace oferece soluções completas em tecnologia com IA avançada para empresas de ${cityName}.`,
        meta_keywords: `${serviceName.toLowerCase()}, ${cityName.toLowerCase()}, desenvolvimento, IA, PPlace`,
        content: generateContent(serviceName, cityName)
      };

      setPageData({
        service: mockService,
        city: mockCity,
        content: mockContent
      });
    } catch (error) {
      console.error('Erro ao carregar dados da página:', error);
    } finally {
      setLoading(false);
    }
  };

  const getServicePrice = (serviceName: string) => {
    const prices: { [key: string]: number } = {
      'E-commerce': 2999,
      'Landing Page': 899,
      'LeadPilot': 4999,
      'SEO': 799,
      'Aplicativo Mobile': 8999,
      'Sistema com IA': 12999,
      'Sites Institucionais': 1499,
      'Automação RPA': 7999,
      'Chatbots com IA': 3999,
      'Business Intelligence': 9999,
      'Marketing Digital': 1999,
      'Marketplace': 15999,
      'Consultoria em TI': 2999,
      'Integração de Sistemas': 5999,
      'Segurança Digital': 3499
    };
    return prices[serviceName] || 2999;
  };

  const getServiceDescription = (serviceName: string) => {
    const descriptions: { [key: string]: string } = {
      'E-commerce': 'Lojas virtuais profissionais que vendem 24/7',
      'Landing Page': 'Páginas de conversão de alta performance',
      'LeadPilot': 'Sistema de IA que multiplica suas vendas',
      'SEO': 'Otimização para aparecer no Google',
      'Aplicativo Mobile': 'Apps nativos para Android e iOS',
      'Sistema com IA': 'Soluções personalizadas com inteligência artificial',
      'Sites Institucionais': 'Sites profissionais para sua empresa',
      'Automação RPA': 'Automatização de processos empresariais',
      'Chatbots com IA': 'Atendimento automatizado inteligente',
      'Business Intelligence': 'Análise de dados para decisões estratégicas',
      'Marketing Digital': 'Estratégias digitais para crescimento',
      'Marketplace': 'Plataformas de vendas online',
      'Consultoria em TI': 'Consultoria especializada em tecnologia',
      'Integração de Sistemas': 'Conecte todos os seus sistemas',
      'Segurança Digital': 'Proteção completa para seu negócio digital'
    };
    return descriptions[serviceName] || 'Soluções tecnológicas inovadoras';
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

  if (!pageData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Página não encontrada</h1>
          <p className="text-xl text-gray-600">O serviço ou cidade solicitada não foi encontrada.</p>
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
        canonical={`https://pplace.com.br${window.location.pathname}`}
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
