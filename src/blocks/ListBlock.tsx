import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { StylizedVideo } from '@/components/StylizedVideo'
import { StaticImageData } from 'next/image'

type ListBlockProps = {
  eyebrow?: string
  title: string
  summary?: string
  image?: StaticImageData
  video?: string
  items?: {
    title: string
    description: string
  }[]
  grayscale?: boolean
}

export const ListBlock = ({
  eyebrow,
  title,
  summary,
  image,
  video,
  items,
  grayscale = true,
}: ListBlockProps) => {
  return (
    <>
      <SectionIntro
        eyebrow={eyebrow}
        title={title}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{summary}</p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            {image && (
              <FadeIn className="w-135 flex-none lg:w-180">
                <StylizedImage
                  grayscale={grayscale}
                  src={image}
                  sizes="(min-width: 1024px) 41rem, 31rem"
                  className="justify-center lg:justify-end"
                />
              </FadeIn>
            )}
            {video && (
              <FadeIn className="w-135 flex-none lg:w-180">
                <StylizedVideo src={video} grayscale={grayscale} />
              </FadeIn>
            )}
          </div>
          {items && (
            <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
              {items?.map((item) => (
                <ListItem key={item.title} title={item.title}>
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
