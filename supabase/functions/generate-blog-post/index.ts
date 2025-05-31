
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const MISTRAL_API_ENDPOINT = "https://api.mistral.ai/v1/chat/completions";
const MISTRAL_API_KEY = "K2FTrdPR6cbVMlEmClZeIbNZr2aUG0vH";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );

    const { topic, category } = await req.json();

    console.log('Gerando post do blog sobre:', { topic, category });

    const topics = [
      'Como a IA está revolucionando o e-commerce brasileiro em 2024',
      'Tendências de desenvolvimento web que sua empresa precisa conhecer',
      'Por que sua empresa precisa de um site responsivo e otimizado',
      'O futuro das landing pages com inteligência artificial',
      'Como escolher a melhor empresa de desenvolvimento web para seu negócio',
      'ROI de investimentos em tecnologia para pequenas e médias empresas',
      'Chatbots vs Atendimento humano: qual a melhor estratégia?',
      'SEO local: como aparecer no Google da sua cidade',
      'E-commerce: 10 estratégias comprovadas para aumentar conversões',
      'Aplicativos mobile: quando escolher desenvolvimento nativo vs híbrido',
      'Como o LeadPilot pode multiplicar suas vendas online',
      'Automação de processos: como a IA pode otimizar seu negócio'
    ];

    const selectedTopic = topic || topics[Math.floor(Math.random() * topics.length)];
    const selectedCategory = category || 'Tecnologia';

    const prompt = `
    Você é um especialista em marketing digital e tecnologia. Escreva um artigo completo e envolvente sobre "${selectedTopic}".

    O artigo é para o blog da PPlace, empresa líder em tecnologia e IA no Brasil, especializada em sites, e-commerce, aplicativos e sistemas como o LeadPilot.

    Estrutura do artigo:
    1. Introdução impactante que prenda o leitor (200-250 palavras)
    2. 4-5 seções principais com subtítulos H2 (cada seção 250-350 palavras)
    3. Conclusão com call-to-action para a PPlace (150-200 palavras)
    4. Total: mínimo 1500 palavras

    Requisitos obrigatórios:
    - Tom profissional mas acessível
    - Incluir dados e estatísticas relevantes (podem ser estimativas realistas)
    - Mencionar casos práticos e exemplos brasileiros
    - Otimizado para SEO com palavras-chave relevantes
    - Incluir menções sutis aos serviços da PPlace
    - Usar HTML semântico (h1, h2, h3, p, ul, li, strong, em)
    - Incluir pelo menos 3 dicas práticas actionáveis
    - Mencionar tendências atuais do mercado

    NÃO inclua tags html, head ou body. Apenas o conteúdo do artigo com tags semânticas.
    Comece com um H1 para o título principal.
    `;

    const response = await fetch(MISTRAL_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MISTRAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistral-large-latest',
        messages: [
          {
            role: 'system',
            content: 'Você é um especialista em marketing de conteúdo e tecnologia. Escreva artigos envolventes, informativos e otimizados para SEO.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.8,
        max_tokens: 4000
      }),
    });

    if (!response.ok) {
      console.error('Erro na API Mistral:', response.status, await response.text());
      throw new Error(`Erro na API Mistral: ${response.status}`);
    }

    const data = await response.json();
    const generatedContent = data.choices[0].message.content;

    const title = selectedTopic;
    const excerpt = `Descubra ${selectedTopic.toLowerCase()} e como isso pode transformar seu negócio. Insights exclusivos da PPlace, líder em tecnologia e IA.`;

    // Gerar slug para o post
    const slug = selectedTopic
      .toLowerCase()
      .replace(/[áàâãä]/g, 'a')
      .replace(/[éèêë]/g, 'e')
      .replace(/[íìîï]/g, 'i')
      .replace(/[óòôõö]/g, 'o')
      .replace(/[úùûü]/g, 'u')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    const { data: savedPost, error } = await supabaseClient
      .from('blog_posts')
      .insert({
        title: title,
        content: generatedContent,
        excerpt: excerpt,
        category: selectedCategory,
        published: true,
        slug: slug
      })
      .select()
      .single();

    if (error) {
      console.error('Erro ao salvar post:', error);
      throw error;
    }

    console.log('Post do blog gerado e salvo com sucesso');

    return new Response(JSON.stringify(savedPost), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Erro na função generate-blog-post:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Erro interno do servidor',
      details: error.toString()
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
