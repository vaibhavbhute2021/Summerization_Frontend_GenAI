
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
    'index.csr.html': {size: 5109, hash: '38d05b71dc4e1cda8ad40402e94faab4df872576421dd9e19f347c9e15ea0598', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: 'f4ee74f73907327e8f769ed93495f5f6113f76d55b72a0e02fc1b4c71e6e8637', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16279, hash: '1ba6f986cbe2c687b8331b1e6f9a1724ab0734b3b54975a05c54060c863208a3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};
