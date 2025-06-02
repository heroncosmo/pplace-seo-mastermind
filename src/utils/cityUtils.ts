
export const cityToSlug = (cityName: string) => {
  return cityName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/[^a-z0-9-]/g, ''); // Remove caracteres especiais
};

export const slugToCity = (slug: string) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/\bD\b/g, 'd') // Corrige "D" para "d" em casos como "d'Oeste"
    .replace(/\bDo\b/g, 'do')
    .replace(/\bDa\b/g, 'da')
    .replace(/\bDas\b/g, 'das')
    .replace(/\bDos\b/g, 'dos')
    .replace(/\bDe\b/g, 'de');
};
