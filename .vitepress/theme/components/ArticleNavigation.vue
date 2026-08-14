<template>
  <nav class="article-navigation">
    <div class="nav-container">
      <h3 class="nav-title">Quick Navigation</h3>
      <div class="nav-links">
        <!-- 5 Fixed Core Links -->
        <a href="https://Usfanslinki.com/" class="nav-link fixed-link">
          <span class="nav-icon">🏠</span>
          <span class="nav-text">Home</span>
        </a>
        <a href="https://Usfanslinki.com/shoes" class="nav-link fixed-link">
          <span class="nav-icon">👟</span>
          <span class="nav-text">Shoes</span>
        </a>
        <a href="https://Usfanslinki.com/clothes" class="nav-link fixed-link">
          <span class="nav-icon"></span>
          <span class="nav-text">Clothes</span>
        </a>
        <a href="https://Usfanslinki.com/hats" class="nav-link fixed-link">
          <span class="nav-icon">🧢</span>
          <span class="nav-text">Hats</span>
        </a>
        <a href="https://Usfanslinki.com/blog" class="nav-link fixed-link">
          <span class="nav-icon">📝</span>
          <span class="nav-text">Blog</span>
        </a>
        <!-- 2 Related Article Links -->
        <a
          v-for="(article, index) in relatedArticles"
          :key="article.link"
          :href="article.link"
          class="nav-link related-link"
        >
          <span class="nav-icon"></span>
          <span class="nav-text">{{ article.title }}</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const relatedArticles = computed(() => {
  const articles = frontmatter.value?.relatedArticles || []
  return articles.slice(0, 2)
})
</script>

<style scoped>
.article-navigation {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #e0e0e0;
}

.nav-container {
  max-width: 900px;
  margin: 0 auto;
}

.nav-title {
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
  text-align: center;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.nav-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.fixed-link {
  background-color: #f9f9f9;
  color: #333;
}

.fixed-link:hover {
  background-color: #8b0000;
  color: white;
  border-color: #8b0000;
}

.related-link {
  background-color: #fff8f0;
  color: #8b0000;
  border-color: #f0d0b0;
}

.related-link:hover {
  background-color: #8b0000;
  color: white;
  border-color: #8b0000;
}

.nav-icon {
  font-size: 16px;
}

.nav-text {
  white-space: nowrap;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-links {
    gap: 8px;
  }

  .nav-link {
    padding: 8px 14px;
    font-size: 13px;
  }

  .nav-title {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .nav-links {
    flex-direction: column;
    align-items: stretch;
  }

  .nav-link {
    justify-content: center;
    padding: 12px 16px;
  }

  .nav-title {
    font-size: 18px;
  }
}
</style>
