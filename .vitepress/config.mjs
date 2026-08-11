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
    // Consent Mode v2 — default all denied, only set consent defaults
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
          var s3 = document.createElement('script');
          s3.async = true;
          s3.src = 'https://www.googletagmanager.com/gtag/js?id=G-N9BCQ2XS4W';
          document.head.appendChild(s3);
          gtag('consent', 'update', {
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'ad_storage': 'granted',
            'analytics_storage': 'granted'
          });
          setTimeout(function() {
            gtag('js', new Date());
            gtag('config', '${seo.ga4}', { 'anonymize_ip': true });
            gtag('config', 'AW-18355431983', { 'anonymize_ip': true });
            gtag('config', 'G-N9BCQ2XS4W', { 'anonymize_ip': true });
          }, 1000);
        }
      })();
    `],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'preload', as: 'image', href: '/images/hero-1200w.webp', fetchpriority: 'high' }],
    ['link', { rel: 'preconnect', href: 'https://sdk.51.la', crossorigin: '' }],
    ['link', { rel: 'dns-prefetch', href: 'https://collect-v6.51.la' }],
    ['link', { rel: 'preconnect', href: 'https://www.googletagmanager.com', crossorigin: '' }],
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
    ['script', {}, `
      (function() {
        var s = document.createElement('script');
        s.charset = 'UTF-8';
        s.id = 'LA_COLLECT';
        s.src = 'https://sdk.51.la/js-sdk-pro.min.js';
        s.onload = function() {
          if (typeof LA !== 'undefined' && typeof LA.init === 'function') {
            LA.init({id:"3QeJ4R8Vu6YpAFhK",ck:"3QeJ4R8Vu6YpAFhK"});
          }
        };
        s.onerror = function() { console.warn('51.la SDK failed to load'); };
        document.head.appendChild(s);
      })();
    `],
    // Google Ads conversion + GA4 event tracking for all spreadsheet/shopping links
    ['script', {}, `
      (function() {
        function sendTracking(eventName, sendTo) {
          if (localStorage.getItem('consentGranted') === 'true' && typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
              'send_to': sendTo,
              'value': 1.0,
              'currency': 'USD'
            });
            window.gtag('event', eventName, {
              'event_category': 'button_click',
              'event_label': eventName,
              'value': 1.0
            });
          }
        }
        function bindTracking() {
          // Spreadsheet links: homepage CTA buttons + article text links
          document.querySelectorAll('a.cta-spreadsheet, a[href*="docs.google.com/spreadsheets"]').forEach(function(el) {
            if (!el.dataset.tracked) {
              el.dataset.tracked = '1';
              el.addEventListener('click', function() {
                var name = el.classList.contains('cta-spreadsheet') ? 'spreadsheet_button_click' : 'spreadsheet_link_click';
                sendTracking(name, 'AW-18355431983/oXBcCNidqtgcEK_UxrBE');
              });
            }
          });
          // Shopping links: homepage CTA buttons + article shopping buttons
          document.querySelectorAll('a.cta-shopping, .shopping-btn, a[href*="repsootd.com"]').forEach(function(el) {
            if (!el.dataset.tracked) {
              el.dataset.tracked = '1';
              el.addEventListener('click', function() {
                sendTracking('shopping_button_click', 'AW-18355431983/-z_fCNWdqtgcEK_UxrBE');
              });
            }
          });
        }
        // Initial bind
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', bindTracking);
        } else {
          bindTracking();
        }
        // Re-bind on SPA navigation (VitePress uses pushState)
        var observer = new MutationObserver(function() { bindTracking(); });
        observer.observe(document.body, { childList: true, subtree: true });
      })();
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
