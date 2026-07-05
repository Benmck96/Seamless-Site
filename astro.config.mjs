import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://www.curewood.co',
  output: 'hybrid',
  adapter: vercel(),
  // Stable QR entry point printed on packaging. 302 (temporary) so it can be
  // repointed later without browsers caching the old destination.
  redirects: {
    '/scan': { status: 302, destination: '/substitution' },
  },
  integrations: [tailwind()],
});
