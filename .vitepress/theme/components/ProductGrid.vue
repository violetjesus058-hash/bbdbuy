<template>
  <div class="fashion-store">
    <!-- Navigation -->
    <div class="fashion-nav">
      <div class="nav-container"></div>
    </div>

    <!-- Primary Category Filter (一级分类) -->
    <div class="category-filter primary-filter">
      <div class="filter-container">
        <button
          v-for="category in primaryCategories"
          :key="category"
          class="filter-btn"
          :class="{ active: selectedPrimary === category }"
          @click="selectPrimaryCategory(category)"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Secondary Category Filter (二级分类) -->
    <div v-if="selectedPrimary" class="category-filter secondary-filter">
      <div class="filter-container">
        <button
          class="filter-btn"
          :class="{ active: selectedSecondary === null }"
          @click="selectSecondaryCategory(null)"
        >
          All
        </button>
        <button
          v-for="subcategory in secondaryCategories"
          :key="subcategory"
          class="filter-btn"
          :class="{ active: selectedSecondary === subcategory }"
          @click="selectSecondaryCategory(subcategory)"
        >
          {{ subcategory }}
        </button>
      </div>
    </div>

    <!-- Products Section -->
    <section class="products-section">
      <div class="section-header">
        <h2 class="section-title">Featured Products</h2>
      </div>

      <div class="waterfall-grid">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.name" class="product-image">
          <div v-if="product.badge" :class="['product-badge', `badge-${product.badge}`]">
            {{ product.badge.toUpperCase() }}
          </div>
          <div class="product-info">
            <p class="product-name">{{ product.name }}</p>
            <div class="product-footer">
              <p class="product-price">{{ product.price }}</p>
              <a :href="product.link" target="_blank" class="buy-btn" @click="trackClick(product)">BUY</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 分类结构定义
const categoryStructure = {
  'Clothing': ['T-shirt', 'Hoodie', 'Sweatshirt', 'Sweater', 'Down Jacket', 'Shorts Set', 'Jacket', 'Waistcoat', 'Down Vest', 'Tracksuit', 'ZIP Sweater', 'Jersey', 'Suit'],
  'Pants': ['Shorts', 'Underwear', 'Jeans', 'Sweatpants', 'Pants'],
  'Shoes': ['Nike Dunk', 'Crocs Shoes', 'ALEXANDER MCQUEE', 'Jordan 4', 'Nike Air Max 95', 'Nike Football Boots', 'Dior B27', 'Nike Max Plus TN', 'Dior B30', 'Off-white', 'Golden Goose', 'Adidas', 'Balenciaga', 'Asics', 'Nike Air Max 97', 'Lanvin', 'Burberry', 'Dunk SB x Off-white', 'Dior B22', 'Dior B23', 'NB 9060', 'Yeezy 350', 'Timberland', 'Bape', 'Nike Shox TL', 'Yeezy Slippers', 'Nike Air Max 95 Corteiz', 'Nike Skepta\'s Tailwind', 'Valentino', 'Nike AF1 Low \'07'],
  'Watches': ['Rolex Watches', 'Cartier Watches', 'Audemars Piguet Watches', 'Tissot Watches', 'S9–S10 Ultra2 Watches'],
  'Accessories': ['Belt', 'Wallet', 'Cap', 'Perfume', 'Bag', 'Glasses', 'Hat', 'Phone Case', 'Bracelet', 'Socks', 'Necklace', 'Scarf', 'Beanie', 'Headphones', 'Backpack', 'Mask', 'Sound Equipment', 'Travel Bag', 'Balaclava']
}

// 响应式状态
const selectedPrimary = ref('Clothing')
const selectedSecondary = ref(null)

// 计算属性
const primaryCategories = computed(() => Object.keys(categoryStructure))

const secondaryCategories = computed(() => {
  return selectedPrimary.value ? categoryStructure[selectedPrimary.value] : []
})

