const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2xh7ty',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/report/mochawesome-report",
      overwrite: true,
      html: true,
      json: false,
      timestamp: "ddmmyyyy_HHMMss",
    },
    watchForFileChanges: false,
    baseUrl: "https://alura-fotos.herokuapp.com"
  },
});