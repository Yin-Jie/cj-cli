const resolve = require('@rollup/plugin-node-resolve')
const commonJs = require('@rollup/plugin-commonjs')
const json = require('@rollup/plugin-json')
const teser = require('@rollup/plugin-terser')

module.exports = {
  input: './bin/index.js',
  output: {
    format: 'cjs',
    banner: '#!/usr/bin/env node',
    file: './dist/index.js',
  },
  external: ['download-git-repo', 'handlebars', 'ora'],
  plugins: [commonJs({}), teser(), json(), resolve()],
}
