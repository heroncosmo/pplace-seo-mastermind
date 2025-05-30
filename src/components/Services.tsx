
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "E-commerce Profissional",
      description: "Lojas virtuais completas com sistemas de pagamento integrados e gestão total",
      features: ["Integração com PagSeguro/PagBank", "Gestão de estoque", "Relatórios avançados"],
      link: "/servicos/ecommerce"
    },
    {
      title: "Landing Pages de Conversão",
      description: "Páginas otimizadas para máxima conversão com design persuasivo",
      features: ["Design responsivo", "Otimização SEO", "Integração com CRM"],
      link: "/servicos/landing-pages"
    },
    {
      title: "LeadPilot System",
      description: "Sistema revolucionário de captura e conversão de leads com IA",
      features: ["IA para qualificação", "Automação total", "Dashboard completo"],
      link: "/servicos/leadpilot"
    },
    {
      title: "Sites Institucionais",
      description: "Sites profissionais que transmitem credibilidade e autoridade",
      features: ["SEO otimizado", "Design moderno", "Gestão de conteúdo"],
      link: "/servicos/sites-institucionais"
    },
    {
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos para Android e iOS",
      features: ["React Native", "Flutter", "Publicação nas lojas"],
      link: "/servicos/aplicativos"
    },
    {
      title: "Sistemas com IA",
      description: "Soluções personalizadas com inteligência artificial",
      features: ["Chatbots inteligentes", "Análise preditiva", "Automação"],
      link: "/servicos/sistemas-ia"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em tecnologia para impulsionar seu negócio em qualquer cidade do Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Saiba Mais
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
