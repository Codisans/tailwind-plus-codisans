import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from './StylizedImage'
import { StaticImageData } from 'next/image'

export function SectionIntro({
  title,
  eyebrow,
  children,
  smaller = false,
  invert = false,
  image,
  ...props
}: Omit<
  React.ComponentPropsWithoutRef<typeof Container>,
  'title' | 'children'
> & {
  title: string
  eyebrow?: string
  children?: React.ReactNode
  smaller?: boolean
  invert?: boolean
  image?: StaticImageData
}) {
  return (
    <Container {...props}>
      <FadeIn className="grid grid-cols-12 gap-4">
        <div className="col-start-1 col-end-9 max-w-2xl">
          <h2>
            {eyebrow && (
              <>
                <span
                  className={clsx(
                    'mb-6 block font-display text-base font-semibold',
                    invert ? 'text-white' : 'text-theme-950',
                  )}
                >
                  {eyebrow}
                </span>
                <span className="sr-only"> - </span>
              </>
            )}
            <span
              className={clsx(
                'block font-display tracking-tight text-balance',
                smaller
                  ? 'text-2xl font-semibold'
                  : 'text-4xl font-medium sm:text-5xl',
                invert ? 'text-white' : 'text-theme-950',
              )}
            >
              {title}
            </span>
          </h2>
          {children && (
            <div
              className={clsx(
                'mt-6 text-xl',
                invert ? 'text-theme-300' : 'text-theme-600',
              )}
            >
              {children}
            </div>
          )}
        </div>
        {image && (
          <FadeIn className="col-start-9 col-end-13 max-w-xs">
            <StylizedImage
              grayscale={false}
              src={image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end"
            />
          </FadeIn>
        )}
      </FadeIn>
    </Container>
  )
}
