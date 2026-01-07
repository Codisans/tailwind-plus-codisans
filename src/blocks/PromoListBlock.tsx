import { Container } from '@/components/Container'
import { GridListItem } from '@/components/GridList'
import { GridList } from '@/components/GridList'
import { SectionIntro } from '@/components/SectionIntro'
import clsx from 'clsx'

export const PromoListBlock = ({
  eyebrow,
  title,
  description,
  items,
  invert,
}: {
  eyebrow?: string
  title: string
  description?: string
  items: { heading: string; description: string }[]
  invert: boolean
}) => {
  return (
    <div
      className={clsx(
        'rounded-4xl py-24 lg:py-32',
        invert ? 'mt-24 bg-theme-950 sm:mt-32 lg:mt-40' : '',
      )}
    >
      <SectionIntro {...(eyebrow && { eyebrow })} title={title} invert={invert}>
        {description && <p>{description}</p>}
      </SectionIntro>
      {items && (
        <Container className="mt-16">
          <GridList>
            {items.map((item) => (
              <GridListItem
                key={item.heading}
                title={item.heading}
                invert={invert}
              >
                {item.description}
              </GridListItem>
            ))}
          </GridList>
        </Container>
      )}
    </div>
  )
}
