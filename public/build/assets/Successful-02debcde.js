import{u as g,r,b as f,o as x,j as s,F as S,d as a,S as b,k as n,C as N,e as v,B as C,s as y,p as A}from"./app-ca2a6fac.js";/* empty css             */import{u as L}from"./use-search-params-86969950.js";import"./formik.esm-1e4e5b40.js";function T(j){const i=g(),c=L().get("returnTo"),[o,z]=r.useState(!1),[l,B]=r.useState("LAUNCH DASHBOARD"),d=JSON.parse(localStorage.getItem("email")),{signIn:u}=f(),t={email:d,from:"success"},m=x();return s(S,{children:[a(b,{title:"Register"}),s("div",{className:"register-page",children:[a(n,{color:"primary",variant:"h4",sx:{pb:1,fontWeight:"bold",textAlign:"center"},children:"LOGO"}),a(N,{elevation:0,sx:{p:3,pb:0,borderRadius:5},className:"transparent",children:a(v,{children:s("form",{children:[a("div",{className:"success-img"}),a(n,{className:"title sucsize mb-3 text-center",children:"Registration Successful"}),a("div",{className:"d-flex justify-content-center launch-dashboard resend-button",children:s(C,{fullWidth:!0,size:"large",sx:{mt:2},type:"button",color:"primary",variant:"contained",className:"title-inter w-75 smallsize mainButton ",onClick:O=>{axios.post("/api/user-signin",t).then(e=>{if(e.data.status===200){async function h(){try{await u(t.email,t.password,e.data.data),i()&&m(c||A.dashboard.index)}catch(p){console.error(p)}}h()}e.data.status==="failed"&&alert(e.data.message)})},children:[s("span",{className:"ml-2",children:[" ",l," "]}),o?a(y,{color:"inherit",size:"1.4rem"}):a("span",{})]})})]})})})]})]})}export{T as default};