<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-inner">
        <h1 class="hero-title">Your Independent Kakobuy Spreadsheet Resource Hub</h1>
        <p class="hero-subtitle">Product Guides, Category Breakdowns & Buying Tips — All in One Place</p>
        <p class="hero-desc">Navigate the Kakobuy Spreadsheet platform with confidence. We organize product information, sizing guides, quality checks, and purchasing resources so you can make informed decisions without searching through scattered forums.</p>
        <!-- Category Buttons -->
        <div class="hero-buttons">
          <a
            v-for="cat in categories"
            :key="cat.id"
            :href="`/${cat.id}`"
            class="hero-btn"
          >
            <span class="btn-icon">{{ cat.icon }}</span>
            <span class="btn-text">{{ cat.name }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Announcement -->
    <section class="announcement-bar" v-if="announcement">
      <div class="container">
        <span class="announcement-icon">&#128227;</span>
        <span>{{ announcement }}</span>
      </div>
    </section>

    <!-- Value Proposition / Introduction Section -->
    <section class="intro-section">
      <div class="container">
        <h2 class="section-title">What You Will Find Here</h2>
        <div class="intro-grid">
          <div class="intro-card">
            <div class="intro-icon"></div>
            <h3>Kakobuy Spreadsheet Guide</h3>
            <p>Step-by-step resources for navigating the platform — from <a href="/Kakobuy-for-beginners/">getting started</a> to <a href="/Kakobuy-how-to-use/">placing your first order</a> and understanding <a href="/Kakobuy-shipping-guide/">shipping options</a>.</p>
          </div>
          <div class="intro-card">
            <div class="intro-icon">📋</div>
            <h3>Product Database</h3>
            <p>Browse our <a href="/Kakobuy-spreadsheet/">organized spreadsheet</a> with product listings, pricing details, batch information, and direct links — regularly maintained and easy to search.</p>
          </div>
          <div class="intro-card">
            <div class="intro-icon">🔍</div>
            <h3>Quality Resources</h3>
            <p>Learn how to evaluate products using <a href="/Kakobuy-qc-photos/">QC photo inspection</a>, <a href="/Kakobuy-legit-check/">legit check steps</a>, and <a href="/Kakobuy-reviews/">community feedback</a> before committing to a purchase.</p>
          </div>
          <div class="intro-card">
            <div class="intro-icon">📂</div>
            <h3>Category Breakdowns</h3>
            <p>Detailed guides for each product type — <a href="/shoes/">sneakers and footwear</a>, <a href="/clothes/">apparel and streetwear</a>, <a href="/hats/">headwear</a>, and more — with sizing tips and material information.</p>
          </div>
        </div>
        <div class="intro-cta">
          <p class="intro-cta-text">
            Kakobuylinki.com is an independently maintained resource site. We organize product information, buying guides, and platform tutorials in one place — 
            so you spend less time searching through forums and more time finding what you actually need.
          </p>
        </div>
      </div>
    </section>

    <!-- Category Cards -->
    <section class="categories-section">
      <div class="container">
        <h2 class="section-title">Explore Categories</h2>
        <div class="category-grid">
          <a
            v-for="cat in categories"
            :key="cat.id"
            :href="`/${cat.id}`"
            class="category-card"
          >
            <div class="cat-icon">{{ cat.icon }}</div>
            <h3>{{ cat.name }}</h3>
            <p>{{ cat.description }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Featured Articles Navigation -->
    <section class="featured-articles">
      <div class="container">
        <h2 class="section-title">Featured Articles</h2>
        <div class="article-nav-grid">
          <!-- Getting Started -->
          <div class="article-nav-group">
            <h3 class="group-title"> Getting Started</h3>
            <ul class="article-nav-list">
              <li><a href="/Kakobuy-for-beginners/">Kakobuy Spreadsheet for Beginners — Complete Starter Guide</a></li>
              <li><a href="/Kakobuy-how-to-use/">How to Use Kakobuy Spreadsheet — Step by Step</a></li>
              <li><a href="/Kakobuy-account-creation/">Account Creation & Setup Guide</a></li>
              <li><a href="/Kakobuy-shipping-guide/">Shipping Guide — Methods & Times</a></li>
              <li><a href="/Kakobuy-payment-guide/">Payment Guide — Safe Checkout Tips</a></li>
            </ul>
          </div>
          <!-- Top Categories -->
          <div class="article-nav-group">
            <h3 class="group-title"> Top Categories</h3>
            <ul class="article-nav-list">
              <li><a href="/Kakobuy-sneakers/">Sneakers Guide — Best Picks 2026</a></li>
              <li><a href="/Kakobuy-hoodies/">Hoodies Guide — Streetwear Essentials</a></li>
              <li><a href="/Kakobuy-t-shirts/">T-Shirts Guide — Everyday Style</a></li>
              <li><a href="/Kakobuy-bags/">Bags Guide — Backpacks & More</a></li>
              <li><a href="/Kakobuy-accessories/">Accessories Guide — Complete Your Look</a></li>
            </ul>
          </div>
          <!-- Popular Brands -->
          <div class="article-nav-group">
            <h3 class="group-title">? Popular Brands</h3>
            <ul class="article-nav-list">
              <li><a href="/Kakobuy-nike/">Nike Guide — Sneakers & Apparel</a></li>
              <li><a href="/Kakobuy-jordan/">Jordan Guide — Iconic Silhouettes</a></li>
              <li><a href="/Kakobuy-adidas/">Adidas Guide — Classics & New Drops</a></li>
              <li><a href="/Kakobuy-chrome-hearts/">Chrome Hearts — Luxury Streetwear</a></li>
              <li><a href="/Kakobuy-essentials/">Essentials — Minimalist Streetwear</a></li>
            </ul>
          </div>
          <!-- Save Money -->
          <div class="article-nav-group">
            <h3 class="group-title"> Save Money</h3>
            <ul class="article-nav-list">
              <li><a href="/Kakobuy-coupon/">Coupon Codes & Discount Guide</a></li>
              <li><a href="/Kakobuy-best-deals/">Best Deals — Seasonal Sales</a></li>
              <li><a href="/Kakobuy-cheap-sneakers/">Cheap Sneakers — Budget Picks</a></li>
              <li><a href="/Kakobuy-budget-hoodies/">Budget Hoodies — Under $30</a></li>
              <li><a href="/Kakobuy-save-money/">Money-Saving Tips & Hacks</a></li>
            </ul>
          </div>
          <!-- Trust & Safety -->
          <div class="article-nav-group">
            <h3 class="group-title"> Trust & Safety</h3>
            <ul class="article-nav-list">
              <li><a href="/is-Kakobuy-legit/">Is Kakobuy Spreadsheet Legit? — Full Review</a></li>
              <li><a href="/Kakobuy-legit-check/">Legit Check Guide</a></li>
              <li><a href="/Kakobuy-qc-photos/">QC Photos — What to Look For</a></li>
              <li><a href="/Kakobuy-reviews/">User Reviews & Ratings</a></li>
              <li><a href="/Kakobuy-reddit/">Reddit Community Insights</a></li>
            </ul>
          </div>
          <!-- Regional Guides -->
          <div class="article-nav-group">
            <h3 class="group-title"> Regional & International</h3>
            <ul class="article-nav-list">
              <li><a href="/Kakobuy-uk/">Kakobuy Spreadsheet UK — Shipping & Tips</a></li>
              <li><a href="/Kakobuy-canada/">Kakobuy Spreadsheet Canada — Complete Guide</a></li>
              <li><a href="/Kakobuy-australia/">Kakobuy Spreadsheet Australia — Local Info</a></li>
              <li><a href="/Kakobuy-europe/">Kakobuy Spreadsheet Europe — EU Shipping</a></li>
              <li><a href="/Kakobuy-international-shipping/">International Shipping Guide</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="quick-links">
      <div class="container">
        <h2 class="section-title">Quick Access</h2>
        <div class="links-grid">
          <a :href="links.spreadsheet" target="_blank" rel="nofollow" class="quick-link-card">
            <div class="ql-icon">&#128203;</div>
            <h3>Product Spreadsheet</h3>
            <p>Browse the full product catalog with prices, links, and QC photos.</p>
          </a>
          <a href="/blog" class="quick-link-card">
            <div class="ql-icon">&#128218;</div>
            <h3>Blog</h3>
            <p>Read our latest guides, reviews, and shopping tips across all categories.</p>
          </a>
          <a href="/about" class="quick-link-card">
            <div class="ql-icon">&#8505;</div>
            <h3>About Us</h3>
            <p>Learn more about our mission and how we help you find the best products.</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Explore More -->
    <section class="explore-more">
      <div class="container">
        <h2 class="section-title">Explore More</h2>
        <div class="explore-grid">
          <a href="/about" class="explore-card">
            <div class="explore-icon">&#8505;</div>
            <h3>About</h3>
            <p>Learn more about our mission and how we help you find the best products.</p>
          </a>
          <a href="/blog" class="explore-card">
            <div class="explore-icon">&#128218;</div>
            <h3>Blog</h3>
            <p>Read our latest guides, reviews, and shopping tips.</p>
          </a>
          <a href="/shoes" class="explore-card">
            <div class="explore-icon">&#128095;</div>
            <h3>Shoes</h3>
            <p>Discover the best sneakers, boots, and casual footwear.</p>
          </a>
          <a href="/clothes" class="explore-card">
            <div class="explore-icon">&#128085;</div>
            <h3>Clothes</h3>
            <p>Explore streetwear, hoodies, jackets, and more.</p>
          </a>
          <a href="/hats" class="explore-card">
            <div class="explore-icon">🔍</div>
            <h3>Hats</h3>
            <p>Find the perfect cap, beanie, or bucket hat.</p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { siteConfig } from '../site-config.js'

const brand = siteConfig.brand
const categories = siteConfig.categories
const announcement = siteConfig.announcement
const links = siteConfig.links
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero */
.hero {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 80px 20px;
  text-align: center;
}

.hero-inner {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 48px;
  font-weight: 800;
  color: #d4af37;
  margin-bottom: 16px;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 22px;
  color: #fff;
  font-weight: 400;
  margin-bottom: 16px;
}

.hero-desc {
  font-size: 16px;
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
}

/* Hero Buttons */
.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: rgba(255,255,255,0.1);
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 12px;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.hero-btn:hover {
  background: rgba(212,175,55,0.2);
  border-color: #d4af37;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(212,175,55,0.3);
}

.btn-icon {
  font-size: 20px;
}

.btn-text {
  letter-spacing: 0.5px;
}

/* Announcement */
.announcement-bar {
  background: #fff8e1;
  border-bottom: 1px solid #ffe082;
  padding: 12px 20px;
  text-align: center;
}

.announcement-bar .container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  color: #6d4c00;
}

.announcement-icon {
  font-size: 16px;
}

/* Intro / Value Proposition Section */
.intro-section {
  padding: 64px 0;
  background: #fff;
}

.intro-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.intro-card {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 28px 22px;
  text-align: center;
  transition: all 0.3s ease;
}

.intro-card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  transform: translateY(-4px);
  border-color: #d4af37;
}

