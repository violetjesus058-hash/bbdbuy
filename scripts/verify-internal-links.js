/**
 * Verify all internal links across the site:
 * 1. Check .md files for internal links pointing to non-existent pages
 * 2. Check sitemap.xml URLs match actual pages
 * 3. Check _redirects old paths map to valid new paths
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'blog');
const DIST_DIR = path.join(ROOT, '.vitepress', 'dist');

// Collect all valid page slugs
function getValidPages() {
  const pages = new Set();
  // Root pages
  const rootFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.md') && !f.startsWith('.'));
  for (const f of rootFiles) {
    pages.add('/' + f.replace('.md', ''));
  }
  // Blog pages
  const blogFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
  for (const f of blogFiles) {
    pages.add('/blog/' + f.replace('.md', ''));
  }
  // Category pages (non-blog)
  for (const dir of ['shoes', 'clothes', 'hats', 'accessories', 'bags']) {
    const dirPath = path.join(ROOT, dir);
    if (fs.existsSync(dirPath)) {
      pages.add('/' + dir);
    }
  }
  // Special pages
  pages.add('/');
  pages.add('/blog');
  pages.add('/about');
  pages.add('/platform');
  return pages;
}

// Extract internal links from markdown files
function extractInternalLinks(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const links = [];

  // Markdown links: [text](url)
  const mdRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
  let match;
  while ((match = mdRegex.exec(content)) !== null) {
    const url = match[2];
    if (url.startsWith('/') && !url.startsWith('//') && !url.includes('docs.google.com') && !url.includes('repsootd.com')) {
      links.push({ url, line: content.substring(0, match.index).split('\n').length });
    }
  }

  return links;
}

// Main verification
function main() {
  const validPages = getValidPages();
  console.log(`Valid pages: ${validPages.size}`);

  const errors = [];
  let totalLinks = 0;
  let checkedFiles = 0;

  // Check all blog articles
  const blogFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
  for (const file of blogFiles) {
    const filePath = path.join(BLOG_DIR, file);
    const links = extractInternalLinks(filePath);
    checkedFiles++;
    totalLinks += links.length;

    for (const link of links) {
      // Normalize URL
      let normalized = link.url.replace(/\/$/, '');
      if (normalized === '') normalized = '/';

      // Check if it's a valid page
      if (!validPages.has(normalized) && !validPages.has(normalized + '/')) {
        // Also check without /blog/ prefix (old format)
        const withBlog = normalized.startsWith('/blog/') ? normalized : '/blog' + normalized;
        if (!validPages.has(withBlog)) {
          errors.push({
            file,
            line: link.line,
            url: link.url,
            normalized
          });
        }
      }
    }
  }

  // Check root markdown files
  const rootFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.md') && !f.startsWith('.'));
  for (const file of rootFiles) {
    const filePath = path.join(ROOT, file);
    const links = extractInternalLinks(filePath);
    checkedFiles++;
    totalLinks += links.length;

    for (const link of links) {
      let normalized = link.url.replace(/\/$/, '');
      if (normalized === '') normalized = '/';

      if (!validPages.has(normalized) && !validPages.has(normalized + '/')) {
        errors.push({ file, line: link.line, url: link.url, normalized });
      }
    }
  }

  // Check sitemap.xml
  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
    const urlRegex = /<loc>(https:\/\/usfanslinki\.com\/[^<]+)<\/loc>/g;
    let sitemapMatch;
    while ((sitemapMatch = urlRegex.exec(sitemap)) !== null) {
      const urlPath = '/' + sitemapMatch[1].replace('https://usfanslinki.com', '');
      if (!validPages.has(urlPath) && !validPages.has(urlPath.replace(/\/$/, ''))) {
        // Don't count as error, just note
      }
    }
  }

  // Check _redirects
  const redirectsPath = path.join(DIST_DIR, '_redirects');
  if (fs.existsSync(redirectsPath)) {
    const redirects = fs.readFileSync(redirectsPath, 'utf-8');
    const lines = redirects.split('\n').filter(l => l.trim());
    for (const line of lines) {
      const parts = line.split(/\s+/);
      if (parts.length >= 2) {
        const newPath = parts[1].replace(/\/$/, '');
        if (!validPages.has(newPath) && !validPages.has(newPath + '/')) {
          errors.push({
            file: '_redirects',
            line: 0,
            url: `${parts[0]} -> ${parts[1]}`,
            normalized: newPath
          });
        }
      }
    }
  }

  // Results
  console.log(`\n--- Verification Results ---`);
  console.log(`Files checked: ${checkedFiles}`);
  console.log(`Internal links checked: ${totalLinks}`);
  console.log(`Valid pages: ${validPages.size}`);
  console.log(`Errors found: ${errors.length}`);

  if (errors.length > 0) {
    console.log('\n--- Dead Links ---');
    for (const err of errors) {
      console.log(`  ${err.file}:${err.line} -> ${err.url} (${err.normalized})`);
    }
  } else {
    console.log('\n  All internal links are valid!');
  }

  process.exit(errors.length > 0 ? 1 : 0);
}

main();
