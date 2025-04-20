NEXT.js Example Project for Static bashpath
===================

A Next.js example project demonstrating static export with a basePath setting.

Hightlights:

- `next.config.js` with a `basePath` setting:
```typescript
const nextConfig = {
    output: 'export', // Exports the app as static HTML files
    trailingSlash: true, // Adds a trailing slash to the end of each route (e.g., /about/)
    basePath: '/next-app/out', // Your desired path prefix
}
```

- Since Next.js `basePath` is not automatically applied to some components, you can use the `basePath` value imported from `next.config.js` to handle [`Image`](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath#images) sources, as well as other resources like `Script` and external `<link>` tags:
```typescript
import Image from 'next/image'
import { basePath } from '../next.config' // Get the basePath from the next config file

export default function Example() {
  return (
    ...
      <Image
        src={`${basePath}/next.svg`}
    ...
  )
}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000/basepath](http://localhost:3000/basepath) in your browser (replace /basepath with your actual basePath setting) to see the result.

## Deploying

Since this project is set up for [Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports), you can simply run the build command to generate the static files:

```bash
npm run build
```

Then deploy the contents of the `out` folder to your host server, making sure it's served under the specified `basePath`.
