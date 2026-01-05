'use client'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { StaticImageData } from 'next/image'
import { useId, useRef, useState, useEffect } from 'react'
import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'
import { motion, AnimatePresence, useScroll } from 'framer-motion'

export function StickyListBlock({
  eyebrow,
  title,
  description,
  items,
  className,
}: {
  eyebrow: string
  title: string
  description: string
  items: {
    title: string
    description: string
    image: StaticImageData
  }[]
  className?: string
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Track scroll progress of the scrollRef container
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    // Only activate scroll progress on screens >= 64rem (1024px / lg breakpoint)
    const mediaQuery = window.matchMedia('(min-width: 64rem)')
    let unsubscribe: (() => void) | undefined

    const setupScrollListener = () => {
      if (mediaQuery.matches) {
        // Subscribe to scroll progress changes
        unsubscribe = scrollYProgress.on('change', (progress) => {
          // Calculate which item should be active based on scroll progress
          // Create snap points for each item (divide progress into equal segments)
          const totalItems = items.length

          // Add a slight offset to make the snap happen at 50% through each segment
          // This creates a more centered snap effect
          const snapProgress = Math.min(Math.max(progress, 0), 1)
          const rawIndex = snapProgress * totalItems

          // Snap to the nearest index
          const newIndex = Math.min(Math.floor(rawIndex), totalItems - 1)

          setActiveIndex(newIndex)
        })
      }
    }

    // Reset animation and setup listener on mount
    setActiveIndex(0)
    setupScrollListener()

    // Handle screen resize - reset animation when layout changes
    const handleResize = () => {
      // Reset to first item whenever layout changes
      setActiveIndex(0)

      // Clean up old listener if it exists
      if (unsubscribe) {
        unsubscribe()
        unsubscribe = undefined
      }

      // Setup new listener if on large screen
      setupScrollListener()
    }

    mediaQuery.addEventListener('change', handleResize)

    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
      mediaQuery.removeEventListener('change', handleResize)
    }
  }, [scrollYProgress, items.length])

  return (
    <>
      <SectionIntro className="mt-24" eyebrow={eyebrow} title={title}>
        <p>{description}</p>
      </SectionIntro>
      <Container>
        <div
          ref={scrollRef}
          className="grid max-lg:mt-12 lg:h-[400vh] lg:grid-cols-2"
        >
          <div className="max-lg:hidden">
            <div className="sticky top-0 flex h-screen items-center">
              <div className="h-max w-120 flex-none lg:w-130">
                <ImageMask>
                  <div
                    className="flex w-full flex-col transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateY(-${activeIndex * 25}%)`,
                    }}
                  >
                    {items.map((item, i) => (
                      <Image
                        key={i}
                        src={item.image}
                        sizes="(min-width: 1024px) 41rem, 31rem"
                        alt={item.title}
                        className="aspect-719/680 w-full object-cover"
                      />
                    ))}
                  </div>
                </ImageMask>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col max-lg:gap-y-12">
              {items.map((item, index) => (
                <div
                  key={item.title}
                  className="flex snap-center gap-y-4 max-lg:flex-col lg:h-screen lg:items-center"
                >
                  <ImageMask className="max-w-xs max-sm:self-end sm:ml-40 lg:hidden">
                    <Image
                      src={item.image}
                      sizes="(min-width: 1024px) 41rem, 31rem"
                      alt={item.title}
                      className="aspect-719/680 w-full object-cover"
                    />
                  </ImageMask>
                  <FadeIn className="max-w-md">
                    <div>
                      <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-theme-950 sm:text-4xl">
                        {item.title}
                      </h2>
                      <p className="mt-6">{item.description}</p>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

const shape = {
  width: 719,
  height: 680,
  path: 'M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z',
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export function ImageMask({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  let id = useId()
  let { width, height, path } = shape

  return (
    <div className={clsx(className, 'relative aspect-719/680 w-full')}>
      <svg viewBox={`0 0 ${width} ${height}`} fill="none" className="h-full">
        <g clipPath={`url(#${id}-clip)`} className="group">
          <g>
            <foreignObject width={width} height={height}>
              {children}
            </foreignObject>
          </g>
          <use
            href={`#${id}-shape`}
            strokeWidth="2"
            className="stroke-theme-950/10"
          />
        </g>
        <defs>
          <clipPath id={`${id}-clip`}>
            <path
              id={`${id}-shape`}
              d={path}
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
