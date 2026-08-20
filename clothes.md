---
title: 'USFans Clothing Spreadsheet | Clothing Finds, Fits and Guides'
description: 'Explore the USFans Clothing Spreadsheet for hoodies, T-shirts, shirts, jackets, dresses and everyday wardrobe guides. Compare focused USFans clothing finds by category.'
category: Clothing
tags:
- USFans Clothing Spreadsheet
- USFans Clothing Finds
- Clothing Guides
- Apparel Discovery
updated: '2026-08-14T00:00:00Z'
---

<script setup>
import { siteConfig } from './.vitepress/theme/site-config.js'
import CategoryContent from './.vitepress/theme/components/CategoryContent.vue'

const clothesCategory = siteConfig.categories.find(c => c.id === 'clothes')
const spreadsheetLink = 'https://docs.google.com/spreadsheets/d/1Vs190yOAkrQ04LQb6l_Lnr_oTA0ny4CI3PJ_0B4_6zs/edit?gid=2086211270#gid=2086211270'

const productTypes = [
  {
    icon: '',
    name: 'T-Shirts',
    desc: 'The foundation of any wardrobe. From heavyweight 220gsm cotton to lightweight jersey, fit ranges from boxy oversized to slim tailored. Key details include ribbed collars, reinforced seams, and pre-shrunk fabrics.',
    link: '/blog/usfans-t-shirts/'
  },
  {
    icon: '',
    name: 'Hoodies & Sweatshirts',
    desc: 'Midweight fleece (300-400gsm) provides warmth without bulk. French terry offers breathability for layering. Look for double-lined hoods, kangaroo pockets, and ribbed cuffs that maintain shape after washing.',
    link: '/blog/usfans-hoodies/'
  },
  {
    icon: '🧥',
    name: 'Jackets & Outerwear',
    desc: 'From lightweight windbreakers to insulated puffers. Key features include water-resistant coatings, sealed seams, adjustable hoods, and packable designs. Fill power (600-800) indicates down quality.',
    link: '/blog/usfans-jackets/'
  },
  {
    icon: '👖',
    name: 'Pants & Jeans',
    desc: 'Denim weight ranges from 12oz (lightweight) to 16oz (heavyweight). Stretch denim adds comfort. Cargo pants feature utility pockets. Track pants use technical fabrics for athletic performance.',
    link: '/blog/usfans-pants/'
  },
  {
    icon: '🩳',
    name: 'Shorts',
    desc: 'Inseam length varies from 5" (athletic) to 11" (casual). Materials include cotton twill, nylon ripstop, and mesh-lined athletic fabrics. Elastic waistbands with drawstrings offer adjustable fit.',
    link: '/blog/usfans-shorts/'
  },
]

const fabricGuide = [
  {
    fabric: 'Cotton (100%)',
    weight: '150-220gsm for tees, 300-400gsm for hoodies',
    pros: 'Breathable, soft, natural, easy to care for',
    cons: 'Shrinks if not pre-shrunk, wrinkles easily, absorbs moisture',
    bestFor: 'Everyday wear, casual styles, warm weather',
  },
  {
    fabric: 'Cotton Blends (Cotton/Poly)',
    weight: 'Varies by application',
    pros: 'Less shrinkage, wrinkle-resistant, durable, affordable',
    cons: 'Less breathable than pure cotton, can pill over time',
    bestFor: 'Athletic wear, workwear, budget options',
  },
  {
    fabric: 'French Terry',
    weight: '280-380gsm',
    pros: 'Soft loops inside, breathable, absorbent, comfortable',
    cons: 'Heavier than jersey, can stretch out, requires careful washing',
    bestFor: 'Hoodies, sweatshirts, loungewear',
  },
  {
    fabric: 'Fleece',
    weight: '300-450gsm',
    pros: 'Warm, soft, lightweight, retains heat when wet',
    cons: 'Can pill, attracts lint, less breathable',
    bestFor: 'Cold weather layering, outdoor activities',
  },
  {
    fabric: 'Nylon/Polyester (Technical)',
    weight: 'Lightweight (60-150gsm)',
    pros: 'Water-resistant, quick-drying, durable, wind-resistant',
    cons: 'Less breathable, can feel synthetic, retains odor',
    bestFor: 'Outerwear, athletic wear, rain jackets',
  },
  {
    fabric: 'Denim',
    weight: '12-16oz',
    pros: 'Durable, ages beautifully, versatile, structured',
    cons: 'Stiff initially, requires break-in, can fade unevenly',
    bestFor: 'Jeans, jackets, workwear',
  },
]

