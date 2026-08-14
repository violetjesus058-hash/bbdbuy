/**
 * Fix files that start with --- but have no closing ---
 * Remove the leading --- line from these files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DIR = path.resolve(__dirname, '..', 'blog');

const brokenFiles = [
  'usfans-consolidation-guide.md',
  'usfans-dashboard-guide.md',
  'usfans-delivery-guide.md',
  'usfans-first-order.md',
  'usfans-getting-started.md',
  'usfans-how-to-buy.md',
  'usfans-how-to-order.md',
  'usfans-new-user-guide.md',
  'usfans-order-guide.md',
  'usfans-ordering-process.md',
  'usfans-payment-guide.md',
  'usfans-platform-guide.md',
  'usfans-purchase-guide.md',
  'usfans-registration-guide.md',
  'usfans-shipping-methods.md',
  'usfans-shipping-options.md',
  'usfans-shopping-guide.md',
  'usfans-top-up-guide.md',
  'usfans-warehouse-guide.md',
];

let fixed = 0;
for (const file of brokenFiles) {
  const filePath = path.join(BLOG_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove leading ---\n
  if (content.startsWith('---\n')) {
    content = content.substring(4); // remove '---\n'
    fs.writeFileSync(filePath, content, 'utf-8');
    fixed++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`\nFixed ${fixed} files`);
