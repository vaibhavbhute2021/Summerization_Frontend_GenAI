
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
    'index.csr.html': {size: 5109, hash: 'f6ba5fe9696c8001a8931b393a8f2a65f3d3ecf2dd51339f03dac6d7a0f167be', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: 'a49e6c5ef0b359d2a51a58736949139e85f812830733a5429536e43ff83792e1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16279, hash: 'f90e8b4d8c752f1759bb66df5216f15cd646cb06d673cdccce32e48e9972e00c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};
