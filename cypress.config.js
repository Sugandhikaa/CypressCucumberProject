const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    supportFile: "cypress/support/e2e.js", // Support file
    stepDefinitions: "cypress/e2e/step_definitions/**/*.js", // Path to step definitions
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
 
  },
});
