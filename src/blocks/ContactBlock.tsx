import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Emails } from '../components/Emails'
import { getTranslations } from 'next-intl/server'

export async function ContactBlock({
  heading,
  description,
  cta,
}: {
  heading?: string
  description?: string
  cta?: string
}) {
  const t = await getTranslations('global')

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="dark -mx-6 rounded-4xl bg-theme-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              {heading ? heading : t('contact-message')}
            </h2>
            {description && (
              <p className="mt-4 max-w-lg text-white">{description}</p>
            )}
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                {cta ? cta : t('contact-cta')}
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <Emails invert />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
