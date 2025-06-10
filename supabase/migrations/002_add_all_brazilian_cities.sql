
-- Limpar dados existentes para recriar com dados completos
DELETE FROM public.cities;
DELETE FROM public.states;

-- Inserir todos os estados brasileiros
INSERT INTO public.states (name, code, region) VALUES
-- Norte
('Acre', 'AC', 'Norte'),
('Amapá', 'AP', 'Norte'),
('Amazonas', 'AM', 'Norte'),
('Pará', 'PA', 'Norte'),
('Rondônia', 'RO', 'Norte'),
('Roraima', 'RR', 'Norte'),
('Tocantins', 'TO', 'Norte'),
-- Nordeste
('Alagoas', 'AL', 'Nordeste'),
('Bahia', 'BA', 'Nordeste'),
('Ceará', 'CE', 'Nordeste'),
('Maranhão', 'MA', 'Nordeste'),
('Paraíba', 'PB', 'Nordeste'),
('Pernambuco', 'PE', 'Nordeste'),
('Piauí', 'PI', 'Nordeste'),
('Rio Grande do Norte', 'RN', 'Nordeste'),
('Sergipe', 'SE', 'Nordeste'),
-- Centro-Oeste
('Goiás', 'GO', 'Centro-Oeste'),
('Mato Grosso', 'MT', 'Centro-Oeste'),
('Mato Grosso do Sul', 'MS', 'Centro-Oeste'),
('Distrito Federal', 'DF', 'Centro-Oeste'),
-- Sudeste
('Espírito Santo', 'ES', 'Sudeste'),
('Minas Gerais', 'MG', 'Sudeste'),
('Rio de Janeiro', 'RJ', 'Sudeste'),
('São Paulo', 'SP', 'Sudeste'),
-- Sul
('Paraná', 'PR', 'Sul'),
('Rio Grande do Sul', 'RS', 'Sul'),
('Santa Catarina', 'SC', 'Sul')
ON CONFLICT (code) DO UPDATE SET name = EXCLUDED.name, region = EXCLUDED.region;

-- Inserir principais cidades de cada estado (baseado na Wikipedia)
INSERT INTO public.cities (name, state_id, slug, population) VALUES

-- ACRE (AC)
('Rio Branco', (SELECT id FROM states WHERE code = 'AC'), 'rio-branco', 413418),
('Cruzeiro do Sul', (SELECT id FROM states WHERE code = 'AC'), 'cruzeiro-do-sul', 89760),
('Sena Madureira', (SELECT id FROM states WHERE code = 'AC'), 'sena-madureira', 45612),
('Tarauacá', (SELECT id FROM states WHERE code = 'AC'), 'tarauaca', 42418),
('Feijó', (SELECT id FROM states WHERE code = 'AC'), 'feijo', 33128),

-- ALAGOAS (AL)
('Maceió', (SELECT id FROM states WHERE code = 'AL'), 'maceio', 1025360),
('Arapiraca', (SELECT id FROM states WHERE code = 'AL'), 'arapiraca', 234185),
('Palmeira dos Índios', (SELECT id FROM states WHERE code = 'AL'), 'palmeira-dos-indios', 72991),
('Rio Largo', (SELECT id FROM states WHERE code = 'AL'), 'rio-largo', 71171),
('Penedo', (SELECT id FROM states WHERE code = 'AL'), 'penedo', 66027),

-- AMAPÁ (AP)
('Macapá', (SELECT id FROM states WHERE code = 'AP'), 'macapa', 512902),
('Santana', (SELECT id FROM states WHERE code = 'AP'), 'santana', 123096),
('Laranjal do Jari', (SELECT id FROM states WHERE code = 'AP'), 'laranjal-do-jari', 44246),
('Oiapoque', (SELECT id FROM states WHERE code = 'AP'), 'oiapoque', 25514),
('Mazagão', (SELECT id FROM states WHERE code = 'AP'), 'mazagao', 21904),

