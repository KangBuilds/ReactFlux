if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const o=s=>i(s,r),u={module:{uri:r},exports:t,require:o};e[r]=Promise.all(l.map((s=>u[s]||o(s)))).then((s=>(n(...s),t)))}}define(["./workbox-e1498109"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/arco-CtQKhZWK.js",revision:null},{url:"assets/en-US-1uj3u8Th.js",revision:null},{url:"assets/es-ES-BSsPNZba.js",revision:null},{url:"assets/fr-FR-DkdHjMGW.js",revision:null},{url:"assets/highlight-DgD-1Bys.js",revision:null},{url:"assets/hls-BRcxkiAL.js",revision:null},{url:"assets/index-BcVXMdYd.js",revision:null},{url:"assets/index-DOzfhw4Q.css",revision:null},{url:"assets/plyr.min-CQtZMqEo.js",revision:null},{url:"assets/react-BzpOxxSf.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/zh-CN-CNJyJefJ.js",revision:null},{url:"index.html",revision:"1915b0367c6c4dc2fd66fac4e17ca614"},{url:"styles/loading.css",revision:"83707a709e3e73526a7e0a9095c59d3b"},{url:"manifest.webmanifest",revision:"6017208229886bea6bc7bb00b9adcccf"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
