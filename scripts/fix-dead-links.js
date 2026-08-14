/**
 * Fix remaining dead links:
 * 1. /blog/usfans-spreadsheet/ -> /blog/usfans-spreadsheet-link/
 * 2. /blog//usfans-sizing-tips/ -> /blog/usfans-sizing-tips/
 * 3. /Usfans/blog/usfans-nike.md -> /blog/usfans-nike
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'blog');

const FIXES = [
  { from: /\/blog\/usfans-spreadsheet\//g, to: '/blog/usfans-spreadsheet-link/' },
  { from: /\/blog\/\//g, to: '/blog/' },
  { from: /\/Usfans\/blog\/usfans-nike\.md/g, to: '/blog/usfans-nike' },
];

function processDir(dir) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  let fixed = 0;
  for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let changed = false;
    for (const { from, to } of FIXES) {
      const newContent = content.replace(from, to);
      if (newContent !== content) {
        content = newContent;
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf-8');
      fixed++;
      console.log(`  ${file}`);
    }
  }
  return fixed;
}

function main() {
  // Fix blog articles
  const blogFixed = processDir(BLOG_DIR);

  // Fix root markdown files
  const rootFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.md') && !f.startsWith('.'));
  let rootFixed = 0;
  for (const file of rootFiles) {
    const filePath = path.join(ROOT, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let changed = false;
    for (const { from, to } of FIXES) {
      const newContent = content.replace(from, to);
      if (newContent !== content) {
        content = newContent;
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf-8');
      rootFixed++;
      console.log(`  [root] ${file}`);
    }
  }

  console.log(`\nFixed ${blogFixed} blog files + ${rootFixed} root files`);
}

main();