.intro-icon {
  font-size: 40px;
  margin-bottom: 14px;
}

.intro-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.intro-card p {
  font-size: 14px;
  color: #555;
  line-height: 1.7;
}

.intro-card a {
  color: #8b0000;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.intro-card a:hover {
  color: #d4af37;
  text-decoration: underline;
}

.intro-cta {
  background: linear-gradient(135deg, #f8f9fa 0%, #fff8f0 100%);
  border: 1px solid #e8e0d8;
  border-radius: 16px;
  padding: 32px 28px;
  text-align: center;
}

.intro-cta-text {
  font-size: 16px;
  color: #444;
  line-height: 1.8;
  max-width: 750px;
  margin: 0 auto;
  font-style: italic;
}

/* Categories */
.categories-section {
  padding: 64px 0;
  background: #f8f9fa;
}

.section-title {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 40px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.category-card {
  display: block;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 32px 24px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
}

.category-card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  transform: translateY(-4px);
  border-color: #d4af37;
}

.cat-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.category-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.category-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
}

/* Featured Articles Navigation */
.featured-articles {
  padding: 64px 0;
  background: #fff;
}

.article-nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
}

.article-nav-group {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 24px 22px;
}

.group-title {
  font-size: 17px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 2px solid #d4af37;
}

.article-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.article-nav-list li {
  margin-bottom: 8px;
}

