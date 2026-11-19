// Bbdbuy Spreadsheet — clothing-first site configuration
export const siteConfig = {
  brand: {
    name: 'Bbdbuy Spreadsheet',
    tagline: 'Fashion Finds Resource & Buying Guide',
    description: 'Independent resource for Bbdbuy clothing spreadsheet shoppers. Browse clothing categories, product guides, sizing tips and current spreadsheet access.',
    primaryColor: '#8B0000',
    accentColor: '#d4af37',
    logoText: 'Bbdbuy Spreadsheet',
  },
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Clothing', link: '/clothes' },
    { text: 'Pants', link: '/pants' },
    { text: 'Guides', link: '/blog' },
  ],
  categories: [
    {
      id: 'clothes',
      name: 'Bbdbuy Clothing Spreadsheet',
      icon: '',
      description: 'Hoodies, T-shirts, shirts, jackets, dresses, jeans, pants and everyday wardrobe guides with direct spreadsheet access.',
      blogLink: '/blog/usfans-clothing-guide/',
      landingLink: '/clothes',
    },
  ],
  featuredCategories: [
    { name: 'Hoodies', slug: 'hoodies', image: '/images/hero-hoodies.webp' },
    { name: 'T-Shirts', slug: 't-shirts', image: '/images/hero-tshirts.webp' },
    { name: 'Jackets', slug: 'jackets', image: '/images/hero-jackets.webp' },
    { name: 'Pants', slug: 'pants', image: '/images/hero-pants.webp' },
    { name: 'Shirts', slug: 'shirts', image: '/images/hero-shirts.webp' },
    { name: 'Streetwear', slug: 'streetwear', image: '/images/hero-streetwear.webp' },
    { name: 'Dresses', slug: 'dresses', image: '/images/hero-dresses.webp' },
    { name: 'Jeans', slug: 'jeans', image: '/images/hero-jeans.webp' },
  ],
  links: {
    spreadsheet: 'https://docs.google.com/spreadsheets/d/1Vs190yOAkrQ04LQb6l_Lnr_oTA0ny4CI3PJ_0B4_6zs/edit?gid=2086211270#gid=2086211270',
    contact: 'mailto:hello@usfanslinki.com',
  },
  seo: {
    hostname: 'https://bbdbuyspreadsheets.com',
    title: 'Bbdbuy Clothing Spreadsheet 2026 - Clothing Finds and Guides',
    description: 'Explore the Bbdbuy Clothing Spreadsheet through organized clothing finds, category guides, sizing notes and direct spreadsheet access.',
    keywords: ['bbdbuy clothing spreadsheet', 'bbdbuy spreadsheet', 'clothing spreadsheet', 'hoodie spreadsheet', 't-shirt spreadsheet', 'streetwear spreadsheet', 'clothing size guide'],
    ga4: 'G-0P1YGBJDVL',
  },
  announcement: 'Clothing guides and spreadsheet listings are updated regularly. Browse by category below.',
}
