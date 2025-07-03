import { type ImageProps } from 'next/image'
import glob from 'fast-glob'
import fs from 'fs/promises'
import path from 'path'

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export interface Article {
  date: string
  title: string
  description: string
  author: {
    name: string
    role: string
    image: ImagePropsWithOptionalAlt
  }
}

export interface ArticleContent {
  type: 'heading' | 'paragraph' | 'image' | 'toptip'
  level?: number // for headings (1-6)
  content?: string
  src?: string // for images
  alt?: string // for images
  children?: ArticleContent[] // for nested content like TopTip
}

export interface FullArticle extends Article {
  slug: string
  href: string
  content: ArticleContent[]
}

export type ArticleEntry = FullArticle & { metadata: Article }

async function loadJsonEntries(): Promise<ArticleEntry[]> {
  const articlesDir = path.join(process.cwd(), 'src/content/articles')
  
  try {
    const files = await glob('*.json', { cwd: articlesDir })
    
    const articles = await Promise.all(
      files.map(async (filename) => {
        const filePath = path.join(articlesDir, filename)
        const fileContent = await fs.readFile(filePath, 'utf-8')
        const article: FullArticle = JSON.parse(fileContent)
        
        const slug = filename.replace('.json', '')
        
        return {
          ...article,
          slug,
          href: `/blog/${slug}`,
          metadata: {
            date: article.date,
            title: article.title,
            description: article.description,
            author: article.author,
          },
        }
      })
    )
    
    return articles.sort((a, b) => b.date.localeCompare(a.date))
  } catch (error) {
    console.warn('No articles directory found, returning empty array')
    return []
  }
}

export function loadArticles() {
  return loadJsonEntries()
}

export async function getArticleBySlug(slug: string): Promise<ArticleEntry | null> {
  const articles = await loadArticles()
  return articles.find(article => article.slug === slug) || null
} 