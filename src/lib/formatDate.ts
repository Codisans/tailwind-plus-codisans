export function formatDate(dateString: string, locale: string = 'en-US') {
  let parts = dateString.split('-')
  let hasDay = parts.length > 2

  let formattedDate = new Date(`${dateString}Z`).toLocaleDateString(locale, {
    day: hasDay ? 'numeric' : undefined,
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })

  // Capitalize month name for Spanish locales
  if (locale.startsWith('es')) {
    formattedDate = formattedDate.replace(/^(\w)/, (match) => match.toUpperCase())
  }

  return formattedDate
}
