<template>
  <main class="modern-home">
    <section class="hero-section">
      <div class="page-container hero-content">
        <p class="eyebrow">Curated fashion discovery · Updated regularly</p>
        <h1>Find fashion with<br><span>clarity and confidence.</span></h1>
        <p class="hero-copy">
          Explore a structured catalog of sneakers, clothing and accessories with clear category paths,
          useful guides and direct access to the full spreadsheet.
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
            <dt>10,000+</dt>
            <dd>fashion finds</dd>
          </div>
          <div>
            <dt>6</dt>
            <dd>core categories</dd>
          </div>
          <div>
            <dt>Global</dt>
            <dd>access</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="intro-section">
      <div class="page-container intro-grid">
        <p class="section-kicker">A better way to browse</p>
        <div>
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
          <p class="section-kicker">Browse by category</p>
          <h2>Start with what you are looking for.</h2>
          <p>Each category brings together selected resources, product context and useful guides.</p>
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
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { siteConfig } from '../site-config.js'

const { links, categories } = siteConfig
const shoppingUrl = 'https://repsootd.com/'

const fallbackIcons = ['👟', '🧥', '👜']
const categoryCards = computed(() => categories.slice(0, 3).map((category, index) => ({
  id: category.id,
  name: category.name,
  description: category.description,
  link: `/${category.id}/`,
  icon: category.icon || fallbackIcons[index] || '✦'
})))

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
.hero-section { padding: 152px 0 88px; border-bottom: 1px solid var(--line); }
.hero-content { text-align: center; max-width: 900px; }
.eyebrow, .section-kicker { margin: 0 0 18px; color: var(--accent); font-size: 12px; font-weight: 750; letter-spacing: .12em; text-transform: uppercase; }
.hero-content h1 { max-width: 820px; margin: 0 auto; color: var(--ink); font-size: clamp(44px, 7.1vw, 82px); font-weight: 800; letter-spacing: -.067em; line-height: .98; }
.hero-content h1 span { color: var(--accent); }
.hero-copy { max-width: 630px; margin: 28px auto 34px; color: var(--muted-ink); font-size: 19px; line-height: 1.7; }
.hero-actions { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
.button { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 52px; padding: 0 23px; border: 1px solid transparent; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease, background .2s ease; }
.button:hover { transform: translateY(-2px); }
.button-primary { background: var(--ink); color: #fff; box-shadow: 0 10px 22px rgba(0,0,0,.12); }
.button-primary:hover { background: var(--accent); box-shadow: 0 12px 26px rgba(91,92,226,.22); }
.button-secondary { border-color: var(--line); background: #fff; color: var(--ink); }
.button-secondary:hover { border-color: #c8c8c8; background: var(--surface); }
.hero-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; max-width: 680px; margin: 72px auto 0; padding-top: 25px; border-top: 1px solid var(--line); }
.hero-stats div { text-align: center; }
.hero-stats dt { margin-bottom: 4px; color: var(--ink); font-size: 23px; font-weight: 800; letter-spacing: -.04em; }
.hero-stats dd { margin: 0; color: var(--muted-ink); font-size: 13px; }
.intro-section { padding: 96px 0; }
.intro-grid { display: grid; grid-template-columns: .7fr 1.3fr; gap: 56px; align-items: start; }
.intro-grid .section-kicker { margin-top: 10px; }
.intro-grid h2, .section-heading h2, .feature-intro h2, .final-cta h2 { margin: 0; font-size: clamp(30px, 4vw, 48px); font-weight: 780; letter-spacing: -.055em; line-height: 1.08; }
.intro-grid p:last-child { max-width: 700px; margin: 22px 0 0; color: var(--muted-ink); font-size: 18px; line-height: 1.75; }
.section { padding: 104px 0; }
.section-light { background: #fff; }
.section-muted { background: var(--surface); }
.section-heading { max-width: 670px; margin: 0 auto 52px; text-align: center; }
.section-heading h2 { font-size: clamp(30px, 4.3vw, 50px); }
.section-heading > p:last-child { margin: 16px auto 0; color: var(--muted-ink); font-size: 17px; line-height: 1.7; }
.category-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.category-card { min-height: 314px; padding: 31px; border: 1px solid var(--line); border-radius: 14px; color: var(--ink); text-decoration: none; transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease; }
.category-card:hover { border-color: var(--accent); transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,.07); }
.category-icon { display: grid; width: 48px; height: 48px; place-items: center; margin-bottom: 56px; border-radius: 12px; background: #f0f0fb; font-size: 23px; }
.category-card h3 { margin: 0 0 10px; font-size: 22px; letter-spacing: -.035em; }
.category-card p { min-height: 75px; margin: 0; color: var(--muted-ink); font-size: 15px; line-height: 1.7; }
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
@media (max-width: 900px) { .intro-grid, .feature-layout, .faq-wrap { grid-template-columns: 1fr; gap: 42px; } .feature-intro { position: static; } .steps-grid { grid-template-columns: repeat(2, 1fr); } .final-cta { align-items: flex-start; flex-direction: column; } }
@media (max-width: 700px) { .page-container { width: min(100% - 32px, 1180px); } .hero-section { padding: 112px 0 66px; } .hero-copy { font-size: 17px; } .hero-stats { margin-top: 54px; gap: 8px; } .hero-stats dt { font-size: 19px; } .intro-section, .section { padding: 72px 0; } .category-grid, .feature-grid { grid-template-columns: 1fr; } .category-card { min-height: auto; } .category-icon { margin-bottom: 38px; } .category-card p { min-height: auto; } .steps-grid { grid-template-columns: 1fr; gap: 4px; } .step-index { margin-bottom: 28px; } .section-heading { margin-bottom: 36px; } }
</style>
