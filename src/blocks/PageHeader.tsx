import { Container } from "@/components/Container"
import { FadeIn } from "@/components/FadeIn"

type PageHeaderProps = {
    title: string
    summary: string
}

export const PageHeader = ({ title, summary }: PageHeaderProps) => {
    return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
    <FadeIn className="max-w-3xl">
      <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
        {title}
      </h1>
      <p className="mt-6 text-xl text-neutral-600">
        {summary}
      </p>
    </FadeIn>
  </Container>
  )
}