import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
  },
});
