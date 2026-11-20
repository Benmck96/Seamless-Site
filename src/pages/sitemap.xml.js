// /sitemap.xml — the list of pages search engines and AI crawlers should read.
// Product pages come from products.js, so new products are picked up automatically.
import { productOrder } from '../data/products.js';

const staticPages = ['/', '/products', '/technical', '/sustainability', '/substitution', '/contact'];

export function GET({ site }) {
  const base = (site?.href ?? 'https://www.curewood.co/').replace(/\/$/, '');
  const paths = [...staticPages, ...productOrder.map((slug) => `/products/${slug}`)];
  const urls = paths
    .map((p) => `  <url><loc>${base}${p === '/' ? '/' : p}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
