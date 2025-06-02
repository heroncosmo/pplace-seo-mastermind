
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
  
  return slug
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
};
