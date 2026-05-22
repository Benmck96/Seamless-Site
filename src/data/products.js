// Single source of truth for all product lines.
// To add a new species or variant: just add to this file.

export const products = {
  'seamless-fascia-post': {
    slug: 'seamless-fascia-post',
    imageFolder: 'fascia-post',
    name: 'Seamless Fascia Post',
    species: 'Engineered Composite',
    tagline: 'Quit site-wrapping columns. Deliver a superior look in one piece.',
    headline: 'The post that finishes itself.',
    headlineAccent: 'In one piece.',
    description:
      'Stop building columns in the field. The Seamless Fascia Post arrives as one engineered piece — color-matched, full-sawn faces, hollow core. No miters, no patchwork, no callbacks.',
    sizes: ['4x4', '6x6', '8x8'],
    finishes: ['S4S', 'Rougher Head'],
    colors: ['Grey', 'LagerTone'],
    lengths: '8\u2032, 10\u2032, 12\u2032',
    warranty: '25-year limited',
    fiber: 'Second-growth engineered composite',
    valueProps: [
      { title: 'No site-wrapping', body: 'Arrives finished. Skip the miters, the trim, the callbacks.' },
      { title: 'Color-matched faces', body: 'Grey or LagerTone — both faces match across the full length.' },
      { title: 'Hollow core', body: 'Run wires through the middle. Lighter to handle. Stable through weather.' },
      { title: 'Standard hardware', body: 'Compatible with Simpson Strong-Tie post bases and caps.' },
    ],
    documents: [
      { label: 'Info Sheet', href: '/docs/seamless-collection-2026.pdf' },
      { label: 'Installation & Handling Guide', href: '/docs/seamless-install-guide.pdf' },
    ],
  },

  'seamless-cedar-timbers': {
    slug: 'seamless-cedar-timbers',
    imageFolder: 'cedar-timbers',
    name: 'Seamless Cedar Timbers',
    species: 'Coastal Western Red Cedar',
    tagline: 'Full-sawn cedar. Hollow-core engineering. Old-growth on demand.',
    headline: 'The big timbers,',
    headlineAccent: 'back in stock.',
    description:
      'Coastal Western Red Cedar with the appearance of old-growth stock — engineered from responsibly sourced second-growth fiber. Hollow-core construction for stability, weight, and the cleanest face cedar can give you.',
    sizes: ['4x4', '6x6', '8x8'],
    finishes: ['S4S', 'Rougher Head'],
    colors: ['Natural WRC'],
    lengths: '6\u2032, 8\u2032, 10\u2032, 12\u2032',
    warranty: '25-year limited',
    fiber: 'Second-growth Coastal WRC',
    valueProps: [
      { title: 'Real cedar faces', body: 'Coastal Western Red Cedar grain and tone, not a print or a wrap.' },
      { title: 'Less checking', body: 'Engineered construction reduces movement and surface checking over time.' },
      { title: 'Old-growth look', body: 'Full-sawn dimensions and grain that read as a single solid timber.' },
      { title: 'Sustainable supply', body: 'Built from responsibly sourced second-growth fiber, not old-growth.' },
    ],
    documents: [
      { label: 'Info Sheet', href: '/docs/seamless-collection-2026.pdf' },
      { label: 'Installation & Handling Guide', href: '/docs/seamless-install-guide.pdf' },
    ],
  },

  'seamless-treated': {
    slug: 'seamless-treated',
    imageFolder: 'treated',
    name: 'Seamless Treated',
    species: 'Pressure-Treated Composite',
    tagline: 'Built for ground contact. Looks like it wasn\u2019t.',
    headline: 'Treated for the dirt.',
    headlineAccent: 'Dressed for the deck.',
    description:
      'Pressure-treated for ground contact, exterior longevity, and structural confidence — without the rough-cut look that usually comes with it. The Seamless profile, just rated for the conditions.',
    sizes: ['6x6', '8x8'],
    finishes: ['S4S', 'Rougher Head'],
    colors: ['Treated'],
    lengths: '8\u2032, 10\u2032, 12\u2032',
    warranty: '25-year limited',
    fiber: 'Pressure-treated composite',
    valueProps: [
      { title: 'Ground-contact rated', body: 'Built for direct-to-earth applications without sacrificing finish.' },
      { title: 'Engineered consistency', body: 'No twisting, splitting, or surprise checks like raw treated lumber.' },
      { title: 'Full-sawn appearance', body: 'Reads as solid timber from every angle, treated or not.' },
      { title: '25-year warranty', body: 'Same warranty as the rest of the Seamless family.' },
    ],
    documents: [
      { label: 'Info Sheet', href: '/docs/seamless-collection-2026.pdf' },
      { label: 'Installation & Handling Guide', href: '/docs/seamless-install-guide.pdf' },
    ],
  },

  'seamless-cypress': {
    slug: 'seamless-cypress',
    imageFolder: 'cypress',
    name: 'Seamless Cypress',
    species: 'Cypress',
    tagline: 'Naturally rot-resistant. Engineered to last.',
    headline: 'Cypress, the way',
    headlineAccent: 'you used to get it.',
    description:
      'Cypress has earned its reputation for rot resistance and warm grain over a couple hundred years. We engineered it into the Seamless profile so you can spec it without crossing your fingers on supply.',
    sizes: ['6x6', '8x8'],
    finishes: ['S4S'],
    colors: ['Natural Cypress'],
    lengths: '8\u2032, 10\u2032, 12\u2032',
    warranty: '25-year limited',
    fiber: 'Engineered cypress',
    valueProps: [
      { title: 'Naturally rot-resistant', body: 'Cypress\u2019 native chemistry, engineered into a stable profile.' },
      { title: 'Premium grain', body: 'Warm, distinctive grain that takes finish beautifully.' },
      { title: 'Hollow core', body: 'Run wires, save weight, eliminate surface checking.' },
      { title: 'Supply you can spec', body: 'Available on lead times that work for a build schedule.' },
    ],
    documents: [
      { label: 'Info Sheet', href: '/docs/seamless-collection-2026.pdf' },
      { label: 'Installation & Handling Guide', href: '/docs/seamless-install-guide.pdf' },
    ],
  },

  'timber-lite-doug-fir': {
    slug: 'timber-lite-doug-fir',
    imageFolder: 'timber-lite',
    name: 'Timber-Lite Doug Fir',
    species: 'Douglas Fir',
    tagline: 'Structural look. Engineered weight.',
    headline: 'Big-timber Doug fir.',
    headlineAccent: 'Without the back pain.',
    description:
      'Timber-Lite is our sibling line for Doug fir applications where the structural-timber look matters but the weight does not. Same hollow-core engineering as Seamless, in Doug fir species.',
    sizes: ['6x6', '8x8'],
    finishes: ['S4S'],
    colors: ['Natural Doug Fir'],
    lengths: '8\u2032, 10\u2032, 12\u2032',
    warranty: '25-year limited',
    fiber: 'Engineered Douglas Fir',
    valueProps: [
      { title: 'Real Doug fir', body: 'Distinctive grain and tone, not a stain on something else.' },
      { title: 'Lighter on the lift', body: 'Hollow-core construction means a fraction of the weight of solid stock.' },
      { title: 'Clean dimensions', body: 'Engineered straight and stays straight \u2014 no twist, no crown.' },
      { title: 'Sibling to Seamless', body: 'Same engineering, same warranty, distinct identity.' },
    ],
    documents: [
      { label: 'Info Sheet', href: '/docs/seamless-collection-2026.pdf' },
      { label: 'Installation & Handling Guide', href: '/docs/seamless-install-guide.pdf' },
    ],
  },
};

export const productOrder = [
  'seamless-fascia-post',
  'seamless-cedar-timbers',
  'seamless-treated',
  'seamless-cypress',
  'timber-lite-doug-fir',
];
