import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy'
import pkg from './package.json'

export default {
  input: 'src/index.ts',

  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' }
  ],

  external: Object.keys(pkg.peerDependencies || {}),

  plugins: [
    peerDepsExternal(),

    resolve(),

    commonjs(),

    typescript({
      useTsconfigDeclarationDir: true
    }),

    postcss(),

    copy({
      targets: [
        {
          src: 'src/variables.scss',
          dest: 'dist',
          rename: 'variables.scss'
        },
        {
          src: 'src/typography.scss',
          dest: 'dist',
          rename: 'typography.scss'
        }
      ]
    })
  ]
}
