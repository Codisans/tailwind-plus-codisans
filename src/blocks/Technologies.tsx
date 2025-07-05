import logoLaravel from '@/images/laravel-logotype.svg'
import logoShopify from '@/images/shopify-logotype.svg'
import logoDeepSeek from '@/images/deepseek-logotype.svg'
import logoOpenai from '@/images/openai-logotype.svg'
import logoGemini from '@/images/gemini-logotype.svg'
import logoNextjs from '@/images/nextjs-logotype.svg'
import logoReact from '@/images/react-logotype.svg'
import logoRemix from '@/images/remix-logotype.svg'

import { FadeIn } from '@/components/FadeIn'
import Image from 'next/image'
import { LogoCardsBlock } from './LogoCardsBlock'
import { Link } from '@/i18n/navigation'

const items = [
  {
    name: 'React',
    logo: logoReact,
    link: 'https://react.dev/',
  },
  {
    name: 'Remix',
    logo: logoRemix,
    link: 'https://remix.run/',
  },
  {
    name: 'Next.js',
    logo: logoNextjs,
    link: 'https://nextjs.org/',
  },
  {
    name: 'OpenAI',
    logo: logoOpenai,
    link: 'https://openai.com/',
  },
  {
    name: 'DeepSeek',
    logo: logoDeepSeek,
    link: 'https://deepseek.com/',
  },
  {
    name: 'Gemini',
    logo: logoGemini,
    link: 'https://gemini.google.com/',
  },
  {
    name: 'Laravel PHP',
    logo: logoLaravel,
    link: 'https://laravel.com/',
  },
  {
    name: 'Shopify',
    logo: logoShopify,
    link: 'https://www.shopify.com/cl/plus/solutions/headless-commerce',
  },
]

export const Technologies = ({
  title = 'Some of the technologies we enjoy working with',
}: {
  title: string
}) => {
  return (
    <LogoCardsBlock title={title} stamp>
      {items.map((item) => (
        <li
          className="group/stamp pointer-events-auto relative mt-8"
          key={item.name}
        >
          <FadeIn className="overflow-hidden px-2 py-4">
            <Image
              className="size-10 object-contain brightness-0 transition duration-300 ease-out group-hover/stamp:!opacity-100 group-hover/stamp:brightness-100 group-hover/stamps:opacity-60"
              src={item.logo}
              alt={item.name}
              unoptimized
            />
          </FadeIn>
          <Link href={item.link} className="absolute inset-0">
            <span className="sr-only">{item.name}</span>
          </Link>
        </li>
      ))}
    </LogoCardsBlock>
  )
}
