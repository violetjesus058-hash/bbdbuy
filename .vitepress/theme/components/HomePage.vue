<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-inner">
        <h1 class="hero-title">Your Independent Kakobuy Spreadsheet Resource Hub</h1>
        <p class="hero-subtitle">Product Guides, Category Breakdowns & Buying Tips — All in One Place</p>
        <p class="hero-desc">Explore the Kakobuy Spreadsheet directory with confidence. We organize product information, sizing guides, product details, and shopping resources so you can make informed decisions without searching through scattered forums.</p>
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
            <p>Step-by-step resources for navigating the directory — from <a href="/blog/kakobuy-for-beginners/">getting started</a> to <a href="/blog/kakobuy-how-to-use/">browsing your first category</a> and understanding <a href="/blog/kakobuy-shipping-guide/">product research tips</a>.</p>
          </div>
          <div class="intro-card">
            <div class="intro-icon">📋</div>
            <h3>Product Database</h3>
            <p>Browse our <a href="/blog//kakobuy-spreadsheet/">organized spreadsheet</a> with product listings, pricing details, batch information, and direct links — regularly maintained and easy to search.</p>
          </div>
          <div class="intro-card">
            <div class="intro-icon">🔍</div>
            <h3>Quality Resources</h3>
            <p>Learn how to evaluate products using <a href="/blog/kakobuy-qc-photos/">product information guides</a>, <a href="/blog/kakobuy-legit-check/">research steps</a>, and <a href="/blog/kakobuy-reviews/">community feedback</a> before making your decision.</p>
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

    <!-- How It Works Section -->
    <section class="how-it-works">
      <div class="container">
        <h2 class="section-title">How Kakobuy Spreadsheet Works</h2>
        <p class="section-desc">Kakobuy Spreadsheet is a curated product directory that organizes product information from various sources into easy-to-browse categories. Here is how the directory helps you discover products and make informed decisions.</p>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3>Browse Organized Categories</h3>
            <p>Explore product listings organized by brand, type, and style. The directory covers sneakers, apparel, accessories, bags, watches, and more — each category curated with detailed product information including pricing references, material descriptions, and design specifications.</p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Compare Product Details</h3>
            <p>Each product listing includes standardized information: pricing references, available sizes, material composition, and design features. Compare products side by side within categories to identify options that match your preferences and budget.</p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Access Shopping Resources</h3>
            <p>The directory links to external shopping resources, sizing guides, and product research tools. Use the comprehensive guides — from <a href="/blog/kakobuy-sizing-guide/">sizing references</a> to <a href="/blog/kakobuy-legit-check/">product verification tips</a> — to support your research process before making decisions.</p>
          </div>
          <div class="step-card">
            <div class="step-number">4</div>
            <h3>Make Informed Decisions</h3>
            <p>With organized product information, detailed category guides, and comprehensive shopping resources all in one place, you can research products efficiently without jumping between scattered forums and unreliable sources.</p>
          </div>
        </div>
        <div class="how-cta">
          <p>Kakobuy Spreadsheet does not process payments, handle shipping, inspect products, or manage orders. The platform serves solely as an information resource to support product discovery and research. Users browse organized listings and access external resources for purchasing independently.</p>
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

    <!-- Popular Brands Overview -->
    <section class="brands-overview">
      <div class="container">
        <h2 class="section-title">Popular Brands in the Directory</h2>
        <p class="section-desc">The Kakobuy Spreadsheet directory features comprehensive product information for major fashion and streetwear brands. Each brand page includes organized product listings, pricing references, material details, and design specifications to help you research options effectively.</p>
        <div class="brands-grid">
          <div class="brand-card">
            <h3>Nike</h3>
            <p>The Nike collection spans iconic silhouettes from the classic Air Force 1 to modern Air Max designs. Product listings include pricing references from $12.86 for AF1 Low to $95.93 for Air Max 97, with detailed material information and design specifications for each model.</p>
            <a href="/blog/kakobuy-nike/" class="brand-link">Explore Nike Guide →</a>
          </div>
          <div class="brand-card">
            <h3>Jordan</h3>
            <p>The Jordan directory covers five major silhouettes: Jordan 1 Low, Jordan 3, Jordan 4, Jordan 5, and Jordan 11. Each listing includes pricing references, material composition, and design heritage information. Apparel options like Jordan Hoodies and Shorts are also organized with detailed specifications.</p>
            <a href="/blog/kakobuy-jordan/" class="brand-link">Explore Jordan Guide →</a>
          </div>
          <div class="brand-card">
            <h3>Adidas</h3>
            <p>Adidas products range from classic Superstar and Stan Smith to modern Ultraboost and NMD designs. The directory organizes pricing references from $17.31 for tracksuits to $38.50 for Ultraboost, with material details covering Boost cushioning, Primeknit uppers, and Continental rubber outsoles.</p>
            <a href="/blog/kakobuy-adidas/" class="brand-link">Explore Adidas Guide →</a>
          </div>
          <div class="brand-card">
            <h3>Streetwear Brands</h3>
            <p>Beyond major sportswear, the directory includes streetwear favorites like Chrome Hearts, Essentials, Trapstar, Stussy, and Supreme. Each brand page provides organized product information, pricing references, and style guidance for users researching contemporary streetwear options.</p>
            <a href="/blog/kakobuy-streetwear/" class="brand-link">Explore Streetwear →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Use the Directory -->
    <section class="how-to-use">
      <div class="container">
        <h2 class="section-title">How to Use the Product Directory</h2>
        <p class="section-desc">Getting started with Kakobuy Spreadsheet is straightforward. Follow these steps to navigate the directory effectively and find the product information you need.</p>
        <div class="usage-steps">
          <div class="usage-step">
            <div class="step-icon">📋</div>
            <div class="step-content">
              <h3>Access the Spreadsheet</h3>
              <p>Click the "Access Kakobuy Spreadsheet" button at the top of any page to open the main directory. The spreadsheet is organized by category, with products listed in appropriate sections. You can browse by brand, product type, or price range.</p>
            </div>
          </div>
          <div class="usage-step">
            <div class="step-icon">🔍</div>
            <div class="step-content">
              <h3>Browse Product Categories</h3>
              <p>Explore organized categories including sneakers, hoodies, t-shirts, bags, accessories, and more. Each category page provides an overview of available products with pricing references and key specifications. Use the category navigation to drill down into specific product types.</p>
            </div>
          </div>
          <div class="usage-step">
            <div class="step-icon">📊</div>
            <div class="step-content">
              <h3>Compare Product Information</h3>
              <p>Each product listing includes standardized details: pricing references, material composition, available sizes, and design features. Compare products within categories to identify options that match your preferences. The spreadsheet format makes side-by-side comparison straightforward.</p>
            </div>
          </div>
          <div class="usage-step">
            <div class="step-icon">📏</div>
            <div class="step-content">
              <h3>Check Sizing Resources</h3>
              <p>Before researching any product, consult the <a href="/blog/kakobuy-sizing-guide/">sizing guide</a> for detailed measurements and fit recommendations. Different brands and models fit differently, and understanding sizing helps you make more informed decisions about which products to explore.</p>
            </div>
          </div>
          <div class="usage-step">
            <div class="step-icon">🔗</div>
            <div class="step-content">
              <h3>Access External Resources</h3>
              <p>The directory links to external shopping resources and product information. Use these links to explore products further, check current availability, and access additional details. The spreadsheet serves as your research hub, connecting you to the information you need.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust & Transparency -->
    <section class="trust-section">
      <div class="container">
        <h2 class="section-title">Trust & Transparency</h2>
        <div class="trust-content">
          <div class="trust-intro">
            <p>Kakobuylinki.com is an independently maintained resource site that organizes product information for user research. We believe in complete transparency about what this directory is and what it does.</p>
          </div>
          <div class="trust-grid">
            <div class="trust-card">
              <h3>What We Do</h3>
              <ul>
                <li>Organize product information into accessible categories</li>
                <li>Provide pricing references and product specifications</li>
                <li>Create comprehensive shopping guides and resources</li>
                <li>Help users discover products through organized information</li>
                <li>Link to external shopping resources for independent research</li>
              </ul>
            </div>
            <div class="trust-card">
              <h3>What We Don't Do</h3>
              <ul>
                <li>Process payments or handle transactions</li>
                <li>Manage orders or handle shipping</li>
                <li>Inspect products or operate warehouses</li>
                <li>Sell products directly to consumers</li>
                <li>Provide customer support for purchases</li>
              </ul>
            </div>
          </div>
          <div class="trust-cta">
            <p>Our mission is to help users navigate product information efficiently. By organizing product listings from various sources into one comprehensive directory, we save you time and provide a centralized resource for product research. All purchasing decisions and transactions happen independently through external resources.</p>
            <p>For more information about our approach and methodology, visit our <a href="/blog/blog/about/">About page</a> or read our <a href="/is-Kakobuy-legit/">transparency report</a>.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>What is Kakobuy Spreadsheet?</h3>
            <p>Kakobuy Spreadsheet is a curated product directory that organizes product information from various sources into easy-to-browse categories. The platform helps users discover products through organized categories, detailed product information, and comprehensive shopping resources. It does not process payments, handle shipping, or manage orders.</p>
          </div>
          <div class="faq-item">
            <h3>How do I browse the product directory?</h3>
            <p>Click the "Access Kakobuy Spreadsheet" button at the top of any page to open the main directory. You can browse by category (sneakers, hoodies, bags, etc.), by brand (Nike, Jordan, Adidas, etc.), or use the search function to find specific products. Each listing includes pricing references, material details, and design specifications.</p>
          </div>
          <div class="faq-item">
            <h3>What information does each product listing include?</h3>
            <p>Each product listing includes pricing references, material composition, available sizes, design features, and links to external resources. The standardized format makes it easy to compare products within categories and identify options that match your preferences and budget.</p>
          </div>
          <div class="faq-item">
            <h3>How do I find sizing information?</h3>
            <p>The <a href="/blog/kakobuy-sizing-guide/">sizing guide</a> provides detailed measurements and fit recommendations for popular brands and models. Different brands fit differently, so consult the sizing resources before researching products. The guide covers sneakers, clothing, and accessories with brand-specific recommendations.</p>
          </div>
          <div class="faq-item">
            <h3>Is this website affiliated with the brands listed?</h3>
            <p>No. Kakobuylinki.com is an independent resource site that organizes product information for user research. We are not affiliated with, endorsed by, or sponsored by any of the brands listed in the directory. All brand names and trademarks are property of their respective owners.</p>
          </div>
          <div class="faq-item">
            <h3>How often is the directory updated?</h3>
            <p>The product directory is regularly maintained and updated with new product information, pricing references, and category additions. Our team reviews listings to ensure accuracy and completeness, though users should verify current availability through external resources.</p>
          </div>
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
              <li><a href="/blog/kakobuy-for-beginners/">Kakobuy Spreadsheet for Beginners — Complete Starter Guide</a></li>
              <li><a href="/blog/kakobuy-how-to-use/">How to Use Kakobuy Spreadsheet — Step by Step</a></li>
              <li><a href="/blog/kakobuy-account-creation/">Account Creation & Setup Guide</a></li>
              <li><a href="/blog/kakobuy-shipping-guide/">Shipping Guide — Methods & Times</a></li>
              <li><a href="/blog/kakobuy-payment-guide/">Payment Guide — Safe Checkout Tips</a></li>
            </ul>
          </div>
          <!-- Top Categories -->
          <div class="article-nav-group">
            <h3 class="group-title"> Top Categories</h3>
            <ul class="article-nav-list">
              <li><a href="/blog/kakobuy-sneakers/">Sneakers Guide — Best Picks 2026</a></li>
              <li><a href="/blog/kakobuy-hoodies/">Hoodies Guide — Streetwear Essentials</a></li>
              <li><a href="/blog/kakobuy-t-shirts/">T-Shirts Guide — Everyday Style</a></li>
              <li><a href="/blog/kakobuy-bags/">Bags Guide — Backpacks & More</a></li>
              <li><a href="/blog/kakobuy-accessories/">Accessories Guide — Complete Your Look</a></li>
            </ul>
          </div>
          <!-- Popular Brands -->
          <div class="article-nav-group">
            <h3 class="group-title">? Popular Brands</h3>
            <ul class="article-nav-list">
              <li><a href="/blog/kakobuy-nike/">Nike Guide — Sneakers & Apparel</a></li>
              <li><a href="/blog/kakobuy-jordan/">Jordan Guide — Iconic Silhouettes</a></li>
              <li><a href="/blog/kakobuy-adidas/">Adidas Guide — Classics & New Drops</a></li>
              <li><a href="/blog/kakobuy-chrome-hearts/">Chrome Hearts — Luxury Streetwear</a></li>
              <li><a href="/blog/kakobuy-essentials/">Essentials — Minimalist Streetwear</a></li>
            </ul>
          </div>
          <!-- Save Money -->
          <div class="article-nav-group">
            <h3 class="group-title"> Save Money</h3>
            <ul class="article-nav-list">
              <li><a href="/blog/kakobuy-coupon/">Coupon Codes & Discount Guide</a></li>
              <li><a href="/blog/kakobuy-best-deals/">Best Deals — Seasonal Sales</a></li>
              <li><a href="/blog/kakobuy-cheap-sneakers/">Cheap Sneakers — Budget Picks</a></li>
              <li><a href="/blog/kakobuy-budget-hoodies/">Budget Hoodies — Under $30</a></li>
              <li><a href="/blog/kakobuy-save-money/">Money-Saving Tips & Hacks</a></li>
            </ul>
          </div>
          <!-- Trust & Safety -->
          <div class="article-nav-group">
            <h3 class="group-title"> Trust & Safety</h3>
            <ul class="article-nav-list">
              <li><a href="/is-Kakobuy-legit/">Is Kakobuy Spreadsheet Legit? — Full Review</a></li>
              <li><a href="/blog/kakobuy-legit-check/">Legit Check Guide</a></li>
              <li><a href="/blog/kakobuy-qc-photos/">QC Photos — What to Look For</a></li>
              <li><a href="/blog/kakobuy-reviews/">User Reviews & Ratings</a></li>
              <li><a href="/blog/kakobuy-reddit/">Reddit Community Insights</a></li>
            </ul>
          </div>
          <!-- Regional Guides -->
          <div class="article-nav-group">
            <h3 class="group-title"> Regional & International</h3>
            <ul class="article-nav-list">
              <li><a href="/blog/kakobuy-uk/">Kakobuy Spreadsheet UK — Shipping & Tips</a></li>
              <li><a href="/blog/kakobuy-canada/">Kakobuy Spreadsheet Canada — Complete Guide</a></li>
              <li><a href="/blog/kakobuy-australia/">Kakobuy Spreadsheet Australia — Local Info</a></li>
              <li><a href="/blog/kakobuy-europe/">Kakobuy Spreadsheet Europe — EU Shipping</a></li>
              <li><a href="/blog/kakobuy-international-shipping/">International Shipping Guide</a></li>
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
            <p>Browse the full product catalog with prices, links, and product details.</p>
          </a>
          <a href="/blog" class="quick-link-card">
            <div class="ql-icon">&#128218;</div>
            <h3>Blog</h3>
            <p>Read our latest guides, reviews, and shopping tips across all categories.</p>
          </a>
          <a href="/blog/about" class="quick-link-card">
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
          <a href="/blog/about" class="explore-card">
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

