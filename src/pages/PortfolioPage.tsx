
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const PortfolioPage = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5517981679818&text=Oi%2C%20tudo%20bem%3F%20Vi%20o%20portfólio%20da%20PPlace%20e%20gostaria%20de%20um%20orçamento.";

  const projects = [
    {
      title: "E-commerce Fashion Store",
      category: "E-commerce",
      description: "Loja virtual completa com sistema de pagamento integrado e IA para recomendações",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
      results: "Aumento de 350% nas vendas",
      technologies: ["React", "Node.js", "IA", "Stripe"]
    },
    {
      title: "LeadPilot para Consultoria",
      category: "Sistema com IA",
      description: "Sistema de IA que automatizou 80% do processo de qualificação de leads",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      results: "ROI de 800% em 3 meses",
      technologies: ["IA", "Python", "React", "WhatsApp API"]
    },
    {
      title: "Landing Page para SaaS",
      category: "Landing Page",
      description: "Página de conversão otimizada que triplicou a taxa de conversão",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      results: "Conversão de 25%",
      technologies: ["React", "Analytics", "A/B Testing"]
    },
    {
      title: "App Mobile para Delivery",
      category: "Aplicativo",
      description: "Aplicativo nativo para iOS e Android com geolocalização e pagamento",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
      results: "50mil downloads em 6 meses",
      technologies: ["React Native", "Firebase", "GPS"]
    },
    {
      title: "Sistema de Automação RPA",
      category: "Automação",
      description: "Robôs que automatizaram processos repetitivos economizando 70% do tempo",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400",
      results: "Economia de 70% no tempo",
      technologies: ["Python", "RPA", "IA", "APIs"]
    },
    {
      title: "Marketplace B2B",
      category: "Marketplace",
      description: "Plataforma completa para conectar fornecedores e compradores",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400",
      results: "1000+ empresas cadastradas",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Portfólio PPlace - Projetos de Sucesso em Tecnologia"
        description="Conheça nossos projetos de sucesso: e-commerce, landing pages, sistemas com IA, apps e automação. Resultados reais que transformam negócios."
        keywords="portfolio pplace, projetos tecnologia, cases sucesso, ecommerce, apps, sistemas ia"
        canonical="https://pplace.com.br/portfolio"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nosso Portfólio
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformaram negócios e multiplicaram resultados
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-900 hover:bg-gray-100"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            Quero um Projeto Assim
          </Button>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-sm font-semibold text-green-800">📈 {project.results}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => window.open(whatsappUrl, '_blank')}
                  >
                    Quero um Projeto Assim
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para ser o Próximo Caso de Sucesso?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Entre em contato e descubra como podemos transformar seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Solicitar Orçamento
            </Button>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              WhatsApp: (17) 98167-9818
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
