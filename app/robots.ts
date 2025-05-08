import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/user/',
    },
    sitemap: 'https://tarkhineh-1307.vercel.app/sitemap.xml',
  }
}