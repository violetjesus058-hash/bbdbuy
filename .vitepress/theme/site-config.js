// ============================================================
// Kakobuy Spreadsheet Site Configuration
// Kakobuylinki.com - Fashion Finds Resource & Buying Guide
// ============================================================

export const siteConfig = {

  // ---- Brand ----
  brand: {
    name: 'Kakobuy Spreadsheet',
    tagline: 'Fashion Finds Resource & Buying Guide',
    description: 'Independent resource for Kakobuy Spreadsheet shoppers. Product guides, category breakdowns, sizing tips, and spreadsheet access — organized in one place.',
    primaryColor: '#8B0000',
    accentColor: '#d4af37',
    logoText: 'Kakobuy Spreadsheet',
  },

  // ---- Navigation ----
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Shoes', link: '/shoes' },
    { text: 'Clothes', link: '/clothes' },
    { text: 'Hats', link: '/hats' },
    { text: 'About', link: '/blog/about' },
    { text: 'Blog', link: '/blog' },
  ],

  // ---- Main Categories ----
  categories: [
    {
      id: 'shoes',
      name: 'Shoes',
      icon: '',
      description: 'Sneaker selection, sizing tips, and popular styles. From running shoes to casual everyday footwear.',
    },
    {
      id: 'clothes',
      name: 'Clothes',
      icon: '',
      description: 'Hoodies, jackets, t-shirts, and seasonal fashion. Fabric guides and fit profiles for every style.',
    },
    {
      id: 'hats',
      name: 'Hats',
      icon: '',
      description: 'Caps, beanies, and bucket hats. Style matching guide and sizing tips for every face shape.',
    },
  ],

  // ---- External Links ----
  links: {
    spreadsheet: 'https://docs.google.com/spreadsheets/d/10e9euL3y7Bw7GvWUhX2FruG8mJWXz8C7eNwTo69XoQA/edit?gid=1903531254#gid=1903531254',
    contact: 'mailto:hello@kakobuylinki.com',
  },

  // ---- SEO Defaults ----
  seo: {
    hostname: 'https://kakobuylinki.com',
    title: 'Kakobuy Spreadsheet Guide 2026 - Fashion Finds, Product Database & Buying Tips',
    description: 'Independent Kakobuy Spreadsheet resource with product guides, category breakdowns, sizing tips, and spreadsheet access. Updated July 2026.',
    keywords: ['kakobuy spreadsheet guide', 'kakobuy spreadsheet', 'fashion finds', 'sneaker guide', 'streetwear guide', 'buying guide', 'product database', 'product details', 'sizing tips'],
    ga4: 'G-XTJTTBZTPM',
  },

  // ---- Announcement Bar ----
  announcement: 'Product guides and spreadsheet updated regularly. Browse by category below.',
}
