import { MetadataRoute } from 'next'
import { sortedBlogPosts } from '@/lib/blog-posts'

export const dynamic = 'force-static'

type SitemapEntry = MetadataRoute.Sitemap[number]

/** Keep one entry per URL; blog URLs use their real publish date instead of the build timestamp. */
function dedupeByUrl(
  entries: SitemapEntry[],
  blogUrls: Set<string>,
): SitemapEntry[] {
  const byUrl = new Map<string, SitemapEntry>()

  for (const entry of entries) {
    const existing = byUrl.get(entry.url)
    if (!existing || blogUrls.has(entry.url)) {
      byUrl.set(entry.url, entry)
    }
  }

  return Array.from(byUrl.values())
}

function slugPages(
  baseUrl: string,
  slugs: string[],
  currentDate: string,
  changeFrequency: SitemapEntry['changeFrequency'],
  priority: number,
): SitemapEntry[] {
  return slugs.map(slug => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://haramainumrahtaxi.com'
  const currentDate = new Date().toISOString()
  const blogPostIds = new Set(sortedBlogPosts.map(post => post.id))
  const isNotBlogPost = (slug: string) => !blogPostIds.has(slug)

  const staticPages: SitemapEntry[] = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/our-services/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fleet-taxis-routes/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-taxi-services-pricing/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/book-now/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  const fleetPages = slugPages(
    baseUrl,
    [
      'sedan-sonata-taxi',
      'coaster',
      'toyota-hiace-or-hiroof-2',
      'gmc-yukon-xl',
      'hyundai-minivan-staria',
      'bus',
    ],
    currentDate,
    'monthly',
    0.8,
  )

  // Exclude slugs that are blog posts — those come from sortedBlogPosts with real dates.
  const routePages = slugPages(
    baseUrl,
    [
      'makkah-to-madinah',
      'madinah-to-makkah',
      'makkah-to-jeddah',
      'jeddah-airport-to-makkah',
      'madinah-aiport-to-hotels',
    ].filter(isNotBlogPost),
    currentDate,
    'monthly',
    0.8,
  )

  const servicePages = slugPages(
    baseUrl,
    [
      'airport-taxi-services',
      'hotel-transfers-taxi',
      'hotel-booking-makkah',
      'hotel-booking-madinah',
      'umrah-taxi-services',
      'private-taxi-services',
      'damm-services',
      'fidyah-and-kaffarah',
      'hajj-and-umrah-badal',
      'quran-waqf-services',
      'umrah-guide-and-pdf',
      'umrah-guider-services',
      'qurbani-services',
      'dates-distribution-services',
      'food-package-distribution',
      'water-distribution-services',
    ],
    currentDate,
    'monthly',
    0.8,
  )

  const blogUrls = new Set(
    sortedBlogPosts.map(post => `${baseUrl}/${post.id}/`),
  )

  const blogPosts: SitemapEntry[] = sortedBlogPosts.map(post => ({
    url: `${baseUrl}/${post.id}/`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const legalPages = slugPages(
    baseUrl,
    ['privacy-policy', 'terms-and-conditions'],
    currentDate,
    'yearly',
    0.3,
  )

  return dedupeByUrl(
    [
      ...staticPages,
      ...fleetPages,
      ...routePages,
      ...servicePages,
      ...blogPosts,
      ...legalPages,
    ],
    blogUrls,
  )
}
