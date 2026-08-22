<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-brand">
        <a href="/" class="footer-brand-link"><img src="/bbdbuy-logo.png" alt="Bbdbuy logo" class="footer-brand-icon" /><span>{{ brand.logoText }}</span></a>
        <p>{{ brand.description }}</p>
      </div>
      <div class="footer-links">
        <a href="/">Home</a>
        <a href="/blog/">Guides</a>
        <a href="/privacy-policy/">Privacy</a>
        <a :href="sitemapUrl" target="_blank" rel="noopener">Sitemap</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© {{ new Date().getFullYear() }} {{ brand.name }}.</span>
      <span>Fashion discovery, thoughtfully organized.</span>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { siteConfig } from '../site-config.js'

const { brand, seo } = siteConfig
const sitemapUrl = computed(() => `${seo.hostname.replace(/\/$/, '')}/sitemap.xml`)
</script>

<style scoped>
.site-footer { background: #111; color: #fff; padding: 62px 0 24px; }
.footer-container, .footer-bottom { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }
.footer-container { display: flex; align-items: start; justify-content: space-between; gap: 36px; padding-bottom: 48px; }
.footer-brand { max-width: 390px; }
.footer-brand-link { display: inline-flex; align-items: center; gap: 9px; color: #fff; font-size: 19px; font-weight: 800; letter-spacing: -.045em; text-decoration: none; }
.footer-brand-icon { width: 34px; height: 34px; flex: 0 0 34px; object-fit: contain; border-radius: 50%; }
.footer-brand p { margin: 14px 0 0; color: rgba(255, 255, 255, .56); font-size: 14px; line-height: 1.7; }
.footer-links { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 12px 25px; }
.footer-links a { color: rgba(255, 255, 255, .7); font-size: 14px; text-decoration: none; transition: color .18s ease; }
.footer-links a:hover { color: #b6b6ff; }
.footer-bottom { display: flex; justify-content: space-between; gap: 16px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, .14); color: rgba(255,255,255,.4); font-size: 12px; }
@media (max-width: 700px) { .footer-container, .footer-bottom { width: min(100% - 32px, 1180px); } .footer-container, .footer-bottom { flex-direction: column; } .footer-links { justify-content: flex-start; } }
</style>
