/*! For license information please see 7509.14de133b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[7509,3545,4296],{47509:(e,r,a)=>{a.r(r),a.d(r,{default:()=>h});a(92950);var s=a(64757),o=a(15378),i=a(86040),n=a(34428),t=a(32302),A=a(57450);function h(e){let{swPath:r}=e;const{t:h}=(0,o.useTranslation)(),[p,c]=(0,t.useWindowSize)();(0,i.useNavigate)();return(0,A.jsx)(t.Layout,{_appBar:{languages:n.Mj,isBackButtonShow:!1,isHideMenuButton:!0,imageUrl:"../../src/assets/SubjectBg.png",CenterIcon:!0,LeftIcon:(0,A.jsxs)(s.HStack,{width:"65px",mt:"35px",children:[(0,A.jsx)(s.Avatar,{size:"37",width:"100%",rounded:"md",borderRadius:"0px",source:a(9922)}),(0,A.jsx)(s.Divider,{width:"1.62px",height:"35.75px",bg:"#41C88E",order:"0",ml:"5px"}),(0,A.jsx)(s.Avatar,{bg:"",size:"37",rounded:"md",borderRadius:"0px",source:a(95799)})]})},_height:"130px",children:(0,A.jsx)(s.Box,{children:(0,A.jsxs)(s.Center,{width:p,children:[(0,A.jsxs)(s.VStack,{space:"",w:"300px",children:[(0,A.jsx)(s.Box,{children:(0,A.jsx)(t.Heading,{children:h("Welcome Vishal!")})}),(0,A.jsx)(s.VStack,{space:2,pt:"25px",pb:"25px",children:(0,A.jsx)(s.Center,{children:(0,A.jsx)("div",{style:{padding:"35px",border:"2px dashed #6461D2",borderRadius:"100px"},children:(0,A.jsx)(s.Avatar,{borderRadius:"0px",bg:"",source:{uri:a(50877)},size:"2xl"})})})}),(0,A.jsx)(s.VStack,{children:(0,A.jsxs)(s.Center,{children:[(0,A.jsxs)(s.HStack,{space:"2",children:[(0,A.jsx)(s.CircleIcon,{size:"3",color:"#6461D2",style:{marginTop:"5px"}}),(0,A.jsx)(Text,{color:"#6461D2",children:"Learn"})]}),(0,A.jsx)(Text,{fontFamily:"Montserrat",mt:"30px",children:"Learn Anytime,Anywhere"})]})})]}),(0,A.jsx)(s.HStack,{mt:"100px",children:[1,2,3,4].map((e=>2==e?(0,A.jsx)(s.Box,{bg:"#6461D2",width:"90px",borderRadius:"40px",height:"20px"}):(0,A.jsx)(s.CircleIcon,{color:"#FFB902",size:"25"},e)))})]})})})}},93545:e=>{var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},a=0;a<10;a++)r["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach((function(e){s[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,n,t=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),A=1;A<arguments.length;A++){for(var h in i=Object(arguments[A]))a.call(i,h)&&(t[h]=i[h]);if(r){n=r(i);for(var p=0;p<n.length;p++)s.call(i,n[p])&&(t[n[p]]=i[n[p]])}}return t}},55282:(e,r,a)=>{a(93545);var s=a(92950),o=60103;if(r.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var n=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t=Object.prototype.hasOwnProperty,A={key:!0,ref:!0,__self:!0,__source:!0};function h(e,r,a){var s,i={},h=null,p=null;for(s in void 0!==a&&(h=""+a),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(p=r.ref),r)t.call(r,s)&&!A.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:o,type:e,key:h,ref:p,props:i,_owner:n.current}}r.jsx=h,r.jsxs=h},57450:(e,r,a)=>{e.exports=a(55282)},95799:e=>{e.exports="data:image/png;base64,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"},50877:e=>{e.exports="data:image/png;base64,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"},9922:e=>{e.exports="data:image/png;base64,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"},34428:e=>{e.exports=JSON.parse('{"Mj":[{"title":"English","path":"./samagra-shiksha.en-gb.json","overridePath":"./override-samagra-shiksha.en-gb.json","code":"en"},{"title":"Hindi","path":"./samagra-shiksha.en-gb.json","overridePath":"./override-samagra-shiksha.en-gb.json","code":"hi"},{"title":"Odiya","path":"./samagra-shiksha.hi-in.json","overridePath":"./override-samagra-shiksha.hi-in.json","code":"od"},{"title":"Bangali","path":"./samagra-shiksha.hi-in.json","overridePath":"./override-samagra-shiksha.hi-in.json","code":"bn"}],"a5":"https://alt.uniteframework.io/auth/realms/hasura-app/protocol/openid-connect/token"}')}}]);
//# sourceMappingURL=7509.14de133b.chunk.js.map