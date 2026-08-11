import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://meta-agents-demo.github.io',
  output: 'static',
  integrations: [sitemap()],
});
