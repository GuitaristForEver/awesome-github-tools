#!/usr/bin/env node
/**
 * Generates TABLE.md from README.md.
 * Parses awesome-list format: ## Category, - [Name](url) - description.
 * Run: node scripts/generate-table.js
 */

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const readmePath = path.join(root, 'README.md');
const tablePath = path.join(root, 'TABLE.md');

const readme = fs.readFileSync(readmePath, 'utf8');
const lines = readme.split('\n');

const rows = [];
let currentCategory = '';
let currentSubcategory = '';
let currentLinks = [];

// Match: ## 📱 Category Name
const categoryRe = /^## (📱|🧩|💻|🤖|📊|🔒) (.+)$/;
// Match: ### Subcategory Name
const subcategoryRe = /^### (.+)$/;
// Match: - [Name](url) - description.
const itemRe = /^- \[([^\]]+)\]\(([^)]+)\) - (.+)$/;
// Match:   - [Label](url) or   - [A](url) · [B](url)
const sublinkRe = /^  - (.+)$/;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Stop at Contributing / Footnotes (end of list content)
  if (line === '## Contributing' || line === '## Footnotes') break;
  const catMatch = line.match(categoryRe);
  const subMatch = line.match(subcategoryRe);
  const itemMatch = line.match(itemRe);
  const linkMatch = line.match(sublinkRe);

  if (catMatch) {
    currentCategory = catMatch[1] + ' ' + catMatch[2];
    currentSubcategory = '';
  } else if (subMatch && currentCategory.startsWith('🤖')) {
    currentSubcategory = subMatch[1];
  } else if (itemMatch) {
    const [, name, primaryUrl, description] = itemMatch;
    currentLinks = [];
    // Peek at next line(s) for indented links
    let j = i + 1;
    while (j < lines.length && lines[j].startsWith('  - ')) {
      const linkLine = lines[j].replace(/^  - /, '');
      // Parse [Label](url) or [A](url) · [B](url)
      const linkParts = linkLine.split(' · ').map((s) => s.trim());
      for (const part of linkParts) {
        const m = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (m) currentLinks.push({ label: m[1], url: m[2] });
      }
      j++;
    }
    const extraLinks =
      currentLinks.length > 0
        ? currentLinks.map((l) => `[${l.label}](${l.url})`).join(' · ')
        : '';
    const linksCell = extraLinks
      ? `[Link](${primaryUrl}) · ${extraLinks}`
      : `[Link](${primaryUrl})`;
    const category =
      currentSubcategory ? '🤖 ' + currentSubcategory : currentCategory;
    rows.push({ category, name, description, links: linksCell });
  }
}

const tableLines = [
  '# Awesome GitHub Tools — Table View',
  '',
  '| Category | Tool | Description | Links |',
  '|----------|------|-------------|-------|',
  ...rows.map(
    (r) =>
      `| ${r.category} | ${r.name} | ${r.description} | ${r.links} |`
  ),
  '',
  '---',
  '',
  'Compact view of [README.md](README.md). Synced from the readme via GitHub Actions on merge to main.',
  '',
];

fs.writeFileSync(tablePath, tableLines.join('\n'));
console.log('Generated TABLE.md from README.md');
