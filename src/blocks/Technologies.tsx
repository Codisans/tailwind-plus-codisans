import logoLaravel from '@/images/laravel-logo.svg'
import logoShopify from '@/images/shopify-logo.svg'
import logoDeepSeek from '@/images/deepseek-logotype.svg'
import logoOpenai from '@/images/openai-logotype.svg'
import logoGemini from '@/images/gemini-logotype.svg'
import logoNextjs from '@/images/nextjs-logotype.svg'
import logoReact from '@/images/react-logotype.svg'
import logoRemix from '@/images/remix-logotype.svg'

import { LogosBlock } from '@/blocks/LogosBlock'
import { FadeIn } from '@/components/FadeIn'
import Image from 'next/image'

const items = [
  {
    name: 'Laravel PHP',
    logo: logoLaravel,
  },
  {
    name: 'Shopify',
    logo: logoShopify,
  },
]

export const Technologies = ({
  title = 'Some of the technologies we enjoy working with',
}: {
  title: string
}) => {
  return (
    <LogosBlock title={title} items={items}>
      <li>
        <FadeIn>
          <AiLogos />
        </FadeIn>
      </li>
      <li>
        <FadeIn>
          <ReactLogos />
        </FadeIn>
      </li>
    </LogosBlock>
  )
}

export const AiLogos = () => {
  return (
    <div className="grid grid-cols-3 gap-4 rounded-2xl bg-theme-900 p-4">
      <Image
        className="size-10 object-contain brightness-0 invert"
        src={logoOpenai}
        alt="openai-logo"
        unoptimized
      />
      <Image
        className="size-10 object-contain brightness-0 invert"
        src={logoDeepSeek}
        alt="deepseek-logo"
        unoptimized
      />
      <Image
        className="size-10 object-contain brightness-0 invert"
        src={logoGemini}
        alt="gemini-logo"
        unoptimized
      />
    </div>
  )
}

export const ReactLogos = () => {
  return (
    <div className="grid grid-cols-3 gap-4 rounded-2xl bg-theme-900 p-4">
      <Image
        className="size-10 object-contain brightness-0 invert"
        src={logoRemix}
        alt="remix-logo"
        unoptimized
      />
      <Image
        className="size-10 object-contain brightness-0 invert"
        src={logoReact}
        alt="react-logo"
        unoptimized
      />
      <Image
        className="size-10 object-contain brightness-0 invert"
        src={logoNextjs}
        alt="nextjs-logo"
        unoptimized
      />
    </div>
  )
}
