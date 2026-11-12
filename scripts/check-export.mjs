// Validate actual production output: routes, internal assets and anchor targets.
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('out');
async function walk(dir) { const entries = await readdir(dir, { withFileTypes: true }); return (await Promise.all(entries.map(e => e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name)))).flat(); }
const pages = (await walk(root)).filter(f => f.endsWith('.html'));
const failures = [];
const projectPages = pages.filter(f => f.includes(`${path.sep}projects${path.sep}`));
if (projectPages.length !== 6) failures.push(`Expected 6 project pages, found ${projectPages.length}`);
let references = 0;
for (const page of pages) {
  const html = await readFile(page, 'utf8');
  if (!/<title>[^<]+<\/title>/.test(html)) failures.push(`${page}: no page title`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) failures.push(`${page}: no description`);
  if ((html.match(/<h1[ >]/g) || []).length !== 1) failures.push(`${page}: expected exactly one h1`);
  for (const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (/^(?:https?:|mailto:|data:|tel:)/.test(value)) continue;
    if (!value || value === '#') { failures.push(`${page}: empty destination`); continue; }
    const route = '/' + path.relative(root, page).replace(/index\.html$/, '').replaceAll(path.sep, '/');
    const url = new URL(value, 'https://portfolio.invalid' + route);
    const pathname = decodeURIComponent(url.pathname);
    const candidates = [path.join(root, pathname), path.join(root, pathname, 'index.html')];
    let target;
    for (const candidate of candidates) { try { if ((await stat(candidate)).isFile()) { target = candidate; break; } } catch {} }
    if (!target) { failures.push(`${page}: missing ${value}`); continue; }
    references++;
    if (url.hash && target.endsWith('.html')) {
      const targetHtml = target === page ? html : await readFile(target, 'utf8');
      if (!targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`)) failures.push(`${page}: missing anchor ${value}`);
    }
  }
}
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log(`PASS: ${projectPages.length} project routes; ${pages.length} HTML pages; ${references} internal route, asset and anchor references; page titles, descriptions and primary headings.`);
