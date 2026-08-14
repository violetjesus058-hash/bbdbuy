<template>
  <div class="platform-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>{{ frontmatter.platformName || 'Platform Page' }}</h1>
        <p>{{ frontmatter.heroSubtitle || 'Review available information, related guides, and practical questions before using this platform.' }}</p>
      </div>
    </section>

    <!-- Platform Overview -->
    <section class="overview">
      <div class="container">
        <h2>Platform Overview</h2>
        <p>{{ frontmatter.overviewText || 'This page provides a neutral overview of the platform and the information readers can verify before continuing their research.' }}</p>
      </div>
    </section>

    <!-- Advantages -->
    <section class="advantages">
      <div class="container">
        <h2>Key Advantages</h2>
        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">?</div>
            <h3>{{ frontmatter.advantages?.[0]?.title || 'Research point 1' }}</h3>
            <p>{{ frontmatter.advantages?.[0]?.content || 'Review the available information and keep unsupported claims out of your comparison.' }}</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">?</div>
            <h3>{{ frontmatter.advantages?.[1]?.title || 'Research point 2' }}</h3>
            <p>{{ frontmatter.advantages?.[1]?.content || 'Compare only the details that are documented for the option you are reviewing.' }}</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">?</div>
            <h3>{{ frontmatter.advantages?.[2]?.title || 'Research point 3' }}</h3>
            <p>{{ frontmatter.advantages?.[2]?.content || 'Treat missing information as an open verification question.' }}</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">?</div>
            <h3>{{ frontmatter.advantages?.[3]?.title || 'Research point 4' }}</h3>
            <p>{{ frontmatter.advantages?.[3]?.content || 'Use consistent criteria when comparing alternatives.' }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="container">
        <h2>How It Works</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
          <h3>{{ frontmatter.howItWorks?.[0]?.title || 'Step 1' }}</h3>
          <p>{{ frontmatter.howItWorks?.[0]?.content || 'Identify the question you need to answer.' }}</p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
          <h3>{{ frontmatter.howItWorks?.[1]?.title || 'Step 2' }}</h3>
          <p>{{ frontmatter.howItWorks?.[1]?.content || 'Collect the information that can be verified.' }}</p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
          <h3>{{ frontmatter.howItWorks?.[2]?.title || 'Step 3' }}</h3>
          <p>{{ frontmatter.howItWorks?.[2]?.content || 'Compare options using the same criteria.' }}</p>
          </div>
          <div class="step-card">
            <div class="step-number">4</div>
          <h3>{{ frontmatter.howItWorks?.[3]?.title || 'Step 4' }}</h3>
          <p>{{ frontmatter.howItWorks?.[3]?.content || 'Record unresolved questions before making a decision.' }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recommended Categories -->
    <section class="categories">
      <div class="container">
        <h2>Recommended Categories</h2>
        <div class="categories-grid">
          <a href="/clothes" class="category-card">
            <h3>{{ frontmatter.recommendedCategories[0].title || 'Clothes' }}</h3>
            <p>{{ frontmatter.recommendedCategories[0].description || 'Placeholder text' }}</p>
          </a>
          <a href="/shoes" class="category-card">
            <h3>{{ frontmatter.recommendedCategories[1].title || 'Shoes' }}</h3>
            <p>{{ frontmatter.recommendedCategories[1].description || 'Placeholder text' }}</p>
          </a>
          <a href="/watches" class="category-card">
            <h3>{{ frontmatter.recommendedCategories[2].title || 'Watches' }}</h3>
            <p>{{ frontmatter.recommendedCategories[2].description || 'Placeholder text' }}</p>
          </a>
          <a href="/bags" class="category-card">
            <h3>{{ frontmatter.recommendedCategories[3].title || 'Bags' }}</h3>
            <p>{{ frontmatter.recommendedCategories[3].description || 'Placeholder text' }}</p>
          </a>
          <a href="/accessories" class="category-card">
            <h3>{{ frontmatter.recommendedCategories[4].title || 'Accessories' }}</h3>
            <p>{{ frontmatter.recommendedCategories[4].description || 'Placeholder text' }}</p>
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
            <h3>{{ frontmatter.faq[0].question || 'Question 1?' }}</h3>
            <p>{{ frontmatter.faq[0].answer || 'Placeholder answer text' }}</p>
          </div>
          <div class="faq-item">
            <h3>{{ frontmatter.faq[1].question || 'Question 2?' }}</h3>
            <p>{{ frontmatter.faq[1].answer || 'Placeholder answer text' }}</p>
          </div>
          <div class="faq-item">
            <h3>{{ frontmatter.faq[2].question || 'Question 3?' }}</h3>
            <p>{{ frontmatter.faq[2].answer || 'Placeholder answer text' }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Articles -->
    <section class="related">
      <div class="container">
        <h2>Related Articles</h2>
        <div class="articles-grid">
          <a href="/blog/article1" class="article-card">
            <h3>Article 1</h3>
            <p>Placeholder text</p>
          </a>
          <a href="/blog/article2" class="article-card">
            <h3>Article 2</h3>
            <p>Placeholder text</p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1Vs190yOAkrQ04LQb6l_Lnr_oTA0ny4CI3PJ_0B4_6zs/edit?gid=2086211270#gid=2086211270'
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

/* Overview */
.overview p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* Advantages Grid */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.advantage-card {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
}

.advantage-icon {
  font-size: 36px;
  color: #d4af37;
  margin-bottom: 15px;
}

.advantage-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.advantage-card p {
  font-size: 14px;
  color: #666;
}

/* Steps Grid */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.step-card {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
}

.step-number {
  display: inline-block;
  width: 50px;
  height: 50px;
  background: #d4af37;
  color: white;
  border-radius: 50%;
  line-height: 50px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
}

.step-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.step-card p {
  font-size: 14px;
  color: #666;
}

/* Categories Grid */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.category-card {
  background: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  background: #f0f0f0;
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

/* Articles Grid */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.article-card {
  background: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.article-card:hover {
  transform: translateY(-5px);
  background: #f0f0f0;
}

.article-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.article-card p {
  font-size: 14px;
  color: #666;
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

  .advantages-grid,
  .steps-grid,
  .categories-grid,
  .faq-grid,
  .articles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
