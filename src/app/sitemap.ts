import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ssezireturns.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/request-a-quote',
    '/workprocess',
    '/our-team',
    '/faqs',
    '/trackyourparcel',
    '/career',
    '/comingsoon',
    '/login',
    '/register',
    '/term-conditions',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
