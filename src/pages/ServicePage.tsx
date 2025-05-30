
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const ServicePage = () => {
  const { service } = useParams();

  const servicesData: Record<string, any> = {
    'ecommerce': {
      name: 'E-commerce Profissional',
      subtitle: 'Lojas virtuais que vendem 24/7',
      description: 'Criamos lojas virtuais completas com sistema avançado de gestão, pagamentos integrados e otimização para conversão máxima.',
      price: 'A partir de R$ 2.999',
      deliveryTime: '15-30 dias',
      features: [
        'Catálogo de produtos ilimitado',
        'Sistema de pagamento completo (PIX, Cartão, Boleto)',
        'Gestão avançada de estoque',
        'Painel administrativo intuitivo',
        'Integração com Correios e transportadoras',
        'Cupons de desconto e promoções',
        'Relatórios de vendas detalhados',
        'Design responsivo e moderno',
        'SEO otimizado para vendas',
        'Chat de suporte integrado',
        'Sistema de avaliações',
        'Recuperação de carrinho abandonado'
      ],
      benefits: [
        'Aumento médio de 300% nas vendas online',
        'Redução de 80% no tempo de gestão',
        'Integração completa com seu sistema atual',
        'Suporte técnico 24/7'
      ],
      includes: [
        'Desenvolvimento completo da loja',
        'Design personalizado',
        'Configuração de pagamentos',
        'Treinamento da equipe',
        '12 meses de suporte',
        'Hospedagem no primeiro ano',
        'Certificado SSL incluso',
        'Backup diário automático'
      ]
    },
    'landing-pages': {
      name: 'Landing Pages de Alta Conversão',
      subtitle: 'Páginas que transformam visitantes em clientes',
      description: 'Landing pages otimizadas para máxima conversão com design persuasivo, copywriting profissional e integração com ferramentas de marketing.',
      price: 'A partir de R$ 899',
      deliveryTime: '3-7 dias',
      features: [
        'Design focado em conversão',
        'Copywriting persuasivo incluído',
        'Formulários otimizados',
        'Integração com WhatsApp Business',
        'Pixel do Facebook configurado',
        'Google Analytics avançado',
        'Otimização para Google Ads',
        'Testes A/B inclusos',
        'Mobile-first design',
        'Velocidade otimizada',
        'SEO básico incluído',
        'Chat ao vivo opcional'
      ],
      benefits: [
        'Taxa de conversão média de 25%',
        'ROI positivo desde o primeiro mês',
        'Leads qualificados automaticamente',
        'Redução de 60% no custo por lead'
      ],
      includes: [
        'Desenvolvimento da landing page',
        'Copywriting profissional',
        'Design responsivo',
        'Configuração de analytics',
        'Integração com CRM',
        '6 meses de suporte',
        'Hospedagem inclusa',
        'Relatórios mensais'
      ]
    }
  };

  const currentService = servicesData[service || 'ecommerce'] || servicesData['ecommerce'];

  const testimonials = [
    {
      name: 'Carlos Silva',
      company: 'Loja Fashion Online',
      result: 'Vendas aumentaram 400% em 3 meses',
      text: 'A PPlace criou uma loja incrível! O sistema é fácil de usar e as vendas dispararam.',
      city: 'São Paulo - SP'
    },
    {
      name: 'Ana Costa',
      company: 'Consultoria Premium',
      result: 'Conversão de 35% na landing page',
      text: 'Landing page perfeita! Nunca tivemos tantos leads qualificados.',
      city: 'Rio de Janeiro - RJ'
    },
    {
      name: 'João Santos',
      company: 'Produtos Naturais',
      result: 'ROI de 800% no primeiro mês',
      text: 'Investimento que se pagou rapidamente. Recomendo a PPlace para todos!',
      city: 'Belo Horizonte - MG'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={`${currentService.name} - PPlace | ${currentService.subtitle}`}
        description={`${currentService.description} ${currentService.price}. Resultados garantidos e suporte completo.`}
        keywords={`${service}, ${currentService.name.toLowerCase()}, desenvolvimento web, pplace`}
        canonical={`https://pplace.com.br/servicos/${service}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": currentService.name,
          "description": currentService.description,
          "provider": {
            "@type": "Organization",
            "name": "PPlace"
          }
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {currentService.name}
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-purple-200">
              {currentService.subtitle}
            </p>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {currentService.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold text-yellow-400 mb-2">{currentService.price}</div>
                <p className="text-purple-100">Investimento</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold text-yellow-400 mb-2">{currentService.deliveryTime}</div>
                <p className="text-purple-100">Prazo de entrega</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold text-yellow-400 mb-2">12 meses</div>
                <p className="text-purple-100">Garantia</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                Solicitar Orçamento Gratuito
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                Ver Exemplos
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Conteúdo Principal */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Funcionalidades */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  ⚡ Funcionalidades Incluídas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentService.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Benefícios */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  🎯 Resultados que Você Vai Alcançar
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentService.benefits.map((benefit: string, index: number) => (
                    <Card key={index} className="border-2 border-green-200 bg-green-50">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">📈</div>
                          <p className="font-semibold text-green-800">{benefit}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* O que está incluso */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  📦 O que está Incluso no Seu Projeto
                </h2>
                <Card>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentService.includes.map((item: string, index: number) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Depoimentos */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  💬 O que Nossos Clientes Dizem
                </h2>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                              <span className="text-gray-500">•</span>
                              <span className="text-purple-600">{testimonial.company}</span>
                              <span className="text-gray-500">•</span>
                              <span className="text-sm text-gray-500">{testimonial.city}</span>
                            </div>
                            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                              {testimonial.result}
                            </div>
                            <blockquote className="text-gray-600 italic">
                              "{testimonial.text}"
                            </blockquote>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Formulário de Orçamento */}
              <Card className="sticky top-8">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <CardTitle className="text-xl">
                    💰 Orçamento Gratuito
                  </CardTitle>
                  <p>Receba uma proposta em até 2 horas</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp com DDD"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                    <textarea
                      placeholder="Conte-nos sobre seu projeto..."
                      rows={3}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Solicitar Orçamento
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      ✅ Resposta em 2h • ✅ Sem compromisso
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Contato Direto */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-purple-600">📞 Fale Conosco</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📱</span>
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-gray-600">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-gray-600">contato@pplace.com.br</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Garantias */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-purple-600">🛡️ Nossas Garantias</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">12 meses de garantia</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Suporte técnico incluso</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Prazo cumprido ou desconto</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Satisfação garantida</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Começar seu Projeto?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transforme seu negócio hoje mesmo com nossa expertise comprovada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
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

export default ServicePage;
