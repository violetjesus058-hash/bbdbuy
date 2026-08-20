<template>
  <main class="modern-home">
    <section class="hero-section">
      <div class="page-container hero-content">
        <p class="eyebrow">Curated fashion discovery · Updated regularly</p>
        <h1>USFans Spreadsheet <span>2026</span></h1>
        <p class="hero-copy">
          Discover organized USFans finds across clothing, shoes, pants, hats, accessories and electronics,
          with category overviews, focused guides and direct access to the full spreadsheet.
        </p>
        <div class="hero-actions">
          <a :href="links.spreadsheet" target="_blank" rel="nofollow" class="button button-primary cta-spreadsheet">
            Explore the spreadsheet
            <span aria-hidden="true">↗</span>
          </a>
          <a :href="shoppingUrl" target="_blank" rel="nofollow" class="button button-secondary cta-shopping">
            Start shopping
          </a>
        </div>
        <dl class="hero-stats" aria-label="Catalog highlights">
          <div>
            <dt>Curated</dt>
            <dd>fashion discovery</dd>
          </div>
          <div>
            <dt>Guided</dt>
            <dd>category paths</dd>
          </div>
          <div>
            <dt>Direct</dt>
            <dd>catalog access</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="intro-section">
      <div class="page-container intro-grid">
        <div class="intro-content">
          <p class="section-kicker">A better way to browse</p>
          <h2>Everything you need to explore, organized in one place.</h2>
          <p>
            Instead of working through unstructured listings, use clear category pages and focused guides to
            compare styles, review details and find the next item for your wardrobe.
          </p>
        </div>
      </div>
    </section>

    <section id="categories" class="section section-light">
      <div class="page-container">
        <div class="section-heading">
          <p class="section-kicker">Browse by type</p>
          <h2>Explore every clothing type in one place.</h2>
          <p>These 15 unique types are drawn from the existing article library. Each card links to one representative guide.</p>
        </div>
        <div class="category-grid">
          <a v-for="cat in categoryCards" :key="cat.id" :href="cat.link" class="category-card">
            <span class="category-icon" aria-hidden="true">{{ cat.icon }}</span>
            <h3>{{ cat.name }}</h3>
            <p>{{ cat.description }}</p>
            <span class="card-link">Explore category <span aria-hidden="true">→</span></span>
          </a>
        </div>
      </div>
    </section>

    <section class="section section-muted">
      <div class="page-container">
        <div class="section-heading">
          <p class="section-kicker">Simple by design</p>
          <h2>From discovery to decision in four steps.</h2>
        </div>
        <ol class="steps-grid">
          <li v-for="(step, index) in steps" :key="step.title" class="step-card">
            <span class="step-index">0{{ index + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section id="features" class="section section-light">
      <div class="page-container feature-layout">
        <div class="feature-intro">
          <p class="section-kicker">Built for useful discovery</p>
          <h2>Less browsing. Better context.</h2>
          <p>
            The site is designed around practical navigation, clear detail pages and a catalog that is easy to
            return to whenever you need it.
          </p>
          <a :href="links.spreadsheet" target="_blank" rel="nofollow" class="text-link cta-spreadsheet">
            Open the full catalog <span aria-hidden="true">→</span>
          </a>
        </div>
        <div class="feature-grid">
          <article v-for="feature in features" :key="feature.title" class="feature-card">
            <span class="feature-mark" aria-hidden="true">{{ feature.mark }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="how-it-works" class="section section-dark">
      <div class="page-container final-cta">
        <div>
          <p class="section-kicker">Ready when you are</p>
          <h2>Explore the full fashion catalog.</h2>
          <p>Access the spreadsheet directly, then come back to the guides whenever you need more context.</p>
        </div>
        <a :href="links.spreadsheet" target="_blank" rel="nofollow" class="button button-light cta-spreadsheet">
          Access spreadsheet <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>

    <section id="faq" class="section section-light">
      <div class="page-container faq-wrap">
        <div class="section-heading section-heading-left">
          <p class="section-kicker">Quick answers</p>
          <h2>Frequently asked questions.</h2>
        </div>
        <div class="faq-list">
          <details v-for="faq in faqs" :key="faq.question" class="faq-item">
            <summary>{{ faq.question }}</summary>
            <p>{{ faq.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <section id="essential-guides" class="section section-muted essential-guides">
      <div class="page-container">
        <div class="section-heading section-heading-left guides-heading">
          <p class="section-kicker">Start with the essentials</p>
          <h2>Useful context before you open the spreadsheet.</h2>
          <p>New to Usfans? These short guides explain how the platform works, what the spreadsheet is for and how to begin with a clearer plan.</p>
        </div>
        <div class="guide-grid">
          <a v-for="guide in guideCards" :key="guide.title" :href="guide.link" class="guide-card">
            <span class="guide-label">{{ guide.label }}</span>
            <h3>{{ guide.title }}</h3>
            <p>{{ guide.description }}</p>
            <span class="guide-card-link">Read the guide <span aria-hidden="true">→</span></span>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { siteConfig } from '../site-config.js'

const { links } = siteConfig
const shoppingUrl = 'https://repsootd.com/products/'

const categoryCards = computed(() => [
  { id: 'sneakers', name: 'Sneakers', description: 'Dedicated guide to sneaker styles and product discovery.', link: '/blog/usfans-sneakers/', icon: '👟' },
  { id: 'shoes', name: 'Shoes', description: 'Browse footwear options beyond the main sneaker collection.', link: '/blog/usfans-shoes/', icon: '👞' },
  { id: 'hoodies', name: 'Hoodies', description: 'Explore hoodies, layers and casual everyday essentials.', link: '/blog/usfans-hoodie/', icon: '🧥' },
  { id: 't-shirts', name: 'T-Shirts', description: 'Find staple tees and graphic shirt discovery resources.', link: '/blog/usfans-t-shirt/', icon: '👕' },
  { id: 'jackets', name: 'Jackets', description: 'Discover jackets and outerwear guides by style.', link: '/blog/usfans-jacket/', icon: '🧤' },
  { id: 'jeans', name: 'Jeans', description: 'Browse denim and jeans-focused product guidance.', link: '/blog/usfans-jeans/', icon: '👖' },
  { id: 'pants', name: 'Pants', description: 'Explore trousers, sweatpants and everyday bottoms.', link: '/blog/usfans-pants/', icon: '🩳' },
  { id: 'shorts', name: 'Shorts', description: 'Find shorts for casual and warm-weather outfits.', link: '/blog/usfans-shorts/', icon: '🩳' },
  { id: 'tracksuits', name: 'Tracksuits', description: 'Browse coordinated tracksuits and sport-inspired looks.', link: '/blog/usfans-tracksuit/', icon: '🏃' },
  { id: 'dresses', name: 'Dresses', description: 'Explore dress styles and clothing discovery options.', link: '/blog/usfans-dress/', icon: '👗' },
  { id: 'hats', name: 'Hats & Caps', description: 'Find caps, hats and finishing pieces for your outfit.', link: '/blog/usfans-hats/', icon: '🧢' },
  { id: 'bags', name: 'Bags', description: 'Browse bag guides across everyday and statement styles.', link: '/blog/usfans-bags/', icon: '👜' },
  { id: 'accessories', name: 'Accessories', description: 'Explore belts, small goods and complementary details.', link: '/blog/usfans-accessories/', icon: '✨' },
  { id: 'watches', name: 'Watches', description: 'Discover watch guides and wearable accessory options.', link: '/blog/usfans-watches/', icon: '⌚' },
  { id: 'sunglasses', name: 'Sunglasses', description: 'Browse eyewear and sunglasses discovery resources.', link: '/blog/usfans-sunglasses/', icon: '🕶️' }
])

const guideCards = [
  {
    label: 'Getting started',
    title: 'How to Buy with Usfans',
    description: 'A practical first look at browsing, comparing options and moving from a shortlist to an order with more confidence.',
    link: '/blog/usfans-how-to-buy/'
  },
  {
    label: 'Platform overview',
    title: 'What Is Usfans?',
    description: 'Get a simple introduction to the platform, the role it plays in product discovery and the information worth checking first.',
    link: '/blog/usfans-about/'
  },
  {
    label: 'Catalog explained',
    title: 'What Is the Usfans Spreadsheet?',
    description: 'Learn how an organized spreadsheet helps you compare product details, explore categories and return to useful finds faster.',
    link: '/blog/usfans-platform/'
  },
  {
    label: 'Why it helps',
    title: 'Key Benefits of Usfans',
    description: 'See the value of clearer category paths, practical guides and direct catalog access before deciding where to start.',
    link: '/blog/usfans-complete-platform-guide/'
  }
]

const steps = [
  { title: 'Choose a category', description: 'Start with the product type or style you want to explore.' },
  { title: 'Review the guides', description: 'Use structured pages to understand details, sizing and context.' },
  { title: 'Open the catalog', description: 'Browse the spreadsheet for a broader selection of fashion finds.' },
  { title: 'Make your shortlist', description: 'Compare options and return to the resources whenever you need them.' }
]

const features = [
  { mark: '01', title: 'Clear structure', description: 'Focused categories make it faster to reach the content that matters.' },
  { mark: '02', title: 'Useful context', description: 'Guides provide practical background before you move to the catalog.' },
  { mark: '03', title: 'Easy access', description: 'Open the full spreadsheet from any key point on the homepage.' },
  { mark: '04', title: 'Always current', description: 'A simple system for returning to collections and new discovery paths.' }
]

const faqs = [
  {
    question: 'What is the fashion spreadsheet?',
    answer: 'It is a curated directory for browsing fashion items through organized categories and direct product resources.'
  },
  {
    question: 'How should I start exploring?',
    answer: 'Choose a category on this page, read the related guide, then use the spreadsheet to browse a wider selection.'
  },
  {
    question: 'Can I access the catalog on mobile?',
    answer: 'Yes. The site and its external catalog links are designed to work across desktop and mobile browsers.'
  }
]
</script>

<style scoped>
.modern-home {
  --ink: #111111;
  --muted-ink: #656565;
  --line: #e8e8e8;
  --surface: #f7f7f5;
  --accent: #5b5ce2;
  color: var(--ink);
  background: #fff;
}

.page-container { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }
.hero-section { padding: 88px 0 72px; border-bottom: 1px solid var(--line); }
.hero-content { text-align: center; max-width: 900px; }
.eyebrow, .section-kicker { margin: 0 0 18px; color: var(--accent); font-size: 12px; font-weight: 750; letter-spacing: .12em; text-transform: uppercase; }
.hero-content h1 { max-width: none; margin: 0 auto; color: var(--ink); font-size: clamp(44px, 5.4vw, 76px); font-weight: 800; letter-spacing: -.067em; line-height: .98; white-space: nowrap; }
.hero-content h1 span { color: var(--accent); }
.hero-copy { max-width: 630px; margin: 28px auto 34px; color: var(--muted-ink); font-size: 19px; line-height: 1.7; }
.hero-actions { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
.button { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 52px; padding: 0 23px; border: 1px solid transparent; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease, background .2s ease; }
.button:hover { transform: translateY(-2px); }
.button-primary { background: var(--ink); color: #fff; box-shadow: 0 10px 22px rgba(0,0,0,.12); }
.button-primary:hover { background: var(--accent); box-shadow: 0 12px 26px rgba(91,92,226,.22); }
.button-secondary { border-color: var(--line); background: #fff; color: var(--ink); }
.button-secondary:hover { border-color: #c8c8c8; background: var(--surface); }
.hero-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; max-width: 680px; margin: 56px auto 0; padding-top: 25px; border-top: 1px solid var(--line); }
.hero-stats div { text-align: center; }
.hero-stats dt { margin-bottom: 4px; color: var(--ink); font-size: 23px; font-weight: 800; letter-spacing: -.04em; }
.hero-stats dd { margin: 0; color: var(--muted-ink); font-size: 13px; }
.intro-section { padding: 96px 0; }
.intro-grid { display: block; max-width: 820px; text-align: center; }
.intro-content { margin: 0 auto; }
.intro-content .section-kicker { margin: 10px 0 18px; }
.intro-grid h2, .section-heading h2, .feature-intro h2, .final-cta h2 { margin: 0; font-size: clamp(30px, 4vw, 48px); font-weight: 780; letter-spacing: -.055em; line-height: 1.08; }
.intro-content > p:last-child { max-width: 700px; margin: 22px auto 0; color: var(--muted-ink); font-size: 18px; line-height: 1.75; }
.section { padding: 104px 0; }
.section-light { background: #fff; }
.section-muted { background: var(--surface); }
.section-heading { max-width: 670px; margin: 0 auto 52px; text-align: center; }
.section-heading h2 { font-size: clamp(30px, 4.3vw, 50px); }
.section-heading > p:last-child { margin: 16px auto 0; color: var(--muted-ink); font-size: 17px; line-height: 1.7; }
.category-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.category-card { min-height: 264px; padding: 28px; border: 1px solid var(--line); border-radius: 14px; color: var(--ink); text-decoration: none; transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease; }
.category-card:hover { border-color: var(--accent); transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,.07); }
.category-icon { display: grid; width: 46px; height: 46px; place-items: center; margin-bottom: 38px; border-radius: 12px; background: #f0f0fb; font-size: 23px; }
.category-card h3 { margin: 0 0 10px; font-size: 22px; letter-spacing: -.035em; }
.category-card p { min-height: 76px; margin: 0; color: var(--muted-ink); font-size: 15px; line-height: 1.7; }
.card-link, .text-link { display: inline-block; margin-top: 27px; color: var(--accent); font-size: 14px; font-weight: 750; text-decoration: none; }
.steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; padding: 0; margin: 0; list-style: none; counter-reset: none; }
.step-card { padding: 28px 24px; border-top: 1px solid #d7d7d4; }
.step-index { display: inline-block; margin-bottom: 50px; color: var(--accent); font-size: 13px; font-weight: 800; letter-spacing: .08em; }
.step-card h3, .feature-card h3 { margin: 0 0 10px; font-size: 20px; letter-spacing: -.03em; }
.step-card p, .feature-card p { margin: 0; color: var(--muted-ink); font-size: 15px; line-height: 1.7; }
.feature-layout { display: grid; grid-template-columns: .85fr 1.15fr; gap: 82px; align-items: start; }
.feature-intro { position: sticky; top: 96px; }
.feature-intro > p:not(.section-kicker) { margin: 22px 0 0; color: var(--muted-ink); font-size: 17px; line-height: 1.75; }
.feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.feature-card { min-height: 225px; padding: 27px; border: 1px solid var(--line); border-radius: 12px; }
.feature-mark { display: block; margin-bottom: 47px; color: var(--accent); font-size: 12px; font-weight: 800; letter-spacing: .08em; }
.section-dark { background: var(--ink); color: #fff; }
.final-cta { display: flex; align-items: center; justify-content: space-between; gap: 40px; }
.final-cta h2 { max-width: 640px; color: #fff; }
.final-cta p:not(.section-kicker) { max-width: 600px; margin: 16px 0 0; color: rgba(255,255,255,.66); line-height: 1.7; }
.section-dark .section-kicker { color: #b6b6ff; }
.button-light { flex: 0 0 auto; background: #fff; color: var(--ink); }
.button-light:hover { background: #e8e8ff; }
.faq-wrap { display: grid; grid-template-columns: .8fr 1.2fr; gap: 72px; }
.section-heading-left { margin: 0; text-align: left; }
.faq-list { border-top: 1px solid var(--line); }
.faq-item { border-bottom: 1px solid var(--line); }
.faq-item summary { display: flex; align-items: center; justify-content: space-between; padding: 23px 0; cursor: pointer; font-size: 17px; font-weight: 700; list-style: none; }
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary::after { content: '+'; color: var(--accent); font-size: 24px; font-weight: 400; }
.faq-item[open] summary::after { content: '−'; }
.faq-item p { max-width: 660px; margin: -3px 0 22px; color: var(--muted-ink); line-height: 1.7; }
.essential-guides { border-top: 1px solid var(--line); }
.guides-heading { max-width: 720px; }
.guides-heading > p:not(.section-kicker) { max-width: 660px; margin: 18px 0 0; color: var(--muted-ink); font-size: 17px; line-height: 1.7; }
.guide-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
.guide-card { display: flex; flex-direction: column; min-height: 238px; padding: 28px; border: 1px solid var(--line); border-radius: 12px; background: #fff; color: var(--ink); text-decoration: none; transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease; }
.guide-card:hover { border-color: #cfcfff; box-shadow: 0 14px 30px rgba(35, 35, 75, .09); transform: translateY(-3px); }
.guide-label { display: block; margin-bottom: 35px; color: var(--accent); font-size: 11px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
.guide-card h3 { margin: 0; font-size: 23px; font-weight: 780; letter-spacing: -.04em; line-height: 1.12; }
.guide-card p { max-width: 460px; margin: 14px 0 23px; color: var(--muted-ink); font-size: 15px; line-height: 1.65; }
.guide-card-link { margin-top: auto; color: var(--ink); font-size: 13px; font-weight: 800; }
.guide-card-link span { margin-left: 4px; color: var(--accent); }
@media (max-width: 900px) { .intro-grid, .feature-layout, .faq-wrap { grid-template-columns: 1fr; gap: 42px; } .intro-content { grid-column: auto; } .feature-intro { position: static; } .steps-grid { grid-template-columns: repeat(2, 1fr); } .category-grid { grid-template-columns: repeat(2, 1fr); } .final-cta { align-items: flex-start; flex-direction: column; } }
@media (max-width: 700px) { .page-container { width: min(100% - 32px, 1180px); } .hero-content h1 { white-space: normal; } .hero-section { padding: 76px 0 58px; } .hero-copy { font-size: 17px; } .hero-stats { margin-top: 54px; gap: 8px; } .hero-stats dt { font-size: 19px; } .intro-section, .section { padding: 72px 0; } .category-grid, .feature-grid, .guide-grid { grid-template-columns: 1fr; } .category-card { min-height: auto; } .category-icon { margin-bottom: 38px; } .category-card p { min-height: auto; } .steps-grid { grid-template-columns: 1fr; gap: 4px; } .step-index { margin-bottom: 28px; } .section-heading { margin-bottom: 36px; } .guide-card { min-height: 0; padding: 24px; } .guide-label { margin-bottom: 28px; } }
</style>
