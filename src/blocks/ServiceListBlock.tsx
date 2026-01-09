'use client'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useCallback } from 'react'
import {
  normalizePaths,
  compilePaths,
  morphCompiled,
  type Compiled,
} from '@/lib/svgPath'

type ServiceListBlockProps = {
  eyebrow?: string
  title: string
  summary?: string
  image?: StaticImageData
  items?: ServiceListItemProps[]
}

export type ServiceListItemProps = {
  title?: string
  description?: string
  href?: string
  service: string
}

export const serviceShapePaths = {
  idle: 'M0 42L23 11L60 0L97 11L120 42L120 78L95 109L60 120L23 109L0 78L0 42Z',
  'software-development':
    'M35 0L85 0L95 30L105 60L95 90L85 120L35 120L25 90L15 60L25 30L35 0Z',
  'e-commerce':
    'M30 0L90 0L120 30L90 60L120 90L90 120L30 120L15 90L0 60L15 30L30 0Z',
  'ai-automation':
    'M8 30L30 10L60 0L90 10L112 30L103 65L85 95L60 120L35 95L17 65L8 30Z',
  'custom-cms':
    'M0 30L30 0L60 0L90 0L120 30L120 90L90 120L60 120L30 120L0 90L0 30Z',
}

export const ServiceListBlock = ({
  eyebrow,
  title,
  summary,
  image,
  items,
}: ServiceListBlockProps) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const activePathRef = useRef<SVGPathElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const normalizedPathsRef = useRef<Compiled | null>(null)
  const currentWeightsRef = useRef<number[]>([])
  const targetWeightsRef = useRef<number[]>([])
  const animationFrameIdRef = useRef<number>(0)
  const currentShapeIndexRef = useRef<number>(0)

  // Get shape paths as an array
  const shapePaths = Object.values(serviceShapePaths)
  const shapeKeys = Object.keys(serviceShapePaths)

  // Animation step function
  const step = useCallback(() => {
    if (!normalizedPathsRef.current || !activePathRef.current) return

    // Calculate current step weights with smooth easing
    // Lower values (e.g., 0.06) = slower/smoother, higher values (e.g., 0.15) = faster
    currentWeightsRef.current = currentWeightsRef.current.map(
      (w, i) => w + (targetWeightsRef.current[i] - w) * 0.04,
    )

    // Calculate morphed path with current step weights
    const currentPath = morphCompiled(
      normalizedPathsRef.current,
      currentWeightsRef.current,
    )

    // Set morphed path to active path
    activePathRef.current.setAttribute('d', currentPath)

    // Check if animation should continue
    const targetDelta =
      targetWeightsRef.current[currentShapeIndexRef.current] -
      currentWeightsRef.current[currentShapeIndexRef.current]

    if (Math.abs(targetDelta) < 0.001) {
      // Stop animation if target approximated
      cancelAnimationFrame(animationFrameIdRef.current)
      return
    }

    animationFrameIdRef.current = requestAnimationFrame(step)
  }, [])

  // Start animation
  const startAnimation = useCallback(() => {
    cancelAnimationFrame(animationFrameIdRef.current)
    step()
  }, [step])

  // Initialize morphing
  useEffect(() => {
    if (!items || items.length === 0 || !activePathRef.current) return

    // Normalize and compile paths once
    normalizedPathsRef.current = compilePaths(normalizePaths(shapePaths))

    // Always start with idle shape
    const idleIndex = shapeKeys.indexOf('idle')
    currentShapeIndexRef.current = idleIndex !== -1 ? idleIndex : 0

    // Initialize weights
    targetWeightsRef.current = shapePaths.map((_, i) =>
      i === currentShapeIndexRef.current ? 1 : 0,
    )
    currentWeightsRef.current = [...targetWeightsRef.current]

    // Set initial path
    const initialPath = morphCompiled(
      normalizedPathsRef.current,
      currentWeightsRef.current,
    )
    activePathRef.current.setAttribute('d', initialPath)
  }, [items, shapePaths, shapeKeys])

  // Handle hover
  const handleMouseEnter = useCallback(
    (service: string) => {
      if (!svgRef.current) return

      console.log('service', service)

      const shapeIndex = shapeKeys.indexOf(service)
      if (shapeIndex === -1 || shapeIndex === currentShapeIndexRef.current)
        return

      currentShapeIndexRef.current = shapeIndex

      // Update target weights
      targetWeightsRef.current = shapePaths.map((_, i) =>
        i === shapeIndex ? 1 : 0,
      )

      startAnimation()
    },
    [shapePaths, shapeKeys, startAnimation],
  )

  // Handle mouse leave - revert to idle
  const handleMouseLeave = useCallback(() => {
    if (!svgRef.current) return

    const idleIndex = shapeKeys.indexOf('idle')
    if (idleIndex === -1 || idleIndex === currentShapeIndexRef.current) return

    currentShapeIndexRef.current = idleIndex

    // Update target weights to idle
    targetWeightsRef.current = shapePaths.map((_, i) =>
      i === idleIndex ? 1 : 0,
    )

    startAnimation()
  }, [shapePaths, shapeKeys, startAnimation])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cancelAnimationFrame(animationFrameIdRef.current)
    }
  }, [])

  return (
    <Container className="service-hover-effect mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="grid grid-cols-12 gap-4">
        <div className="col-start-1 col-end-9 max-w-2xl">
          <h2>
            {eyebrow && (
              <>
                <span
                  className={clsx(
                    'mb-6 block font-display text-base font-semibold text-theme-950',
                  )}
                >
                  {eyebrow}
                </span>
                <span className="sr-only"> - </span>
              </>
            )}
            <span
              className={clsx(
                'block font-display text-4xl font-medium tracking-tight text-balance sm:text-5xl',
              )}
            >
              {title}
            </span>
          </h2>

          <div className={clsx('mt-6 text-xl')}>
            <p>{summary}</p>
          </div>
        </div>
        {image && (
          <FadeIn className="col-start-9 col-end-13 -mr-6 flex items-end overflow-hidden sm:hidden">
            <Image
              src={image?.src as string}
              alt={title}
              width={495}
              height={880}
              className="max-h-full min-w-[max(36vw,13rem)] flex-none object-contain object-center grayscale-95 max-sm:scale-x-[-1]"
            />
          </FadeIn>
        )}
      </FadeIn>

      <div className="mt-16">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {image && (
            <FadeIn className="col-start-1 col-end-3 max-sm:hidden sm:col-end-5">
              <div className="sticky top-[calc((100svh-220px)/2)] flex max-h-full w-full items-center justify-center lg:top-[calc((100svh-360px)/2)]">
                <div className="relative w-full max-w-80">
                  <svg
                    ref={svgRef}
                    className="h-full w-full text-neutral-200"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      ref={activePathRef}
                      className="transition-[fill] duration-500 ease-in-out"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </FadeIn>
          )}
          {items && (
            <FadeInStagger className="col-start-1 col-end-13 sm:col-start-5 lg:col-end-12">
              <ul
                role="list"
                className="flex flex-col gap-8 text-base text-theme-600 lg:pl-4"
              >
                {items?.map((item, index) => (
                  <li
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className={clsx(
                      'group/card relative flex w-full',
                      item.service,
                    )}
                    onMouseEnter={() => handleMouseEnter(item.service)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <FadeIn className="flex w-full">
                      <div className="relative flex w-full flex-col rounded-3xl bg-white p-6 shadow-md ring-1 shadow-theme-400/5 ring-neutral-950/5 transition group-hover/card:bg-neutral-50 group-hover/card:shadow-theme-400/10 sm:p-8">
                        {item.title && (
                          <strong className="font-semibold text-theme-950">{`${item.title}. `}</strong>
                        )}
                        {item.description}
                      </div>
                    </FadeIn>
                    {item.href && (
                      <Link className="absolute inset-0" href={item.href}>
                        <span className="sr-only">{title}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </FadeInStagger>
          )}
        </div>
      </div>
    </Container>
  )
}
