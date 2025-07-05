export function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-theme-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-theme-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-theme-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-theme-950 ring-4 ring-transparent transition placeholder:text-theme-500 focus:border-theme-950 focus:ring-theme-950/5 focus:outline-hidden"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-theme-950 text-white transition hover:bg-theme-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}
