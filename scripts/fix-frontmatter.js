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
  'bbdbuy-consolidation-guide.md',
  'bbdbuy-dashboard-guide.md',
  'bbdbuy-delivery-guide.md',
  'bbdbuy-first-order.md',
  'bbdbuy-getting-started.md',
  'bbdbuy-how-to-buy.md',
  'bbdbuy-how-to-order.md',
  'bbdbuy-new-user-guide.md',
  'bbdbuy-order-guide.md',
  'bbdbuy-ordering-process.md',
  'bbdbuy-payment-guide.md',
  'bbdbuy-platform-guide.md',
  'bbdbuy-purchase-guide.md',
  'bbdbuy-registration-guide.md',
  'bbdbuy-shipping-methods.md',
  'bbdbuy-shipping-options.md',
  'bbdbuy-shopping-guide.md',
  'bbdbuy-top-up-guide.md',
  'bbdbuy-warehouse-guide.md',
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
