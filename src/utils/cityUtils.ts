

export const cityToSlug = (cityName: string) => {
  return cityName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/[^a-z0-9-]/g, ''); // Remove caracteres especiais
};

export const slugToCity = (slug: string) => {
  if (!slug) return '';
  
  console.log('Convertendo slug para cidade:', slug);
  
  // Mapeamento específico para cidades com nomes compostos comuns
  const cityMappings: { [key: string]: string } = {
    'sao-paulo': 'São Paulo',
    'rio-de-janeiro': 'Rio de Janeiro',
    'belo-horizonte': 'Belo Horizonte',
    'porto-alegre': 'Porto Alegre',
    'sao-jose': 'São José',
    'sao-jose-dos-campos': 'São José dos Campos',
    'sao-jose-do-rio-preto': 'São José do Rio Preto',
    'sao-jose-dos-pinhais': 'São José dos Pinhais',
    'sao-bernardo-do-campo': 'São Bernardo do Campo',
    'santo-andre': 'Santo André',
    'nova-iguacu': 'Nova Iguaçu',
    'duque-de-caxias': 'Duque de Caxias',
    'campo-grande': 'Campo Grande',
    'sao-goncalo': 'São Gonçalo',
    'mogi-das-cruzes': 'Mogi das Cruzes',
    'ribeirao-preto': 'Ribeirão Preto',
    'sorocaba': 'Sorocaba',
    'santos': 'Santos',
    'joinville': 'Joinville',
    'contagem': 'Contagem',
    'aracaju': 'Aracaju',
    'feira-de-santana': 'Feira de Santana',
    'cuiaba': 'Cuiabá',
    'joao-pessoa': 'João Pessoa',
    'jaboatao-dos-guararapes': 'Jaboatão dos Guararapes',
    'uberlandia': 'Uberlândia',
    'campos-dos-goytacazes': 'Campos dos Goytacazes',
    'belford-roxo': 'Belford Roxo',
    'aparecida-de-goiania': 'Aparecida de Goiânia',
    'blumenau': 'Blumenau',
    'volta-redonda': 'Volta Redonda',
    'carapicuiba': 'Carapicuíba',
    'petropolis': 'Petrópolis',
    'canoas': 'Canoas',
    'cascavel': 'Cascavel',
    'franca': 'Franca',
    'ribeirao-das-neves': 'Ribeirão das Neves',
    'vila-velha': 'Vila Velha',
    'santa-maria': 'Santa Maria',
    'serra': 'Serra',
    'camaragibe': 'Camaragibe',
    'maua': 'Mauá',
    'sao-caetano-do-sul': 'São Caetano do Sul',
    'olinda': 'Olinda',
    'guaruja': 'Guarujá',
    'caruaru': 'Caruaru',
    'anapolis': 'Anápolis',
    'itaquaquecetuba': 'Itaquaquecetuba',
    'limeira': 'Limeira',
    'suzano': 'Suzano',
    'ponta-grossa': 'Ponta Grossa',
    'rio-branco': 'Rio Branco',
    'foz-do-iguacu': 'Foz do Iguaçu',
    'imperatriz': 'Imperatriz',
    'ipatinga': 'Ipatinga',
    'sao-vicente': 'São Vicente',
    'embu-das-artes': 'Embu das Artes',
    'sobral': 'Sobral',
    'uberaba': 'Uberaba',
    'presidente-prudente': 'Presidente Prudente',
    'americana': 'Americana',
    'praia-grande': 'Praia Grande',
    'toledo': 'Toledo',
    'cachoeirinha': 'Cachoeirinha',
    'santa-luzia': 'Santa Luzia',
    'camaçari': 'Camaçari',
    'rio-das-ostras': 'Rio das Ostras',
    'novo-hamburgo': 'Novo Hamburgo',
    'bauru': 'Bauru',
    'francisco-morato': 'Francisco Morato',
    'manaus': 'Manaus',
    'cosmorama': 'Cosmorama',
    'fortaleza': 'Fortaleza',
    'salvador': 'Salvador',
    'brasilia': 'Brasília',
    'curitiba': 'Curitiba',
    'recife': 'Recife',
    'goiania': 'Goiânia',
    'belem': 'Belém',
    'guarulhos': 'Guarulhos',
    'campinas': 'Campinas',
    'sao-luis': 'São Luís',
    'maceio': 'Maceió',
    'natal': 'Natal',
    'teresina': 'Teresina',
    'osasco': 'Osasco',
    'londrina': 'Londrina',
    'ananindeua': 'Ananindeua',
    'porto-velho': 'Porto Velho',
    'niteroi': 'Niterói',
    'caxias-do-sul': 'Caxias do Sul',
    'macapa': 'Macapá',
    'florianopolis': 'Florianópolis',
    'betim': 'Betim',
    'diadema': 'Diadema',
    'jundiai': 'Jundiaí',
    'campina-grande': 'Campina Grande',
    'piracicaba': 'Piracicaba',
    'cariacica': 'Cariacica',
    'montes-claros': 'Montes Claros',
    'boa-vista': 'Boa Vista',
    'taubate': 'Taubaté',
    'pelotas': 'Pelotas',
    'governador-valadares': 'Governador Valadares',
    'gravataí': 'Gravataí',
    'paulista': 'Paulista',
    'itabuna': 'Itabuna',
    'marilia': 'Marília',
    'maracanau': 'Maracanaú',
    'vitoria-da-conquista': 'Vitória da Conquista',
    'juiz-de-fora': 'Juiz de Fora',
    'palmas': 'Palmas',
    'nossa-senhora-do-socorro': 'Nossa Senhora do Socorro',
    'rondonopolis': 'Rondonópolis',
    'santa-barbara-d-oeste': 'Santa Bárbara d\'Oeste',
    'vilhena': 'Vilhena',
    'jequie': 'Jequié',
    'magé': 'Magé'
  };

  // Primeiro verifica se existe um mapeamento específico
  if (cityMappings[slug]) {
    console.log('Cidade encontrada no mapeamento:', cityMappings[slug]);
    return cityMappings[slug];
  }
  
  // Senão, usa a conversão padrão
  const converted = slug
    .split('-')
    .map(word => {
      // Palavras que devem ficar em minúsculo
      const lowerCaseWords = ['de', 'da', 'do', 'das', 'dos', 'e', 'em', 'na', 'no', 'nas', 'nos'];
      
      if (lowerCaseWords.includes(word.toLowerCase())) {
        return word.toLowerCase();
      }
      
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ')
    .trim();
    
  console.log('Cidade convertida padrão:', converted);
  return converted;
};

