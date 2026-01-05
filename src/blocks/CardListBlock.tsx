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
  return (
    <>
      <SectionIntro
        eyebrow={eyebrow}
        title={title}
        className="mt-24 sm:mt-32 lg:mt-40"
        image={image}
      >
        <p>{summary}</p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {items && (
            <FadeInStagger className="col-start-3 col-end-13 sm:col-start-5 sm:col-end-12">
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
        <div className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-theme-950/5 transition hover:bg-theme-50 sm:p-8">
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
