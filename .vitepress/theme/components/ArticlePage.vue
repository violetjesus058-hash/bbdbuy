<template>
  <div class="article-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>{{ frontmatter.title || 'Article Title' }}</h1>
        <div class="article-actions" role="group" aria-label="Article actions">
          <component
            :is="spreadsheetLinked ? 'a' : 'span'"
            :href="spreadsheetLinked ? spreadsheetUrl : undefined"
            :target="spreadsheetLinked ? '_blank' : undefined"
            :rel="spreadsheetLinked ? 'nofollow noopener noreferrer' : undefined"
            :aria-disabled="spreadsheetLinked ? undefined : 'true'"
            class="article-action article-action-primary"
            :class="{ 'is-unlinked': !spreadsheetLinked }"
          >
            Access Bbdbuy spreadsheet
          </component>
          <component
            :is="shoppingLinked ? 'a' : 'span'"
            :href="shoppingLinked ? shoppingUrl : undefined"
            :target="shoppingLinked ? '_blank' : undefined"
            :rel="shoppingLinked ? 'nofollow noopener noreferrer' : undefined"
            :aria-disabled="shoppingLinked ? undefined : 'true'"
            class="article-action article-action-secondary"
            :class="{ 'is-unlinked': !shoppingLinked }"
          >
            Start shopping
          </component>
        </div>
        <p>{{ frontmatter.heroSubtitle || 'Placeholder subtitle for the article' }}</p>
      </div>
    </section>

    <!-- Article Content -->
    <section class="article-content">
      <div class="container">
        <!-- Introduction -->
        <div class="intro">
          <h2>Introduction</h2>
          <p>{{ frontmatter.introduction || 'Placeholder introduction text for the article. This section provides an overview of the topic and what readers can expect to learn.' }}</p>
        </div>

        <!-- Table of Contents -->
        <div class="toc">
          <h3>Table of Contents</h3>
          <ul>
            <li v-for="section in frontmatter.tableOfContents" :key="section.id">
              <a :href="'#' + section.id">{{ section.title }}</a>
            </li>
          </ul>
        </div>

        <!-- Content Sections -->
        <div v-for="section in frontmatter.mainContent" :key="section.id" :id="section.id" class="content-section">
          <h2>{{ section.title }}</h2>
          <p>{{ section.content }}</p>
          <div v-if="section.subsections">
            <div v-for="subsection in section.subsections" :key="subsection.id">
              <h3>{{ subsection.title }}</h3>
              <p>{{ subsection.content }}</p>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div class="article-faq">
          <h2>Frequently Asked Questions</h2>
          <div class="faq-grid">
            <div class="faq-item" v-for="item in frontmatter.faq" :key="item.question">
              <h3>{{ item.question }}</h3>
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>

        <!-- Related Articles -->
        <div class="related-articles">
          <h2>Related Articles</h2>
          <div class="articles-grid">
            <a v-for="article in frontmatter.relatedArticles" :key="article.link" :href="article.link" class="article-card">
              <h3>{{ article.title }}</h3>
              <p>{{ article.description || 'Placeholder text' }}</p>
            </a>
          </div>
        </div>

        <!-- CTA -->
        <div class="article-cta">
          <h2>Ready to explore?</h2>
          <p>Check out our curated collections and find your next favorite product.</p>
          <a :href="spreadsheetUrl" target="_blank" rel="nofollow" class="cta-button">Browse Products</a>
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
const shoppingUrl = 'https://repsootd.com/'

/* Set either field to false in an article's frontmatter to render that control without a link. */
const spreadsheetLinked = computed(() => frontmatter.value.spreadsheetLink !== false)
const shoppingLinked = computed(() => frontmatter.value.shoppingLink !== false)
</script>

<style scoped>
.container {
  max-width: 900px;
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

/* Article Content */
.article-content {
  padding: 60px 20px;
}

/* Introduction */
.intro {
  margin-bottom: 40px;
}

.intro h2 {
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin-bottom: 15px;
}

.intro p {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
}

/* Table of Contents */
.toc {
  background: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 40px;
}

.toc h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 15px;
}

.toc ul {
  list-style: none;
  padding: 0;
}

.toc li {
  margin-bottom: 8px;
}

.toc a {
  color: #d4af37;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.toc a:hover {
  color: #8b0000;
}

/* Content Sections */
.content-section {
  margin-bottom: 40px;
}

.content-section h2 {
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin-bottom: 15px;
  margin-top: 30px;
}

.content-section h3 {
  font-size: 22px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
  margin-top: 20px;
}

.content-section p {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 15px;
}

/* FAQ */
.article-faq {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #e0e0e0;
}

.article-faq h2 {
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin-bottom: 30px;
}

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

/* Related Articles */
.related-articles {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #e0e0e0;
}

.related-articles h2 {
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin-bottom: 30px;
}

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

/* CTA */
.article-cta {
  margin-top: 60px;
  padding: 40px;
  background: #f9f9f9;
  border-radius: 8px;
  text-align: center;
}

.article-cta h2 {
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin-bottom: 10px;
}

.article-cta p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
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

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 32px;
  }

  .hero p {
    font-size: 18px;
  }

  .content-section h2 {
    font-size: 24px;
  }

  .content-section h3 {
    font-size: 18px;
  }

  .faq-grid,
  .articles-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 24px;
  }

  .hero p {
    font-size: 14px;
  }

  .article-content {
    padding: 40px 15px;
  }

  .content-section h2 {
    font-size: 20px;
  }

  .content-section h3 {
    font-size: 16px;
  }

  .content-section p {
    font-size: 14px;
  }
}
</style>
