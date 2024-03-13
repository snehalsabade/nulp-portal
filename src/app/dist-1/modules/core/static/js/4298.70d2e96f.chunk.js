"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[4298,3162],{53162:(t,e,n)=>{n.r(e),n.d(e,{SafeAreaConsumer:()=>S,SafeAreaContext:()=>b,SafeAreaFrameContext:()=>m,SafeAreaInsetsContext:()=>g,SafeAreaProvider:()=>h,SafeAreaView:()=>M,initialWindowMetrics:()=>O,initialWindowSafeAreaInsets:()=>R,useSafeArea:()=>E,useSafeAreaFrame:()=>w,useSafeAreaInsets:()=>y,withSafeAreaInsets:()=>C});var i=n(92950),r=n(15478),o=n(72722),a=n(18401);const s={WebkitTransition:"webkitTransitionEnd",Transition:"transitionEnd",MozTransition:"transitionend",MSTransition:"msTransitionEnd",OTransition:"oTransitionEnd"};function l(t){let{children:e,style:n,onInsetsChange:r}=t;return i.useEffect((()=>{if("undefined"===typeof document)return;const t=function(){const t=document.createElement("div"),{style:e}=t;return e.position="fixed",e.left="0",e.top="0",e.width="0",e.height="0",e.zIndex="-1",e.overflow="hidden",e.visibility="hidden",e.transitionDuration="0.05s",e.transitionProperty="padding",e.transitionDelay="0s",e.paddingTop=c("top"),e.paddingBottom=c("bottom"),e.paddingLeft=c("left"),e.paddingRight=c("right"),t}();document.body.appendChild(t);const e=()=>{const{paddingTop:e,paddingBottom:n,paddingLeft:i,paddingRight:o}=window.getComputedStyle(t),a={top:e?parseInt(e,10):0,bottom:n?parseInt(n,10):0,left:i?parseInt(i,10):0,right:o?parseInt(o,10):0},s={x:0,y:0,width:document.documentElement.offsetWidth,height:document.documentElement.offsetHeight};r({nativeEvent:{insets:a,frame:s}})};return t.addEventListener(u(),e),e(),()=>{document.body.removeChild(t),t.removeEventListener(u(),e)}}),[r]),i.createElement(a.Z,{style:n},e)}let d=null;function u(){if(null!==d)return d;const t=document.createElement("invalidtype");d=s.Transition;for(const e in s)if(void 0!==t.style[e]){d=s[e];break}return d}let f=null;function c(t){return"".concat(function(){if(null!==f)return f;const{CSS:t}=window;return f=t&&t.supports&&t.supports("top: constant(safe-area-inset-top)")?"constant":"env",f}(),"(safe-area-inset-").concat(t,")")}function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},p.apply(this,arguments)}const g=i.createContext(null);g.displayName="SafeAreaInsetsContext";const m=i.createContext(null);function h(t){let{children:e,initialMetrics:n,initialSafeAreaInsets:o,style:a}=t;var s,d,u,f,c;const p=i.useContext(g),h=i.useContext(m),[y,w]=i.useState(null!==(s=null!==(d=null!==(u=null===n||void 0===n?void 0:n.insets)&&void 0!==u?u:o)&&void 0!==d?d:p)&&void 0!==s?s:null),[C,E]=i.useState(null!==(f=null!==(c=null===n||void 0===n?void 0:n.frame)&&void 0!==c?c:h)&&void 0!==f?f:{x:0,y:0,width:r.Z.get("window").width,height:r.Z.get("window").height}),S=i.useCallback((t=>{const{nativeEvent:{frame:e,insets:n}}=t;!e||e.height===C.height&&e.width===C.width&&e.x===C.x&&e.y===C.y||E(e),y&&n.bottom===y.bottom&&n.left===y.left&&n.right===y.right&&n.top===y.top||w(n)}),[C,y]);return i.createElement(l,{style:[v.fill,a],onInsetsChange:S},null!=y?i.createElement(m.Provider,{value:C},i.createElement(g.Provider,{value:y},e)):null)}m.displayName="SafeAreaFrameContext";const v=o.Z.create({fill:{flex:1}});function y(){const t=i.useContext(g);if(null==t)throw new Error("No safe area insets value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.");return t}function w(){const t=i.useContext(m);if(null==t)throw new Error("No safe area frame value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.");return t}function C(t){return i.forwardRef(((e,n)=>i.createElement(S,null,(r=>i.createElement(t,p({},e,{insets:r,ref:n}))))))}function E(){return y()}const S=g.Consumer,b=g;function x(){return x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},x.apply(this,arguments)}const A=8,T=4,I=2,k=1,L=15,P={top:A,right:T,bottom:I,left:k};function M(t){let{style:e={},mode:n,edges:r,...s}=t;const l=y(),d=null!=r?r.reduce(((t,e)=>t|P[e]),0):L,u=i.useMemo((()=>{const t=d&A?l.top:0,i=d&T?l.right:0,r=d&I?l.bottom:0,a=d&k?l.left:0,s=o.Z.flatten(e);if("margin"===n){const{margin:n=0,marginVertical:o=n,marginHorizontal:l=n,marginTop:d=o,marginRight:u=l,marginBottom:f=o,marginLeft:c=l}=s;return[e,{marginTop:d+t,marginRight:u+i,marginBottom:f+r,marginLeft:c+a}]}{const{padding:n=0,paddingVertical:o=n,paddingHorizontal:l=n,paddingTop:d=o,paddingRight:u=l,paddingBottom:f=o,paddingLeft:c=l}=s;return[e,{paddingTop:d+t,paddingRight:u+i,paddingBottom:f+r,paddingLeft:c+a}]}}),[e,l,n,d]);return i.createElement(a.Z,x({style:u},s))}const O=null,R=null}}]);
//# sourceMappingURL=4298.70d2e96f.chunk.js.map