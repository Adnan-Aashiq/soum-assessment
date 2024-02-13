const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  reporter: 'cypress-mochawesome-reporter',
  viewportWidth: 1920,
  viewportHeight: 1080,
  "chromeWebSecurity": false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://www.saucedemo.com/',
  },
});
