import { defineConfig } from 'rollup'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default defineConfig({
  input: './bin/index.ts',
  output: {
    format: 'esm',
    banner: '#!/usr/bin/env node',
    file: './dist/bundle.js',
  },
  external: [
    'commander',
    'inquirer',
    'child_process',
    'download-git-repo',
    'handlebars',
    'ora',
    'semver',
    'chalk',
  ],
  plugins: [typescript(), resolve(), commonjs(), json(), terser()],
})
