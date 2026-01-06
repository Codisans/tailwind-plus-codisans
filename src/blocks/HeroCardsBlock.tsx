'use client'

import { type CaseStudy, type MDXEntry } from '@/lib/mdx'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

export type Card = {
  type?: string
  title: string
  link: string
  date?: string
  image: string
  description: string
}

export type CardsBlockProps = {
  eyebrow?: string
  title?: string
  summary?: string
  cards: Card[]
}
export const HeroCardsBlock = ({
  eyebrow,
  title,
  summary,
  cards,
}: CardsBlockProps) => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true }, [
    WheelGesturesPlugin(),
  ])

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-theme-950 sm:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-lg text-2xl text-theme-600">{summary}</p>
        </FadeIn>
      </Container>

      <div className="mt-16 w-full overflow-hidden py-px md:mt-20">
        <Container>
          <FadeInStagger>
            <div ref={emblaRef} className="w-full overflow-visible">
              <div className="flex flex-nowrap gap-6 sm:gap-8">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="min-w-80 [flex:0_0_50%] md:min-w-lg"
                  >
                    <FadeIn>
                      <article className="relative flex w-full gap-6 rounded-3xl bg-white p-6 ring-1 ring-theme-950/5 transition hover:bg-theme-50 max-md:flex-col sm:p-8">
                        <Link
                          className="absolute inset-0 rounded-3xl"
                          href={card.link}
                        >
                          <span className="sr-only">{card.title}</span>
                        </Link>
                        <Image
                          src={card.image}
                          alt={card.title}
                          className="h-auto w-64"
                          width={420}
                          height={420}
                          unoptimized
                        />
                        <div className="flex flex-col">
                          <p className="flex gap-x-2 text-sm text-theme-950">
                            {card.date && (
                              <>
                                <time
                                  dateTime={card.date.split('-')[0]}
                                  className="font-semibold"
                                >
                                  {card.date.split('-')[0]}
                                </time>
                                <span
                                  className="text-theme-300"
                                  aria-hidden="true"
                                >
                                  /
                                </span>
                              </>
                            )}

                            {card.type && <span>{card.type}</span>}
                          </p>
                          <h3 className="mt-4 font-display text-2xl font-semibold text-theme-950">
                            {card.title}
                          </h3>
                        </div>
                      </article>
                    </FadeIn>
                  </div>
                ))}
              </div>
            </div>
          </FadeInStagger>
        </Container>
      </div>
    </>
  )
}
