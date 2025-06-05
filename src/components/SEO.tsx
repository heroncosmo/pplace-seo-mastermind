
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  city?: string;
  service?: string;
  schema?: object;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = "https://pplace.com.br/pplace-social.jpg",
  ogType = "website",
  city,
  service,
  schema
}: SEOProps) => {
  const siteUrl = "https://pplace.com.br";
  const fullTitle = `${title} | PPlace - Tecnologia que Transforma`;
  const fullCanonical = canonical || window.location.href;

  // Schema markup enriquecido
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PPlace",
    "url": siteUrl,
    "logo": `${siteUrl}/pplace-logo.png`,
    "description": "A PPlace é a empresa líder em desenvolvimento de sites, e-commerce, landing pages e sistemas com IA no Brasil. Criamos o LeadPilot, sistema revolucionário de conversão de leads.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-17-98167-9818",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://www.facebook.com/pplace",
      "https://www.instagram.com/pplace",
      "https://www.linkedin.com/company/pplace"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    }
  };

  const localBusinessSchema = city ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `PPlace ${service || 'Desenvolvimento'} em ${city}`,
    "description": `Serviços profissionais de ${service || 'desenvolvimento web'} em ${city}. A PPlace oferece soluções completas em tecnologia.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressCountry": "BR"
    },
    "telephone": "+55-17-98167-9818",
    "url": fullCanonical,
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-18:00"
  } : null;

  return (
    <Helmet>
      {/* Título e descrição otimizados */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Meta tags adicionais para SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="PPlace" />
      <meta name="publisher" content="PPlace" />
      <meta name="copyright" content="PPlace" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph otimizado */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="PPlace" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Card otimizado */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@pplace" />
      
      {/* Dados estruturados para SEO local */}
      {city && (
        <>
          <meta name="geo.region" content={`BR-${city}`} />
          <meta name="geo.placename" content={city} />
          <meta name="geo.position" content="-23.5505;-46.6333" />
          <meta name="ICBM" content="-23.5505, -46.6333" />
        </>
      )}
      
      {/* Schema markup personalizado */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Schema da organização */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Schema de negócio local */}
      {localBusinessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}
      
      {/* Breadcrumb schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Início",
              "item": siteUrl
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": service || "Serviços",
              "item": `${siteUrl}/servicos`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": `${service || 'Serviços'} em ${city || 'Brasil'}`,
              "item": fullCanonical
            }
          ]
        })}
      </script>
      
      {/* FAQ Schema se aplicável */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": `Quanto custa ${service || 'desenvolvimento web'} em ${city || 'minha cidade'}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Os preços para ${service || 'desenvolvimento web'} em ${city || 'sua cidade'} variam conforme a complexidade do projeto. A PPlace oferece orçamentos gratuitos e personalizados.`
              }
            },
            {
              "@type": "Question",
              "name": `Qual o prazo de entrega?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O prazo varia de 7 a 30 dias dependendo da complexidade do projeto. Sempre cumprimos os prazos acordados."
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
