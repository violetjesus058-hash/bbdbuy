<template>
  <div class="seo-home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
          <h1>Kakobuy Spreadsheet</h1>
          <p>Discover 10,000+ Trending Fashion Finds With QC Photos, Verified Links & Updated Categories.</p>
          <a :href="spreadsheetUrl" target="_blank" rel="nofollow" class="cta-button">Browse Spreadsheet</a>
      </div>
    </section>

    <!-- Category Navigation -->
    <section class="category-nav">
      <div class="container">
        <h2>Shop by Category</h2>
        <div class="category-grid">
          <a href="/clothes" class="category-card">
            <div class="category-icon">👕</div>
            <h3>Clothes</h3>
            <p>Discover trending hoodies, t-shirts, and jackets from top streetwear brands.</p>
          </a>
          <a href="/shoes" class="category-card">
            <div class="category-icon">👟</div>
            <h3>Sneakers</h3>
            <p>Find the latest sneaker releases, vintage styles, and running shoes with QC photos.</p>
          </a>
          <a href="/watches" class="category-card">
            <div class="category-icon">⌚</div>
            <h3>Watches</h3>
            <p>Explore luxury-inspired timepieces and everyday watches with verified links.</p>
          </a>
          <a href="/bags" class="category-card">
            <div class="category-icon">💼</div>
            <h3>Bags</h3>
            <p>Browse a curated selection of backpacks, travel bags, and designer-inspired pieces.</p>
          </a>
          <a href="/accessories" class="category-card">
            <div class="category-icon">✨</div>
            <h3>Accessories</h3>
            <p>Complete your outfit with trending hats, belts, sunglasses, and jewelry.</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Platform Navigation -->
    <section class="platform-nav">
      <div class="container">
        <h2>Shopping Platforms</h2>
        <div class="platform-grid">
          <a href="/platform" class="platform-card">
            <h3>Kakobuy Spreadsheet</h3>
            <p>Your gateway to Taobao, 1688, Weidian, and JD.</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose">
      <div class="container">
        <h2>Why Choose Us?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📂</div>
            <h3>One Platform For China Shopping</h3>
            <p>Integrate multiple Chinese supply channels: Taobao, 1688, Weidian, JD. No need to register multiple platforms separately.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>QC Verification Before Shipping</h3>
            <p>View warehouse photos, product details, and quality conditions before purchase to reduce risks.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>Curated Spreadsheet Finds</h3>
            <p>Save time by browsing selected popular finds instead of searching thousands of listings yourself.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>International Shipping Solution</h3>
            <p>Provide parcel consolidation, multiple shipping routes, and warehouse storage for overseas buyers.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🧭</div>
            <h3>Fashion Trend Discovery</h3>
            <p>Quickly discover trending sneakers, streetwear, seasonal outfits, and new releases.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📈</div>
            <h3>Community Driven</h3>
            <p>Join a community of fashion enthusiasts and haul buyers to share insights and finds.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Collections -->
    <section class="featured">
      <div class="container">
        <h2>Featured Collections</h2>
        <div class="collections-grid">
          <a :href="spreadsheetUrl" target="_blank" rel="nofollow" class="collection-card">
            <h3>Best Sneakers</h3>
            <p>Discover the hottest sneaker releases and classic styles.</p>
          </a>
          <a :href="spreadsheetUrl" target="_blank" rel="nofollow" class="collection-card">
            <h3>Trending Hoodies</h3>
            <p>Explore oversized fits, heavyweight designs, and streetwear essentials.</p>
          </a>
          <a :href="spreadsheetUrl" target="_blank" rel="nofollow" class="collection-card">
            <h3>Summer Essentials</h3>
            <p>Lightweight t-shirts, shorts, and accessories for the warm season.</p>
          </a>
          <a :href="spreadsheetUrl" target="_blank" rel="nofollow" class="collection-card">
            <h3>Luxury Fashion</h3>
            <p>Find designer-inspired clothing, bags, and accessories.</p>
          </a>
          <a :href="spreadsheetUrl" target="_blank" rel="nofollow" class="collection-card">
            <h3>Budget Finds</h3>
            <p>High-quality fashion at unbeatable prices.</p>
          </a>
          <a :href="spreadsheetUrl" target="_blank" rel="nofollow" class="collection-card">
            <h3>New Arrivals</h3>
            <p>Stay updated with the latest drops and fresh styles.</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Latest Guides -->
    <section class="latest-guides">
      <div class="container">
        <h2>Latest Guides</h2>
        <div class="guides-grid">
          <a href="/blog/article1" class="guide-card">
            <h3>Kakobuy Spreadsheet 2026: The Ultimate Guide To Find Trending Products</h3>
            <p>Your comprehensive guide to navigating the Kakobuy Spreadsheet and discovering the best fashion finds.</p>
          </a>
          <a href="/blog/article2" class="guide-card">
            <h3>Kakobuy Spreadsheet With QC: How To Check Product Quality Before Buying</h3>
            <p>Learn the importance of QC photos and how to verify product quality before your purchase.</p>
          </a>
          <a href="/blog/article3" class="guide-card">
            <h3>Kakobuy Spreadsheet Link: How To Find And Buy Products Easily</h3>
            <p>Understand how Kakobuy Spreadsheet links work and streamline your shopping process from discovery to delivery.</p>
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>What is Kakobuy Spreadsheet?</h3>
            <p>Kakobuy Spreadsheet is a curated product discovery and organization tool that collects trending product links from Chinese e-commerce platforms like Taobao, 1688, Weidian, and JD. It helps users quickly find popular styles with QC photo references.</p>
          </div>
          <div class="faq-item">
            <h3>How does Kakobuy Spreadsheet help me shop from China?</h3>
            <p>Kakobuy Spreadsheet acts as a purchasing agent, assisting global users in finding, buying, and shipping products from Chinese platforms. We handle product search, order placement, quality control checks, warehouse storage, and international delivery.</p>
          </div>
          <div class="faq-item">
            <h3>What kind of products can I find?</h3>
            <p>Our spreadsheet features a wide range of trending fashion items, including streetwear, sneakers, designer fashion, luxury-inspired clothing, and accessories. We focus on popular styles for young male consumers (18-35) and fashion enthusiasts.</p>
          </div>
          <div class="faq-item">
            <h3>Is Kakobuy Spreadsheet free to access?</h3>
            <p>Yes, the Kakobuy Spreadsheet is a free product discovery tool. You can browse curated finds, QC photos, and verified links without any cost. Purchase and shipping services through Kakobuy Spreadsheet agent platform will incur standard fees.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="/clothes">Clothes</a></li>
              <li><a href="/shoes">Sneakers</a></li>
              <li><a href="/watches">Watches</a></li>
              <li><a href="/bags">Bags</a></li>
              <li><a href="/accessories">Accessories</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/blog/article1">Blog</a></li>
              <li><a href="/platform">Platform</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Kakobuy Spreadsheet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/10e9euL3y7Bw7GvWUhX2FruG8mJWXz8C7eNwTo69XoQA/edit?gid=1903531254#gid=1903531254'
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
  padding: 80px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #000;
}

