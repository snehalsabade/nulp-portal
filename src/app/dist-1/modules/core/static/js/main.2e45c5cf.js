(()=>{var e={66706:(e,t,r)=>{fetch("".concat("/modules/core","/modules.json")).then((async e=>{const t=await e.json();window.appModules=t,Promise.all([r.e(2950),r.e(2302),r.e(2181),r.e(565),r.e(4757),r.e(2828)]).then(r.bind(r,35011))}))}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,r.c=t,r.amdO={},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(a,n){if(1&n&&(a=this(a)),8&n)return a;if("object"===typeof a&&a){if(4&n&&a.__esModule)return a;if(16&n&&"function"===typeof a.then)return a}var o=Object.create(null);r.r(o);var l={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&a;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>l[e]=()=>a[e]));return l.default=()=>a,r.d(o,l),o}})(),r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,a)=>(r.f[a](e,t),t)),[])),r.u=e=>"static/js/"+e+"."+{565:"7aed0209",663:"46b85072",969:"1b434d8d",1388:"e41c553e",1432:"ab714c6f",2081:"d04cabc8",2181:"273557fc",2302:"da3bd706",2342:"e5371505",2426:"5a607195",2796:"f2232f27",2818:"ba2547c2",2828:"c88259e5",2950:"466e84fc",3119:"9d726050",3162:"0c2b872d",3359:"8eb870dd",3496:"4d2de183",3545:"3d28c377",3877:"48afdb6b",4014:"85b2c6e2",4055:"0c08d045",4149:"d525db5d",4242:"455977d0",4296:"cd98c148",4298:"70d2e96f",4398:"37e57aa6",4681:"8dc88a1d",4757:"4e540f29",5013:"5ad9cc5e",5724:"67a4d3a1",6059:"355c33a4",6365:"d73663db",6927:"c04cb6ea",7066:"0f2459ed",7391:"10c7dad7",7411:"381a1ca0",7921:"cd0c4905",7943:"d41b12bc",8278:"5ed40ed2",8435:"6186b2ed",8493:"e966ed1d",8579:"d434bfca",9147:"177f8bbb",9168:"dd23a4a3",9430:"89e7e812",9560:"11813859",9667:"86524330",9677:"0ae6d697",9865:"2c5e6d6b"}[e]+".chunk.js",r.miniCssF=e=>"static/css/"+e+".8cc42d01.chunk.css",r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="core:";r.l=(a,n,o,l)=>{if(e[a])e[a].push(n);else{var i,c;if(void 0!==o)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var u=f[s];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+o){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+o),i.src=a),e[a]=[n];var d=(t,r)=>{i.onerror=i.onload=null,clearTimeout(h);var n=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{r.S={};var e={},t={};r.I=(a,n)=>{n||(n=[]);var o=t[a];if(o||(o=t[a]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[a])return e[a];r.o(r.S,a)||(r.S[a]={});var l=r.S[a],i="core",c=(e,t,r,a)=>{var n=l[e]=l[e]||{},o=n[t];(!o||!o.loaded&&(!a!=!o.eager?a:i>o.from))&&(n[t]={get:r,from:i,eager:!!a})},f=[];if("default"===a)c("@shiksha/common-lib","1.0.0",(()=>Promise.all([r.e(2796),r.e(663),r.e(8579),r.e(4014),r.e(4149)]).then((()=>()=>r(4149))))),c("axios","0.24.0",(()=>r.e(7066).then((()=>()=>r(27066))))),c("i18next-http-backend","1.4.0",(()=>r.e(9667).then((()=>()=>r(29667))))),c("i18next","21.6.14",(()=>r.e(3119).then((()=>()=>r(53119))))),c("moment","2.29.1",(()=>r.e(2426).then((()=>()=>r(92426))))),c("native-base","3.4.28",(()=>Promise.all([r.e(5013),r.e(1388),r.e(8435),r.e(7391),r.e(2818),r.e(1432),r.e(8579),r.e(6927),r.e(9147),r.e(4014),r.e(6059)]).then((()=>()=>r(51432))))),c("native-base","3.4.28",(()=>Promise.all([r.e(5013),r.e(1388),r.e(2818),r.e(8278),r.e(2081),r.e(4398),r.e(2950),r.e(6927),r.e(2181),r.e(2342),r.e(4757),r.e(3545)]).then((()=>()=>r(94398))))),c("react-chartjs-2","4.3.1",(()=>Promise.all([r.e(2796),r.e(8579),r.e(3359)]).then((()=>()=>r(33359))))),c("react-dom","17.0.2",(()=>Promise.all([r.e(7943),r.e(8579)]).then((()=>()=>r(97943))))),c("react-dom","17.0.2",(()=>Promise.all([r.e(4242),r.e(2950)]).then((()=>()=>r(44242))))),c("react-i18next","11.15.6",(()=>Promise.all([r.e(6365),r.e(8579)]).then((()=>()=>r(76365))))),c("react-i18next","11.15.6",(()=>Promise.all([r.e(5724),r.e(2950)]).then((()=>()=>r(70663))))),c("react-native-safe-area-context","3.4.1",(()=>Promise.all([r.e(5013),r.e(8435),r.e(8579),r.e(7411)]).then((()=>()=>r(37411))))),c("react-native-safe-area-context","3.4.1",(()=>Promise.all([r.e(5013),r.e(8278),r.e(2950),r.e(3162)]).then((()=>()=>r(53162))))),c("react-native-web","0.17.7",(()=>Promise.all([r.e(5013),r.e(1388),r.e(8435),r.e(7391),r.e(4055),r.e(8579),r.e(6927),r.e(9147)]).then((()=>()=>r(44055))))),c("react-native-web","0.17.7",(()=>Promise.all([r.e(5013),r.e(1388),r.e(8278),r.e(2081),r.e(3877),r.e(2950),r.e(6927),r.e(2181),r.e(4296)]).then((()=>()=>r(83877))))),c("react-router-dom","6.22.0",(()=>Promise.all([r.e(8493),r.e(9677),r.e(8579),r.e(9147)]).then((()=>()=>r(9677))))),c("react-router-dom","6.22.0",(()=>Promise.all([r.e(8493),r.e(9865),r.e(2950),r.e(2181)]).then((()=>()=>r(99865))))),c("react","17.0.2",(()=>r.e(9430).then((()=>()=>r(69430))))),c("react","17.0.2",(()=>r.e(4681).then((()=>()=>r(54681))))),c("react","18.2.0",(()=>r.e(969).then((()=>()=>r(30969))))),c("web-vitals","0.2.4",(()=>r.e(7921).then((()=>()=>r(27921)))));return f.length?e[a]=Promise.all(f).then((()=>e[a]=1)):e[a]=1}}})(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../../"})(),(()=>{var e=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},t=(t,r)=>{t=e(t),r=e(r);for(var a=0;;){if(a>=t.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=t[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var l=r[a],i=(typeof l)[0];if(o!=i)return"o"==o&&"n"==i||"s"==i||"u"==o;if("o"!=o&&"u"!=o&&n!=l)return n<l;a++}},a=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,r+="u"==(typeof(i=e[o]))[0]?"-":(n>0?".":"")+(n=2,i);return r}var l=[];for(o=1;o<e.length;o++){var i=e[o];l.push(0===i?"not("+c()+")":1===i?"("+c()+" || "+c()+")":2===i?l.pop()+" "+l.pop():a(i))}return c();function c(){return l.pop().replace(/^\((.+)\)$/,"$1")}},n=(t,r)=>{if(0 in t){r=e(r);var a=t[0],o=a<0;o&&(a=-a-1);for(var l=0,i=1,c=!0;;i++,l++){var f,s,u=i<t.length?(typeof t[i])[0]:"";if(l>=r.length||"o"==(s=(typeof(f=r[l]))[0]))return!c||("u"==u?i>a&&!o:""==u!=o);if("u"==s){if(!c||"u"!=u)return!1}else if(c)if(u==s)if(i<=a){if(f!=t[i])return!1}else{if(o?f>t[i]:f<t[i])return!1;f!=t[i]&&(c=!1)}else if("s"!=u&&"n"!=u){if(o||i<=a)return!1;c=!1,i--}else{if(i<=a||s<u!=o)return!1;c=!1}else"s"!=u&&"n"!=u&&(c=!1,i--)}}var d=[],h=d.pop.bind(d);for(l=1;l<t.length;l++){var p=t[l];d.push(1==p?h()|h():2==p?h()&h():p?n(p,r):!h())}return!!h()},o=(e,r)=>{var a=e[r];return Object.keys(a).reduce(((e,r)=>!e||!a[e].loaded&&t(e,r)?r:e),0)},l=(e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+a(n)+")",i=(e,t,r,a)=>{var i=o(e,r);return n(a,i)||"undefined"!==typeof console&&console.warn&&console.warn(l(e,r,i,a)),f(e[r][i])},c=(e,r,a)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>n(a,r)&&(!e||t(e,r))?r:e),0))&&o[r]},f=e=>(e.loaded=1,e.get()),s=e=>function(t,a,n,o){var l=r.I(t);return l&&l.then?l.then(e.bind(e,t,r.S[t],a,n,o)):e(t,r.S[t],a,n,o)},u=s(((e,t,a,n,o)=>t&&r.o(t,a)?i(t,0,a,n):o())),d=s(((e,t,a,n,o)=>{var l=t&&r.o(t,a)&&c(t,a,n);return l?f(l):o()})),h={},p={92950:()=>u("default","react",[1,17,0,2],(()=>r.e(4681).then((()=>()=>r(54681))))),32302:()=>d("default","@shiksha/common-lib",[1,1,0,0],(()=>Promise.all([r.e(2796),r.e(663),r.e(8579),r.e(4014),r.e(4149)]).then((()=>()=>r(4149))))),12181:()=>u("default","react-dom",[1,17,0,2],(()=>r.e(4242).then((()=>()=>r(44242))))),64757:()=>d("default","native-base",[1,3,2,2],(()=>Promise.all([r.e(5013),r.e(1388),r.e(2818),r.e(8278),r.e(2081),r.e(4398),r.e(6927),r.e(2181),r.e(2342)]).then((()=>()=>r(94398))))),15378:()=>d("default","react-i18next",[1,11,15,3],(()=>r.e(5724).then((()=>()=>r(70663))))),86040:()=>d("default","react-router-dom",[1,6,1,1],(()=>Promise.all([r.e(8493),r.e(9865),r.e(2181)]).then((()=>()=>r(99865))))),68579:()=>u("default","react",[1,17,0,2],(()=>r.e(9430).then((()=>()=>r(69430))))),24850:()=>d("default","native-base",[1,3,2,2],(()=>Promise.all([r.e(5013),r.e(1388),r.e(8435),r.e(7391),r.e(2818),r.e(1432),r.e(6927),r.e(9147),r.e(6059)]).then((()=>()=>r(51432))))),37826:()=>d("default","react-native-web",[4,0,19,10],(()=>Promise.all([r.e(5013),r.e(1388),r.e(8435),r.e(7391),r.e(4055),r.e(6927),r.e(9147)]).then((()=>()=>r(44055))))),16107:()=>d("default","axios",[2,0,24,0],(()=>r.e(7066).then((()=>()=>r(27066))))),28146:()=>d("default","i18next",[1,21,6,7],(()=>r.e(3119).then((()=>()=>r(53119))))),34878:()=>d("default","moment",[1,2,29,1],(()=>r.e(2426).then((()=>()=>r(92426))))),48310:()=>d("default","react-chartjs-2",[1,4,3,1],(()=>r.e(3496).then((()=>()=>r(33359))))),69851:()=>d("default","i18next-http-backend",[1,1,4,0],(()=>r.e(9667).then((()=>()=>r(29667))))),71629:()=>d("default","react-router-dom",[1,6,1,1],(()=>Promise.all([r.e(8493),r.e(9677),r.e(9147)]).then((()=>()=>r(9677))))),94493:()=>d("default","react-i18next",[1,11,15,3],(()=>r.e(6365).then((()=>()=>r(76365))))),96927:()=>u("default","react",[1,17,0,2],(()=>r.e(969).then((()=>()=>r(30969))))),79147:()=>u("default","react-dom",[1,17,0,2],(()=>r.e(7943).then((()=>()=>r(97943))))),46059:()=>d("default","react-native-safe-area-context",[1,3,3,2],(()=>r.e(9560).then((()=>()=>r(37411))))),6346:()=>d("default","react-native-web",[4,0,19,10],(()=>r.e(3877).then((()=>()=>r(83877))))),44398:()=>d("default","react-native-safe-area-context",[1,3,3,2],(()=>r.e(4298).then((()=>()=>r(53162))))),39168:()=>d("default","web-vitals",[2,0,2,4],(()=>r.e(7921).then((()=>()=>r(27921)))))},m={2181:[12181],2302:[32302],2342:[6346,44398],2828:[15378,86040],2950:[92950],4014:[24850,37826],4149:[16107,28146,34878,48310,69851,71629,94493],4757:[64757],6059:[46059],6927:[96927],8579:[68579],9147:[79147],9168:[39168]};r.f.consumes=(e,t)=>{r.o(m,e)&&m[e].forEach((e=>{if(r.o(h,e))return t.push(h[e]);var a=t=>{h[e]=0,r.m[e]=a=>{delete r.c[e],a.exports=t()}},n=t=>{delete h[e],r.m[e]=a=>{throw delete r.c[e],t}};try{var o=p[e]();o.then?t.push(h[e]=o.then(a).catch(n)):a(o)}catch(l){n(l)}}))}})(),(()=>{var e=e=>new Promise(((t,a)=>{var n=r.miniCssF(e),o=r.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=(l=r[a]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(n===e||n===t))return l}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var l;if((n=(l=o[a]).getAttribute("data-href"))===e||n===t)return l}})(n,o))return t();((e,t,r,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)r();else{var l=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=l,c.request=i,n.parentNode.removeChild(n),a(c)}},n.href=t,document.head.appendChild(n)})(e,o,t,a)})),t={179:0};r.f.miniCss=(r,a)=>{t[r]?a.push(t[r]):0!==t[r]&&{2828:1}[r]&&a.push(t[r]=e(r).then((()=>{t[r]=0}),(e=>{throw delete t[r],e})))}})(),(()=>{var e={179:0};r.f.j=(t,a)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else if(/^(2(181|302|342|950)|91(47|68)|4014|4757|6059|6927|8579)$/.test(t))e[t]=0;else{var o=new Promise(((r,a)=>n=e[t]=[r,a]));a.push(n[2]=o);var l=r.p+r.u(t),i=new Error;r.l(l,(a=>{if(r.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",i.name="ChunkLoadError",i.type=o,i.request=l,n[1](i)}}),"chunk-"+t,t)}};var t=(t,a)=>{var n,o,l=a[0],i=a[1],c=a[2],f=0;if(l.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)c(r)}for(t&&t(a);f<l.length;f++)o=l[f],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0},a=self.webpackChunkcore=self.webpackChunkcore||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();r(66706)})();
//# sourceMappingURL=main.2e45c5cf.js.map