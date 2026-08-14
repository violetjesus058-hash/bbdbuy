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
    // Google tag (gtag.js) — site-wide Google Analytics property supplied by the site owner
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-9WJTE8DY0P' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9WJTE8DY0P');
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
    // Google Analytics events for spreadsheet and shopping links
    ['script', {}, `
      (function() {
        function sendTracking(eventName) {
          if (typeof window.gtag === 'function') {
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
                sendTracking(name);
              });
            }
          });
          // Shopping links: homepage CTA buttons + article shopping buttons
          document.querySelectorAll('a.cta-shopping, .shopping-btn, a[href*="repsootd.com"]').forEach(function(el) {
            if (!el.dataset.tracked) {
              el.dataset.tracked = '1';
              el.addEventListener('click', function() {
                sendTracking('shopping_button_click');
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
    /^\/Usfans-/,
    /^\/is-/,
  ],

  cleanUrls: 'with-subfolders',

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
    'blog/usfans-article-prompt.md',
    'blog/usfans-internal-link-rules.md',
    'blog/usfans-product-reference.md',
    'blog/usfans-review-report.md',
    'blog/usfans-topic-list.md',
    'blog/flexible-article-generator.md',
    'blog/topic-matrix.md',
    'blog/ideas.md',
    'blog/content-checklist.md',
    'blog/local-setup.md',
    'blog/product-workflow.md',
    'blog/website-structure.md',
  ],
})
