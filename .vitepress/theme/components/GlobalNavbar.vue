<template>
  <header class="global-navbar">
    <div class="navbar-container">
      <a href="/" class="navbar-brand">{{ brand.logoText }}</a>

      <nav class="navbar-menu" aria-label="Primary navigation">
        <a
          v-for="item in nav"
          :key="item.link"
          :href="item.link"
          class="nav-item"
          :class="{ active: isActive(item.link) }"
        >
          {{ item.text }}
        </a>
      </nav>

      <a :href="links.spreadsheet" target="_blank" rel="nofollow" class="nav-cta">Open catalog <span aria-hidden="true">↗</span></a>
    </div>
  </header>
</template>

<script setup>
import { siteConfig } from '../site-config.js'
import { useData } from 'vitepress'

const { brand, nav, links } = siteConfig
const { page } = useData()

function isActive(link) {
  if (link === '/') return page.value?.relativePath === 'index.md'
  const path = page.value?.relativePath?.replace(/\.md$/, '') || ''
  return path === link.replace(/^\//, '') || path.startsWith(link.replace(/^\//, '') + '/')
}
</script>

<style scoped>
.global-navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(17, 17, 17, .09);
  background: rgba(255, 255, 255, .92);
  backdrop-filter: blur(14px);
}
.navbar-container {
  display: flex;
  align-items: center;
  width: min(1180px, calc(100% - 48px));
  min-height: 72px;
  margin: 0 auto;
  gap: 34px;
}
.navbar-brand {
  color: #111;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -.045em;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
}
.navbar-menu {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 26px;
  overflow-x: auto;
  scrollbar-width: none;
}
.navbar-menu::-webkit-scrollbar { display: none; }
.nav-item {
  padding: 6px 0;
  color: #6a6a6a;
  font-size: 13px;
  font-weight: 650;
  text-decoration: none;
  white-space: nowrap;
  transition: color .18s ease;
}
.nav-item:hover, .nav-item.active { color: #111; }
.nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 14px;
  border-radius: 7px;
  background: #111;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  transition: background .18s ease, transform .18s ease;
}
.nav-cta:hover { background: #5b5ce2; transform: translateY(-1px); }
@media (max-width: 800px) {
  .navbar-container { width: min(100% - 32px, 1180px); min-height: 64px; gap: 18px; }
  .navbar-menu { justify-content: flex-start; gap: 18px; }
  .navbar-brand { font-size: 15px; }
  .nav-cta { padding: 9px 11px; font-size: 12px; }
}
@media (max-width: 540px) {
  .navbar-container { gap: 12px; }
  .navbar-menu { display: none; }
  .nav-cta { margin-left: auto; }
}
</style>
