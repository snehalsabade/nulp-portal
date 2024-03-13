"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([[2828,6040],{35011:(e,t,i)=>{i.r(t);var o=i(92950),n=i.n(o),r=i(12181),s=i.n(r),l=(i(10655),i(64757)),a=i(15378),d=i(86040);const c=JSON.parse('{"Mj":[{"title":"English","path":"./samagra-shiksha.en-gb.json","overridePath":"./override-samagra-shiksha.en-gb.json","code":"en"},{"title":"Hindi","path":"./samagra-shiksha.en-gb.json","overridePath":"./override-samagra-shiksha.en-gb.json","code":"hi"},{"title":"Odiya","path":"./samagra-shiksha.hi-in.json","overridePath":"./override-samagra-shiksha.hi-in.json","code":"od"},{"title":"Bangali","path":"./samagra-shiksha.hi-in.json","overridePath":"./override-samagra-shiksha.hi-in.json","code":"bn"}],"a5":"https://alt.uniteframework.io/auth/realms/hasura-app/protocol/openid-connect/token"}');var u=i(32302),x=i(57450);(0,u.overrideColorTheme)();const h=(0,u.overrideColorTheme)();function p(e){let{swPath:t}=e;const[r,s]=(0,o.useState)(),[p,v]=n().useState({}),{t:m}=(0,a.useTranslation)(),j=(0,d.useNavigate)(),g=[{label:"Mobile Number",attribute:"mobileNumber"},{label:"Name",attribute:"name"},{label:"Date of Birth",attribute:"dateOfBirth"},{label:"Email ID",attribute:"emailId"},{label:"State",attribute:"state"},{label:"District",attribute:"district"},{label:"Block",attribute:"block"},{label:"School",attribute:"school"},{label:"UDISE",attribute:"udise"},{label:"Class",attribute:"class"}],b=(e,t)=>{let i,o={};"mobileNumber"===t?isNaN(Number(e.target.value))?(o={...o,mobileNumber:m("Phone Number is invalid")},v(o)):(o={},v(o),i={...r,[t]:e.target.value},s(i)):(o={},i="state"===t?{...r,[t]:e}:{...r,[t]:e.target.value},console.log(i),s(i),v(o))};return(0,x.jsx)(u.Layout,{_appBar:{languages:c.Mj,isBackButtonShow:!1,isHideMenuButton:!0,LeftIcon:(0,x.jsxs)(l.HStack,{width:"65px",children:[(0,x.jsx)(l.Avatar,{size:"37",width:"100%",rounded:"md",borderRadius:"0px",source:i(9922)}),(0,x.jsx)(l.Divider,{width:"1.62px",height:"35.75px",bg:"#41C88E",order:"0",ml:"5px"}),(0,x.jsx)(l.Avatar,{bg:"",size:"37",rounded:"md",borderRadius:"0px",source:i(95799)})]}),rightIcon:(0,x.jsx)(l.HStack,{paddingBottom:"25px",children:(0,x.jsx)(u.IconByName,{name:"CloseCircleFillIcon"})})},children:(0,x.jsx)(l.Box,{children:(0,x.jsx)(l.Center,{width:"100%",children:(0,x.jsxs)(l.VStack,{space:"",children:[(0,x.jsxs)(l.Box,{ml:"25px",children:[(0,x.jsx)(u.Heading,{children:m("Welcome!")}),(0,x.jsx)(u.BodyMedium,{textTransform:"inherit",children:m("Sign Up")})]}),(0,x.jsxs)(l.VStack,{space:2,pt:"25px",pb:"10px",children:["alert"in p?(0,x.jsx)(l.Alert,{w:"100%",status:"error",children:(0,x.jsx)(l.VStack,{space:2,flexShrink:1,w:"100%",children:(0,x.jsxs)(l.HStack,{flexShrink:1,space:2,justifyContent:"space-between",children:[(0,x.jsxs)(l.HStack,{space:2,flexShrink:1,children:[(0,x.jsx)(l.Alert.Icon,{mt:"1"}),(0,x.jsx)(u.Subtitle,{color:null===h||void 0===h?void 0:h.gray,children:p.alert})]}),(0,x.jsx)(l.IconButton,{variant:"unstyled",icon:(0,x.jsx)(l.CloseIcon,{size:"3",color:null===h||void 0===h?void 0:h.gray}),onPress:()=>v({})})]})})}):(0,x.jsx)(x.Fragment,{}),(0,x.jsx)(l.VStack,{space:"30px",p:"20px",overflowY:"auto",children:null===g||void 0===g?void 0:g.map(((e,t)=>(0,x.jsxs)(l.FormControl,{isRequired:!0,isInvalid:(null===e||void 0===e?void 0:e.attribute)in p,name:null===e||void 0===e?void 0:e.attribute,children:[(0,x.jsx)(l.FormControl.Label,{_text:{fontSize:"14px",fontWeight:"400",color:"#6461D2"},mb:"10px",children:m(null===e||void 0===e?void 0:e.label)}),"state"===(null===e||void 0===e?void 0:e.attribute)?(0,x.jsx)(l.Select,{accessibilityLabel:e.placeholder,placeholder:"Select",variant:"rounded",name:null===e||void 0===e?void 0:e.attribute,borderColor:null!==r&&void 0!==r&&r[null===e||void 0===e?void 0:e.attribute]?"orange.500":"#C1C1C1",onValueChange:t=>b(t,null===e||void 0===e?void 0:e.attribute),children:(0,x.jsx)(l.Select.Item,{label:"Maharashtra",value:"Maharashtra"},null===e||void 0===e?void 0:e.attribute)},null===e||void 0===e?void 0:e.attribute):(0,x.jsx)(l.Input,{name:null===e||void 0===e?void 0:e.attribute,bg:"white",variant:"rounded",borderColor:null!==r&&void 0!==r&&r[null===e||void 0===e?void 0:e.attribute]?"orange.500":"#C1C1C1",p:"10px",maxLength:"mobileNumber"===(null===e||void 0===e?void 0:e.attribute)?10:125,placeholder:m("ENTER")+" "+m(null===e||void 0===e?void 0:e.label),onChange:t=>b(t,null===e||void 0===e?void 0:e.attribute),InputRightElement:"dateOfBirth"==(null===e||void 0===e?void 0:e.attribute)?(0,x.jsx)(u.IconByName,{name:"CalendarEventLineIcon",color:"#6461D2",_icon:{size:"15"},alignItems:"center",padding:"10px",isDisabled:!0}):null},null===e||void 0===e?void 0:e.attribute),(null===e||void 0===e?void 0:e.attribute)in p?(0,x.jsx)(l.FormControl.ErrorMessage,{_text:{fontSize:"xs",color:null===h||void 0===h?void 0:h.error,fontWeight:500},children:p[null===e||void 0===e?void 0:e.attribute]},t):(0,x.jsx)(x.Fragment,{})]},t)))})]}),(0,x.jsx)(l.Button,{variant:"rounded",p:"3",onPress:()=>{(()=>{let e={};return"undefined"!==typeof(null===r||void 0===r?void 0:r.mobileNumber)&&""!==(null===r||void 0===r?void 0:r.mobileNumber)||(e={...e,mobileNumber:m("MOBILE_NUMBER_IS_REQUIRED")}),"undefined"!==typeof(null===r||void 0===r?void 0:r.name)&&""!==(null===r||void 0===r?void 0:r.name)||(e={...e,name:m("NAME_IS_REQUIRED")}),"undefined"!==typeof(null===r||void 0===r?void 0:r.dateOfBirth)&&""!==(null===r||void 0===r?void 0:r.dateOfBirth)||(e={...e,dateOfBirth:m("DATE_OF_BIRTH_IS_REQUIRED")}),"undefined"!==typeof(null===r||void 0===r?void 0:r.emailId)&&""!==(null===r||void 0===r?void 0:r.emailId)||(e={...e,emailId:m("EMAIL_ID_IS_REQUIRED")}),"undefined"!==typeof(null===r||void 0===r?void 0:r.state)&&""!==(null===r||void 0===r?void 0:r.state)||(e={...e,state:m("STATE_IS_REQUIRED")}),"undefined"!==typeof(null===r||void 0===r?void 0:r.district)&&""!==(null===r||void 0===r?void 0:r.district)||(e={...e,district:m("DISTRICT_IS_REQUIRED")}),"undefined"!==typeof(null===r||void 0===r?void 0:r.block)&&""!==(null===r||void 0===r?void 0:r.block)||(e={...e,block:m("BLOCK_IS_REQUIRED")}),"undefined"!==typeof(null===r||void 0===r?void 0:r.school)&&""!==(null===r||void 0===r?void 0:r.school)||(e={...e,school:m("SCHOOL_IS_REQUIRED")}),"undefined"!==typeof(null===r||void 0===r?void 0:r.udise)&&""!==(null===r||void 0===r?void 0:r.udise)||(e={...e,udise:m("UDISE_IS_REQUIRED")}),"undefined"!==typeof(null===r||void 0===r?void 0:r.class)&&""!==(null===r||void 0===r?void 0:r.class)||(e={...e,class:m("CLASS_IS_REQUIRED")}),v(e),!(e.mobileNumber&&e.name&&e.dateOfBirth&&e.emailId&&e.state&&e.district&&e.block&&e.school&&e.udise&&e.class)})()&&j("/mobilenumberscreen")},children:m("Get OTP >")})]})})})})}const v=(0,u.overrideColorTheme)();function m(e){let{swPath:t}=e;const[r,s]=(0,o.useState)(),[h,p]=n().useState({}),{t:m}=(0,a.useTranslation)(),[j,g]=(0,u.useWindowSize)(),b=(0,d.useNavigate)(),S=[{label:"Mobile Number",attribute:"mobileNumber"}];return(0,x.jsx)(u.Layout,{_appBar:{languages:c.Mj,isBackButtonShow:!1,isHideMenuButton:!0,imageUrl:"../../src/assets/SubjectBg.png",LeftIcon:(0,x.jsxs)(l.HStack,{width:"65px",children:[(0,x.jsx)(l.Avatar,{size:"37",width:"100%",rounded:"md",borderRadius:"0px",source:i(9922)}),(0,x.jsx)(l.Divider,{width:"1.62px",height:"35.75px",bg:"#41C88E",order:"0",ml:"5px"}),(0,x.jsx)(l.Avatar,{bg:"",size:"37",rounded:"md",borderRadius:"0px",source:i(95799)})]}),rightIcon:(0,x.jsx)(l.HStack,{paddingBottom:"25px",children:(0,x.jsx)(u.IconByName,{name:"CloseCircleFillIcon"})})},_height:"150px",children:(0,x.jsx)(l.Box,{children:(0,x.jsx)(l.Center,{width:j,children:(0,x.jsxs)(l.VStack,{space:"",w:"300px",children:[(0,x.jsxs)(l.Box,{ml:"25px",children:[(0,x.jsx)(u.Heading,{children:m("Welcome!")}),(0,x.jsx)(u.BodyMedium,{textTransform:"inherit",fontSize:"18px",children:m("Login using your Mobile Number")})]}),(0,x.jsxs)(l.VStack,{space:2,pt:"25px",pb:"25px",children:["alert"in h?(0,x.jsx)(l.Alert,{w:"100%",status:"error",children:(0,x.jsx)(l.VStack,{space:2,flexShrink:1,w:"100%",children:(0,x.jsxs)(l.HStack,{flexShrink:1,space:2,justifyContent:"space-between",children:[(0,x.jsxs)(l.HStack,{space:2,flexShrink:1,children:[(0,x.jsx)(l.Alert.Icon,{mt:"1"}),(0,x.jsx)(u.Subtitle,{color:null===v||void 0===v?void 0:v.gray,children:h.alert})]}),(0,x.jsx)(l.IconButton,{variant:"unstyled",icon:(0,x.jsx)(l.CloseIcon,{size:"3",color:null===v||void 0===v?void 0:v.gray}),onPress:e=>p({})})]})})}):(0,x.jsx)(x.Fragment,{}),(0,x.jsx)(l.VStack,{space:"30px",p:"20px",children:null===S||void 0===S?void 0:S.map(((e,t)=>(0,x.jsxs)(l.FormControl,{isRequired:!0,isInvalid:(null===e||void 0===e?void 0:e.attribute)in h,name:null===e||void 0===e?void 0:e.attribute,children:[(0,x.jsx)(l.FormControl.Label,{_text:{fontSize:"14px",fontWeight:"600",fontFamily:"Fredoka",color:"#6461D2",lineHeight:"19px",lineSpacing:"0.025em"},mb:"10px",children:m(null===e||void 0===e?void 0:e.label)}),(0,x.jsx)(l.Input,{name:null===e||void 0===e?void 0:e.attribute,bg:"white",variant:"rounded",maxLength:"10",borderColor:null!==r&&void 0!==r&&r[null===e||void 0===e?void 0:e.attribute]?"orange.500":"#C1C1C1",p:"10px",placeholder:m("ENTER")+" "+m(null===e||void 0===e?void 0:e.label),onChange:t=>((e,t)=>{let i={};if(isNaN(Number(e.target.value)))i={...i,mobileNumber:m("Phone Number is invalid")},p(i);else{const o={...r,[t]:e.target.value};s(o),i={},p(i)}})(t,null===e||void 0===e?void 0:e.attribute)},null===e||void 0===e?void 0:e.attribute),(null===e||void 0===e?void 0:e.attribute)in h?(0,x.jsx)(l.FormControl.ErrorMessage,{_text:{fontSize:"xs",color:null===v||void 0===v?void 0:v.error,fontWeight:500},children:h[null===e||void 0===e?void 0:e.attribute]},t):(0,x.jsx)(x.Fragment,{})]},t)))})]}),(0,x.jsx)(l.Button,{variant:"rounded",p:"3",onPress:()=>{(()=>{let e={};return"undefined"!==typeof(null===r||void 0===r?void 0:r.mobileNumber)&&""!==(null===r||void 0===r?void 0:r.mobileNumber)||(e={...e,mobileNumber:m("MOBILE_NUMBER_IS_REQUIRED")}),p(e),!e.mobileNumber})()&&b("/otp")},children:m("Get OTP >")})]})})})})}const j=(0,u.overrideColorTheme)();function g(e){let{swPath:t}=e;const[r,s]=(0,o.useState)(),[h,p]=n().useState({}),{t:v}=(0,a.useTranslation)(),[m,g]=(0,u.useWindowSize)(),b=(0,d.useNavigate)(),S=[{label:"OTP One",attribute:"otp_one"},{label:"OTP Two",attribute:"otp_two"},{label:"OTP Three",attribute:"otp_three"},{label:"OTP Four",attribute:"otp_four"}];return(0,x.jsx)(u.Layout,{_appBar:{languages:c.Mj,isBackButtonShow:!1,isHideMenuButton:!0,imageUrl:"../../src/assets/SubjectBg.png",LeftIcon:(0,x.jsxs)(l.HStack,{width:"65px",children:[(0,x.jsx)(l.Avatar,{size:"37",width:"100%",rounded:"md",style:{borderRadius:"0px"},source:i(9922)}),(0,x.jsx)(l.Divider,{width:"1.62px",height:"35.75px",bg:"#41C88E",order:"0",ml:"5px"}),(0,x.jsx)(l.Avatar,{bg:"",size:"37",rounded:"md",borderRadius:"0px",source:i(95799)})]}),rightIcon:(0,x.jsx)(l.HStack,{paddingBottom:"25px",children:(0,x.jsx)(IconByName,{name:"CloseCircleFillIcon"})})},children:(0,x.jsx)(l.Box,{children:(0,x.jsx)(l.Center,{width:m,children:(0,x.jsxs)(l.VStack,{space:"",w:"300px",children:[(0,x.jsxs)(l.Box,{children:[(0,x.jsx)(u.Heading,{children:v("Welcome!")}),(0,x.jsx)(u.BodyMedium,{textTransform:"inherit",children:v("Login using your Mobile Number")})]}),(0,x.jsxs)(l.VStack,{space:2,pt:"25px",pb:"25px",children:["alert"in h?(0,x.jsx)(l.Alert,{w:"100%",status:"error",children:(0,x.jsx)(l.VStack,{space:2,flexShrink:1,w:"100%",children:(0,x.jsxs)(l.HStack,{flexShrink:1,space:2,justifyContent:"space-between",children:[(0,x.jsxs)(l.HStack,{space:2,flexShrink:1,children:[(0,x.jsx)(l.Alert.Icon,{mt:"1"}),(0,x.jsx)(u.Subtitle,{color:null===j||void 0===j?void 0:j.gray,children:h.alert})]}),(0,x.jsx)(l.IconButton,{variant:"unstyled",icon:(0,x.jsx)(l.CloseIcon,{size:"3",color:null===j||void 0===j?void 0:j.gray}),onPress:e=>p({})})]})})}):(0,x.jsx)(x.Fragment,{}),(0,x.jsx)(l.HStack,{space:"30px",p:"20px",children:null===S||void 0===S?void 0:S.map(((e,t)=>(0,x.jsxs)(l.FormControl,{isRequired:!0,isInvalid:(null===e||void 0===e?void 0:e.attribute)in h,name:null===e||void 0===e?void 0:e.attribute,width:"15%",children:[(0,x.jsx)(l.Input,{name:null===e||void 0===e?void 0:e.attribute,bg:"white",variant:"rounded",borderColor:null!==r&&void 0!==r&&r[null===e||void 0===e?void 0:e.attribute]?"orange.500":"#C1C1C1",pr:"10px",pl:"15px",pt:"10px",pb:"10px",width:"40px",placeholder:"0",onChange:t=>((e,t)=>{const i={...r,[t]:e.target.value};s(i)})(t,null===e||void 0===e?void 0:e.attribute)},null===e||void 0===e?void 0:e.attribute),(null===e||void 0===e?void 0:e.attribute)in h?(0,x.jsx)(l.FormControl.ErrorMessage,{_text:{fontSize:"xs",color:null===j||void 0===j?void 0:j.error,fontWeight:500},children:h[null===e||void 0===e?void 0:e.attribute]},t):(0,x.jsx)(x.Fragment,{})]},t)))})]}),(0,x.jsx)(l.Button,{p:"3",variant:"rounded",onPress:()=>{b("/onboarding")},children:v("Submit OTP")})]})})})})}function b(e){let{swPath:t}=e;const{t:o}=(0,a.useTranslation)(),[n,r]=(0,u.useWindowSize)();(0,d.useNavigate)();return(0,x.jsx)(u.Layout,{_appBar:{languages:c.Mj,isBackButtonShow:!1,isHideMenuButton:!0,imageUrl:"../../src/assets/SubjectBg.png",CenterIcon:!0,LeftIcon:(0,x.jsxs)(l.HStack,{width:"65px",mt:"35px",children:[(0,x.jsx)(l.Avatar,{size:"37",width:"100%",rounded:"md",borderRadius:"0px",source:i(9922)}),(0,x.jsx)(l.Divider,{width:"1.62px",height:"35.75px",bg:"#41C88E",order:"0",ml:"5px"}),(0,x.jsx)(l.Avatar,{bg:"",size:"37",rounded:"md",borderRadius:"0px",source:i(95799)})]})},_height:"130px",children:(0,x.jsx)(l.Box,{children:(0,x.jsxs)(l.Center,{width:n,children:[(0,x.jsxs)(l.VStack,{space:"",w:"300px",children:[(0,x.jsx)(l.Box,{children:(0,x.jsx)(u.Heading,{children:o("Welcome Vishal!")})}),(0,x.jsx)(l.VStack,{space:2,pt:"25px",pb:"25px",children:(0,x.jsx)(l.Center,{children:(0,x.jsx)("div",{style:{padding:"35px",border:"2px dashed #6461D2",borderRadius:"100px"},children:(0,x.jsx)(l.Avatar,{borderRadius:"0px",bg:"",source:{uri:i(50877)},size:"2xl"})})})}),(0,x.jsx)(l.VStack,{children:(0,x.jsxs)(l.Center,{children:[(0,x.jsxs)(l.HStack,{space:"2",children:[(0,x.jsx)(l.CircleIcon,{size:"3",color:"#6461D2",style:{marginTop:"5px"}}),(0,x.jsx)(Text,{color:"#6461D2",children:"Learn"})]}),(0,x.jsx)(Text,{fontFamily:"Montserrat",mt:"30px",children:"Learn Anytime,Anywhere"})]})})]}),(0,x.jsx)(l.HStack,{mt:"100px",children:[1,2,3,4].map((e=>2==e?(0,x.jsx)(l.Box,{bg:"#6461D2",width:"90px",borderRadius:"40px",height:"20px"}):(0,x.jsx)(l.CircleIcon,{color:"#FFB902",size:"25"},e)))})]})})})}function S(){const{t:e}=(0,a.useTranslation)(),[t,o]=(0,u.useWindowSize)(),n=(0,d.useNavigate)();return(0,x.jsx)(u.Layout,{_appBar:{languages:c.Mj,isBackButtonShow:!1,isHideMenuButton:!0,imageUrl:"../../src/assets/SubjectBg.png",CenterIcon:!0,LeftIcon:(0,x.jsxs)(l.HStack,{width:"65px",mt:"35px",children:[(0,x.jsx)(l.Avatar,{size:"37",width:"100%",rounded:"md",style:{borderRadius:"0px"},source:i(9922)}),(0,x.jsx)(l.Divider,{width:"1.62px",height:"35.75px",bg:"#41C88E",order:"0",ml:"5px"}),(0,x.jsx)(l.Avatar,{bg:"",size:"37",rounded:"md",style:{borderRadius:"0px"},source:i(95799)})]})},_height:"130px",children:(0,x.jsx)(l.Box,{children:(0,x.jsx)(l.Center,{width:t,children:(0,x.jsxs)(l.VStack,{space:"",w:"300px",children:[(0,x.jsxs)(l.Box,{alignItems:"center",children:[(0,x.jsx)(u.Heading,{children:e("Welcome")+" "+localStorage.getItem("name")+"!"}),(0,x.jsxs)(u.BodyMedium,{textTransform:"inherit",children:["Class :"," ",localStorage.getItem("class")+" "+localStorage.getItem("section")]})]}),(0,x.jsx)(l.VStack,{space:2,pt:"25px",pb:"25px",children:(0,x.jsx)(l.Center,{children:(0,x.jsx)("div",{style:{padding:"35px",border:"2px dashed #6461D2",borderRadius:"100px"},children:(0,x.jsx)(l.Avatar,{borderRadius:"0px",bg:"",source:{uri:i(35255)},size:"2xl"})})})}),(0,x.jsx)(l.VStack,{children:(0,x.jsxs)(l.Center,{children:[(0,x.jsxs)(l.HStack,{space:"2",children:[(0,x.jsx)(l.CircleIcon,{size:"3",color:"#6461D2",style:{marginTop:"5px"}}),(0,x.jsx)(l.Text,{color:"#6461D2",children:e("IMPROVE")})]}),(0,x.jsx)(l.Text,{fontFamily:"Montserrat",mt:"30px",children:e("IMPROVE_SUBTITLE")})]})}),(0,x.jsx)(l.Button,{p:"3",onPress:()=>{n("/selfassesment"),window.location.reload()},variant:"rounded",mt:"20px",children:e("LETS_GO")})]})})})})}const I=function(e){let{footerLinks:t}=e;const[o,r]=(0,u.useWindowSize)(),s=(0,d.useParams)();let h=(0,d.useLocation)();const{t:p}=(0,a.useTranslation)();return"ScoreCard"==s.title||h.pathname.split("/")[1],n().useEffect((()=>{(0,u.capture)("PAGE")}),[]),(0,x.jsx)(u.Layout,{_header:{title:p("SETTING")},_appBar:{languages:c.Mj,isLanguageIcon:!0,isShowNotificationButton:!1,titleComponent:(0,x.jsx)(u.NameTag,{}),LeftIcon:(0,x.jsx)(l.HStack,{children:(0,x.jsx)("img",{width:"100px",src:i(64814)})})},_footer:t,children:(0,x.jsx)(l.Box,{children:(0,x.jsx)(l.Center,{width:o,children:(0,x.jsxs)(l.VStack,{space:"",children:[(0,x.jsx)(l.Box,{children:(0,x.jsx)(u.Heading,{children:p("COMING_SOON")})}),(0,x.jsx)(l.VStack,{space:2,pt:"25px",pb:"25px",children:(0,x.jsx)(l.Center,{children:(0,x.jsx)("div",{style:{padding:"35px",border:"2px dashed #6461D2",borderRadius:"100px"},children:(0,x.jsx)(u.IconByName,{name:"ToolsFillIcon",isDisabled:!0,_icon:{size:70},rounded:"full"})})})}),(0,x.jsx)(l.VStack,{children:(0,x.jsx)(l.Center,{children:(0,x.jsx)(l.HStack,{space:"2"})})})]})})})})},f=(0,u.overrideColorTheme)();function C(e){let{swPath:t}=e;const[r,s]=(0,o.useState)(),[d,h]=n().useState({}),[p,v]=n().useState(!1),{t:m}=(0,a.useTranslation)(),[j,g]=(0,u.useWindowSize)(),b=localStorage.getItem("name"),S=localStorage.getItem("grade"),I=localStorage.getItem("medium"),C=localStorage.getItem("id"),w=localStorage.getItem("board");(0,o.useEffect)((()=>{const e={context:{env:"log-out",cdata:[]},edata:{type:"edit",subtype:"Scroll",pageid:"log-out",uid:C,studentid:"student-id",userName:b,grade:S,medium:I,board:w}};u.telemetryFactory.impression(e);const t={context:{env:"sign-out",cdata:[]},edata:{id:"log-out-button",type:"CLICK",subtype:"",pageid:"sign-out",uid:C,studentid:"student-id",userName:b,grade:S,medium:I,board:w}};u.telemetryFactory.interact(t)}),[]);return(0,x.jsx)(u.Layout,{_appBar:{languages:c.Mj,isBackButtonShow:!1,isHideMenuButton:!0,imageUrl:"../../src/assets/SubjectBg.png",LeftIcon:!1,rightIcon:!1},children:(0,x.jsx)(l.Box,{overflow:"hidden",children:(0,x.jsxs)(l.Center,{width:j,children:[(0,x.jsx)(l.HStack,{overflow:"hidden",children:(0,x.jsx)(l.Center,{children:(0,x.jsx)("img",{width:"200px",src:i(64814)})})}),(0,x.jsxs)(l.VStack,{overflow:"hidden",space:"",w:"300px",children:[(0,x.jsx)(l.Center,{children:(0,x.jsx)(l.Box,{textAlign:"center",children:(0,x.jsx)(u.H3,{style:{fontSize:"16px"},children:"Accelerated Learning via Technology (ALT)"})})}),(0,x.jsx)(l.Center,{children:(0,x.jsx)(l.Box,{children:(0,x.jsx)(u.Heading,{children:m("WELCOME")})})}),(0,x.jsxs)(l.VStack,{space:2,pb:"25px",children:["alert"in d?(0,x.jsx)(l.Alert,{w:"100%",status:"error",children:(0,x.jsx)(l.VStack,{space:2,flexShrink:1,w:"100%",children:(0,x.jsxs)(l.HStack,{flexShrink:1,space:2,justifyContent:"space-between",children:[(0,x.jsxs)(l.HStack,{space:2,flexShrink:1,children:[(0,x.jsx)(l.Alert.Icon,{mt:"1"}),(0,x.jsx)(u.Subtitle,{color:null===f||void 0===f?void 0:f.gray,children:d.alert})]}),(0,x.jsx)(l.IconButton,{variant:"unstyled",icon:(0,x.jsx)(l.CloseIcon,{size:"3",color:null===f||void 0===f?void 0:f.gray}),onPress:e=>h({})})]})})}):(0,x.jsx)(x.Fragment,{}),(0,x.jsxs)(l.VStack,{space:"30px",p:!0,children:[(0,x.jsxs)(l.FormControl,{isRequired:!0,isInvalid:"username"in d,children:[(0,x.jsx)(l.FormControl.Label,{_text:{fontSize:"14px",fontWeight:"400",color:"#6461D2"},children:m("USERNAME")}),(0,x.jsx)(l.Input,{bg:"white",variant:"rounded",borderColor:null!==r&&void 0!==r&&r.username?"yellow.500":"#C1C1C1",placeholder:m("ENTER_USERNAME"),onChange:e=>s({...r,username:e.target.value})}),"username"in d?(0,x.jsx)(l.FormControl.ErrorMessage,{_text:{fontSize:"xs",color:null===f||void 0===f?void 0:f.error,fontWeight:500},children:d.username}):(0,x.jsx)(x.Fragment,{})]}),(0,x.jsxs)(l.FormControl,{isRequired:!0,isInvalid:"password"in d,children:[(0,x.jsx)(l.FormControl.Label,{_text:{fontSize:"14px",fontWeight:"400",color:"#6461D2"},children:m("PASSWORD")}),(0,x.jsx)(l.Input,{bg:"white",variant:"rounded",type:p?"text":"password",borderColor:null!==r&&void 0!==r&&r.password?"yellow.500":"#C1C1C1",p:"10px",placeholder:m("ENTER_PASSWORD"),onChange:e=>s({...r,password:e.target.value}),InputRightElement:(0,x.jsx)(u.IconByName,{name:p?"EyeLineIcon":"EyeOffLineIcon",_icon:{size:15},rounded:"full",onPress:()=>v(!p)})}),"password"in d?(0,x.jsx)(l.FormControl.ErrorMessage,{_text:{fontSize:"xs",color:null===f||void 0===f?void 0:f.error,fontWeight:500},children:d.username}):(0,x.jsx)(x.Fragment,{})]}),(0,x.jsx)(l.Button,{onPress:async()=>{const e={context:{env:"log-in",cdata:[]},edata:{type:"edit",subtype:"Scroll",pageid:"log-in",uid:C,studentid:"student-id",userName:b,grade:S,medium:I,board:w}};u.telemetryFactory.impression(e);const t={context:{env:"sign-in",cdata:[]},edata:{id:"login-button",type:"CLICK",subtype:"",pageid:"sign-in",uid:C,studentid:"student-id",userName:b,grade:S,medium:I,board:w}};if(u.telemetryFactory.interact(t),(()=>{let e={};return"undefined"!==typeof(null===r||void 0===r?void 0:r.username)&&""!==(null===r||void 0===r?void 0:r.username)||(e={...e,username:m("USERNAME_IS_REQUIRED")}),"undefined"!==typeof(null===r||void 0===r?void 0:r.password)&&""!==(null===r||void 0===r?void 0:r.password)||(e={...e,password:m("PASSWORD_IS_REQUIRED")}),h(e),!e.username&&!e.password})()){const e=await(0,u.fetchToken)(c.a5,null===r||void 0===r?void 0:r.username,null===r||void 0===r?void 0:r.password);if(null!==e&&void 0!==e&&e.data){var i;console.log("Token Data");let t=e.data.access_token,o=e.data.refresh_token;console.log(o),sessionStorage.setItem("refreshToken",o),sessionStorage.setItem("token",t);let n={};n=await(0,u.getAuthUser)(),null!==(i=n)&&void 0!==i&&i.id?window.location.reload():(localStorage.removeItem("token"),h({alert:m("PLEASE_ENTER_VALID_CREDENTIALS")}))}else localStorage.removeItem("token"),h({alert:m("PLEASE_ENTER_VALID_CREDENTIALS")})}},variant:"rounded",children:m("LOGIN")}),(0,x.jsx)(l.VStack,{children:(0,x.jsxs)(l.Box,{textAlign:"center",children:[(0,x.jsx)(u.H3,{style:{fontSize:"16px"},children:"Tips for better experience"}),(0,x.jsx)(u.H3,{textAlign:"justify",children:"1. Please use chrome browser for better experience."}),(0,x.jsx)(u.H3,{textAlign:"justify",children:"2. Incase any issue persists during login then try with incognito mode of your browser to access the platform."})]})})]})]})]})]})})})}(0,u.overrideColorTheme)();const w=(0,l.extendTheme)(u.DEFAULT_THEME);const k=function(){return(0,u.initializeI18n)(["studentApp"],"".concat("/modules/core","/locales/{{lng}}/{{ns}}.json")),(0,x.jsx)(l.NativeBaseProvider,{theme:w,children:(0,x.jsx)(d.BrowserRouter,{basename:"/modules/core",children:(0,x.jsxs)(d.Routes,{children:[(0,x.jsx)(d.Route,{path:"/",element:(0,x.jsx)(C,{})}),(0,x.jsx)(d.Route,{path:"/signup",element:(0,x.jsx)(p,{})}),(0,x.jsx)(d.Route,{path:"/mobilenumberscreen",element:(0,x.jsx)(m,{})}),(0,x.jsx)(d.Route,{path:"/otp",element:(0,x.jsx)(g,{})}),(0,x.jsx)(d.Route,{path:"/onboarding",element:(0,x.jsx)(b,{})}),(0,x.jsx)(d.Route,{path:"/comingsoon/:title",element:(0,x.jsx)(I,{})}),(0,x.jsx)(d.Route,{path:"/onboardingimprove",element:(0,x.jsx)(S,{})})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));const y=e=>{e&&e instanceof Function&&i.e(9168).then(i.t.bind(i,39168,23)).then((t=>{let{getCLS:i,getFID:o,getFCP:n,getLCP:r,getTTFB:s}=t;i(e),o(e),n(e),r(e),s(e)}))};s().render((0,x.jsx)(n().StrictMode,{children:(0,x.jsx)(k,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)})),y()},57450:(e,t,i)=>{e.exports=i(55282)}}]);
//# sourceMappingURL=2828.c88259e5.chunk.js.map