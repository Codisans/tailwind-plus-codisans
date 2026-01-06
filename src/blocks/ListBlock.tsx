import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { StylizedVideo } from '@/components/StylizedVideo'
import clsx from 'clsx'
import { StaticImageData } from 'next/image'

type ListBlockProps = {
  eyebrow?: string
  title: string
  summary?: string
  image?: StaticImageData
  video?: string
  items?: {
    heading: string
    description: string
  }[]
  invert?: boolean
}

export const ListBlock = ({
  eyebrow,
  title,
  summary,
  image,
  video,
  items,
  invert,
}: ListBlockProps) => {
  return (
    <>
      <SectionIntro
        eyebrow={eyebrow}
        title={title}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        {summary && <p className="mb-16">{summary}</p>}
      </SectionIntro>
      <Container>
        <div
          className={clsx(
            'lg:flex lg:items-center lg:justify-end',
            invert ? 'flex-row-reverse' : 'flex-row',
          )}
        >
          <div
            className={clsx(
              'flex justify-center lg:w-1/2',
              invert ? 'lg:justify-start lg:pl-12' : 'lg:justify-end lg:pr-12',
            )}
          >
            {image && (
              <FadeIn className="w-135 flex-none lg:w-180">
                <StylizedImage
                  grayscale={false}
                  src={image}
                  shape={invert ? 0 : 1}
                  sizes="(min-width: 1024px) 41rem, 31rem"
                  className={clsx(
                    'justify-center',
                    invert ? 'lg:justify-start' : 'lg:justify-end',
                  )}
                />
              </FadeIn>
            )}
            {video && (
              <FadeIn className="w-135 flex-none lg:w-180">
                <StylizedVideo src={video} />
              </FadeIn>
            )}
          </div>
          {items && (
            <List
              className={clsx(
                'mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132',
                invert ? 'lg:pr-4' : 'lg:pr-4',
              )}
            >
              {items?.map((item) => (
                <ListItem key={item.heading} title={item.heading}>
                  {item.description}
                </ListItem>
              ))}
            </List>
          )}
        </div>
      </Container>
    </>
  )
}
