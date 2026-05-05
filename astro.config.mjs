import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://transcrab-9qi.pages.dev',
  output: 'static',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
