import{c as d,a as c}from"./index.esm-7d3c2547.js";import{r as l,j as r,F as u,d as e,S as h,k as n,l as p,L as g,R as x,p as f,J as S,K as b,C as v,e as y,B as C,M as L}from"./app-7f8baec4.js";import{u as k}from"./formik.esm-02d2285f.js";/* empty css             */import{u as R}from"./use-search-params-7345a314.js";import{R as F}from"./TextfieldStyle-5248144c.js";import{C as P}from"./CardHeader-cfbd7fc1.js";const B={email:""},I=d({email:c().email("Must be a valid email").max(255).required("Email is required")}),M=()=>{R().get("returnTo");const[T,s]=l.useState("Send Reset Link"),[m,i]=l.useState(!1),a=k({initialValues:B,validationSchema:I,onSubmit:o=>{localStorage.setItem("email",o.email),i(!0),s("");try{axios.post("/api/send-reset",o).then(t=>{console.log(t)}),console.log("Send Reset sent")}catch(t){console.error("Error sending reset",t)}i(!1),s("Send Reset Link")}});return r(u,{children:[e(h,{title:"Forgot Password"}),r("div",{className:"signup-page",children:[e(n,{color:"primary",variant:"h4",sx:{pb:1,fontWeight:"bold",textAlign:"center"},children:"LOGO"}),e(p,{sx:{mb:4},children:r(g,{color:"text.primary",component:x,to:f.auth.auth.signin,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[e(S,{sx:{mr:1},children:e(b,{})}),e(n,{variant:"subtitle2",children:"SignIn"})]})}),r(v,{elevation:16,sx:{borderRadius:2.5},className:"card  px-4 pt-4 pb-3",children:[e(P,{sx:{pb:0},title:"Forgot password",className:"title  smalltitle signup-form-title"}),e(y,{className:"signup-form",children:r("form",{noValidate:!0,onSubmit:a.handleSubmit,children:[e(F,{className:"title-inter mt-4",autoFocus:!0,variant:"filled",style:{marginTop:11},error:!!(a.touched.email&&a.errors.email),fullWidth:!0,helperText:a.touched.email&&a.errors.email,label:"Email Address",name:"email",onBlur:a.handleBlur,onChange:a.handleChange,type:"email",value:a.values.email}),r(C,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:["Send reset link",m?e(L,{color:"inherit",size:"1.4rem"}):e("span",{})]})]})})]})]})]})};export{M as default};
