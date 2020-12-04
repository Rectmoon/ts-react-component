import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

// "url": "git+https://github.com/HarveyD/react-component-library.git"

export default {
  input: 'src/index.ts',

  external: Object.keys(pkg.peerDependencies || {}),

  plugins: [
    peerDepsExternal(),

    resolve(),

    commonjs(),

    typescript({
      useTsconfigDeclarationDir: true
    })
  ],

  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' }
  ]
}
