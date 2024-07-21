const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    baseUrl: "http://localhost:3000",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
  },

  env: {
    NEXTAUTH_SECRET: "",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
