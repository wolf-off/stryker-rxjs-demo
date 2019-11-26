const realBrowser = String(process.env.BROWSER).match(/^(1|true)$/gi)
const travisLaunchers = {
  chrome_travis: {
    base: 'Chrome',
    flags: [ '--no-sandbox' ]
  }
}

const localBrowsers = realBrowser ? Object.keys(travisLaunchers) : [ 'Chrome' ]

module.exports = function(config) {
  config.set({
   frameworks: [ 'jasmine', 'karma-typescript' ],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-typescript',
      'karma-spec-reporter'
    ],
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json",
    },
    // client: {
    //   clearContext: false
    // },
    files: [ { pattern: '*.ts' }, { pattern: '*.spec.ts' } ],
    preprocessors: {
      '*.ts': [ 'karma-typescript' ],
      '*.spec.ts': [ 'karma-typescript' ]
    },
    reporters: [ 'progress', 'spec', 'karma-typescript' ],
    colors: true,
    logLevel: config.LOG_DISABLE,
    autoWatch: false,
    browsers: [ 'Chrome' ],
    singleRun: true
  })
}
