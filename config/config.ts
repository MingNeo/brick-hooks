import { coreHooks, webHooks, nativeHooks, businessHooks, reactNavigation4Hooks } from './menus'

const packages = require('../packages/common/package.json')

export default {
  // ssr: {},
  publicPath: process.env.NODE_ENV === 'production' ? '/brick-hooks/' : '/',
  base: process.env.NODE_ENV === 'production' ? '/brick-hooks/' : '/',
  esbuild: {},
  exportStatic: {},
  mfsu: {}, // 打包热更新加速
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  mode: 'site',
  title: 'Brick-hooks',
  favicon: '/xxx.svg',
  logo: '/logo.svg',
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {
    'brick-hooks': process.cwd() + '/packages/common/src/index.ts',
    'brick-hooks-web': process.cwd() + '/packages/web/src/index.ts',
    'brick-hooks-native': process.cwd() + '/packages/native/src/index.ts',
    'brick-hooks-business': process.cwd() + '/packages/business/src/index.ts',
    'react-native': 'react-native-web',
  },
  resolve: {
    includes: [
      'docs',
      'packages/common/src',
      'packages/common/docs',
      'packages/web/src',
      'packages/web/docs',
      'packages/native/src',
      'packages/native/docs',
      'packages/business/src',
      'packages/business/docs',
      'packages/react-navigation4/src',
    ],
    passivePreview: true,
  },
  links: [
    // { rel: 'stylesheet', href: '/style.css' },
  ],
  navs: [
    { title: '指南', path: '/' },
    // { title: 'brick-hooks', path: '/core' },
    // { title: 'brick-hooks-web', path: '/web' },
    // { title: 'brick-hooks-native', path: '/native' },
    // { title: 'Hooks', path: '/zh-CN/hooks' },
    { title: '更新日志', path: 'https://github.com/MingNeo/custom-hooks/releases' },
    { title: 'GitHub', path: 'https://github.com/MingNeo/custom-hooks' },
  ],
  menus: {
    '/': [
      {
        title: '介绍',
        path: '/',
      },
      coreHooks,
      webHooks,
      nativeHooks,
      businessHooks,
      reactNavigation4Hooks,
    ],
  },
  scripts: [
    `
  const insertVersion = function(){
    const dom = document.createElement('span');
    dom.id = 'logo-version';
    dom.innerHTML = '${packages.version}';
    const logo = document.querySelector('.__dumi-default-navbar-logo');
    if(logo){
      logo.parentNode.insertBefore(dom, logo.nextSibling);
    }else{
      setTimeout(()=>{
        insertVersion();
      }, 1000)
    }
  }
  insertVersion();
  `,
  ],
}
