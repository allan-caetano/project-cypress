const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  projectId: 'x2z98j',
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],

      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    chromeWebSecurity: false,

  },
  "reporter": "mochawesome",
  "reporterOptions": {
    "autoOpen": true,
    "inline": true,
    "reportPageTitle": "Reltórios de Testes Web",
    "code": false,
    "charts": true, 
    "reportFilename" : "[status]-[name]",
    "reportDir": "cypress/report/mochawesome-report",
    "overwrite": true,
    "html": true,
    "json": true,
    "timestamp": "mm-dd-_HH-MM-ss"
  }
});