const fitGuide = [
  {
    fit: 'Slim Fit',
    description: 'Close to body without being tight. Tapers at waist and legs.',
    bestFor: 'Lean builds, formal occasions, layering under jackets',
    avoid: 'Athletic builds with broad shoulders/thighs',
  },
  {
    fit: 'Regular/Classic Fit',
    description: 'Standard cut with room through chest, waist, and legs.',
    bestFor: 'Most body types, everyday wear, comfort',
    avoid: 'Those seeking a modern, tailored silhouette',
  },
  {
    fit: 'Relaxed Fit',
    description: 'Loose through body and legs. Extra room in seat and thighs.',
    bestFor: 'Comfort, athletic builds, casual styles',
    avoid: 'Slim builds (can look baggy)',
  },
  {
    fit: 'Oversized Fit',
    description: 'Intentionally large, dropped shoulders, extended length.',
    bestFor: 'Streetwear, layering, fashion-forward looks',
    avoid: 'Petite frames (can overwhelm)',
  },
  {
    fit: 'Boxy Fit',
    description: 'Wide through body, shorter length, straight cut.',
    bestFor: 'T-shirts, casual wear, hiding midsection',
    avoid: 'Tall, slim builds (can look disproportionate)',
  },
]

const brandOverview = [
  {
    brand: 'Streetwear Labels',
    specialty: 'Bold graphics, limited drops, urban aesthetic',
    priceRange: 'Varies by item and source; verify the current listing',
    quality: 'Compare fabric weight, graphic application, construction and care information',
  },
  {
    brand: 'Minimalist Luxury',
    specialty: 'Neutral tones, oversized fits, clean silhouettes',
    priceRange: 'Varies by item and source; verify the current listing',
    quality: 'Compare fleece composition, seam finishing and versatility for the intended use',
  },
  {
    brand: 'Heritage Streetwear',
    specialty: 'Surf/skate heritage, signature graphics',
    priceRange: 'Varies by item and source; verify the current listing',
    quality: 'Compare knit weight, print details and everyday care requirements',
  },
  {
    brand: 'Graphic Streetwear',
    specialty: 'Camo patterns, bold hoodies, streetwear icon',
    priceRange: 'Varies by item and source; verify the current listing',
    quality: 'Compare material composition, graphic placement and construction details',
  },
  {
    brand: 'Classic American',
    specialty: 'Polo shirts, preppy aesthetic, timeless style',
    priceRange: 'Varies by item and source; verify the current listing',
    quality: 'Compare construction, material composition and suitability for the planned wardrobe',
  },
]
</script>

# USFans Clothing Spreadsheet

The USFans Clothing Spreadsheet brings together clothing-focused guides for T-shirts, hoodies, shirts, jackets, dresses, layers and everyday wardrobe pieces. Start with the category that matches your intended use, then open the connected article card to compare fit, materials, care considerations and relevant USFans clothing finds.

<div class="spreadsheet-cta">
  <a :href="spreadsheetLink" target="_blank" class="spreadsheet-btn">
    <span class="btn-icon"></span>
    <span>View Clothes Spreadsheet</span>
    <span class="btn-arrow">→</span>
  </a>
  <a href="https://repsootd.com/products/?q=T-Shirts" target="_blank" rel="nofollow sponsored noopener noreferrer" class="shopping-btn">Start shopping</a>
</div>

## Understanding Clothing Categories

Each clothing type serves different purposes and requires different considerations when buying.

<CategoryContent
  :categoryDescription="clothesCategory.description"
  :productTypes="productTypes"
/>

## Fabric Guide: What Your Clothes Are Made Of

Understanding fabric composition helps you predict comfort, durability, and care requirements.

<div class="fabric-table-wrapper">
<table class="fabric-table">
<thead>
<tr>
<th>Fabric</th>
<th>Weight</th>
<th>Pros</th>
<th>Cons</th>
<th>Best For</th>
</tr>
</thead>
<tbody>
<tr v-for="f in fabricGuide" :key="f.fabric">
<td><strong>{{ f.fabric }}</strong></td>
<td>{{ f.weight }}</td>
<td>{{ f.pros }}</td>
<td>{{ f.cons }}</td>
<td>{{ f.bestFor }}</td>
</tr>
</tbody>
</table>
</div>

## Fit Guide: Finding Your Perfect Silhouette

Fit determines how clothing looks and feels. Here is how different fits work for various body types:

<div class="fit-grid">
<div v-for="f in fitGuide" :key="f.fit" class="fit-card">
<h3>{{ f.fit }}</h3>
<p class="fit-desc">{{ f.description }}</p>
<div class="fit-details">
<div class="fit-detail">
<strong>Best For:</strong> {{ f.bestFor }}
</div>
<div class="fit-detail">
<strong>Avoid If:</strong> {{ f.avoid }}
</div>
</div>
</div>
</div>

## Brand Overview: Streetwear & Lifestyle

Popular brands each have their specialties and quality standards:

<div class="brand-table-wrapper">
<table class="brand-table">
<thead>
<tr>
<th>Brand</th>
<th>Specialty</th>
<th>Price Range</th>
<th>Quality Notes</th>
</tr>
</thead>
<tbody>
<tr v-for="b in brandOverview" :key="b.brand">
<td><strong>{{ b.brand }}</strong></td>
<td>{{ b.specialty }}</td>
<td>{{ b.priceRange }}</td>
<td>{{ b.quality }}</td>
</tr>
</tbody>
</table>
</div>

