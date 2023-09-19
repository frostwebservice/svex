import{c as n,a as t,d}from"./index.esm-7d3c2547.js";import{u as m}from"./formik.esm-02d2285f.js";import{R as o}from"./TextfieldStyle-5248144c.js";/* empty css             */import{H as u,j as s,F as c,d as e,S as p,l as h,L as f,R as w,J as g,K as C,k as x,C as v,e as b,f as R,B as S}from"./app-7f8baec4.js";import{C as y}from"./CardHeader-cfbd7fc1.js";const B={email:localStorage.getItem("email"),password:"",passwordConfirm:""},N=n({password:t().min(7,"Must be at least 7 characters").max(255).required("Required"),passwordConfirm:t().oneOf([d("password")],"Passwords must match").required("Required")}),L=()=>{const i=u(),a=m({initialValues:B,validationSchema:N,onSubmit:l=>{axios.post("/api/user-reset",l).then(r=>{console.log(r),r.data.status===200&&r.data.success&&i("/auth/auth/SignIn"),r.data.status==="failed"&&alert(r.data.message)})}});return s(c,{children:[e(p,{title:"Reset Password"}),s("div",{className:"signup-page",children:[e(h,{sx:{mb:4},children:s(f,{color:"text.primary",component:w,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[e(g,{sx:{mr:1},children:e(C,{})}),e(x,{variant:"subtitle2",children:"Dashboard"})]})}),s(v,{elevation:16,sx:{borderRadius:5},className:"card  px-4 pt-4 pb-3",children:[e(y,{sx:{pb:0},title:"Reset Password",className:"title  smalltitle signup-form-title"}),e(b,{className:"signup-form",children:s("form",{noValidate:!0,onSubmit:a.handleSubmit,children:[s(R,{spacing:3,children:[e(o,{className:"title-inter mt-4",variant:"filled",style:{marginTop:11},error:!!(a.touched.password&&a.errors.password),fullWidth:!0,helperText:a.touched.password&&a.errors.password,label:"Password",name:"password",onBlur:a.handleBlur,onChange:a.handleChange,type:"password",value:a.values.password}),e(o,{className:"title-inter mt-4",variant:"filled",style:{marginTop:11},error:!!(a.touched.passwordConfirm&&a.errors.passwordConfirm),fullWidth:!0,helperText:a.touched.passwordConfirm&&a.errors.passwordConfirm,label:"Password (Confirm)",name:"passwordConfirm",onBlur:a.handleBlur,onChange:a.handleChange,type:"password",value:a.values.passwordConfirm})]}),e(S,{fullWidth:!0,size:"large",sx:{mt:4},type:"submit",variant:"contained",children:"Reset"})]})})]})]})]})};export{L as default};
