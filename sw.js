if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const c=e=>r(e,n),o={module:{uri:n},exports:t,require:c};s[n]=Promise.all(i.map((e=>o[e]||c(e)))).then((e=>(l(...e),t)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/arco-vendor-Cf3bqOHg.js",revision:null},{url:"assets/en-US-EU9b7RRI.js",revision:null},{url:"assets/es-ES-ChAbJKok.js",revision:null},{url:"assets/highlight-vendor-DIo35p1m.js",revision:null},{url:"assets/index-C0B6tcVT.js",revision:null},{url:"assets/index-CnXVFPM2.css",revision:null},{url:"assets/react-vendor-xLx7qwmY.js",revision:null},{url:"assets/zh-CN-BwGgKOi_.js",revision:null},{url:"index.html",revision:"bd8aad4f36eaeceaea275ca04f453416"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"styles/blue-theme.css",revision:"7b6b23cb10daf334ce888ef733136a23"},{url:"styles/gray-theme.css",revision:"44ed564f291dd5418384ab72f9d2076d"},{url:"styles/green-theme.css",revision:"27bbd7ba12eeb38cd3f9cc930a13c0e1"},{url:"styles/neutral-theme.css",revision:"955e7db4bc5f4e8d76a6c7e593eaf31e"},{url:"styles/orange-theme.css",revision:"6624426adce5c762bf84a2221abdf065"},{url:"styles/red-theme.css",revision:"e17d18e577dd7830c61052d3c1f29c13"},{url:"styles/slate-theme.css",revision:"0223aea8531e47a813e877c9a1e43922"},{url:"styles/stone-theme.css",revision:"ab771335744f5efc563c79ad4d78788b"},{url:"styles/violet-theme.css",revision:"7c02e3084f79d8655534f13090993340"},{url:"styles/yellow-theme.css",revision:"d64dbeef735d6ec6f3f68986123946e7"},{url:"styles/zine-theme.css",revision:"65c8a203dc41cb1858b5c473d815e701"},{url:"manifest.webmanifest",revision:"6017208229886bea6bc7bb00b9adcccf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
