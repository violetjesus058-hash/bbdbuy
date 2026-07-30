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
      id: 'blog/kakobuy-sneakers',
      name: 'Sneakers',
      icon: '',
      description: 'Popular sneaker styles, sizing tips, and trending picks for men.',
    },
    {
      id: 'blog/kakobuy-hoodies',
      name: 'Hoodies',
      icon: '',
      description: 'Essential hoodies from streetwear brands. Fit guides and style tips.',
    },
    {
      id: 'blog/kakobuy-t-shirts',
      name: 'T-Shirts',
      icon: '',
      description: 'Everyday tees and graphic shirts. Fabric quality and fit profiles.',
    },
    {
      id: 'blog/kakobuy-jackets',
      name: 'Jackets',
      icon: '',
      description: 'Outerwear essentials from bombers to windbreakers. Seasonal picks.',
    },
    {
      id: 'blog/kakobuy-pants',
      name: 'Pants',
      icon: '',
      description: 'Jeans, joggers, and cargo pants. Fit guides for every body type.',
    },
    {
      id: 'blog/kakobuy-shirts',
      name: 'Shirts',
      icon: '',
      description: 'Casual and formal shirts. Material guides and styling tips.',
    },
    {
      id: 'blog/kakobuy-accessories',
      name: 'Accessories',
      icon: '',
      description: 'Watches, jewelry, sunglasses, and daily carry essentials.',
    },
    {
      id: 'blog/kakobuy-bags',
      name: 'Bags',
      icon: '',
      description: 'Backpacks, crossbody bags, and totes for everyday use.',
    },
    {
      id: 'blog/kakobuy-watches',
      name: 'Watches',
      icon: '',
      description: 'Timepiece collection from sport to dress watches. Style matching.',
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
