import{c as w,a as x}from"./index.esm-40f4c6c0.js";import{u as v}from"./formik.esm-3fceb438.js";import{u as y,a as S,b as C,c as P,j as a,F as T,d as r,S as B,C as F,k as L,L as l,R as d,p as s,e as k,f as u,T as m,i as A,B as R,l as j}from"./app-3b15a07b.js";import{u as E}from"./use-search-params-cba920b8.js";import{A as I}from"./auth-issuer-2a482907.js";import{C as M}from"./CardHeader-44292a17.js";import{A as V}from"./Alert-9b094553.js";import"./Close-ae63fca9.js";const W={email:"demo@devias.io",password:"Password123!",submit:null},$=w({email:x().email("Must be a valid email").max(255).required("Email is required")}),K=()=>{const n=y(),c=S(),h=E().get("returnTo"),{issuer:p,signIn:f}=C(),e=v({initialValues:W,validationSchema:$,onSubmit:async(t,o)=>{try{await f(t.email,t.password),n()&&(window.location.href=h||s.dashboard.index)}catch(i){if(console.error(i),n()){if(i.code==="UserNotConfirmedException"){const g=new URLSearchParams({username:t.email}).toString(),b=s.auth.amplify.confirmRegister+`?${g}`;c.push(b);return}o.setStatus({success:!1}),o.setErrors({submit:i.message}),o.setSubmitting(!1)}}}});return P(),a(T,{children:[r(B,{title:"Login"}),a("div",{children:[a(F,{elevation:16,children:[r(M,{subheader:a(L,{color:"text.secondary",variant:"body2",children:["Don't have an account?  ",r(l,{component:d,href:s.auth.amplify.register,underline:"hover",variant:"subtitle2",children:"Register"})]}),sx:{pb:0},title:"Log in"}),r(k,{children:a("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[a(u,{spacing:3,children:[r(m,{autoFocus:!0,error:!!(e.touched.email&&e.errors.email),fullWidth:!0,helperText:e.touched.email&&e.errors.email,label:"Email Address",name:"email",onBlur:e.handleBlur,onChange:e.handleChange,type:"email",value:e.values.email}),r(m,{error:!!(e.touched.password&&e.errors.password),fullWidth:!0,helperText:e.touched.password&&e.errors.password,label:"Password",name:"password",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password})]}),e.errors.submit&&r(A,{error:!0,sx:{mt:3},children:e.errors.submit}),r(R,{disabled:e.isSubmitting,fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:"Log In"}),r(j,{sx:{display:"flex",justifyContent:"center",mt:3},children:r(l,{component:d,href:s.auth.amplify.forgotPassword,underline:"hover",variant:"subtitle2",children:"Forgot password?"})})]})})]}),a(u,{spacing:3,sx:{mt:3},children:[r(V,{severity:"error",children:a("div",{children:["You can use ",r("b",{children:"demo@devias.io"})," and password ",r("b",{children:"Password123!"})]})}),r(I,{issuer:p})]})]})]})};export{K as default};
