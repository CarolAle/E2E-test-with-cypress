const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

//If using this approach, just call the key "setupNodeEvents" in the E2E configurations
async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://automationexercise.com/",
    chromeWebSecurity: false,
    video: false,
    setupNodeEvents,
  },
});


// module.exports = defineConfig({
//   e2e: {
//     async setupNodeEvents(on, config) {
//       const bundler = createBundler({
//         plugins: [createEsbuildPlugin(config)],
//       });

//       on("file:preprocessor", bundler);
//       await addCucumberPreprocessorPlugin(on, config);

//       return config;
//     },
//     specPattern: "cypress/e2e/features/*.feature",
//     baseUrl: "https://automationexercise.com/",
//     chromeWebSecurity: false,
//     video: false,
//   },
// });
