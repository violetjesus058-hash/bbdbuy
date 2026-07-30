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
  'kakobuy-consolidation-guide.md',
  'kakobuy-dashboard-guide.md',
  'kakobuy-delivery-guide.md',
  'kakobuy-first-order.md',
  'kakobuy-getting-started.md',
  'kakobuy-how-to-buy.md',
  'kakobuy-how-to-order.md',
  'kakobuy-new-user-guide.md',
  'kakobuy-order-guide.md',
  'kakobuy-ordering-process.md',
  'kakobuy-payment-guide.md',
  'kakobuy-platform-guide.md',
  'kakobuy-purchase-guide.md',
  'kakobuy-registration-guide.md',
  'kakobuy-shipping-methods.md',
  'kakobuy-shipping-options.md',
  'kakobuy-shopping-guide.md',
  'kakobuy-top-up-guide.md',
  'kakobuy-warehouse-guide.md',
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
