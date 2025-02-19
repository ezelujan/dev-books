import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C-EzY8W1.mjs';
import { manifest } from './manifest_DYuxWxMY.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_B0NavXUl.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_DXMToUSL.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.3.0_typescript@5.7.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2db22307-7e7d-426b-8a2f-c30cf64e38ea",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
