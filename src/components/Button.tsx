import { Link } from '@/i18n/navigation'
import clsx from 'clsx'

type ButtonProps = {
  invert?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex cursor-pointer rounded-full px-4 py-1.5 text-sm font-semibold transition-all shadow-hidden hover:shadow-button',
    invert
      ? 'bg-white text-theme-950 shadow-theme-600'
      : 'bg-theme-950 text-white shadow-theme-400',
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
