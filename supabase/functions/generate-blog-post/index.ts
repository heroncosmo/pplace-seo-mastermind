
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

    // Lista de tópicos relevantes se não especificado
    const topics = [
      'Como a IA está revolucionando o e-commerce brasileiro',
      'Tendências de desenvolvimento web em 2024',
      'Por que sua empresa precisa de um site responsivo',
      'O futuro das landing pages com inteligência artificial',
      'Como escolher a melhor empresa de desenvolvimento web',
      'ROI de investimentos em tecnologia para PMEs',
      'Chatbots vs Atendimento humano: qual escolher?',
      'SEO local: como aparecer no Google da sua cidade',
      'E-commerce: estratégias para aumentar conversões',
      'Aplicativos mobile: nativo vs híbrido'
    ];

    const selectedTopic = topic || topics[Math.floor(Math.random() * topics.length)];
    const selectedCategory = category || 'Tecnologia';

    const prompt = `
    Você é um especialista em marketing digital e tecnologia. Escreva um artigo completo e envolvente sobre "${selectedTopic}".

    O artigo deve ser para o blog da PPlace, empresa líder em tecnologia e IA no Brasil.

    Estrutura do artigo:
    1. Introdução impactante (150-200 palavras)
    2. 3-4 seções principais com subtítulos (H2)
    3. Cada seção com 200-300 palavras
    4. Conclusão com call-to-action para a PPlace
    5. Mínimo 1200 palavras total

    Requisitos:
    - Tom profissional mas acessível
    - Incluir estatísticas relevantes (podem ser realistas/estimadas)
    - Mencionar casos práticos e exemplos
    - Otimizado para SEO
    - Incluir chamadas sutis para os serviços da PPlace
    - Usar HTML semântico (h1, h2, h3, p, ul, li, strong, em)

    Não inclua tags html, head ou body. Apenas o conteúdo do artigo.
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
            content: 'Você é um especialista em marketing de conteúdo e tecnologia. Escreva artigos envolventes e informativos.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.8,
        max_tokens: 3000
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro na API Mistral: ${response.status}`);
    }

    const data = await response.json();
    const generatedContent = data.choices[0].message.content;

    // Extrair título do conteúdo gerado ou usar o tópico
    const title = selectedTopic;
    
    // Gerar excerpt
    const excerpt = `Descubra ${selectedTopic.toLowerCase()} e como isso pode transformar seu negócio. Insights exclusivos da PPlace, líder em tecnologia.`;

    // Salvar no banco de dados
    const { data: savedPost, error } = await supabaseClient
      .from('blog_posts')
      .insert({
        title: title,
        content: generatedContent,
        excerpt: excerpt,
        category: selectedCategory,
        published: true
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
