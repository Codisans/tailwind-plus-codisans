import {Link} from '@/i18n/navigation'
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
    'inline-flex cursor-pointer relative before:absolute before:inset-0 before:rounded-full before:transition-all before:ease-out before:duration-300 hover:before:inset-[0.1rem] after:inset-0 after:transition-all after:ease-out after:duration-300 hover:after:-inset-[0.1rem] after:border after:rounded-full after:absolute rounded-full px-4 py-1.5 text-sm font-semibold transition-all',
    invert
      ? 'before:bg-white text-neutral-950 after:border-white'
      : 'before:bg-neutral-950 text-white after:border-neutral-950',
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
