// ============================================================
// Bbdbuy Spreadsheet Site Configuration
// Usfanslinki.com - Fashion Finds Resource & Buying Guide
// ============================================================

export const siteConfig = {

  // ---- Brand ----
  brand: {
    name: 'Bbdbuy Spreadsheet',
    tagline: 'Fashion Finds Resource & Buying Guide',
    description: 'Independent resource for Bbdbuy Spreadsheet shoppers. Product guides, category breakdowns, sizing tips, and spreadsheet access — organized in one place.',
    primaryColor: '#8B0000',
    accentColor: '#d4af37',
    logoText: 'Bbdbuy Spreadsheet',
  },

  // ---- Navigation ----
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Clothing', link: '/clothes' },
    { text: 'Shoes', link: '/shoes' },
    { text: 'Pants', link: '/pants' },
    { text: 'Hats', link: '/hats' },
    { text: 'Accessories', link: '/accessories' },
    { text: 'Electronics', link: '/electronics' },
    { text: 'Blog', link: '/blog' },
  ],

  // ---- Main Categories ----
  categories: [
    {
      id: 'clothes',
      name: 'Bbdbuy Clothing Spreadsheet',
      icon: '',
      description: 'Hoodies, T-shirts, shirts, jackets, dresses and everyday wardrobe guides with direct article paths.',
      blogLink: '/blog/usfans-hoodies/',
      landingLink: '/clothes',
    },
    {
      id: 'shoes',
      name: 'Bbdbuy Shoes Spreadsheet',
      icon: '',
      description: 'Sneakers, basketball shoes, running shoes, football shoes, hiking footwear and boots.',
      blogLink: '/blog/usfans-sneakers/',
      landingLink: '/shoes',
    },
    {
      id: 'pants',
      name: 'Bbdbuy Pants Spreadsheet',
      icon: '',
      description: 'Jeans, pants, shorts, sweatpants and tracksuits with fit and fabric reading paths.',
      blogLink: '/blog/usfans-pants/',
      landingLink: '/pants',
    },
    {
      id: 'hats',
      name: 'Bbdbuy Hats Spreadsheet',
      icon: '',
      description: 'Hats, caps, beanies, bucket hats and fit guides for everyday finishing pieces.',
      blogLink: '/blog/usfans-hats/',
      landingLink: '/hats',
    },
    {
      id: 'accessories',
      name: 'Bbdbuy Accessories Spreadsheet',
      icon: '',
      description: 'Bags, belts, jewelry, sunglasses, watches and wallets with direct article paths.',
      blogLink: '/blog/usfans-accessories/',
      landingLink: '/accessories',
    },
    {
      id: 'electronics',
      name: 'Bbdbuy Electronics Spreadsheet',
      icon: '',
      description: 'Electronics, phones, iPhone resources, AirPods and tech gadget guides.',
      blogLink: '/blog/usfans-electronics/',
      landingLink: '/electronics',
    },
  ],

  // ---- Featured Categories (Trending) ----
  featuredCategories: [
    { name: 'Sneakers', slug: 'sneakers', image: '/images/hero-sneakers.webp' },
    { name: 'Hoodies', slug: 'hoodies', image: '/images/hero-hoodies.webp' },
    { name: 'T-Shirts', slug: 't-shirts', image: '/images/hero-tshirts.webp' },
    { name: 'Jackets', slug: 'jackets', image: '/images/hero-jackets.webp' },
    { name: 'Pants', slug: 'pants', image: '/images/hero-pants.webp' },
    { name: 'Shirts', slug: 'shirts', image: '/images/hero-shirts.webp' },
    { name: 'Bags', slug: 'bags', image: '/images/hero-bags.webp' },
    { name: 'Watches', slug: 'watches', image: '/images/hero-watches.webp' },
    { name: 'Accessories', slug: 'accessories', image: '/images/hero-accessories.webp' },
    { name: 'Streetwear', slug: 'streetwear', image: '/images/hero-streetwear.webp' },
    { name: 'Casual Wear', slug: 'casual-wear', image: '/images/hero-casual.webp' },
    { name: 'New Arrivals', slug: 'new-arrivals', image: '/images/hero-new-arrivals.webp' },
  ],

  // ---- External Links ----
  links: {
    spreadsheet: 'https://docs.google.com/spreadsheets/d/1Vs190yOAkrQ04LQb6l_Lnr_oTA0ny4CI3PJ_0B4_6zs/edit?gid=2086211270#gid=2086211270',
    contact: 'mailto:hello@usfanslinki.com',
  },

  // ---- SEO Defaults ----
  seo: {
    hostname: 'https://usfanslinki.com',
    title: 'Bbdbuy Spreadsheet 2026 - Bbdbuy Finds, Category Guides and Product Research',
    description: 'Explore Bbdbuy Spreadsheet 2026 through organized Bbdbuy finds, category overviews, focused guides and direct spreadsheet access.',
    keywords: ['bbdbuy spreadsheet 2026', 'bbdbuy spreadsheet', 'bbdbuy finds', 'clothing spreadsheet', 'shoes spreadsheet', 'pants spreadsheet', 'hats spreadsheet', 'accessories spreadsheet', 'electronics spreadsheet'],
    ga4: 'G-0P1YGBJDVL',
  },

  // ---- Announcement Bar ----
  announcement: 'Product guides and spreadsheet updated regularly. Browse by category below.',
}
