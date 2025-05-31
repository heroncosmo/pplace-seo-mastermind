
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "E-commerce Profissional",
      description: "Lojas virtuais completas com sistemas de pagamento integrados e IA para conversão",
      features: ["Integração PIX/Cartão", "IA para recomendações", "Dashboard avançado"],
      price: "A partir de R$ 2.999",
      icon: "🛒",
      link: "/servicos/ecommerce"
    },
    {
      title: "Landing Pages com IA",
      description: "Páginas de alta conversão com otimização inteligente e testes automáticos",
      features: ["IA para otimização", "A/B testing automático", "Conversão 25%+"],
      price: "A partir de R$ 899",
      icon: "📄",
      link: "/servicos/landing-pages"
    },
    {
      title: "LeadPilot System",
      description: "Sistema revolucionário de captura e conversão de leads com IA avançada",
      features: ["IA para qualificação", "Automação completa", "ROI 800%+"],
      price: "A partir de R$ 4.999",
      icon: "🤖",
      link: "/leadpilot"
    },
    {
      title: "Sites Institucionais",
      description: "Sites corporativos profissionais com SEO avançado e design moderno",
      features: ["SEO otimizado", "Design responsivo", "CMS personalizado"],
      price: "A partir de R$ 1.499",
      icon: "🏢",
      link: "/servicos/sites-institucionais"
    },
    {
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos para Android e iOS com tecnologia de ponta",
      features: ["React Native", "Flutter", "Publicação automática"],
      price: "A partir de R$ 8.999",
      icon: "📱",
      link: "/servicos/aplicativos"
    },
    {
      title: "Sistemas com IA",
      description: "Soluções personalizadas com inteligência artificial para automação",
      features: ["Chatbots inteligentes", "Machine Learning", "APIs personalizadas"],
      price: "A partir de R$ 12.999",
      icon: "🧠",
      link: "/servicos/sistemas-ia"
    },
    {
      title: "SEO Local Avançado",
      description: "Otimização completa para dominar o Google na sua cidade",
      features: ["Google Meu Negócio", "Link building", "Relatórios IA"],
      price: "A partir de R$ 799/mês",
      icon: "🔍",
      link: "/servicos/seo"
    },
    {
      title: "Marketing Digital IA",
      description: "Campanhas inteligentes que se otimizam automaticamente",
      features: ["Google Ads IA", "Facebook Ads", "Automação completa"],
      price: "A partir de R$ 1.499/mês",
      icon: "📈",
      link: "/servicos/marketing-digital"
    },
    {
      title: "Automação RPA",
      description: "Robôs que automatizam processos repetitivos da sua empresa",
      features: ["Robótica de processos", "Integração sistemas", "Economia 70%"],
      price: "A partir de R$ 3.999",
      icon: "⚡",
      link: "/servicos/automacao-rpa"
    },
    {
      title: "Business Intelligence",
      description: "Dashboards inteligentes com análise preditiva e insights de IA",
      features: ["Análise preditiva", "Dashboards IA", "Relatórios automáticos"],
      price: "A partir de R$ 5.999",
      icon: "📊",
      link: "/servicos/business-intelligence"
    },
    {
      title: "Chatbots Inteligentes",
      description: "Assistentes virtuais que atendem clientes 24/7 com IA avançada",
      features: ["IA conversacional", "Integração WhatsApp", "Aprendizado contínuo"],
      price: "A partir de R$ 2.499",
      icon: "💬",
      link: "/servicos/chatbots-ia"
    },
    {
      title: "Marketplace Completo",
      description: "Plataformas de marketplace com gestão multi-vendedores",
      features: ["Multi-vendedores", "Comissões automáticas", "Dashboard completo"],
      price: "A partir de R$ 15.999",
      icon: "🏪",
      link: "/servicos/marketplace"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços com IA
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Soluções completas em tecnologia e inteligência artificial para revolucionar seu negócio em qualquer cidade do Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-lg text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                  {service.title}
                </CardTitle>
                <div className="text-sm font-bold text-purple-600 mb-2">
                  {service.price}
                </div>
                <CardDescription className="text-gray-600 text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                    Saiba Mais
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Precisa de algo específico? Criamos soluções personalizadas para qualquer necessidade!
          </p>
          <Link to="/contato">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold">
              🚀 Solicitar Solução Personalizada
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
