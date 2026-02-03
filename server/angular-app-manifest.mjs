
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Meu-Site-Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Meu-Site-Angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 775, hash: 'c7d8dad4f6d754fbdcab3d5cf1443d1a482debdd8a5fcff97099290681f778cb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 971, hash: '779931f97d8637ead50b76b61bc6b6ec5b87e6f5cf91a0dee50c61ebb991ddd0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7420, hash: '910676d8534d3f1e198253d66cab2451ed71e1678f58ddbd5222d98408aedb56', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WPOOPAAZ.css': {size: 282, hash: 'XFBEj149h8E', text: () => import('./assets-chunks/styles-WPOOPAAZ_css.mjs').then(m => m.default)}
  },
};
