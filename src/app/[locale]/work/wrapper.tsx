import { ContactBlock } from '@/blocks/ContactBlock'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { getTranslations } from 'next-intl/server'
import { ServiceTag } from '@/components/ServiceTag'
import {
  CaseStudyCard,
  CaseStudyCardsBlock,
} from '@/blocks/CaseStudyCardsBlock'

export default async function CaseStudyWrapper({
  caseStudy,
  children,
  locale = 'en',
}: {
  caseStudy: MDXEntry<CaseStudy>
  children: React.ReactNode
  locale?: string
}) {
  const t = await getTranslations()
  let allCaseStudies = await loadCaseStudies(locale)
  let moreCaseStudies = allCaseStudies
    .filter(({ metadata }) => metadata.title !== caseStudy.title)
    .slice(0, 2)

  // Generate structured data for rich snippets
  const slug = caseStudy.href.split('/').pop()
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://codisans.com${caseStudy.href}`,
    headline: caseStudy.title,
    description: caseStudy.description,
    image: caseStudy.image?.src
      ? `https://codisans.com${caseStudy.image.src}`
      : undefined,
    datePublished: caseStudy.date,
    dateModified: caseStudy.date,
    author: {
      '@type': 'Organization',
      name: 'Codisans',
      url: 'https://codisans.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://codisans.com/images/logos/codisans-logo.svg',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Codisans',
      url: 'https://codisans.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://codisans.com/images/logos/codisans-logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://codisans.com${caseStudy.href}`,
    },
    articleSection: 'Case Studies',
    keywords: [
      caseStudy.client,
      caseStudy.service,
      'case study',
      'web development',
    ].join(', '),
    about: {
      '@type': 'Thing',
      name: caseStudy.client,
      description: caseStudy.description,
    },
    mentions: caseStudy.url
      ? {
          '@type': 'WebSite',
          name: caseStudy.client,
          url: caseStudy.url,
        }
      : undefined,
    ...(caseStudy.testimonial && {
      review: {
        '@type': 'Review',
        reviewBody: caseStudy.testimonial.content,
        author: {
          '@type': 'Person',
          name: caseStudy.testimonial.author.name,
          jobTitle: caseStudy.testimonial.author.role,
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
    }),
  }

  return (
    <RootLayout>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro
            eyebrow={t('global.case-study')}
            title={caseStudy.title}
            centered
          >
            <p>{caseStudy.description}</p>
            {caseStudy.url && (
              <a
                href={caseStudy.url}
                className="relative z-10 mt-4 block"
                target="_blank"
              >
                <ServiceTag
                  service={caseStudy.service[0]}
                  label={caseStudy.url.replace('https://', '')}
                />
              </a>
            )}
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-theme-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-theme-950 sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-theme-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">{t('global.client')}</dt>
                      <dd>{caseStudy.client}</dd>
                    </div>
                    <div className="border-t border-theme-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">{t('global.year')}</dt>
                      <dd>
                        <time dateTime={caseStudy.date.split('-')[0]}>
                          {caseStudy.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="border-t border-theme-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">{t('global.service')}</dt>
                      <dd>{t(`services.${caseStudy.service?.[0]}.tag`)}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y border-theme-200 bg-theme-100">
              <div className="mx-auto -my-px max-w-304 bg-theme-200">
                <GrayscaleTransitionImage
                  {...caseStudy.image}
                  quality={90}
                  className="w-full"
                  sizes="(min-width: 1216px) 76rem, 100vw"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      {moreCaseStudies.length > 0 && (
        <CaseStudyCardsBlock
          title={t('global.more-case-studies')}
          cards={moreCaseStudies.map<CaseStudyCard>((caseStudy) => ({
            service: caseStudy.service?.[0],
            date: caseStudy.date,
            title: caseStudy.title,
            image:
              (caseStudy.thumbnail?.src as string) ??
              (caseStudy.image?.src as string),
            description: caseStudy.description,
            link: caseStudy.href,
          }))}
        />
      )}
      <ContactBlock />
    </RootLayout>
  )
}
