
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: '10 Dicas para Aumentar Conversões do seu E-commerce em 2024',
      excerpt: 'Descubra estratégias comprovadas que podem multiplicar as vendas da sua loja virtual em até 300%.',
      category: 'E-commerce',
      readTime: '8 min',
      date: '15 Jan 2024',
      slug: '10-dicas-aumentar-conversoes-ecommerce-2024',
      image: '/api/placeholder/400/200'
    },
    {
      id: 2,
      title: 'LeadPilot: Como a IA Está Revolucionando Vendas no Brasil',
      excerpt: 'Entenda como a inteligência artificial está transformando a forma como empresas vendem e atendem clientes.',
      category: 'Inteligência Artificial',
      readTime: '12 min',
      date: '10 Jan 2024',
      slug: 'leadpilot-ia-revolucionando-vendas-brasil',
      image: '/api/placeholder/400/200'
    },
    {
      id: 3,
      title: 'SEO Local: Como Aparecer em Primeiro no Google da sua Cidade',
      excerpt: 'Estratégias específicas para dominar as buscas locais e atrair mais clientes da sua região.',
      category: 'SEO',
      readTime: '10 min',
      date: '08 Jan 2024',
      slug: 'seo-local-aparecer-primeiro-google-cidade',
      image: '/api/placeholder/400/200'
    },
    {
      id: 4,
      title: 'Landing Pages que Convertem: Guia Completo 2024',
      excerpt: 'Aprenda a criar páginas de conversão que transformam visitantes em clientes pagantes.',
      category: 'Marketing Digital',
      readTime: '15 min',
      date: '05 Jan 2024',
      slug: 'landing-pages-convertem-guia-completo-2024',
      image: '/api/placeholder/400/200'
    },
    {
      id: 5,
      title: 'Aplicativos Mobile: Tendências e Oportunidades para 2024',
      excerpt: 'Descubra as principais tendências em apps móveis e como elas podem impulsionar seu negócio.',
      category: 'Desenvolvimento',
      readTime: '7 min',
      date: '02 Jan 2024',
      slug: 'aplicativos-mobile-tendencias-oportunidades-2024',
      image: '/api/placeholder/400/200'
    },
    {
      id: 6,
      title: 'Automação com IA: Reduza Custos e Aumente Eficiência',
      excerpt: 'Como implementar automação inteligente nos seus processos empresariais.',
      category: 'Inteligência Artificial',
      readTime: '9 min',
      date: '28 Dez 2023',
      slug: 'automacao-ia-reduzir-custos-aumentar-eficiencia',
      image: '/api/placeholder/400/200'
    }
  ];

  const categories = ['Todos', 'E-commerce', 'Inteligência Artificial', 'SEO', 'Marketing Digital', 'Desenvolvimento'];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Blog PPlace - Dicas de Tecnologia, Marketing Digital e IA"
        description="Blog especializado em tecnologia, marketing digital, e-commerce, SEO e inteligência artificial. Dicas práticas para multiplicar seus resultados online."
        keywords="blog tecnologia, marketing digital, ecommerce dicas, seo local, inteligencia artificial, leadpilot"
        canonical="https://pplace.com.br/blog"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Blog PPlace",
          "description": "Conteúdo especializado em tecnologia e marketing digital"
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Blog PPlace
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Conteúdo especializado em tecnologia, marketing digital e inteligência artificial. 
            Dicas práticas para multiplicar seus resultados online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold text-yellow-400 mb-2">50+</div>
              <p className="text-purple-100">Artigos Publicados</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold text-yellow-400 mb-2">10K+</div>
              <p className="text-purple-100">Leitores Mensais</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold text-yellow-400 mb-2">100%</div>
              <p className="text-purple-100">Conteúdo Prático</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-lg font-semibold transition-all bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Post Destacado */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">📌 Post em Destaque</h2>
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-6xl">🚀</span>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="mb-4">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {posts[1].category}
                    </span>
                    <span className="text-gray-500 text-sm ml-4">{posts[1].date} • {posts[1].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{posts[1].title}</h3>
                  <p className="text-gray-600 mb-6">{posts[1].excerpt}</p>
                  <Link to={`/blog/${posts[1].slug}`}>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Ler Artigo Completo
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Grid de Posts */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">📚 Últimos Artigos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.filter(post => post.id !== 2).map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button className="bg-white text-black hover:bg-gray-100">
                      Ler Artigo
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full">
                      Ler Mais
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            📧 Receba Conteúdo Exclusivo
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Cadastre-se e receba semanalmente dicas práticas de tecnologia e marketing digital
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8">
              Cadastrar
            </Button>
          </div>
          <p className="text-sm text-purple-200 mt-4">
            ✅ Conteúdo exclusivo • ✅ Sem spam • ✅ Descadastro fácil
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
