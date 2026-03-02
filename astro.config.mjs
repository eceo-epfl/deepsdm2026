import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://eceo-epfl.github.io',
  base: isProd ? '/deepsdm2026' : '/',
  integrations: [sitemap()],
  output: 'static'
});
