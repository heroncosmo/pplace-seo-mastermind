
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

    const { cityId, serviceId, cityName, serviceName, stateName } = await req.json();

    console.log('Gerando conteúdo para:', { cityName, serviceName, stateName });

    // Prompt otimizado para o Mistral AI
    const prompt = `
    Você é um especialista em marketing digital e copywriting. Crie um conteúdo completo e persuasivo para uma página sobre "${serviceName}" na cidade de "${cityName}, ${stateName}".

    A empresa é a PPlace, líder em tecnologia e IA no Brasil. Criamos sites, e-commerce, landing pages, aplicativos e o revolucionário sistema LeadPilot.

    Gere um conteúdo em HTML que inclua:

    1. Uma descrição envolvente sobre o serviço em ${cityName}
    2. Benefícios específicos para empresas locais
    3. Por que escolher a PPlace em ${cityName}
    4. Casos de sucesso (pode ser fictício mas realista)
    5. Diferenciais competitivos
    6. Chamadas para ação persuasivas

    O conteúdo deve ser:
    - Otimizado para SEO local
    - Persuasivo e focado em conversão
    - Profissional mas acessível
    - Rico em palavras-chave relevantes
    - Mínimo 800 palavras

    Retorne apenas o HTML puro sem tags html, head ou body. Use tags semânticas como h2, h3, p, ul, li, strong, em.
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
            content: 'Você é um especialista em marketing digital e copywriting para empresas de tecnologia. Crie conteúdo persuasivo e otimizado para SEO.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro na API Mistral: ${response.status}`);
    }

    const data = await response.json();
    const generatedContent = data.choices[0].message.content;

    // Gerar título e descrição SEO
    const title = `${serviceName} em ${cityName} - PPlace | Especialistas em Tecnologia`;
    const description = `${serviceName} profissional em ${cityName}. A PPlace oferece soluções completas em tecnologia com IA. Orçamento grátis em 2h!`;
    const metaKeywords = `${serviceName}, ${cityName}, ${stateName}, desenvolvimento, tecnologia, IA, PPlace, sites, e-commerce`;

    // Salvar no banco de dados
    const { data: savedContent, error } = await supabaseClient
      .from('generated_content')
      .upsert({
        city_id: cityId,
        service_id: serviceId,
        title: title,
        description: description,
        content: { content: generatedContent },
        meta_keywords: metaKeywords
      }, {
        onConflict: 'city_id,service_id'
      })
      .select()
      .single();

    if (error) {
      console.error('Erro ao salvar conteúdo:', error);
      throw error;
    }

    console.log('Conteúdo gerado e salvo com sucesso');

    return new Response(JSON.stringify(savedContent), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Erro na função generate-content:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Erro interno do servidor',
      details: error.toString()
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
