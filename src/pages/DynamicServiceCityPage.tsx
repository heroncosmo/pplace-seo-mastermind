
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import DynamicPageHero from '@/components/dynamic/DynamicPageHero';
import DynamicPageContent from '@/components/dynamic/DynamicPageContent';
import DynamicPageServices from '@/components/dynamic/DynamicPageServices';
import DynamicPageCTA from '@/components/dynamic/DynamicPageCTA';
import { useGenerateContent } from '@/hooks/useContentGeneration';
import { supabase } from '@/integrations/supabase/client';

const DynamicServiceCityPage = () => {
  const params = useParams();
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const generateContent = useGenerateContent();

  useEffect(() => {
    loadPageData();
  }, [params]);

  const loadPageData = async () => {
    try {
      const url = window.location.pathname;
      const segments = url.split('-');
      
      const { data: services } = await supabase
        .from('services')
        .select('*')
        .eq('active', true);

      const { data: cities } = await supabase
        .from('cities')
        .select(`
          *,
          states(name, code)
        `);

      if (!services || !cities) return;

      let foundService = null;
      let foundCity = null;

      for (const service of services) {
        if (service.slug && url.includes(service.slug)) {
          foundService = service;
          break;
        }
      }

      for (const city of cities) {
        if (city.slug && url.includes(city.slug)) {
          foundCity = city;
          break;
        }
      }

      if (foundService && foundCity) {
        const { data: existingContent } = await supabase
          .from('generated_content')
          .select('*')
          .eq('city_id', foundCity.id)
          .eq('service_id', foundService.id)
          .single();

        if (existingContent) {
          setPageData({
            service: foundService,
            city: foundCity,
            content: existingContent
          });
        } else {
          generateContent.mutate({
            cityId: foundCity.id,
            serviceId: foundService.id,
            cityName: foundCity.name,
            serviceName: foundService.name,
            stateName: foundCity.states?.name || ''
          }, {
            onSuccess: (data) => {
              setPageData({
                service: foundService,
                city: foundCity,
                content: data
              });
            }
          });
        }
      }
    } catch (error) {
      console.error('Erro ao carregar dados da página:', error);
    } finally {
      setLoading(false);
    }
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
        title={content.title || `${service.name} em ${city.name} - PPlace`}
        description={content.description || `${service.name} profissional em ${city.name}. A PPlace oferece soluções completas em tecnologia com IA avançada.`}
        keywords={content.meta_keywords || `${service.name}, ${city.name}, desenvolvimento, IA, PPlace`}
        canonical={`https://pplace.com.br${window.location.pathname}`}
        city={city.name}
        service={service.name}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${service.name} em ${city.name}`,
          "description": content.description || `${service.name} profissional em ${city.name}`,
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