// 示例商品数据（框架）
const products = [
  {
    id: 7572836729,
    badge: 'hot',
    name: 'Stone Island Sweater',
    price: '$16.32',
    primaryCategory: 'Clothing',
    secondaryCategory: 'Sweater',
    image: 'https://si.geilicdn.com/pcitem901908374288-70d600000193b0a41fa30a231316_1600_1600.jpg',
    link: 'https://Kakobuy.com/item-micro-7572836729.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7572864219,
    badge: 'hot',
    name: 'Ralph Lauren T-shirt',
    price: '$11.37',
    primaryCategory: 'Clothing',
    secondaryCategory: 'T-shirt',
    image: 'https://si.geilicdn.com/open1624782517-1624782517-755000000194ead414340a22d234_1920_1920.jpg',
    link: 'https://Kakobuy.com/item-micro-7572864219.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7572812731,
    badge: 'new',
    name: 'Nike Nocta T-shirt',
    price: '$11.37',
    primaryCategory: 'Clothing',
    secondaryCategory: 'T-shirt',
    image: 'https://si.geilicdn.com/open1624782517-1624782517-02a900000196a570751c0a23b4de_800_800.jpg',
    link: 'https://Kakobuy.com/item-micro-7572812731.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7574744386,
    badge: 'value',
    name: 'Bape T-shirt',
    price: '$16.32',
    primaryCategory: 'Clothing',
    secondaryCategory: 'T-shirt',
    image: 'https://si.geilicdn.com/open1875660057-252808396-7ede000001919e4cc1270a22d234_1097_1097.jpg',
    link: 'https://Kakobuy.com/item-micro-7574744386.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7574795754,
    badge: 'hot',
    name: 'Ralph Lauren Polo',
    price: '$11.54',
    primaryCategory: 'Clothing',
    secondaryCategory: 'T-shirt',
    image: 'https://si.geilicdn.com/open1831483949-1831483949-7e2b0000019bd58a54dc0aa08245-unadjust_326_349.png',
    link: 'https://Kakobuy.com/item-micro-7574795754.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7574705188,
    badge: 'value',
    name: 'Ralph Lauren Polo',
    price: '$13.05',
    primaryCategory: 'Clothing',
    secondaryCategory: 'T-shirt',
    image: 'https://si.geilicdn.com/pcitem901903640419-78f900000192e730b7050a239846_1920_1920.jpg',
    link: 'https://Kakobuy.com/item-micro-7574705188.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7574805716,
    badge: 'hot',
    name: 'Jersey',
    price: '$11.37',
    primaryCategory: 'Clothing',
    secondaryCategory: 'Jersey',
    image: 'https://si.geilicdn.com/open1831483949-1831483949-131b0000019bd5ba10480a22d249-unadjust_323_323.png',
    link: 'https://Kakobuy.com/item-micro-7574805716.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7572844599,
    badge: 'new',
    name: 'Jersey',
    price: '$16.32',
    primaryCategory: 'Clothing',
    secondaryCategory: 'Jersey',
    image: 'https://si.geilicdn.com/open1624782517-1624782517-7fe300000199e2ad8bc90aa006e9-unadjust_1031_1031.png',
    link: 'https://Kakobuy.com/item-micro-7572844599.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7574738806,
    badge: 'value',
    name: 'Jersey',
    price: '$14.84',
    primaryCategory: 'Clothing',
    secondaryCategory: 'Jersey',
    image: 'https://si.geilicdn.com/open1624782517-1624782517-48c300000199e2ada7310aa081c2-unadjust_978_978.png',
    link: 'https://Kakobuy.com/item-micro-7574738806.html?promotionCode=R0dfTU9DRzA2VTk'
  },
  {
    id: 7572793335,
    badge: 'hot',
    name: 'Hellstar T-shirt',
    price: '$11.21',
    primaryCategory: 'Clothing',
    secondaryCategory: 'T-shirt',
    image: 'https://si.geilicdn.com/open1718289365-1234478995-545800000194966be72b0a232357_1600_1600.jpg',
    link: 'https://Kakobuy.com/item-micro-7572793335.html?promotionCode=R0dfTU9DRzA2VTk'
  }
]

