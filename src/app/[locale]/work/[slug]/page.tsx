import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { loadCaseStudy, loadCaseStudies } from '@/lib/mdx'
import CaseStudyWrapper from '../wrapper'

export async function generateStaticParams() {
  const caseStudies = await loadCaseStudies()
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.href.split('/').pop(),
  }))
}

export async function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string }
}): Promise<Metadata> {
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
  params: { slug, locale },
}: {
  params: { slug: string; locale: string }
}) {
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
