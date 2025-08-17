import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/cms';

export default defineConfig({
  integrations: [netlify()],
});
export default defineConfig({
  site: 'https://keweenaw.now.local',
  output: 'static',
});