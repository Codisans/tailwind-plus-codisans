import { Badge } from './Badge'
import { getTranslations } from 'next-intl/server'

export const ServiceTag = async ({
  service,
  label,
}: {
  service: string
  label?: string
}) => {
  const t = await getTranslations('services')

  const getServiceColor = (service: string) => {
    switch (service) {
      case 'software-development':
        return 'red'
      case 'e-commerce':
        return 'green'
      case 'ai-automation':
        return 'blue'
      case 'cms-websites':
        return 'yellow'
      default:
        return 'zinc'
    }
  }
  return (
    <Badge color={getServiceColor(service)}>
      {label ?? t(`${service}.tag`)}
    </Badge>
  )
}
