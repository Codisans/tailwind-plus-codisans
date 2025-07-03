import clsx from 'clsx'
import { ArticleContent } from '@/lib/articles'
import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { StatList, StatListItem } from '@/components/StatList'
import { TagList, TagListItem } from '@/components/TagList'

interface ArticleRendererProps {
  content: ArticleContent[]
  className?: string
}

const ContentRenderer = ({ item }: { item: ArticleContent }) => {
  switch (item.type) {
    case 'heading':
      const HeadingTag = `h${item.level || 2}` as keyof JSX.IntrinsicElements
      return (
        <HeadingTag className="text-theme-950 mt-8 mb-4 font-display font-semibold tracking-tight">
          {item.content}
        </HeadingTag>
      )

    case 'paragraph':
      return (
        <p className="text-theme-600 mt-6 leading-7">
          {item.content}
        </p>
      )

    case 'image':
      return (
        <div className="rounded-4xl bg-theme-100 group isolate my-10 overflow-hidden max-sm:-mx-6">
          <GrayscaleTransitionImage
            src={item.src || ''}
            alt={item.alt || ''}
            sizes="(min-width: 768px) 42rem, 100vw"
            className="aspect-16/10 w-full object-cover"
          />
        </div>
      )

    case 'toptip':
      return (
        <Border position="left" className="my-10 pl-8">
          <p className="font-display text-theme-950 text-sm font-bold uppercase tracking-widest">
            Top tip
          </p>
          <div className="mt-4">
            {item.children?.map((child, index) => (
              <ContentRenderer key={index} item={child} />
            ))}
          </div>
        </Border>
      )

    default:
      return null
  }
}

export const ArticleRenderer = ({ content, className }: ArticleRendererProps) => {
  return (
    <div
      className={clsx(
        '[&>:first-child]:mt-0! [&>:last-child]:mb-0! *:mx-auto *:max-w-3xl',
        className,
      )}
    >
      {content.map((item, index) => (
        <ContentRenderer key={index} item={item} />
      ))}
    </div>
  )
}

// Keep the same interface as MDXComponents for backward compatibility
export const ArticleComponents = {
  wrapper: ArticleRenderer,
} 