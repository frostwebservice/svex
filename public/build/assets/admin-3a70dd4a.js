import{c as S,a as c}from"./index.esm-24326440.js";import{u as L,r as o,b as C,o as N,j as s,F as A,d as a,S as I,l as u,L as k,R as P,q as B,A as q,k as R,C as T,e as j,f as E,B as F,s as z,p as M}from"./app-99b40063.js";import{u as V}from"./formik.esm-cf710986.js";import{u as W}from"./use-search-params-c0bd8850.js";import{R as p}from"./TextfieldStyle-fd3f584c.js";/* empty css             */import{C as D}from"./CardHeader-7c66368c.js";const X=()=>{const h=S({email:c().email("Must be a valid email").max(255).required("Email is required"),password:c().max(255).required("Password is required")}),l=L(),f=W().get("returnTo"),[g,t]=o.useState(!1),[x,r]=o.useState("Log In"),{signIn:b}=C(),[d,w]=o.useState({email:"svexadm@socialvex.com",password:"",type:"Admin login"}),v=N(),e=V({initialValues:d,validationSchema:h,onSubmit:n=>{t(!0),r(""),axios.post("/api/admin-signin",n).then(i=>{if(i.data.status===200){w({...d,email:"",password:""}),r("Log In"),t(!1);async function y(){try{await b(n.email,n.password,i.data.data),l()&&v(f||M.dashboard.index)}catch(m){console.error(m),l()&&(helpers.setStatus({success:!1}),helpers.setErrors({submit:m.message}),helpers.setSubmitting(!1))}}y(),r("Log in"),t(!1)}i.data.status==="failed"&&(r("Log In"),t(!1),alert(i.data.message))})}});return s(A,{children:[a(I,{title:"Admin User Login"}),s("div",{className:"signup-page",children:[a(u,{sx:{mb:2},children:s(k,{color:"text.primary",component:P,href:"/Dashboard",sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[a(B,{sx:{mr:1},children:a(q,{})}),a(R,{color:"text.primary",variant:"body1",children:"Dashboard"})]})}),s(T,{sx:{borderRadius:2.5},elevation:16,className:"mainCard card  px-4 pt-4 pb-3",children:[a(D,{sx:{pb:0},className:"title  smalltitle signup-form-title",title:"Admin User Login"}),a(j,{className:"signup-form",children:s("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[s(E,{spacing:3,children:[a(p,{className:"title-inter mt-3",variant:"filled",fullWidth:!0,label:"Email Address",name:"email",type:"text",value:"Admin",disabled:!0}),a(p,{className:"title-inter mt-3",variant:"filled",error:!!(e.touched.password&&e.errors.password),fullWidth:!0,helperText:e.touched.password&&e.errors.password,label:"Password",name:"password",autoComplete:"new password",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password})]}),s(F,{fullWidth:!0,size:"large",sx:{mt:5},type:"submit",color:"primary",variant:"contained",className:"title-inter smallsize mainButton background-blue",children:[s("span",{className:"ml-2",children:[" ",x," "]}),g?a(z,{color:"inherit",size:"2rem"}):a("span",{})]}),a(u,{sx:{display:"flex",justifyContent:"center",mt:3}})]})})]})]})]})};export{X as default};
