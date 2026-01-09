import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { ServiceTag } from '@/components/ServiceTag'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'

export type CaseStudyCard = {
  service?: string
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
  cards: CaseStudyCard[]
}
export const HeroCardsBlock = ({
  eyebrow,
  title,
  summary,
  cards,
}: CardsBlockProps) => {
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
          <FadeInStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {cards.slice(0, 4).map((card, index) => (
              <FadeIn className="col-span-1" key={index}>
                <article className="relative flex w-full flex-col gap-6 rounded-3xl bg-white p-6 ring-1 ring-theme-950/5 transition hover:bg-theme-50 sm:p-8 xl:flex-row">
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
                          <span className="text-theme-300" aria-hidden="true">
                            /
                          </span>
                        </>
                      )}

                      {card.service && <ServiceTag service={card.service} />}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-theme-950">
                      {card.title}
                    </h3>
                  </div>
                </article>
              </FadeIn>
            ))}
          </FadeInStagger>
        </Container>
      </div>
    </>
  )
}
