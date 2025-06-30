import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'
import { PromoListBlock } from '@/blocks/PromoListBlock'
import { TeamBlock } from '@/blocks/TeamBlock'

const promoList = [
  {
    heading: 'Loyalty',
    description: 'Our team has been with us since the beginning because none of them are allowed to have LinkedIn profiles.',
  },
  {
    heading: 'Trust',
    description: 'We don’t care when our team works just as long as they are working every waking second.',
  },
  {
    heading: 'Compassion',
    description: 'You never know what someone is going through at home and we make sure to never find out.',
  },
]

const team = [
  {
    name: 'Nicolas Canala',
    role: 'Co-Founder / Backend Lead',
    image: { src: imageLeslieAlexander },
  },
  {
    name: 'Sebastian Strand',
    role: 'Co-Founder / Frontend Lead',
    image: { src: imageMichaelFoster },
  },
]

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="About us" title="Codisans was born from a shared belief: great software is both engineered and crafted.">
        <p>
        We combine technical excellence with strategic insight to help startups and brands unlock new possibilities.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Codisans was born from a shared belief: great software is both engineered and crafted.
          </p>
          <p>
            At Studio, we’re more than just colleagues — we’re a family. This
            means we pay very little and expect people to work late. We want our
            employees to bring their whole selves to work. In return, we just
            ask that they keep themselves there until at least 6:30pm.
          </p>
        </div>
      </PageIntro>
      {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container> */}

      <PromoListBlock eyebrow="Our culture" title="Balance your passion with your passion for life." description="We are a group of like-minded people who share the same core values." items={promoList} invert={true} />

      <TeamBlock title="Team" team={team} />

      <ContactSection />
    </RootLayout>
  )
}
