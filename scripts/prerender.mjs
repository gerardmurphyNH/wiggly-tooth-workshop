/**
 * Post-build prerender of per-page SEO <head> tags.
 *
 * This is a client-rendered SPA, so the real <title>/<meta>/OG tags are set by
 * React (PageSeo) after the JS runs. Googlebot executes JS and reads them, but
 * social crawlers (Facebook, Twitter/X, Slack, iMessage) and many others do NOT
 * run JS — so link previews and some SERP snippets fall back to the generic
 * index.html head.
 *
 * This script derives each route's title/description/canonical/image straight
 * from that page's <PageSeo> props (single source of truth — no duplication)
 * and writes a static dist/<route>/index.html with those tags baked into the
 * <head>. Netlify serves the matching file if it exists (the SPA rewrite only
 * catches routes without a file), so crawlers get correct static metadata while
 * React still hydrates and takes over normally.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const PAGES = path.join(ROOT, "src/pages");
const APP = path.join(ROOT, "src/App.tsx");

const indexHtmlPath = path.join(DIST, "index.html");
if (!fs.existsSync(indexHtmlPath)) {
  console.error("prerender: dist/index.html not found — run the build first.");
  process.exit(1);
}
const indexHtml = fs.readFileSync(indexHtmlPath, "utf8");

// --- parse routes from App.tsx (skip catch-all and homepage) ---
const appSrc = fs.readFileSync(APP, "utf8");
const routes = {};
const routeRe = /<Route\s+path="([^"]+)"\s+element=\{<(\w+)\s*\/>\}/g;
let m;
while ((m = routeRe.exec(appSrc))) {
  if (m[1] !== "*" && m[1] !== "/") routes[m[1]] = m[2];
}

// --- extract a prop from a page's <PageSeo> block ---
function pageSeoBlock(src) {
  const start = src.indexOf("<PageSeo");
  if (start === -1) return null;
  const end = src.indexOf("/>", start);
  return end === -1 ? null : src.slice(start, end + 2);
}
function resolveAttr(block, src, name) {
  const lit = block.match(new RegExp(`${name}="([^"]*)"`));
  if (lit) return lit[1];
  const expr = block.match(new RegExp(`${name}=\\{(\\w+)\\}`));
  if (expr) {
    const cm = src.match(new RegExp(`const ${expr[1]}\\s*=\\s*"([^"]*)"`));
    if (cm) return cm[1];
  }
  return null;
}

const escAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
const escText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function applyMeta(html, { title, description, canonical, image }) {
  let out = html;
  if (title) {
    out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escText(title)}</title>`);
    out = out.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escAttr(title)}$2`);
    out = out.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${escAttr(title)}$2`);
  }
  if (description) {
    out = out.replace(/(<meta name="description" content=")[^"]*(")/, `$1${escAttr(description)}$2`);
    out = out.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${escAttr(description)}$2`);
    out = out.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${escAttr(description)}$2`);
  }
  if (canonical) {
    out = out.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${escAttr(canonical)}$2`);
    out = out.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${escAttr(canonical)}$2`);
  }
  if (image) {
    out = out.replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${escAttr(image)}$2`);
    out = out.replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${escAttr(image)}$2`);
  }
  // Strip the homepage's static JSON-LD from per-route copies; React injects the
  // correct route-specific structured data on render.
  out = out.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "");
  return out;
}

let count = 0;
const skipped = [];
for (const [route, comp] of Object.entries(routes)) {
  const file = path.join(PAGES, `${comp}.tsx`);
  if (!fs.existsSync(file)) {
    skipped.push(`${route} (no file)`);
    continue;
  }
  const src = fs.readFileSync(file, "utf8");
  const block = pageSeoBlock(src);
  const title = block && resolveAttr(block, src, "title");
  if (!title) {
    skipped.push(`${route} (no title)`);
    continue;
  }
  const meta = {
    title,
    description: resolveAttr(block, src, "description"),
    canonical: resolveAttr(block, src, "canonical") || `https://wigglytoothworkshop.com${route}`,
    image: resolveAttr(block, src, "image"),
  };
  // Write a FLAT file (route.html), not a directory (route/index.html).
  // A directory makes Netlify 301 /route -> /route/ while our canonicals say
  // /route (no slash) - Google flagged that canonical->redirect ping-pong as a
  // "Redirect error". Netlify serves /route straight from route.html with a
  // clean 200, so the served URL matches the canonical exactly.
  fs.writeFileSync(path.join(DIST, `${route.replace(/^\//, "")}.html`), applyMeta(indexHtml, meta));
  count++;
}

console.log(`prerender: wrote ${count} route(s)` + (skipped.length ? `; skipped ${skipped.join(", ")}` : ""));
