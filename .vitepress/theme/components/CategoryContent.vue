<template>
  <div class="category-content">
    <!-- Product Types -->
    <section class="content-section" v-if="productTypes?.length">
      <h2>Product Types</h2>
      <p class="section-intro">{{ categoryDescription }}</p>
      <div class="type-grid">
        <component
          :is="type.link ? 'a' : 'div'"
          v-for="type in productTypes"
          :key="type.name"
          class="type-card"
          :href="type.link || undefined"
          :aria-label="type.link ? `Read ${type.name} guide` : undefined"
        >
          <div class="type-icon">{{ type.icon }}</div>
          <h3>{{ type.name }}</h3>
          <p>{{ type.desc }}</p>
          <span v-if="type.link" class="type-card-link">Read guide <span aria-hidden="true">→</span></span>
        </component>
      </div>
    </section>

    <!-- Quality Specifications -->
    <section class="content-section" v-if="qualitySpecs?.length">
      <h2>Quality Specifications</h2>
      <div class="info-table">
        <div v-for="spec in qualitySpecs" :key="spec.label" class="info-row">
          <span class="info-label">{{ spec.label }}</span>
          <span class="info-value">{{ spec.value }}</span>
        </div>
      </div>
    </section>

    <!-- Pricing Information -->
    <section class="content-section" v-if="pricingInfo?.range">
      <h2>Pricing Information</h2>
      <div class="pricing-box">
        <div class="price-range">{{ pricingInfo.range }}</div>
        <p class="price-note">{{ pricingInfo.note }}</p>
      </div>
    </section>

    <!-- Logistics & Shipping -->
    <section class="content-section" v-if="logisticsInfo?.length">
      <h2>Logistics &amp; Shipping</h2>
      <div class="info-table">
        <div v-for="item in logisticsInfo" :key="item.label" class="info-row">
          <span class="info-label">{{ item.label }}</span>
          <span class="info-value">{{ item.value }}</span>
        </div>
      </div>
    </section>

    <!-- Batch / Lot Information -->
    <section class="content-section" v-if="batchInfo?.length">
      <h2>Batch &amp; Lot Information</h2>
      <div class="info-table">
        <div v-for="item in batchInfo" :key="item.label" class="info-row">
          <span class="info-label">{{ item.label }}</span>
          <span class="info-value">{{ item.value }}</span>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="content-section" v-if="faq?.length">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-list">
        <div v-for="(item, index) in faq" :key="index" class="faq-item">
          <button class="faq-question" @click="toggleFaq(index)">
            <span>{{ item.q }}</span>
            <span class="faq-arrow" :class="{ open: openFaq === index }">&#9662;</span>
          </button>
          <div v-show="openFaq === index" class="faq-answer">
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  categoryDescription: {
    type: String,
    default: '',
  },
  productTypes: {
    type: Array,
    default: () => [],
  },
  qualitySpecs: {
    type: Array,
    default: () => [],
  },
  pricingInfo: {
    type: Object,
    default: () => ({ range: '', note: '' }),
  },
  logisticsInfo: {
    type: Array,
    default: () => [],
  },
  batchInfo: {
    type: Array,
    default: () => [],
  },
  faq: {
    type: Array,
    default: () => [],
  },
})

const openFaq = ref(-1)

function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? -1 : index
}
</script>

<style scoped>
.category-content {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-section {
  margin-bottom: 48px;
}

.content-section h2 {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid #8B0000;
  display: inline-block;
}

.section-intro {
  font-size: 16px;
  color: #666;
  line-height: 1.7;
  margin-bottom: 24px;
}

/* Type Grid */
.type-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.type-card {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 24px;
  color: inherit;
  text-decoration: none;
  transition: all 0.2s ease;
}

.type-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.type-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.type-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.type-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.type-card-link {
  display: inline-flex;
  gap: 6px;
  margin-top: 14px;
  color: #5b5ce2;
  font-size: 13px;
  font-weight: 750;
}

.type-card:hover .type-card-link {
  color: #393aa7;
}

/* Info Table */
.info-table {
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
}

.info-row {
  display: flex;
  padding: 14px 20px;
  border-bottom: 1px solid #f0f0f0;
  gap: 16px;
}

.info-row:last-child {
  border-bottom: none;
}

.info-label {
  min-width: 160px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.info-value {
  flex: 1;
  color: #555;
  font-size: 14px;
  line-height: 1.6;
}

/* Pricing Box */
.pricing-box {
  background: linear-gradient(135deg, #8B0000, #a00000);
  color: #fff;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
}

.price-range {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
}

.price-note {
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.6;
}

/* FAQ */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.faq-item {
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: #fafafa;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: #333;
  text-align: left;
  transition: background 0.2s;
}

.faq-question:hover {
  background: #f0f0f0;
}

.faq-arrow {
  font-size: 12px;
  transition: transform 0.2s;
  color: #999;
}

.faq-arrow.open {
  transform: rotate(90deg);
}

.faq-answer {
  padding: 0 20px 16px;
  background: #fff;
}

.faq-answer p {
  font-size: 14px;
  color: #555;
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 768px) {
  .info-row {
    flex-direction: column;
    gap: 4px;
  }

  .info-label {
    min-width: auto;
  }

  .price-range {
    font-size: 28px;
  }

  .type-grid {
    grid-template-columns: 1fr;
  }
}
</style>
