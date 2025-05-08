import prisma from '@/prisma/prismaClient'
import { MetadataRoute } from 'next'

const BASE_URL = 'https://tarkhineh-1307.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // گرفتن اطلاعات از دیتابیس
  const foods = await prisma.foods.findMany({
    select: { id: true },
  })

  const branches = await prisma.branchs.findMany({
    select: { id: true },
  })

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/menu`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/branches`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  // غذاها
  const foodRoutes: MetadataRoute.Sitemap = foods.map((food) => ({
    url: `${BASE_URL}/menu/${food.id}`,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // شعبه‌ها
  const branchRoutes: MetadataRoute.Sitemap = branches.map((branch) => ({
    url: `${BASE_URL}/branches/${branch.id}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))


  return [...staticRoutes, ...foodRoutes, ...branchRoutes]
}