-- AMAZONAS (AM)
('Manaus', (SELECT id FROM states WHERE code = 'AM'), 'manaus', 2063547),
('Parintins', (SELECT id FROM states WHERE code = 'AM'), 'parintins', 113965),
('Itacoatiara', (SELECT id FROM states WHERE code = 'AM'), 'itacoatiara', 102701),
('Manacapuru', (SELECT id FROM states WHERE code = 'AM'), 'manacapuru', 93700),
('Coari', (SELECT id FROM states WHERE code = 'AM'), 'coari', 85097),

-- BAHIA (BA)
('Salvador', (SELECT id FROM states WHERE code = 'BA'), 'salvador', 2886698),
('Feira de Santana', (SELECT id FROM states WHERE code = 'BA'), 'feira-de-santana', 619609),
('Vitória da Conquista', (SELECT id FROM states WHERE code = 'BA'), 'vitoria-da-conquista', 341128),
('Camaçari', (SELECT id FROM states WHERE code = 'BA'), 'camacari', 304302),
('Juazeiro', (SELECT id FROM states WHERE code = 'BA'), 'juazeiro', 218162),
('Lauro de Freitas', (SELECT id FROM states WHERE code = 'BA'), 'lauro-de-freitas', 201635),
('Itabuna', (SELECT id FROM states WHERE code = 'BA'), 'itabuna', 213223),
('Jequié', (SELECT id FROM states WHERE code = 'BA'), 'jequie', 155722),
('Teixeira de Freitas', (SELECT id FROM states WHERE code = 'BA'), 'teixeira-de-freitas', 160487),
('Alagoinhas', (SELECT id FROM states WHERE code = 'BA'), 'alagoinhas', 155921),

-- CEARÁ (CE)
('Fortaleza', (SELECT id FROM states WHERE code = 'CE'), 'fortaleza', 2703391),
('Caucaia', (SELECT id FROM states WHERE code = 'CE'), 'caucaia', 368566),
('Juazeiro do Norte', (SELECT id FROM states WHERE code = 'CE'), 'juazeiro-do-norte', 274207),
('Maracanaú', (SELECT id FROM states WHERE code = 'CE'), 'maracanau', 229389),
('Sobral', (SELECT id FROM states WHERE code = 'CE'), 'sobral', 208935),
('Crato', (SELECT id FROM states WHERE code = 'CE'), 'crato', 132123),
('Itapipoca', (SELECT id FROM states WHERE code = 'CE'), 'itapipoca', 131692),
('Maranguape', (SELECT id FROM states WHERE code = 'CE'), 'maranguape', 129604),
('Iguatu', (SELECT id FROM states WHERE code = 'CE'), 'iguatu', 103735),
('Quixadá', (SELECT id FROM states WHERE code = 'CE'), 'quixada', 87987),

-- DISTRITO FEDERAL (DF)
('Brasília', (SELECT id FROM states WHERE code = 'DF'), 'brasilia', 3094325),
('Gama', (SELECT id FROM states WHERE code = 'DF'), 'gama', 151912),
('Taguatinga', (SELECT id FROM states WHERE code = 'DF'), 'taguatinga', 390814),
('Ceilândia', (SELECT id FROM states WHERE code = 'DF'), 'ceilandia', 498000),
('Planaltina', (SELECT id FROM states WHERE code = 'DF'), 'planaltina', 215254),

-- ESPÍRITO SANTO (ES)
('Vitória', (SELECT id FROM states WHERE code = 'ES'), 'vitoria', 365855),
('Vila Velha', (SELECT id FROM states WHERE code = 'ES'), 'vila-velha', 501325),
('Cariacica', (SELECT id FROM states WHERE code = 'ES'), 'cariacica', 383917),
('Serra', (SELECT id FROM states WHERE code = 'ES'), 'serra', 527240),
('Linhares', (SELECT id FROM states WHERE code = 'ES'), 'linhares', 176688),
('Cachoeiro de Itapemirim', (SELECT id FROM states WHERE code = 'ES'), 'cachoeiro-de-itapemirim', 210589),
('São Mateus', (SELECT id FROM states WHERE code = 'ES'), 'sao-mateus', 132642),
('Colatina', (SELECT id FROM states WHERE code = 'ES'), 'colatina', 123400),
('Guarapari', (SELECT id FROM states WHERE code = 'ES'), 'guarapari', 127701),
('Aracruz', (SELECT id FROM states WHERE code = 'ES'), 'aracruz', 104557),

