"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[5498],{84426:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});o(92950),o(10655),o(36375);var i=o(30312),r=o(88037),n=o(67186),s=o(47509),a=o(46210),l=o(69481),d=o(61164),c=(o(28927),o(64757)),u=o(86040),x=o(32302),h=o(57450);const p=(0,c.extendTheme)(x.DEFAULT_THEME);const m=function(){return(0,x.initializeI18n)(["studentApp"],"".concat("/modules/core","/locales/{{lng}}/{{ns}}.json")),(0,h.jsx)(c.NativeBaseProvider,{theme:p,children:(0,h.jsx)(u.BrowserRouter,{basename:"/modules/core",children:(0,h.jsxs)(u.Routes,{children:[(0,h.jsx)(u.Route,{path:"/",element:(0,h.jsx)(d.default,{})}),(0,h.jsx)(u.Route,{path:"/signup",element:(0,h.jsx)(i.default,{})}),(0,h.jsx)(u.Route,{path:"/mobilenumberscreen",element:(0,h.jsx)(r.default,{})}),(0,h.jsx)(u.Route,{path:"/otp",element:(0,h.jsx)(n.default,{})}),(0,h.jsx)(u.Route,{path:"/onboarding",element:(0,h.jsx)(s.default,{})}),(0,h.jsx)(u.Route,{path:"/comingsoon/:title",element:(0,h.jsx)(l.default,{})}),(0,h.jsx)(u.Route,{path:"/onboardingimprove",element:(0,h.jsx)(a.default,{})})]})})})}},69481:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var i=o(92950),r=o.n(i),n=o(64757),s=o(32302),a=o(15378),l=o(86040),d=o(34428),c=o(57450);const u=function(e){let{footerLinks:t}=e;const[i,u]=(0,s.useWindowSize)(),x=(0,l.useParams)();let h=(0,l.useLocation)();const{t:p}=(0,a.useTranslation)();return"ScoreCard"==x.title||h.pathname.split("/")[1],r().useEffect((()=>{(0,s.capture)("PAGE")}),[]),(0,c.jsx)(s.Layout,{_header:{title:p("SETTING")},_appBar:{languages:d.Mj,isLanguageIcon:!0,isShowNotificationButton:!1,titleComponent:(0,c.jsx)(s.NameTag,{}),LeftIcon:(0,c.jsx)(n.HStack,{children:(0,c.jsx)("img",{width:"100px",src:o(64814)})})},_footer:t,children:(0,c.jsx)(n.Box,{children:(0,c.jsx)(n.Center,{width:i,children:(0,c.jsxs)(n.VStack,{space:"",children:[(0,c.jsx)(n.Box,{children:(0,c.jsx)(s.Heading,{children:p("COMING_SOON")})}),(0,c.jsx)(n.VStack,{space:2,pt:"25px",pb:"25px",children:(0,c.jsx)(n.Center,{children:(0,c.jsx)("div",{style:{padding:"35px",border:"2px dashed #6461D2",borderRadius:"100px"},children:(0,c.jsx)(s.IconByName,{name:"ToolsFillIcon",isDisabled:!0,_icon:{size:70},rounded:"full"})})})}),(0,c.jsx)(n.VStack,{children:(0,c.jsx)(n.Center,{children:(0,c.jsx)(n.HStack,{space:"2"})})})]})})})})}},28927:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});o(92950);var i=o(64757),r=o(15378),n=o(34428),s=o(32302),a=o(86040),l=o(57450);(0,s.overrideColorTheme)();function d(){const{t:e}=(0,r.useTranslation)(),t=(0,a.useNavigate)();return(0,l.jsx)(s.Layout,{_width:"100%",_appBar:{languages:n.Mj,isBackButtonShow:!1,isHideMenuButton:!0,imageUrl:"../../src/assets/SubjectBg.png",LeftIcon:(0,l.jsxs)(i.HStack,{width:"65px",children:[(0,l.jsx)(i.Avatar,{size:"37",width:"100%",rounded:"md",style:{borderRadius:"0px"},source:o(9922)}),(0,l.jsx)(i.Divider,{width:"1.62px",height:"35.75px",bg:"#41C88E",order:"0",ml:"5px"}),(0,l.jsx)(i.Avatar,{bg:"",size:"37",rounded:"md",style:{borderRadius:"0px"},source:o(95799)})]}),rightIcon:(0,l.jsx)(i.HStack,{paddingBottom:"25px"})},_height:"100px",children:(0,l.jsx)(i.Box,{children:(0,l.jsxs)(i.Center,{children:[(0,l.jsx)(i.VStack,{space:"50px",w:"300px",children:(0,l.jsx)(i.Image,{mt:"0px",width:"100%",height:"400px",resizeMode:"cover",source:o(97623),alt:"Alternate Text "})}),(0,l.jsx)(i.VStack,{children:(0,l.jsx)(i.HStack,{children:(0,l.jsx)(i.Button,{mt:"20px",p:"3",variant:"rounded",onPress:()=>(async e=>{"register"===e&&t("/signup"),"login"===e&&t("/login")})("login"),children:e("Login >")})})})]})})})}},36375:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var i=o(92950),r=o.n(i),n=o(64757),s=o(15378),a=o(86040),l=o(34428),d=o(32302),c=o(57450);const u=(0,d.overrideColorTheme)();function x(e){let{swPath:t}=e;const[x,h]=(0,i.useState)(),[p,m]=r().useState({}),{t:v}=(0,s.useTranslation)(),[g,j]=(0,d.useWindowSize)(),b=(0,a.useNavigate)();return(0,c.jsx)(d.Layout,{_appBar:{languages:l.Mj,isBackButtonShow:!1,isHideMenuButton:!0,imageUrl:"../../src/assets/SubjectBg.png",LeftIcon:(0,c.jsxs)(n.HStack,{width:"65px",children:[(0,c.jsx)(n.Avatar,{size:"37",width:"100%",rounded:"md",style:{borderRadius:"0px"},source:o(9922)}),(0,c.jsx)(n.Divider,{width:"1.62px",height:"35.75px",bg:"#41C88E",order:"0",ml:"5px"}),(0,c.jsx)(n.Avatar,{bg:"",size:"37",rounded:"md",borderRadius:"0px",source:o(95799)})]}),rightIcon:(0,c.jsx)(n.HStack,{paddingBottom:"25px",children:(0,c.jsx)(d.IconByName,{name:"CloseCircleFillIcon",onPress:()=>b("/flash")})})},_height:"150px",children:(0,c.jsx)(n.Box,{children:(0,c.jsx)(n.Center,{width:g,children:(0,c.jsxs)(n.VStack,{space:"",w:"300px",children:[(0,c.jsx)(n.Box,{style:{marginLeft:"25px"},children:(0,c.jsx)(d.Heading,{children:v("WELCOME")})}),(0,c.jsxs)(n.VStack,{space:2,pt:"25px",pb:"25px",children:["alert"in p?(0,c.jsx)(n.Alert,{w:"100%",status:"error",children:(0,c.jsx)(n.VStack,{space:2,flexShrink:1,w:"100%",children:(0,c.jsxs)(n.HStack,{flexShrink:1,space:2,justifyContent:"space-between",children:[(0,c.jsxs)(n.HStack,{space:2,flexShrink:1,children:[(0,c.jsx)(n.Alert.Icon,{mt:"1"}),(0,c.jsx)(d.Subtitle,{color:null===u||void 0===u?void 0:u.gray,children:p.alert})]}),(0,c.jsx)(n.IconButton,{variant:"unstyled",icon:(0,c.jsx)(n.CloseIcon,{size:"3",color:null===u||void 0===u?void 0:u.gray}),onPress:e=>m({})})]})})}):(0,c.jsx)(c.Fragment,{}),(0,c.jsxs)(n.VStack,{space:"30px",p:"20px",children:[(0,c.jsxs)(n.FormControl,{isRequired:!0,isInvalid:"username"in p,children:[(0,c.jsx)(n.FormControl.Label,{_text:{fontSize:"14px",fontWeight:"400",color:"#6461D2"},mb:"10px",children:v("USERNAME")}),(0,c.jsx)(n.Input,{bg:"white",variant:"rounded",borderColor:null!==x&&void 0!==x&&x.username?"orange.500":"#C1C1C1",p:"10px",placeholder:v("ENTER_USERNAME"),onChange:e=>h({...x,username:e.target.value})}),"username"in p?(0,c.jsx)(n.FormControl.ErrorMessage,{_text:{fontSize:"xs",color:null===u||void 0===u?void 0:u.error,fontWeight:500},children:p.username}):(0,c.jsx)(c.Fragment,{})]}),(0,c.jsxs)(n.FormControl,{isRequired:!0,isInvalid:"password"in p,children:[(0,c.jsx)(n.FormControl.Label,{_text:{fontSize:"14px",fontWeight:"400",color:"#6461D2"},mb:"10px",children:v("PASSWORD")}),(0,c.jsx)(n.Input,{bg:"white",variant:"rounded",type:"password",borderColor:null!==x&&void 0!==x&&x.password?"orange.500":"#C1C1C1",p:"10px",placeholder:v("ENTER_PASSWORD"),onChange:e=>h({...x,password:e.target.value})}),"password"in p?(0,c.jsx)(n.FormControl.ErrorMessage,{_text:{fontSize:"xs",color:null===u||void 0===u?void 0:u.error,fontWeight:500},children:p.username}):(0,c.jsx)(c.Fragment,{})]})]})]}),(0,c.jsx)(n.Button,{p:"3",onPress:async()=>{if((()=>{let e={};return"undefined"!==typeof(null===x||void 0===x?void 0:x.username)&&""!==(null===x||void 0===x?void 0:x.username)||(e={...e,username:v("USERNAME_IS_REQUIRED")}),"undefined"!==typeof(null===x||void 0===x?void 0:x.password)&&""!==(null===x||void 0===x?void 0:x.password)||(e={...e,password:v("PASSWORD_IS_REQUIRED")}),m(e),!e.username&&!e.password})()){const o=await(0,d.getUserToken)(t),i=await(0,d.fetchToken)(l.a5,null===x||void 0===x?void 0:x.username,null===x||void 0===x?void 0:x.password);if(null!==i&&void 0!==i&&i.data){let r=i.data.access_token;sessionStorage.setItem("token",r);const n=await d.userRegistryService.getOne();if(null!==n&&void 0!==n&&n.id){try{let{id:e}=n;localStorage.setItem("id",e);await d.userRegistryService.update({id:e,fcmToken:o});localStorage.setItem("fullName",n.fullName?n.fullName:"".concat(n.firstName," ").concat(n.lastName)),localStorage.setItem("firstName",n.firstName),localStorage.setItem("lastName",n.lastName),localStorage.setItem("schoolId",n.schoolId),localStorage.setItem("phoneNumber",n.phoneNumber)}catch(e){localStorage.removeItem("token"),console.log({e:e})}try{const e=await(0,d.getUserToken)(t);let o=localStorage.getItem("id");await d.userRegistryService.update({id:o,fcmToken:e}),localStorage.setItem("fcmToken",e)}catch(e){localStorage.setItem("fcmToken","")}d.eventBus.publish("AUTH",{eventType:"LOGIN_SUCCESS",data:{token:r}}),window.location.href("/onboardingimprove"),window.location.reload()}else localStorage.removeItem("token"),m({alert:v("PLEASE_ENTER_VALID_CREDENTIALS")})}else localStorage.removeItem("token"),m({alert:v("PLEASE_ENTER_VALID_CREDENTIALS")})}},variant:"rounded",children:v("LOGIN")})]})})})})}},88037:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var i=o(92950),r=o.n(i),n=o(64757),s=o(15378),a=o(86040),l=o(34428),d=o(32302),c=o(57450);const u=(0,d.overrideColorTheme)();function x(e){let{swPath:t}=e;const[x,h]=(0,i.useState)(),[p,m]=r().useState({}),{t:v}=(0,s.useTranslation)(),[g,j]=(0,d.useWindowSize)(),b=(0,a.useNavigate)(),S=[{label:"Mobile Number",attribute:"mobileNumber"}];return(0,c.jsx)(d.Layout,{_appBar:{languages:l.Mj,isBackButtonShow:!1,isHideMenuButton:!0,imageUrl:"../../src/assets/SubjectBg.png",LeftIcon:(0,c.jsxs)(n.HStack,{width:"65px",children:[(0,c.jsx)(n.Avatar,{size:"37",width:"100%",rounded:"md",borderRadius:"0px",source:o(9922)}),(0,c.jsx)(n.Divider,{width:"1.62px",height:"35.75px",bg:"#41C88E",order:"0",ml:"5px"}),(0,c.jsx)(n.Avatar,{bg:"",size:"37",rounded:"md",borderRadius:"0px",source:o(95799)})]}),rightIcon:(0,c.jsx)(n.HStack,{paddingBottom:"25px",children:(0,c.jsx)(d.IconByName,{name:"CloseCircleFillIcon"})})},_height:"150px",children:(0,c.jsx)(n.Box,{children:(0,c.jsx)(n.Center,{width:g,children:(0,c.jsxs)(n.VStack,{space:"",w:"300px",children:[(0,c.jsxs)(n.Box,{ml:"25px",children:[(0,c.jsx)(d.Heading,{children:v("Welcome!")}),(0,c.jsx)(d.BodyMedium,{textTransform:"inherit",fontSize:"18px",children:v("Login using your Mobile Number")})]}),(0,c.jsxs)(n.VStack,{space:2,pt:"25px",pb:"25px",children:["alert"in p?(0,c.jsx)(n.Alert,{w:"100%",status:"error",children:(0,c.jsx)(n.VStack,{space:2,flexShrink:1,w:"100%",children:(0,c.jsxs)(n.HStack,{flexShrink:1,space:2,justifyContent:"space-between",children:[(0,c.jsxs)(n.HStack,{space:2,flexShrink:1,children:[(0,c.jsx)(n.Alert.Icon,{mt:"1"}),(0,c.jsx)(d.Subtitle,{color:null===u||void 0===u?void 0:u.gray,children:p.alert})]}),(0,c.jsx)(n.IconButton,{variant:"unstyled",icon:(0,c.jsx)(n.CloseIcon,{size:"3",color:null===u||void 0===u?void 0:u.gray}),onPress:e=>m({})})]})})}):(0,c.jsx)(c.Fragment,{}),(0,c.jsx)(n.VStack,{space:"30px",p:"20px",children:null===S||void 0===S?void 0:S.map(((e,t)=>(0,c.jsxs)(n.FormControl,{isRequired:!0,isInvalid:(null===e||void 0===e?void 0:e.attribute)in p,name:null===e||void 0===e?void 0:e.attribute,children:[(0,c.jsx)(n.FormControl.Label,{_text:{fontSize:"14px",fontWeight:"600",fontFamily:"Fredoka",color:"#6461D2",lineHeight:"19px",lineSpacing:"0.025em"},mb:"10px",children:v(null===e||void 0===e?void 0:e.label)}),(0,c.jsx)(n.Input,{name:null===e||void 0===e?void 0:e.attribute,bg:"white",variant:"rounded",maxLength:"10",borderColor:null!==x&&void 0!==x&&x[null===e||void 0===e?void 0:e.attribute]?"orange.500":"#C1C1C1",p:"10px",placeholder:v("ENTER")+" "+v(null===e||void 0===e?void 0:e.label),onChange:t=>((e,t)=>{let o={};if(isNaN(Number(e.target.value)))o={...o,mobileNumber:v("Phone Number is invalid")},m(o);else{const i={...x,[t]:e.target.value};h(i),o={},m(o)}})(t,null===e||void 0===e?void 0:e.attribute)},null===e||void 0===e?void 0:e.attribute),(null===e||void 0===e?void 0:e.attribute)in p?(0,c.jsx)(n.FormControl.ErrorMessage,{_text:{fontSize:"xs",color:null===u||void 0===u?void 0:u.error,fontWeight:500},children:p[null===e||void 0===e?void 0:e.attribute]},t):(0,c.jsx)(c.Fragment,{})]},t)))})]}),(0,c.jsx)(n.Button,{variant:"rounded",p:"3",onPress:()=>{(()=>{let e={};return"undefined"!==typeof(null===x||void 0===x?void 0:x.mobileNumber)&&""!==(null===x||void 0===x?void 0:x.mobileNumber)||(e={...e,mobileNumber:v("MOBILE_NUMBER_IS_REQUIRED")}),m(e),!e.mobileNumber})()&&b("/otp")},children:v("Get OTP >")})]})})})})}},67186:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var i=o(92950),r=o.n(i),n=o(64757),s=o(15378),a=o(86040),l=o(34428),d=o(32302),c=o(57450);const u=(0,d.overrideColorTheme)();function x(e){let{swPath:t}=e;const[x,h]=(0,i.useState)(),[p,m]=r().useState({}),{t:v}=(0,s.useTranslation)(),[g,j]=(0,d.useWindowSize)(),b=(0,a.useNavigate)(),S=[{label:"OTP One",attribute:"otp_one"},{label:"OTP Two",attribute:"otp_two"},{label:"OTP Three",attribute:"otp_three"},{label:"OTP Four",attribute:"otp_four"}];return(0,c.jsx)(d.Layout,{_appBar:{languages:l.Mj,isBackButtonShow:!1,isHideMenuButton:!0,imageUrl:"../../src/assets/SubjectBg.png",LeftIcon:(0,c.jsxs)(n.HStack,{width:"65px",children:[(0,c.jsx)(n.Avatar,{size:"37",width:"100%",rounded:"md",style:{borderRadius:"0px"},source:o(9922)}),(0,c.jsx)(n.Divider,{width:"1.62px",height:"35.75px",bg:"#41C88E",order:"0",ml:"5px"}),(0,c.jsx)(n.Avatar,{bg:"",size:"37",rounded:"md",borderRadius:"0px",source:o(95799)})]}),rightIcon:(0,c.jsx)(n.HStack,{paddingBottom:"25px",children:(0,c.jsx)(IconByName,{name:"CloseCircleFillIcon"})})},children:(0,c.jsx)(n.Box,{children:(0,c.jsx)(n.Center,{width:g,children:(0,c.jsxs)(n.VStack,{space:"",w:"300px",children:[(0,c.jsxs)(n.Box,{children:[(0,c.jsx)(d.Heading,{children:v("Welcome!")}),(0,c.jsx)(d.BodyMedium,{textTransform:"inherit",children:v("Login using your Mobile Number")})]}),(0,c.jsxs)(n.VStack,{space:2,pt:"25px",pb:"25px",children:["alert"in p?(0,c.jsx)(n.Alert,{w:"100%",status:"error",children:(0,c.jsx)(n.VStack,{space:2,flexShrink:1,w:"100%",children:(0,c.jsxs)(n.HStack,{flexShrink:1,space:2,justifyContent:"space-between",children:[(0,c.jsxs)(n.HStack,{space:2,flexShrink:1,children:[(0,c.jsx)(n.Alert.Icon,{mt:"1"}),(0,c.jsx)(d.Subtitle,{color:null===u||void 0===u?void 0:u.gray,children:p.alert})]}),(0,c.jsx)(n.IconButton,{variant:"unstyled",icon:(0,c.jsx)(n.CloseIcon,{size:"3",color:null===u||void 0===u?void 0:u.gray}),onPress:e=>m({})})]})})}):(0,c.jsx)(c.Fragment,{}),(0,c.jsx)(n.HStack,{space:"30px",p:"20px",children:null===S||void 0===S?void 0:S.map(((e,t)=>(0,c.jsxs)(n.FormControl,{isRequired:!0,isInvalid:(null===e||void 0===e?void 0:e.attribute)in p,name:null===e||void 0===e?void 0:e.attribute,width:"15%",children:[(0,c.jsx)(n.Input,{name:null===e||void 0===e?void 0:e.attribute,bg:"white",variant:"rounded",borderColor:null!==x&&void 0!==x&&x[null===e||void 0===e?void 0:e.attribute]?"orange.500":"#C1C1C1",pr:"10px",pl:"15px",pt:"10px",pb:"10px",width:"40px",placeholder:"0",onChange:t=>((e,t)=>{const o={...x,[t]:e.target.value};h(o)})(t,null===e||void 0===e?void 0:e.attribute)},null===e||void 0===e?void 0:e.attribute),(null===e||void 0===e?void 0:e.attribute)in p?(0,c.jsx)(n.FormControl.ErrorMessage,{_text:{fontSize:"xs",color:null===u||void 0===u?void 0:u.error,fontWeight:500},children:p[null===e||void 0===e?void 0:e.attribute]},t):(0,c.jsx)(c.Fragment,{})]},t)))})]}),(0,c.jsx)(n.Button,{p:"3",variant:"rounded",onPress:()=>{b("/onboarding")},children:v("Submit OTP")})]})})})})}},47509:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});o(92950);var i=o(64757),r=o(15378),n=o(86040),s=o(34428),a=o(32302),l=o(57450);function d(e){let{swPath:t}=e;const{t:d}=(0,r.useTranslation)(),[c,u]=(0,a.useWindowSize)();(0,n.useNavigate)();return(0,l.jsx)(a.Layout,{_appBar:{languages:s.Mj,isBackButtonShow:!1,isHideMenuButton:!0,imageUrl:"../../src/assets/SubjectBg.png",CenterIcon:!0,LeftIcon:(0,l.jsxs)(i.HStack,{width:"65px",mt:"35px",children:[(0,l.jsx)(i.Avatar,{size:"37",width:"100%",rounded:"md",borderRadius:"0px",source:o(9922)}),(0,l.jsx)(i.Divider,{width:"1.62px",height:"35.75px",bg:"#41C88E",order:"0",ml:"5px"}),(0,l.jsx)(i.Avatar,{bg:"",size:"37",rounded:"md",borderRadius:"0px",source:o(95799)})]})},_height:"130px",children:(0,l.jsx)(i.Box,{children:(0,l.jsxs)(i.Center,{width:c,children:[(0,l.jsxs)(i.VStack,{space:"",w:"300px",children:[(0,l.jsx)(i.Box,{children:(0,l.jsx)(a.Heading,{children:d("Welcome Vishal!")})}),(0,l.jsx)(i.VStack,{space:2,pt:"25px",pb:"25px",children:(0,l.jsx)(i.Center,{children:(0,l.jsx)("div",{style:{padding:"35px",border:"2px dashed #6461D2",borderRadius:"100px"},children:(0,l.jsx)(i.Avatar,{borderRadius:"0px",bg:"",source:{uri:o(50877)},size:"2xl"})})})}),(0,l.jsx)(i.VStack,{children:(0,l.jsxs)(i.Center,{children:[(0,l.jsxs)(i.HStack,{space:"2",children:[(0,l.jsx)(i.CircleIcon,{size:"3",color:"#6461D2",style:{marginTop:"5px"}}),(0,l.jsx)(Text,{color:"#6461D2",children:"Learn"})]}),(0,l.jsx)(Text,{fontFamily:"Montserrat",mt:"30px",children:"Learn Anytime,Anywhere"})]})})]}),(0,l.jsx)(i.HStack,{mt:"100px",children:[1,2,3,4].map((e=>2==e?(0,l.jsx)(i.Box,{bg:"#6461D2",width:"90px",borderRadius:"40px",height:"20px"}):(0,l.jsx)(i.CircleIcon,{color:"#FFB902",size:"25"},e)))})]})})})}},46210:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});o(92950);var i=o(64757),r=o(15378),n=o(86040),s=o(34428),a=o(32302),l=o(57450);function d(){const{t:e}=(0,r.useTranslation)(),[t,d]=(0,a.useWindowSize)(),c=(0,n.useNavigate)();return(0,l.jsx)(a.Layout,{_appBar:{languages:s.Mj,isBackButtonShow:!1,isHideMenuButton:!0,imageUrl:"../../src/assets/SubjectBg.png",CenterIcon:!0,LeftIcon:(0,l.jsxs)(i.HStack,{width:"65px",mt:"35px",children:[(0,l.jsx)(i.Avatar,{size:"37",width:"100%",rounded:"md",style:{borderRadius:"0px"},source:o(9922)}),(0,l.jsx)(i.Divider,{width:"1.62px",height:"35.75px",bg:"#41C88E",order:"0",ml:"5px"}),(0,l.jsx)(i.Avatar,{bg:"",size:"37",rounded:"md",style:{borderRadius:"0px"},source:o(95799)})]})},_height:"130px",children:(0,l.jsx)(i.Box,{children:(0,l.jsx)(i.Center,{width:t,children:(0,l.jsxs)(i.VStack,{space:"",w:"300px",children:[(0,l.jsxs)(i.Box,{alignItems:"center",children:[(0,l.jsx)(a.Heading,{children:e("Welcome")+" "+localStorage.getItem("name")+"!"}),(0,l.jsxs)(a.BodyMedium,{textTransform:"inherit",children:["Class :"," ",localStorage.getItem("class")+" "+localStorage.getItem("section")]})]}),(0,l.jsx)(i.VStack,{space:2,pt:"25px",pb:"25px",children:(0,l.jsx)(i.Center,{children:(0,l.jsx)("div",{style:{padding:"35px",border:"2px dashed #6461D2",borderRadius:"100px"},children:(0,l.jsx)(i.Avatar,{borderRadius:"0px",bg:"",source:{uri:o(35255)},size:"2xl"})})})}),(0,l.jsx)(i.VStack,{children:(0,l.jsxs)(i.Center,{children:[(0,l.jsxs)(i.HStack,{space:"2",children:[(0,l.jsx)(i.CircleIcon,{size:"3",color:"#6461D2",style:{marginTop:"5px"}}),(0,l.jsx)(i.Text,{color:"#6461D2",children:e("IMPROVE")})]}),(0,l.jsx)(i.Text,{fontFamily:"Montserrat",mt:"30px",children:e("IMPROVE_SUBTITLE")})]})}),(0,l.jsx)(i.Button,{p:"3",onPress:()=>{c("/selfassesment"),window.location.reload()},variant:"rounded",mt:"20px",children:e("LETS_GO")})]})})})})}},30312:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var i=o(92950),r=o.n(i),n=o(64757),s=o(15378),a=o(86040),l=o(34428),d=o(32302),c=o(57450);const u=(0,d.overrideColorTheme)();function x(e){let{swPath:t}=e;const[x,h]=(0,i.useState)(),[p,m]=r().useState({}),{t:v}=(0,s.useTranslation)(),g=(0,a.useNavigate)(),j=[{label:"Mobile Number",attribute:"mobileNumber"},{label:"Name",attribute:"name"},{label:"Date of Birth",attribute:"dateOfBirth"},{label:"Email ID",attribute:"emailId"},{label:"State",attribute:"state"},{label:"District",attribute:"district"},{label:"Block",attribute:"block"},{label:"School",attribute:"school"},{label:"UDISE",attribute:"udise"},{label:"Class",attribute:"class"}],b=(e,t)=>{let o,i={};"mobileNumber"===t?isNaN(Number(e.target.value))?(i={...i,mobileNumber:v("Phone Number is invalid")},m(i)):(i={},m(i),o={...x,[t]:e.target.value},h(o)):(i={},o="state"===t?{...x,[t]:e}:{...x,[t]:e.target.value},console.log(o),h(o),m(i))};return(0,c.jsx)(d.Layout,{_appBar:{languages:l.Mj,isBackButtonShow:!1,isHideMenuButton:!0,LeftIcon:(0,c.jsxs)(n.HStack,{width:"65px",children:[(0,c.jsx)(n.Avatar,{size:"37",width:"100%",rounded:"md",borderRadius:"0px",source:o(9922)}),(0,c.jsx)(n.Divider,{width:"1.62px",height:"35.75px",bg:"#41C88E",order:"0",ml:"5px"}),(0,c.jsx)(n.Avatar,{bg:"",size:"37",rounded:"md",borderRadius:"0px",source:o(95799)})]}),rightIcon:(0,c.jsx)(n.HStack,{paddingBottom:"25px",children:(0,c.jsx)(d.IconByName,{name:"CloseCircleFillIcon"})})},children:(0,c.jsx)(n.Box,{children:(0,c.jsx)(n.Center,{width:"100%",children:(0,c.jsxs)(n.VStack,{space:"",children:[(0,c.jsxs)(n.Box,{ml:"25px",children:[(0,c.jsx)(d.Heading,{children:v("Welcome!")}),(0,c.jsx)(d.BodyMedium,{textTransform:"inherit",children:v("Sign Up")})]}),(0,c.jsxs)(n.VStack,{space:2,pt:"25px",pb:"10px",children:["alert"in p?(0,c.jsx)(n.Alert,{w:"100%",status:"error",children:(0,c.jsx)(n.VStack,{space:2,flexShrink:1,w:"100%",children:(0,c.jsxs)(n.HStack,{flexShrink:1,space:2,justifyContent:"space-between",children:[(0,c.jsxs)(n.HStack,{space:2,flexShrink:1,children:[(0,c.jsx)(n.Alert.Icon,{mt:"1"}),(0,c.jsx)(d.Subtitle,{color:null===u||void 0===u?void 0:u.gray,children:p.alert})]}),(0,c.jsx)(n.IconButton,{variant:"unstyled",icon:(0,c.jsx)(n.CloseIcon,{size:"3",color:null===u||void 0===u?void 0:u.gray}),onPress:()=>m({})})]})})}):(0,c.jsx)(c.Fragment,{}),(0,c.jsx)(n.VStack,{space:"30px",p:"20px",overflowY:"auto",children:null===j||void 0===j?void 0:j.map(((e,t)=>(0,c.jsxs)(n.FormControl,{isRequired:!0,isInvalid:(null===e||void 0===e?void 0:e.attribute)in p,name:null===e||void 0===e?void 0:e.attribute,children:[(0,c.jsx)(n.FormControl.Label,{_text:{fontSize:"14px",fontWeight:"400",color:"#6461D2"},mb:"10px",children:v(null===e||void 0===e?void 0:e.label)}),"state"===(null===e||void 0===e?void 0:e.attribute)?(0,c.jsx)(n.Select,{accessibilityLabel:e.placeholder,placeholder:"Select",variant:"rounded",name:null===e||void 0===e?void 0:e.attribute,borderColor:null!==x&&void 0!==x&&x[null===e||void 0===e?void 0:e.attribute]?"orange.500":"#C1C1C1",onValueChange:t=>b(t,null===e||void 0===e?void 0:e.attribute),children:(0,c.jsx)(n.Select.Item,{label:"Maharashtra",value:"Maharashtra"},null===e||void 0===e?void 0:e.attribute)},null===e||void 0===e?void 0:e.attribute):(0,c.jsx)(n.Input,{name:null===e||void 0===e?void 0:e.attribute,bg:"white",variant:"rounded",borderColor:null!==x&&void 0!==x&&x[null===e||void 0===e?void 0:e.attribute]?"orange.500":"#C1C1C1",p:"10px",maxLength:"mobileNumber"===(null===e||void 0===e?void 0:e.attribute)?10:125,placeholder:v("ENTER")+" "+v(null===e||void 0===e?void 0:e.label),onChange:t=>b(t,null===e||void 0===e?void 0:e.attribute),InputRightElement:"dateOfBirth"==(null===e||void 0===e?void 0:e.attribute)?(0,c.jsx)(d.IconByName,{name:"CalendarEventLineIcon",color:"#6461D2",_icon:{size:"15"},alignItems:"center",padding:"10px",isDisabled:!0}):null},null===e||void 0===e?void 0:e.attribute),(null===e||void 0===e?void 0:e.attribute)in p?(0,c.jsx)(n.FormControl.ErrorMessage,{_text:{fontSize:"xs",color:null===u||void 0===u?void 0:u.error,fontWeight:500},children:p[null===e||void 0===e?void 0:e.attribute]},t):(0,c.jsx)(c.Fragment,{})]},t)))})]}),(0,c.jsx)(n.Button,{variant:"rounded",p:"3",onPress:()=>{(()=>{let e={};return"undefined"!==typeof(null===x||void 0===x?void 0:x.mobileNumber)&&""!==(null===x||void 0===x?void 0:x.mobileNumber)||(e={...e,mobileNumber:v("MOBILE_NUMBER_IS_REQUIRED")}),"undefined"!==typeof(null===x||void 0===x?void 0:x.name)&&""!==(null===x||void 0===x?void 0:x.name)||(e={...e,name:v("NAME_IS_REQUIRED")}),"undefined"!==typeof(null===x||void 0===x?void 0:x.dateOfBirth)&&""!==(null===x||void 0===x?void 0:x.dateOfBirth)||(e={...e,dateOfBirth:v("DATE_OF_BIRTH_IS_REQUIRED")}),"undefined"!==typeof(null===x||void 0===x?void 0:x.emailId)&&""!==(null===x||void 0===x?void 0:x.emailId)||(e={...e,emailId:v("EMAIL_ID_IS_REQUIRED")}),"undefined"!==typeof(null===x||void 0===x?void 0:x.state)&&""!==(null===x||void 0===x?void 0:x.state)||(e={...e,state:v("STATE_IS_REQUIRED")}),"undefined"!==typeof(null===x||void 0===x?void 0:x.district)&&""!==(null===x||void 0===x?void 0:x.district)||(e={...e,district:v("DISTRICT_IS_REQUIRED")}),"undefined"!==typeof(null===x||void 0===x?void 0:x.block)&&""!==(null===x||void 0===x?void 0:x.block)||(e={...e,block:v("BLOCK_IS_REQUIRED")}),"undefined"!==typeof(null===x||void 0===x?void 0:x.school)&&""!==(null===x||void 0===x?void 0:x.school)||(e={...e,school:v("SCHOOL_IS_REQUIRED")}),"undefined"!==typeof(null===x||void 0===x?void 0:x.udise)&&""!==(null===x||void 0===x?void 0:x.udise)||(e={...e,udise:v("UDISE_IS_REQUIRED")}),"undefined"!==typeof(null===x||void 0===x?void 0:x.class)&&""!==(null===x||void 0===x?void 0:x.class)||(e={...e,class:v("CLASS_IS_REQUIRED")}),m(e),!(e.mobileNumber&&e.name&&e.dateOfBirth&&e.emailId&&e.state&&e.district&&e.block&&e.school&&e.udise&&e.class)})()&&g("/mobilenumberscreen")},children:v("Get OTP >")})]})})})})}},61164:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var i=o(92950),r=o.n(i),n=o(64757),s=o(15378),a=o(34428),l=o(32302),d=o(57450);const c=(0,l.overrideColorTheme)();function u(e){let{swPath:t}=e;const[u,x]=(0,i.useState)(),[h,p]=r().useState({}),[m,v]=r().useState(!1),{t:g}=(0,s.useTranslation)(),[j,b]=(0,l.useWindowSize)(),S=localStorage.getItem("name"),f=localStorage.getItem("grade"),I=localStorage.getItem("medium"),w=localStorage.getItem("id"),C=localStorage.getItem("board");(0,i.useEffect)((()=>{const e={context:{env:"log-out",cdata:[]},edata:{type:"edit",subtype:"Scroll",pageid:"log-out",uid:w,studentid:"student-id",userName:S,grade:f,medium:I,board:C}};l.telemetryFactory.impression(e);const t={context:{env:"sign-out",cdata:[]},edata:{id:"log-out-button",type:"CLICK",subtype:"",pageid:"sign-out",uid:w,studentid:"student-id",userName:S,grade:f,medium:I,board:C}};l.telemetryFactory.interact(t)}),[]);return(0,d.jsx)(l.Layout,{_appBar:{languages:a.Mj,isBackButtonShow:!1,isHideMenuButton:!0,imageUrl:"../../src/assets/SubjectBg.png",LeftIcon:!1,rightIcon:!1},children:(0,d.jsx)(n.Box,{overflow:"hidden",children:(0,d.jsxs)(n.Center,{width:j,children:[(0,d.jsx)(n.HStack,{overflow:"hidden",children:(0,d.jsx)(n.Center,{children:(0,d.jsx)("img",{width:"200px",src:o(64814)})})}),(0,d.jsxs)(n.VStack,{overflow:"hidden",space:"",w:"300px",children:[(0,d.jsx)(n.Center,{children:(0,d.jsx)(n.Box,{textAlign:"center",children:(0,d.jsx)(l.H3,{style:{fontSize:"16px"},children:"Accelerated Learning via Technology (ALT)"})})}),(0,d.jsx)(n.Center,{children:(0,d.jsx)(n.Box,{children:(0,d.jsx)(l.Heading,{children:g("WELCOME")})})}),(0,d.jsxs)(n.VStack,{space:2,pb:"25px",children:["alert"in h?(0,d.jsx)(n.Alert,{w:"100%",status:"error",children:(0,d.jsx)(n.VStack,{space:2,flexShrink:1,w:"100%",children:(0,d.jsxs)(n.HStack,{flexShrink:1,space:2,justifyContent:"space-between",children:[(0,d.jsxs)(n.HStack,{space:2,flexShrink:1,children:[(0,d.jsx)(n.Alert.Icon,{mt:"1"}),(0,d.jsx)(l.Subtitle,{color:null===c||void 0===c?void 0:c.gray,children:h.alert})]}),(0,d.jsx)(n.IconButton,{variant:"unstyled",icon:(0,d.jsx)(n.CloseIcon,{size:"3",color:null===c||void 0===c?void 0:c.gray}),onPress:e=>p({})})]})})}):(0,d.jsx)(d.Fragment,{}),(0,d.jsxs)(n.VStack,{space:"30px",p:!0,children:[(0,d.jsxs)(n.FormControl,{isRequired:!0,isInvalid:"username"in h,children:[(0,d.jsx)(n.FormControl.Label,{_text:{fontSize:"14px",fontWeight:"400",color:"#6461D2"},children:g("USERNAME")}),(0,d.jsx)(n.Input,{bg:"white",variant:"rounded",borderColor:null!==u&&void 0!==u&&u.username?"yellow.500":"#C1C1C1",placeholder:g("ENTER_USERNAME"),onChange:e=>x({...u,username:e.target.value})}),"username"in h?(0,d.jsx)(n.FormControl.ErrorMessage,{_text:{fontSize:"xs",color:null===c||void 0===c?void 0:c.error,fontWeight:500},children:h.username}):(0,d.jsx)(d.Fragment,{})]}),(0,d.jsxs)(n.FormControl,{isRequired:!0,isInvalid:"password"in h,children:[(0,d.jsx)(n.FormControl.Label,{_text:{fontSize:"14px",fontWeight:"400",color:"#6461D2"},children:g("PASSWORD")}),(0,d.jsx)(n.Input,{bg:"white",variant:"rounded",type:m?"text":"password",borderColor:null!==u&&void 0!==u&&u.password?"yellow.500":"#C1C1C1",p:"10px",placeholder:g("ENTER_PASSWORD"),onChange:e=>x({...u,password:e.target.value}),InputRightElement:(0,d.jsx)(l.IconByName,{name:m?"EyeLineIcon":"EyeOffLineIcon",_icon:{size:15},rounded:"full",onPress:()=>v(!m)})}),"password"in h?(0,d.jsx)(n.FormControl.ErrorMessage,{_text:{fontSize:"xs",color:null===c||void 0===c?void 0:c.error,fontWeight:500},children:h.username}):(0,d.jsx)(d.Fragment,{})]}),(0,d.jsx)(n.Button,{onPress:async()=>{const e={context:{env:"log-in",cdata:[]},edata:{type:"edit",subtype:"Scroll",pageid:"log-in",uid:w,studentid:"student-id",userName:S,grade:f,medium:I,board:C}};l.telemetryFactory.impression(e);const t={context:{env:"sign-in",cdata:[]},edata:{id:"login-button",type:"CLICK",subtype:"",pageid:"sign-in",uid:w,studentid:"student-id",userName:S,grade:f,medium:I,board:C}};if(l.telemetryFactory.interact(t),(()=>{let e={};return"undefined"!==typeof(null===u||void 0===u?void 0:u.username)&&""!==(null===u||void 0===u?void 0:u.username)||(e={...e,username:g("USERNAME_IS_REQUIRED")}),"undefined"!==typeof(null===u||void 0===u?void 0:u.password)&&""!==(null===u||void 0===u?void 0:u.password)||(e={...e,password:g("PASSWORD_IS_REQUIRED")}),p(e),!e.username&&!e.password})()){const e=await(0,l.fetchToken)(a.a5,null===u||void 0===u?void 0:u.username,null===u||void 0===u?void 0:u.password);if(null!==e&&void 0!==e&&e.data){var o;console.log("Token Data");let t=e.data.access_token,i=e.data.refresh_token;console.log(i),sessionStorage.setItem("refreshToken",i),sessionStorage.setItem("token",t);let r={};r=await(0,l.getAuthUser)(),null!==(o=r)&&void 0!==o&&o.id?window.location.reload():(localStorage.removeItem("token"),p({alert:g("PLEASE_ENTER_VALID_CREDENTIALS")}))}else localStorage.removeItem("token"),p({alert:g("PLEASE_ENTER_VALID_CREDENTIALS")})}},variant:"rounded",children:g("LOGIN")}),(0,d.jsx)(n.VStack,{children:(0,d.jsxs)(n.Box,{textAlign:"center",children:[(0,d.jsx)(l.H3,{style:{fontSize:"16px"},children:"Tips for better experience"}),(0,d.jsx)(l.H3,{textAlign:"justify",children:"1. Please use chrome browser for better experience."}),(0,d.jsx)(l.H3,{textAlign:"justify",children:"2. Incase any issue persists during login then try with incognito mode of your browser to access the platform."})]})})]})]})]})]})})})}},57450:(e,t,o)=>{e.exports=o(55282)},34428:e=>{e.exports=JSON.parse('{"Mj":[{"title":"English","path":"./samagra-shiksha.en-gb.json","overridePath":"./override-samagra-shiksha.en-gb.json","code":"en"},{"title":"Hindi","path":"./samagra-shiksha.en-gb.json","overridePath":"./override-samagra-shiksha.en-gb.json","code":"hi"},{"title":"Odiya","path":"./samagra-shiksha.hi-in.json","overridePath":"./override-samagra-shiksha.hi-in.json","code":"od"},{"title":"Bangali","path":"./samagra-shiksha.hi-in.json","overridePath":"./override-samagra-shiksha.hi-in.json","code":"bn"}],"a5":"https://alt.uniteframework.io/auth/realms/hasura-app/protocol/openid-connect/token"}')}}]);
//# sourceMappingURL=5498.5b3ae2e3.chunk.js.map