# Blog System Conversion: MDX to JSON

## Overview

The blog system has been successfully converted from MDX-based components to regular React components that use JSON files for content.

## What Changed

### 1. Data Structure

- **Before**: Articles were defined in MDX files (`page.mdx`) with exported metadata
- **After**: Articles are stored as JSON files in `src/content/articles/`

### 2. Content Rendering

- **Before**: Used `MDXComponents` to render MDX content
- **After**: Uses `ArticleRenderer` component to render JSON-based content

### 3. File Structure

```
src/
├── content/
│   └── articles/
│       └── *.json           # Article content files
├── components/
│   └── ArticleRenderer.tsx  # New renderer component
└── lib/
    └── articles.ts          # New article loading logic
```

### 4. URL Structure

- **Before**: `/blog/blog-post-1/` (based on folder structure)
- **After**: `/blog/article-slug/` (based on JSON filename)

## Creating New Blog Posts

### 1. Create JSON File

Create a new JSON file in `src/content/articles/your-article-slug.json`:

```json
{
  "date": "2023-12-01",
  "title": "Your Article Title",
  "description": "Brief description of your article",
  "author": {
    "name": "Author Name",
    "role": "Author Role",
    "image": { "src": "/images/authors/author.jpg" }
  },
  "content": [
    {
      "type": "heading",
      "level": 2,
      "content": "Your Heading"
    },
    {
      "type": "paragraph",
      "content": "Your paragraph content..."
    },
    {
      "type": "image",
      "src": "/blog/your-article-slug/image.jpg",
      "alt": "Image description"
    },
    {
      "type": "toptip",
      "children": [
        {
          "type": "paragraph",
          "content": "Tip content..."
        }
      ]
    }
  ]
}
```

### 2. Add Images

Place article images in `public/blog/your-article-slug/`

### 3. Supported Content Types

- `heading`: H1-H6 headings (specify `level: 1-6`)
- `paragraph`: Regular text content
- `image`: Images with src and alt text
- `toptip`: Special tip boxes with nested content

## Benefits of JSON Approach

1. **Type Safety**: Full TypeScript support for content structure
2. **Performance**: No runtime MDX compilation
3. **Simplicity**: Easier to validate and parse content
4. **Flexibility**: Can easily extend content types
5. **Tool Support**: Better integration with CMS and editing tools

## Migration Notes

- Existing MDX files need manual conversion to JSON format
- Images need to be moved to `public/blog/article-slug/` structure
- All existing routes will continue to work with the new dynamic routing system
