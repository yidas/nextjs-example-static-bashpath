/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Exports the app as static HTML files
    trailingSlash: true, // Adds a trailing slash to the end of each route (e.g., /about/)
    basePath: '/_github/nextjs-example-static-bashpath/out', // Your desired path prefix
}

module.exports = nextConfig