-- GOIÁS (GO)
('Goiânia', (SELECT id FROM states WHERE code = 'GO'), 'goiania', 1536097),
('Aparecida de Goiânia', (SELECT id FROM states WHERE code = 'GO'), 'aparecida-de-goiania', 542090),
('Anápolis', (SELECT id FROM states WHERE code = 'GO'), 'anapolis', 391772),
('Rio Verde', (SELECT id FROM states WHERE code = 'GO'), 'rio-verde', 235647),
('Luziânia', (SELECT id FROM states WHERE code = 'GO'), 'luziania', 220788),
('Águas Lindas de Goiás', (SELECT id FROM states WHERE code = 'GO'), 'aguas-lindas-de-goias', 212440),
('Valparaíso de Goiás', (SELECT id FROM states WHERE code = 'GO'), 'valparaiso-de-goias', 176177),
('Trindade', (SELECT id FROM states WHERE code = 'GO'), 'trindade', 129430),
('Formosa', (SELECT id FROM states WHERE code = 'GO'), 'formosa', 123684),
('Novo Gama', (SELECT id FROM states WHERE code = 'GO'), 'novo-gama', 115778),

-- MARANHÃO (MA)
('São Luís', (SELECT id FROM states WHERE code = 'MA'), 'sao-luis', 1115932),
('Imperatriz', (SELECT id FROM states WHERE code = 'MA'), 'imperatriz', 259980),
('São José de Ribamar', (SELECT id FROM states WHERE code = 'MA'), 'sao-jose-de-ribamar', 180213),
('Timon', (SELECT id FROM states WHERE code = 'MA'), 'timon', 174027),
('Caxias', (SELECT id FROM states WHERE code = 'MA'), 'caxias', 165274),
('Codó', (SELECT id FROM states WHERE code = 'MA'), 'codo', 122597),
('Paço do Lumiar', (SELECT id FROM states WHERE code = 'MA'), 'paco-do-lumiar', 119049),
('Açailândia', (SELECT id FROM states WHERE code = 'MA'), 'acailandia', 113467),
('Bacabal', (SELECT id FROM states WHERE code = 'MA'), 'bacabal', 104633),
('Balsas', (SELECT id FROM states WHERE code = 'MA'), 'balsas', 95001),

-- MATO GROSSO (MT)
('Cuiabá', (SELECT id FROM states WHERE code = 'MT'), 'cuiaba', 676468),
('Várzea Grande', (SELECT id FROM states WHERE code = 'MT'), 'varzea-grande', 284971),
('Rondonópolis', (SELECT id FROM states WHERE code = 'MT'), 'rondonopolis', 252996),
('Sinop', (SELECT id FROM states WHERE code = 'MT'), 'sinop', 146005),
('Tangará da Serra', (SELECT id FROM states WHERE code = 'MT'), 'tangara-da-serra', 107794),
('Cáceres', (SELECT id FROM states WHERE code = 'MT'), 'caceres', 95202),
('Sorriso', (SELECT id FROM states WHERE code = 'MT'), 'sorriso', 91593),
('Lucas do Rio Verde', (SELECT id FROM states WHERE code = 'MT'), 'lucas-do-rio-verde', 66444),
('Barra do Garças', (SELECT id FROM states WHERE code = 'MT'), 'barra-do-garcas', 61498),
('Primavera do Leste', (SELECT id FROM states WHERE code = 'MT'), 'primavera-do-leste', 60705),

