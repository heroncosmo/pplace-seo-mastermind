
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const MISTRAL_API_KEY = "K2FTrdPR6cbVMlEmClZeIbNZr2aUG0vH";
const MISTRAL_API_ENDPOINT = "https://api.mistral.ai/v1/chat/completions";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const { topic, category } = await req.json();

    const blogTopics = [
      'Como aumentar vendas online em 2024',
      'Inteligência Artificial no atendimento ao cliente',
      'SEO local para pequenas empresas',
      'E-commerce: tendências que dominam o mercado',
      'Landing pages que convertem mais',
      'Automação de processos com IA',
      'Marketing digital para startups',
      'Aplicativos mobile: guia completo',
      'Chatbots: revolução no atendimento'
    ];

    const selectedTopic = topic || blogTopics[Math.floor(Math.random() * blogTopics.length)];

    const prompt = `Escreva um artigo completo de blog sobre "${selectedTopic}" para uma empresa de tecnologia chamada PPlace.

O artigo deve ter:
1. Título atrativo e otimizado para SEO
2. Introdução envolvente
3. Pelo menos 6 seções com subtítulos
4. Conclusão com call-to-action
5. Mínimo de 1500 palavras
6. Tom profissional mas acessível
7. Exemplos práticos e dados quando possível

Formate em HTML com tags apropriadas (h2, h3, p, ul, li, strong, em).

Responda apenas com o HTML do artigo, sem explicações adicionais.`;

    const mistralResponse = await fetch(MISTRAL_API_ENDPOINT, {
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
            content: 'Você é um especialista em marketing digital e tecnologia que escreve artigos técnicos de alta qualidade.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.8,
        max_tokens: 6000
      }),
    });

    const mistralData = await mistralResponse.json();
    const content = mistralData.choices[0].message.content;
    
    // Extrair título do conteúdo
    const titleMatch = content.match(/<h1[^>]*>(.*?)<\/h1>/i) || content.match(/^#\s*(.+)$/m);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]*>/g, '') : selectedTopic;
    
    // Criar slug
    const slug = title.toLowerCase()
      .replace(/[áàâãä]/g, 'a')
      .replace(/[éèêë]/g, 'e')
      .replace(/[íìîï]/g, 'i')
      .replace(/[óòôõö]/g, 'o')
      .replace(/[úùûü]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');

    // Extrair excerpt
    const paragraphs = content.match(/<p[^>]*>(.*?)<\/p>/gi);
    const excerpt = paragraphs && paragraphs[0] 
      ? paragraphs[0].replace(/<[^>]*>/g, '').substring(0, 200) + '...'
      : title.substring(0, 200) + '...';

    // Salvar no banco
    const { data: savedPost, error } = await supabaseClient
      .from('blog_posts')
      .insert({
        title,
        slug: `${slug}-${Date.now()}`,
        excerpt,
        content,
        category: category || 'Tecnologia',
        tags: ['pplace', 'tecnologia', 'marketing digital'],
        published: true
      })
      .select()
      .single();

    if (error) {
      console.error('Erro ao salvar post:', error);
      throw error;
    }

    return new Response(JSON.stringify(savedPost), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Erro na geração de post:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
