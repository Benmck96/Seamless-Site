// Single source of truth for all product lines.
// To add a new species or variant: just add to this file.

export const products = {
  'seamless-fascia-post': {
    slug: 'seamless-fascia-post',
    construction: 'Hollow',
    pair: 'seamless-solid-fascia-post', // the other construction — powers the Hollow/Solid switch
    imageFolder: 'fascia-post',
    featuredImage: '/images/products/fascia-post/6x6_S4S_Grey_1.png',
    fieldImages: ['/images/products/fascia-post/field_1.jpg'],
    name: 'Seamless Fascia Post',
    species: 'Tight-Knot SPF (Spruce-Pine-Fir)',
    // One-sentence descriptor used in the product-substitution email (after "The Seamless Fascia Post is ").
    substitutionSummary: 'a one-piece, engineered hollow-core SPF (Spruce-Pine-Fir) member, that comes pre-primed and ready to install',
    // Carries the QAI CERUS-1064 code evaluation — may reference it in the substitution email.
    qaiCertified: true,
    tagline: 'Quit site-wrapping columns. Deliver a superior look in one piece.',
    headline: 'The post that finishes itself.',
    headlineAccent: 'In one piece.',
    description:
      [
        'Stop building columns in the field. The Seamless Fascia Post arrives as one engineered piece — primed, sealed, and ready for install.',
        'More stable than a site-wrapped column, at a fraction of the cost. No more wrapping, no more cladding: just install and paint.',
      ],
    moisture: 'Kiln dried (HT) · 19% MC',
    sizes: ['6x6', '8x8'],
    finishes: ['S4S', 'Combed', 'Resawn'],
    finishEdges: { 'Combed': 'Chamfered Edge' },
    colors: ['Grey', 'Cedar-Brown'],
    lengths: '8\u2032, 9\u2032, 10\u2032, 12\u2032',
    warranty: '15-year limited',
    fiber: 'Northern & Interior British Columbia',
    valueProps: [
      { title: 'No site-wrapping', body: 'Arrives finished. Skip the miters, the trim, the callbacks.' },
      { title: 'Factory finished', body: 'Primed and sealed at the mill. Available in Grey or Cedar-Brown.' },
      { title: 'Hollow core', body: 'A built-in utility channel gives wiring a clean, hidden path through the post. Lighter to handle, and easier to work with.' },
      { title: 'Standard hardware', body: 'Compatible with Simpson Strong-Tie post bases and caps.' },
    ],
    documents: [
      { label: 'Installation & Handling Guide', href: '/docs/fascia-post-install-guide.pdf' },
      { label: '15-Year Limited Warranty', href: '/docs/fascia-post-warranty.pdf' },
      { label: 'Structural Certification', href: '/docs/fascia-post-structural-cert.pdf' },
    ],
  },

  'seamless-cedar-timbers': {
    slug: 'seamless-cedar-timbers',
    construction: 'Hollow',
    pair: 'seamless-solid-cedar-timbers',
    imageFolder: 'cedar-timbers',
    featuredImage: '/images/products/cedar-timbers/6x6_S4S_Natural-WRC_1.png',
    fieldImages: ['/images/products/cedar-timbers/field_1.png'],
    name: 'Seamless Cedar Timbers',
    species: 'Tight-Knot Coastal Western Red Cedar',
    tagline: 'Full-sawn cedar. Hollow-core engineering.',
    headline: 'The big timbers,',
    headlineAccent: 'back in stock.',
    description:
      [
        'Stop wrestling with solid wood timbers — the culls, the callbacks, the lengths nobody buys. Seamless timbers are stocked only in the prime lengths and finishes that actually sell, so every piece leaves your yard with confidence.',
        'Coastal Western Red Cedar engineered from responsibly sourced Canadian fiber. Choose Hollow-Core for exposed or stained applications where a seamless, colour-matched look matters.',
      ],
    sizes: ['6x6', '8x8'],
    finishes: ['S4S', 'Rougher Head', 'Resawn'],
    colors: ['Natural WRC'],
    lengths: '6\u2032, 8\u2032, 9\u2032, 10\u2032, 12\u2032',
    warranty: '25-year limited',
    fiber: 'Coastal British Columbia',
    valueProps: [
      { title: 'Real cedar faces', body: 'Coastal Western Red Cedar grain and tone, not a print or a wrap.' },
      { title: 'Less checking', body: 'Engineered construction reduces risk of movement and surface checking.' },
      { title: 'Colour matched', body: 'Colour matched grain that reads as a single solid timber.' },
      { title: 'Sustainable supply', body: 'Built from responsibly sourced Canadian fiber.' },
    ],
    documents: [
      { label: 'Installation & Handling Guide', href: '/docs/cedar-timbers-install-guide.pdf' },
      { label: '25-Year Limited Warranty',      href: '/docs/cedar-timbers-warranty.pdf' },
      { label: 'Vertical-Use Spec Sheet',        href: '/docs/cedar-timbers-vertical-use-spec.pdf' },
    ],
    structuralNote: {
      heading: 'Engineered. Not just wrapped.',
      verticalUseRows: [
        { size: '6×6', netSize: '5-1/2″ × 5-1/2″', construction: '~1.5″ wall · 2.5″ core', netArea: '24.00 in²', indication: 'Approx. 13,200 lb' },
        { size: '8×8', netSize: '7-1/4″ × 7-1/4″', construction: '~1.5″ wall · 4.0″ core',  netArea: '34.50 in²', indication: 'Approx. 19,000 lb' },
      ],
      footnote: 'Vertical-use indication is a section-area estimate using net Western Red Cedar area and a conservative No.2 WRC compression-parallel value of 550 psi. Final use is subject to project-specific design, connection details, installation conditions, and local code requirements. All true lengths are 1″ under displayed length (e.g. 8′ true length is 95″).',
      body: [
        'Each Seamless™ Cedar Timber is manufactured using the same disciplined production approach developed through CureWood’s QAI-evaluated Seamless™ structural post program. This includes controlled adhesive application, adhesive performance checks, dimensional verification, routine quality checks, and ongoing manufacturing oversight. CureWood’s approved quality program is audited and inspected by QAI Laboratories, an independent third-party testing, inspection, and certification agency.',
        'For this product, that means the laminated seams, bonded faces, and assembled post geometry are produced under a controlled and repeatable manufacturing process designed to support long-term bond integrity and dimensional consistency. Builders, designers, and end users can have confidence that the product is not simply a decorative wrap, but an engineered cedar post manufactured with verified process controls and third-party quality oversight.',
        'For vertical-use applications, the substantial net Western Red Cedar section provides a rational engineering basis for estimating compression performance using recognized No.2-or-better Western Red Cedar timber design values. Final use, connection details, and project-specific loading should be reviewed by the project designer, engineer of record, or local authority having jurisdiction.',
      ],
    },
  },

  'seamless-treated': {
    slug: 'seamless-treated',
    construction: 'Hollow',
    pair: 'seamless-solid-treated',
    imageFolder: 'treated',
    featuredImage: '/images/products/treated/8x8_Rougher-Head_Treated_1.jpg',
    fieldImages: [],
    name: 'Seamless Treated',
    species: 'Pressure Treated Western Species',
    tagline: 'Just when you thought Seamless couldn\u2019t get any tougher.',
    headline: 'Treated for the dirt.',
    headlineAccent: 'Dressed for the deck.',
    description:
      [
        'Seamless Treated combines the stability and consistency of our engineered post construction with the proven protection of Copper Azole treatment.',
        'Built for demanding exterior applications, Copper Azole helps protect against rot, decay and termite attack, while Tanatone brown delivers a warm, natural wood appearance. Added durability and curb appeal, all in one.',
      ],
    treatmentDetails: {
      type: 'Copper Azole (CA)',
      color: 'Tanatone Brown',
      body: 'Copper Azole is a water-based wood preservative that protects against termites and fungal decay. Copper acts as the primary fungicide — preventing rot and decay. Azole (tebuconazole/propiconazole) provides a second line of defence against copper-tolerant fungi. The brown color comes from Tanatone, a concentrated dye additive built into the treating process at the same time the preservative is applied.',
      uses: 'Approved for residential and commercial applications. CA treatment can be applied at higher solution strength for material requiring direct ground contact.',
      applications: [
        'Decking and dimensional lumber',
        'Landscape timbers and fencing',
        'Plywood and rainscreen strips',
        'Agricultural poles',
      ],
    },
    sizes: ['6x6', '8x8'],
    finishes: ['S4S', 'Rougher Head', 'Resawn'],
    colors: ['Treated'],
    lengths: '8\u2032, 9\u2032, 10\u2032, 12\u2032',
    warranty: '15-year limited',
    fiber: 'Northern & Interior British Columbia',
    valueProps: [
      { title: 'Ground-contact rated', body: 'Built for direct-to-earth applications without sacrificing finish.' },
      { title: 'Rot, decay & termite protection', body: 'Copper Azole treatment protects against rot, decay and termite attack.' },
      { title: 'Engineered consistency', body: 'No twisting, splitting, or surprise checks like raw treated lumber.' },
      { title: 'Full-sawn appearance', body: 'Reads as solid timber from every angle, treated or not.' },
      { title: '15-year warranty', body: 'Built to last, backed in writing.' },
    ],
    documents: [],
  },

  'seamless-cypress': {
    slug: 'seamless-cypress',
    imageFolder: 'cypress',
    featuredImage: null,
    fieldImages: [],
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
    construction: 'Hollow',
    pair: 'seamless-solid-kd-doug-fir',
    imageFolder: 'timber-lite',
    featuredImage: '/images/products/timber-lite/6x6_S4S_Natural-Douglas-fir_1.png',
    fieldImages: [],
    name: 'Timber-Lite Douglas-fir',
    species: 'Douglas-fir',
    tagline: 'Real Douglas-fir grain. Engineered light. Priced to spec.',
    headline: 'Big-timber Douglas-fir.',
    headlineAccent: 'Without the weight.',
    description:
      'Timber-Lite Douglas-fir is an engineered hollow-core column built for exposed structural-look applications. Real Douglas-fir grain on every face, hollow-core construction for easy handling, and a finish that takes stain beautifully \u2014 at a price point that competitive composite products can\u2019t match.',
    sizes: ['6x6', '8x8'],
    finishes: ['S4S', 'Resawn', 'Rougher Head'],
    finishEdges: {
      'S4S': 'Eased Edge (EE)',
      'Resawn': 'Square Edge (SQ)',
      'Rougher Head': 'Chamfered Edge',
    },
    colors: ['Natural Douglas-fir'],
    lengths: '8\u2032, 10\u2032, 12\u2032',
    warranty: '15-year limited',
    fiber: 'Douglas-fir',
    valueProps: [
      { title: 'Real Douglas-fir', body: 'Distinctive grain and warm tone on every face. Reads as premium in exposed applications \u2014 not a composite or a glued industrial product.' },
      { title: 'Lightweight', body: 'Hollow-core construction means a fraction of the weight of competitive composite products. Easier to handle, position, and install.' },
      { title: 'Engineered consistency', body: 'No twist, no crown, no surprises on site. Every piece behaves the same way.' },
      { title: 'Better value', body: 'The Douglas-fir column aesthetic your project calls for, at a price point that keeps the budget intact.' },
      { title: 'Stain ready', body: 'Douglas-fir accepts stain evenly and beautifully. Match any site palette or let the natural grain speak for itself in a clear coat.' },
    ],
    documents: [],
  },

  // ── SOLID VERSIONS ────────────────────────────────────────────────────────
  // Specs follow the Oct 2026 catalogue. No documents or QAI claim until the
  // solid product has its own paperwork.

  'seamless-solid-fascia-post': {
    slug: 'seamless-solid-fascia-post',
    construction: 'Solid',
    pair: 'seamless-fascia-post',
    imageFolder: 'fascia-post-solid',
    featuredImage: null,
    fieldImages: [],
    name: 'Seamless-Solid Fascia Post',
    species: 'Tight-Knot SPF (Spruce-Pine-Fir)',
    substitutionSummary: 'a one-piece, engineered solid-laminated SPF (Spruce-Pine-Fir) member, that comes pre-primed and ready to install',
    tagline: 'Everything you like about the Fascia Post. Solid all the way through.',
    headline: 'The post that finishes itself.',
    headlineAccent: 'Solid to the core.',
    description:
      [
        'The same factory-finished Seamless Fascia Post, built solid laminated instead of hollow-core.',
        'Primed, sealed, and ready for install. No miters, no patchwork, no callbacks.',
      ],
    moisture: 'Kiln dried (HT) · 19% MC',
    sizes: ['4x4', '4x6', '6x6', '8x8'],
    finishes: ['S4S', 'Combed', 'Resawn'],
    finishEdges: { 'Combed': 'Chamfered Edge' },
    colors: ['Grey', 'Cedar-Brown'],
    lengths: '8′, 9′, 10′, 12′, 16′, 20′',
    warranty: '15-year limited',
    fiber: 'Northern & Interior British Columbia',
    valueProps: [
      { title: 'No site-wrapping', body: 'Arrives finished. Skip the miters, the trim, the callbacks.' },
      { title: 'Factory finished', body: 'Primed and sealed at the mill. Available in Grey or Cedar-Brown.' },
      { title: 'Solid laminated', body: 'A full solid section through the middle. No hollow core.' },
      { title: 'Fire performance', body: 'For jobs that call for solid timber, premium dimensional stability and great fire performance.' },
      { title: 'Standard hardware', body: 'Compatible with Simpson Strong-Tie post bases and caps.' },
    ],
    documents: [],
  },

  'seamless-solid-cedar-timbers': {
    slug: 'seamless-solid-cedar-timbers',
    construction: 'Solid',
    pair: 'seamless-cedar-timbers',
    imageFolder: 'cedar-timbers-solid',
    featuredImage: null,
    fieldImages: [],
    name: 'Seamless-Solid Cedar Timbers',
    species: 'Tight-Knot Coastal Western Red Cedar',
    substitutionSummary: 'a one-piece, engineered solid-laminated Western Red Cedar member',
    tagline: 'Full-sawn cedar. Solid laminated.',
    headline: 'The big timbers,',
    headlineAccent: 'solid through.',
    description:
      [
        'Stop wrestling with solid wood timbers — the culls, the callbacks, the lengths nobody buys. Seamless timbers are stocked only in the prime lengths and finishes that actually sell, so every piece leaves your yard with confidence.',
        'Coastal Western Red Cedar engineered from responsibly sourced Canadian fiber. Choose Solid Laminated when the job calls for the characteristics of solid timber — higher strength with premium dimensional stability.',
      ],
    sizes: ['4x4', '6x6', '8x8'],
    finishes: ['S4S', 'Rougher Head', 'Resawn'],
    colors: ['Natural WRC'],
    lengths: '6′, 8′, 9′, 10′, 12′, 16′, 20′',
    warranty: '25-year limited',
    fiber: 'Coastal British Columbia',
    valueProps: [
      { title: 'Real cedar faces', body: 'Coastal Western Red Cedar grain and tone, not a print or a wrap.' },
      { title: 'Solid laminated', body: 'Higher strength with premium dimensional stability. No hollow core.' },
      { title: 'Colour matched', body: 'Colour matched grain that reads as a single solid timber.' },
      { title: 'Sustainable supply', body: 'Built from responsibly sourced Canadian fiber.' },
    ],
    documents: [],
  },

  'seamless-solid-treated': {
    slug: 'seamless-solid-treated',
    construction: 'Solid',
    pair: 'seamless-treated',
    imageFolder: 'treated-solid',
    featuredImage: '/images/products/treated-solid/default.jpg',
    fieldImages: [],
    name: 'Seamless-Solid Treated',
    species: 'Pressure Treated Western Species',
    substitutionSummary: 'a one-piece, engineered solid-laminated pressure-treated Western species member',
    tagline: 'Just when you thought Seamless couldn’t get any tougher. Solid all the way through.',
    headline: 'Treated for the dirt.',
    headlineAccent: 'Solid to the core.',
    description:
      [
        'Seamless-Solid Treated combines the stability of solid laminated construction with the proven protection of Copper Azole treatment.',
        'Built for demanding exterior applications, Copper Azole helps protect against rot, decay and termite attack, while Tanatone brown delivers a warm, natural wood appearance. Added durability and curb appeal, all in one.',
      ],
    // treatmentDetails is copied from Seamless Treated below the products list.
    sizes: ['4x4', '4x6', '6x6', '4x8', '8x8'],
    finishes: ['S4S', 'Rougher Head', 'Resawn'],
    colors: ['Treated'],
    lengths: '8′, 9′, 10′, 12′',
    warranty: '15-year limited',
    fiber: 'Northern & Interior British Columbia',
    valueProps: [
      { title: 'Ground-contact rated', body: 'Built for direct-to-earth applications without sacrificing finish.' },
      { title: 'Rot, decay & termite protection', body: 'Copper Azole treatment protects against rot, decay and termite attack.' },
      { title: 'Solid laminated', body: 'A full solid section through the middle. No hollow core.' },
      { title: 'Engineered consistency', body: 'No twisting, splitting, or surprise checks like raw treated lumber.' },
      { title: '15-year warranty', body: 'Built to last, backed in writing.' },
    ],
    documents: [],
  },

  'seamless-solid-kd-doug-fir': {
    slug: 'seamless-solid-kd-doug-fir',
    construction: 'Solid',
    pair: 'timber-lite-doug-fir',
    imageFolder: 'doug-fir-solid',
    featuredImage: '/images/products/doug-fir-solid/default.jpg',
    fieldImages: [],
    name: 'Seamless-Solid KD Douglas-fir',
    species: 'Tight-Knot Kiln-Dried Douglas-fir',
    substitutionSummary: 'a one-piece, engineered solid-laminated kiln-dried Douglas-fir member',
    tagline: 'The strength and beauty of Douglas-fir, with the stability of solid laminated construction.',
    headline: 'Kiln dried deeper.',
    headlineAccent: 'Engineered to stay that way.',
    description:
      [
        'Seamless-Solid KD Douglas-fir combines the strength and beauty of Douglas-fir with the stability of solid laminated construction.',
        'Dried to 14% moisture content throughout the full section, the post has no wet core or major moisture differential left to drive shrinkage, checking or movement after installation.',
        'The result is a strong, consistent timber built to stay straighter, tighter and more predictable in service.',
      ],
    moisture: 'Kiln dried (HT) · 14% MC',
    sizes: ['4x4', '6x6', '8x8'],
    finishes: ['S4S', 'Resawn', 'Rougher Head'],
    finishEdges: {
      'S4S': 'Eased Edge (EE)',
      'Resawn': 'Square Edge (SQ)',
      'Rougher Head': 'Chamfered Edge',
    },
    colors: ['Natural Douglas-fir', 'Grey'],
    lengths: '8′, 9′, 10′, 12′',
    warranty: '15-year limited',
    fiber: 'Douglas-fir',
    valueProps: [
      { title: 'Real Douglas-fir', body: 'Distinctive grain and warm tone on every face. Reads as premium in exposed applications.' },
      { title: 'Kiln dried', body: 'Dried down to 14% before laminating, so the section stays stable and consistent.' },
      { title: 'No wet core', body: 'Dry through the full section, so there\u2019s no moisture differential left to drive shrinkage, checking or movement after installation.' },
      { title: 'Solid laminated', body: 'A full solid section through the middle. No hollow core.' },
      { title: 'Stain or paint', body: 'Raw Douglas-fir takes stain evenly, or order it primed grey and ready to paint.' },
    ],
    documents: [],
  },
};

