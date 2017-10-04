module.exports = (config: any) => {
  config.set({
    browsers: [/*"IE", "Chrome", "Firefox", "Safari",*/ "PhantomJS"],
    files: [
      "src/**/*.js",
      "test/**/*.js"
    ],
    frameworks: ["mocha", "chai"],
    plugins: [
      "karma-webpack",
      "karma-mocha",
      "karma-chai",
      "karma-phantomjs-launcher",
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-safari-launcher",
      "karma-ie-launcher",
      "karma-spec-reporter"
    ],
    preprocessors: {
      "src/**/*.js": ["webpack"],
      "test/**/*.js": ["webpack"],
      "test/**/*.ts": ["webpack"]
    },
    reporters: ["progress"],
    specReporter: {
      failFast: true,
      maxLogLines: 5,
      showSpecTiming: false,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: false
    },
    webpack: {
      module: {
        rules: [
          {
            exclude: /node_modules/,
            loader: "awesome-typescript-loader",
            test: /\.(js|ts)/
          }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true,
      stats: "minimal"
    }
  });
};