-- MATO GROSSO DO SUL (MS)
('Campo Grande', (SELECT id FROM states WHERE code = 'MS'), 'campo-grande', 906092),
('Dourados', (SELECT id FROM states WHERE code = 'MS'), 'dourados', 225495),
('Três Lagoas', (SELECT id FROM states WHERE code = 'MS'), 'tres-lagoas', 123281),
('Corumbá', (SELECT id FROM states WHERE code = 'MS'), 'corumba', 112058),
('Ponta Porã', (SELECT id FROM states WHERE code = 'MS'), 'ponta-pora', 93937),
('Naviraí', (SELECT id FROM states WHERE code = 'MS'), 'navirai', 55689),
('Nova Andradina', (SELECT id FROM states WHERE code = 'MS'), 'nova-andradina', 53596),
('Aquidauana', (SELECT id FROM states WHERE code = 'MS'), 'aquidauana', 47871),
('Sidrolândia', (SELECT id FROM states WHERE code = 'MS'), 'sidrolandia', 58832),
('Maracaju', (SELECT id FROM states WHERE code = 'MS'), 'maracaju', 47713),

-- MINAS GERAIS (MG)
('Belo Horizonte', (SELECT id FROM states WHERE code = 'MG'), 'belo-horizonte', 2521564),
('Uberlândia', (SELECT id FROM states WHERE code = 'MG'), 'uberlandia', 699097),
('Contagem', (SELECT id FROM states WHERE code = 'MG'), 'contagem', 668949),
('Juiz de Fora', (SELECT id FROM states WHERE code = 'MG'), 'juiz-de-fora', 568873),
('Betim', (SELECT id FROM states WHERE code = 'MG'), 'betim', 444784),
('Montes Claros', (SELECT id FROM states WHERE code = 'MG'), 'montes-claros', 413487),
('Ribeirão das Neves', (SELECT id FROM states WHERE code = 'MG'), 'ribeirao-das-neves', 334858),
('Uberaba', (SELECT id FROM states WHERE code = 'MG'), 'uberaba', 340277),
('Governador Valadares', (SELECT id FROM states WHERE code = 'MG'), 'governador-valadares', 281046),
('Ipatinga', (SELECT id FROM states WHERE code = 'MG'), 'ipatinga', 263410),
('Sete Lagoas', (SELECT id FROM states WHERE code = 'MG'), 'sete-lagoas', 243845),
('Divinópolis', (SELECT id FROM states WHERE code = 'MG'), 'divinopolis', 240408),
('Santa Luzia', (SELECT id FROM states WHERE code = 'MG'), 'santa-luzia', 218298),
('Ibirité', (SELECT id FROM states WHERE code = 'MG'), 'ibirite', 182153),
('Poços de Caldas', (SELECT id FROM states WHERE code = 'MG'), 'pocos-de-caldas', 168641),

-- PARÁ (PA)
('Belém', (SELECT id FROM states WHERE code = 'PA'), 'belem', 1393399),
('Ananindeua', (SELECT id FROM states WHERE code = 'PA'), 'ananindeua', 535547),
('Santarém', (SELECT id FROM states WHERE code = 'PA'), 'santarem', 308339),
('Marabá', (SELECT id FROM states WHERE code = 'PA'), 'maraba', 283542),
('Parauapebas', (SELECT id FROM states WHERE code = 'PA'), 'parauapebas', 208273),
('Castanhal', (SELECT id FROM states WHERE code = 'PA'), 'castanhal', 200508),
('Abaetetuba', (SELECT id FROM states WHERE code = 'PA'), 'abaetetuba', 159585),
('Cametá', (SELECT id FROM states WHERE code = 'PA'), 'cameta', 139364),
('Marituba', (SELECT id FROM states WHERE code = 'PA'), 'marituba', 131790),
('Altamira', (SELECT id FROM states WHERE code = 'PA'), 'altamira', 117255),

-- PARAÍBA (PB)
('João Pessoa', (SELECT id FROM states WHERE code = 'PB'), 'joao-pessoa', 817511),
('Campina Grande', (SELECT id FROM states WHERE code = 'PB'), 'campina-grande', 407472),
('Santa Rita', (SELECT id FROM states WHERE code = 'PB'), 'santa-rita', 137057),
('Patos', (SELECT id FROM states WHERE code = 'PB'), 'patos', 108192),
('Bayeux', (SELECT id FROM states WHERE code = 'PB'), 'bayeux', 103489),
('Sousa', (SELECT id FROM states WHERE code = 'PB'), 'sousa', 70419),
('Cajazeiras', (SELECT id FROM states WHERE code = 'PB'), 'cajazeiras', 64518),
('Cabedelo', (SELECT id FROM states WHERE code = 'PB'), 'cabedelo', 67745),
('Guarabira', (SELECT id FROM states WHERE code = 'PB'), 'guarabira', 58929),
('Mamanguape', (SELECT id FROM states WHERE code = 'PB'), 'mamanguape', 46227),

