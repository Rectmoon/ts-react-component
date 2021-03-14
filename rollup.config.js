import fs from 'fs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
import pkg from './package.json'

const {
  main,
  module,
  components: sourceComponents,
  peerDependencies = {}
} = pkg

const commonPlugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({
    useTsconfigDeclarationDir: true
  }),
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

    plugins: [
      ...commonPlugins,
      postcss({
        // Extract CSS to the same location where JS file is generated but with .css extension.
        extract: 'index.css',
        // Use named exports alongside default export.
        namedExports: true,
        // Minimize CSS, boolean or options for cssnano.
        minimize: true,
        // Enable sourceMap.
        sourceMap: false,
        // This plugin will process files ending with these extensions and the extensions supported by custom loaders.
        extensions: ['.less', '.css']
      }),
      copy({
        targets: [{ src: 'src/*.less', dest: main.split('/')[0] }]
      })
    ]
  },

  ...fs.readdirSync(sourceComponents).map(component => ({
    input: `${sourceComponents}/${component}/index.ts`,

    output: [
      {
        file: `${module.split('/')[0]}/components/${component}/index.js`,
        format: 'esm',
        exports: 'default'
      }
    ],

    external: Object.keys(peerDependencies),

    plugins: [
      ...commonPlugins,
      postcss({
        // Extract CSS to the same location where JS file is generated but with .css extension.
        extract: 'index.css',
        // Use named exports alongside default export.
        namedExports: true,
        // Minimize CSS, boolean or options for cssnano.
        minimize: true,
        // Enable sourceMap.
        sourceMap: false,
        // This plugin will process files ending with these extensions and the extensions supported by custom loaders.
        extensions: ['.less', '.css']
      }),
      copy({
        targets: [{ src: 'src/*.less', dest: module.split('/')[0] }]
      })
    ]
  }))
]