// 过滤后的商品
const filteredProducts = computed(() => {
  return products.filter(product => {
    const matchesPrimary = product.primaryCategory === selectedPrimary.value
    const matchesSecondary = selectedSecondary.value === null || product.secondaryCategory === selectedSecondary.value
    return matchesPrimary && matchesSecondary
  })
})

// 方法
function selectPrimaryCategory(category) {
  selectedPrimary.value = category
  selectedSecondary.value = null // 重置二级分类
}

function selectSecondaryCategory(subcategory) {
  selectedSecondary.value = subcategory
}

function trackClick(product) {
  // GA4 tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', 'view_item', {
      'items': [{
        'item_id': product.id,
        'item_name': product.name,
        'price': product.price,
        'item_category': product.primaryCategory,
        'item_subcategory': product.secondaryCategory
      }]
    })
  }
}

</script>

<style scoped>
html, body {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.fashion-store {
  width: 100%;
  background-color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Navigation */
.fashion-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  padding: 12px 0;
}

.nav-container {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

/* Category Filter */
.category-filter {
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  padding: 12px 0;
  overflow-x: auto;
  overflow-y: hidden;
}

.primary-filter {
  border-bottom: 2px solid #f0f0f0;
}

.secondary-filter {
  background-color: #fafafa;
}

.filter-container {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2px;
  overflow-x: auto;
  overflow-y: hidden;
}

.filter-btn {
  padding: 8px 16px;
  border: none;
  background-color: transparent;
  color: #666;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  color: #000;
}

.filter-btn.active {
  color: #d4af37;
  border-bottom-color: #d4af37;
}

/* Products Section */
.products-section {
  width: 100%;
  padding: 0;
  margin: 0;
}

.section-header {
  padding: 16px 0;
  text-align: left;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin: 0;
}

/* Waterfall Grid */
.waterfall-grid {
  width: 100%;
  display: grid;
  gap: 2px;
  padding: 0;
  margin: 0;
}

@media (min-width: 2401px) {
  .waterfall-grid {
    grid-template-columns: repeat(16, 1fr);
  }
}

@media (min-width: 2101px) and (max-width: 2400px) {
  .waterfall-grid {
    grid-template-columns: repeat(14, 1fr);
  }
}

@media (min-width: 1801px) and (max-width: 2100px) {
  .waterfall-grid {
    grid-template-columns: repeat(12, 1fr);
  }
}

@media (min-width: 1501px) and (max-width: 1800px) {
  .waterfall-grid {
    grid-template-columns: repeat(11, 1fr);
  }
}

@media (min-width: 1201px) and (max-width: 1500px) {
  .waterfall-grid {
    grid-template-columns: repeat(10, 1fr);
  }
}

@media (min-width: 901px) and (max-width: 1200px) {
  .waterfall-grid {
    grid-template-columns: repeat(8, 1fr);
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .waterfall-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 481px) and (max-width: 600px) {
  .waterfall-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .waterfall-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Product Card */
.product-card {
  position: relative;
  background-color: #fff;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: scale(1.02);
}

.product-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.product-info {
  padding: 8px 10px;
  background-color: #fff;
}

.product-name {
  font-size: 13px;
  font-weight: 500;
  color: #333;
  margin: 0 0 4px 0;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
}

.product-price {
  font-size: 13px;
  font-weight: 600;
  color: #d4af37;
  margin: 0;
  line-height: 1;
}

.buy-btn {
  padding: 4px 8px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;
  display: inline-block;
  line-height: 1;
}

.buy-btn:hover {
  background-color: #333;
  transform: scale(0.98);
}

.buy-btn:active {
  transform: scale(0.95);
}

/* Badge */
.product-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  z-index: 10;
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.badge-new {
  background-color: #ff4444;
}

.badge-hot {
  background-color: #ff8c00;
}

.badge-value {
  background-color: #00aa44;
}
</style>
