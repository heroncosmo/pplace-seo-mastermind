
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Target, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const LeadPilotPage = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5517981679818&text=Oi%2C%20tudo%20bem%3F%20Quero%20conhecer%20o%20LeadPilot%20e%20revolucionar%20minhas%20vendas%20com%20IA.";

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="LeadPilot - Sistema de IA que Multiplica Vendas em 500% | PPlace"
        description="O LeadPilot é o sistema revolucionário de IA da PPlace que qualifica leads automaticamente e multiplica vendas em até 500%. Conheça agora!"
        keywords="leadpilot, sistema ia vendas, qualificacao leads automatica, multiplicar vendas, inteligencia artificial"
        canonical="https://pplace.com.br/leadpilot"
        schema={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "LeadPilot",
          "description": "Sistema de IA que multiplica vendas automaticamente",
          "provider": {
            "@type": "Organization",
            "name": "PPlace"
          }
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              🚀 <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">LeadPilot</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O Sistema de IA que Multiplica suas Vendas em 500%
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Revolucione seu negócio com inteligência artificial que qualifica leads automaticamente, 
              converte visitantes em clientes e trabalha 24/7 para você
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-yellow-400 mb-2">500%</div>
                <p className="text-purple-100">Aumento médio de vendas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <p className="text-purple-100">IA trabalhando sempre</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
                <p className="text-purple-100">Redução no tempo</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold text-xl px-8 py-4"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                🤖 QUERO O LEADPILOT AGORA
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 font-bold text-xl px-8 py-4"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                📱 WhatsApp: (17) 98167-9818
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O que é o LeadPilot */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                O que é o LeadPilot?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                É o sistema de inteligência artificial mais avançado do Brasil para vendas. 
                Ele identifica, qualifica e converte seus visitantes automaticamente.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-2 border-purple-200 hover:border-purple-400 transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Identifica</h3>
                  <p className="text-gray-600">Detecta visitantes qualificados em tempo real</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 border-blue-200 hover:border-blue-400 transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Qualifica</h3>
                  <p className="text-gray-600">Classifica leads por potencial de compra</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 border-green-200 hover:border-green-400 transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Converte</h3>
                  <p className="text-gray-600">Transforma visitantes em clientes pagantes</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 border-yellow-200 hover:border-yellow-400 transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Automatiza</h3>
                  <p className="text-gray-600">Todo o processo funciona sozinho 24/7</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Funcionalidades Exclusivas do LeadPilot
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "🤖 IA Conversacional Avançada",
                  description: "Chatbot inteligente que conversa naturalmente e qualifica leads automaticamente"
                },
                {
                  title: "📊 Dashboard Preditivo",
                  description: "Relatórios que preveem quais leads têm maior chance de comprar"
                },
                {
                  title: "📱 Integração WhatsApp Business",
                  description: "Conecta automaticamente com seu WhatsApp para conversas humanizadas"
                },
                {
                  title: "🎯 Segmentação Inteligente",
                  description: "Separa leads por interesse, urgência e poder de compra"
                },
                {
                  title: "⚡ Resposta em Tempo Real",
                  description: "Atende visitantes em segundos, mesmo quando você não está online"
                },
                {
                  title: "🔄 Funil Automatizado",
                  description: "Nutre leads automaticamente até estarem prontos para comprar"
                },
                {
                  title: "📈 Analytics Avançado",
                  description: "Métricas detalhadas sobre conversão e ROI em tempo real"
                },
                {
                  title: "🚀 Otimização Contínua",
                  description: "IA aprende e melhora suas conversões automaticamente"
                }
              ].map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Reais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Resultados Reais de Clientes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  company: "Loja Fashion Online",
                  result: "500% mais vendas",
                  description: "Em 90 dias o LeadPilot multiplicou as vendas da loja por 5x",
                  owner: "Marina Silva"
                },
                {
                  company: "Consultoria Premium",
                  result: "800% de ROI",
                  description: "Investimento se pagou em 30 dias e continua gerando lucro",
                  owner: "Carlos Santos"
                },
                {
                  company: "SaaS Tecnologia",
                  result: "70% conversão",
                  description: "Taxa de conversão de visitante para cliente aumentou drasticamente",
                  owner: "Ana Costa"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="border-2 border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">{testimonial.result}</div>
                    <h4 className="font-bold text-gray-900 mb-2">{testimonial.company}</h4>
                    <p className="text-gray-600 mb-4">"{testimonial.description}"</p>
                    <p className="text-sm text-gray-500">- {testimonial.owner}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preços */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Investimento no LeadPilot
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Um investimento que se paga sozinho e continua gerando lucro
          </p>
          
          <Card className="max-w-md mx-auto border-4 border-yellow-400">
            <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black">
              <CardTitle className="text-3xl font-bold">🚀 LeadPilot Completo</CardTitle>
              <div className="text-4xl font-bold">R$ 4.999</div>
              <p>Investimento único + R$ 299/mês</p>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  IA conversacional completa
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Integração WhatsApp Business
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Dashboard analytics avançado
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Funil automatizado completo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Suporte especializado 24/7
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Garantia de resultados
                </li>
              </ul>
              
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3 mb-4"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                QUERO O LEADPILOT AGORA
              </Button>
              
              <p className="text-sm text-gray-500">
                ✅ Resultados em 30 dias • ✅ ROI garantido • ✅ Suporte completo
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Multiplicar suas Vendas?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Mais de 500 empresas já revolucionaram seus negócios com o LeadPilot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg px-8 py-4"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              🚀 IMPLEMENTAR LEADPILOT
            </Button>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 font-bold text-lg px-8 py-4"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              📱 WhatsApp: (17) 98167-9818
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LeadPilotPage;
