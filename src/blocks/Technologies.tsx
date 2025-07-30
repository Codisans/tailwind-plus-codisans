import logoLaravel from '@/images/logos/laravel-logotype.svg'
import logoShopify from '@/images/logos/shopify-logotype.svg'
import logoHuggingFace from '@/images/logos/hugging-face-logotype.svg'
import logoOpenai from '@/images/logos/openai-logotype.svg'
import logoGemini from '@/images/logos/gemini-logotype.svg'
import logoNextjs from '@/images/logos/nextjs-logotype.svg'
import logoReact from '@/images/logos/react-logotype.svg'
import logoRemix from '@/images/logos/remix-logotype.svg'
import logoUmbraco from '@/images/logos/umbraco-logotype.svg'

import { FadeIn } from '@/components/FadeIn'
import Image from 'next/image'
import { LogoCardsBlock } from './LogoCardsBlock'
import { Link } from '@/i18n/navigation'

const items = [
  {
    name: 'Laravel',
    logo: logoLaravel,
    link: 'https://laravel.com/',
  },
  {
    name: 'React JS',
    logo: logoReact,
    link: 'https://react.dev/',
  },
  {
    name: 'Remix JS',
    logo: logoRemix,
    link: 'https://remix.run/',
  },
  {
    name: 'Next JS',
    logo: logoNextjs,
    link: 'https://nextjs.org/',
  },
  {
    name: 'OpenAI',
    logo: logoOpenai,
    link: 'https://openai.com/',
  },
  {
    name: 'Hugging Face',
    logo: logoHuggingFace,
    link: 'https://huggingface.co/',
  },
  {
    name: 'Gemini',
    logo: logoGemini,
    link: 'https://gemini.google.com/',
  },
  {
    name: 'Shopify',
    logo: logoShopify,
    link: 'https://www.shopify.com/cl/plus/solutions/headless-commerce',
  },
  {
    name: 'Umbraco CMS',
    logo: logoUmbraco,
    link: 'https://umbraco.com/',
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
          <span className="absolute bottom-full left-1/2 w-max origin-bottom -translate-x-1/2 scale-0 rounded-full bg-zinc-900 px-2 text-sm whitespace-nowrap text-white transition-transform duration-150 ease-out group-hover/stamp:scale-100">
            {item.name}
          </span>
          <FadeIn className="overflow-hidden px-2 py-4 md:px-5">
            <Image
              className="size-10 object-contain transition duration-300 ease-out group-hover/stamp:!opacity-100 group-hover/stamp:brightness-100 group-hover/stamps:opacity-60 pointer-fine:brightness-0"
              src={item.logo}
              alt={item.name}
              unoptimized
            />
          </FadeIn>
          <Link href={item.link} target="_blank" className="absolute inset-0">
            <span className="sr-only">{item.name}</span>
          </Link>
        </li>
      ))}
    </LogoCardsBlock>
  )
}
