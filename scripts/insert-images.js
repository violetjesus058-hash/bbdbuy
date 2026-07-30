/**
 * Batch insert images into blog articles based on content category
 * Each article gets 1-2 relevant images with alt text and captions
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DIR = path.resolve(__dirname, '..', 'blog');
const IMAGES_DIR = '/images';

// Image database with metadata
const IMAGES = [
  {
    id: 'IMG-001',
    file: 'sneakers-lifestyle-collection-us-01.webp',
    alt: 'Three popular sneaker styles displayed on coffee table with express delivery box, Nike Air Force 1 Jordan 1 New Balance collection',
    caption: 'Popular sneaker collection with express delivery options for US, UK, and Australia markets',
    categories: ['sneakers', 'shoes', 'nike', 'jordan', 'new-balance', 'adidas', 'air-force', 'air-max', 'yeezy', 'vans', 'converse', 'puma', 'reebok', 'asics', 'salomon', 'hoka', 'on-running', 'crocs', 'timberland', 'dr-martens', 'birkenstock', 'ugg', 'golden-goose', 'balenciaga', 'dior', 'alexander-mcqueen'],
    position: 'after-first-h2'
  },
  {
    id: 'IMG-002',
    file: 'sneakers-unboxing-premium-uk-02.webp',
    alt: 'Premium sneaker unboxing with quality inspection card and UK EU shipping labels, Jordan 4 Adidas Samba',
    caption: 'Quality inspection and unboxing experience with international shipping options',
    categories: ['sneakers', 'shoes', 'qc', 'quality', 'batch', 'unboxing', 'jordan', 'adidas', 'nike', 'uk', 'eu', 'shipping'],
    position: 'after-intro'
  },
  {
    id: 'IMG-003',
    file: 'clothing-streetwear-outfit-us-03.webp',
    alt: 'Three friends wearing streetwear outfits walking in Los Angeles, Essentials hoodie Stussy tee Gallery Dept jacket',
    caption: 'Streetwear styling inspiration featuring popular brands and casual urban fashion',
    categories: ['clothes', 'clothing', 'streetwear', 'hoodies', 'hoodie', 't-shirts', 'essentials', 'stussy', 'gallery-dept', 'supreme', 'off-white', 'bape', 'corteiz', 'hellstar', 'ed-hardy', 'eric-emanuel', 'fashion', 'outfit', 'style'],
    position: 'after-first-h2'
  },
  {
    id: 'IMG-004',
    file: 'clothing-wardrobe-organized-au-04.webp',
    alt: 'Organized wardrobe with hoodies and t-shirts, woman comparing products with shipping labels to Australia US UK',
    caption: 'Wardrobe organization and product comparison with international shipping options',
    categories: ['clothes', 'clothing', 'hoodies', 'hoodie', 't-shirts', 'jeans', 'jackets', 'wardrobe', 'organization', 'comparison', 'budget', 'australia', 'shipping', 'guide'],
    position: 'after-intro'
  },
  {
    id: 'IMG-005',
    file: 'accessories-daily-carry-us-05.webp',
    alt: 'Daily carry accessories flat lay with Chrome Hearts ring Cartier watch sunglasses and US priority shipping',
    caption: 'Essential daily accessories with premium quality and fast shipping options',
    categories: ['accessories', 'watches', 'jewelry', 'glasses', 'sunglasses', 'rings', 'bracelets', 'necklaces', 'chrome-hearts', 'cartier', 'rolex', 'omega', 'apple-watch', 'daily-carry', 'us', 'shipping'],
    position: 'after-first-h2'
  },
  {
    id: 'IMG-006',
    file: 'accessories-gift-selection-uk-06.webp',
    alt: 'Gift accessories selection with bracelet perfume sunglasses and UK next day delivery, couple exchanging gifts',
    caption: 'Gift-ready accessories with express delivery for special occasions',
    categories: ['accessories', 'jewelry', 'watches', 'perfume', 'fragrance', 'gift', 'holiday', 'uk', 'delivery', 'bracelet', 'sunglasses', 'cartier', 'tiffany', 'bulgari'],
    position: 'after-intro'
  },
  {
    id: 'IMG-007',
    file: 'bags-travel-backpack-us-07.webp',
    alt: 'Traveler with backpack and crossbody bag at airport with US UK Australia luggage tags and Nike shoe box',
    caption: 'Travel-ready bags with international shipping to multiple destinations',
    categories: ['bags', 'backpack', 'handbag', 'tote', 'crossbody', 'travel', 'luggage', 'nike', 'us', 'uk', 'australia', 'shipping', 'international'],
    position: 'after-first-h2'
  },
  {
    id: 'IMG-008',
    file: 'bags-daily-commute-eu-08.webp',
    alt: 'Professional woman with leather tote bag walking in European city, EU express delivery van in background',
    caption: 'Professional bags for daily commute with EU express delivery options',
    categories: ['bags', 'backpack', 'handbag', 'tote', 'leather', 'professional', 'commute', 'eu', 'europe', 'coach', 'michael-kors', 'kate-spade', 'tory-burch', 'luxury', 'designer'],
    position: 'after-intro'
  },
  {
    id: 'IMG-009',
    file: 'electronics-tech-workspace-us-09.webp',
    alt: 'Tech workspace with iPhone Apple Watch AirPods and headphones, US express and international shipping boxes',
    caption: 'Latest tech accessories with express shipping for US and international orders',
    categories: ['electronics', 'iphone', 'apple-watch', 'airpods', 'headphones', 'tech', 'gadgets', 'us', 'shipping', 'express', 'dyson', 'jbl', 'speaker'],
    position: 'after-first-h2'
  },
  {
    id: 'IMG-010',
    file: 'electronics-smart-home-au-10.webp',
    alt: 'Family in living room with Dyson air purifier JBL speaker and smart home devices, Australia US shipping',
    caption: 'Smart home electronics with Australia and US shipping options',
    categories: ['electronics', 'dyson', 'jbl', 'speaker', 'smart-home', 'australia', 'us', 'shipping', 'home', 'family', 'gadgets'],
    position: 'after-intro'
  }
];

// Category mapping for article slugs
function getArticleCategory(slug) {
  const slugLower = slug.toLowerCase();
  
  // Sneakers/Shoes
  if (slugLower.includes('sneaker') || slugLower.includes('shoe') || 
      slugLower.includes('nike') || slugLower.includes('jordan') || 
      slugLower.includes('adidas') || slugLower.includes('new-balance') ||
      slugLower.includes('air-force') || slugLower.includes('air-max') ||
      slugLower.includes('yeezy') || slugLower.includes('vans') ||
      slugLower.includes('converse') || slugLower.includes('puma') ||
      slugLower.includes('reebok') || slugLower.includes('asics') ||
      slugLower.includes('salomon') || slugLower.includes('hoka') ||
      slugLower.includes('on-running') || slugLower.includes('crocs') ||
      slugLower.includes('timberland') || slugLower.includes('dr-martens') ||
      slugLower.includes('birkenstock') || slugLower.includes('ugg') ||
      slugLower.includes('golden-goose') || slugLower.includes('balenciaga') ||
      slugLower.includes('dior') || slugLower.includes('alexander-mcqueen') ||
      slugLower.includes('running') || slugLower.includes('basketball') ||
      slugLower.includes('football') || slugLower.includes('soccer') ||
      slugLower.includes('tennis') || slugLower.includes('golf') ||
      slugLower.includes('hiking') || slugLower.includes('outdoor')) {
    return ['sneakers', 'shoes'];
  }
  
  // Clothing
  if (slugLower.includes('cloth') || slugLower.includes('hoodie') || 
      slugLower.includes('t-shirt') || slugLower.includes('streetwear') ||
      slugLower.includes('essentials') || slugLower.includes('stussy') ||
      slugLower.includes('gallery-dept') || slugLower.includes('supreme') ||
      slugLower.includes('off-white') || slugLower.includes('bape') ||
      slugLower.includes('corteiz') || slugLower.includes('hellstar') ||
      slugLower.includes('ed-hardy') || slugLower.includes('eric-emanuel') ||
      slugLower.includes('fashion') || slugLower.includes('outfit') ||
      slugLower.includes('style') || slugLower.includes('jeans') ||
      slugLower.includes('jacket') || slugLower.includes('pants') ||
      slugLower.includes('shorts') || slugLower.includes('dress') ||
      slugLower.includes('activewear') || slugLower.includes('gym') ||
      slugLower.includes('sport') || slugLower.includes('casual') ||
      slugLower.includes('formal') || slugLower.includes('winter') ||
      slugLower.includes('summer') || slugLower.includes('spring') ||
      slugLower.includes('fall') || slugLower.includes('autumn')) {
    return ['clothes', 'clothing'];
  }
  
  // Accessories
  if (slugLower.includes('accessor') || slugLower.includes('watch') || 
      slugLower.includes('jewelry') || slugLower.includes('glasses') ||
      slugLower.includes('sunglasses') || slugLower.includes('ring') ||
      slugLower.includes('bracelet') || slugLower.includes('necklace') ||
      slugLower.includes('chrome-hearts') || slugLower.includes('cartier') ||
      slugLower.includes('rolex') || slugLower.includes('omega') ||
      slugLower.includes('apple-watch') || slugLower.includes('daily-carry') ||
      slugLower.includes('hat') || slugLower.includes('cap') ||
      slugLower.includes('belt') || slugLower.includes('scarf') ||
      slugLower.includes('glove') || slugLower.includes('perfume') ||
      slugLower.includes('fragrance')) {
    return ['accessories'];
  }
  
  // Bags
  if (slugLower.includes('bag') || slugLower.includes('backpack') || 
      slugLower.includes('handbag') || slugLower.includes('tote') ||
      slugLower.includes('crossbody') || slugLower.includes('travel') ||
      slugLower.includes('luggage') || slugLower.includes('coach') ||
      slugLower.includes('michael-kors') || slugLower.includes('kate-spade') ||
      slugLower.includes('tory-burch') || slugLower.includes('luxury') ||
      slugLower.includes('designer') || slugLower.includes('leather')) {
    return ['bags'];
  }
  
  // Electronics
  if (slugLower.includes('electron') || slugLower.includes('iphone') || 
      slugLower.includes('apple-watch') || slugLower.includes('airpod') ||
      slugLower.includes('headphone') || slugLower.includes('tech') ||
      slugLower.includes('gadget') || slugLower.includes('dyson') ||
      slugLower.includes('jbl') || slugLower.includes('speaker') ||
      slugLower.includes('smart-home') || slugLower.includes('phone') ||
      slugLower.includes('tablet') || slugLower.includes('laptop') ||
      slugLower.includes('camera')) {
    return ['electronics'];
  }
  
  // Default: guide articles get images based on content
  if (slugLower.includes('guide') || slugLower.includes('how-to') ||
      slugLower.includes('beginner') || slugLower.includes('tips') ||
      slugLower.includes('budget') || slugLower.includes('shipping') ||
      slugLower.includes('review') || slugLower.includes('comparison')) {
    return ['guide'];
  }
  
  return ['general'];
}

// Match images to article category
function getMatchingImages(slug, content) {
  const categories = getArticleCategory(slug);
  const matchedImages = [];
  
  for (const img of IMAGES) {
    let score = 0;
    for (const cat of categories) {
      if (img.categories.includes(cat)) {
        score += 2;
      }
    }
    
    // Check content for additional keyword matches
    const contentLower = content.toLowerCase();
    for (const keyword of img.categories) {
      if (contentLower.includes(keyword)) {
        score += 1;
      }
    }
    
    if (score > 0) {
      matchedImages.push({ ...img, score });
    }
  }
  
  // Sort by score and return top 2
  matchedImages.sort((a, b) => b.score - a.score);
  return matchedImages.slice(0, 2);
}

// Generate responsive image HTML
function generateImageHTML(img, position) {
  return `
<figure class="article-image">
  <img src="${IMAGES_DIR}/${img.file}" 
       alt="${img.alt}" 
       loading="lazy" 
       width="1200" 
       height="800"
       style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <figcaption style="text-align: center; font-size: 14px; color: #666; margin-top: 12px; font-style: italic;">${img.caption}</figcaption>
</figure>
`;
}

// Insert image at appropriate position
function insertImage(content, img, position) {
  const imageHTML = generateImageHTML(img, position);
  
  if (position === 'after-first-h2') {
    // Find first ## heading and insert after it
    const h2Regex = /\n## [^\n]+\n/;
    const match = content.match(h2Regex);
    if (match) {
      const insertPos = match.index + match[0].length;
      return content.substring(0, insertPos) + '\n' + imageHTML + '\n' + content.substring(insertPos);
    }
  }
  
  if (position === 'after-intro') {
    // Find first paragraph after H1 and insert after it
    const h1Regex = /# [^\n]+\n/;
    const h1Match = content.match(h1Regex);
    if (h1Match) {
      const afterH1 = content.substring(h1Match.index + h1Match[0].length);
      const firstParagraphRegex = /\n[^\n]+\n/;
      const paraMatch = afterH1.match(firstParagraphRegex);
      if (paraMatch) {
        const insertPos = h1Match.index + h1Match[0].length + paraMatch.index + paraMatch[0].length;
        return content.substring(0, insertPos) + '\n' + imageHTML + '\n' + content.substring(insertPos);
      }
    }
  }
  
  // Default: insert after H1
  const h1Regex = /# [^\n]+\n/;
  const match = content.match(h1Regex);
  if (match) {
    const insertPos = match.index + match[0].length;
    return content.substring(0, insertPos) + '\n' + imageHTML + '\n' + content.substring(insertPos);
  }
  
  // Fallback: append at end
  return content + '\n\n' + imageHTML;
}

// Process single article
function processArticle(filePath) {
  const filename = path.basename(filePath);
  const slug = filename.replace('.md', '');
  
  let content = fs.readFileSync(filePath, 'utf-8');
  const originalContent = content;
  
  // Get matching images
  const matchedImages = getMatchingImages(slug, content);
  
  if (matchedImages.length === 0) {
    return null; // No suitable images found
  }
  
  // Insert images
  for (let i = 0; i < matchedImages.length; i++) {
    const img = matchedImages[i];
    const position = i === 0 ? img.position : (img.position === 'after-first-h2' ? 'after-intro' : 'after-first-h2');
    content = insertImage(content, img, position);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return {
      filename,
      imagesInserted: matchedImages.length,
      imageIds: matchedImages.map(img => img.id).join(', ')
    };
  }
  
  return null;
}

// Main execution
function main() {
  const files = fs.readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.md') && !f.startsWith('kakobuy-article-prompt') && !f.startsWith('kakobuy-internal-link-rules'))
    .map(f => path.join(BLOG_DIR, f));

  console.log(`Processing ${files.length} articles...\n`);

  let stats = {
    total: files.length,
    modified: 0,
    singleImage: 0,
    doubleImage: 0,
    errors: 0
  };

  for (const file of files) {
    try {
      const result = processArticle(file);
      if (result) {
        stats.modified++;
        if (result.imagesInserted === 1) stats.singleImage++;
        if (result.imagesInserted === 2) stats.doubleImage++;
        console.log(`✓ ${result.filename} (${result.imageIds})`);
      }
    } catch (err) {
      stats.errors++;
      console.error(` ${path.basename(file)}: ${err.message}`);
    }
  }

  console.log('\n--- Summary ---');
  console.log(`Total files: ${stats.total}`);
  console.log(`Modified: ${stats.modified}`);
  console.log(`1 image inserted: ${stats.singleImage}`);
  console.log(`2 images inserted: ${stats.doubleImage}`);
  console.log(`Errors: ${stats.errors}`);
}

main();