-- PARANÁ (PR)
('Curitiba', (SELECT id FROM states WHERE code = 'PR'), 'curitiba', 1773733),
('Londrina', (SELECT id FROM states WHERE code = 'PR'), 'londrina', 575377),
('Maringá', (SELECT id FROM states WHERE code = 'PR'), 'maringa', 430157),
('Ponta Grossa', (SELECT id FROM states WHERE code = 'PR'), 'ponta-grossa', 358838),
('Cascavel', (SELECT id FROM states WHERE code = 'PR'), 'cascavel', 332333),
('São José dos Pinhais', (SELECT id FROM states WHERE code = 'PR'), 'sao-jose-dos-pinhais', 329058),
('Foz do Iguaçu', (SELECT id FROM states WHERE code = 'PR'), 'foz-do-iguacu', 256088),
('Colombo', (SELECT id FROM states WHERE code = 'PR'), 'colombo', 243726),
('Guarapuava', (SELECT id FROM states WHERE code = 'PR'), 'guarapuava', 182887),
('Paranaguá', (SELECT id FROM states WHERE code = 'PR'), 'paranagua', 156174),

-- PERNAMBUCO (PE)
('Recife', (SELECT id FROM states WHERE code = 'PE'), 'recife', 1555039),
('Jaboatão dos Guararapes', (SELECT id FROM states WHERE code = 'PE'), 'jaboatao-dos-guararapes', 706867),
('Olinda', (SELECT id FROM states WHERE code = 'PE'), 'olinda', 393115),
('Bandeira Branca', (SELECT id FROM states WHERE code = 'PE'), 'bandeira-branca', 351686),
('Caruaru', (SELECT id FROM states WHERE code = 'PE'), 'caruaru', 356128),
('Petrolina', (SELECT id FROM states WHERE code = 'PE'), 'petrolina', 354317),
('Paulista', (SELECT id FROM states WHERE code = 'PE'), 'paulista', 329117),
('Cabo de Santo Agostinho', (SELECT id FROM states WHERE code = 'PE'), 'cabo-de-santo-agostinho', 207932),
('Camaragibe', (SELECT id FROM states WHERE code = 'PE'), 'camaragibe', 158015),
('Garanhuns', (SELECT id FROM states WHERE code = 'PE'), 'garanhuns', 140550),

-- PIAUÍ (PI)
('Teresina', (SELECT id FROM states WHERE code = 'PI'), 'teresina', 868075),
('Parnaíba', (SELECT id FROM states WHERE code = 'PI'), 'parnaiba', 153332),
('Picos', (SELECT id FROM states WHERE code = 'PI'), 'picos', 78431),
('Piripiri', (SELECT id FROM states WHERE code = 'PI'), 'piripiri', 65675),
('Floriano', (SELECT id FROM states WHERE code = 'PI'), 'floriano', 59747),
('Barras', (SELECT id FROM states WHERE code = 'PI'), 'barras', 45675),
('União', (SELECT id FROM states WHERE code = 'PI'), 'uniao', 44718),
('Altos', (SELECT id FROM states WHERE code = 'PI'), 'altos', 40757),
('Pedro II', (SELECT id FROM states WHERE code = 'PI'), 'pedro-ii', 38918),
('Campo Maior', (SELECT id FROM states WHERE code = 'PI'), 'campo-maior', 47080),

