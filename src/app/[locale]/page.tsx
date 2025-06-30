import { type Metadata } from 'next'
import {getTranslations} from 'next-intl/server';


import { ContactSection } from '@/components/ContactSection'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { RootLayout } from '@/components/RootLayout'
import { LogosBlock } from '../../blocks/LogosBlock'
import { CardsBlock } from '../../blocks/CardsBlock'
import { ListBlock } from '../../blocks/ListBlock'
import { PageHeader } from '../../blocks/PageHeader'

const dummyItems = [{
  name: "Laravel PHP",
  logo: logoPhobiaLight
}, {
  name: "Shopify",
  logo: logoFamilyFund
}, {
  name: "Shopify Hydrogen", 
  logo: logoUnseal
}, {
  name: "Next.js",
  logo: logoMailSmirk
}, {
  name: "Umbraco CMS",  
  logo: logoHomeWork
}, {
  name: "Dot NET C#",
  logo: logoGreenLife
}, {
  name: "Statamic CMS",  
  logo: logoBrightPath
}]

const workCards = [
  {
    image: logoPhobiaLight,
    title: "Keai",
    description: "We built a bespoke web application for Keai, a startup that helps people find the best activities in their city.",
    link: "/phobia",
    date: "2025-01-01",
    type: "Case study"
  },
  {
    image: logoPhobiaLight,
    title: "DCV'87",
    description: "We helped DCV'87 create a creative e-commerce platform, helping drive sales and increase customer engagement.",
    link: "/phobia",
    date: "2025-01-01",
    type: "Case study"
  },
  {
    image: logoPhobiaLight,
    title: "La Torre Ambulante",
    description: "We helped Phobia create a new website that is more user-friendly and engaging.",
    link: "/phobia",
    date: "2025-01-01",
    type: "Case study"
  },
]

const dummyList = [
  {
    title: "Web development",
    description: "We specialise in crafting beautiful, high quality marketing pages. The rest of the website will be a shell that uses lorem ipsum everywhere."
  },
  {
    title: "Application development",
    description: "We have a team of skilled developers who are experts in the latest app frameworks, like Angular 1 and Google Web Toolkit."
  },
  {
    title: "E-commerce",
    description: "We are at the forefront of modern e-commerce development. Which mainly means adding your logo to the Shopify store template we’ve used for the past six years."
  },
  {
    title: "Custom content management",
    description: "At Studio we understand the importance of having a robust and customised CMS. That’s why we run all of our client projects out of a single, enormous Joomla instance."
  }
]

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  const t = await getTranslations({locale, namespace: 'HomePage'});

  return {
    title: t('meta.title'),
    description: t('meta.description')
  };
}

export default async function Home() {
  const t = await getTranslations('HomePage');

  return (
    <RootLayout>
      <PageHeader title={t('title')} summary={t('intro')} /> 
      <LogosBlock title="Some of the technologies we enjoy working with" items={dummyItems} />
      <ListBlock eyebrow='Services' title="We specialise in crafting beautiful, high quality marketing pages." summary=" As long as those opportunities involve giving us money to re-purpose old projects — we can come up with an endless number of those." image={imageLaptop} items={dummyList} />
      <CardsBlock title="Our work" summary="We build a variety of web solutions, from simple landing pages to complex web applications." cards={workCards} />
      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}
      <ContactSection />
    </RootLayout>
  )
}
