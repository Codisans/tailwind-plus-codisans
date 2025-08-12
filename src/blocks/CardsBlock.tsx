import { type CaseStudy, type MDXEntry } from '@/lib/mdx'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { SectionIntro } from '@/components/SectionIntro'

export type Card = {
  type: string
  title: string
  link: string
  date: string
  image: string
  description: string
}

export type CardsBlockProps = {
  title: string
  summary: string
  cards: Card[]
}
export const CardsBlock = ({ title, summary, cards }: CardsBlockProps) => {
  return (
    <>
      <SectionIntro title={title} className="mt-24 sm:mt-32 lg:mt-40">
        {summary && <p>{summary}</p>}
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {cards.map((card, index) => (
            <FadeIn key={index} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-theme-950/5 transition hover:bg-theme-50 sm:p-8">
                <h3>
                  <Link href={card.link}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={card.image}
                      alt={card.title}
                      className="h-auto w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-theme-950">
                  <time
                    dateTime={card.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {card.date.split('-')[0]}
                  </time>
                  <span className="text-theme-300" aria-hidden="true">
                    /
                  </span>

                  {card.type && <span>{card.type}</span>}
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-theme-950">
                  {card.title}
                </p>
                <p className="mt-4 text-base text-theme-600">
                  {card.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}
