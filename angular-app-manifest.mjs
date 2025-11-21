
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://vaibhavbhute2021.github.io/Summerization_Frontend_GenAI/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Summerization_Frontend_GenAI"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5109, hash: '8e1f28122fd97fdd18b69c559d7bcfde73804739c073a997f011c2bde34472bb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: '3603bf360993ccd5a24c32a4d273f6024db69c0b3a54785ffbac960bc00df9a7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16279, hash: 'f5a0ff23f4a70c984c6ba11397bd587f41bbb33f8d7fdfdeb358e783bb9f4111', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};
