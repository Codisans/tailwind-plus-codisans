import { RootLayout } from '@/components/RootLayout'
import { getTranslations } from 'next-intl/server'
import { PromoListBlock } from '@/blocks/PromoListBlock'
import { ListBlock } from '@/blocks/ListBlock'
import heroImage from '@/images/shopify-screenshot.png'
import { ContactBlock } from '@/blocks/ContactBlock'
import { loadCaseStudies } from '@/lib/mdx'
import {
  CaseStudyCard,
  CaseStudyCardsBlock,
} from '@/blocks/CaseStudyCardsBlock'
import { ServiceHeader } from '@/blocks/ServiceHeader'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: 'ContactPage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}
export default async function Shopify({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('ContactPage')
  const caseStudies = await loadCaseStudies(locale, [
    'dcv87',
    'la-torre-ambulante',
  ])

  return (
    <RootLayout className="e-commerce">
      <ServiceHeader
        service="e-commerce"
        title="Custom Shopify Storefronts Built for Performance, Scalability & Conversions"
        summary="We build headless Shopify storefronts using Hydrogen and modern frameworks — engineered for speed, built for scale, and optimized to turn browsers into buyers. Get the performance of custom development with the reliability of the world's leading commerce platform."
      />

      <PromoListBlock
        eyebrow={'Beyond Templates'}
        title={'Why Custom Storefronts Outperform Standard Themes'}
        description={
          'Shopify themes help you launch quickly, but scaling brands need more than templates. Custom storefronts give you the flexibility to innovate, the performance to compete, and the foundation to grow without technical debt.'
        }
        items={[
          {
            heading: 'Lightning-Fast Performance That Converts',
            description:
              'Our custom storefronts load in under 50 milliseconds, delivering blazing-fast experiences that improve SEO rankings, mobile performance, and directly impact your bottom line.',
          },
          {
            heading: 'Unique Brand Experiences, Zero Compromises',
            description:
              'Break free from template constraints. Design sophisticated product flows, interactive features, and customer journeys that align perfectly with your brand and business model.',
          },
          {
            heading: 'Built to Scale Without Rebuilding',
            description:
              'Expand into new markets, add complex features, and integrate advanced functionality as you grow—all without expensive replatforming or technical limitations.',
          },
          {
            heading: 'Lower TCO, Higher Control',
            description:
              'Replace expensive app subscriptions with custom-built logic. Reduce monthly overhead, eliminate app conflicts, and maintain full control over your store capabilities.',
          },
          {
            heading: 'Advanced Commerce Logic, Simplified',
            description:
              'Handle complex pricing rules, B2B workflows, subscription models, and custom checkout experiences that standard themes simply cannot support.',
          },
        ]}
        invert={true}
      />

      <ListBlock
        eyebrow="Why Shopify?"
        title="The Most Trusted Commerce Platform, Customized for Your Business"
        summary="We build on Shopify because it offers enterprise-grade infrastructure with the flexibility of custom development."
        items={[
          {
            heading: 'Best-in-Class Checkout That Converts',
            description:
              'Shopify Checkout converts 15% higher than other platforms and reaches 150M+ high-intent Shop Pay users.',
          },
          {
            heading: 'Rock-Solid Infrastructure That Scales',
            description:
              'Handle traffic spikes, product launches, and viral moments without breaking a sweat. Shopify infrastructure powers $1 trillion+ in global sales and is built to support your growth from day one.',
          },
          {
            heading: 'Powerful APIs & Developer Ecosystem',
            description:
              'Access 13,000+ commerce apps and robust APIs that let us build exactly what you need. From advanced analytics to custom fulfillment workflows—if you can imagine it, we can build it.',
          },
          {
            heading: 'Continuous Innovation & AI-Powered Tools',
            description:
              'Benefit from Shopify nonstop platform improvements—150+ new features every 6 months. Get AI-powered content generation, smart recommendations, and cutting-edge commerce tools without additional development.',
          },
          {
            heading: 'Built for Global Commerce',
            description:
              'Launch internationally with confidence. Multi-currency pricing, localized experiences, international shipping optimization, and compliance tools are built into the platform.',
          },
        ]}
        image={heroImage}
      />

      <CaseStudyCardsBlock
        eyebrow="Our Work"
        title="From Good Stores to Great Sales Engines"
        summary="We've partnered with ambitious brands to build custom Shopify storefronts that reflect your brand and drive business growth through superior performance, user experience, and conversion optimization."
        cards={caseStudies.map<CaseStudyCard>((caseStudy) => ({
          service: caseStudy.service?.[0],
          date: caseStudy.date,
          title: caseStudy.title,
          image:
            (caseStudy.thumbnail?.src as string) ??
            (caseStudy.image?.src as string),
          description: caseStudy.description,
          link: caseStudy.href,
        }))}
      />

      <ContactBlock
        heading="Ready to Build a Storefront That Performs?"
        description="Whether you're scaling beyond your current theme, launching a new brand, or rebuilding for performance — we'll help you leverage Shopify with a custom storefront that drives real business results."
        cta="Start your project"
      />
    </RootLayout>
  )
}
