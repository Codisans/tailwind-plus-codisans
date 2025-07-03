import { useId } from 'react'
import { Link } from '@/i18n/navigation'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'
import { getTranslations } from 'next-intl/server'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="border-theme-300 text-theme-950 focus:border-theme-950 focus:ring-theme-950/5 focus:outline-hidden peer block w-full border bg-transparent px-6 pb-4 pt-12 text-base/6 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="text-theme-500 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-theme-950 peer-focus:text-theme-950 pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="border-theme-950/20 outline-hidden checked:border-theme-950 focus-visible:ring-theme-950 h-6 w-6 flex-none appearance-none rounded-full border checked:border-[0.5rem] focus-visible:ring-1 focus-visible:ring-offset-2"
      />
      <span className="text-theme-950 text-base/6">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-theme-950 text-base font-semibold">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
          <div className="border-theme-300 border px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-theme-500 text-base/6">Budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="$2K – $5K" name="budget" value="2-5" />
                <RadioInput label="$5K – $10K" name="budget" value="5-10" />
                <RadioInput label="$10K – $20K" name="budget" value="10-20" />
                <RadioInput label="More than $20K" name="budget" value="20+" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-theme-950 text-base font-semibold">
        Email us
      </h2>
      <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
        {[
          ['Nicolas', 'nico@codisans.com'],
          ['Sebastian', 'sebastian@codisans.com'],
        ].map(([label, email]) => (
          <div key={email}>
            <dt className="text-theme-950 font-semibold">{label}</dt>
            <dd>
              <Link
                href={`mailto:${email}`}
                className="text-theme-600 hover:text-theme-950"
              >
                {email}
              </Link>
            </dd>
          </div>
        ))}
      </dl>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-theme-950 text-base font-semibold">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

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
export default async function Contact() {
  const t = await getTranslations('ContactPage')

  return (
    <RootLayout>
      <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
        <p>{t('intro')}</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
