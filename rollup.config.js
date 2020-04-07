import commonjs from '@rollup/plugin-commonjs'
const rollupTypescript = require('rollup-plugin-typescript2');
const autoExternal = require('rollup-plugin-auto-external');
const resolve = require('rollup-plugin-node-resolve');
const pkg = require('./package.json');
// const configs => {
//   return configs.map(config => {
//     return {
//       input: config.input,
//       output: {
//         name: config.name,
//         file: config.file,
//         format: config.format || 'cjs',
//         sourcemap: false,
//         exports: 'named',
//       },

//       // 告诉rollup不要将此lodash打包，而作为外部依赖
//       external: ['axios', 'vue', 'antd'],

//       // 是否开启代码分割
//       experimentalCodeSplitting: true,
//       plugins: [
//         resolve(), // 这样 Rollup 能找到 外部模块
//         commonjs(), // 这样 Rollup 能转换 外部模块 为一个ES模块
//         babel({
//           // babelHelpers: 'bundled',//构建单纯js包'runtime',构建项目：bundled
//           exclude: ['node_modules/**'],
//         }),
//         config.env === 'prod' && terser(),
//       ],
//     }
//   })
// }

const name = pkg.name;
const version = pkg.version;
const moduleFile = pkg.module;
const nativeFile = pkg.native;
const browserMjs = pkg.browser;
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