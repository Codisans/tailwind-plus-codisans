import { Badge } from './Badge'
import { getTranslations } from 'next-intl/server'

export const ServiceTag = async ({ service }: { service: string }) => {
  const t = await getTranslations('services.tags')

  const getServiceColor = (service: string) => {
    switch (service) {
      case 'software-development':
        return 'red'
      case 'e-commerce':
        return 'green'
      case 'ai-automation':
        return 'blue'
      case 'custom-cms':
        return 'yellow'
    }
  }
  return <Badge color={getServiceColor(service)}>{t(`${service}`)}</Badge>
}
