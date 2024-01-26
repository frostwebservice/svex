import{c as d,a as i,b as h}from"./index.esm-7e958d2a.js";import{u as c}from"./formik.esm-1e77ad01.js";import{j as a,F as m,d as r,S as u,l as o,L as n,R as p,p as x,q as g,A as v,k as l,f as t,T as s,m as f,i as y,B as b}from"./app-28409791.js";const w={email:"",name:"",password:"",policy:!1},C=d({email:i().email("Must be a valid email").max(255).required("Email is required"),name:i().max(255).required("Name is required"),password:i().min(7).max(255).required("Password is required"),policy:h().oneOf([!0],"This field must be checked")}),S=()=>{const e=c({initialValues:w,validationSchema:C,onSubmit:()=>{}});return a(m,{children:[r(u,{title:"Register"}),a("div",{children:[r(o,{sx:{mb:4},children:a(n,{color:"text.primary",component:p,href:x.dashboard.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[r(g,{sx:{mr:1},children:r(v,{})}),r(l,{variant:"subtitle2",children:"Dashboard"})]})}),a(t,{sx:{mb:4},spacing:1,children:[r(l,{variant:"h5",children:"Register"}),a(l,{color:"text.secondary",variant:"body2",children:["Already have an account?  ",r(n,{href:"#",underline:"hover",variant:"subtitle2",children:"Log in"})]})]}),a("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[a(t,{spacing:3,children:[r(s,{error:!!(e.touched.name&&e.errors.name),fullWidth:!0,helperText:e.touched.name&&e.errors.name,label:"Name",name:"name",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.name}),r(s,{error:!!(e.touched.email&&e.errors.email),fullWidth:!0,helperText:e.touched.email&&e.errors.email,label:"Email Address",name:"email",onBlur:e.handleBlur,onChange:e.handleChange,type:"email",value:e.values.email}),r(s,{error:!!(e.touched.password&&e.errors.password),fullWidth:!0,helperText:e.touched.password&&e.errors.password,label:"Password",name:"password",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password})]}),a(o,{sx:{alignItems:"center",display:"flex",ml:-1,mt:1},children:[r(f,{checked:e.values.policy,name:"policy",onChange:e.handleChange}),a(l,{color:"text.secondary",variant:"body2",children:["I have read the"," ",r(n,{component:"a",href:"#",children:"Terms and Conditions"})]})]}),!!(e.touched.policy&&e.errors.policy)&&r(y,{error:!0,children:e.errors.policy}),r(b,{fullWidth:!0,size:"large",sx:{mt:3},type:"submit",variant:"contained",children:"Register"})]})]})]})};export{S as default};
