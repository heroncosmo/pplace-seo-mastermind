
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "João Silva",
      role: "CEO & Fundador",
      experience: "15 anos em tecnologia",
      description: "Especialista em sistemas e IA, criador do LeadPilot"
    },
    {
      name: "Maria Santos",
      role: "CTO",
      experience: "12 anos em desenvolvimento",
      description: "Expert em React, Node.js e arquitetura de sistemas"
    },
    {
      name: "Pedro Costa",
      role: "Head de Marketing Digital",
      experience: "10 anos em SEO e conversão",
      description: "Responsável por estratégias que geram milhões em vendas"
    }
  ];

  const achievements = [
    { number: "1000+", label: "Sites Criados", description: "Sites que geram resultados reais" },
    { number: "500+", label: "Cidades Atendidas", description: "Presença em todo o Brasil" },
    { number: "99%", label: "Satisfação", description: "Clientes que recomendam nossos serviços" },
    { number: "R$ 50M+", label: "Vendas Geradas", description: "Para nossos clientes através de nossos sistemas" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Sobre a PPlace - A Melhor Empresa de Tecnologia e IA do Brasil"
        description="Conheça a PPlace, empresa líder em criação de sites, e-commerce, sistemas com IA e o revolucionário LeadPilot. Mais de 1000 sites criados em 500+ cidades."
        keywords="sobre pplace, empresa tecnologia, desenvolvimento web brasil, leadpilot, inteligencia artificial"
        canonical="https://pplace.com.br/sobre"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "PPlace",
            "foundingDate": "2019",
            "numberOfEmployees": "50-100",
            "description": "Empresa especializada em desenvolvimento web, e-commerce e sistemas com inteligência artificial"
          }
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sobre a PPlace
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A empresa que revoluciona negócios com tecnologia e IA. 
            Criadores do LeadPilot, o sistema que multiplica suas vendas.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Nossa História</h2>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                A PPlace nasceu em 2019 com uma missão clara: democratizar o acesso à tecnologia de ponta 
                para empresas de todos os tamanhos em todo o Brasil. Começamos como uma pequena startup 
                em São Paulo e hoje somos referência nacional em desenvolvimento web e sistemas com IA.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Nossa jornada começou quando percebemos que muitas empresas brasileiras estavam perdendo 
                oportunidades de vendas por não terem sites otimizados e sistemas eficientes de conversão. 
                Foi assim que nasceu nossa especialidade: criar soluções que realmente vendem.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Em 2022, lançamos nosso produto mais revolucionário: o <strong>LeadPilot</strong>. 
                Um sistema de inteligência artificial que qualifica leads automaticamente e aumenta 
                as conversões em até 300%. Hoje, o LeadPilot é usado por centenas de empresas em todo o Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Números de Impacto */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Nossos Números</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{achievement.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.label}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Nossa Equipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-purple-600 font-semibold">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.experience}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transformar negócios através da tecnologia, criando soluções que geram 
                  resultados reais e duradouros para empresas em todo o Brasil.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ser a empresa de tecnologia mais reconhecida do Brasil, 
                  presente em todas as cidades e revolucionando o mercado digital.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Inovação, qualidade, transparência e foco total nos resultados dos nossos clientes. 
                  Acreditamos na tecnologia como ferramenta de transformação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Junte-se às centenas de empresas que confiam na PPlace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Falar com Especialista
              </Button>
            </Link>
            <Link to="/leadpilot">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Conhecer o LeadPilot
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
