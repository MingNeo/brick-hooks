import commonjs from '@rollup/plugin-commonjs'
const rollupTypescript = require('rollup-plugin-typescript2');
const autoExternal = require('rollup-plugin-auto-external');
const resolve = require('rollup-plugin-node-resolve');
const pkg = require('./package.json');

const moduleFile = pkg.module;
const nativeFile = pkg.native;
const mainFile = pkg.main;

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      // commonjs，给node用，仅需编译ts
      {
        file: mainFile,
        format: 'cjs'
      },
      // module，给node用，仅需编译ts
      {
        file: moduleFile,
        format: 'esm'
      },
    ],
    external: ['querystring', 'crypto', 'react', 'react-native'],
    plugins: [
      autoExternal({ preferBuiltins: true, builtins: false, dependencies: true, peerDependencies: true }),
      resolve({
        extensions: [
          '.node.mjs',
          '.node.ts',
          '.node.tsx',
          '.node.js',
          '.node.jsx',
          '.node.json',
          '.mjs',
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.json',
        ],
      }),
      rollupTypescript({
        noEmit: false,
        removeComments: true,
        tsconfig: 'tsconfig.json',
        clean: true,
      }),
      commonjs(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      // module，给rn用，仅需编译ts
      {
        file: nativeFile,
        format: 'esm'
      },
    ],
    external: ['querystring', 'react', 'react-native'],
    plugins: [
      autoExternal({ preferBuiltins: true, builtins: false, dependencies: true, peerDependencies: true }),
      resolve({
        extensions: [
          '.native.mjs',
          '.native.ts',
          '.native.tsx',
          '.native.js',
          '.native.jsx',
          '.native.json',
          '.mjs',
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.json',
        ],
      }),
      rollupTypescript({
        noEmit: false,
        removeComments: true,
        tsconfig: 'tsconfig.json',
        clean: true,
      }),
      commonjs(),
    ],
  },
];