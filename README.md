# Studio

Studio is a [Tailwind Plus](https://tailwindcss.com/plus) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

This project requires Node.js 20.9 or newer.

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## Adding a lightweight project

Projects without a written case study live in `src/data/projects.ts`. Add the
project image to `src/images`, import it, and add one entry:

```ts
import projectImage from '@/images/example-project.webp'

export const lightweightProjects: LightweightProjectDefinition[] = [
  {
    slug: 'example-project',
    client: 'Example Client',
    title: {
      en: 'A concise description of the finished project',
      es: 'Una descripción breve del proyecto terminado',
    },
    description: {
      en: 'What Codisans designed or built and why it mattered.',
      es: 'Qué diseñó o desarrolló Codisans y por qué fue importante.',
    },
    date: '2026-08',
    image: projectImage,
    service: ['software-development'],
    url: 'https://example.com',
  },
]
```

The project will appear on the Work page automatically and link to its live
URL. If a Spanish title or description is omitted, the English text is used as
a fallback. To feature it on the homepage or a service page, add its `slug` to
that page's existing project slug list.

Full case studies continue to use the localized MDX files under
`src/app/[locale]/work`.

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Framer Motion](https://www.framer.com/docs/) - the official Framer Motion documentation
- [MDX](https://mdxjs.com/) - the official MDX documentation
