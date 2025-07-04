import { type ImageProps } from 'next/image'
import glob from 'fast-glob'

async function loadEntries<T extends { date: string }>(
  directory: string,
  metaName: string,
  locale: string = 'en',
): Promise<Array<MDXEntry<T>>> {
  // Try to load locale-specific files first
  const localeFiles = await glob(`**/page.${locale}.mdx`, { cwd: `src/app/[locale]/${directory}` })
  // Also load default files as fallback
  const defaultFiles = await glob(`**/page.mdx`, { cwd: `src/app/[locale]/${directory}` })
  
  const entries = await Promise.all([
    // Load locale-specific files
    ...localeFiles.map(async (filename) => {
      const metadata = (await import(`../app/[locale]/${directory}/${filename}`))[metaName] as T
      return {
        ...metadata,
        metadata,
        href: `/${directory}/${filename.replace(/\/page\.[^.]+\.mdx$/, '')}`,
        isLocalized: true,
      }
    }),
    // Load default files only if no locale-specific version exists
    ...defaultFiles
      .filter(file => !localeFiles.some(localeFile => 
        localeFile.replace(`.${locale}.mdx`, '.mdx') === file
      ))
      .map(async (filename) => {
        const metadata = (await import(`../app/[locale]/${directory}/${filename}`))[metaName] as T
        return {
          ...metadata,
          metadata,
          href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
          isLocalized: false,
        }
      }),
  ])
  
  return entries.sort((a, b) => b.date.localeCompare(a.date))
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T> = T & { href: string; metadata: T; isLocalized?: boolean }

export interface Article {
  date: string
  title: string
  description: string
  author: {
    name: string
    role: string
    image: ImagePropsWithOptionalAlt
  }
}

export interface CaseStudy {
  date: string
  client: string
  title: string
  description: string
  summary: Array<string>
  logo: ImageProps['src']
  image: ImagePropsWithOptionalAlt
  service: string
  testimonial: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}

export function loadArticles(locale: string = 'en') {
  return loadEntries<Article>('blog', 'article', locale)
}

export function loadCaseStudies(locale: string = 'en') {
  return loadEntries<CaseStudy>('work', 'caseStudy', locale)
}

export async function loadArticle(slug: string, locale: string = 'en'): Promise<{
  component: any
  metadata: Article
} | null> {
  try {
    // Try loading locale-specific version first
    const localeSpecific = await import(`../app/[locale]/blog/${slug}/page.${locale}.mdx`)
    return {
      component: localeSpecific,
      metadata: localeSpecific.article
    }
  } catch {
    try {
      // Fall back to default version
      const defaultVersion = await import(`../app/[locale]/blog/${slug}/page.mdx`)
      return {
        component: defaultVersion,
        metadata: defaultVersion.article
      }
    } catch {
      return null
    }
  }
}

export async function loadCaseStudy(slug: string, locale: string = 'en'): Promise<{
  component: any
  metadata: CaseStudy
} | null> {
  try {
    // Try loading locale-specific version first
    const localeSpecific = await import(`../app/[locale]/work/${slug}/page.${locale}.mdx`)
    return {
      component: localeSpecific,
      metadata: localeSpecific.caseStudy
    }
  } catch {
    try {
      // Fall back to default version
      const defaultVersion = await import(`../app/[locale]/work/${slug}/page.mdx`)
      return {
        component: defaultVersion,
        metadata: defaultVersion.caseStudy
      }
    } catch {
      return null
    }
  }
}
