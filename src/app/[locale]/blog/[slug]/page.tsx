import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { loadArticle, loadArticles } from '@/lib/mdx'
import BlogArticleWrapper from '../wrapper'

export async function generateStaticParams() {
  const locales = ['en', 'es']
  const params = []

  for (const locale of locales) {
    const articles = await loadArticles(locale)
    for (const article of articles) {
      params.push({
        locale,
        slug: article.href.split('/').pop(),
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
  const article = await loadArticle(slug, locale)

  if (!article) {
    return {
      title: 'Article not found',
    }
  }

  return {
    title: article.metadata.title,
    description: article.metadata.description,
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug, locale } = await params
  const article = await loadArticle(slug, locale)

  if (!article) {
    notFound()
  }

  const { default: MDXContent } = article.component

  const articleEntry = {
    ...article.metadata,
    href: `/blog/${slug}`,
    metadata: article.metadata,
    isLocalized: true,
  }

  return (
    <BlogArticleWrapper article={articleEntry} locale={locale}>
      <MDXContent />
    </BlogArticleWrapper>
  )
}
