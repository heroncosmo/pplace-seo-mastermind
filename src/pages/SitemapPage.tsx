
import React, { useEffect, useState } from 'react';
import { useCities } from '@/hooks/useContentGeneration';
import { cityToSlug } from '@/utils/cityUtils';

const SitemapPage = () => {
  const { data: cities, isLoading } = useCities();
  const [sitemapXML, setSitemapXML] = useState('');

  const allServices = [
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Landing Page', slug: 'landing-page' },
    { name: 'LeadPilot', slug: 'leadpilot' },
    { name: 'SEO', slug: 'seo' },
    { name: 'Aplicativo Mobile', slug: 'aplicativo' },
    { name: 'Sistema com IA', slug: 'sistema-ia' },
    { name: 'Sites Institucionais', slug: 'sites-institucionais' },
    { name: 'Automação RPA', slug: 'automacao-rpa' },
    { name: 'Chatbots com IA', slug: 'chatbots-ia' },
    { name: 'Business Intelligence', slug: 'business-intelligence' },
    { name: 'Marketing Digital', slug: 'marketing-digital' },
    { name: 'Marketplace', slug: 'marketplace' },
    { name: 'Consultoria em TI', slug: 'consultoria-ti' },
    { name: 'Integração de Sistemas', slug: 'integracao-sistemas' },
    { name: 'Segurança Digital', slug: 'seguranca-digital' }
  ];

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/servicos', priority: '0.9', changefreq: 'weekly' },
    { url: '/sobre', priority: '0.8', changefreq: 'monthly' },
    { url: '/contato', priority: '0.8', changefreq: 'monthly' },
    { url: '/portfolio', priority: '0.7', changefreq: 'weekly' },
    { url: '/precos', priority: '0.8', changefreq: 'weekly' },
    { url: '/leadpilot', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.7', changefreq: 'daily' },
    { url: '/cidades', priority: '0.6', changefreq: 'weekly' }
  ];

  useEffect(() => {
    if (!isLoading && cities && cities.length > 0) {
      generateSitemap();
    }
  }, [cities, isLoading]);

  const generateSitemap = () => {
    let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Páginas estáticas
    staticPages.forEach(page => {
      sitemapContent += `
  <url>
    <loc>https://pplace.com.br${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`;
    });

    // Páginas de serviços gerais
    allServices.forEach(service => {
      sitemapContent += `
  <url>
    <loc>https://pplace.com.br/servicos/${service.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`;
    });

    // Páginas dinâmicas por cidade
    if (cities && cities.length > 0) {
      cities.forEach((city: any) => {
        const citySlug = cityToSlug(city.name);
        
        // Página principal da cidade
        sitemapContent += `
  <url>
    <loc>https://pplace.com.br/criacao-de-site-${citySlug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`;

        // Todos os serviços por cidade
        allServices.forEach(service => {
          sitemapContent += `
  <url>
    <loc>https://pplace.com.br/${service.slug}-${citySlug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`;
        });
      });
    }

    sitemapContent += `
</urlset>`;

    setSitemapXML(sitemapContent);
    
    console.log('✅ Sitemap XML gerado!');
    console.log(`📊 Total de URLs: ${sitemapContent.split('<url>').length - 1}`);
  };

  // Configurar headers para XML
  useEffect(() => {
    if (sitemapXML) {
      document.contentType = 'application/xml';
    }
  }, [sitemapXML]);

  if (isLoading) {
    return (
      <div style={{ padding: '20px', fontFamily: 'monospace' }}>
        Gerando sitemap...
      </div>
    );
  }

  return (
    <div>
      <pre style={{ 
        whiteSpace: 'pre-wrap', 
        fontSize: '12px',
        fontFamily: 'monospace',
        margin: 0,
        padding: '10px'
      }}>
        {sitemapXML}
      </pre>
    </div>
  );
};

export default SitemapPage;
