import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { ServiceTag } from '@/components/ServiceTag'

export function ServiceHeader({
  service,
  title,
  summary,
}: {
  service: string
  title: string
  summary: string
}) {
  return (
    <Container className={'mt-24 text-center sm:mt-32 lg:mt-40'}>
      <FadeIn>
        <h1>
          <ServiceTag service={service} />

          <span className="sr-only"> - </span>
          <span className="mx-auto mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-balance text-theme-950 sm:text-6xl">
            {title}
          </span>
        </h1>
        <div className="mx-auto mt-6 max-w-3xl text-xl text-theme-600">
          <p>{summary}</p>
        </div>
      </FadeIn>
    </Container>
  )
}
