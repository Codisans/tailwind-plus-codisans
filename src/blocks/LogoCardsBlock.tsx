import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Image from 'next/image'

type LogoCardsBlockProps = {
  title: string
  items?: {
    name: string
    logo: string
  }[]
  stamp?: boolean
  children?: React.ReactNode
}

export const LogoCardsBlock = ({
  title,
  items,
  stamp = false,
  children,
}: LogoCardsBlockProps) => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-theme-950">
          {title}
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className={
            stamp
              ? 'group/stamps pointer-events-none flex flex-wrap'
              : 'grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4'
          }
        >
          {items?.map((item, i) => (
            <li key={i} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-nth-[-n+2]:-mt-px sm:group-nth-3:-mt-px lg:group-nth-4:-mt-px">
                  <Image
                    className={stamp ? 'pointer-events-auto w-16' : ''}
                    src={item.logo}
                    alt={item.name}
                    unoptimized
                  />
                </Border>
              </FadeIn>
            </li>
          ))}
          {children}
        </ul>
      </FadeInStagger>
    </Container>
  )
}