// ── FJ EDGE-GLUED ───────────────────────────────────────────────────────────
products['seamless-cedar-boards'] = {
  slug: 'seamless-cedar-boards',
  construction: 'FJ Edge-Glued',
  imageFolder: 'cedar-boards',
  featuredImage: '/images/products/cedar-boards/default.jpg',
  fieldImages: ['/images/products/cedar-boards/field_1.jpg'],
  fieldLabel: { en: 'In production · CureWood mill', ja: '製造中 · CureWood 工場' },
  name: 'Seamless Cedar Boards',
  species: 'Tight-Knot Western Red Cedar',
  substitutionSummary: 'a finger-jointed, edge-glued tight-knot Western Red Cedar board, supplied in long, straight lengths',
  tagline: 'Long lengths. Broad widths. Reliable supply.',
  headline: 'Cedar boards,',
  headlineAccent: 'without the headaches.',
  description: [
    'Seamless engineered cedar boards give you the natural beauty of Western Red Cedar without the headaches. Finger-jointed and edge-glued from tight-knot stock, they stay straight, resist warping and checking, and come in long, clean lengths.',
    'Fewer joints, fewer callbacks, and a board that finishes beautifully every time. Clear grades can be produced on request.',
  ],
  sizes: ['1x4', '1x6', '1x8', '1x10', '1x16'],
  finishes: ['S4S', 'Rougher Head', 'Resawn'],
  finishEdges: null, // boards don't carry an edge detail
  colors: ['Natural WRC', 'Primed'],
  lengths: '16′, 20′',
  warranty: null,
  fiber: null,
  hardware: null,
  extraSpecs: [
    { label: 'Thickness', labelJa: '厚さ', en: '1/2″ to 7/8″' },
    { label: 'Grain', labelJa: '木目', en: 'Mixed grain', ja: '混合木目' },
    { label: 'Profiles', labelJa: 'プロファイル', en: 'Boards · Bevel · Channel', ja: 'ボード · ベベル · チャンネル' },
  ],
  profiles: [
    { name: 'Boards', nameJa: 'ボード', widths: '2-1/2″ to 15-1/4″', note: '1x4 to 1x10, plus 1x16 beam covers', noteJa: '1x4〜1x10、1x16 ビームカバー', image: '/images/products/cedar-boards/profile-boards.jpg' },
    { name: 'Bevel', nameJa: 'ベベル', widths: '3-1/2″ to 9-1/2″', note: 'Bevel siding', noteJa: 'ベベルサイディング', image: '/images/products/cedar-boards/profile-bevel.jpg' },
    { name: 'Channel', nameJa: 'チャンネル', widths: '3-1/2″ to 9-1/2″', note: 'Channel siding', noteJa: 'チャンネルサイディング', image: '/images/products/cedar-boards/profile-channel.jpg' },
  ],
  valueProps: [
    { title: 'Stays straight', body: 'Finger-jointed and edge-glued from tight-knot stock, so boards resist warping and checking.' },
    { title: 'Long, clean lengths', body: '16′ and 20′ lengths mean fewer joints on the wall and fewer callbacks.' },
    { title: 'Broad widths', body: 'From 1x4 up to 1x16 beam covers, plus bevel and channel siding profiles.' },
    { title: 'Finishes beautifully', body: 'Raw Western Red Cedar or primed, in S4S, Rougher Head or Resawn surfaces.' },
    { title: 'Made for trim work', body: 'Fascia, trim, siding and beam wraps.' },
  ],
  documents: [],
};

products['seamless-solid-treated'].treatmentDetails = products['seamless-treated'].treatmentDetails;

// Each hollow product is followed by its solid version.
export const productOrder = [
  'seamless-fascia-post',
  'seamless-solid-fascia-post',
  'seamless-cedar-timbers',
  'seamless-solid-cedar-timbers',
  'seamless-treated',
  'seamless-solid-treated',
  'timber-lite-doug-fir',
  'seamless-solid-kd-doug-fir',
  'seamless-cedar-boards',
];

// The homepage "collection" grid shows the main lines only (the hollow versions).
export const mainLineOrder = productOrder.filter((slug) => products[slug].construction !== 'Solid');
