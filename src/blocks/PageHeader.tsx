import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

type PageHeaderProps = {
  title: string
  summary: string
}

export const PageHeader = ({ title, summary }: PageHeaderProps) => {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-theme-950 text-balance text-5xl font-medium tracking-tight sm:text-7xl">
          {title}
        </h1>
        <p className="text-theme-600 mt-6 max-w-lg text-xl">{summary}</p>
      </FadeIn>
    </Container>
  )
}
