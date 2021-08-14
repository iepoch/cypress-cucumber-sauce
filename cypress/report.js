const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumber-json",
  reportPath: "./cypress/cucumber-report",
  metadata: {
    browser: {
      name: "chrome",
      version: "Version 92.0.4515.131 (Official Build) (64-bit)",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "2021",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Google Search" },
      { label: "Release", value: "1.6.1" },
      // {label: 'Cycle', value: 'B11221.34321'},
      { label: "Execution Start Time", value: "8/12/2021" },
      { label: "Execution End Time", value: "8/26/2021" },
    ],
  },
});
