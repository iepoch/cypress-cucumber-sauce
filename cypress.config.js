const { defineConfig } = require('cypress');

const addCucumberPreprocessorPlugin =
	require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const createEsbuildPlugin =
	require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
	viewportWidth: 1920,
	viewportHeight: 1080,
	chromeWebSecurity: false,
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		experimentalSessionAndOrigin: true,
		async setupNodeEvents(on, config) {
			const bundler = createBundler({
				plugins: [createEsbuildPlugin(config)],
			});
			on('file:preprocessor', bundler);
			await addCucumberPreprocessorPlugin(on, config);

			return config;
		},
		baseUrl: 'https://www.saucedemo.com',
		specPattern: 'cypress/e2e/**/*.{feature, features}',
	},
});
