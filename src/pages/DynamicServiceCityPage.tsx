
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
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
      // Extrair serviço e cidade da URL
      const url = window.location.pathname;
      const segments = url.split('-');
      
      // Encontrar o serviço e cidade
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

      // Lógica para identificar serviço e cidade na URL
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
        // Verificar se já existe conteúdo gerado
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
          // Gerar conteúdo automaticamente
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
        title={content.title || `${service.name} em ${city.name}`}
        description={content.description || `Serviços de ${service.name} em ${city.name}`}
        keywords={content.meta_keywords || `${service.name}, ${city.name}`}
        canonical={`https://pplace.com.br${window.location.pathname}`}
        city={city.name}
        service={service.name}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${service.name} em ${city.name}`,
          "description": content.description || `Serviços de ${service.name} em ${city.name}`,
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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {content.title || `${service.name} em ${city.name}`}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            {content.description || `Serviços profissionais de ${service.name} em ${city.name}`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              Solicitar Orçamento Gratuito
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              WhatsApp: (11) 99999-9999
            </Button>
          </div>
        </div>
      </section>

      {/* Conteúdo Gerado */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {content.content && typeof content.content === 'object' && content.content.content ? (
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: content.content.content }}
              />
            ) : (
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-600 leading-relaxed">
                  A PPlace é especialista em {service.name} em {city.name}. 
                  Nossa equipe desenvolve soluções personalizadas que atendem 
                  às necessidades específicas do mercado local de {city.name}.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Informações do Serviço */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {service.name} em {city.name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">💰 Investimento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  R$ {service.base_price?.toLocaleString('pt-BR')}
                </div>
                <p className="text-gray-600">Preço especial para {city.name}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">📊 Categoria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {service.category}
                </div>
                <p className="text-gray-600">Especialização técnica</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">🎯 Localização</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {city.name}
                </div>
                <p className="text-gray-600">Atendimento local especializado</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para começar seu projeto em {city.name}?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Fale agora com nossos especialistas em {service.name}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Orçamento Gratuito
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              WhatsApp: (11) 99999-9999
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DynamicServiceCityPage;
