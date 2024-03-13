(()=>{"use strict";var e={404:()=>{try{self["workbox:expiration:5.1.4"]&&_()}catch(e){}},858:()=>{try{self["workbox:core:5.1.4"]&&_()}catch(e){}},362:()=>{try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},272:()=>{try{self["workbox:core:5.1.4"]&&_()}catch(e){}},161:()=>{try{self["workbox:routing:5.1.4"]&&_()}catch(e){}},830:()=>{try{self["workbox:core:5.1.4"]&&_()}catch(e){}},837:(e,t,n)=>{n.d(t,{V:()=>r});n(618);const s=function(e){let t=e;for(var n=arguments.length,s=new Array(n>1?n-1:0),r=1;r<n;r++)s[r-1]=arguments[r];return s.length>0&&(t+=" :: ".concat(JSON.stringify(s))),t};class r extends Error{constructor(e,t){super(s(e,t)),this.name=e,this.details=t}}},576:(e,t,n)=>{n.d(t,{h:()=>s});n(837),n(618);const s=null},191:(e,t,n)=>{n.d(t,{x:()=>a});n(618);const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter((e=>e&&e.length>0)).join("-"),a={updateDetails:e=>{(e=>{for(const t of Object.keys(s))e(t)})((t=>{"string"===typeof e[t]&&(s[t]=e[t])}))},getGoogleAnalyticsName:e=>e||r(s.googleAnalytics),getPrecacheName:e=>e||r(s.precache),getPrefix:()=>s.prefix,getRuntimeName:e=>e||r(s.runtime),getSuffix:()=>s.suffix}},448:(e,t,n)=>{n.d(t,{g:()=>l});n(576);var s=n(938),r=n(510),a=(n(69),n(28)),i=n(837);n(618);const o=async e=>{let{request:t,mode:n,plugins:s=[]}=e;const r=a.R.filter(s,"cacheKeyWillBeUsed");let i=t;for(const a of r)i=await a.cacheKeyWillBeUsed.call(a,{mode:n,request:i}),"string"===typeof i&&(i=new Request(i));return i},c=async e=>{let{cacheName:t,request:n,event:s,matchOptions:r,plugins:a=[]}=e;const i=await self.caches.open(t),c=await o({plugins:a,request:n,mode:"read"});let l=await i.match(c,r);for(const o of a)if("cachedResponseWillBeUsed"in o){const e=o.cachedResponseWillBeUsed;l=await e.call(o,{cacheName:t,event:s,matchOptions:r,cachedResponse:l,request:c})}return l},l={put:async e=>{let{cacheName:t,request:n,response:l,event:h,plugins:u=[],matchOptions:d}=e;const p=await o({plugins:u,request:n,mode:"write"});if(!l)throw new i.V("cache-put-with-no-response",{url:(0,r.C)(p.url)});const f=await(async e=>{let{request:t,response:n,event:s,plugins:r=[]}=e,a=n,i=!1;for(const o of r)if("cacheWillUpdate"in o){i=!0;const e=o.cacheWillUpdate;if(a=await e.call(o,{request:t,response:a,event:s}),!a)break}return i||(a=a&&200===a.status?a:void 0),a||null})({event:h,plugins:u,response:l,request:p});if(!f)return void 0;const g=await self.caches.open(t),m=a.R.filter(u,"cacheDidUpdate"),w=m.length>0?await c({cacheName:t,matchOptions:d,request:p}):null;try{await g.put(p,f)}catch(y){throw"QuotaExceededError"===y.name&&await(0,s.Y)(),y}for(const s of m)await s.cacheDidUpdate.call(s,{cacheName:t,event:h,oldResponse:w,newResponse:f,request:p})},match:c}},938:(e,t,n)=>{n.d(t,{Y:()=>r});n(69);var s=n(677);n(618);async function r(){for(const e of s.f)await e()}},629:(e,t,n)=>{n.d(t,{h:()=>a});var s=n(837),r=(n(69),n(576),n(510),n(28));n(618);const a={fetch:async e=>{let{request:t,fetchOptions:n,event:a,plugins:i=[]}=e;if("string"===typeof t&&(t=new Request(t)),a instanceof FetchEvent&&a.preloadResponse){const e=await a.preloadResponse;if(e)return e}const o=r.R.filter(i,"fetchDidFail"),c=o.length>0?t.clone():null;try{for(const e of i)if("requestWillFetch"in e){const n=e.requestWillFetch,s=t.clone();t=await n.call(e,{request:s,event:a})}}catch(h){throw new s.V("plugin-error-request-will-fetch",{thrownError:h})}const l=t.clone();try{let e;e="navigate"===t.mode?await fetch(t):await fetch(t,n);for(const t of i)"fetchDidSucceed"in t&&(e=await t.fetchDidSucceed.call(t,{event:a,request:l,response:e}));return e}catch(u){0;for(const e of o)await e.fetchDidFail.call(e,{error:u,event:a,originalRequest:c.clone(),request:l.clone()});throw u}}}},510:(e,t,n)=>{n.d(t,{C:()=>s});n(618);const s=e=>new URL(String(e),location.href).href.replace(new RegExp("^".concat(location.origin)),"")},69:(e,t,n)=>{n.d(t,{k:()=>s});n(618);const s=null},618:()=>{try{self["workbox:core:5.1.4"]&&_()}catch(e){}},677:(e,t,n)=>{n.d(t,{f:()=>s});n(618);const s=new Set},28:(e,t,n)=>{n.d(t,{R:()=>s});n(618);const s={filter:(e,t)=>e.filter((e=>t in e))}},328:()=>{try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}},456:(e,t,n)=>{n.r(t),n.d(t,{CacheExpiration:()=>u,ExpirationPlugin:()=>m});n(858);const s=function(e){let t=e;for(var n=arguments.length,s=new Array(n>1?n-1:0),r=1;r<n;r++)s[r-1]=arguments[r];return s.length>0&&(t+=" :: ".concat(JSON.stringify(s))),t};class r extends Error{constructor(e,t){super(s(e,t)),this.name=e,this.details=t}}function a(e){e.then((()=>{}))}class i{constructor(e,t){let{onupgradeneeded:n,onversionchange:s}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this._db=null,this._name=e,this._version=t,this._onupgradeneeded=n,this._onversionchange=s||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise(((e,t)=>{let n=!1;setTimeout((()=>{n=!0,t(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const s=indexedDB.open(this._name,this._version);s.onerror=()=>t(s.error),s.onupgradeneeded=e=>{n?(s.transaction.abort(),s.result.close()):"function"===typeof this._onupgradeneeded&&this._onupgradeneeded(e)},s.onsuccess=()=>{const t=s.result;n?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}})),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,n){return await this.getAllMatching(e,{query:t,count:n})}async getAllKeys(e,t,n){return(await this.getAllMatching(e,{query:t,count:n,includeKeys:!0})).map((e=>e.key))}async getAllMatching(e){let{index:t,query:n=null,direction:s="next",count:r,includeKeys:a=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.transaction([e],"readonly",((i,o)=>{const c=i.objectStore(e),l=t?c.index(t):c,h=[],u=l.openCursor(n,s);u.onsuccess=()=>{const e=u.result;e?(h.push(a?e:e.value),r&&h.length>=r?o(h):e.continue()):o(h)}}))}async transaction(e,t,n){return await this.open(),await new Promise(((s,r)=>{const a=this._db.transaction(e,t);a.onabort=()=>r(a.error),a.oncomplete=()=>s(),n(a,(e=>s(e)))}))}async _call(e,t,n){for(var s=arguments.length,r=new Array(s>3?s-3:0),a=3;a<s;a++)r[a-3]=arguments[a];return await this.transaction([t],n,((n,s)=>{const a=n.objectStore(t),i=a[e].apply(a,r);i.onsuccess=()=>s(i.result)}))}close(){this._db&&(this._db.close(),this._db=null)}}i.prototype.OPEN_TIMEOUT=2e3;const o={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[w,y]of Object.entries(o))for(const e of y)e in IDBObjectStore.prototype&&(i.prototype[e]=async function(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),r=1;r<n;r++)s[r-1]=arguments[r];return await this._call(e,t,w,...s)});n(404);const c="cache-entries",l=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class h{constructor(e){this._cacheName=e,this._db=new i("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore(c,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise(((t,n)=>{const s=indexedDB.deleteDatabase(e);s.onerror=()=>{n(s.error)},s.onblocked=()=>{n(new Error("Delete blocked"))},s.onsuccess=()=>{t()}}))})(this._cacheName)}async setTimestamp(e,t){const n={url:e=l(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put(c,n)}async getTimestamp(e){return(await this._db.get(c,this._getId(e))).timestamp}async expireEntries(e,t){const n=await this._db.transaction(c,"readwrite",((n,s)=>{const r=n.objectStore(c).index("timestamp").openCursor(null,"prev"),a=[];let i=0;r.onsuccess=()=>{const n=r.result;if(n){const s=n.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&i>=t?a.push(n.value):i++),n.continue()}else s(a)}})),s=[];for(const r of n)await this._db.delete(c,r.id),s.push(r.url);return s}_getId(e){return this._cacheName+"|"+l(e)}}class u{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._cacheName=e,this._timestampModel=new h(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),n=await self.caches.open(this._cacheName);for(const s of t)await n.delete(s);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,a(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}const d={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},p=e=>[d.prefix,e,d.suffix].filter((e=>e&&e.length>0)).join("-"),f=e=>e||p(d.runtime),g=new Set;class m{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var t;this.cachedResponseWillBeUsed=async e=>{let{event:t,request:n,cacheName:s,cachedResponse:r}=e;if(!r)return null;const i=this._isResponseDateFresh(r),o=this._getCacheExpiration(s);a(o.expireEntries());const c=o.updateTimestamp(n.url);if(t)try{t.waitUntil(c)}catch(l){0}return i?r:null},this.cacheDidUpdate=async e=>{let{cacheName:t,request:n}=e;const s=this._getCacheExpiration(t);await s.updateTimestamp(n.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),g.add(t))}_getCacheExpiration(e){if(e===f())throw new r("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new u(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),n=new Date(t).getTime();return isNaN(n)?null:n}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}},769:(e,t,n)=>{n.r(t),n.d(t,{PrecacheController:()=>v,addPlugins:()=>a,addRoute:()=>U,cleanupOutdatedCaches:()=>E,createHandler:()=>T,createHandlerBoundToURL:()=>C,getCacheKeyForURL:()=>S,matchPrecache:()=>k,precache:()=>P,precacheAndRoute:()=>K});n(362);const s=[],r={get:()=>s,add(e){s.push(...e)}};function a(e){r.add(e)}n(272);const i={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},o=e=>[i.prefix,e,i.suffix].filter((e=>e&&e.length>0)).join("-"),c={updateDetails:e=>{(e=>{for(const t of Object.keys(i))e(t)})((t=>{"string"===typeof e[t]&&(i[t]=e[t])}))},getGoogleAnalyticsName:e=>e||o(i.googleAnalytics),getPrecacheName:e=>e||o(i.precache),getPrefix:()=>i.prefix,getRuntimeName:e=>e||o(i.runtime),getSuffix:()=>i.suffix},l=function(e){let t=e;for(var n=arguments.length,s=new Array(n>1?n-1:0),r=1;r<n;r++)s[r-1]=arguments[r];return s.length>0&&(t+=" :: ".concat(JSON.stringify(s))),t};class h extends Error{constructor(e,t){super(l(e,t)),this.name=e,this.details=t}}const u=new Set;const d=(e,t)=>e.filter((e=>t in e)),p=async e=>{let{request:t,mode:n,plugins:s=[]}=e;const r=d(s,"cacheKeyWillBeUsed");let a=t;for(const i of r)a=await i.cacheKeyWillBeUsed.call(i,{mode:n,request:a}),"string"===typeof a&&(a=new Request(a));return a},f=async e=>{let{cacheName:t,request:n,event:s,matchOptions:r,plugins:a=[]}=e;const i=await self.caches.open(t),o=await p({plugins:a,request:n,mode:"read"});let c=await i.match(o,r);for(const l of a)if("cachedResponseWillBeUsed"in l){const e=l.cachedResponseWillBeUsed;c=await e.call(l,{cacheName:t,event:s,matchOptions:r,cachedResponse:c,request:o})}return c},g=async e=>{let{cacheName:t,request:n,response:s,event:r,plugins:a=[],matchOptions:i}=e;const o=await p({plugins:a,request:n,mode:"write"});if(!s)throw new h("cache-put-with-no-response",{url:(c=o.url,new URL(String(c),location.href).href.replace(new RegExp("^".concat(location.origin)),""))});var c;const l=await(async e=>{let{request:t,response:n,event:s,plugins:r=[]}=e,a=n,i=!1;for(const o of r)if("cacheWillUpdate"in o){i=!0;const e=o.cacheWillUpdate;if(a=await e.call(o,{request:t,response:a,event:s}),!a)break}return i||(a=a&&200===a.status?a:void 0),a||null})({event:r,plugins:a,response:s,request:o});if(!l)return void 0;const g=await self.caches.open(t),m=d(a,"cacheDidUpdate"),w=m.length>0?await f({cacheName:t,matchOptions:i,request:o}):null;try{await g.put(o,l)}catch(y){throw"QuotaExceededError"===y.name&&await async function(){for(const e of u)await e()}(),y}for(const h of m)await h.cacheDidUpdate.call(h,{cacheName:t,event:r,oldResponse:w,newResponse:l,request:o})},m=async e=>{let{request:t,fetchOptions:n,event:s,plugins:r=[]}=e;if("string"===typeof t&&(t=new Request(t)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=d(r,"fetchDidFail"),i=a.length>0?t.clone():null;try{for(const e of r)if("requestWillFetch"in e){const n=e.requestWillFetch,r=t.clone();t=await n.call(e,{request:r,event:s})}}catch(c){throw new h("plugin-error-request-will-fetch",{thrownError:c})}const o=t.clone();try{let e;e="navigate"===t.mode?await fetch(t):await fetch(t,n);for(const t of r)"fetchDidSucceed"in t&&(e=await t.fetchDidSucceed.call(t,{event:s,request:o,response:e}));return e}catch(l){0;for(const e of a)await e.fetchDidFail.call(e,{error:l,event:s,originalRequest:i.clone(),request:o.clone()});throw l}};let w;async function y(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=function(){if(void 0===w){const t=new Response("");if("body"in t)try{new Response(t.body),w=!0}catch(e){w=!1}w=!1}return w}()?n.body:await n.blob();return new Response(a,r)}function _(e){if(!e)throw new h("add-to-cache-list-unexpected-type",{entry:e});if("string"===typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new h("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class v{constructor(e){this._cacheName=c.getPrecacheName(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"===typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=_(n),r="string"!==typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!==typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e="Workbox is precaching URLs without revision "+"info: ".concat(t.join(", "),"\nThis is generally NOT safe. ")+"Learn more at https://bit.ly/wb-precache";console.warn(e)}}}async install(){let{event:e,plugins:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=[],s=[],r=await self.caches.open(this._cacheName),a=await r.keys(),i=new Set(a.map((e=>e.url)));for(const[c,l]of this._urlsToCacheKeys)i.has(l)?s.push(c):n.push({cacheKey:l,url:c});const o=n.map((n=>{let{cacheKey:s,url:r}=n;const a=this._cacheKeysToIntegrities.get(s),i=this._urlsToCacheModes.get(r);return this._addURLToCache({cacheKey:s,cacheMode:i,event:e,integrity:a,plugins:t,url:r})}));await Promise.all(o);return{updatedURLs:n.map((e=>e.url)),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache(e){let{cacheKey:t,url:n,cacheMode:s,event:r,plugins:a,integrity:i}=e;const o=new Request(n,{integrity:i,cache:s,credentials:"same-origin"});let c,l=await m({event:r,plugins:a,request:o});for(const h of a||[])"cacheWillUpdate"in h&&(c=h);if(!(c?await c.cacheWillUpdate({event:r,request:o,response:l}):l.status<400))throw new h("bad-precaching-response",{url:n,status:l.status});l.redirected&&(l=await y(l)),await g({event:r,plugins:a,response:l,request:t===n?o:new Request(t),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return async t=>{let{request:n}=t;try{const e=await this.matchPrecache(n);if(e)return e;throw new h("missing-precache-entry",{cacheName:this._cacheName,url:n instanceof Request?n.url:n})}catch(s){if(e)return fetch(n);throw s}}}createHandlerBoundToURL(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.getCacheKeyForURL(e))throw new h("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}let x;const R=()=>(x||(x=new v),x);const q=(e,t)=>{const n=R().getURLsToCacheKeys();for(const s of function(e){let{ignoreURLParametersMatching:t,directoryIndex:n,cleanURLs:s,urlManipulation:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(const n of[...e.searchParams.keys()])t.some((e=>e.test(n)))&&e.searchParams.delete(n);return e}(a,t);if(yield i.href,n&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=n,yield e.href}if(s){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:a});for(const t of e)yield t.href}}()}(e,t)){const e=n.get(s);if(e)return e}},b=function(){let{ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=c.getPrecacheName();self.addEventListener("fetch",(a=>{const i=q(a.request.url,{cleanURLs:n,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:s});if(!i)return void 0;let o=self.caches.open(r).then((e=>e.match(i))).then((e=>e||fetch(i)));a.respondWith(o)}))};let N=!1;function U(e){N||(b(e),N=!0)}const O=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-precache-";const n=(await self.caches.keys()).filter((n=>n.includes(t)&&n.includes(self.registration.scope)&&n!==e));return await Promise.all(n.map((e=>self.caches.delete(e)))),n};function E(){self.addEventListener("activate",(e=>{const t=c.getPrecacheName();e.waitUntil(O(t).then((e=>{0})))}))}function T(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return R().createHandler(e)}function C(e){return R().createHandlerBoundToURL(e)}function S(e){return R().getCacheKeyForURL(e)}function k(e){return R().matchPrecache(e)}const A=e=>{const t=R(),n=r.get();e.waitUntil(t.install({event:e,plugins:n}).catch((e=>{throw e})))},L=e=>{const t=R();e.waitUntil(t.activate())};function P(e){R().addToCacheList(e),e.length>0&&(self.addEventListener("install",A),self.addEventListener("activate",L))}function K(e,t){P(e),U(t)}},385:(e,t,n)=>{n.r(t),n.d(t,{NavigationRoute:()=>o,RegExpRoute:()=>c,Route:()=>i,Router:()=>l,registerRoute:()=>d,setCatchHandler:()=>p,setDefaultHandler:()=>f});n(830);const s=function(e){let t=e;for(var n=arguments.length,s=new Array(n>1?n-1:0),r=1;r<n;r++)s[r-1]=arguments[r];return s.length>0&&(t+=" :: ".concat(JSON.stringify(s))),t};class r extends Error{constructor(e,t){super(s(e,t)),this.name=e,this.details=t}}n(161);const a=e=>e&&"object"===typeof e?e:{handle:e};class i{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";this.handler=a(t),this.match=e,this.method=n}}class o extends i{constructor(e){let{allowlist:t=[/./],denylist:n=[]}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super((e=>this._match(e)),e),this._allowlist=t,this._denylist=n}_match(e){let{url:t,request:n}=e;if(n&&"navigate"!==n.mode)return!1;const s=t.pathname+t.search;for(const r of this._denylist)if(r.test(s))return!1;return!!this._allowlist.some((e=>e.test(s)))}}class c extends i{constructor(e,t,n){super((t=>{let{url:n}=t;const s=e.exec(n.href);if(s&&(n.origin===location.origin||0===s.index))return s.slice(1)}),t,n)}}class l{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const n=Promise.all(t.urlsToCache.map((e=>{"string"===typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})})));e.waitUntil(n),e.ports&&e.ports[0]&&n.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest(e){let{request:t,event:n}=e;const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const{params:r,route:a}=this.findMatchingRoute({url:s,request:t,event:n});let i=a&&a.handler;if(!i&&this._defaultHandler&&(i=this._defaultHandler),!i)return void 0;let o;try{o=i.handle({url:s,request:t,event:n,params:r})}catch(c){o=Promise.reject(c)}return o instanceof Promise&&this._catchHandler&&(o=o.catch((e=>this._catchHandler.handle({url:s,request:t,event:n})))),o}findMatchingRoute(e){let{url:t,request:n,event:s}=e;const r=this._routes.get(n.method)||[];for(const a of r){let e;const r=a.match({url:t,request:n,event:s});if(r)return e=r,(Array.isArray(r)&&0===r.length||r.constructor===Object&&0===Object.keys(r).length||"boolean"===typeof r)&&(e=void 0),{route:a,params:e}}return{}}setDefaultHandler(e){this._defaultHandler=a(e)}setCatchHandler(e){this._catchHandler=a(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new r("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new r("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let h;const u=()=>(h||(h=new l,h.addFetchListener(),h.addCacheListener()),h);function d(e,t,n){let s;if("string"===typeof e){const r=new URL(e,location.href);0;s=new i((e=>{let{url:t}=e;return t.href===r.href}),t,n)}else if(e instanceof RegExp)s=new c(e,t,n);else if("function"===typeof e)s=new i(e,t,n);else{if(!(e instanceof i))throw new r("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});s=e}return u().registerRoute(s),s}function p(e){u().setCatchHandler(e)}function f(e){u().setDefaultHandler(e)}},952:(e,t,n)=>{n.r(t),n.d(t,{_private:()=>s,cacheNames:()=>U,clientsClaim:()=>E,copyResponse:()=>O,registerQuotaErrorCallback:()=>o,setCacheNameDetails:()=>T,skipWaiting:()=>C});var s={};n.r(s),n.d(s,{DBWrapper:()=>g,Deferred:()=>w,WorkboxError:()=>N.V,assert:()=>a.h,cacheNames:()=>c.x,cacheWrapper:()=>l.g,canConstructReadableStream:()=>d,canConstructResponseFromBodyStream:()=>p,deleteDatabase:()=>y,dontWaitFor:()=>f,executeQuotaErrorCallbacks:()=>_.Y,fetchWrapper:()=>v.h,getFriendlyURL:()=>x.C,logger:()=>r.k,resultingClientExists:()=>b,timeout:()=>R});var r=n(69),a=n(576),i=n(677);n(618);function o(e){i.f.add(e)}var c=n(191),l=n(448);let h,u;function d(){if(void 0===h)try{new ReadableStream({start(){}}),h=!0}catch(e){h=!1}return h}function p(){if(void 0===u){const t=new Response("");if("body"in t)try{new Response(t.body),u=!0}catch(e){u=!1}u=!1}return u}function f(e){e.then((()=>{}))}class g{constructor(e,t){let{onupgradeneeded:n,onversionchange:s}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this._db=null,this._name=e,this._version=t,this._onupgradeneeded=n,this._onversionchange=s||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise(((e,t)=>{let n=!1;setTimeout((()=>{n=!0,t(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const s=indexedDB.open(this._name,this._version);s.onerror=()=>t(s.error),s.onupgradeneeded=e=>{n?(s.transaction.abort(),s.result.close()):"function"===typeof this._onupgradeneeded&&this._onupgradeneeded(e)},s.onsuccess=()=>{const t=s.result;n?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}})),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,n){return await this.getAllMatching(e,{query:t,count:n})}async getAllKeys(e,t,n){return(await this.getAllMatching(e,{query:t,count:n,includeKeys:!0})).map((e=>e.key))}async getAllMatching(e){let{index:t,query:n=null,direction:s="next",count:r,includeKeys:a=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.transaction([e],"readonly",((i,o)=>{const c=i.objectStore(e),l=t?c.index(t):c,h=[],u=l.openCursor(n,s);u.onsuccess=()=>{const e=u.result;e?(h.push(a?e:e.value),r&&h.length>=r?o(h):e.continue()):o(h)}}))}async transaction(e,t,n){return await this.open(),await new Promise(((s,r)=>{const a=this._db.transaction(e,t);a.onabort=()=>r(a.error),a.oncomplete=()=>s(),n(a,(e=>s(e)))}))}async _call(e,t,n){for(var s=arguments.length,r=new Array(s>3?s-3:0),a=3;a<s;a++)r[a-3]=arguments[a];return await this.transaction([t],n,((n,s)=>{const a=n.objectStore(t),i=a[e].apply(a,r);i.onsuccess=()=>s(i.result)}))}close(){this._db&&(this._db.close(),this._db=null)}}g.prototype.OPEN_TIMEOUT=2e3;const m={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[S,k]of Object.entries(m))for(const e of k)e in IDBObjectStore.prototype&&(g.prototype[e]=async function(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),r=1;r<n;r++)s[r-1]=arguments[r];return await this._call(e,t,S,...s)});class w{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const y=async e=>{await new Promise(((t,n)=>{const s=indexedDB.deleteDatabase(e);s.onerror=()=>{n(s.error)},s.onblocked=()=>{n(new Error("Delete blocked"))},s.onsuccess=()=>{t()}}))};var _=n(938),v=n(629),x=n(510);function R(e){return new Promise((t=>setTimeout(t,e)))}const q=2e3;async function b(e){if(!e)return;let t=await self.clients.matchAll({type:"window"});const n=new Set(t.map((e=>e.id)));let s;const r=performance.now();for(;performance.now()-r<q&&(t=await self.clients.matchAll({type:"window"}),s=t.find((t=>e?t.id===e:!n.has(t.id))),!s);)await R(100);return s}var N=n(837);const U={get googleAnalytics(){return c.x.getGoogleAnalyticsName()},get precache(){return c.x.getPrecacheName()},get prefix(){return c.x.getPrefix()},get runtime(){return c.x.getRuntimeName()},get suffix(){return c.x.getSuffix()}};async function O(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=p()?n.body:await n.blob();return new Response(a,r)}function E(){self.addEventListener("activate",(()=>self.clients.claim()))}function T(e){c.x.updateDetails(e)}function C(){self.addEventListener("install",(()=>self.skipWaiting()))}},646:(e,t,n)=>{n.r(t),n.d(t,{CacheFirst:()=>o,CacheOnly:()=>c,NetworkFirst:()=>h,NetworkOnly:()=>u,StaleWhileRevalidate:()=>d});n(576);var s=n(191),r=n(448),a=n(629),i=(n(510),n(69),n(837));n(328);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._cacheName=s.x.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle(e){let{event:t,request:n}=e;"string"===typeof n&&(n=new Request(n));let s,a=await r.g.match({cacheName:this._cacheName,request:n,event:t,matchOptions:this._matchOptions,plugins:this._plugins});if(a)0;else{0;try{a=await this._getFromNetwork(n,t)}catch(o){s=o}0}if(!a)throw new i.V("no-response",{url:n.url,error:s});return a}async _getFromNetwork(e,t){const n=await a.h.fetch({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),s=n.clone(),i=r.g.put({cacheName:this._cacheName,request:e,response:s,event:t,plugins:this._plugins});if(t)try{t.waitUntil(i)}catch(o){0}return n}}class c{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._cacheName=s.x.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],this._matchOptions=e.matchOptions}async handle(e){let{event:t,request:n}=e;"string"===typeof n&&(n=new Request(n));const s=await r.g.match({cacheName:this._cacheName,request:n,event:t,matchOptions:this._matchOptions,plugins:this._plugins});if(!s)throw new i.V("no-response",{url:n.url});return s}}const l={cacheWillUpdate:async e=>{let{response:t}=e;return 200===t.status||0===t.status?t:null}};class h{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._cacheName=s.x.getRuntimeName(e.cacheName),e.plugins){const t=e.plugins.some((e=>!!e.cacheWillUpdate));this._plugins=t?e.plugins:[l,...e.plugins]}else this._plugins=[l];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle(e){let{event:t,request:n}=e;const s=[];"string"===typeof n&&(n=new Request(n));const r=[];let a;if(this._networkTimeoutSeconds){const{id:e,promise:i}=this._getTimeoutPromise({request:n,event:t,logs:s});a=e,r.push(i)}const o=this._getNetworkPromise({timeoutId:a,request:n,event:t,logs:s});r.push(o);let c=await Promise.race(r);if(c||(c=await o),!c)throw new i.V("no-response",{url:n.url});return c}_getTimeoutPromise(e){let t,{request:n,logs:s,event:r}=e;return{promise:new Promise((e=>{t=setTimeout((async()=>{e(await this._respondFromCache({request:n,event:r}))}),1e3*this._networkTimeoutSeconds)})),id:t}}async _getNetworkPromise(e){let t,n,{timeoutId:s,request:i,logs:o,event:c}=e;try{n=await a.h.fetch({request:i,event:c,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(l){t=l}if(s&&clearTimeout(s),t||!n)n=await this._respondFromCache({request:i,event:c});else{const e=n.clone(),t=r.g.put({cacheName:this._cacheName,request:i,response:e,event:c,plugins:this._plugins});if(c)try{c.waitUntil(t)}catch(l){0}}return n}_respondFromCache(e){let{event:t,request:n}=e;return r.g.match({cacheName:this._cacheName,request:n,event:t,matchOptions:this._matchOptions,plugins:this._plugins})}}class u{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions}async handle(e){let t,n,{event:s,request:r}=e;"string"===typeof r&&(r=new Request(r));try{n=await a.h.fetch({request:r,event:s,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(o){t=o}if(!n)throw new i.V("no-response",{url:r.url,error:t});return n}}class d{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._cacheName=s.x.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],e.plugins){const t=e.plugins.some((e=>!!e.cacheWillUpdate));this._plugins=t?e.plugins:[l,...e.plugins]}else this._plugins=[l];this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle(e){let{event:t,request:n}=e;"string"===typeof n&&(n=new Request(n));const s=this._getFromNetwork({request:n,event:t});let a,o=await r.g.match({cacheName:this._cacheName,request:n,event:t,matchOptions:this._matchOptions,plugins:this._plugins});if(o){if(t)try{t.waitUntil(s)}catch(a){0}}else{0;try{o=await s}catch(c){a=c}}if(!o)throw new i.V("no-response",{url:n.url,error:a});return o}async _getFromNetwork(e){let{request:t,event:n}=e;const s=await a.h.fetch({request:t,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins}),i=r.g.put({cacheName:this._cacheName,request:t,response:s.clone(),event:n,plugins:this._plugins});if(n)try{n.waitUntil(i)}catch(o){0}return s}}}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n.S={};var e={},t={};n.I=(s,r)=>{r||(r=[]);var a=t[s];if(a||(a=t[s]={}),!(r.indexOf(a)>=0)){if(r.push(a),e[s])return e[s];n.o(n.S,s)||(n.S[s]={});var i=n.S[s],o="core",c=(e,t,n,s)=>{var r=i[e]=i[e]||{},a=r[t];(!a||!a.loaded&&(!s!=!a.eager?s:o>a.from))&&(r[t]={get:n,from:o,eager:!!s})},l=[];if("default"===s)c("workbox-core","5.1.4",(()=>()=>n(952))),c("workbox-expiration","5.1.4",(()=>()=>n(456))),c("workbox-precaching","5.1.4",(()=>()=>n(769))),c("workbox-routing","5.1.4",(()=>()=>n(385))),c("workbox-strategies","5.1.4",(()=>()=>n(646)));return l.length?e[s]=Promise.all(l).then((()=>e[s]=1)):e[s]=1}}})(),(()=>{var e=n(952),t=n(456),s=n(769),r=n(385),a=n(646);(0,e.clientsClaim)(),(0,s.precacheAndRoute)([{'revision':'f5db5479bbbb88c0b53e19b9fc5abda1','url':'index.html'},{'revision':'525e4707ef282e7a4ab97936cf31496b','url':'moduleEntry.js'},{'revision':null,'url':'static/css/2828.8cc42d01.chunk.css'},{'revision':null,'url':'static/css/5498.71269276.chunk.css'},{'revision':null,'url':'static/js/1164.e75a7205.chunk.js'},{'revision':null,'url':'static/js/1388.e41c553e.chunk.js'},{'revision':null,'url':'static/js/1432.ab714c6f.chunk.js'},{'revision':null,'url':'static/js/2081.d04cabc8.chunk.js'},{'revision':null,'url':'static/js/2426.5a607195.chunk.js'},{'revision':null,'url':'static/js/2796.f2232f27.chunk.js'},{'revision':null,'url':'static/js/2818.ba2547c2.chunk.js'},{'revision':null,'url':'static/js/2828.c88259e5.chunk.js'},{'revision':null,'url':'static/js/3119.9d726050.chunk.js'},{'revision':null,'url':'static/js/312.ba9ef766.chunk.js'},{'revision':null,'url':'static/js/3162.0c2b872d.chunk.js'},{'revision':null,'url':'static/js/3359.8eb870dd.chunk.js'},{'revision':null,'url':'static/js/3496.4d2de183.chunk.js'},{'revision':null,'url':'static/js/3545.3d28c377.chunk.js'},{'revision':null,'url':'static/js/3877.48afdb6b.chunk.js'},{'revision':null,'url':'static/js/4055.0c08d045.chunk.js'},{'revision':null,'url':'static/js/4149.d525db5d.chunk.js'},{'revision':null,'url':'static/js/4242.455977d0.chunk.js'},{'revision':null,'url':'static/js/4296.cd98c148.chunk.js'},{'revision':null,'url':'static/js/4298.70d2e96f.chunk.js'},{'revision':null,'url':'static/js/4398.37e57aa6.chunk.js'},{'revision':null,'url':'static/js/4681.8dc88a1d.chunk.js'},{'revision':null,'url':'static/js/4815.025db873.chunk.js'},{'revision':null,'url':'static/js/5013.5ad9cc5e.chunk.js'},{'revision':null,'url':'static/js/5498.5b3ae2e3.chunk.js'},{'revision':null,'url':'static/js/565.7aed0209.chunk.js'},{'revision':null,'url':'static/js/5724.67a4d3a1.chunk.js'},{'revision':null,'url':'static/js/6210.9a95028d.chunk.js'},{'revision':null,'url':'static/js/6365.d73663db.chunk.js'},{'revision':null,'url':'static/js/6375.98c795f6.chunk.js'},{'revision':null,'url':'static/js/663.46b85072.chunk.js'},{'revision':null,'url':'static/js/7066.0f2459ed.chunk.js'},{'revision':null,'url':'static/js/7186.06254d37.chunk.js'},{'revision':null,'url':'static/js/7391.10c7dad7.chunk.js'},{'revision':null,'url':'static/js/7411.381a1ca0.chunk.js'},{'revision':null,'url':'static/js/7509.14de133b.chunk.js'},{'revision':null,'url':'static/js/7921.cd0c4905.chunk.js'},{'revision':null,'url':'static/js/7943.d41b12bc.chunk.js'},{'revision':null,'url':'static/js/8037.9770258a.chunk.js'},{'revision':null,'url':'static/js/8278.5ed40ed2.chunk.js'},{'revision':null,'url':'static/js/8435.6186b2ed.chunk.js'},{'revision':null,'url':'static/js/8493.e966ed1d.chunk.js'},{'revision':null,'url':'static/js/8927.e97141c2.chunk.js'},{'revision':null,'url':'static/js/9430.89e7e812.chunk.js'},{'revision':null,'url':'static/js/9481.b77025b9.chunk.js'},{'revision':null,'url':'static/js/9560.11813859.chunk.js'},{'revision':null,'url':'static/js/9667.86524330.chunk.js'},{'revision':null,'url':'static/js/9677.0ae6d697.chunk.js'},{'revision':null,'url':'static/js/969.1b434d8d.chunk.js'},{'revision':null,'url':'static/js/9865.2c5e6d6b.chunk.js'},{'revision':null,'url':'static/js/main.2e45c5cf.js'},{'revision':null,'url':'static/media/Flash.84b6e8c9c6d9351810c1.png'},{'revision':null,'url':'static/media/TSHeader.01ef9acfb3a97c18e30b.png'},{'revision':null,'url':'static/media/getFetch.c780682470504fffbd04.cjs'}]);const i=new RegExp("/[^/?]+\\.[^/]+$");(0,r.registerRoute)((e=>{let{request:t,url:n}=e;return"navigate"===t.mode&&(!n.pathname.startsWith("/_")&&!n.pathname.match(i))}),(0,s.createHandlerBoundToURL)("/modules/core/index.html")),(0,r.registerRoute)((e=>{let{url:t}=e;return t.origin===self.location.origin&&t.pathname.endsWith(".png")}),new a.StaleWhileRevalidate({cacheName:"images",plugins:[new t.ExpirationPlugin({maxEntries:50})]})),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}))})()})();
//# sourceMappingURL=service-worker.js.map