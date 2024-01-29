import{c as t,a,d}from"./index.esm-40f4c6c0.js";import{u as n}from"./formik.esm-3fceb438.js";import{j as s,F as i,d as e,S as l,l as h,L as m,R as p,p as u,q as c,A as w,k as f,C,e as x,f as b,T as o,B as g}from"./app-3b15a07b.js";import{C as v}from"./CardHeader-44292a17.js";const S={password:"",passwordConfirm:""},y=t({password:a().min(7,"Must be at least 7 characters").max(255).required("Required"),passwordConfirm:a().oneOf([d("password")],"Passwords must match").required("Required")}),q=()=>{const r=n({initialValues:S,validationSchema:y,onSubmit:()=>{}});return s(i,{children:[e(l,{title:"Reset Password"}),s("div",{children:[e(h,{sx:{mb:4},children:s(m,{color:"text.primary",component:p,href:u.dashboard.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[e(c,{sx:{mr:1},children:e(w,{})}),e(f,{variant:"subtitle2",children:"Dashboard"})]})}),s(C,{elevation:16,children:[e(v,{sx:{pb:0},title:"Reset Password"}),e(x,{children:s("form",{noValidate:!0,onSubmit:r.handleSubmit,children:[s(b,{spacing:3,children:[e(o,{error:!!(r.touched.password&&r.errors.password),fullWidth:!0,helperText:r.touched.password&&r.errors.password,label:"Password",name:"password",onBlur:r.handleBlur,onChange:r.handleChange,type:"password",value:r.values.password}),e(o,{error:!!(r.touched.passwordConfirm&&r.errors.passwordConfirm),fullWidth:!0,helperText:r.touched.passwordConfirm&&r.errors.passwordConfirm,label:"Password (Confirm)",name:"passwordConfirm",onBlur:r.handleBlur,onChange:r.handleChange,type:"password",value:r.values.passwordConfirm})]}),e(g,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:"Reset"})]})})]})]})]})};export{q as default};
