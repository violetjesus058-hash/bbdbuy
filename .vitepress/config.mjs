import { defineConfig } from 'vitepress'

const hostname = 'https://bbdbuyspreadsheets.com'
const siteTitle = 'Bbdbuy Spreadsheet'
const siteDescription = 'Explore BBDBuy Finds with BBDBuy Spreadsheet. Browse listed products across categories and brands, then open the external BBDBuy data views.'

export default defineConfig({
  title: siteTitle,
  description: siteDescription,
  lang: 'en-US',
  cleanUrls: 'with-subfolders',

  head: [
    // Google tag (gtag.js) — site-wide Google Analytics property supplied by the site owner
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-0P1YGBJDVL' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0P1YGBJDVL');
    `],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: siteTitle }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:image', content: '/bbdbuy-logo.png' }],
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
          document.querySelectorAll('a.cta-spreadsheet, a[href*="docs.google.com/spreadsheets"], a[href*="productsite-8wf.pages.dev"]').forEach(function(el) {
            if (!el.dataset.tracked) {
              el.dataset.tracked = '1';
              el.addEventListener('click', function() {
                var name = el.classList.contains('cta-spreadsheet') ? 'spreadsheet_button_click' : 'spreadsheet_link_click';
                sendTracking(name);
              });
            }
          });
          document.querySelectorAll('a.cta-shopping, .shopping-btn, a[href*="repsootd.com"]').forEach(function(el) {
            if (!el.dataset.tracked) {
              el.dataset.tracked = '1';
              el.addEventListener('click', function() {
                sendTracking('shopping_button_click');
              });
            }
          });
        }
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', bindTracking);
        } else {
          bindTracking();
        }
        var observer = new MutationObserver(function() { bindTracking(); });
        observer.observe(document.body, { childList: true, subtree: true });
      })();
    `],
  ],

  themeConfig: {
    logo: '/bbdbuy-logo.png',
    siteTitle,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Clothing', link: 'https://productsite-8wf.pages.dev/?view=styles&category=clothing&platform=BBDBuy' },
      { text: 'Shoes', link: 'https://productsite-8wf.pages.dev/?view=styles&category=shoe&platform=BBDBuy' },
      { text: 'Pants', link: 'https://productsite-8wf.pages.dev/?view=styles&category=pants&platform=BBDBuy' },
      { text: 'Accessories', link: 'https://productsite-8wf.pages.dev/?view=styles&category=ACC&platform=BBDBuy' },
      { text: 'All Finds', link: 'https://productsite-8wf.pages.dev/?view=styles&platform=BBDBuy' },
    ],
    sidebar: false,
    outline: false,
  },

  sitemap: {
    hostname,
  },
})