-- RIO DE JANEIRO (RJ)
('Rio de Janeiro', (SELECT id FROM states WHERE code = 'RJ'), 'rio-de-janeiro', 6747815),
('São Gonçalo', (SELECT id FROM states WHERE code = 'RJ'), 'sao-goncalo', 1091737),
('Duque de Caxias', (SELECT id FROM states WHERE code = 'RJ'), 'duque-de-caxias', 924624),
('Nova Iguaçu', (SELECT id FROM states WHERE code = 'RJ'), 'nova-iguacu', 821128),
('Niterói', (SELECT id FROM states WHERE code = 'RJ'), 'niteroi', 515317),
('Belford Roxo', (SELECT id FROM states WHERE code = 'RJ'), 'belford-roxo', 513118),
('São João de Meriti', (SELECT id FROM states WHERE code = 'RJ'), 'sao-joao-de-meriti', 472906),
('Campos dos Goytacazes', (SELECT id FROM states WHERE code = 'RJ'), 'campos-dos-goytacazes', 507548),
('Petrópolis', (SELECT id FROM states WHERE code = 'RJ'), 'petropolis', 306678),
('Volta Redonda', (SELECT id FROM states WHERE code = 'RJ'), 'volta-redonda', 273988),

-- RIO GRANDE DO NORTE (RN)
('Natal', (SELECT id FROM states WHERE code = 'RN'), 'natal', 890480),
('Mossoró', (SELECT id FROM states WHERE code = 'RN'), 'mossoro', 300618),
('Parnamirim', (SELECT id FROM states WHERE code = 'RN'), 'parnamirim', 267036),
('São Gonçalo do Amarante', (SELECT id FROM states WHERE code = 'RN'), 'sao-goncalo-do-amarante', 106364),
('Macaíba', (SELECT id FROM states WHERE code = 'RN'), 'macaiba', 87081),
('Ceará-Mirim', (SELECT id FROM states WHERE code = 'RN'), 'ceara-mirim', 73046),
('Caicó', (SELECT id FROM states WHERE code = 'RN'), 'caico', 68343),
('Açu', (SELECT id FROM states WHERE code = 'RN'), 'acu', 58131),
('Currais Novos', (SELECT id FROM states WHERE code = 'RN'), 'currais-novos', 45000),
('Nova Cruz', (SELECT id FROM states WHERE code = 'RN'), 'nova-cruz', 37171),

-- RIO GRANDE DO SUL (RS)
('Porto Alegre', (SELECT id FROM states WHERE code = 'RS'), 'porto-alegre', 1332570),
('Caxias do Sul', (SELECT id FROM states WHERE code = 'RS'), 'caxias-do-sul', 517451),
('Pelotas', (SELECT id FROM states WHERE code = 'RS'), 'pelotas', 343132),
('Canoas', (SELECT id FROM states WHERE code = 'RS'), 'canoas', 346616),
('Santa Maria', (SELECT id FROM states WHERE code = 'RS'), 'santa-maria', 285159),
('Gravataí', (SELECT id FROM states WHERE code = 'RS'), 'gravatai', 281519),
('Viamão', (SELECT id FROM states WHERE code = 'RS'), 'viamao', 255183),
('Novo Hamburgo', (SELECT id FROM states WHERE code = 'RS'), 'novo-hamburgo', 247780),
('São Leopoldo', (SELECT id FROM states WHERE code = 'RS'), 'sao-leopoldo', 237757),
('Rio Grande', (SELECT id FROM states WHERE code = 'RS'), 'rio-grande', 211965),

-- RONDÔNIA (RO)
('Porto Velho', (SELECT id FROM states WHERE code = 'RO'), 'porto-velho', 539354),
('Ji-Paraná', (SELECT id FROM states WHERE code = 'RO'), 'ji-parana', 130009),
('Ariquemes', (SELECT id FROM states WHERE code = 'RO'), 'ariquemes', 107345),
('Vilhena', (SELECT id FROM states WHERE code = 'RO'), 'vilhena', 102220),
('Cacoal', (SELECT id FROM states WHERE code = 'RO'), 'cacoal', 88507),
('Rolim de Moura', (SELECT id FROM states WHERE code = 'RO'), 'rolim-de-moura', 62804),
('Guajará-Mirim', (SELECT id FROM states WHERE code = 'RO'), 'guajara-mirim', 48588),
('Jaru', (SELECT id FROM states WHERE code = 'RO'), 'jaru', 62187),
('Ouro Preto do Oeste', (SELECT id FROM states WHERE code = 'RO'), 'ouro-preto-do-oeste', 40936),
('Buritis', (SELECT id FROM states WHERE code = 'RO'), 'buritis', 41907),

