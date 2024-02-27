import{r as o,ca as h,j as n,F as T,d as a,C as S,e as v,T as i,f as m,B as _,R as x,w as B,c as P,aS as w,o as I,S as F,l as W,aL as V,L as H,q as D,A as E,k as j}from"./app-4f3bf436.js";import{c as C,a as s}from"./index.esm-d72c97a4.js";import{u as q}from"./formik.esm-4f229b46.js";import{C as k}from"./CardHeader-92a56fa2.js";/* empty css                */const L=c=>{const[p,y]=o.useState({}),[b,f]=o.useState({}),[d,g]=o.useState(0);o.useEffect(()=>{axios.post("/api/get_paypal",{}).then(t=>{y({paypal_mode:t.data.mode,paypal_client_id:t.data.client_id,paypal_secret:t.data.secret,paypal_plain_id:t.data.plain_id,currency:t.data.currency,costofunlimited_access:t.data.unlimited_access}),g(d+1)}),axios.post("/api/get_stripe",{}).then(t=>{f({stripe_publishable_key:t.data.pub_key,stripe_secret_key:t.data.sec_key,stripe_webhook_secret:t.data.webhook_sec,stripe_subscription_plan_id:t.data.sub_id,currency:t.data.currency,costofunlimited_access:t.data.unlimited_access}),g(d+1)})},[]);const e=q({initialValues:p,enableReinitialize:!0,validationSchema:C({paypal_mode:s().max(255).required("This Field is required"),paypal_client_id:s().max(255).required("This Field is required"),paypal_secret:s().max(255).required("This Field is required"),paypal_plain_id:s().max(255).required("This Field is required"),currency:s().max(255).required("This Field is required"),costofunlimited_access:s().max(255).required("This Field is required")}),onSubmit:async(t,l)=>{try{axios.post("/api/update_paypal",{values:t}).then(u=>{l.setStatus({success:!0}),l.setSubmitting(!1),h.success("Paypal settings updated")})}catch(u){console.error(u),h.error("Something went wrong!"),l.setStatus({success:!1}),l.setErrors({submit:u.message}),l.setSubmitting(!1)}}}),r=q({initialValues:b,enableReinitialize:!0,validationSchema:C({stripe_publishable_key:s().max(255).required("This Field is required"),stripe_secret_key:s().max(255).required("This Field is required"),stripe_webhook_secret:s().max(255).required("This Field is required"),stripe_subscription_plan_id:s().max(255).required("This Field is required"),currency:s().max(255).required("This Field is required"),costofunlimited_access:s().max(255).required("This Field is required")}),onSubmit:async(t,l)=>{try{axios.post("/api/update_stripe",{values:t}).then(u=>{l.setStatus({success:!0}),l.setSubmitting(!1),h.success("Stripe settings updated")})}catch(u){console.error(u),h.error("Something went wrong!"),l.setStatus({success:!1}),l.setErrors({submit:u.message}),l.setSubmitting(!1)}}});return n(T,{children:[a("form",{onSubmit:e.handleSubmit,children:n(S,{children:[a(k,{title:"Paypal Settings"}),n(v,{sx:{py:0},children:[a(i,{defaultValue:"Please Input Here.",sx:{mb:1},error:!!(e.touched.paypal_mode&&e.errors.paypal_mode),fullWidth:!0,helperText:e.touched.paypal_mode&&e.errors.paypal_mode,label:"Paypal Mode",name:"paypal_mode",onBlur:e.handleBlur,onChange:e.handleChange,required:!0,value:e.values.paypal_mode}),a(i,{defaultValue:"Please Input Here.",sx:{mb:1},error:!!(e.touched.paypal_client_id&&e.errors.paypal_client_id),fullWidth:!0,helperText:e.touched.paypal_client_id&&e.errors.paypal_client_id,label:"Paypal Client ID",name:"paypal_client_id",onBlur:e.handleBlur,onChange:e.handleChange,required:!0,value:e.values.paypal_client_id}),a(i,{defaultValue:"Please Input Here.",sx:{mb:1},error:!!(e.touched.paypal_secret&&e.errors.paypal_secret),fullWidth:!0,helperText:e.touched.paypal_secret&&e.errors.paypal_secret,label:"Paypal Secret",name:"paypal_secret",onBlur:e.handleBlur,onChange:e.handleChange,required:!0,value:e.values.paypal_secret}),a(i,{defaultValue:"Please Input Here.",sx:{mb:1},error:!!(e.touched.paypal_plain_id&&e.errors.paypal_plain_id),fullWidth:!0,helperText:e.touched.paypal_plain_id&&e.errors.paypal_plain_id,label:"Paypal Plain ID",name:"paypal_plain_id",onBlur:e.handleBlur,onChange:e.handleChange,required:!0,value:e.values.paypal_plain_id}),a(i,{defaultValue:"Please Input Here.",sx:{mb:1},error:!!(e.touched.currency&&e.errors.currency),fullWidth:!0,helperText:e.touched.currency&&e.errors.currency,label:"Currency",name:"currency",onBlur:e.handleBlur,onChange:e.handleChange,required:!0,value:e.values.currency}),a(i,{defaultValue:"Please Input Here.",sx:{mb:1},error:!!(e.touched.costofunlimited_access&&e.errors.costofunlimited_access),fullWidth:!0,helperText:e.touched.costofunlimited_access&&e.errors.costofunlimited_access,label:"Cost of unlimited access",name:"costofunlimited_access",onBlur:e.handleBlur,onChange:e.handleChange,required:!0,value:e.values.costofunlimited_access})]}),n(m,{direction:{xs:"column",sm:"row"},flexWrap:"wrap",spacing:3,sx:{p:3,pt:1},children:[a(_,{disabled:e.isSubmitting,type:"submit",variant:"contained",children:"Update"}),a(_,{color:"inherit",component:x,disabled:e.isSubmitting,href:"/dashboard/admin",children:"Cancel"})]})]},d)}),a("form",{onSubmit:r.handleSubmit,children:n(S,{children:[a(k,{title:"Stripe Settings"}),n(v,{sx:{py:0},children:[a(i,{defaultValue:"Please Input Here.",sx:{mb:1},error:!!(r.touched.stripe_publishable_key&&r.errors.stripe_publishable_key),fullWidth:!0,helperText:r.touched.stripe_publishable_key&&r.errors.stripe_publishable_key,label:"Stripe Publishable Key",name:"stripe_publishable_key",onBlur:r.handleBlur,onChange:r.handleChange,required:!0,value:r.values.stripe_publishable_key}),a(i,{defaultValue:"Please Input Here.",sx:{mb:1},error:!!(r.touched.stripe_secret_key&&r.errors.stripe_secret_key),fullWidth:!0,helperText:r.touched.stripe_secret_key&&r.errors.stripe_secret_key,label:"Stripe Secret Key",name:"stripe_secret_key",onBlur:r.handleBlur,onChange:r.handleChange,required:!0,value:r.values.stripe_secret_key}),a(i,{defaultValue:"Please Input Here.",sx:{mb:1},error:!!(r.touched.stripe_webhook_secret&&r.errors.stripe_webhook_secret),fullWidth:!0,helperText:r.touched.stripe_webhook_secret&&r.errors.stripe_webhook_secret,label:"Stripe Webhook Secret",name:"stripe_webhook_secret",onBlur:r.handleBlur,onChange:r.handleChange,required:!0,value:r.values.stripe_webhook_secret}),a(i,{defaultValue:"Please Input Here.",sx:{mb:1},error:!!(r.touched.stripe_subscription_plan_id&&r.errors.stripe_subscription_plan_id),fullWidth:!0,helperText:r.touched.stripe_subscription_plan_id&&r.errors.stripe_subscription_plan_id,label:"Stripe subscription plan ID",name:"stripe_subscription_plan_id",onBlur:r.handleBlur,onChange:r.handleChange,required:!0,value:r.values.stripe_subscription_plan_id}),a(i,{defaultValue:"Please Input Here.",sx:{mb:1},error:!!(r.touched.currency&&r.errors.currency),fullWidth:!0,helperText:r.touched.currency&&r.errors.currency,label:"Currency",name:"currency",onBlur:r.handleBlur,onChange:r.handleChange,required:!0,value:r.values.currency}),a(i,{defaultValue:"Please Input Here.",sx:{mb:1},error:!!(r.touched.costofunlimited_access&&r.errors.costofunlimited_access),fullWidth:!0,helperText:r.touched.costofunlimited_access&&r.errors.costofunlimited_access,label:"Cost of unlimited access",name:"costofunlimited_access",onBlur:r.handleBlur,onChange:r.handleChange,required:!0,value:r.values.costofunlimited_access})]}),n(m,{direction:{xs:"column",sm:"row"},flexWrap:"wrap",spacing:3,sx:{p:3,pt:1},children:[a(_,{disabled:r.isSubmitting,type:"submit",variant:"contained",children:"Update"}),a(_,{color:"inherit",component:x,disabled:r.isSubmitting,href:"/dashboard/admin",children:"Cancel"})]})]},d)})]})},R=c=>{const{userinfo:p}=c;P();const y=w();let b={time:new Date().getTime(),value:"email",expire:3e6};const f=I();o.useEffect(()=>{p.is_admin==0&&f("/dashboard")},[p]);let d=JSON.stringify(b);return localStorage.setItem("time_token",d),n(T,{children:[a(F,{title:"Dashboard: Payment Settings"}),a(W,{component:"main",sx:{flexGrow:1,py:8},children:a(V,{maxWidth:y.stretch?!1:"xl",children:a("div",{children:n(m,{spacing:4,children:[a(m,{spacing:4,children:a("div",{children:n(H,{color:"text.primary",component:x,href:"/dashboard/admin",sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[a(D,{sx:{mr:1},children:a(E,{})}),a(j,{variant:"subtitle2",children:"Admin Dashboard"})]})})}),a(L,{})]})})})})]})},A=c=>({userinfo:c.profile.userinfo}),G=B(A)(R);export{G as default};