/* Section Description */
.section-desc {
  text-align: center;
  font-size: 16px;
  color: #555;
  line-height: 1.8;
  max-width: 780px;
  margin: -24px auto 40px;
}

/* How It Works */
.how-it-works {
  padding: 64px 0;
  background: #f8f9fa;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.step-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 28px 22px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
}

.step-card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  transform: translateY(-4px);
  border-color: #d4af37;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #1a1a2e, #0f3460);
  color: #d4af37;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 16px;
}

.step-card h3 {
  font-size: 17px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.step-card p {
  font-size: 14px;
  color: #555;
  line-height: 1.7;
}

.step-card a {
  color: #8b0000;
  text-decoration: none;
  font-weight: 600;
}

.step-card a:hover {
  color: #d4af37;
  text-decoration: underline;
}

.how-cta {
  background: linear-gradient(135deg, #fff8f0 0%, #f8f9fa 100%);
  border: 1px solid #e8e0d8;
  border-radius: 16px;
  padding: 24px 28px;
  text-align: center;
}

.how-cta p {
  font-size: 15px;
  color: #555;
  line-height: 1.8;
  max-width: 750px;
  margin: 0 auto;
}

/* Brands Overview */
.brands-overview {
  padding: 64px 0;
  background: #fff;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.brand-card {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 28px 22px;
  transition: all 0.3s ease;
}

.brand-card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  transform: translateY(-4px);
  border-color: #d4af37;
}

.brand-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.brand-card p {
  font-size: 14px;
  color: #555;
  line-height: 1.7;
  margin-bottom: 16px;
}

.brand-link {
  font-size: 14px;
  color: #8b0000;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.brand-link:hover {
  color: #d4af37;
}

/* How to Use */
.how-to-use {
  padding: 64px 0;
  background: #f8f9fa;
}

.usage-steps {
  max-width: 780px;
  margin: 0 auto;
}

.usage-step {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 24px 22px;
  margin-bottom: 16px;
  transition: all 0.3s ease;
}

.usage-step:hover {
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  border-color: #d4af37;
}

.step-icon {
  font-size: 32px;
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  border-radius: 12px;
}

.step-content h3 {
  font-size: 17px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.step-content p {
  font-size: 14px;
  color: #555;
  line-height: 1.7;
  margin: 0;
}

.step-content a {
  color: #8b0000;
  text-decoration: none;
  font-weight: 600;
}

.step-content a:hover {
  color: #d4af37;
  text-decoration: underline;
}

/* Trust Section */
.trust-section {
  padding: 64px 0;
  background: #fff;
}

.trust-content {
  max-width: 900px;
  margin: 0 auto;
}

.trust-intro {
  text-align: center;
  margin-bottom: 32px;
}

.trust-intro p {
  font-size: 16px;
  color: #444;
  line-height: 1.8;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.trust-card {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 28px 24px;
}

.trust-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid #d4af37;
}

.trust-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.trust-card ul li {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  padding: 6px 0;
  padding-left: 20px;
  position: relative;
}

.trust-card ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.trust-card:first-child ul li::before {
  background: #28a745;
}

.trust-card:last-child ul li::before {
  background: #dc3545;
}

.trust-cta {
  background: linear-gradient(135deg, #f8f9fa 0%, #fff8f0 100%);
  border: 1px solid #e8e0d8;
  border-radius: 16px;
  padding: 28px 24px;
  text-align: center;
}

.trust-cta p {
  font-size: 15px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 12px;
}

.trust-cta p:last-child {
  margin-bottom: 0;
}

.trust-cta a {
  color: #8b0000;
  text-decoration: none;
  font-weight: 600;
}

.trust-cta a:hover {
  color: #d4af37;
  text-decoration: underline;
}

/* FAQ Section */
.faq-section {
  padding: 64px 0;
  background: #f8f9fa;
}

.faq-grid {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 16px;
}

.faq-item {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 24px 22px;
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  border-color: #d4af37;
}

.faq-item h3 {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.faq-item p {
  font-size: 14px;
  color: #555;
  line-height: 1.7;
  margin: 0;
}

.faq-item a {
  color: #8b0000;
  text-decoration: none;
  font-weight: 600;
}

.faq-item a:hover {
  color: #d4af37;
  text-decoration: underline;
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
