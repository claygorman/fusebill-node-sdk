import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import pluginJson from '@rollup/plugin-json'
import localResolve from 'rollup-plugin-local-resolve'
import autoExternal from 'rollup-plugin-auto-external'
import { babel } from '@rollup/plugin-babel'
import dts from 'rollup-plugin-dts'

import pkg from './package.json'

export default [
  // TODO: browser-friendly UMD build
  // {
  //   input: 'index.js',
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

  // Lets export the typescript variant too
  {
    input: 'index.d.ts',
    output: {
      file: pkg.typscript,
      format: 'es',
    },
    plugins: [dts()],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'index.js',
    plugins: [
      pluginJson(),
      localResolve(),
      commonjs(),
      resolve(),
      autoExternal(),
      babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
]
