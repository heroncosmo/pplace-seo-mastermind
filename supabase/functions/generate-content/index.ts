
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

    const { cityId, serviceId, cityName, serviceName, stateName } = await req.json();

    // Verificar se o conteúdo já existe
    const { data: existingContent } = await supabaseClient
      .from('generated_content')
      .select('*')
      .eq('city_id', cityId)
      .eq('service_id', serviceId)
      .single();

    if (existingContent) {
      return new Response(JSON.stringify(existingContent), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Gerar conteúdo com Mistral AI
    const prompt = `Crie um conteúdo SEO otimizado em português para o serviço "${serviceName}" na cidade "${cityName}, ${stateName}". 

Inclua:
1. Título otimizado para SEO (máximo 60 caracteres)
2. Meta description (máximo 160 caracteres)
3. Conteúdo detalhado com pelo menos 800 palavras
4. Palavras-chave relevantes para SEO local
5. Informações sobre a cidade e como o serviço pode beneficiar empresas locais
6. Call-to-actions persuasivos

Formato de resposta em JSON:
{
  "title": "título otimizado",
  "description": "meta description",
  "content": "conteúdo completo em HTML",
  "keywords": "palavras-chave separadas por vírgula"
}`;

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
            content: 'Você é um especialista em SEO e marketing digital que cria conteúdo otimizado para empresas de tecnologia.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 4000
      }),
    });

    const mistralData = await mistralResponse.json();
    const generatedText = mistralData.choices[0].message.content;
    
    let contentData;
    try {
      contentData = JSON.parse(generatedText);
    } catch (e) {
      // Se não conseguir fazer parse do JSON, criar estrutura manual
      contentData = {
        title: `${serviceName} em ${cityName} - PPlace`,
        description: `Especialistas em ${serviceName} em ${cityName}, ${stateName}. Tecnologia de ponta que multiplica resultados.`,
        content: generatedText,
        keywords: `${serviceName.toLowerCase()}, ${cityName.toLowerCase()}, ${stateName.toLowerCase()}, desenvolvimento web`
      };
    }

    // Salvar no banco de dados
    const { data: savedContent, error } = await supabaseClient
      .from('generated_content')
      .insert({
        city_id: cityId,
        service_id: serviceId,
        title: contentData.title,
        description: contentData.description,
        content: contentData,
        meta_keywords: contentData.keywords
      })
      .select()
      .single();

    if (error) {
      console.error('Erro ao salvar conteúdo:', error);
      throw error;
    }

    return new Response(JSON.stringify(savedContent), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Erro na geração de conteúdo:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
