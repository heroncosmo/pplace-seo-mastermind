
-- Criar tabela de estados
CREATE TABLE IF NOT EXISTS public.states (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  region TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de cidades
CREATE TABLE IF NOT EXISTS public.cities (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  state_id INTEGER REFERENCES public.states(id),
  slug TEXT NOT NULL,
  population INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(slug, state_id)
);

-- Criar tabela de serviços
CREATE TABLE IF NOT EXISTS public.services (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  base_price DECIMAL(10,2),
  category TEXT,
  features JSONB,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de conteúdo gerado
CREATE TABLE IF NOT EXISTS public.generated_content (
  id SERIAL PRIMARY KEY,
  city_id INTEGER REFERENCES public.cities(id),
  service_id INTEGER REFERENCES public.services(id),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content JSONB,
  meta_keywords TEXT,
  generated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(city_id, service_id)
);

-- Criar tabela de posts do blog
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT,
  author TEXT DEFAULT 'PPlace',
  category TEXT,
  tags TEXT[],
  featured_image TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Inserir estados brasileiros
INSERT INTO public.states (name, code, region) VALUES
('São Paulo', 'SP', 'Sudeste'),
('Rio de Janeiro', 'RJ', 'Sudeste'),
('Minas Gerais', 'MG', 'Sudeste'),
('Bahia', 'BA', 'Nordeste'),
('Paraná', 'PR', 'Sul'),
('Rio Grande do Sul', 'RS', 'Sul'),
('Pernambuco', 'PE', 'Nordeste'),
('Ceará', 'CE', 'Nordeste'),
('Santa Catarina', 'SC', 'Sul'),
('Goiás', 'GO', 'Centro-Oeste')
ON CONFLICT (code) DO NOTHING;

-- Inserir principais cidades
INSERT INTO public.cities (name, state_id, slug, population) VALUES
-- São Paulo
('São Paulo', 1, 'sao-paulo', 12000000),
('Campinas', 1, 'campinas', 1200000),
('Santos', 1, 'santos', 433000),
('Ribeirão Preto', 1, 'ribeirao-preto', 700000),
('Sorocaba', 1, 'sorocaba', 680000),
('Osasco', 1, 'osasco', 700000),
('São José dos Campos', 1, 'sao-jose-dos-campos', 730000),
('Guarulhos', 1, 'guarulhos', 1400000),
-- Rio de Janeiro
('Rio de Janeiro', 2, 'rio-de-janeiro', 6700000),
('Niterói', 2, 'niteroi', 515000),
('Duque de Caxias', 2, 'duque-de-caxias', 920000),
('Nova Iguaçu', 2, 'nova-iguacu', 800000),
-- Minas Gerais
('Belo Horizonte', 3, 'belo-horizonte', 2500000),
('Uberlândia', 3, 'uberlandia', 700000),
('Contagem', 3, 'contagem', 660000),
('Juiz de Fora', 3, 'juiz-de-fora', 570000)
ON CONFLICT (slug, state_id) DO NOTHING;

-- Inserir serviços completos
INSERT INTO public.services (name, slug, description, base_price, category, features) VALUES
('E-commerce', 'ecommerce', 'Lojas virtuais completas', 2999.00, 'Desenvolvimento Web', '["Integração com pagamentos", "Gestão de estoque", "Painel administrativo"]'),
('Landing Pages', 'landing-pages', 'Páginas de alta conversão', 899.00, 'Marketing Digital', '["Design responsivo", "Formulários inteligentes", "Otimização para conversão"]'),
('LeadPilot System', 'leadpilot', 'Sistema de IA para vendas', 4999.00, 'Inteligência Artificial', '["IA para qualificação", "Automação de funil", "Dashboard avançado"]'),
('Sites Institucionais', 'sites-institucionais', 'Sites profissionais', 1499.00, 'Desenvolvimento Web', '["Design moderno", "SEO otimizado", "CMS integrado"]'),
('Aplicativos Mobile', 'aplicativos', 'Apps para Android e iOS', 8999.00, 'Desenvolvimento Mobile', '["React Native", "Design UX/UI", "Push notifications"]'),
('Sistemas com IA', 'sistemas-ia', 'Automação inteligente', 12999.00, 'Inteligência Artificial', '["Chatbots", "Machine Learning", "Análise preditiva"]'),
('SEO Local', 'seo', 'Otimização para Google', 799.00, 'Marketing Digital', '["Auditoria SEO", "Link building", "Relatórios mensais"]'),
('Automação RPA', 'automacao-rpa', 'Robôs para processos', 5999.00, 'Automação', '["Automação de tarefas", "Integração sistemas", "Relatórios automáticos"]'),
('Chatbots IA', 'chatbots-ia', 'Assistentes virtuais', 3999.00, 'Inteligência Artificial', '["Processamento natural", "Integração WhatsApp", "Analytics avançado"]'),
('Business Intelligence', 'business-intelligence', 'Análise de dados', 7999.00, 'Análise de Dados', '["Dashboards interativos", "Data mining", "Relatórios automatizados"]')
ON CONFLICT (slug) DO NOTHING;

-- Habilitar RLS
ALTER TABLE public.cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.states ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.generated_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Políticas de leitura pública
CREATE POLICY "Public read access" ON public.cities FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.states FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.services FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.generated_content FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.blog_posts FOR SELECT USING (published = true);
