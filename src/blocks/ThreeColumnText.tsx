import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { SectionIntro } from '@/components/SectionIntro'

export function ThreeColumnText({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string
  title: string
  description: string
  items: { heading: string; description: string }[]
}) {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-theme-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-theme-100 stroke-theme-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro eyebrow={eyebrow} title={title}>
        <p>{description}</p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          {items.map((item) => (
            <GridListItem key={item.heading} title={item.heading}>
              {item.description}
            </GridListItem>
          ))}
        </GridList>
      </Container>
    </div>
  )
}
