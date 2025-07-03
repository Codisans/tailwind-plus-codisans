import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { ArticleRenderer } from '@/components/ArticleRenderer'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import { formatDate } from '@/lib/formatDate'
import { type ArticleEntry} from '@/lib/articles'
import { content } from './content'
import { getLocale } from 'next-intl/server'

export default async function BlogWrapper({
  article,
  children,
}: {
  article: ArticleEntry
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const moreArticles = content[locale as keyof typeof content].slice(0, 2)

  return (
    <RootLayout>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="font-display text-theme-950 mt-6 text-balance text-5xl font-medium tracking-tight sm:text-6xl">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="text-theme-950 order-first text-sm"
            >
              {formatDate(article.date)}
            </time>
            <p className="text-theme-950 mt-6 text-sm font-semibold">
              by {article.author.name}, {article.author.role}
            </p>
          </header>
        </FadeIn>

        <FadeIn>
          {children}
        </FadeIn>
      </Container>

      {/* {moreArticles.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More articles"
          pages={moreArticles as unknown}
        />
      )} */}

      <ContactSection />
    </RootLayout>
  )
}