.hero p {
  font-size: 24px;
  color: #666;
  margin-bottom: 30px;
}

.cta-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: #8b0000;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #a00000;
  transform: translateY(-2px);
}

/* Sections */
section {
  padding: 60px 20px;
}

section h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  color: #000;
}

/* Category Navigation */
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.category-card {
  background: #f9f9f9;
  padding: 30px 20px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  background: #f0f0f0;
}

.category-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.category-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.category-card p {
  font-size: 14px;
  color: #666;
}

/* Platform Navigation */
.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.platform-card {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.platform-card:hover {
  transform: translateY(-5px);
  background: #f0f0f0;
}

.platform-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.platform-card p {
  font-size: 14px;
  color: #666;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.feature-card {
  background: #f9f9f9;
  padding: 30px 20px;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 36px;
  margin-bottom: 15px;
}

.feature-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 13px;
  color: #666;
}

/* Collections Grid */
.collections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.collection-card {
  background: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.collection-card:hover {
  transform: translateY(-5px);
  background: #f0f0f0;
}

.collection-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.collection-card p {
  font-size: 13px;
  color: #666;
}

/* Guides Grid */
.guides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.guide-card {
  background: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.guide-card:hover {
  transform: translateY(-5px);
  background: #f0f0f0;
}

.guide-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.guide-card p {
  font-size: 14px;
  color: #666;
}

/* FAQ Grid */
.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.faq-item {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.faq-item h3 {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.faq-item p {
  font-size: 14px;
  color: #666;
}

/* Footer */
.footer {
  background: #1a1a1a;
  color: white;
  padding: 40px 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-section h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 8px;
}

.footer-section a {
  color: #999;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #d4af37;
}

.footer-bottom {
  padding-top: 20px;
  border-top: 1px solid #333;
  text-align: center;
  color: #999;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 32px;
  }

  .hero p {
    font-size: 18px;
  }

  section {
    padding: 40px 15px;
  }

  section h2 {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 24px;
  }

  .hero p {
    font-size: 14px;
  }

  section {
    padding: 30px 10px;
  }

  section h2 {
    font-size: 22px;
  }

  .category-grid,
  .features-grid,
  .collections-grid {
    grid-template-columns: 1fr;
  }
}
</style>
