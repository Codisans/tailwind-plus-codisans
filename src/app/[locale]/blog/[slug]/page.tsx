import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/lib/articles'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { ArticleRenderer } from '@/components/ArticleRenderer'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import { formatDate } from '@/lib/formatDate'
import BlogWrapper from '../BlogWrapper'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.description,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
     <BlogWrapper article={article}>
dlkcvjds lsk
     </BlogWrapper>
} 