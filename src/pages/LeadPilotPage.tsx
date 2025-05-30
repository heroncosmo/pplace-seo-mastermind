
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const LeadPilotPage = () => {
  const [activeTab, setActiveTab] = useState('features');

  const features = [
    {
      title: 'IA de Qualificação Automática',
      description: 'Sistema inteligente que analisa e qualifica leads em tempo real',
      benefit: 'Economize 80% do tempo em qualificação manual'
    },
    {
      title: 'Chatbot Inteligente 24/7',
      description: 'Atendimento automatizado que nunca dorme e converte leads',
      benefit: 'Capture leads mesmo fora do horário comercial'
    },
    {
      title: 'Funil de Vendas Automatizado',
      description: 'Jornada completa do lead até a conversão em cliente',
      benefit: 'Aumente conversões em até 500%'
    },
    {
      title: 'Dashboard Analytics Avançado',
      description: 'Métricas e insights em tempo real para otimizar resultados',
      benefit: 'Tome decisões baseadas em dados precisos'
    },
    {
      title: 'Integração WhatsApp Business',
      description: 'Conecta diretamente com seu WhatsApp para vendas',
      benefit: 'Converta leads onde seus clientes já estão'
    },
    {
      title: 'Análise Preditiva de Vendas',
      description: 'IA prevê quais leads têm maior potencial de compra',
      benefit: 'Foque energia nos leads mais qualificados'
    }
  ];

  const testimonials = [
    {
      company: 'Loja Virtual SP',
      owner: 'Carlos Silva',
      result: 'Aumentou vendas em 400% em 30 dias',
      quote: 'O LeadPilot transformou nossa operação. Nunca vendemos tanto!',
      city: 'São Paulo - SP'
    },
    {
      company: 'Imobiliária Premium',
      owner: 'Ana Costa',
      result: 'Reduziu tempo de resposta em 90%',
      quote: 'Agora respondemos leads em segundos, não em horas.',
      city: 'Rio de Janeiro - RJ'
    },
    {
      company: 'Consultoria Digital',
      owner: 'João Santos',
      result: '600% mais leads qualificados',
      quote: 'Nunca imaginei que IA pudesse fazer tanta diferença.',
      city: 'Belo Horizonte - MG'
    }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: 'R$ 497',
      period: '/mês',
      description: 'Perfeito para pequenas empresas',
      features: [
        'Até 1.000 leads/mês',
        'Chatbot básico',
        'Dashboard essencial',
        'Integração WhatsApp',
        'Suporte por email'
      ],
      highlight: false
    },
    {
      plan: 'Professional',
      price: 'R$ 997',
      period: '/mês',
      description: 'Ideal para empresas em crescimento',
      features: [
        'Até 5.000 leads/mês',
        'IA de qualificação avançada',
        'Funil automatizado completo',
        'Analytics avançado',
        'Suporte prioritário',
        'Treinamento incluso'
      ],
      highlight: true
    },
    {
      plan: 'Enterprise',
      price: 'R$ 1.997',
      period: '/mês',
      description: 'Para grandes volumes e máxima performance',
      features: [
        'Leads ilimitados',
        'IA personalizada',
        'Múltiplos funis',
        'API personalizada',
        'Gerente dedicado',
        'Implementação gratuita'
      ],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="LeadPilot - Sistema de IA que Multiplica suas Vendas em 500%"
        description="Conheça o LeadPilot, sistema revolucionário com IA que qualifica leads automaticamente, atende 24/7 e multiplica vendas. Mais de 300 empresas já transformaram seus resultados."
        keywords="leadpilot, sistema vendas, inteligencia artificial, automacao vendas, chatbot vendas, qualificacao leads"
        canonical="https://pplace.com.br/leadpilot"
        schema={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "LeadPilot",
          "description": "Sistema de IA para automação de vendas",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "497",
            "priceCurrency": "BRL"
          }
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
            🚀 REVOLUCIONÁRIO: Multiplique suas vendas com IA
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            LeadPilot
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold">
            O Sistema de IA que Multiplica suas Vendas em 500%
          </p>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
            Mais de 300 empresas já transformaram seus resultados com o LeadPilot. 
            Sistema que qualifica leads automaticamente, atende 24/7 e converte como nunca.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-4 font-bold">
              🎯 Ver Demonstração Gratuita
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4">
              📱 Falar no WhatsApp
            </Button>
          </div>

          {/* Números de impacto */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">500%</div>
              <p className="text-purple-100">Aumento Médio em Vendas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <p className="text-purple-100">Atendimento Automatizado</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">80%</div>
              <p className="text-purple-100">Redução em Tempo</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">300+</div>
              <p className="text-purple-100">Empresas Transformadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navegação de abas */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'features', label: '⚡ Funcionalidades' },
              { id: 'testimonials', label: '💬 Depoimentos' },
              { id: 'pricing', label: '💰 Preços' },
              { id: 'demo', label: '🎥 Demonstração' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo das abas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Tab: Funcionalidades */}
          {activeTab === 'features' && (
            <div>
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                🚀 Funcionalidades Revolucionárias
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-xl text-purple-600">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm font-semibold text-green-800">✅ {feature.benefit}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Tab: Depoimentos */}
          {activeTab === 'testimonials' && (
            <div>
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                💬 O que Nossos Clientes Dizem
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">{testimonial.result}</div>
                        <CardTitle className="text-lg">{testimonial.company}</CardTitle>
                        <p className="text-purple-600">{testimonial.owner}</p>
                        <p className="text-sm text-gray-500">{testimonial.city}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="text-gray-600 italic text-center">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Tab: Preços */}
          {activeTab === 'pricing' && (
            <div>
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
                💰 Planos que Cabem no seu Bolso
              </h2>
              <p className="text-xl text-center text-gray-600 mb-12">
                Escolha o plano ideal para seu negócio e comece a multiplicar vendas hoje mesmo
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricing.map((plan, index) => (
                  <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${
                    plan.highlight ? 'border-4 border-purple-500 scale-105' : 'border-2 hover:border-purple-200'
                  }`}>
                    {plan.highlight && (
                      <div className="bg-purple-600 text-white text-center py-2 font-bold text-sm">
                        🏆 MAIS POPULAR
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl text-purple-600">{plan.plan}</CardTitle>
                      <div className="text-4xl font-bold text-gray-900">
                        {plan.price}<span className="text-lg font-normal text-gray-500">{plan.period}</span>
                      </div>
                      <p className="text-gray-600">{plan.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <div className="w-4 h-4 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className={`w-full ${
                        plan.highlight 
                          ? 'bg-purple-600 hover:bg-purple-700' 
                          : 'bg-gray-600 hover:bg-gray-700'
                      }`}>
                        Começar Agora
                      </Button>
                      <p className="text-xs text-center text-gray-500 mt-2">
                        Sem taxa de setup • Cancelamento a qualquer momento
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Tab: Demonstração */}
          {activeTab === 'demo' && (
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                🎥 Veja o LeadPilot em Ação
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Assista como o LeadPilot transforma leads em vendas automaticamente
              </p>
              
              <div className="bg-gray-900 rounded-lg p-8 mb-8">
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🎬</div>
                    <h3 className="text-2xl font-bold mb-2">Demonstração Interativa</h3>
                    <p className="mb-4">Veja como funciona na prática</p>
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                      ▶️ Assistir Demonstração
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-purple-600 mb-3">📞 Demonstração por Videochamada</h3>
                  <p className="text-gray-600 mb-4">
                    Agende uma demonstração personalizada com nossos especialistas
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Agendar Demonstração
                  </Button>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-green-600 mb-3">💬 Teste Grátis por 7 Dias</h3>
                  <p className="text-gray-600 mb-4">
                    Experimente o LeadPilot gratuitamente por uma semana completa
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Iniciar Teste Grátis
                  </Button>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final Urgência */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              ⚡ OFERTA ESPECIAL: Apenas Hoje!
            </h2>
            <p className="text-2xl text-orange-100 mb-4">
              50% de Desconto + Setup Gratuito (Valor R$ 2.999)
            </p>
            <p className="text-xl text-orange-100 mb-8">
              Transforme seu negócio ainda hoje e multiplique suas vendas com o LeadPilot
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="text-3xl font-bold text-yellow-400 mb-2">⏰ Restam apenas 2 horas!</div>
              <p className="text-orange-100">Esta oferta expira à meia-noite</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 text-xl px-12 py-6 font-bold">
                🚀 QUERO O LEADPILOT AGORA
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-xl px-12 py-6">
                💬 Falar no WhatsApp
              </Button>
            </div>
            
            <p className="text-sm text-orange-200 mt-4">
              ✅ Garantia de 30 dias • ✅ Setup incluído • ✅ Suporte 24/7
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LeadPilotPage;
