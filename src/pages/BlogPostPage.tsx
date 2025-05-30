
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const BlogPostPage = () => {
  const { slug } = useParams();

  // Simulated blog post data - in real app this would come from API/CMS
  const post = {
    title: 'LeadPilot: Como a IA Está Revolucionando Vendas no Brasil',
    excerpt: 'Entenda como a inteligência artificial está transformando a forma como empresas vendem e atendem clientes.',
    content: `
      <h2>A Revolução da IA nas Vendas</h2>
      <p>A inteligência artificial não é mais ficção científica. No Brasil, empresas de todos os tamanhos estão descobrindo como a IA pode multiplicar seus resultados de vendas de forma automática e inteligente.</p>
      
      <h3>O que é o LeadPilot?</h3>
      <p>O LeadPilot é nossa solução revolucionária que combina inteligência artificial com automação de vendas. Desenvolvido especificamente para o mercado brasileiro, o sistema aprende com cada interação e se torna mais eficiente a cada dia.</p>
      
      <h3>Principais Benefícios:</h3>
      <ul>
        <li><strong>Qualificação Automática:</strong> A IA analisa cada lead e determina sua probabilidade de conversão</li>
        <li><strong>Atendimento 24/7:</strong> Chatbot inteligente que nunca dorme e sempre converte</li>
        <li><strong>Análise Preditiva:</strong> Prevê quais leads têm maior potencial de compra</li>
        <li><strong>Automação Completa:</strong> Do primeiro contato até o fechamento da venda</li>
      </ul>
      
      <h3>Cases de Sucesso</h3>
      <p>Uma empresa de São Paulo implementou o LeadPilot e viu suas vendas aumentarem 400% em apenas 30 dias. O segredo? A IA conseguiu identificar padrões que humanos não conseguiam ver.</p>
      
      <h3>Como Implementar?</h3>
      <p>A implementação do LeadPilot é surpreendentemente simples:</p>
      <ol>
        <li>Análise do seu negócio atual</li>
        <li>Configuração personalizada da IA</li>
        <li>Treinamento da equipe</li>
        <li>Monitoramento e otimização contínua</li>
      </ol>
      
      <h3>O Futuro das Vendas é Agora</h3>
      <p>Empresas que não adotarem IA nas vendas ficarão para trás. O LeadPilot não é apenas uma ferramenta, é uma vantagem competitiva que pode definir o futuro do seu negócio.</p>
    `,
    category: 'Inteligência Artificial',
    readTime: '12 min',
    date: '10 Jan 2024',
    author: 'Equipe PPlace'
  };

  const relatedPosts = [
    {
      title: '10 Dicas para Aumentar Conversões do seu E-commerce',
      slug: '10-dicas-aumentar-conversoes-ecommerce',
      category: 'E-commerce'
    },
    {
      title: 'SEO Local: Como Aparecer em Primeiro no Google',
      slug: 'seo-local-aparecer-primeiro-google',
      category: 'SEO'
    },
    {
      title: 'Landing Pages que Convertem: Guia Completo',
      slug: 'landing-pages-convertem-guia-completo',
      category: 'Marketing Digital'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={`${post.title} | Blog PPlace`}
        description={post.excerpt}
        keywords={`${post.category.toLowerCase()}, leadpilot, inteligencia artificial, vendas, automacao`}
        canonical={`https://pplace.com.br/blog/${slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "author": {
            "@type": "Organization",
            "name": "PPlace"
          },
          "publisher": {
            "@type": "Organization",
            "name": "PPlace"
          },
          "datePublished": "2024-01-10"
        }}
      />
      
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-purple-600">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/blog" className="hover:text-purple-600">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Header do Post */}
            <header className="mb-12">
              <div className="mb-6">
                <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm ml-4">{post.date} • {post.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between pb-8 border-b">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">Especialistas em Tecnologia</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Compartilhar</Button>
                  <Button variant="outline" size="sm">Salvar</Button>
                </div>
              </div>
            </header>

            {/* Conteúdo do Post */}
            <article className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* CTA no meio do artigo */}
            <Card className="my-12 bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">
                  🚀 Quer Implementar o LeadPilot no seu Negócio?
                </h3>
                <p className="text-gray-600 mb-6">
                  Converse com nossos especialistas e descubra como multiplicar suas vendas com IA
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/leadpilot">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      Conhecer o LeadPilot
                    </Button>
                  </Link>
                  <Link to="/contato">
                    <Button size="lg" variant="outline">
                      Falar com Especialista
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {['LeadPilot', 'IA', 'Inteligência Artificial', 'Vendas', 'Automação', 'Marketing Digital'].map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-purple-100 hover:text-purple-700 cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Posts Relacionados */}
            <section className="border-t pt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Artigos Relacionados</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold w-fit">
                        {relatedPost.category}
                      </span>
                      <CardTitle className="text-lg">{relatedPost.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <Button variant="outline" className="w-full">
                          Ler Artigo
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Gostou do Conteúdo?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Receba mais artigos como este diretamente no seu e-mail
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none"
            />
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              Cadastrar
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
