/**
 * Batch optimize article bottoms:
 * 1. Remove "Related Guides" / "Related Articles" sections
 * 2. Replace [Usfans Spreadsheet](docs.google.com) -> [Usfans Spreadsheet](https://usfanslinki.com/)
 * 3. Add topic summary with homepage link for articles without KS anchor
 * 4. Do NOT modify CTA buttons
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DIR = path.resolve(__dirname, '..', 'blog');

// Patterns to match Related Guides sections at the end of articles
// Use [\r\n]+ to handle both Windows (\r\n) and Unix (\n) line endings
const RELATED_PATTERNS = [
  // **Related Guides:** with --- separator
  /[\r\n]+---[\r\n]+\s*\*\*(Related Guides|Related Articles|Recommended Guide|Recommended Articles|You May Also Like|More Guides|Recommended Reading):\*\*[\r\n]+(?:[\r\n]*- \[.*?\)[^\r\n]*[\r\n]*)+/g,
  // **Related Guides:** without separator
  /[\r\n]+\s*\*\*(Related Guides|Related Articles|Recommended Guide|Recommended Articles|You May Also Like|More Guides|Recommended Reading):\*\*[\r\n]+(?:[\r\n]*- \[.*?\)[^\r\n]*[\r\n]*)+/g,
  // ## Related Guides with --- separator
  /[\r\n]+---[\r\n]+\s*## (Related Guides|Related Articles|Recommended Guide|Recommended Articles|You May Also Like|More Guides|Recommended Reading)[\r\n]+(?:[\r\n]*- \[.*?\)[^\r\n]*[\r\n]*)+/g,
  // ## Related Guides without separator
  /[\r\n]+## (Related Guides|Related Articles|Recommended Guide|Recommended Articles|You May Also Like|More Guides|Recommended Reading)[\r\n]+(?:[\r\n]*- \[.*?\)[^\r\n]*[\r\n]*)+/g,
];

// Default summary template
function generateSummary(slug) {
  const topic = slug
    .replace(/^usfans-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());

  return `Choosing the right ${topic} becomes much easier when you compare different styles, materials, and popular options in one place. Whether you're searching for specific products or exploring new categories, organizing your options before ordering helps improve both efficiency and shopping experience. If you want to explore more curated collections across multiple brands and categories, visit the [Usfans Spreadsheet](https://usfanslinki.com/) homepage for additional shopping resources and regularly updated product guides.`;
}

function processArticle(filePath) {
  const filename = path.basename(filePath);
  let content = fs.readFileSync(filePath, 'utf-8');
  const originalContent = content;

  // Step 1: Remove Related Guides sections
  let relatedRemoved = false;
  for (const pattern of RELATED_PATTERNS) {
    if (pattern.test(content)) {
      content = content.replace(pattern, '');
      relatedRemoved = true;
    }
    pattern.lastIndex = 0;
  }
  // Clean up trailing ---
  content = content.replace(/\n\n---\s*$/, '');
  content = content.replace(/\n---\s*$/, '');

  // Step 2: Check for existing Usfans Spreadsheet anchor (case-insensitive)
  const ksRegex = /\[(usfans spreadsheet)\]\(([^)]+)\)/gi;
  const matches = [...content.matchAll(ksRegex)];

  // Filter out CTA button patterns - only match inline text links
  const inlineMatches = matches.filter(m => {
    const lineStart = content.lastIndexOf('\n', m.index) + 1;
    const lineEnd = content.indexOf('\n', m.index);
    const line = content.substring(lineStart, lineEnd === -1 ? undefined : lineEnd);
    // Skip if line looks like a CTA button (starts with > or contains button-like patterns)
    return !line.trim().startsWith('>') && !line.includes('btn') && !line.includes('button');
  });

  const hasKsAnchor = inlineMatches.length > 0;
  const hasHomepageLink = inlineMatches.some(m =>
    m[2].includes('usfanslinki.com')
  );

  if (hasKsAnchor && !hasHomepageLink) {
    // Replace first KS anchor href to homepage
    const first = inlineMatches[0];
    content = content.substring(0, first.index) +
      `[${first[1]}](https://usfanslinki.com/)` +
      content.substring(first.index + first[0].length);
  }

  // Step 3: Add summary
  const summary = generateSummary(filename.replace('.md', ''));

  if (!hasKsAnchor) {
    // No KS anchor exists - add summary with homepage link
    content = content.trimEnd() + '\n\n' + summary + '\n';
  } else {
    // KS anchor exists - add summary WITHOUT another homepage link
    const summaryNoLink = summary.replace(
      'visit the [Usfans Spreadsheet](https://usfanslinki.com/) homepage',
      'visit the Usfans Spreadsheet homepage'
    );
    content = content.trimEnd() + '\n\n' + summaryNoLink + '\n';
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return { filename, relatedRemoved, hasKsAnchor, hasHomepageLink };
  }
  return null;
}

// Main
function main() {
  const files = fs.readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.md') && !f.startsWith('usfans-article-prompt') && !f.startsWith('usfans-internal-link-rules'))
    .map(f => path.join(BLOG_DIR, f));

  console.log(`Processing ${files.length} articles...\n`);

  let stats = { total: files.length, modified: 0, relatedRemoved: 0, ksReplaced: 0, newAnchor: 0, errors: 0 };

  for (const file of files) {
    try {
      const result = processArticle(file);
      if (result) {
        stats.modified++;
        if (result.relatedRemoved) stats.relatedRemoved++;
        if (result.hasKsAnchor && !result.hasHomepageLink) stats.ksReplaced++;
        if (!result.hasKsAnchor) stats.newAnchor++;
        console.log(`  ${result.filename}`);
      }
    } catch (err) {
      stats.errors++;
      console.error(`  ERROR ${path.basename(file)}: ${err.message}`);
    }
  }

  console.log(`\n--- Summary ---`);
  console.log(`Total: ${stats.total}`);
  console.log(`Modified: ${stats.modified}`);
  console.log(`Related Guides removed: ${stats.relatedRemoved}`);
  console.log(`KS anchor href replaced: ${stats.ksReplaced}`);
  console.log(`New KS anchor added: ${stats.newAnchor}`);
  console.log(`Errors: ${stats.errors}`);
}

main();
