
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
    'seguranca-digital': { name: 'Segurança Digital', price: 3499, description: 'Proteção completa para seu negócio digital' },
    'criacao-de-site': { name: 'Criação de Sites', price: 1999, description: 'Sites profissionais e modernos' }
  };

  useEffect(() => {
    loadPageData();
  }, [location.pathname, params]);

  const loadPageData = async () => {
    try {
      console.log('🔍 ANÁLISE DE ROTA INICIADA');
      console.log('URL completa:', location.pathname);
      console.log('Params:', params);
      
      const citySlug = params.city;
      console.log('Slug da cidade:', citySlug);
      
      if (!citySlug) {
        console.error('❌ Parâmetro city não encontrado');
        setLoading(false);
        return;
      }

      // Extrair serviço da URL
      const pathname = location.pathname;
      const segments = pathname.split('/').filter(Boolean);
      
      if (segments.length === 0) {
        console.error('❌ URL inválida - sem segmentos');
        setLoading(false);
        return;
      }
      
      const fullSlug = segments[0];
      console.log('Slug completo extraído:', fullSlug);
      
      // Extrair serviço removendo a cidade do final
      const serviceSlug = fullSlug.replace(`-${citySlug}`, '');
      console.log('Serviço extraído:', serviceSlug);
      
      // Verificar se o serviço existe
      const serviceData = serviceMap[serviceSlug as keyof typeof serviceMap];
      
      if (!serviceData) {
        console.error('❌ Serviço não encontrado:', serviceSlug);
        console.log('Serviços disponíveis:', Object.keys(serviceMap));
        setLoading(false);
        return;
      }

      // Converter slug da cidade para nome legível
      const cityName = slugToCity(citySlug);
      
      console.log('✅ DADOS PROCESSADOS COM SUCESSO:');
      console.log('- Serviço:', serviceData.name);
      console.log('- Cidade:', cityName);

      // Criar dados para a página
      const mockService = {
        name: serviceData.name,
        slug: serviceSlug,
        base_price: serviceData.price,
        description: serviceData.description
      };

      const mockCity = {
        name: cityName,
        slug: citySlug,
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

      console.log('✅ PÁGINA CARREGADA COM SUCESSO!');
    } catch (error) {
      console.error('❌ Erro ao carregar dados da página:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateContent = (serviceName: string, cityName: string) => {
    return `
      <div class="space-y-8">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Por que escolher ${serviceName} da PPlace em ${cityName}?</h2>
        <p class="text-xl text-gray-700 leading-relaxed">
          A PPlace é líder em ${serviceName.toLowerCase()} em ${cityName}, oferecendo soluções inovadoras 
          que transformam negócios e multiplicam resultados. Nossa expertise em tecnologia e IA garante 
          que sua empresa em ${cityName} tenha as melhores ferramentas do mercado.
        </p>
        
        <h3 class="text-3xl font-bold text-purple-600 mt-12 mb-6">Vantagens exclusivas em ${cityName}:</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
            <h4 class="font-bold text-purple-700 mb-2">🎯 Atendimento Personalizado</h4>
            <p class="text-gray-700">Atendimento especializado para o mercado de ${cityName}</p>
          </div>
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <h4 class="font-bold text-blue-700 mb-2">🤖 Tecnologia de Ponta</h4>
            <p class="text-gray-700">Inteligência artificial de última geração</p>
          </div>
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <h4 class="font-bold text-green-700 mb-2">📈 Resultados Comprovados</h4>
            <p class="text-gray-700">Resultados comprovados em ${cityName}</p>
          </div>
          <div class="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
            <h4 class="font-bold text-orange-700 mb-2">💰 Preços Competitivos</h4>
            <p class="text-gray-700">Preços especiais para a região</p>
          </div>
        </div>
      </div>
    `;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-purple-600 mx-auto"></div>
            <div className="absolute inset-0 rounded-full h-32 w-32 border-r-4 border-blue-400 animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          </div>
          <p className="mt-6 text-xl text-gray-700 font-medium">Carregando experiência otimizada...</p>
          <p className="mt-2 text-gray-500">Preparando o melhor para você</p>
        </div>
      </div>
    );
  }

  if (!pageData || !pageData.service.name) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-8xl mb-6">🚫</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Página não encontrada</h1>
            <p className="text-xl text-gray-600 mb-8">O serviço ou cidade solicitada não foi encontrada.</p>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-left space-y-2 text-sm">
              <p><strong>URL:</strong> {location.pathname}</p>
              <p><strong>Params:</strong> {JSON.stringify(params)}</p>
              <p><strong>Serviços disponíveis:</strong> {Object.keys(serviceMap).join(', ')}</p>
              <p className="text-orange-600">⚠️ Verifique o console do navegador para logs detalhados</p>
            </div>
            <button 
              onClick={() => window.location.href = '/'}
              className="mt-8 bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Voltar ao Início
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { service, city, content } = pageData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
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
