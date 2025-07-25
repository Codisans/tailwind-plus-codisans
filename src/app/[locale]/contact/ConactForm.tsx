import { useId } from 'react'
import { Button } from '@/components/Button'
import { getTranslations } from 'next-intl/server'

export async function ContactForm({ invert = false }: { invert?: boolean }) {
  const t = await getTranslations('Global')

  return (
    <form className={`${invert ? 'text-white' : 'text-theme-950'}`}>
      <h2 className="font-display text-base font-semibold">
        {t('contact-form-title')}
      </h2>
      <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
        <TextInput label={t('name')} name="name" autoComplete="name" />
        <TextInput
          label={t('email')}
          type="email"
          name="email"
          autoComplete="email"
        />
        <TextInput
          label={t('company')}
          name="company"
          autoComplete="organization"
        />
        <TextInput
          label={t('phone')}
          type="tel"
          name="phone"
          autoComplete="tel"
        />
        <TextInput label={t('message')} name="message" />
        {/* <div className="border border-theme-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
          <fieldset>
            <legend
              className={`text-base/6 ${invert ? 'text-theme-400' : 'text-theme-500'}`}
            >
              {t('budget')}
            </legend>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <RadioInput label="USD $2K ~ $5K" name="budget" value="2-5" />
              <RadioInput label="USD $5K ~ $10K" name="budget" value="5-10" />
              <RadioInput label="USD $10K ~ $20K" name="budget" value="10-20" />
              <RadioInput
                label={`${t('more-than')} USD $20K`}
                name="budget"
                value="20+"
              />
            </div>
          </fieldset>
        </div> */}
      </div>
      <Button type="submit" className="mt-10">
        {t('contact-invitation')}
      </Button>
    </form>
  )
}

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
        className="peer block w-full border border-theme-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-theme-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-theme-950 focus:ring-theme-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-theme-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-theme-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-theme-950"
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
        className="h-6 w-6 flex-none appearance-none rounded-full border border-theme-950/20 outline-hidden checked:border-[0.5rem] checked:border-theme-950 focus-visible:ring-1 focus-visible:ring-theme-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-theme-950">{label}</span>
    </label>
  )
}
