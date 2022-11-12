const json = require('@rollup/plugin-json')
const teser = require('@rollup/plugin-terser')

module.exports = {
  input: './bin/index.js',
  output: {
    format: 'cjs',
    banner: '#!/usr/bin/env node',
    file: './dist/index.js',
  },
  plugins: [teser(), json()],
}
