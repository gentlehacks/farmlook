export default function sitemap() {
  return [
    {
      url: 'https://farmlook-site.com.ng', // Your actual domain
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Add more routes here if you have them, like /about or /blog
  ]
}
