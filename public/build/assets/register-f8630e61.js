import{c as N,a as k,b as L}from"./index.esm-40f4c6c0.js";import{u as Q}from"./formik.esm-3fceb438.js";import{_ as B,G as j,H as X,I as Y,J as S,u as Z,b as ee,c as re,j as h,F as te,d as n,S as oe,f as O,k as R,C as se,L as W,R as ne,p as M,e as ae,T,l as ie,m as le,i as V,B as ce}from"./app-3b15a07b.js";import{u as ue}from"./use-search-params-cba920b8.js";import{r as de,i as me,a as he}from"./jsx-runtime_commonjs-proxy-e206cb1a.js";import{c as fe,s as pe}from"./createTheme-bd0f03b2.js";import{C as ve}from"./CardHeader-44292a17.js";const we=["variant"];function H(r){return r.length===0}function z(r){const{variant:t}=r,l=B(r,we);let a=t||"";return Object.keys(l).sort().forEach(s=>{s==="color"?a+=H(a)?r[s]:j(r[s]):a+=`${H(a)?s:j(s)}${j(r[s].toString())}`}),a}const xe=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],Se=["theme"],ye=["theme"];function y(r){return Object.keys(r).length===0}function be(r){return typeof r=="string"&&r.charCodeAt(0)>96}const _e=(r,t)=>t.components&&t.components[r]&&t.components[r].styleOverrides?t.components[r].styleOverrides:null,ge=(r,t)=>{let l=[];t&&t.components&&t.components[r]&&t.components[r].variants&&(l=t.components[r].variants);const a={};return l.forEach(s=>{const e=z(s.props);a[e]=s.style}),a},Ce=(r,t,l,a)=>{var s,e;const{ownerState:f={}}=r,i=[],c=l==null||(s=l.components)==null||(e=s[a])==null?void 0:e.variants;return c&&c.forEach(d=>{let b=!0;Object.keys(d.props).forEach(p=>{f[p]!==d.props[p]&&r[p]!==d.props[p]&&(b=!1)}),b&&i.push(t[z(d.props)])}),i};function q(r){return r!=="ownerState"&&r!=="theme"&&r!=="sx"&&r!=="as"}const ke=fe();function Re(r={}){const{defaultTheme:t=ke,rootShouldForwardProp:l=q,slotShouldForwardProp:a=q}=r,s=e=>{const f=y(e.theme)?t:e.theme;return pe(S({},e,{theme:f}))};return s.__mui_systemSx=!0,(e,f={})=>{X(e,m=>m.filter(w=>!(w!=null&&w.__mui_systemSx)));const{name:i,slot:c,skipVariantsResolver:d,skipSx:b,overridesResolver:p}=f,G=B(f,xe),U=d!==void 0?d:c&&c!=="Root"||!1,K=b||!1;let A,_=q;c==="Root"?_=l:c?_=a:be(e)&&(_=void 0);const P=Y(e,S({shouldForwardProp:_,label:A},G)),E=(m,...w)=>{const x=w?w.map(o=>typeof o=="function"&&o.__emotion_real!==o?u=>{let{theme:v}=u,C=B(u,Se);return o(S({theme:y(v)?t:v},C))}:o):[];let g=m;i&&p&&x.push(o=>{const u=y(o.theme)?t:o.theme,v=_e(i,u);if(v){const C={};return Object.entries(v).forEach(([J,$])=>{C[J]=typeof $=="function"?$(S({},o,{theme:u})):$}),p(o,C)}return null}),i&&!U&&x.push(o=>{const u=y(o.theme)?t:o.theme;return Ce(o,ge(i,u),u,i)}),K||x.push(s);const I=x.length-w.length;if(Array.isArray(m)&&I>0){const o=new Array(I).fill("");g=[...m,...o],g.raw=[...m.raw,...o]}else typeof m=="function"&&m.__emotion_real!==m&&(g=o=>{let{theme:u}=o,v=B(o,ye);return m(S({theme:y(u)?t:u},v))});return P(g,...x)};return P.withConfig&&(E.withConfig=P.withConfig),E}}const Te=Re(),Be=Te;var F={},Pe=me;Object.defineProperty(F,"__esModule",{value:!0});var D=F.default=void 0,$e=Pe(de()),je=he,Oe=(0,$e.default)((0,je.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");D=F.default=Oe;const qe={username:"",email:"",password:"",policy:!1,submit:null},Fe=N({username:k().max(255).required("Username is required"),email:k().email("Must be a valid email").max(255).required("Email is required"),password:k().min(7).max(255).required("Password is required"),password_conf:k().min(7).max(255).required("Password Confirm is required"),policy:L().oneOf([!0],"This field must be checked"),recaptcha:L().oneOf([!0],"This field must be checked")}),Ee=Be("div")({width:"444px",margin:"auto"}),Ge=()=>{const r=Z(),l=ue().get("returnTo"),{issuer:a,signUp:s}=ee(),e=Q({initialValues:qe,validationSchema:Fe,onSubmit:async(i,c)=>{try{await s(i.email,i.name,i.password),r()&&(window.location.href=l||M.auth.jwt.step1)}catch(d){console.error(d),r()&&(c.setStatus({success:!1}),c.setErrors({submit:d.message}),c.setSubmitting(!1))}}});return re(),h(te,{children:[n(oe,{title:"Register"}),h(Ee,{children:[n(O,{children:h(O,{direction:"row",spacing:1,alignItems:"center",sx:{cursor:"pointer",width:"fit-content"},onClick:()=>{window.history.back()},children:[n(D,{fontSize:"small"}),n(R,{variant:"button",alignItems:"center",children:"Back"})]})}),n(R,{variant:"h4",my:3,children:"Brand account creation"}),h(se,{elevation:16,children:[n(ve,{subheader:h(R,{color:"text.secondary",variant:"body2",children:["Already have an account?  ",n(W,{component:ne,href:M.auth.jwt.login,underline:"hover",variant:"subtitle2",children:"Log in"})]}),sx:{pb:0},title:"Register"}),n(ae,{children:h("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[h(O,{spacing:3,children:[n(T,{error:!!(e.touched.username&&e.errors.username),fullWidth:!0,helperText:e.touched.username&&e.errors.username,label:"Username",name:"username",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.username}),n(T,{error:!!(e.touched.email&&e.errors.email),fullWidth:!0,helperText:e.touched.email&&e.errors.email,label:"Email Address",name:"email",onBlur:e.handleBlur,onChange:e.handleChange,type:"email",value:e.values.email}),n(T,{error:!!(e.touched.password&&e.errors.password),fullWidth:!0,helperText:e.touched.password&&e.errors.password,label:"Password",name:"password",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password}),n(T,{error:!!(e.touched.password_conf&&e.errors.password_conf),fullWidth:!0,helperText:e.touched.password_conf&&e.errors.password_conf,label:"Confirm Password",name:"password_conf",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password_conf})]}),h(ie,{sx:{alignItems:"center",display:"flex",ml:-1,mt:1},children:[n(le,{checked:e.values.policy,name:"policy",onChange:e.handleChange}),h(R,{color:"text.secondary",variant:"body2",children:["I have read the"," ",n(W,{component:"a",href:"#",children:"Terms and Conditions"})]})]}),!!(e.touched.policy&&e.errors.policy)&&n(V,{error:!0,children:e.errors.policy}),e.errors.submit&&n(V,{error:!0,sx:{mt:3},children:e.errors.submit}),n(ce,{disabled:e.isSubmitting,fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:"Register"})]})})]})]})]})};export{Ee as SvexAuthCard,Ge as default};
