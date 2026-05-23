import { MetadataRoute } from 'next'
import { sortedBlogPosts, POSTS_PER_PAGE } from '@/lib/blog-posts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://haramainumrahtaxi.com'
  const currentDate = new Date().toISOString()

  // Static pages with high priority
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/our-services/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fleet-taxis-routes/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-taxi-services-pricing/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/book-now/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Fleet pages
  const fleetPages = [
    'sedan-sonata-taxi',
    'coaster',
    'toyota-hiace-or-hiroof-2',
    'gmc-yukon-xl',
    'hyundai-minivan-staria',
    'bus',
  ].map(slug => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Route pages
  const routePages = [
    'makkah-to-madinah',
    'madinah-to-makkah',
    'makkah-to-jeddah',
    'makkah-to-jeddah-and-jeddah-airport-fare',
    'jeddah-airport-to-makkah',
    'madinah-aiport-to-hotels',
    'taxi-fare-jeddah-airport-to-makkah',
    'madinah-to-makkah-taxi-fare-distance',
    'makkah-to-madinah-taxi-fare-distance',
    'makkah-train-station-to-hotel-masjid-al-haram-taxi-fare',
  ].map(slug => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Service pages
  const servicePages = [
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
  ].map(slug => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts
  const blogPosts = sortedBlogPosts.map(post => ({
    url: `${baseUrl}/${post.id}/`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog pagination pages - REMOVED from sitemap to avoid duplicate content
  // Only the main /blog/ page should be indexed, not pagination pages
  // const blogPaginationPages = Array.from({ length: totalPages - 1 }, (_, i) => ({
  //   url: `${baseUrl}/blog/page/${i + 2}/`,
  //   lastModified: currentDate,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }))

  // Ziyarat and travel guide pages
  const ziyaratPages = [
    'best-ziyarat-places-madinah',
    'best-places-in-makkah',
    'best-places-in-riyadh',
    'best-places-alula-ziyarat-alula',
    'badar-ziyarat-list-best-places-badr',
    'madinah-to-badar-badr-ziyarat-return-taxi-fare-service',
    'cheap-wadi-e-jinn-ziyarat-taxi-madinah-to-wadi-e-jinn-taxi',
    'best-places-to-visit-in-dammam-things-to-do-in-dammam-ksa',
    '7-best-tourist-places-to-visit-in-tabuk-things-to-do-in-tabuk',
    '15-best-places-to-visit-in-jeddah-with-family-things-to-do',
    'wadi-hanifa-garden-park-riyadh-a-complete-tour-guide',
  ].map(slug => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Guide and information pages
  const guidePages = [
    '14-important-taxi-tips-for-pilgrims-or-travelers-in-ksa',
    'are-taxi-services-available-at-train-stations-in-saudi-arabia',
    'best-taxi-pickup-spots-near-masjid-haram',
    'best-umrah-taxi-service-in-ramadan',
    'best-women-or-female-friendly-taxi-services-in-saudi-arab',
    'book-private-haramain-umrah-taxi-online-for-uk-pilgrims',
    'difference-betweeen-damm-fidyah-kaffarah',
    'donate-quran-makkah-madinah-haram',
    'eid-ul-fitr-taxi-services-in-makkah-madinah-saudi-arabia',
    'hajj-quota-by-country-hajj-cost-waiting-list-by-country',
    'how-to-book-a-taxi-in-saudi-arabia-for-international-visitors',
    'how-to-book-the-best-umrah-taxi-online-in-makkah-from-the-uk',
    'how-to-perform-hajj-badal-for-a-deceased-dead-person',
    'how-to-perform-umrah-badal-for-a-deceased-dead-person',
    'is-it-safe-to-use-taxi-service-in-makkah-medina-ksa-at-night',
    'jeddah-airport-parking-fees-hajj-north-terminal-1',
    'nusuk-masar-how-to-apply-umrah-visa-through-nusuk-in-2026',
    'private-umrah-taxi-services-from-indonesia',
    'private-umrah-taxi-services-online-from-the-usa-book-at-discount',
    'taxi-fare-from-makkah-to-masjid-ayesha-masjid-jarana-mikat',
    'taxi-fare-from-makkah-to-taif-taif-to-makkah-taif-ziyarat',
    'uber-vs-taxi-why-haramain-umrah-taxi-cheaper',
    'why-taxi-services-in-ksa-request-visa-and-passport-details',
    'ziyarat-and-umrah-taxi-services-in-shawal-ksa',
  ].map(slug => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Legal pages
  const legalPages = [
    'privacy-policy',
    'terms-and-conditions',
  ].map(slug => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: currentDate,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }))

  return [
    ...staticPages,
    ...fleetPages,
    ...routePages,
    ...servicePages,
    ...ziyaratPages,
    ...guidePages,
    ...blogPosts,
    // ...blogPaginationPages, // REMOVED - pagination pages should not be indexed
    ...legalPages,
  ]
}