.article-nav-list a {
  font-size: 14px;
  color: #555;
  text-decoration: none;
  line-height: 1.5;
  transition: all 0.3s ease;
  display: block;
  padding: 4px 8px;
  border-radius: 6px;
}

.article-nav-list a:hover {
  color: #8b0000;
  background: rgba(139, 0, 0, 0.05);
  padding-left: 14px;
}

/* Quick Links */
.quick-links {
  padding: 0 0 64px;
  background: #fff;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.quick-link-card {
  display: block;
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 32px 24px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.quick-link-card:hover {
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.ql-icon {
  font-size: 36px;
  margin-bottom: 12px;
}

.quick-link-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.quick-link-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* Explore More */
.explore-more {
  background: #f8f9fa;
  padding: 64px 0;
}

.explore-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.explore-card {
  display: block;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 28px 20px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
}

.explore-card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  transform: translateY(-4px);
  border-color: #d4af37;
}

.explore-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.explore-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.explore-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .hero { padding: 48px 20px; }
  .hero-title { font-size: 32px; }
  .hero-subtitle { font-size: 18px; }
  .section-title { font-size: 24px; }
  .category-grid { grid-template-columns: 1fr; }
  .links-grid { grid-template-columns: 1fr; }
  .explore-grid { grid-template-columns: 1fr; }
  .intro-grid { grid-template-columns: 1fr; }
  .article-nav-grid { grid-template-columns: 1fr; }
}
</style>
