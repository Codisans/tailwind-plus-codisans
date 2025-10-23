import { type ImageProps } from 'next/image'

// Import all blog posts statically
import * as yourGpuEn from '../app/[locale]/blog/your-gpu-is-the-new-printing-press/page.en.mdx'
import * as yourGpuEs from '../app/[locale]/blog/your-gpu-is-the-new-printing-press/page.es.mdx'
import * as digitalDarwinismEn from '../app/[locale]/blog/the-new-digital-darwinism/page.en.mdx'
import * as digitalDarwinismEs from '../app/[locale]/blog/the-new-digital-darwinism/page.es.mdx'
import * as businessUpgradeEn from '../app/[locale]/blog/your-business-is-held-together-by-caffeine-and-chaos-time-for-an-upgrade/page.en.mdx'
import * as businessUpgradeEs from '../app/[locale]/blog/your-business-is-held-together-by-caffeine-and-chaos-time-for-an-upgrade/page.es.mdx'

// Import all case studies statically
import * as keaiEn from '../app/[locale]/work/keai/page.en.mdx'
import * as keaiEs from '../app/[locale]/work/keai/page.es.mdx'
import * as laTorreAmbulanteEn from '../app/[locale]/work/la-torre-ambulante/page.en.mdx'
import * as laTorreAmbulanteEs from '../app/[locale]/work/la-torre-ambulante/page.es.mdx'
// import * as dcv87En from '../app/[locale]/work/dcv87/page.en.mdx'
// import * as dcv87Es from '../app/[locale]/work/dcv87/page.es.mdx'
import * as swidStudioEn from '../app/[locale]/work/swid-studio/page.en.mdx'
import * as swidStudioEs from '../app/[locale]/work/swid-studio/page.es.mdx'
import * as feliciHouseEn from '../app/[locale]/work/felici-house/page.en.mdx'
import * as feliciHouseEs from '../app/[locale]/work/felici-house/page.es.mdx'
import * as nuestrosTiemposEn from '../app/[locale]/work/nuestros-tiempos/page.en.mdx'
import * as nuestrosTiemposEs from '../app/[locale]/work/nuestros-tiempos/page.es.mdx'

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
  thumbnail: ImagePropsWithOptionalAlt
  image: ImagePropsWithOptionalAlt
  service: string
  testimonial: {
    author: {
      name: string
      role: string
    }
    content: string
  }
  url?: string
}

// Static blog post registry
const blogPostRegistry = {
  en: [
    {
      slug: 'your-gpu-is-the-new-printing-press',
      module: yourGpuEn,
      metadata: (yourGpuEn as any).article as Article,
    },
    {
      slug: 'the-new-digital-darwinism', 
      module: digitalDarwinismEn,
      metadata: (digitalDarwinismEn as any).article as Article,
    },
    {
      slug: 'your-business-is-held-together-by-caffeine-and-chaos-time-for-an-upgrade',
      module: businessUpgradeEn,
      metadata: (businessUpgradeEn as any).article as Article,
    },
  ],
  es: [
    {
      slug: 'your-gpu-is-the-new-printing-press',
      module: yourGpuEs,
      metadata: (yourGpuEs as any).article as Article,
    },
    {
      slug: 'the-new-digital-darwinism',
      module: digitalDarwinismEs, 
      metadata: (digitalDarwinismEs as any).article as Article,
    },
    {
      slug: 'your-business-is-held-together-by-caffeine-and-chaos-time-for-an-upgrade',
      module: businessUpgradeEs,
      metadata: (businessUpgradeEs as any).article as Article,
    },
  ],
}

// Static case study registry
const caseStudyRegistry = {
  en: [
    {
      slug: 'swid-studio',
      module: swidStudioEn,
      metadata: (swidStudioEn as any).caseStudy as CaseStudy,
    },
    {
      slug: 'keai',
      module: keaiEn,
      metadata: (keaiEn as any).caseStudy as CaseStudy,
    },
    {
      slug: 'nuestros-tiempos',
      module: nuestrosTiemposEn,
      metadata: (nuestrosTiemposEn as any).caseStudy as CaseStudy,
    },
    {
      slug: 'la-torre-ambulante',
      module: laTorreAmbulanteEn,
      metadata: (laTorreAmbulanteEn as any).caseStudy as CaseStudy,
    },
    // {
    //   slug: 'dcv87',
    //   module: dcv87En,
    //   metadata: (dcv87En as any).caseStudy as CaseStudy,
    // },
    {
      slug: 'felici-house',
      module: feliciHouseEn,
      metadata: (feliciHouseEn as any).caseStudy as CaseStudy,
    },
  ],
  es: [
    {
      slug: 'swid-studio',
      module: swidStudioEs,
      metadata: (swidStudioEs as any).caseStudy as CaseStudy,
    },
    {
      slug: 'keai',
      module: keaiEs,
      metadata: (keaiEs as any).caseStudy as CaseStudy,
    },
    {
      slug: 'nuestros-tiempos',
      module: nuestrosTiemposEs,
      metadata: (nuestrosTiemposEs as any).caseStudy as CaseStudy,
    },
    {
      slug: 'la-torre-ambulante',
      module: laTorreAmbulanteEs,
      metadata: (laTorreAmbulanteEs as any).caseStudy as CaseStudy,
    },
    // {
    //   slug: 'dcv87',
    //   module: dcv87Es,
    //   metadata: (dcv87Es as any).caseStudy as CaseStudy,
    // },
    {
      slug: 'felici-house',
      module: feliciHouseEs,
      metadata: (feliciHouseEs as any).caseStudy as CaseStudy,
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
  
  return Promise.resolve(studies)
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