-- RORAIMA (RR)
('Boa Vista', (SELECT id FROM states WHERE code = 'RR'), 'boa-vista', 419652),
('Rorainópolis', (SELECT id FROM states WHERE code = 'RR'), 'rorainopolis', 31690),
('Caracaraí', (SELECT id FROM states WHERE code = 'RR'), 'caracarai', 22581),
('Alto Alegre', (SELECT id FROM states WHERE code = 'RR'), 'alto-alegre', 16448),
('Mucajaí', (SELECT id FROM states WHERE code = 'RR'), 'mucajai', 17787),
('Cantá', (SELECT id FROM states WHERE code = 'RR'), 'canta', 19882),
('Normandia', (SELECT id FROM states WHERE code = 'RR'), 'normandia', 11439),
('Bonfim', (SELECT id FROM states WHERE code = 'RR'), 'bonfim', 13327),
('Pacaraima', (SELECT id FROM states WHERE code = 'RR'), 'pacaraima', 17004),
('São Luiz', (SELECT id FROM states WHERE code = 'RR'), 'sao-luiz', 7583),

-- SANTA CATARINA (SC)
('Florianópolis', (SELECT id FROM states WHERE code = 'SC'), 'florianopolis', 508826),
('Joinville', (SELECT id FROM states WHERE code = 'SC'), 'joinville', 597658),
('Blumenau', (SELECT id FROM states WHERE code = 'SC'), 'blumenau', 361855),
('São José', (SELECT id FROM states WHERE code = 'SC'), 'sao-jose', 250208),
('Criciúma', (SELECT id FROM states WHERE code = 'SC'), 'criciuma', 217074),
('Chapecó', (SELECT id FROM states WHERE code = 'SC'), 'chapeco', 220367),
('Itajaí', (SELECT id FROM states WHERE code = 'SC'), 'itajai', 215895),
('Jaraguá do Sul', (SELECT id FROM states WHERE code = 'SC'), 'jaragua-do-sul', 180634),
('Lages', (SELECT id FROM states WHERE code = 'SC'), 'lages', 157735),
('Palhoça', (SELECT id FROM states WHERE code = 'SC'), 'palhoca', 171314),

-- SÃO PAULO (SP)
('São Paulo', (SELECT id FROM states WHERE code = 'SP'), 'sao-paulo', 12396372),
('Guarulhos', (SELECT id FROM states WHERE code = 'SP'), 'guarulhos', 1392121),
('Campinas', (SELECT id FROM states WHERE code = 'SP'), 'campinas', 1223237),
('São Bernardo do Campo', (SELECT id FROM states WHERE code = 'SP'), 'sao-bernardo-do-campo', 844483),
('Santo André', (SELECT id FROM states WHERE code = 'SP'), 'santo-andre', 721368),
('Osasco', (SELECT id FROM states WHERE code = 'SP'), 'osasco', 698418),
('São José dos Campos', (SELECT id FROM states WHERE code = 'SP'), 'sao-jose-dos-campos', 729737),
('Ribeirão Preto', (SELECT id FROM states WHERE code = 'SP'), 'ribeirao-preto', 711825),
('Sorocaba', (SELECT id FROM states WHERE code = 'SP'), 'sorocaba', 687357),
('Santos', (SELECT id FROM states WHERE code = 'SP'), 'santos', 433966),
('Mauá', (SELECT id FROM states WHERE code = 'SP'), 'maua', 477552),
('São José do Rio Preto', (SELECT id FROM states WHERE code = 'SP'), 'sao-jose-do-rio-preto', 464983),
('Mogi das Cruzes', (SELECT id FROM states WHERE code = 'SP'), 'mogi-das-cruzes', 440769),
('Diadema', (SELECT id FROM states WHERE code = 'SP'), 'diadema', 426757),
('Jundiaí', (SELECT id FROM states WHERE code = 'SP'), 'jundiai', 423006),
('Carapicuíba', (SELECT id FROM states WHERE code = 'SP'), 'carapicuiba', 396587),
('Piracicaba', (SELECT id FROM states WHERE code = 'SP'), 'piracicaba', 407252),
('Bauru', (SELECT id FROM states WHERE code = 'SP'), 'bauru', 379297),
('Itaquaquecetuba', (SELECT id FROM states WHERE code = 'SP'), 'itaquaquecetuba', 365779),
('São Vicente', (SELECT id FROM states WHERE code = 'SP'), 'sao-vicente', 365798),

