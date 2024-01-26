import{u as v,b as C,r as k,p as l,c as S,j as a,F as T,d as r,S as P,C as B,k as d,L as h,R as G,e as A,l as o,B as u,D as p,f as R,T as g,m as W,i as x}from"./app-28409791.js";import{c as E,a as b,b as F}from"./index.esm-7e958d2a.js";import{u as I}from"./formik.esm-1e77ad01.js";import{u as q}from"./use-search-params-dd905299.js";import{A as z}from"./auth-issuer-1da9f5fa.js";import{C as L}from"./CardHeader-aec27fa6.js";const j={email:"",password:"",policy:!0,submit:null},M=E({email:b().email("Must be a valid email").max(255).required("Email is required"),password:b().min(7).max(255).required("Password is required"),policy:F().oneOf([!0],"This field must be checked")}),K=()=>{const s=v(),t=q().get("returnTo"),{issuer:f,createUserWithEmailAndPassword:w,signInWithGoogle:c}=C(),e=I({initialValues:j,validationSchema:M,onSubmit:async(i,n)=>{try{await w(i.email,i.password),s()&&(window.location.href=t||l.dashboard.index)}catch(m){console.error(m),s()&&(n.setStatus({success:!1}),n.setErrors({submit:m.message}),n.setSubmitting(!1))}}}),y=k.useCallback(async()=>{try{await c(),s()&&(window.location.href=t||l.dashboard.index)}catch(i){console.error(i)}},[c,s,t]);return S(),a(T,{children:[r(P,{title:"Register"}),a("div",{children:[a(B,{elevation:16,children:[r(L,{subheader:a(d,{color:"text.secondary",variant:"body2",children:["Already have an account?  ",r(h,{component:G,href:l.auth.firebase.login,underline:"hover",variant:"subtitle2",children:"Log in"})]}),sx:{pb:0},title:"Register"}),r(A,{children:a("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[a(o,{sx:{flexGrow:1,mt:3},children:[a(u,{fullWidth:!0,onClick:y,size:"large",sx:{backgroundColor:"common.white",color:"common.black","&:hover":{backgroundColor:"common.white",color:"common.black"}},variant:"contained",children:[r(o,{alt:"Google",component:"img",src:"/assets/logos/logo-google.svg",sx:{mr:1}}),"Google"]}),a(o,{sx:{alignItems:"center",display:"flex",mt:2},children:[r(o,{sx:{flexGrow:1},children:r(p,{orientation:"horizontal"})}),r(d,{color:"text.secondary",sx:{m:2},variant:"body1",children:"OR"}),r(o,{sx:{flexGrow:1},children:r(p,{orientation:"horizontal"})})]})]}),a(R,{spacing:3,children:[r(g,{error:!!(e.touched.email&&e.errors.email),fullWidth:!0,helperText:e.touched.email&&e.errors.email,label:"Email Address",name:"email",onBlur:e.handleBlur,onChange:e.handleChange,type:"email",value:e.values.email}),r(g,{error:!!(e.touched.password&&e.errors.password),fullWidth:!0,helperText:e.touched.password&&e.errors.password,label:"Password",name:"password",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password})]}),a(o,{sx:{alignItems:"center",display:"flex",ml:-1,mt:1},children:[r(W,{checked:e.values.policy,name:"policy",onChange:e.handleChange}),a(d,{color:"text.secondary",variant:"body2",children:["I have read the"," ",r(h,{component:"a",href:"#",children:"Terms and Conditions"})]})]}),!!(e.touched.policy&&e.errors.policy)&&r(x,{error:!0,children:e.errors.policy}),e.errors.submit&&r(x,{error:!0,sx:{mt:3},children:e.errors.submit}),r(o,{sx:{mt:2},children:r(u,{disabled:e.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Register"})})]})})]}),r(o,{sx:{mt:3},children:r(z,{issuer:f})})]})]})};export{K as default};