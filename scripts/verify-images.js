/**
 * Verify image assignments across all blog articles
 * Generates a report showing each article's assigned images with alt/caption
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DIR = path.resolve(__dirname, '..', 'blog');
const OUTPUT_FILE = path.resolve(__dirname, '..', 'image-verification-report.txt');

// Image metadata (matches insert-images.js)
const IMAGE_META = {
  'sneakers-lifestyle-collection-us-01.webp': {
    alt: 'Three popular sneaker styles displayed on coffee table with express delivery box, Nike Air Force 1 Jordan 1 New Balance collection',
    caption: 'Popular sneaker collection with express delivery options for US, UK, and Australia markets',
    scene: 'Couple on sofa, 3 sneakers on coffee table (Nike AF1, New Balance 550, Jordan 1), express delivery box with US/UK/AU flags'
  },
  'sneakers-unboxing-premium-uk-02.webp': {
    alt: 'Premium sneaker unboxing with quality inspection card and UK EU shipping labels, Jordan 4 Adidas Samba',
    caption: 'Quality inspection and unboxing experience with international shipping options',
    scene: 'Hands unboxing Jordan 4 Fire Red from shoebox, Kakobuy Spreadsheet printout, QC Passed 96% card, UK/EU shipping labels, Adidas Samba box'
  },
  'clothing-streetwear-outfit-us-03.webp': {
    alt: 'Three friends wearing streetwear outfits walking in Los Angeles, Essentials hoodie Stussy tee Gallery Dept jacket',
    caption: 'Streetwear styling inspiration featuring popular brands and casual urban fashion',
    scene: 'Three friends walking on LA street (Melrose Ave), wearing Essentials hoodie, Stussy tee, Gallery Dept jacket, Nike shopping bag, Kakobuy Express cyclist in background'
  },
  'clothing-wardrobe-organized-au-04.webp': {
    alt: 'Organized wardrobe with hoodies and t-shirts, woman comparing products with shipping labels to Australia US UK',
    caption: 'Wardrobe organization and product comparison with international shipping options',
    scene: 'Woman in bedroom comparing hoodie with spreadsheet printout, organized wardrobe with Stussy/Nike items, laptop showing product grid, shipping labels (Australia Express 5-8 Days, US Standard 10-15 Days, UK Economy 12-18 Days)'
  },
  'accessories-daily-carry-us-05.webp': {
    alt: 'Daily carry accessories flat lay with Chrome Hearts ring Cartier watch sunglasses and US priority shipping',
    caption: 'Essential daily accessories with premium quality and fast shipping options',
    scene: 'Flat lay of accessories: Cartier Tank watch, Chrome Hearts ring, Ray-Ban sunglasses, Saint Laurent wallet, AirPods, Kakobuy Finds spreadsheet on phone, USPS Priority mail, International Tracking box'
  },
  'accessories-gift-selection-uk-06.webp': {
    alt: 'Gift accessories selection with bracelet perfume sunglasses and UK next day delivery, couple exchanging gifts',
    caption: 'Gift-ready accessories with express delivery for special occasions',
    scene: 'Couple at dinner table, man presenting accessory gift box (bracelet, perfume, sunglasses), woman delighted, price tags on shelf (£89-£159), UK Next Day Delivery package, Accessory Collection Guide'
  },
  'bags-travel-backpack-us-07.webp': {
    alt: 'Traveler with backpack and crossbody bag at airport with US UK Australia luggage tags and Nike shoe box',
    caption: 'Travel-ready bags with international shipping to multiple destinations',
    scene: 'Man at airport gate (A22) with crossbody bag, open suitcase with Essentials clothing, Nike shoe box with Dunk sneakers, luggage tags (US Domestic, International-UK, International-Australia), American Airlines plane in background'
  },
  'bags-daily-commute-eu-08.webp': {
    alt: 'Professional woman with leather tote bag walking in European city, EU express delivery van in background',
    caption: 'Professional bags for daily commute with EU express delivery options',
    scene: 'Man in trench coat walking on Paris cobblestone street near Café de Flore, leather shoulder bag, EU Express 3-5 Days van, laptop on café table showing clothing product grid'
  },
  'electronics-tech-workspace-us-09.webp': {
    alt: 'Tech workspace with iPhone Apple Watch AirPods and headphones, US express and international shipping boxes',
    caption: 'Latest tech accessories with express shipping for US and international orders',
    scene: 'Man at desk comparing two iPhones (15 Pro Max vs 15 Pro), spec comparison on monitor, AirPods, Apple Watch, headphones, US Express 1-2 Days and International Tracked 5-7 Days boxes'
  },
  'electronics-smart-home-au-10.webp': {
    alt: 'Family in living room with Dyson air purifier JBL speaker and smart home devices, Australia US shipping',
    caption: 'Smart home electronics with Australia and US shipping options',
    scene: 'Family (father, mother, toddler) on sofa using tablet for smart home control, Dyson fan/purifier, JBL speaker, Australia Express 3-5 Days and US International 7-10 Days boxes, smart home product guide on table'
  }
};

// Extract image info from article content
function extractImages(content) {
  const images = [];
  const regex = /<figure class="article-image">[\s\S]*?<img src="([^"]+)"[\s\S]*?alt="([^"]*)"[^>]*>[\s\S]*?<figcaption[^>]*>([^<]*)<\/figcaption>[\s\S]*?<\/figure>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    images.push({
      src: match[1],
      alt: match[2],
      caption: match[3].trim()
    });
  }
  return images;
}

// Determine article category from slug
function getCategory(slug) {
  const s = slug.toLowerCase();
  if (s.includes('sneaker') || s.includes('shoe') || s.includes('nike') || s.includes('jordan') ||
      s.includes('adidas') || s.includes('new-balance') || s.includes('air-force') ||
      s.includes('air-max') || s.includes('yeezy') || s.includes('vans') ||
      s.includes('converse') || s.includes('puma') || s.includes('reebok') ||
      s.includes('asics') || s.includes('salomon') || s.includes('hoka') ||
      s.includes('crocs') || s.includes('timberland') || s.includes('dr-martens') ||
      s.includes('birkenstock') || s.includes('ugg') || s.includes('running') ||
      s.includes('basketball') || s.includes('football') || s.includes('soccer') ||
      s.includes('tennis') || s.includes('golf') || s.includes('hiking')) {
    return 'sneakers/shoes';
  }
  if (s.includes('cloth') || s.includes('hoodie') || s.includes('t-shirt') ||
      s.includes('streetwear') || s.includes('essentials') || s.includes('stussy') ||
      s.includes('gallery-dept') || s.includes('supreme') || s.includes('off-white') ||
      s.includes('bape') || s.includes('corteiz') || s.includes('hellstar') ||
      s.includes('ed-hardy') || s.includes('jeans') || s.includes('jacket') ||
      s.includes('pants') || s.includes('shorts') || s.includes('dress') ||
      s.includes('activewear') || s.includes('gym') || s.includes('sport')) {
    return 'clothing';
  }
  if (s.includes('accessor') || s.includes('watch') || s.includes('jewelry') ||
      s.includes('glasses') || s.includes('sunglasses') || s.includes('ring') ||
      s.includes('bracelet') || s.includes('necklace') || s.includes('chrome-hearts') ||
      s.includes('cartier') || s.includes('rolex') || s.includes('omega') ||
      s.includes('apple-watch') || s.includes('hat') || s.includes('cap') ||
      s.includes('belt') || s.includes('scarf') || s.includes('perfume') ||
      s.includes('fragrance')) {
    return 'accessories';
  }
  if (s.includes('bag') || s.includes('backpack') || s.includes('handbag') ||
      s.includes('tote') || s.includes('crossbody') || s.includes('travel') ||
      s.includes('luggage') || s.includes('coach') || s.includes('michael-kors') ||
      s.includes('kate-spade') || s.includes('tory-burch') || s.includes('leather')) {
    return 'bags';
  }
  if (s.includes('electron') || s.includes('iphone') || s.includes('apple-watch') ||
      s.includes('airpod') || s.includes('headphone') || s.includes('tech') ||
      s.includes('gadget') || s.includes('dyson') || s.includes('jbl') ||
      s.includes('speaker') || s.includes('smart-home') || s.includes('phone') ||
      s.includes('tablet') || s.includes('laptop') || s.includes('camera')) {
    return 'electronics';
  }
  return 'guide/general';
}

// Check if image category matches article category
function isImageAppropriate(imageFile, articleCategory) {
  const file = imageFile.toLowerCase();
  const cat = articleCategory.toLowerCase();

  const imageCategoryMap = {
    'sneakers-lifestyle': ['sneakers/shoes', 'guide/general'],
    'sneakers-unboxing': ['sneakers/shoes', 'guide/general'],
    'clothing-streetwear': ['clothing', 'guide/general'],
    'clothing-wardrobe': ['clothing', 'guide/general'],
    'accessories-daily': ['accessories', 'guide/general'],
    'accessories-gift': ['accessories', 'guide/general'],
    'bags-travel': ['bags', 'guide/general'],
    'bags-daily-commute': ['bags', 'guide/general'],
    'electronics-tech': ['electronics', 'guide/general'],
    'electronics-smart-home': ['electronics', 'guide/general']
  };

  for (const [key, cats] of Object.entries(imageCategoryMap)) {
    if (file.includes(key.replace('-', '-'))) {
      return cats.some(c => cat.includes(c.split('/')[0]));
    }
  }
  return true; // unknown, assume ok
}

// Main
function main() {
  const files = fs.readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.md') && !f.startsWith('kakobuy-article-prompt') && !f.startsWith('kakobuy-internal-link-rules'))
    .sort();

  let report = '';
  report += '='.repeat(80) + '\n';
  report += 'IMAGE VERIFICATION REPORT\n';
  report += `Generated: ${new Date().toISOString()}\n`;
  report += `Total articles: ${files.length}\n`;
  report += '='.repeat(80) + '\n\n';

  let issues = [];
  let categoryStats = {};

  for (const file of files) {
    const slug = file.replace('.md', '');
    const category = getCategory(slug);
    const filePath = path.join(BLOG_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const images = extractImages(content);

    if (!categoryStats[category]) categoryStats[category] = { total: 0, noImage: 0, oneImage: 0, twoImages: 0, issues: 0 };
    categoryStats[category].total++;

    if (images.length === 0) {
      categoryStats[category].noImage++;
      report += `[NO IMAGE] ${file}\n`;
      report += `  Category: ${category}\n\n`;
      continue;
    }

    if (images.length === 1) categoryStats[category].oneImage++;
    if (images.length === 2) categoryStats[category].twoImages++;

    report += `${file}\n`;
    report += `  Category: ${category}\n`;
    report += `  Images: ${images.length}\n`;

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      const imgFile = path.basename(img.src);
      const meta = IMAGE_META[imgFile];

      report += `  [${i + 1}] ${imgFile}\n`;
      report += `      ALT:     ${img.alt}\n`;
      report += `      CAPTION: ${img.caption}\n`;

      if (meta) {
        report += `      SCENE:   ${meta.scene}\n`;

        // Check if alt matches
        if (img.alt !== meta.alt) {
          report += `       ALT MISMATCH\n`;
          report += `        Expected: ${meta.alt}\n`;
        }

        // Check if caption matches
        if (img.caption !== meta.caption) {
          report += `       CAPTION MISMATCH\n`;
          report += `        Expected: ${meta.caption}\n`;
        }

        // Check category appropriateness
        if (!isImageAppropriate(imgFile, category)) {
          report += `      ⚠ CATEGORY MISMATCH: ${imgFile} may not suit "${category}" articles\n`;
          issues.push({ file, image: imgFile, category, reason: 'category mismatch' });
          categoryStats[category].issues++;
        }
      } else {
        report += `      ⚠ UNKNOWN IMAGE FILE\n`;
        issues.push({ file, image: imgFile, category, reason: 'unknown image' });
      }
    }
    report += '\n';
  }

  // Summary
  report += '='.repeat(80) + '\n';
  report += 'CATEGORY STATISTICS\n';
  report += '='.repeat(80) + '\n';
  for (const [cat, stats] of Object.entries(categoryStats)) {
    report += `${cat}: ${stats.total} articles | 0 images: ${stats.noImage} | 1 image: ${stats.oneImage} | 2 images: ${stats.twoImages} | issues: ${stats.issues}\n`;
  }

  report += '\n' + '='.repeat(80) + '\n';
  report += 'ISSUES FOUND\n';
  report += '='.repeat(80) + '\n';
  if (issues.length === 0) {
    report += 'No category mismatch issues found.\n';
  } else {
    for (const issue of issues) {
      report += `${issue.file}: ${issue.image} - ${issue.reason} (category: ${issue.category})\n`;
    }
  }

  fs.writeFileSync(OUTPUT_FILE, report, 'utf-8');
  console.log(`Report written to: ${OUTPUT_FILE}`);
  console.log(`Total articles: ${files.length}`);
  console.log(`Issues found: ${issues.length}`);
}

main();
