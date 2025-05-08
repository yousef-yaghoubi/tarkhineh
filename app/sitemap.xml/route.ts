import { NextResponse } from 'next/server'
import prisma from '@/prisma/prismaClient'

const BASE_URL = 'https://tarkhineh-1307.vercel.app'

export async function GET() {
  const foods = await prisma.foods.findMany({ select: { id: true } })
  const branches = await prisma.branchs.findMany({ select: { id: true } })

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

  const foodXML = foods.map(
    (food) => `
    <url>
      <loc>${BASE_URL}/menu/${food.id}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`
  )

  const branchXML = branches.map(
    (branch) => `
    <url>
      <loc>${BASE_URL}/branches/${branch.id}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`
  )

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[...staticXML, ...foodXML, ...branchXML].join('')}
  </urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
