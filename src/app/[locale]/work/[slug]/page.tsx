import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { loadCaseStudy, loadCaseStudies } from '@/lib/mdx'
import CaseStudyWrapper from '../wrapper'

export async function generateStaticParams() {
  const locales = ['en', 'es']
  const params = []

  for (const locale of locales) {
    const caseStudies = await loadCaseStudies(locale)
    for (const caseStudy of caseStudies) {
      params.push({
        locale,
        slug: caseStudy.href.split('/').pop(),
      })
    }
  }

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}): Promise<Metadata> {
  const { slug, locale } = await params
  const caseStudy = await loadCaseStudy(slug, locale)

  if (!caseStudy) {
    return {
      title: 'Case study not found',
    }
  }

  return {
    title: `${caseStudy.metadata.client} Case Study`,
    description: caseStudy.metadata.description,
  }
}

export default async function CaseStudyPost({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug, locale } = await params
  const caseStudy = await loadCaseStudy(slug, locale)

  if (!caseStudy) {
    notFound()
  }

  const { default: MDXContent } = caseStudy.component

  const caseStudyEntry = {
    ...caseStudy.metadata,
    href: `/work/${slug}`,
    metadata: caseStudy.metadata,
    isLocalized: true,
  }

  return (
    <CaseStudyWrapper caseStudy={caseStudyEntry} locale={locale}>
      <MDXContent />
    </CaseStudyWrapper>
  )
}
