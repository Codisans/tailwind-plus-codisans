import { Container } from "@/components/Container";
import { GridListItem } from "@/components/GridList";
import { GridList } from "@/components/GridList";
import { SectionIntro } from "@/components/SectionIntro";

export const PromoListBlock =({eyebrow, title, description, items}: {eyebrow: string, title: string, description: string, items: {heading: string, description: string}[], invert: boolean}) => {
    return (
      <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          invert
        >
          {description && <p>{description}</p>}
        </SectionIntro>
        {items && (
        <Container className="mt-16">
          <GridList>
            {items.map((item) => (
              <GridListItem key={item.heading} title={item.heading} invert>
                {item.description}
              </GridListItem>
              ))}
            </GridList>
          </Container>
        )}
      </div>
    )
  }