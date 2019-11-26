module.exports = function (config) {
  config.set({
    mutator: "typescript",
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "karma",
    //transpilers: ['typescript'],
    testFramework: "jasmine",
    coverageAnalysis: 'off',
    karma: {
      projectType: "custom",
      configFile: "karma.conf.js",
      config: {}
    },
    tsconfigFile: "tsconfig.json",
    mutate: ["index.ts"],
    files: ['*.ts', '*.js', '*.json'],
    maxConcurrentTestRunners: 4,
    //logLevel: 'trace'
  });
};
