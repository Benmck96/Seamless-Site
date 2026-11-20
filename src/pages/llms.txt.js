// /llms.txt — a plain-text summary of the site for AI assistants (llmstxt.org format).
// Built from products.js so it never drifts from the product pages.
import { products, productOrder } from '../data/products.js';
import { faqs, stripHtml } from '../data/faq.js';

const clean = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();

export function GET({ site }) {
  const base = (site?.href ?? 'https://www.curewood.co/').replace(/\/$/, '');

  const productLines = productOrder.map((slug) => {
    const p = products[slug];
    const desc = Array.isArray(p.description) ? p.description[0] : p.description;
    const facts = [
      `${p.construction} construction`,
      p.species,
      p.sizes?.length ? `sizes ${p.sizes.join(', ')}` : null,
      p.lengths ? `lengths ${p.lengths}` : null,
      p.finishes?.length ? `finishes ${p.finishes.join(', ')}` : null,
      p.warranty ? `${p.warranty} warranty` : null,
    ].filter(Boolean).join('; ');
    return `- [${p.name}](${base}/products/${slug}): ${clean(desc)} (${facts})`;
  });

  const docLines = productOrder.flatMap((slug) =>
    (products[slug].documents ?? []).map((d) => `- [${products[slug].name} — ${d.label}](${base}${d.href})`)
  );

  const body = `# Seamless™ Engineered Timbers by CureWood

> Seamless is a line of engineered wood posts, timbers, columns and boards made by CureWood Engineered Building Products in British Columbia, Canada. Hollow-core and solid laminated posts and timbers in Western Red Cedar, SPF, pressure-treated, cypress and Douglas-fir — an alternative to solid sawn timbers and site-wrapped porch columns that stays straight, checks less and ships in one finished piece.

Key facts:
- Manufacturer: CureWood Engineered Building Products, British Columbia, Canada. All fiber is responsibly sourced Canadian wood.
- Products: hollow-core posts and timbers (6x6, 8x8), solid laminated posts and timbers, and finger-jointed edge-glued cedar boards and siding.
- Uses: porch posts and columns, exterior timbers, beam wraps, fascia, trim and siding.
- Hollow-core posts have a built-in channel for hidden wiring and work with standard Simpson Strong-Tie post bases and caps.
- The hollow Seamless Fascia Post carries QAI Laboratories code evaluation reports CERUS-1064 (USA) and CERcan-1065 (Canada).
- Pricing, availability and where to buy: contact CureWood through ${base}/contact.

## Products

${productLines.join('\n')}

## Guides

- [Porch posts & columns guide](${base}/porch-posts): how to choose an engineered wood porch post — painted, natural cedar, stained Douglas-fir or treated; hollow-core vs. solid; 6x6 vs. 8x8; length, structure and installation.
- [Seamless vs. other post options](${base}/compare): compared with solid sawn timbers, site-wrapped columns and fiberglass or PVC columns.
- [FAQ](${base}/faq): common questions about Seamless.

## Frequently asked questions

${faqs.map((f) => `### ${f.q}\n${stripHtml(f.a)}`).join('\n\n')}

## Technical

- [Technical data](${base}/technical): structural data and code evaluations for Seamless posts.
- [Product substitution package](${base}/substitution): send spec sheets, structural data and code evaluation to an engineer, architect or builder.
${docLines.join('\n')}

## Company

- [Sustainability](${base}/sustainability): fiber from responsibly managed British Columbia forests.
- [Contact](${base}/contact): sales and technical enquiries.
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
