import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Image from 'next/image'

type LogosBlockProps = {
  title: string
  items: {
    name: string
    logo: string
  }[]
}

export const LogosBlock = ({ title, items }: LogosBlockProps) => {
  return (
    <div className="rounded-4xl bg-theme-950 mt-24 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="font-display text-center text-sm font-semibold tracking-wider text-white sm:text-left">
            {title}
          </h2>
          <div className="bg-theme-800 h-px flex-auto" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {items.map((item) => (
              <li key={item.name}>
                <FadeIn>
                  <Image src={item.logo} alt={item.name} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}
