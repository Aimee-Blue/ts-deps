// @ts-check
export const defaults = Object.freeze({
  rootDir: 'src',
  libOutDir: 'lib',
  appOutDir: 'dist',
  extensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  copyAdditional: [
    '**/*.d.ts',
    '**/*.json',
    '!@types/**/*.d.ts',
    '!**/__tests__/**',
    '!__integration-tests__/**',
  ],
  nodeVersion: '12',
  unitTestsGlob: 'src/**/__tests__/**',
  integrationTestsGlob: 'src/__integration-tests__/**',
  optionsFileName: 'ts-deps.config.js',
});
