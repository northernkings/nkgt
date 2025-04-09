import react from '@astrojs/react';
import { config } from '@dotenvx/dotenvx';
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';

// Load environment variables
config();

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [svgr()],
    ssr: {
      noExternal: ['modern-normalize', 'focus-visible'],
    },
    build: {
      target: 'esnext',
      minify: 'esbuild',
    },
    define: {
      'import.meta.env.VITE_SOLD_OUT': JSON.stringify(process.env.VITE_SOLD_OUT),
      'import.meta.env.VITE_SITE_URL': JSON.stringify(process.env.VITE_SITE_URL),
    },
  },
  output: 'static',
});
