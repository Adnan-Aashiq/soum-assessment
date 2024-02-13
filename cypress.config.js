const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  "chromeWebSecurity": false,
  env: {
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
  },
});