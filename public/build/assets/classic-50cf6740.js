import{c as t,a as l,b as d}from"./index.esm-7e958d2a.js";import{u as h}from"./formik.esm-1e77ad01.js";import{j as a,F as m,d as r,S as c,l as o,L as i,R as u,p,q as x,A as f,k as n,C as v,e as b,f as g,T as s,m as y,i as C,B as w}from"./app-28409791.js";import{C as k}from"./CardHeader-aec27fa6.js";const B={email:"",name:"",password:"",policy:!1},T=t({email:l().email("Must be a valid email").max(255).required("Email is required"),name:l().max(255).required("Name is required"),password:l().min(7).max(255).required("Password is required"),policy:d().oneOf([!0],"This field must be checked")}),R=()=>{const e=h({initialValues:B,validationSchema:T,onSubmit:()=>{}});return a(m,{children:[r(c,{title:"Register"}),a("div",{children:[r(o,{sx:{mb:4},children:a(i,{color:"text.primary",component:u,href:p.dashboard.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[r(x,{sx:{mr:1},children:r(f,{})}),r(n,{variant:"subtitle2",children:"Dashboard"})]})}),a(v,{elevation:16,children:[r(k,{subheader:a(n,{color:"text.secondary",variant:"body2",children:["Already have an account?  ",r(i,{href:"#",underline:"hover",variant:"subtitle2",children:"Log in"})]}),sx:{pb:0},title:"Register"}),r(b,{children:a("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[a(g,{spacing:3,children:[r(s,{error:!!(e.touched.name&&e.errors.name),fullWidth:!0,helperText:e.touched.name&&e.errors.name,label:"Name",name:"name",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.name}),r(s,{error:!!(e.touched.email&&e.errors.email),fullWidth:!0,helperText:e.touched.email&&e.errors.email,label:"Email Address",name:"email",onBlur:e.handleBlur,onChange:e.handleChange,type:"email",value:e.values.email}),r(s,{error:!!(e.touched.password&&e.errors.password),fullWidth:!0,helperText:e.touched.password&&e.errors.password,label:"Password",name:"password",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password})]}),a(o,{sx:{alignItems:"center",display:"flex",ml:-1,mt:1},children:[r(y,{checked:e.values.policy,name:"policy",onChange:e.handleChange}),a(n,{color:"text.secondary",variant:"body2",children:["I have read the"," ",r(i,{component:"a",href:"#",children:"Terms and Conditions"})]})]}),!!(e.touched.policy&&e.errors.policy)&&r(C,{error:!0,children:e.errors.policy}),r(w,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:"Register"})]})})]})]})]})};export{R as default};
