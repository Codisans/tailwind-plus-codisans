import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Image from 'next/image'

type LogosBlockProps = {
  title: string
  items?: {
    name: string
    logo: string
  }[]
  children?: React.ReactNode
}

export const LogosBlock = ({ title, items, children }: LogosBlockProps) => {
  return (
    <div className="mt-24 rounded-4xl bg-theme-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            {title}
          </h2>
          <div className="h-px flex-auto bg-theme-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {items?.map((item) => (
              <li key={item.name}>
                <FadeIn>
                  <Image
                    className="h-20 w-max max-w-40 object-contain object-center brightness-0 invert"
                    src={item.logo}
                    alt={item.name}
                    unoptimized
                  />
                </FadeIn>
              </li>
            ))}
            {children}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}
