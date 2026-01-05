import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { StylizedVideo } from '@/components/StylizedVideo'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type CardListBlockProps = {
  eyebrow?: string
  title: string
  summary?: string
  image?: StaticImageData
  video?: string
  items?: CardListItemProps[]
  grayscale?: boolean
}

export const CardListBlock = ({
  eyebrow,
  title,
  summary,
  image,
  video,
  items,
}: CardListBlockProps) => {
  const smaller = true
  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="grid grid-cols-12 gap-4">
          <div className="col-start-1 col-end-9 max-w-2xl">
            <h2>
              {eyebrow && (
                <>
                  <span
                    className={clsx(
                      'mb-6 block font-display text-base font-semibold text-theme-950',
                    )}
                  >
                    {eyebrow}
                  </span>
                  <span className="sr-only"> - </span>
                </>
              )}
              <span
                className={clsx(
                  'block font-display text-4xl font-medium tracking-tight text-balance sm:text-5xl',
                )}
              >
                {title}
              </span>
            </h2>

            <div className={clsx('mt-6 text-xl')}>
              <p>{summary}</p>
            </div>
          </div>
          {image && (
            <FadeIn className="col-start-9 col-end-13 -mr-6 flex items-end overflow-hidden sm:hidden">
              <Image
                src={image?.src as string}
                alt={title}
                width={495}
                height={880}
                className="max-h-full min-w-[max(36vw,13rem)] flex-none object-contain object-center max-sm:scale-x-[-1]"
              />
            </FadeIn>
          )}
        </FadeIn>
      </Container>

      <Container className="mt-16">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {image && (
            <FadeIn className="col-start-1 col-end-3 max-sm:hidden sm:col-end-5">
              <div className="sticky top-[max(calc((100svh-42vw)/2),1rem)] flex max-h-full w-full items-center justify-center lg:top-[calc((100svh-568px)/2)]">
                <Image
                  src={image?.src as string}
                  alt={title}
                  width={495}
                  height={880}
                  className="max-h-[calc(100svh-2rem)] w-full max-w-80 object-contain object-center"
                />
              </div>
            </FadeIn>
          )}
          {items && (
            <FadeInStagger className="col-start-1 col-end-13 sm:col-start-5 lg:col-end-12">
              <ul
                role="list"
                className="flex flex-col gap-8 text-base text-theme-600 lg:pl-4"
              >
                {items?.map((item) => (
                  <CardListItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                  />
                ))}
              </ul>
            </FadeInStagger>
          )}
        </div>
      </Container>
    </>
  )
}

export type CardListItemProps = {
  title?: string
  description?: string
  href?: string
}

export function CardListItem({ title, description, href }: CardListItemProps) {
  return (
    <li className="relative flex w-full">
      <FadeIn className="flex w-full">
        <div className="relative flex w-full flex-col rounded-3xl bg-white p-6 ring-1 ring-theme-950/5 transition hover:bg-theme-50 sm:p-8">
          {title && (
            <strong className="font-semibold text-theme-950">{`${title}. `}</strong>
          )}
          {description}
        </div>
      </FadeIn>
      {href && (
        <Link className="absolute inset-0" href={href}>
          <span className="sr-only">{title}</span>
        </Link>
      )}
    </li>
  )
}
