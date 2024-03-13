"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[4055],{44055:(e,t,n)=>{n.r(t),n.d(t,{AccessibilityInfo:()=>h.Z,ActivityIndicator:()=>q.Z,Alert:()=>d,Animated:()=>E.Z,AppRegistry:()=>C,AppState:()=>I.Z,Appearance:()=>b.Z,BackHandler:()=>L.Z,Button:()=>ne,CheckBox:()=>ce,Clipboard:()=>w.Z,DeviceEventEmitter:()=>en,DeviceInfo:()=>M,Dimensions:()=>j.Z,DrawerLayoutAndroid:()=>Wt,Easing:()=>k.Z,FlatList:()=>ue.Z,I18nManager:()=>H.Z,Image:()=>he.Z,ImageBackground:()=>fe,InputAccessoryView:()=>Ft,InteractionManager:()=>G.Z,Keyboard:()=>V.Z,KeyboardAvoidingView:()=>pe.Z,LayoutAnimation:()=>x.Z,Linking:()=>z.Z,LogBox:()=>Yt,Modal:()=>ge.Z,NativeEventEmitter:()=>B,NativeModules:()=>u,PanResponder:()=>U.Z,PermissionsAndroid:()=>Jt,Picker:()=>Oe,PixelRatio:()=>Y.Z,Platform:()=>W.Z,Pressable:()=>me.Z,ProgressBar:()=>Ne,RefreshControl:()=>Ce.Z,SafeAreaView:()=>Ie.Z,ScrollView:()=>Le.Z,SectionList:()=>we.Z,Settings:()=>qt,Share:()=>K,StatusBar:()=>Ze.Z,StyleSheet:()=>R.Z,Switch:()=>je.Z,Systrace:()=>Qt,TVEventHandler:()=>$t,Text:()=>$.Z,TextInput:()=>Me.Z,ToastAndroid:()=>Kt,Touchable:()=>_t,TouchableHighlight:()=>It,TouchableNativeFeedback:()=>Mt,TouchableOpacity:()=>Q.Z,TouchableWithoutFeedback:()=>xt,UIManager:()=>c.Z,Vibration:()=>J,View:()=>S.Z,VirtualizedList:()=>zt,YellowBox:()=>Ut,findNodeHandle:()=>r.Z,processColor:()=>i.Z,render:()=>s,unmountComponentAtNode:()=>l,unstable_createElement:()=>o.Z,useColorScheme:()=>tn.Z,useWindowDimensions:()=>nn.Z});var o=n(65858),r=n(15103),i=n(89337),a=n(79147);const s=a.render,l=a.unmountComponentAtNode;var c=n(4972);const u={UIManager:c.Z};var h=n(73010);const d=function(){function e(){}return e.alert=function(){},e}();var E=n(55600),b=n(34602),f=n(70321),p=n.n(f),g=n(68579),y=n.n(g),R=n(46490),S=n(61939),P=g.createContext(null);function v(e){var t=e.children,n=e.WrapperComponent,o=g.createElement(S.Z,{children:t,key:1,pointerEvents:"box-none",style:_.appContainer});return n&&(o=g.createElement(n,null,o)),g.createElement(P.Provider,{value:e.rootTag},g.createElement(S.Z,{pointerEvents:"box-none",style:_.appContainer},o))}var _=R.Z.create({appContainer:{flex:1}}),O=n(80089);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},m.apply(this,arguments)}var T,D={},A={},N=function(e){return e()},C=function(){function e(){}return e.getAppKeys=function(){return Object.keys(A)},e.getApplication=function(e,t){return p()(A[e]&&A[e].getApplication,"Application "+e+" has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent."),A[e].getApplication(t)},e.registerComponent=function(e,t){return A[e]={getApplication:function(e){return n=N(t),o=e?e.initialProps:D,r=T&&T(e),{element:y().createElement(v,{WrapperComponent:r,rootTag:{}},y().createElement(n,o)),getStyleElement:function(e){var t=O.Z.getStyleSheet();return y().createElement("style",m({},e,{dangerouslySetInnerHTML:{__html:t.textContent},id:t.id}))}};var n,o,r},run:function(e){return function(e,t,n,o){var r=o.hydrate,i=o.initialProps,l=o.rootTag,c=r?a.hydrate:s;p()(l,"Expect to have a valid rootTag, instead got ",l),c(y().createElement(v,{WrapperComponent:t,rootTag:l},y().createElement(e,i)),l,n)}(N(t),T&&T(e),e.callback,{hydrate:e.hydrate||!1,initialProps:e.initialProps||D,rootTag:e.rootTag})}},e},e.registerConfig=function(t){t.forEach((function(t){var n=t.appKey,o=t.component,r=t.run;r?e.registerRunnable(n,r):(p()(o,"No component provider passed in"),e.registerComponent(n,o))}))},e.registerRunnable=function(e,t){return A[e]={run:t},e},e.runApplication=function(e,t){p()(A[e]&&A[e].run,'Application "'+e+'" has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.'),A[e].run(t)},e.setComponentProviderInstrumentationHook=function(e){N=e},e.setWrapperComponentProvider=function(e){T=e},e.unmountApplicationComponentAtRootTag=function(e){l(e)},e}(),I=n(19495),L=n(16953),w=n(65342),Z=n(28462),j=n(63790);const M={Dimensions:{get windowPhysicalPixels(){var e=j.Z.get("window"),t=e.width,n=e.height,o=e.fontScale,r=e.scale;return{width:t*r,height:n*r,scale:r,fontScale:o}},get screenPhysicalPixels(){var e=j.Z.get("screen"),t=e.width,n=e.height,o=e.fontScale,r=e.scale;return{width:t*r,height:n*r,scale:r,fontScale:o}}},get locale(){if(Z.canUseDOM)return navigator.languages?navigator.languages[0]:navigator.language},get totalMemory(){return Z.canUseDOM?navigator.deviceMemory:void 0},get userAgent(){return Z.canUseDOM?navigator.userAgent:""}};var k=n(86028),H=n(98366),V=n(33845),G=n(33173),x=n(31164),z=n(93234);const B=n(356).Z;var U=n(37854),Y=n(66487),W=n(20804);function F(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const K=function(){function e(){}var t,n,o;return e.share=function(e,t){return void 0===t&&(t={}),p()("object"===typeof e&&null!==e,"Content to share must be a valid object"),p()("string"===typeof e.url||"string"===typeof e.message,"At least one of URL and message is required"),p()("object"===typeof t&&null!==t,"Options must be a valid object"),p()(!e.title||"string"===typeof e.title,"Invalid title: title should be a string."),void 0!==window.navigator.share?window.navigator.share({title:e.title,text:e.message,url:e.url}):Promise.reject(new Error("Share is not supported in this browser"))},t=e,o=[{key:"sharedAction",get:function(){return"sharedAction"}},{key:"dismissedAction",get:function(){return"dismissedAction"}}],(n=null)&&F(t.prototype,n),o&&F(t,o),e}();var X=function(e){"vibrate"in window.navigator&&window.navigator.vibrate(e)};const J={cancel:function(){X(0)},vibrate:function(e){void 0===e&&(e=400),X(e)}};var q=n(94141),Q=n(17188),$=n(83638),ee=g.forwardRef((function(e,t){var n=e.accessibilityLabel,o=e.color,r=e.disabled,i=e.onPress,a=e.testID,s=e.title;return g.createElement(Q.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:r,focusable:!r,onPress:i,ref:t,style:[te.button,o&&{backgroundColor:o},r&&te.buttonDisabled],testID:a},g.createElement($.Z,{style:[te.text,r&&te.textDisabled]},s))}));ee.displayName="Button";var te=R.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const ne=ee;function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){ie(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(){return ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ae.apply(this,arguments)}var se=g.forwardRef((function(e,t){var n=e.color,r=e.disabled,i=e.onChange,a=e.onValueChange,s=e.style,l=e.value,c=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["color","disabled","onChange","onValueChange","style","value"]);var u=g.createElement(S.Z,{style:[le.fakeControl,l&&le.fakeControlChecked,l&&n&&{backgroundColor:n,borderColor:n},r&&le.fakeControlDisabled,l&&r&&le.fakeControlCheckedAndDisabled]}),h=(0,o.Z)("input",{checked:l,disabled:r,onChange:function(e){var t=e.nativeEvent.target.checked;e.nativeEvent.value=t,i&&i(e),a&&a(t)},ref:t,style:[le.nativeControl,le.cursorInherit],type:"checkbox"});return g.createElement(S.Z,ae({},c,{accessibilityDisabled:r,style:[le.root,s,r&&le.cursorDefault]}),u,h)}));se.displayName="CheckBox";var le=R.Z.create({root:{cursor:"pointer",height:16,userSelect:"none",width:16},cursorDefault:{cursor:"default"},cursorInherit:{cursor:"inherit"},fakeControl:{alignItems:"center",backgroundColor:"#fff",borderColor:"#657786",borderRadius:2,borderStyle:"solid",borderWidth:2,height:"100%",justifyContent:"center",width:"100%"},fakeControlChecked:{backgroundColor:"#009688",backgroundImage:'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")',backgroundRepeat:"no-repeat",borderColor:"#009688"},fakeControlDisabled:{borderColor:"#CCD6DD"},fakeControlCheckedAndDisabled:{backgroundColor:"#AAB8C2",borderColor:"#AAB8C2"},nativeControl:re(re({},R.Z.absoluteFillObject),{},{height:"100%",margin:0,opacity:0,padding:0,width:"100%"})});const ce=se;var ue=n(16343),he=n(6484);function de(){return de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},de.apply(this,arguments)}var Ee={},be=(0,g.forwardRef)((function(e,t){var n=e.children,o=e.style,r=void 0===o?Ee:o,i=e.imageStyle,a=e.imageRef,s=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","style","imageStyle","imageRef"]),l=R.Z.flatten(r),c=l.height,u=l.width;return g.createElement(S.Z,{ref:t,style:r},g.createElement(he.Z,de({},s,{ref:a,style:[R.Z.absoluteFill,{width:u,height:c,zIndex:-1},i]})),n)}));be.displayName="ImageBackground";const fe=be;var pe=n(34996),ge=n(4449),ye=n(97314),Re=n(34441);function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ve=g.forwardRef((function(e,t){var n=e.children,r=e.enabled,i=e.onValueChange,a=e.selectedValue,s=e.style,l=e.testID,c=(e.itemStyle,e.mode,e.prompt,function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","enabled","onValueChange","selectedValue","style","testID","itemStyle","mode","prompt"])),u=g.useRef(null);var h=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(n),!0).forEach((function(t){Pe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:n,disabled:!1===r||void 0,onChange:function(e){var t=e.target,n=t.selectedIndex,o=t.value;i&&i(o,n)},style:[_e.initial,s],testID:l,value:a},c),d=(0,Re.Z)(h),E=(0,ye.Z)(u,d,t);return h.ref=E,(0,o.Z)("select",h)}));ve.Item=function(e){var t=e.color,n=e.label,r=e.testID,i=e.value,a={color:t};return(0,o.Z)("option",{style:a,testID:r,value:i},n)};var _e=R.Z.create({initial:{fontFamily:"System",fontSize:"inherit",margin:0}});const Oe=ve;var me=n(97896);function Te(){return Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Te.apply(this,arguments)}var De=g.forwardRef((function(e,t){var n=e.color,o=void 0===n?"#1976D2":n,r=e.indeterminate,i=void 0!==r&&r,a=e.progress,s=void 0===a?0:a,l=e.trackColor,c=void 0===l?"transparent":l,u=e.style,h=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["color","indeterminate","progress","trackColor","style"]),d=100*s,E=g.useRef(null);return g.useEffect((function(){var e=i?"25%":d+"%";null!=E.current&&E.current.setNativeProps({style:{width:e}})}),[i,d,E]),g.createElement(S.Z,Te({},h,{accessibilityRole:"progressbar",accessibilityValue:{max:100,min:0,now:i?null:d},ref:t,style:[Ae.track,u,{backgroundColor:c}]}),g.createElement(S.Z,{ref:E,style:[Ae.progress,i&&Ae.animation,{backgroundColor:o}]}))}));De.displayName="ProgressBar";var Ae=R.Z.create({track:{forcedColorAdjust:"none",height:5,overflow:"hidden",userSelect:"none",zIndex:0},progress:{forcedColorAdjust:"none",height:"100%",zIndex:-1},animation:{animationDuration:"1s",animationKeyframes:[{"0%":{transform:[{translateX:"-100%"}]},"100%":{transform:[{translateX:"400%"}]}}],animationTimingFunction:"linear",animationIterationCount:"infinite"}});const Ne=De;var Ce=n(93347),Ie=n(70522),Le=n(6778),we=n(92071),Ze=n(28039),je=n(61839),Me=n(62581),ke=n(21760),He=function(e,t){var n=this;if(n.instancePool.length){var o=n.instancePool.pop();return n.call(o,e,t),o}return new n(e,t)},Ve=function(e){var t=this;e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},Ge=He;const xe={addPoolingTo:function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||Ge,n.poolSize||(n.poolSize=10),n.release=Ve,n},twoArgumentPooler:He};var ze=xe.twoArgumentPooler;function Be(e,t){this.width=e,this.height=t}Be.prototype.destructor=function(){this.width=null,this.height=null},Be.getPooledFromElement=function(e){return Be.getPooled(e.offsetWidth,e.offsetHeight)},xe.addPoolingTo(Be,ze);const Ue=Be;var Ye=n(2751),We=n.n(Ye),Fe=xe.twoArgumentPooler;function Ke(e,t){this.left=e,this.top=t}Ke.prototype.destructor=function(){this.left=null,this.top=null},xe.addPoolingTo(Ke,Fe);const Xe=Ke;function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(n),!0).forEach((function(t){Qe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $e=function(e){var t=e.touches,n=e.changedTouches,o=t&&t.length>0,r=n&&n.length>0;return!o&&r?n[0]:o?t[0]:e},et="NOT_RESPONDER",tt="RESPONDER_INACTIVE_PRESS_IN",nt="RESPONDER_INACTIVE_PRESS_OUT",ot="RESPONDER_ACTIVE_PRESS_IN",rt="RESPONDER_ACTIVE_PRESS_OUT",it="RESPONDER_ACTIVE_LONG_PRESS_IN",at="RESPONDER_ACTIVE_LONG_PRESS_OUT",st="ERROR",lt={NOT_RESPONDER:!1,RESPONDER_INACTIVE_PRESS_IN:!1,RESPONDER_INACTIVE_PRESS_OUT:!1,RESPONDER_ACTIVE_PRESS_IN:!1,RESPONDER_ACTIVE_PRESS_OUT:!1,RESPONDER_ACTIVE_LONG_PRESS_IN:!1,RESPONDER_ACTIVE_LONG_PRESS_OUT:!1,ERROR:!1},ct=qe(qe({},lt),{},{RESPONDER_ACTIVE_PRESS_OUT:!0,RESPONDER_ACTIVE_PRESS_IN:!0}),ut=qe(qe({},lt),{},{RESPONDER_INACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_LONG_PRESS_IN:!0}),ht=qe(qe({},lt),{},{RESPONDER_ACTIVE_LONG_PRESS_IN:!0}),dt="DELAY",Et="RESPONDER_GRANT",bt="RESPONDER_RELEASE",ft="RESPONDER_TERMINATED",pt="ENTER_PRESS_RECT",gt="LEAVE_PRESS_RECT",yt="LONG_PRESS_DETECTED",Rt={NOT_RESPONDER:{DELAY:st,RESPONDER_GRANT:tt,RESPONDER_RELEASE:st,RESPONDER_TERMINATED:st,ENTER_PRESS_RECT:st,LEAVE_PRESS_RECT:st,LONG_PRESS_DETECTED:st},RESPONDER_INACTIVE_PRESS_IN:{DELAY:ot,RESPONDER_GRANT:st,RESPONDER_RELEASE:et,RESPONDER_TERMINATED:et,ENTER_PRESS_RECT:tt,LEAVE_PRESS_RECT:nt,LONG_PRESS_DETECTED:st},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:rt,RESPONDER_GRANT:st,RESPONDER_RELEASE:et,RESPONDER_TERMINATED:et,ENTER_PRESS_RECT:tt,LEAVE_PRESS_RECT:nt,LONG_PRESS_DETECTED:st},RESPONDER_ACTIVE_PRESS_IN:{DELAY:st,RESPONDER_GRANT:st,RESPONDER_RELEASE:et,RESPONDER_TERMINATED:et,ENTER_PRESS_RECT:ot,LEAVE_PRESS_RECT:rt,LONG_PRESS_DETECTED:it},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:st,RESPONDER_GRANT:st,RESPONDER_RELEASE:et,RESPONDER_TERMINATED:et,ENTER_PRESS_RECT:ot,LEAVE_PRESS_RECT:rt,LONG_PRESS_DETECTED:st},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:st,RESPONDER_GRANT:st,RESPONDER_RELEASE:et,RESPONDER_TERMINATED:et,ENTER_PRESS_RECT:it,LEAVE_PRESS_RECT:at,LONG_PRESS_DETECTED:it},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:st,RESPONDER_GRANT:st,RESPONDER_RELEASE:et,RESPONDER_TERMINATED:et,ENTER_PRESS_RECT:it,LEAVE_PRESS_RECT:at,LONG_PRESS_DETECTED:st},error:{DELAY:et,RESPONDER_GRANT:tt,RESPONDER_RELEASE:et,RESPONDER_TERMINATED:et,ENTER_PRESS_RECT:et,LEAVE_PRESS_RECT:et,LONG_PRESS_DETECTED:et}},St={componentDidMount:function(){var e=this;this._touchableNode=(0,r.Z)(this),this._touchableNode&&this._touchableNode.addEventListener&&(this._touchableBlurListener=function(t){e._isTouchableKeyboardActive&&(e.state.touchable.touchState&&e.state.touchable.touchState!==et&&e.touchableHandleResponderTerminate({nativeEvent:t}),e._isTouchableKeyboardActive=!1)},this._touchableNode.addEventListener("blur",this._touchableBlurListener))},componentWillUnmount:function(){this._touchableNode&&this._touchableNode.addEventListener&&this._touchableNode.removeEventListener("blur",this._touchableBlurListener),this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressInLocation=null,this.state.touchable.responderID=null,this._touchableNode=null},touchableGetInitialState:function(){return{touchable:{touchState:void 0,responderID:null}}},touchableHandleResponderTerminationRequest:function(){return!this.props.rejectResponderTermination},touchableHandleStartShouldSetResponder:function(){return!this.props.disabled},touchableLongPressCancelsPress:function(){return!0},touchableHandleResponderGrant:function(e){var t=e.currentTarget;e.persist(),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressOutDelayTimeout=null,this.state.touchable.touchState=et,this.state.touchable.responderID=t,this._receiveSignal(Et,e);var n=void 0!==this.touchableGetHighlightDelayMS?Math.max(this.touchableGetHighlightDelayMS(),0):130;0!==(n=isNaN(n)?130:n)?this.touchableDelayTimeout=setTimeout(this._handleDelay.bind(this,e),n):this._handleDelay(e);var o=void 0!==this.touchableGetLongPressDelayMS?Math.max(this.touchableGetLongPressDelayMS(),10):370;o=isNaN(o)?370:o,this.longPressDelayTimeout=setTimeout(this._handleLongDelay.bind(this,e),o+n)},touchableHandleResponderRelease:function(e){this.pressInLocation=null,this._receiveSignal(bt,e)},touchableHandleResponderTerminate:function(e){this.pressInLocation=null,this._receiveSignal(ft,e)},touchableHandleResponderMove:function(e){if(this.state.touchable.positionOnActivate){var t=this.state.touchable.positionOnActivate,n=this.state.touchable.dimensionsOnActivate,o=this.touchableGetPressRectOffset?this.touchableGetPressRectOffset():{left:20,right:20,top:20,bottom:20},r=o.left,i=o.top,a=o.right,s=o.bottom,l=this.touchableGetHitSlop?this.touchableGetHitSlop():null;l&&(r+=l.left||0,i+=l.top||0,a+=l.right||0,s+=l.bottom||0);var c=$e(e.nativeEvent),u=c&&c.pageX,h=c&&c.pageY;if(this.pressInLocation)this._getDistanceBetweenPoints(u,h,this.pressInLocation.pageX,this.pressInLocation.pageY)>10&&this._cancelLongPressDelayTimeout();if(u>t.left-r&&h>t.top-i&&u<t.left+n.width+a&&h<t.top+n.height+s){var d=this.state.touchable.touchState;this._receiveSignal(pt,e),this.state.touchable.touchState===tt&&d!==tt&&this._cancelLongPressDelayTimeout()}else this._cancelLongPressDelayTimeout(),this._receiveSignal(gt,e)}},touchableHandleFocus:function(e){this.props.onFocus&&this.props.onFocus(e)},touchableHandleBlur:function(e){this.props.onBlur&&this.props.onBlur(e)},_remeasureMetricsOnActivation:function(){var e=this.state.touchable.responderID;null!=e&&c.Z.measure(e,this._handleQueryLayout)},_handleQueryLayout:function(e,t,n,o,r,i){(e||t||n||o||r||i)&&(this.state.touchable.positionOnActivate&&Xe.release(this.state.touchable.positionOnActivate),this.state.touchable.dimensionsOnActivate&&Ue.release(this.state.touchable.dimensionsOnActivate),this.state.touchable.positionOnActivate=Xe.getPooled(r,i),this.state.touchable.dimensionsOnActivate=Ue.getPooled(n,o))},_handleDelay:function(e){this.touchableDelayTimeout=null,this._receiveSignal(dt,e)},_handleLongDelay:function(e){this.longPressDelayTimeout=null;var t=this.state.touchable.touchState;t!==ot&&t!==it?console.error("Attempted to transition from state `"+t+"` to `"+it+"`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled."):this._receiveSignal(yt,e)},_receiveSignal:function(e,t){var n=this.state.touchable.responderID,o=this.state.touchable.touchState,r=Rt[o]&&Rt[o][e];if(n||e!==bt){if(!r)throw new Error("Unrecognized signal `"+e+"` or state `"+o+"` for Touchable responder `"+n+"`");if(r===st)throw new Error("Touchable cannot transition from `"+o+"` to `"+e+"` for responder `"+n+"`");o!==r&&(this._performSideEffectsForTransition(o,r,e,t),this.state.touchable.touchState=r)}},_cancelLongPressDelayTimeout:function(){this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.longPressDelayTimeout=null},_isHighlight:function(e){return e===ot||e===it},_savePressInLocation:function(e){var t=$e(e.nativeEvent),n=t&&t.pageX,o=t&&t.pageY,r=t&&t.locationX,i=t&&t.locationY;this.pressInLocation={pageX:n,pageY:o,locationX:r,locationY:i}},_getDistanceBetweenPoints:function(e,t,n,o){var r=e-n,i=t-o;return Math.sqrt(r*r+i*i)},_performSideEffectsForTransition:function(e,t,n,o){var r=this._isHighlight(e),i=this._isHighlight(t);(n===ft||n===bt)&&this._cancelLongPressDelayTimeout();var a=e===et&&t===tt,s=!ct[e]&&ct[t];if((a||s)&&this._remeasureMetricsOnActivation(),ut[e]&&n===yt&&this.touchableHandleLongPress&&this.touchableHandleLongPress(o),i&&!r?this._startHighlight(o):!i&&r&&this._endHighlight(o),ut[e]&&n===bt){var l=!!this.props.onLongPress,c=ht[e]&&(!l||!this.touchableLongPressCancelsPress());(!ht[e]||c)&&this.touchableHandlePress&&(i||r||(this._startHighlight(o),this._endHighlight(o)),this.touchableHandlePress(o))}this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.touchableDelayTimeout=null},_playTouchSound:function(){c.Z.playTouchSound()},_startHighlight:function(e){this._savePressInLocation(e),this.touchableHandleActivePressIn&&this.touchableHandleActivePressIn(e)},_endHighlight:function(e){var t=this;this.touchableHandleActivePressOut&&(this.touchableGetPressOutDelayMS&&this.touchableGetPressOutDelayMS()?this.pressOutDelayTimeout=setTimeout((function(){t.touchableHandleActivePressOut(e)}),this.touchableGetPressOutDelayMS()):this.touchableHandleActivePressOut(e))},touchableHandleKeyEvent:function(e){var t=e.type,n=e.key;"Enter"!==n&&" "!==n||("keydown"===t?this._isTouchableKeyboardActive||this.state.touchable.touchState&&this.state.touchable.touchState!==et||(this.touchableHandleResponderGrant(e),this._isTouchableKeyboardActive=!0):"keyup"===t&&this._isTouchableKeyboardActive&&this.state.touchable.touchState&&this.state.touchable.touchState!==et&&(this.touchableHandleResponderRelease(e),this._isTouchableKeyboardActive=!1),e.stopPropagation(),"Enter"===n&&"link"===ke.Z.propsToAriaRole(this.props)||e.preventDefault())},withoutDefaultFocusAndBlur:{}},Pt=(St.touchableHandleFocus,St.touchableHandleBlur,function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(St,["touchableHandleFocus","touchableHandleBlur"]));St.withoutDefaultFocusAndBlur=Pt;var vt={Mixin:St,TOUCH_TARGET_DEBUG:!1,renderDebugView:function(e){var t=e.color,n=e.hitSlop;if(!vt.TOUCH_TARGET_DEBUG)return null;var o={};for(var r in n=n||{top:0,bottom:0,left:0,right:0})o[r]=-n[r];var i=We()(t);if("number"!==typeof i)return null;var a="#"+("00000000"+i.toString(16)).substr(-8);return y().createElement(S.Z,{pointerEvents:"none",style:qe({position:"absolute",borderColor:a.slice(0,-2)+"55",borderWidth:1,borderStyle:"dashed",backgroundColor:a.slice(0,-2)+"0F"},o)})}};const _t=vt;var Ot=n(35646);function mt(){return mt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},mt.apply(this,arguments)}function Tt(e,t){return{child:{opacity:null!==e&&void 0!==e?e:.85},underlay:{backgroundColor:void 0===t?"black":t}}}function Dt(e){return null!=e.onPress||null!=e.onPressIn||null!=e.onPressOut||null!=e.onLongPress}function At(e,t){var n=e.activeOpacity,o=e.children,r=e.delayPressIn,i=e.delayPressOut,a=e.delayLongPress,s=e.disabled,l=e.focusable,c=e.onHideUnderlay,u=e.onLongPress,h=e.onPress,d=e.onPressIn,E=e.onPressOut,b=e.onShowUnderlay,f=e.rejectResponderTermination,p=e.style,y=e.testOnly_pressed,P=e.underlayColor,v=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["activeOpacity","children","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onHideUnderlay","onLongPress","onPress","onPressIn","onPressOut","onShowUnderlay","rejectResponderTermination","style","testOnly_pressed","underlayColor"]),_=(0,g.useRef)(null),O=(0,ye.Z)(t,_),m=(0,g.useState)(!0===y?Tt(n,P):null),T=m[0],D=m[1],A=(0,g.useCallback)((function(){Dt(e)&&(D(Tt(n,P)),null!=b&&b())}),[n,b,e,P]),N=(0,g.useCallback)((function(){!0!==y&&Dt(e)&&(D(null),null!=c&&c())}),[c,e,y]),C=(0,g.useMemo)((function(){return{cancelable:!f,disabled:s,delayLongPress:a,delayPressStart:r,delayPressEnd:i,onLongPress:u,onPress:h,onPressStart:function(e){A(),null!=d&&d(e)},onPressEnd:function(e){N(),null!=E&&E(e)}}}),[a,r,i,s,u,h,d,E,f,A,N]),I=(0,Ot.Z)(_,C),L=g.Children.only(o);return g.createElement(S.Z,mt({},v,I,{accessibilityDisabled:s,focusable:!s&&!1!==l,ref:O,style:[Nt.root,p,!s&&Nt.actionable,T&&T.underlay]}),g.cloneElement(L,{style:R.Z.compose(L.props.style,T&&T.child)}))}var Nt=R.Z.create({root:{userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),Ct=g.memo(g.forwardRef(At));Ct.displayName="TouchableHighlight";const It=Ct;function Lt(e,t){return Lt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Lt(e,t)}var wt=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,Lt(t,n);var r=o.prototype;return r.setNativeProps=function(){},r.render=function(){return y().createElement(S.Z,{style:[Zt,this.props.style]},this.props.children)},o}(y().Component),Zt={};const jt=wt,Mt=jt;var kt=n(81683),Ht={accessibilityDisabled:!0,accessibilityLabel:!0,accessibilityLiveRegion:!0,accessibilityRole:!0,accessibilityState:!0,accessibilityValue:!0,children:!0,disabled:!0,focusable:!0,nativeID:!0,onBlur:!0,onFocus:!0,onLayout:!0,testID:!0};function Vt(e,t){var n=e.delayPressIn,o=e.delayPressOut,r=e.delayLongPress,i=e.disabled,a=e.focusable,s=e.onLongPress,l=e.onPress,c=e.onPressIn,u=e.onPressOut,h=e.rejectResponderTermination,d=(0,g.useRef)(null),E=(0,g.useMemo)((function(){return{cancelable:!h,disabled:i,delayLongPress:r,delayPressStart:n,delayPressEnd:o,onLongPress:s,onPress:l,onPressStart:c,onPressEnd:u}}),[i,n,o,r,s,l,c,u,h]),b=(0,Ot.Z)(d,E),f=g.Children.only(e.children),p=[f.props.children],y=function(e){return(0,kt.Z)(e,Ht)}(e);y.accessibilityDisabled=i,y.focusable=!i&&!1!==a,y.ref=(0,ye.Z)(t,d,f.ref);var R=Object.assign(y,b);return g.cloneElement.apply(g,[f,R].concat(p))}var Gt=g.memo(g.forwardRef(Vt));Gt.displayName="TouchableWithoutFeedback";const xt=Gt;const zt=n(83746).Z;function Bt(e){return y().createElement(jt,e)}Bt.ignoreWarnings=function(){};const Ut=Bt;const Yt={ignoreLogs:function(){},ignoreAllLogs:function(){},uninstall:function(){},install:function(){}},Wt=jt,Ft=jt,Kt=jt;var Xt=function(){return Promise.resolve(!1)};const Jt={PERMISSIONS:{},RESULTS:{},checkPermission:Xt,check:Xt,requestPermission:Xt,request:Xt,requestMultiple:Xt},qt={},Qt={},$t={};const en=n(92915).Z;var tn=n(61774),nn=n(55842)}}]);
//# sourceMappingURL=4055.0c08d045.chunk.js.map