import { type StaticImageData } from 'next/image'

import { type ServiceSlug } from '@/lib/types'

type LocalizedText = {
  en: string
  es?: string
}

export type LightweightProjectDefinition = {
  slug: string
  client: string
  title: LocalizedText
  description: LocalizedText
  date: string
  image: StaticImageData
  service: ServiceSlug[]
  url: string
}

// Add projects without a written case study here. They appear on the Work page
// and link directly to their live URL. See README.md for a copyable example.
export const lightweightProjects: LightweightProjectDefinition[] = []
