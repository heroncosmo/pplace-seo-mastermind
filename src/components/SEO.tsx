
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
  ogImage = "https://pplace.com.br/og-image.jpg",
  ogType = "website",
  city,
  service,
  schema
}: SEOProps) => {
  const siteUrl = "https://pplace.com.br";
  const fullTitle = `${title} | PPlace - Tecnologia que Transforma`;
  const fullCanonical = canonical || window.location.href;

  return (
    <Helmet>
      {/* Título e descrição */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="PPlace" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Dados estruturados para SEO local */}
      {city && (
        <meta name="geo.region" content={`BR-${city}`} />
      )}
      
      {/* Schema markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Schema da empresa */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PPlace",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "description": "Especialistas em criação de sites, e-commerce, landing pages e sistemas com IA. Criamos o LeadPilot, sistema revolucionário de conversão de leads.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-11-99999-9999",
            "contactType": "customer service",
            "availableLanguage": "Portuguese"
          },
          "sameAs": [
            "https://www.facebook.com/pplace",
            "https://www.instagram.com/pplace",
            "https://www.linkedin.com/company/pplace"
          ],
          "offers": {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service || "Desenvolvimento Web e Sistemas",
              "description": `Criação de ${service || 'sites'} ${city ? `em ${city}` : 'em todo o Brasil'}`
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
