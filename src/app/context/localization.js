export function getLocalizedText(field, language, fallback = '') {
  if (!field) return fallback;
  if (typeof field === 'string') return field;
  if (typeof field === 'object' && !Array.isArray(field) && field !== null) {
    if (field[language] && typeof field[language] === 'string') return field[language];
    if (field[language?.toLowerCase()] && typeof field[language?.toLowerCase()] === 'string') return field[language.toLowerCase()];
    if (field[language?.toUpperCase()] && typeof field[language?.toUpperCase()] === 'string') return field[language.toUpperCase()];
    for (const val of Object.values(field)) {
      if (typeof val === 'string') return val;
    }
    return fallback;
  }
  return fallback;
}
