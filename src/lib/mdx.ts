import { type ImageProps } from 'next/image'

// Import all blog posts statically
import * as yourGpuEn from '../app/[locale]/blog/your-gpu-is-the-new-printing-press/page.en.mdx'
import * as yourGpuEs from '../app/[locale]/blog/your-gpu-is-the-new-printing-press/page.es.mdx'
import * as digitalDarwinismEn from '../app/[locale]/blog/the-new-digital-darwinism/page.en.mdx'
import * as digitalDarwinismEs from '../app/[locale]/blog/the-new-digital-darwinism/page.es.mdx'
import * as businessUpgradeEn from '../app/[locale]/blog/your-business-is-held-together-by-caffeine-and-chaos-time-for-an-upgrade/page.en.mdx'
import * as businessUpgradeEs from '../app/[locale]/blog/your-business-is-held-together-by-caffeine-and-chaos-time-for-an-upgrade/page.es.mdx'

// Import all case studies statically
import * as familyFundEn from '../app/[locale]/work/family-fund/page.en.mdx'
import * as familyFundEs from '../app/[locale]/work/family-fund/page.es.mdx'
import * as phobiaEn from '../app/[locale]/work/phobia/page.en.mdx'
import * as phobiaEs from '../app/[locale]/work/phobia/page.es.mdx'
import * as unsealEn from '../app/[locale]/work/unseal/page.en.mdx'
import * as unsealEs from '../app/[locale]/work/unseal/page.es.mdx'

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

// Static blog post registry
const blogPostRegistry = {
  en: [
    {
      slug: 'your-gpu-is-the-new-printing-press',
      module: yourGpuEn,
      metadata: yourGpuEn.article,
    },
    {
      slug: 'the-new-digital-darwinism', 
      module: digitalDarwinismEn,
      metadata: digitalDarwinismEn.article,
    },
    {
      slug: 'your-business-is-held-together-by-caffeine-and-chaos-time-for-an-upgrade',
      module: businessUpgradeEn,
      metadata: businessUpgradeEn.article,
    },
  ],
  es: [
    {
      slug: 'your-gpu-is-the-new-printing-press',
      module: yourGpuEs,
      metadata: yourGpuEs.article,
    },
    {
      slug: 'the-new-digital-darwinism',
      module: digitalDarwinismEs, 
      metadata: digitalDarwinismEs.article,
    },
    {
      slug: 'your-business-is-held-together-by-caffeine-and-chaos-time-for-an-upgrade',
      module: businessUpgradeEs,
      metadata: businessUpgradeEs.article,
    },
  ],
}

// Static case study registry
const caseStudyRegistry = {
  en: [
    {
      slug: 'family-fund',
      module: familyFundEn,
      metadata: familyFundEn.caseStudy,
    },
    {
      slug: 'phobia',
      module: phobiaEn,
      metadata: phobiaEn.caseStudy,
    },
    {
      slug: 'unseal',
      module: unsealEn,
      metadata: unsealEn.caseStudy,
    },
  ],
  es: [
    {
      slug: 'family-fund',
      module: familyFundEs,
      metadata: familyFundEs.caseStudy,
    },
    {
      slug: 'phobia',
      module: phobiaEs,
      metadata: phobiaEs.caseStudy,
    },
    {
      slug: 'unseal',
      module: unsealEs,
      metadata: unsealEs.caseStudy,
    },
  ],
}

export function loadArticles(locale: string = 'en'): Promise<Array<MDXEntry<Article>>> {
  const posts = blogPostRegistry[locale as keyof typeof blogPostRegistry] || blogPostRegistry.en
  
  const articles = posts.map(post => ({
    ...post.metadata,
    metadata: post.metadata,
    href: `/blog/${post.slug}`,
    isLocalized: locale !== 'en',
  }))
  
  return Promise.resolve(articles.sort((a, b) => b.date.localeCompare(a.date)))
}

export async function loadArticle(slug: string, locale: string = 'en'): Promise<{
  component: any
  metadata: Article
} | null> {
  const posts = blogPostRegistry[locale as keyof typeof blogPostRegistry] || blogPostRegistry.en
  const post = posts.find(p => p.slug === slug)
  
  if (!post) {
    return null
  }
  
  return {
    component: post.module,
    metadata: post.metadata
  }
}

export function loadCaseStudies(locale: string = 'en'): Promise<Array<MDXEntry<CaseStudy>>> {
  const caseStudies = caseStudyRegistry[locale as keyof typeof caseStudyRegistry] || caseStudyRegistry.en
  
  const studies = caseStudies.map(study => ({
    ...study.metadata,
    metadata: study.metadata,
    href: `/work/${study.slug}`,
    isLocalized: locale !== 'en',
  }))
  
  return Promise.resolve(studies.sort((a, b) => b.date.localeCompare(a.date)))
}

export async function loadCaseStudy(slug: string, locale: string = 'en'): Promise<{
  component: any
  metadata: CaseStudy
} | null> {
  const caseStudies = caseStudyRegistry[locale as keyof typeof caseStudyRegistry] || caseStudyRegistry.en
  const study = caseStudies.find(s => s.slug === slug)
  
  if (!study) {
    return null
  }
  
  return {
    component: study.module,
    metadata: study.metadata
  }
}
