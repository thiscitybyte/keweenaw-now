import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://keweenaw.now.local',
  output: 'static',
  integrations: [netlify()]
});