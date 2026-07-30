/**
 * Fix double-slash internal links: /blog//xxx -> /blog/xxx
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DIR = path.resolve(__dirname, '..', 'blog');

function main() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
  let fixed = 0;

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Fix /blog//xxx -> /blog/xxx
    const newContent = content.replace(/\/blog\/\//g, '/blog/');

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      fixed++;
      console.log(`  ${file}`);
    }
  }

  console.log(`\nFixed ${fixed} files with double-slash links`);
}

main();
