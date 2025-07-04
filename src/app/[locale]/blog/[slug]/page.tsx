import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { loadArticle, loadArticles } from '@/lib/mdx'
import BlogArticleWrapper from '../wrapper'

export async function generateStaticParams() {
  const articles = await loadArticles()
  return articles.map((article) => ({
    slug: article.href.split('/').pop(),
  }))
}

export async function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string }
}): Promise<Metadata> {
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
  params: { slug, locale },
}: {
  params: { slug: string; locale: string }
}) {
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
