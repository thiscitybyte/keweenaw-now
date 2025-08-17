import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://keweenaw-now.netlify.app',
  output: 'static',
  integrations: [netlify()],
  publicDir: 'public',
  build: {
    assets: 'assets',
    // Ensure public files are copied to the build output
    assetsPrefix: '/',
  },
  // Enable the Netlify CMS admin route
  vite: {
    server: {
      fs: {
        // Allow serving files from the project root
        allow: ['..']
      }
    }
  }
});