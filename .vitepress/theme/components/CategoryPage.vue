<template>
  <div class="category-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>{{ categoryName }}</h1>
        <p>{{ frontmatter.heroSubtitle || 'Discover the best in ' + categoryName + ' with our curated selections.' }}</p>
      </div>
    </section>

    <!-- Category Introduction -->
    <section class="intro">
      <div class="container">
        <h2>About {{ categoryName }}</h2>
        <p>{{ frontmatter.introText || 'Placeholder introduction text for ' + categoryName + ' category. This section provides an overview of the category and what users can expect to find.' }}</p>
      </div>
    </section>

    <!-- Editor's Notes -->
    <section class="editors-notes">
      <div class="container">
        <h2>Editor's Notes</h2>
        <div class="notes-grid">
          <div class="note-card">
            <h3>{{ frontmatter.editorNotes[0].title || 'Note 1' }}</h3>
            <p>{{ frontmatter.editorNotes[0].content || 'Placeholder editor\'s note text' }}</p>
          </div>
          <div class="note-card">
            <h3>{{ frontmatter.editorNotes[1].title || 'Note 2' }}</h3>
            <p>{{ frontmatter.editorNotes[1].content || 'Placeholder editor\'s note text' }}</p>
          </div>
          <div class="note-card">
            <h3>{{ frontmatter.editorNotes[2].title || 'Note 3' }}</h3>
            <p>{{ frontmatter.editorNotes[2].content || 'Placeholder editor\'s note text' }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Collections -->
    <section class="collections">
      <div class="container">
        <h2>Product Collections</h2>
        <div class="collections-grid">
          <a :href="spreadsheetUrl" target="_blank" rel="nofollow" class="collection-card">
            <h3>{{ frontmatter.collections[0].title || 'Collection 1' }}</h3>
            <p>{{ frontmatter.collections[0].description || 'Placeholder text' }}</p>
          </a>
          <a :href="spreadsheetUrl" target="_blank" rel="nofollow" class="collection-card">
            <h3>{{ frontmatter.collections[1].title || 'Collection 2' }}</h3>
            <p>{{ frontmatter.collections[1].description || 'Placeholder text' }}</p>
          </a>
          <a :href="spreadsheetUrl" target="_blank" rel="nofollow" class="collection-card">
            <h3>{{ frontmatter.collections[2].title || 'Collection 3' }}</h3>
            <p>{{ frontmatter.collections[2].description || 'Placeholder text' }}</p>
          </a>
          <a :href="spreadsheetUrl" target="_blank" rel="nofollow" class="collection-card">
            <h3>{{ frontmatter.collections[3].title || 'Collection 4' }}</h3>
            <p>{{ frontmatter.collections[3].description || 'Placeholder text' }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Popular Categories -->
    <section class="brands">
      <div class="container">
        <h2>Popular Categories</h2>
        <div class="brands-grid">
          <a v-for="brand in frontmatter.brands" :key="brand" :href="spreadsheetUrl" target="_blank" rel="nofollow" class="brand-card">{{ brand }}</a>
        </div>
      </div>
    </section>

    <!-- Buying Guide -->
    <section class="buying-guide">
      <div class="container">
        <h2>Buying Guide</h2>
        <div class="guide-content">
          <h3>How to Choose</h3>
          <p>{{ frontmatter.buyingGuide.howToChoose || 'Placeholder buying guide text. This section helps users understand how to choose the best products in this category.' }}</p>
          <h3>What to Look For</h3>
          <p>{{ frontmatter.buyingGuide.whatToLookFor || 'Placeholder text about what features and qualities to consider when shopping in this category.' }}</p>
        </div>
      </div>
    </section>

    <!-- Recommended Platforms -->
    <section class="platforms" v-if="frontmatter.platforms && frontmatter.platforms.length">
      <div class="container">
        <h2>Recommended Platforms</h2>
        <div class="platforms-grid">
          <a v-for="platform in frontmatter.platforms" :key="platform.name" :href="platform.url" target="_blank" rel="nofollow" class="platform-card">
            <h3>{{ platform.name }}</h3>
            <p>{{ platform.description }}</p>
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
    <section class="related" v-if="frontmatter.relatedArticles && frontmatter.relatedArticles.length">
      <div class="container">
        <h2>Related Articles</h2>
        <div class="articles-grid">
          <a v-for="article in frontmatter.relatedArticles" :key="article.link" :href="article.link" class="article-card">
            <h3>{{ article.title }}</h3>
            <p>{{ article.desc }}</p>
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
const categoryName = computed(() => frontmatter.value.categoryName || 'Category')
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

/* Intro Section */
.intro p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* Editor's Notes */
.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.note-card {
  background: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
}

.note-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.note-card p {
  font-size: 14px;
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

/* Brands Grid */
.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.brand-card {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  color: #000;
  font-weight: 600;
  transition: all 0.3s ease;
}

.brand-card:hover {
  background: #f0f0f0;
  color: #d4af37;
}

/* Buying Guide */
.guide-content h3 {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-top: 20px;
  margin-bottom: 10px;
}

.guide-content p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}

/* Platforms Grid */
.platforms-grid {
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

  .notes-grid,
  .collections-grid,
  .brands-grid,
  .platforms-grid,
  .faq-grid,
  .articles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
