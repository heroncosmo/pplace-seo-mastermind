
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const ServicesPage = () => {
  const services = [
    {
      slug: 'ecommerce',
      title: 'E-commerce Profissional',
      description: 'Lojas virtuais completas que vendem 24/7 com sistema avançado de gestão e pagamentos integrados',
      price: 'A partir de R$ 2.999',
      features: [
        'Integração com PagSeguro, PagBank e PIX',
        'Gestão completa de produtos e estoque',
        'Painel administrativo avançado',
        'Relatórios de vendas em tempo real',
        'Otimização para conversão',
        'Design responsivo e moderno'
      ],
      benefits: 'Aumente suas vendas em até 300% com nossa plataforma otimizada',
      cta: 'Criar Minha Loja Virtual'
    },
    {
      slug: 'landing-pages',
      title: 'Landing Pages de Alta Conversão',
      description: 'Páginas otimizadas para converter visitantes em clientes com design persuasivo e copywriting profissional',
      price: 'A partir de R$ 899',
      features: [
        'Design focado em conversão',
        'Copywriting persuasivo incluído',
        'Formulários inteligentes',
        'Integração com CRM e WhatsApp',
        'Otimização para Google Ads',
        'Análise de heatmap incluída'
      ],
      benefits: 'Converta até 25% dos visitantes em leads qualificados',
      cta: 'Criar Minha Landing Page'
    },
    {
      slug: 'leadpilot',
      title: 'LeadPilot System',
      description: 'Sistema revolucionário com IA que qualifica leads automaticamente e multiplica suas vendas',
      price: 'A partir de R$ 4.999',
      features: [
        'Inteligência Artificial para qualificação',
        'Automação completa do funil de vendas',
        'Dashboard com métricas avançadas',
        'Integração com WhatsApp Business',
        'Chatbot inteligente 24/7',
        'Relatórios preditivos de vendas'
      ],
      benefits: 'Multiplique suas vendas em até 500% com IA',
      cta: 'Conhecer o LeadPilot'
    },
    {
      slug: 'sites-institucionais',
      title: 'Sites Institucionais',
      description: 'Sites profissionais que transmitem credibilidade e autoridade para sua marca no mercado',
      price: 'A partir de R$ 1.499',
      features: [
        'Design profissional e moderno',
        'SEO otimizado para Google',
        'Sistema de gestão de conteúdo',
        'Integração com redes sociais',
        'Formulários de contato avançados',
        'Certificado SSL incluso'
      ],
      benefits: 'Transmita profissionalismo e conquiste mais clientes',
      cta: 'Criar Meu Site'
    },
    {
      slug: 'aplicativos',
      title: 'Aplicativos Mobile',
      description: 'Apps nativos para Android e iOS que conectam sua marca diretamente aos smartphones dos clientes',
      price: 'A partir de R$ 8.999',
      features: [
        'Desenvolvimento nativo (React Native)',
        'Design UX/UI profissional',
        'Publicação nas lojas oficiais',
        'Push notifications inteligentes',
        'Integração com sistemas existentes',
        'Suporte e atualizações incluídas'
      ],
      benefits: 'Esteja no bolso dos seus clientes 24/7',
      cta: 'Desenvolver Meu App'
    },
    {
      slug: 'sistemas-ia',
      title: 'Sistemas com Inteligência Artificial',
      description: 'Soluções personalizadas com IA para automatizar processos e otimizar resultados do seu negócio',
      price: 'A partir de R$ 12.999',
      features: [
        'Chatbots inteligentes personalizados',
        'Análise preditiva de dados',
        'Automação de processos (RPA)',
        'Machine Learning aplicado',
        'Integração com APIs modernas',
        'Dashboard analytics avançado'
      ],
      benefits: 'Automatize 80% dos processos repetitivos',
      cta: 'Automatizar com IA'
    },
    {
      slug: 'seo',
      title: 'SEO e Marketing Digital',
      description: 'Estratégias completas para dominar o Google e multiplicar o tráfego orgânico do seu site',
      price: 'A partir de R$ 799/mês',
      features: [
        'Auditoria SEO completa',
        'Otimização on-page e off-page',
        'Criação de conteúdo otimizado',
        'Link building estratégico',
        'Google Ads e Facebook Ads',
        'Relatórios mensais detalhados'
      ],
      benefits: 'Apareça na primeira página do Google',
      cta: 'Dominar o Google'
    },
    {
      slug: 'marketing-digital',
      title: 'Marketing Digital 360°',
      description: 'Estratégia completa de marketing digital para aumentar vendas e fortalecer sua marca online',
      price: 'A partir de R$ 1.999/mês',
      features: [
        'Gestão de redes sociais',
        'Criação de conteúdo profissional',
        'E-mail marketing automatizado',
        'Google Ads e Facebook Ads',
        'Análise de concorrência',
        'Consultoria estratégica mensal'
      ],
      benefits: 'Aumente o faturamento em até 400%',
      cta: 'Acelerar Vendas'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Serviços PPlace - Sites, E-commerce, IA e Marketing Digital"
        description="Conheça todos os serviços da PPlace: e-commerce, landing pages, LeadPilot, apps, sistemas com IA, SEO e marketing digital. Soluções que realmente vendem."
        keywords="servicos pplace, ecommerce, landing page, leadpilot, aplicativos, inteligencia artificial, seo, marketing digital"
        canonical="https://pplace.com.br/servicos"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "provider": {
            "@type": "Organization",
            "name": "PPlace"
          },
          "serviceType": "Desenvolvimento Web e Marketing Digital",
          "description": "Serviços completos de tecnologia e marketing digital"
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Soluções completas em tecnologia e marketing digital para 
            transformar seu negócio e multiplicar suas vendas.
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
            Solicitar Orçamento Gratuito
          </Button>
        </div>
      </section>

      {/* Grid de Serviços */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 group">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm font-semibold text-green-800">{service.benefits}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-purple-600 font-semibold">
                        + {service.features.length - 4} funcionalidades adicionais
                      </li>
                    )}
                  </ul>
                  
                  <div className="pt-4 space-y-2">
                    <Link to={`/servicos/${service.slug}`}>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        {service.cta}
                      </Button>
                    </Link>
                    <Link to="/contato">
                      <Button variant="outline" className="w-full text-sm">
                        Solicitar Orçamento
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Destaque - LeadPilot */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              🚀 LeadPilot: Nossa Solução Mais Revolucionária
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              O sistema de IA que está transformando vendas em todo o Brasil. 
              Mais de 300 empresas já multiplicaram seus resultados.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">500%</div>
                <p className="text-purple-100">Aumento médio em conversões</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">80%</div>
                <p className="text-purple-100">Redução no tempo de resposta</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <p className="text-purple-100">Atendimento automatizado</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/leadpilot">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Conhecer o LeadPilot
                </Button>
              </Link>
              <Link to="/contato">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  Agendar Demonstração
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Perguntas Frequentes
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Qual é o prazo de entrega dos projetos?",
                answer: "O prazo varia conforme o serviço: Landing Pages (3-5 dias), Sites (7-15 dias), E-commerce (15-30 dias), Apps (30-60 dias). O LeadPilot tem implementação em 7 dias."
              },
              {
                question: "Vocês oferecem garantia nos serviços?",
                answer: "Sim! Oferecemos 12 meses de garantia em todos os projetos, incluindo correções, atualizações de segurança e suporte técnico completo."
              },
              {
                question: "Como funciona o pagamento?",
                answer: "Trabalhamos com entrada de 50% para iniciar o projeto e 50% na entrega. Aceitamos PIX, cartão de crédito (até 12x) e boleto bancário."
              },
              {
                question: "Vocês atendem em todo o Brasil?",
                answer: "Sim! Atendemos clientes em todas as cidades do Brasil de forma 100% online, com a mesma qualidade e agilidade."
              },
              {
                question: "O que está incluso no pós-venda?",
                answer: "Todos os projetos incluem treinamento da equipe, manual de uso, suporte técnico por 12 meses e atualizações de segurança."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-600">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Entre em contato agora e receba uma proposta personalizada em até 2 horas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Solicitar Orçamento Gratuito
              </Button>
            </Link>
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

export default ServicesPage;
