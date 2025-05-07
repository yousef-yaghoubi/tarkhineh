import prisma from '@/prisma/prismaClient'
import { NextResponse } from 'next/server'

export async function GET() {
    const baseUrl = 'https://tarkhineh-1307.vercel.app'

    const foods = await prisma.foods.findMany()
    const branches = await prisma.branchs.findMany()

    const staticPaths = [
        '',
        '/about',
        '/contact',
        '/login',
        '/user',
        '/shoping',
        '/search',
        '/represent',
        '/payment-status',
    ]

    const dynamicPaths = [
        ...foods.map((f) => `/food/${f.id}`),
        ...branches.map((b) => `/foods/branches/${b.nickName}`),
    ]

    const allPaths = [...staticPaths, ...dynamicPaths]

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths.map((path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.7'}</priority>
  </url>`).join('')}
</urlset>`

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    })
}
