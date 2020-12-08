import fs from 'fs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const {
  main,
  module,
  components: sourceComponents,
  peerDependencies = {}
} = pkg

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({
    useTsconfigDeclarationDir: true
  }),
  postcss(),
  process.env.NODE_ENV === 'production' &&
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
].filter(Boolean)

export default [
  {
    input: 'src/index.ts',

    output: [
      { file: main, format: 'cjs' },
      { file: module, format: 'esm' }
    ],

    external: Object.keys(peerDependencies),

    plugins
  },

  ...fs.readdirSync(sourceComponents).map(component => ({
    input: `${sourceComponents}/${component}/index.ts`,

    output: [
      {
        file: `dist/components/${component}/index.js`,
        format: 'cjs',
        exports: 'default'
      },

      {
        file: `dist/components/${component}/index.esm.js`,
        format: 'esm',
        exports: 'default'
      }
    ],

    external: Object.keys(peerDependencies),

    plugins
  }))
]
