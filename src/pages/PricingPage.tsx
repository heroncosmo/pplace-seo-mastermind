
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const PricingPage = () => {
  const [activeCategory, setActiveCategory] = useState('sites');

  const pricing = {
    sites: [
      {
        name: 'Site Básico',
        price: 'R$ 1.499',
        period: 'pagamento único',
        description: 'Perfeito para pequenas empresas',
        features: [
          'Até 5 páginas',
          'Design responsivo',
          'SEO básico',
          'Formulário de contato',
          'Integração redes sociais',
          '12 meses de suporte'
        ],
        highlight: false,
        delivery: '7 dias'
      },
      {
        name: 'Site Profissional',
        price: 'R$ 2.999',
        period: 'pagamento único',
        description: 'Ideal para empresas em crescimento',
        features: [
          'Até 15 páginas',
          'Design personalizado',
          'SEO avançado',
          'Blog integrado',
          'Área de membros',
          'Analytics avançado',
          '12 meses de suporte'
        ],
        highlight: true,
        delivery: '10 dias'
      },
      {
        name: 'Site Enterprise',
        price: 'R$ 5.999',
        period: 'pagamento único',
        description: 'Para grandes empresas',
        features: [
          'Páginas ilimitadas',
          'Design exclusivo',
          'SEO premium',
          'Sistema de CRM',
          'Integrações avançadas',
          'Suporte prioritário',
          '24 meses de suporte'
        ],
        highlight: false,
        delivery: '15 dias'
      }
    ],
    ecommerce: [
      {
        name: 'Loja Starter',
        price: 'R$ 2.999',
        period: 'pagamento único',
        description: 'Para começar a vender online',
        features: [
          'Até 100 produtos',
          'Pagamentos PIX/Cartão',
          'Gestão de estoque',
          'Painel administrativo',
          'Frete automático',
          '12 meses de suporte'
        ],
        highlight: false,
        delivery: '15 dias'
      },
      {
        name: 'Loja Professional',
        price: 'R$ 4.999',
        period: 'pagamento único',
        description: 'Para vendas em escala',
        features: [
          'Produtos ilimitados',
          'Múltiplas formas pagamento',
          'Cupons de desconto',
          'Relatórios avançados',
          'App mobile básico',
          'Marketing por email',
          '18 meses de suporte'
        ],
        highlight: true,
        delivery: '20 dias'
      },
      {
        name: 'Loja Enterprise',
        price: 'R$ 9.999',
        period: 'pagamento único',
        description: 'Solução completa de vendas',
        features: [
          'Marketplace integrado',
          'IA para recomendações',
          'CRM avançado',
          'API personalizada',
          'App mobile completo',
          'Consultoria incluída',
          '24 meses de suporte'
        ],
        highlight: false,
        delivery: '30 dias'
      }
    ],
    leadpilot: [
      {
        name: 'LeadPilot Starter',
        price: 'R$ 497',
        period: '/mês',
        description: 'Para pequenas empresas',
        features: [
          'Até 1.000 leads/mês',
          'Chatbot básico',
          'Dashboard essencial',
          'Integração WhatsApp',
          'Suporte por email'
        ],
        highlight: false,
        delivery: '3 dias'
      },
      {
        name: 'LeadPilot Pro',
        price: 'R$ 997',
        period: '/mês',
        description: 'Para empresas em crescimento',
        features: [
          'Até 5.000 leads/mês',
          'IA de qualificação avançada',
          'Funil automatizado',
          'Analytics avançado',
          'Suporte prioritário',
          'Treinamento incluso'
        ],
        highlight: true,
        delivery: '5 dias'
      },
      {
        name: 'LeadPilot Enterprise',
        price: 'R$ 1.997',
        period: '/mês',
        description: 'Para grandes volumes',
        features: [
          'Leads ilimitados',
          'IA personalizada',
          'Múltiplos funis',
          'API personalizada',
          'Gerente dedicado',
          'Setup gratuito'
        ],
        highlight: false,
        delivery: '7 dias'
      }
    ],
    marketing: [
      {
        name: 'Marketing Básico',
        price: 'R$ 799',
        period: '/mês',
        description: 'Para começar no digital',
        features: [
          'Gestão redes sociais (2)',
          'Conteúdo básico',
          'Google Ads básico',
          'Relatório mensal',
          'Suporte por email'
        ],
        highlight: false,
        delivery: 'Imediato'
      },
      {
        name: 'Marketing Pro',
        price: 'R$ 1.999',
        period: '/mês',
        description: 'Estratégia completa',
        features: [
          'Gestão redes sociais (5)',
          'Conteúdo profissional',
          'Google e Facebook Ads',
          'SEO mensal',
          'E-mail marketing',
          'Consultoria semanal'
        ],
        highlight: true,
        delivery: 'Imediato'
      },
      {
        name: 'Marketing Enterprise',
        price: 'R$ 4.999',
        period: '/mês',
        description: 'Domínio total do mercado',
        features: [
          'Gestão completa digital',
          'Criação de conteúdo premium',
          'Múltiplas campanhas',
          'Análise de concorrência',
          'Influencer marketing',
          'Gerente dedicado'
        ],
        highlight: false,
        delivery: 'Imediato'
      }
    ]
  };

  const categories = [
    { id: 'sites', label: '🌐 Sites & Landing Pages', description: 'Sites profissionais que vendem' },
    { id: 'ecommerce', label: '🛒 E-commerce', description: 'Lojas virtuais completas' },
    { id: 'leadpilot', label: '🤖 LeadPilot (IA)', description: 'Sistema que multiplica vendas' },
    { id: 'marketing', label: '📈 Marketing Digital', description: 'Estratégias de crescimento' }
  ];

  const currentPlans = pricing[activeCategory as keyof typeof pricing];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Preços PPlace - Orçamentos Transparentes para Sites, E-commerce e IA"
        description="Conheça nossos preços transparentes: sites a partir de R$ 1.499, e-commerce R$ 2.999, LeadPilot R$ 497/mês. Sem taxas ocultas, resultados garantidos."
        keywords="precos pplace, orcamento site, valor ecommerce, preco leadpilot, marketing digital precos"
        canonical="https://pplace.com.br/precos"
        schema={{
          "@context": "https://schema.org",
          "@type": "PriceSpecification",
          "name": "Tabela de Preços PPlace",
          "description": "Preços transparentes para todos os serviços"
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Preços Transparentes
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Sem surpresas, sem taxas ocultas. Investimentos claros para 
            resultados garantidos. Escolha o plano perfeito para seu negócio.
          </p>
          <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-bold text-lg">
            💰 Orçamento grátis em 2 horas!
          </div>
        </div>
      </section>

      {/* Seletor de Categoria */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  activeCategory === category.id
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <h3 className="font-bold text-lg mb-2">{category.label}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tabela de Preços */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {categories.find(c => c.id === activeCategory)?.label}
            </h2>
            <p className="text-xl text-gray-600">
              Planos que cabem no seu orçamento e geram resultados reais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentPlans.map((plan, index) => (
              <Card key={index} className={`relative transition-all duration-300 ${
                plan.highlight 
                  ? 'border-4 border-purple-500 scale-105 shadow-2xl' 
                  : 'border-2 hover:border-purple-200 hover:shadow-xl'
              }`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      🏆 MAIS POPULAR
                    </div>
                  </div>
                )}
                
                <CardHeader className={`text-center ${plan.highlight ? 'bg-purple-50' : ''}`}>
                  <CardTitle className="text-2xl text-purple-600">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-gray-900 my-4">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-500">
                      {plan.period && ` ${plan.period}`}
                    </span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    ⚡ Entrega em {plan.delivery}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3">
                    <Button className={`w-full ${
                      plan.highlight 
                        ? 'bg-purple-600 hover:bg-purple-700 text-lg py-3' 
                        : 'bg-gray-600 hover:bg-gray-700'
                    }`}>
                      {activeCategory === 'leadpilot' || activeCategory === 'marketing' 
                        ? 'Começar Agora' 
                        : 'Solicitar Orçamento'
                      }
                    </Button>
                    
                    <Link to="/contato">
                      <Button variant="outline" className="w-full text-sm">
                        Falar com Especialista
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t text-center">
                    <p className="text-xs text-gray-500">
                      ✅ Garantia de satisfação • ✅ Suporte incluído • ✅ Sem taxas ocultas
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Garantias e Diferenciais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Por que Nossos Preços Valem Cada Centavo?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '💰',
                title: 'Sem Taxas Ocultas',
                description: 'Preço final transparente, sem surpresas na hora do pagamento'
              },
              {
                icon: '🎯',
                title: 'Resultados Garantidos',
                description: 'Se não atingir os resultados prometidos, refazemos sem custo'
              },
              {
                icon: '⚡',
                title: 'Entrega Rápida',
                description: 'Prazos cumpridos rigorosamente, sem atrasos'
              },
              {
                icon: '🔧',
                title: 'Suporte Vitalício',
                description: 'Suporte técnico incluído por tempo indeterminado'
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl text-purple-600">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preços */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Perguntas Frequentes sobre Preços
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Os preços incluem tudo?",
                answer: "Sim! Nossos preços incluem desenvolvimento, design, conteúdo básico, treinamento, suporte e hospedagem no primeiro ano. Sem taxas ocultas."
              },
              {
                question: "Posso parcelar o pagamento?",
                answer: "Sim! Aceitamos cartão de crédito em até 12x sem juros. Também trabalhamos com entrada + saldo na entrega."
              },
              {
                question: "Há algum custo de manutenção?",
                answer: "A manutenção está inclusa no primeiro ano. Após esse período, oferecemos planos de manutenção a partir de R$ 99/mês."
              },
              {
                question: "E se eu não ficar satisfeito?",
                answer: "Oferecemos garantia de satisfação. Se não ficar satisfeito em até 30 dias, devolvemos seu investimento."
              },
              {
                question: "Os preços podem mudar durante o projeto?",
                answer: "Não! O preço acordado é fixo. Mudanças só ocorrem se você solicitar funcionalidades extras não previstas."
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Solicite um orçamento personalizado e descubra como podemos multiplicar seus resultados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Solicitar Orçamento Grátis
              </Button>
            </Link>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              WhatsApp: (11) 99999-9999
            </Button>
          </div>
          <p className="text-sm text-purple-200 mt-4">
            ⏰ Resposta garantida em até 2 horas!
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
