
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Moda Premium',
      category: 'ecommerce',
      city: 'São Paulo',
      client: 'Fashion Store SP',
      description: 'Loja virtual completa com sistema de gestão e pagamentos integrados',
      results: 'Aumento de 400% nas vendas online em 3 meses',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'Stripe', 'AWS'],
      link: '#'
    },
    {
      id: 2,
      title: 'Landing Page Imobiliária',
      category: 'landing-page',
      city: 'Rio de Janeiro',
      client: 'Imóveis Premium RJ',
      description: 'Landing page otimizada para captura de leads imobiliários',
      results: 'Conversão de 35% - 3x acima da média do mercado',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Tailwind', 'LeadPilot'],
      link: '#'
    },
    {
      id: 3,
      title: 'Sistema LeadPilot Clínica',
      category: 'leadpilot',
      city: 'Belo Horizonte',
      client: 'Clínica Saúde Total',
      description: 'Implementação completa do LeadPilot para agendamentos',
      results: 'Redução de 80% no tempo de agendamento',
      image: '/api/placeholder/400/300',
      technologies: ['LeadPilot', 'IA', 'WhatsApp API'],
      link: '#'
    },
    {
      id: 4,
      title: 'App Delivery Restaurante',
      category: 'aplicativo',
      city: 'Curitiba',
      client: 'Restaurante Sabor & Arte',
      description: 'Aplicativo completo para delivery com pagamento integrado',
      results: 'Aumento de 300% nos pedidos via app',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Firebase', 'Stripe'],
      link: '#'
    },
    {
      id: 5,
      title: 'Site Consultoria Empresarial',
      category: 'site',
      city: 'Salvador',
      client: 'Consultores Estratégicos BA',
      description: 'Site institucional com área de membros e blog integrado',
      results: 'Aumento de 250% em leads qualificados',
      image: '/api/placeholder/400/300',
      technologies: ['WordPress', 'SEO', 'Analytics'],
      link: '#'
    },
    {
      id: 6,
      title: 'Sistema IA para Vendas',
      category: 'sistema-ia',
      city: 'Porto Alegre',
      client: 'TechSales RS',
      description: 'Sistema personalizado com IA para análise preditiva de vendas',
      results: 'Precisão de 95% na previsão de vendas',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'TensorFlow', 'React', 'API'],
      link: '#'
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'landing-page', label: 'Landing Pages' },
    { id: 'leadpilot', label: 'LeadPilot' },
    { id: 'aplicativo', label: 'Aplicativos' },
    { id: 'site', label: 'Sites' },
    { id: 'sistema-ia', label: 'Sistemas IA' }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const testimonials = [
    {
      name: 'Carlos Silva',
      company: 'Fashion Store SP',
      text: 'A PPlace transformou nosso negócio! As vendas online quadruplicaram em apenas 3 meses.',
      rating: 5
    },
    {
      name: 'Ana Beatriz',
      company: 'Imóveis Premium RJ',
      text: 'Landing page com conversão incrível. Nunca tivemos tantos leads qualificados!',
      rating: 5
    },
    {
      name: 'Dr. João Santos',
      company: 'Clínica Saúde Total',
      text: 'O LeadPilot revolucionou nossos agendamentos. Automatização perfeita!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Portfólio PPlace - Cases de Sucesso em Tecnologia e Marketing Digital"
        description="Conheça nosso portfólio com mais de 100 projetos de sucesso: e-commerce, landing pages, LeadPilot, apps e sistemas com IA. Cases reais, resultados comprovados."
        keywords="portfolio pplace, cases sucesso, projetos web, ecommerce cases, landing page portfolio, leadpilot cases"
        canonical="https://pplace.com.br/portfolio"
        schema={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": "Portfólio PPlace",
          "description": "Casos de sucesso e projetos realizados"
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nosso Portfólio
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Mais de 1000 projetos entregues, resultados reais, clientes satisfeitos. 
            Conheça alguns dos nossos cases de maior sucesso.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">1000+</div>
              <p className="text-purple-100">Projetos Entregues</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <p className="text-purple-100">Cidades Atendidas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">99%</div>
              <p className="text-purple-100">Satisfação</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">300%</div>
              <p className="text-purple-100">Aumento Médio Vendas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeFilter === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button className="bg-white text-black hover:bg-gray-100">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                    <span className="text-sm text-gray-500">{project.city}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-purple-600 font-semibold">{project.client}</p>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-sm font-semibold text-green-800">📈 {project.results}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Tecnologias:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Ver Case Completo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            O que Nossos Clientes Dizem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-purple-600">{testimonial.company}</p>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-600 italic">
                    "{testimonial.text}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Nossa Metodologia de Sucesso
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Análise Estratégica',
                description: 'Estudamos seu negócio, concorrência e oportunidades de mercado'
              },
              {
                step: '02',
                title: 'Planejamento',
                description: 'Criamos estratégia personalizada com metas claras e métricas'
              },
              {
                step: '03',
                title: 'Desenvolvimento',
                description: 'Implementamos com tecnologias modernas e melhores práticas'
              },
              {
                step: '04',
                title: 'Otimização',
                description: 'Monitoramos, analisamos e otimizamos para máximos resultados'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl font-bold text-purple-600 mb-4">{item.step}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para ser nosso Próximo Case de Sucesso?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transforme seu negócio como fizemos com centenas de empresas em todo o Brasil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Solicitar Meu Projeto
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

export default PortfolioPage;
