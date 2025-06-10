
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
  const { dynamicPath, city: cityParam } = useParams<{ dynamicPath?: string; city?: string }>();
  const { data: cities, isLoading: citiesLoading } = useCities();
  const { data: services, isLoading: servicesLoading } = useServices();

  console.log('=== DYNAMIC PAGE DEBUG ===');
  console.log('Dynamic path:', dynamicPath);
  console.log('City param:', cityParam);
  console.log('Current URL:', window.location.pathname);

  // Mapear todos os tipos de serviços possíveis
  const serviceMap: Record<string, any> = {
    'ecommerce': {
      name: 'E-commerce',
      slug: 'ecommerce',
      description: 'Lojas virtuais completas',
      category: 'Desenvolvimento Web',
      base_price: 2999
    },
    'landing-page': {
      name: 'Landing Page',
      slug: 'landing-page',
      description: 'Páginas de alta conversão',
      category: 'Marketing Digital',
      base_price: 899
    },
    'landing-pages': {
      name: 'Landing Pages',
      slug: 'landing-pages',
      description: 'Páginas de alta conversão',
      category: 'Marketing Digital',
      base_price: 899
    },
    'leadpilot': {
      name: 'LeadPilot',
      slug: 'leadpilot',
      description: 'Sistema inteligente de vendas',
      category: 'Inteligência Artificial',
      base_price: 4999
    },
    'seo': {
      name: 'SEO',
      slug: 'seo',
      description: 'Otimização para motores de busca',
      category: 'Marketing Digital',
      base_price: 799
    },
    'aplicativo': {
      name: 'Aplicativo Mobile',
      slug: 'aplicativo',
      description: 'Apps para iOS e Android',
      category: 'Desenvolvimento Mobile',
      base_price: 8999
    },
    'aplicativos': {
      name: 'Aplicativos Mobile',
      slug: 'aplicativos',
      description: 'Apps para iOS e Android',
      category: 'Desenvolvimento Mobile',
      base_price: 8999
    },
    'sistema-ia': {
      name: 'Sistema com IA',
      slug: 'sistema-ia',
      description: 'Sistemas inteligentes personalizados',
      category: 'Inteligência Artificial',
      base_price: 12999
    },
    'sistemas-ia': {
      name: 'Sistemas com IA',
      slug: 'sistemas-ia',
      description: 'Sistemas inteligentes personalizados',
      category: 'Inteligência Artificial',
      base_price: 12999
    },
    'sites-institucionais': {
      name: 'Sites Institucionais',
      slug: 'sites-institucionais',
      description: 'Sites corporativos profissionais',
      category: 'Desenvolvimento Web',
      base_price: 1999
    },
    'sites': {
      name: 'Sites Profissionais',
      slug: 'sites',
      description: 'Sites corporativos profissionais',
      category: 'Desenvolvimento Web',
      base_price: 1999
    },
    'automacao-rpa': {
      name: 'Automação RPA',
      slug: 'automacao-rpa',
      description: 'Automação de processos',
      category: 'Automação',
      base_price: 5999
    },
    'automacao': {
      name: 'Automação de Processos',
      slug: 'automacao',
      description: 'Automação de processos',
      category: 'Automação',
      base_price: 5999
    },
    'chatbots-ia': {
      name: 'Chatbots com IA',
      slug: 'chatbots-ia',
      description: 'Assistentes virtuais inteligentes',
      category: 'Inteligência Artificial',
      base_price: 3999
    },
    'chatbots': {
      name: 'Chatbots Inteligentes',
      slug: 'chatbots',
      description: 'Assistentes virtuais inteligentes',
      category: 'Inteligência Artificial',
      base_price: 3999
    },
    'business-intelligence': {
      name: 'Business Intelligence',
      slug: 'business-intelligence',
      description: 'Análise de dados e relatórios',
      category: 'Análise de Dados',
      base_price: 6999
    },
    'marketing-digital': {
      name: 'Marketing Digital',
      slug: 'marketing-digital',
      description: 'Estratégias digitais completas',
      category: 'Marketing Digital',
      base_price: 1299
    },
    'marketplace': {
      name: 'Marketplace',
      slug: 'marketplace',
      description: 'Plataformas de vendas online',
      category: 'E-commerce',
      base_price: 9999
    },
    'consultoria-ti': {
      name: 'Consultoria em TI',
      slug: 'consultoria-ti',
      description: 'Consultoria tecnológica especializada',
      category: 'Consultoria',
      base_price: 2999
    },
    'consultoria': {
      name: 'Consultoria Tecnológica',
      slug: 'consultoria',
      description: 'Consultoria tecnológica especializada',
      category: 'Consultoria',
      base_price: 2999
    },
    'integracao-sistemas': {
      name: 'Integração de Sistemas',
      slug: 'integracao-sistemas',
      description: 'Integração e conectividade',
      category: 'Desenvolvimento',
      base_price: 4999
    },
    'integracao': {
      name: 'Integração de Sistemas',
      slug: 'integracao',
      description: 'Integração e conectividade',
      category: 'Desenvolvimento',
      base_price: 4999
    },
    'seguranca-digital': {
      name: 'Segurança Digital',
      slug: 'seguranca-digital',
      description: 'Proteção e segurança online',
      category: 'Segurança',
      base_price: 3999
    },
    'seguranca': {
      name: 'Segurança Digital',
      slug: 'seguranca',
      description: 'Proteção e segurança online',
      category: 'Segurança',
      base_price: 3999
    },
    'criacao-de-site': {
      name: 'Criação de Sites',
      slug: 'criacao-de-site',
      description: 'Sites profissionais completos',
      category: 'Desenvolvimento Web',
      base_price: 1999
    }
  };

  // Análise da URL atual
  const currentPath = window.location.pathname;
  let serviceSlug = '';
  let citySlug = '';
  let service = null;
  let city = null;

  // Detectar diferentes tipos de URLs
  if (currentPath.startsWith('/servicos/')) {
    // URLs como /servicos/aplicativos, /servicos/seo
    const servicePart = currentPath.replace('/servicos/', '');
    serviceSlug = servicePart;
    console.log('🔍 URL de serviço detectada:', servicePart);
    
    // Para URLs de serviço sem cidade, criar uma cidade genérica
    city = {
      name: 'Brasil',
      slug: 'brasil',
      id: 0,
      states: { name: 'Nacional', code: 'BR' }
    };
  } else if (dynamicPath) {
    // URLs como /sistema-ia-blumenau, /ecommerce-sao-paulo
    console.log('🔍 Analisando dynamic path:', dynamicPath);

    // Detectar sistema-ia especificamente
    if (dynamicPath.startsWith('sistema-ia-')) {
      serviceSlug = 'sistema-ia';
      citySlug = dynamicPath.replace('sistema-ia-', '');
      console.log('✅ Detectado sistema-ia, cidade:', citySlug);
    } else {
      // Para outros casos, buscar o maior match de serviço
      const possibleServices = Object.keys(serviceMap).sort((a, b) => b.length - a.length);
      
      for (const possibleService of possibleServices) {
        if (dynamicPath.startsWith(possibleService + '-')) {
          serviceSlug = possibleService;
          citySlug = dynamicPath.substring(possibleService.length + 1);
          console.log('✅ Match encontrado:', possibleService, 'Cidade:', citySlug);
          break;
        }
      }
      
      // Fallback: assumir que o primeiro elemento é o serviço
      if (!serviceSlug) {
        const parts = dynamicPath.split('-');
        if (parts.length >= 2) {
          serviceSlug = parts[0];
          citySlug = parts.slice(1).join('-');
          console.log('🔄 Fallback aplicado - Serviço:', serviceSlug, 'Cidade:', citySlug);
        }
      }
    }
  } else if (cityParam) {
    // URLs com parâmetro de cidade
    citySlug = cityParam;
    // Tentar extrair serviço da URL
    const pathParts = currentPath.split('/');
    if (pathParts.length > 1) {
      serviceSlug = pathParts[1].split('-')[0];
    }
  }

  console.log('🎯 Resultado da análise:');
  console.log('   Service slug:', serviceSlug);
  console.log('   City slug:', citySlug);

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
  service = serviceMap[serviceSlug] || services?.find(s => s.slug === serviceSlug);
  
  if (!service && serviceSlug) {
    console.error('❌ Serviço não encontrado:', serviceSlug);
    console.log('📋 Serviços disponíveis:', Object.keys(serviceMap));
    
    // Criar um serviço padrão para evitar erro
    service = {
      name: 'Serviços Tecnológicos',
      slug: serviceSlug,
      description: 'Soluções tecnológicas avançadas',
      category: 'Tecnologia',
      base_price: 1999
    };
  }

  // Buscar cidade (se necessário)
  if (citySlug && cities) {
    city = cities.find(c => cityToSlug(c.name) === citySlug);
    
    if (!city) {
      console.error('❌ Cidade não encontrada:', citySlug);
      
      // Criar uma cidade padrão
      city = {
        name: citySlug.charAt(0).toUpperCase() + citySlug.slice(1).replace('-', ' '),
        slug: citySlug,
        id: 0,
        states: { name: 'Brasil', code: 'BR' }
      };
    }
  }

  // Se não há cidade específica e não foi definida como Brasil, usar uma padrão
  if (!city) {
    city = {
      name: 'Brasil',
      slug: 'brasil',
      id: 0,
      states: { name: 'Nacional', code: 'BR' }
    };
  }

  // Se não há serviço, criar um padrão
  if (!service) {
    service = {
      name: 'Serviços Tecnológicos',
      slug: 'servicos',
      description: 'Soluções tecnológicas avançadas',
      category: 'Tecnologia',
      base_price: 1999
    };
  }

  console.log('✅ Página dinâmica carregada com sucesso');
  console.log('   Serviço:', service?.name);
  console.log('   Cidade:', city?.name);

  const pageTitle = `${service?.name || 'Serviços'} em ${city.name} - PPlace`;
  const pageDescription = `${service?.description || 'Soluções tecnológicas'} em ${city.name}. Tecnologia de ponta com a PPlace.`;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords={`${service?.name || 'tecnologia'}, ${city.name}, desenvolvimento`}
        canonical={`https://pplace.com.br${currentPath}`}
      />
      
      <Header />
      <DynamicPageHero service={service} city={city} content={undefined} />
      <DynamicPageContent service={service} city={city} content={undefined} />
      <DynamicPageServices service={service} city={city} />
      <DynamicPageCTA service={service} city={city} />
      <Footer />
    </div>
  );
};

export default DynamicServiceCityPage;
