/**
 * Migration script: Move content pages to /blog/ directory
 * - Move Kakobuy-*.md + about.md + platform.md to blog/
 * - Rename files to lowercase
 * - Update internal links in all .md and .vue files
 * - Generate _redirects for 301 redirects
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'blog');

// Files to migrate
const FILES_TO_MIGRATE = [
  'about.md',
  'platform.md',
];

// Step 1: Move files to blog/ with lowercase names
function moveFiles() {
  console.log('=== Step 1: Moving files to blog/ ===');
  
  // Get all Kakobuy-*.md files from root
  const rootFiles = fs.readdirSync(ROOT).filter(f => 
    f.startsWith('Kakobuy-') && f.endsWith('.md')
  );
  
  const allFiles = [...rootFiles, ...FILES_TO_MIGRATE];
  console.log(`Found ${allFiles.length} files to migrate`);
  
  const movedFiles = []; // Track {old: '/old-path/', new: '/blog/new-path/'}
  
  for (const file of allFiles) {
    const srcPath = path.join(ROOT, file);
    const lowerName = file.toLowerCase();
    const destPath = path.join(BLOG_DIR, lowerName);
    
    if (!fs.existsSync(srcPath)) {
      console.log(`  SKIP (not found): ${file}`);
      continue;
    }
    
    if (fs.existsSync(destPath)) {
      console.log(`  SKIP (exists): ${lowerName}`);
      // Still track for link updates
      const oldUrl = '/' + file.replace('.md', '') + '/';
      const newUrl = '/blog/' + lowerName.replace('.md', '') + '/';
      movedFiles.push({ old: oldUrl, new: newUrl, file: lowerName });
      continue;
    }
    
    fs.copyFileSync(srcPath, destPath);
    fs.unlinkSync(srcPath);
    
    const oldUrl = '/' + file.replace('.md', '') + '/';
    const newUrl = '/blog/' + lowerName.replace('.md', '') + '/';
    movedFiles.push({ old: oldUrl, new: newUrl, file: lowerName });
    console.log(`  Moved: ${file} -> blog/${lowerName}`);
  }
  
  console.log(`\nTotal moved: ${movedFiles.length} files`);
  return movedFiles;
}

// Step 2: Update internal links in all .md files
function updateMdLinks(movedFiles) {
  console.log('\n=== Step 2: Updating links in .md files ===');
  
  // Get all .md files (including blog/ subdirectory)
  const allMdFiles = [];
  
  function findMdFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.vitepress') {
        findMdFiles(fullPath);
      } else if (entry.name.endsWith('.md')) {
        allMdFiles.push(fullPath);
      }
    }
  }
  
  findMdFiles(ROOT);
  console.log(`Found ${allMdFiles.length} .md files to scan`);
  
  let updatedCount = 0;
  
  for (const filePath of allMdFiles) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let changed = false;
    
    for (const { old, new: newUrl } of movedFiles) {
      // Replace /Kakobuy-xxx/ -> /blog/kakobuy-xxx/
      // Also handle /Kakobuy-xxx (without trailing slash)
      const oldWithoutSlash = old.replace(/\/$/, '');
      
      // Replace with trailing slash version
      if (content.includes(old)) {
        content = content.split(old).join(newUrl);
        changed = true;
      }
      // Replace without trailing slash (but not if followed by another /)
      if (content.includes(oldWithoutSlash)) {
        const newWithoutSlash = newUrl.replace(/\/$/, '');
        content = content.split(oldWithoutSlash).join(newWithoutSlash);
        changed = true;
      }
    }
    
    // Also handle any /Kakobuy-xxx patterns that might use different casing
    // Match /Kakobuy- followed by word chars
    const kakobuyPattern = /\/Kakobuy-([a-zA-Z0-9-]+)/g;
    const matches = content.match(kakobuyPattern);
    if (matches) {
      for (const match of matches) {
        const lowerMatch = '/blog/' + match.toLowerCase();
        if (match !== lowerMatch) {
          content = content.split(match).join(lowerMatch);
          changed = true;
        }
      }
    }
    
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf-8');
      updatedCount++;
    }
  }
  
  console.log(`Updated links in ${updatedCount} .md files`);
}

// Step 3: Update links in .vue files
function updateVueLinks(movedFiles) {
  console.log('\n=== Step 3: Updating links in .vue files ===');
  
  const vueDir = path.join(ROOT, '.vitepress', 'theme', 'components');
  const vueFiles = fs.readdirSync(vueDir).filter(f => f.endsWith('.vue'));
  
  let updatedCount = 0;
  
  for (const file of vueFiles) {
    const filePath = path.join(vueDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let changed = false;
    
    for (const { old, new: newUrl } of movedFiles) {
      const oldWithoutSlash = old.replace(/\/$/, '');
      
      if (content.includes(old)) {
        content = content.split(old).join(newUrl);
        changed = true;
      }
      if (content.includes(oldWithoutSlash)) {
        const newWithoutSlash = newUrl.replace(/\/$/, '');
        content = content.split(oldWithoutSlash).join(newWithoutSlash);
        changed = true;
      }
    }
    
    // Handle /Kakobuy-xxx pattern in vue files
    const kakobuyPattern = /\/Kakobuy-([a-zA-Z0-9-]+)/g;
    const matches = content.match(kakobuyPattern);
    if (matches) {
      for (const match of matches) {
        const lowerMatch = '/blog/' + match.toLowerCase();
        if (match !== lowerMatch) {
          content = content.split(match).join(lowerMatch);
          changed = true;
        }
      }
    }
    
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf-8');
      updatedCount++;
      console.log(`  Updated: ${file}`);
    }
  }
  
  console.log(`Updated ${updatedCount} .vue files`);
}

// Step 4: Update config.mjs
function updateConfig(movedFiles) {
  console.log('\n=== Step 4: Updating config.mjs ===');
  
  const configPath = path.join(ROOT, '.vitepress', 'config.mjs');
  let content = fs.readFileSync(configPath, 'utf-8');
  
  for (const { old, new: newUrl } of movedFiles) {
    const oldWithoutSlash = old.replace(/\/$/, '');
    
    if (content.includes(old)) {
      content = content.split(old).join(newUrl);
    }
    if (content.includes(oldWithoutSlash)) {
      const newWithoutSlash = newUrl.replace(/\/$/, '');
      content = content.split(oldWithoutSlash).join(newWithoutSlash);
    }
  }
  
  // Update ignoreDeadLinks to include /blog/ paths
  if (content.includes('ignoreDeadLinks')) {
    // Add /blog/ patterns if not already present
    if (!content.includes('/blog/Kakobuy-') && !content.includes('/blog/kakobuy-')) {
      content = content.replace(
        /ignoreDeadLinks:\s*\[/,
        "ignoreDeadLinks: [\n    /^\\/blog\\//,"
      );
    }
  }
  
  fs.writeFileSync(configPath, content, 'utf-8');
  console.log('  Updated config.mjs');
}

// Step 5: Generate _redirects file for Cloudflare Pages
function generateRedirects(movedFiles) {
  console.log('\n=== Step 5: Generating _redirects ===');
  
  const publicDir = path.join(ROOT, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const redirects = movedFiles.map(({ old, new: newUrl }) => 
    `${old}  ${newUrl}  301`
  ).join('\n');
  
  fs.writeFileSync(path.join(publicDir, '_redirects'), redirects + '\n', 'utf-8');
  console.log(`  Generated ${movedFiles.length} redirect rules`);
}

// Step 6: Generate robots.txt
function generateRobotsTxt() {
  console.log('\n=== Step 6: Generating robots.txt ===');
  
  const publicDir = path.join(ROOT, 'public');
  const robotsPath = path.join(publicDir, 'robots.txt');
  
  const content = `User-agent: *
Allow: /

Sitemap: https://kakobuylinki.com/sitemap.xml
`;
  
  fs.writeFileSync(robotsPath, content, 'utf-8');
  console.log('  Created robots.txt');
}

// Main
console.log('Starting migration to /blog/ directory...\n');

const movedFiles = moveFiles();
updateMdLinks(movedFiles);
updateVueLinks(movedFiles);
updateConfig(movedFiles);
generateRedirects(movedFiles);
generateRobotsTxt();

console.log('\n=== Migration Complete ===');
console.log(`Total files migrated: ${movedFiles.length}`);
console.log('\nNext steps:');
console.log('1. Run: npm run build');
console.log('2. Verify: Check .vitepress/dist/sitemap.xml');
console.log('3. Verify: Check .vitepress/dist/_redirects');
console.log('4. Verify: Check .vitepress/dist/robots.txt');
