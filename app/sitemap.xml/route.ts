import { NextResponse } from 'next/server'

const BASE_URL = 'https://tarkhineh-1307.vercel.app'

export async function GET() {
  const staticRoutes = [
    '',
    '/about',
    '/menu',
    '/branches',
    '/contact',
  ]

  const staticXML = staticRoutes.map(
    (route) => `
    <url>
      <loc>${BASE_URL}${route}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
  )

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[...staticXML].join('')}
  </urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
