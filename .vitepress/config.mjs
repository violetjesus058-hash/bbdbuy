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
    // Google Tag Manager
    ['script', {}, `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P7CCW56D');
    `],
    // Consent Mode v2 — default all denied, load gtag only after consent
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){window.dataLayer.push(arguments);};
      gtag('consent', 'default', {
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'wait_for_update': 500
      });
      gtag('js', new Date());
      gtag('config', '${seo.ga4}', { 'anonymize_ip': true });
      gtag('config', 'AW-18355431983', { 'anonymize_ip': true });
    `],
    ['script', {}, `
      (function() {
        if (localStorage.getItem('consentGranted') === 'true') {
          var s1 = document.createElement('script');
          s1.async = true;
          s1.src = 'https://www.googletagmanager.com/gtag/js?id=${seo.ga4}';
          document.head.appendChild(s1);
          var s2 = document.createElement('script');
          s2.async = true;
          s2.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18355431983';
          document.head.appendChild(s2);
          gtag('consent', 'update', {
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'ad_storage': 'granted',
            'analytics_storage': 'granted'
          });
        }
      })();
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
    // Google Ads conversion tracking for button clicks (only fires when consent granted)
    ['script', {}, `
      document.addEventListener('DOMContentLoaded', function() {
        function sendConversion(sendTo) {
          if (localStorage.getItem('consentGranted') === 'true' && typeof gtag === 'function') {
            gtag('event', 'conversion', {
              'send_to': sendTo,
              'value': 1.0,
              'currency': 'USD'
            });
          }
        }
        document.querySelectorAll('a.cta-spreadsheet').forEach(function(btn) {
          btn.addEventListener('click', function() { sendConversion('AW-18355431983/oXBcCNidqtgcEK_UxrBE'); });
        });
        document.querySelectorAll('.shopping-btn').forEach(function(btn) {
          btn.addEventListener('click', function() { sendConversion('AW-18355431983/-z_fCNWdqtgcEK_UxrBE'); });
        });
      });
    `],
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

  // Inject GTM noscript iframe right after <body>
  transformHtml(code, id) {
    if (id.endsWith('.html')) {
      return code.replace(
        '<body>',
        '<body><!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P7CCW56D" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->'
      )
    }
    return code
  },

  // Generate canonical URLs for each page
  transformPageData(pageData) {
    const canonicalUrl = `${seo.hostname}/${pageData.relativePath.replace(/\.md$/, '').replace(/index$/, '')}`
    pageData.frontmatter.head = pageData.frontmatter.head || []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }]
    )
    return pageData
  },

  srcExclude: [
    // Root-level internal documents (should not be indexed)
    'ARTICLE_PROMPT_GUIDE.md',
    'BANNED_TERMS.md',
    'BATCH_MODIFICATION_PLAN.md',
    'WEBSITE_POSITIONING.md',
    'flexible-article-generator.md',
    'ideas.md',
    // Blog-level internal documents
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