## How to Evaluate Clothing Quality

When inspecting clothing, especially from alternative sources, check these details:

### Construction Quality
- **Stitching** - Should be straight, even, and tight. Look for 12-16 stitches per inch
- **Seams** - Flat-felled or French seams indicate higher quality than overlocked edges
- **Pattern matching** - Stripes, plaids, and prints should align at seams
- **Reinforcements** - Stress points (pockets, cuffs, waistbands) should have bar tacks or double stitching

### Fabric Quality
- **Weight** - Heavier fabrics (higher gsm) generally indicate better quality
- **Hand feel** - Should feel substantial, not thin or papery
- **Color consistency** - No fading, bleeding, or uneven dye lots
- **Pre-shrunk** - Look for "pre-shrunk" or "sanforized" labels to minimize shrinkage

### Hardware & Trims
- **Zippers** - YKK zippers are industry standard for reliability
- **Buttons** - Should be securely attached with shank or through-button stitching
- **Drawstrings** - Metal aglets prevent fraying; plastic aglets are lower quality
- **Labels** - Should be cleanly attached without puckering fabric

## Care Instructions for Longevity

Proper care extends garment life significantly:

1. **Wash in cold water** - Prevents shrinkage and color fading
2. **Turn inside out** - Protects prints and reduces pilling
3. **Use gentle detergent** - Avoid bleach and fabric softeners on technical fabrics
4. **Air dry when possible** - Dryers cause shrinkage and wear elastic
5. **Store properly** - Hang structured pieces, fold knits to prevent stretching
6. **Iron with care** - Check fabric labels; use pressing cloth for delicate materials

## Common Quality Issues to Watch For

Red flags that indicate poor manufacturing:

- **Loose threads** - Sign of rushed production or poor quality control
- **Uneven hems** - Indicates poor cutting or sewing
- **Misaligned patterns** - Shows lack of attention to detail
- **Cheap zippers** - Stick, snag, or break easily
- **Thin fabric** - See-through or flimsy materials won't last
- **Strong chemical smell** - May indicate inferior dyes or finishes

## Related Articles

Deepen your knowledge with these clothing-specific resources:

- [Usfans Hoodies Guide](/blog/usfans-hoodies/) — Best hoodie picks, fabric weights, and style comparisons for 2026
- [Usfans T-Shirts Guide](/blog/usfans-t-shirts/) — T-shirt materials, fit options, and quality indicators
- [Usfans Streetwear Guide](/blog/usfans-streetwear/) — Streetwear brands, styling tips, and trend analysis
- [Usfans QC Photos](/blog/usfans-qc-photos/) — How to inspect clothing quality using pre-shipment photos
- [Usfans Sizing Guide](/blog/usfans-sizing-guide/) — Universal sizing guide for shoes and apparel

## Explore More Categories

Looking to complete your outfit? Check out our other category guides for more curated picks and detailed buying advice:

- [Shoes Guide](/shoes) — Sneakers, boots, casual footwear and more. Find the perfect pair to match your style.
- [Hats Guide](/hats) — Snapbacks, beanies, bucket hats and fitted caps. The finishing touch to any look.

<style scoped>
.fabric-table-wrapper,
.brand-table-wrapper {
  overflow-x: auto;
  margin: 24px 0;
  border: 1px solid #eee;
  border-radius: 12px;
}

.fabric-table,
.brand-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.fabric-table th,
.fabric-table td,
.brand-table th,
.brand-table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
}

.fabric-table thead,
.brand-table thead {
  background: #f8f8f8;
}

.fabric-table th,
.brand-table th {
  font-weight: 600;
  color: #333;
  white-space: nowrap;
}

.fabric-table td,
.brand-table td {
  color: #555;
}

.fit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 24px 0;
}

.fit-card {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 24px;
}

.fit-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #8B0000;
  margin-bottom: 12px;
}

.fit-desc {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 16px;
}

.fit-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.fit-detail {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}

.fit-detail strong {
  color: #333;
}

/* Spreadsheet CTA */
.spreadsheet-cta {
  margin: 32px 0;
  text-align: center;
}

.spreadsheet-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  background: linear-gradient(135deg, #8B0000, #a00000);
  color: #fff;
  text-decoration: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(139, 0, 0, 0.2);
}

.spreadsheet-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 0, 0, 0.3);
}

.spreadsheet-btn .btn-icon {
  font-size: 20px;
}

.spreadsheet-btn .btn-arrow {
  font-size: 18px;
  transition: transform 0.3s ease;
}

.spreadsheet-btn:hover .btn-arrow {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .fabric-table th,
  .fabric-table td,
  .brand-table th,
  .brand-table td {
    padding: 10px 12px;
    font-size: 13px;
  }

  .fit-grid {
    grid-template-columns: 1fr;
  }
}
</style>
