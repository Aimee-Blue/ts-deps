// @ts-check
'use strict'

const defaults = require('../defaults')
const { trimPathSeparator } = require('../helpers')
const { options } = require('../options')

const babelConfig = (
  { aliases, nodeVersion = defaults.nodeVersion } = { ...options() }
) => {
  const src = defaults.rootDir

  const config = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: nodeVersion,
          },
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      !!aliases && [
        'module-resolver',
        {
          root: [src],
          alias: Object.keys(aliases).reduce((acc, key) => {
            return {
              ...acc,
              [key]: trimPathSeparator(aliases[key]),
            }
          }, {}),
        },
      ],
      '@babel/proposal-class-properties',
    ].filter(Boolean),
    ignore: [`${src}/**/*.d.ts`],
  }

  return config
}

module.exports = {
  __esModule: {
    value: true,
  },
  default: babelConfig(),
  babelConfig,
}
