import{r as l,j as t,F as d,d as e,S as p,k as r,C as u,e as h,B as f,M as g}from"./app-6dc780fc.js";/* empty css             */import{u as x}from"./use-search-params-9c31b462.js";import"./formik.esm-b05d8259.js";function E(b){x().get("returnTo");const[o,s]=l.useState("Resend verification link"),[c,i]=l.useState(!1),n=JSON.parse(localStorage.getItem("Email")),m={email:n};return t(d,{children:[e(p,{title:"Email Verification"}),t("div",{className:"signup-page",children:[e(r,{color:"primary",variant:"h4",sx:{pb:1,fontWeight:"bold",textAlign:"center"},children:"LOGO"}),e(u,{elevation:0,sx:{p:3,pb:0,borderRadius:5},className:"transparent",children:e(h,{children:t("form",{children:[e(r,{className:"title bigsize mb-3 text-center",children:"Confirm your email address"}),e(r,{color:"text.secondary",className:"title-inter smallsize",sx:{pt:2,textAlign:"center"},children:"please verify your email address by clicking the link sent to"}),e(r,{sx:{pb:4,textAlign:"center"},className:"title smallsize",children:n}),e("div",{className:"row d-flex justify-content-center resend-button",children:t(f,{fullWidth:!0,size:"large",sx:{mt:2},type:"button",color:"primary",variant:"contained",className:"title-inter w-75 smallsize mainButton resend-button",onClick:async v=>{i(!0),s("");try{axios.post("/api/resend-email",m).then(a=>{console.log(a)}),console.log("Verification email sent")}catch(a){console.error("Error sending verification email",a)}i(!1),s("Resend Verification link")},children:[t("span",{className:"ml-2 button-font",children:[" ",o," "]}),c?e(g,{color:"inherit",size:"1.4rem"}):e("span",{})]})})]})})})]})]})}export{E as default};
