import { defineConfig } from 'vitepress'
import { siteConfig } from './theme/site-config.js'

const { seo, brand } = siteConfig

export default defineConfig({
  vite: {
    ssr: {
      noExternal: [],
    },
    build: {
      rollupOptions: {
        external: (id) => id.startsWith('/manus-storage/'),
      },
    },
  },

  title: brand.name,
  description: brand.description,
  lang: 'en-US',

  head: [
    ['script', { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${seo.ga4}` }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${seo.ga4}');
    `],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: seo.title }],
    ['meta', { property: 'og:description', content: seo.description }],
    ['meta', { property: 'og:image', content: '/favicon.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: seo.title }],
    ['meta', { name: 'twitter:description', content: seo.description }],
    ['meta', { name: 'keywords', content: seo.keywords.join(', ') }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: brand.name,
      url: seo.hostname,
      description: brand.description,
    })],
    ['script', { charset: 'UTF-8', id: 'LA_COLLECT', src: '//sdk.51.la/js-sdk-pro.min.js' }],
    ['script', {}, 'LA.init({id:"3QeJ4R8Vu6YpAFhK",ck:"3QeJ4R8Vu6YpAFhK"})'],
  ],

  themeConfig: {
    nav: siteConfig.nav,

    notFound: {
      quote: 'The page you are looking for does not exist.',
      linkLabel: 'Back to Home',
      linkUrl: '/',
    },

    docFooter: {
      prev: false,
      next: false,
    },

    lastUpdated: false,
    editLink: undefined,
  },

  sitemap: {
    hostname: seo.hostname,
  },

  ignoreDeadLinks: [
    /^\/blog\//,
    /^http:\/\/localhost/,
    /^\/Kakobuy-/,
    /^\/is-/,
  ],

  cleanUrls: 'with-subfolders',

  srcExclude: [
    'blog/kakobuy-article-prompt.md',
    'blog/kakobuy-internal-link-rules.md',
    'blog/kakobuy-product-reference.md',
    'blog/kakobuy-review-report.md',
    'blog/kakobuy-topic-list.md',
    'blog/flexible-article-generator.md',
    'blog/topic-matrix.md',
    'blog/ideas.md',
    'blog/content-checklist.md',
    'blog/local-setup.md',
    'blog/product-workflow.md',
    'blog/website-structure.md',
  ],
})
