import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-theme-300' : 'text-theme-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-theme-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Santiago" invert={invert}>
          Las Flores 33
          <br />
          Colina
        </Office>
      </li>
    </ul>
  )
}
