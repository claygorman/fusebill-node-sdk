import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import pluginJson from '@rollup/plugin-json'
import localResolve from 'rollup-plugin-local-resolve'
import autoExternal from 'rollup-plugin-auto-external'

import pkg from './package.json'

export default [
  // browser-friendly UMD build
  // {
  //   input: 'src/main.js',
  //   output: {
  //     name: 'Fusebill',
  //     file: pkg.browser,
  //     format: 'umd',
  //   },
  //   plugins: [
  //     resolve(), // so Rollup can find `ms`
  //     commonjs(), // so Rollup can convert `ms` to an ES module
  //     pluginJson(),
  //   ],
  // },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/main.js',
    plugins: [
      pluginJson(),
      localResolve(),
      commonjs(),
      resolve(),
      autoExternal(),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
]
