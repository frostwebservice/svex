import{c as N,a as h}from"./index.esm-7d3c2547.js";import{u as k,r as n,b as B,H as I,j as s,F as P,d as a,S as T,l as p,L as d,R,J as F,K as j,k as g,C as q,p as c,e as E,f as M,B as z,M as A}from"./app-7f8baec4.js";import{u as D}from"./formik.esm-02d2285f.js";import{u as V}from"./use-search-params-7345a314.js";import{R as f}from"./TextfieldStyle-5248144c.js";/* empty css             */import{C as W}from"./CardHeader-cfbd7fc1.js";const X=()=>{const x=N({email:h().email("Must be a valid email").max(255).required("Email is required"),password:h().max(255).required("Password is required")}),m=k(),b=V().get("returnTo"),[v,r]=n.useState(!1),[w,t]=n.useState("Log In"),{signIn:C}=B(),[S,y]=n.useState({email:"frostwebservice@gmail.com",password:"123123123"}),l=I(),e=D({initialValues:S,validationSchema:x,onSubmit:o=>{r(!0),t(""),setTimeout(()=>{axios.post("/api/user-signin",o).then(i=>{if(i.data.status===200){y({email:"",password:""}),t("Log In"),r(!1);async function L(){try{await C(o.email,o.password,i.data.data),m()&&l(b||c.dashboard.index)}catch(u){console.error(u),m()&&(helpers.setStatus({success:!1}),helpers.setErrors({submit:u.message}),helpers.setSubmitting(!1))}}L(),t("Log in"),r(!1)}i.data.status==="failed"&&(t("Log In"),r(!1),alert(i.data.message))})},2e3)}});return s(P,{children:[a(T,{title:"Login"}),s("div",{className:"signup-page",children:[a(p,{sx:{mb:2},children:s(d,{color:"text.primary",component:R,href:"/Dashboard",sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[a(F,{sx:{mr:1},children:a(j,{})}),a(g,{variant:"body1",sx:{color:"rgba(0, 0, 0, 0.87)"},children:"Dashboard"})]})}),s(q,{sx:{borderRadius:2.5},elevation:16,className:"mainCard card  px-4 pt-4 pb-3",children:[a(W,{subheader:s(g,{className:"title-inter",color:"text.secondary",children:["Don't have an account?  ",a(d,{underline:"hover",className:"title-inter",onClick:()=>l(c.auth.auth.signup),children:"Register"})]}),sx:{pb:0},className:"title  smalltitle signup-form-title",title:"Log in"}),a(E,{className:"signup-form",children:s("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[s(M,{spacing:3,children:[a(f,{className:"title-inter mt-3",variant:"filled",error:!!(e.touched.email&&e.errors.email),fullWidth:!0,helperText:e.touched.email&&e.errors.email,label:"Email Address",name:"email",onBlur:e.handleBlur,onChange:e.handleChange,type:"email",value:e.values.email}),a(f,{className:"title-inter mt-3",variant:"filled",error:!!(e.touched.password&&e.errors.password),fullWidth:!0,helperText:e.touched.password&&e.errors.password,label:"Password",name:"password",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password})]}),s(z,{fullWidth:!0,size:"large",sx:{mt:5},type:"submit",color:"primary",variant:"contained",className:"title-inter smallsize mainButton background-blue",children:[s("span",{className:"ml-2",children:[" ",w," "]}),v?a(A,{color:"inherit",size:"2rem"}):a("span",{})]}),a(p,{sx:{display:"flex",justifyContent:"center",mt:3},children:a(d,{underline:"hover",variant:"subtitle2",onClick:()=>l(c.auth.auth.forgotPassword),children:"Forgot password?"})})]})})]})]})]})};export{X as default};