-- SERGIPE (SE)
('Aracaju', (SELECT id FROM states WHERE code = 'SE'), 'aracaju', 664908),
('Nossa Senhora do Socorro', (SELECT id FROM states WHERE code = 'SE'), 'nossa-senhora-do-socorro', 182465),
('Lagarto', (SELECT id FROM states WHERE code = 'SE'), 'lagarto', 106618),
('Itabaiana', (SELECT id FROM states WHERE code = 'SE'), 'itabaiana', 94696),
('São Cristóvão', (SELECT id FROM states WHERE code = 'SE'), 'sao-cristovao', 88463),
('Estância', (SELECT id FROM states WHERE code = 'SE'), 'estancia', 69468),
('Barra dos Coqueiros', (SELECT id FROM states WHERE code = 'SE'), 'barra-dos-coqueiros', 32635),
('Simão Dias', (SELECT id FROM states WHERE code = 'SE'), 'simao-dias', 40219),
('Propriá', (SELECT id FROM states WHERE code = 'SE'), 'propria', 29159),
('Tobias Barreto', (SELECT id FROM states WHERE code = 'SE'), 'tobias-barreto', 52230),

-- TOCANTINS (TO)
('Palmas', (SELECT id FROM states WHERE code = 'TO'), 'palmas', 313349),
('Araguaína', (SELECT id FROM states WHERE code = 'TO'), 'araguaina', 183381),
('Gurupi', (SELECT id FROM states WHERE code = 'TO'), 'gurupi', 87545),
('Porto Nacional', (SELECT id FROM states WHERE code = 'TO'), 'porto-nacional', 53010),
('Paraíso do Tocantins', (SELECT id FROM states WHERE code = 'TO'), 'paraiso-do-tocantins', 51716),
('Colinas do Tocantins', (SELECT id FROM states WHERE code = 'TO'), 'colinas-do-tocantins', 36941),
('Guaraí', (SELECT id FROM states WHERE code = 'TO'), 'guarai', 24680),
('Tocantinópolis', (SELECT id FROM states WHERE code = 'TO'), 'tocantinopolis', 24389),
('Formoso do Araguaia', (SELECT id FROM states WHERE code = 'TO'), 'formoso-do-araguaia', 19785),
('Miranorte', (SELECT id FROM states WHERE code = 'TO'), 'miranorte', 13308)

ON CONFLICT (slug, state_id) DO UPDATE SET 
  name = EXCLUDED.name,
  population = EXCLUDED.population;

-- Criar índices para melhorar performance
CREATE INDEX IF NOT EXISTS idx_cities_state_id ON public.cities(state_id);
CREATE INDEX IF NOT EXISTS idx_cities_slug ON public.cities(slug);
CREATE INDEX IF NOT EXISTS idx_states_code ON public.states(code);
CREATE INDEX IF NOT EXISTS idx_states_region ON public.states(region);

-- Comentários para documentação
COMMENT ON TABLE public.cities IS 'Tabela com todas as principais cidades do Brasil baseada na Wikipedia';
COMMENT ON TABLE public.states IS 'Tabela com todos os estados e o Distrito Federal do Brasil';
COMMENT ON COLUMN public.cities.slug IS 'Slug da cidade para URLs amigáveis';
COMMENT ON COLUMN public.cities.population IS 'População estimada da cidade';
COMMENT ON COLUMN public.states.region IS 'Região geográfica do Brasil (Norte, Nordeste, Centro-Oeste, Sudeste, Sul)';
