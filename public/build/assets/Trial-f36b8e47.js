import{r as n,H as g,j as t,F as y,d as e,S as x,k as a,C as d,a1 as o,e as h,B as b,a0 as f,p as N}from"./app-7d1d9a01.js";/* empty css             */import{u as v}from"./use-search-params-e741423c.js";import{C as u}from"./CardHeader-d99a6169.js";const s="/build/assets/check-21-599ad07c.svg";function T(j){n.useState("start trial"),n.useState({trial:"",email:""});const r=JSON.parse(localStorage.getItem("Email"));v().get("returnTo");const m=g(),[A,l]=n.useState(!1);return t(y,{children:[e(x,{title:"Register"}),t("div",{className:"trial-page",children:[e(a,{color:"primary",variant:"h4",sx:{pb:2,m:1,fontWeight:"bold",textAlign:"center"},children:"LOGO"}),e("div",{className:"container",children:t("div",{className:"row",children:[e("div",{className:"col-md-6 col-sm-12 col-12 pl-2 flex-card",children:t(d,{className:"mainCard",sx:{p:2,borderRadius:5},children:[e(u,{variant:"h6",avatar:e(o,{alt:"Apple",src:"../../Assets/png/avatar.png"}),sx:{pb:0,fontWeight:"bold",textAlign:"center"},className:"w-100"}),e(h,{className:"d-flex custom-content",children:t("div",{className:" w-100",children:[e(a,{variant:"h5",className:"title",sx:{pb:0,fontWeight:"bold",textAlign:"left"},children:"$0"}),e(a,{variant:"h6",className:"title",sx:{pb:0,fontWeight:"bold",textAlign:"left"},children:"Free trial"}),e(a,{color:"text.secondary",className:"title",sx:{pb:1,fontWeight:"regular",textAlign:"left"},children:"To familiarize yourself with our tools"}),e("hr",{}),t("div",{className:"col",children:[t("div",{className:"trial-panel",children:[t("div",{className:"d-flex justify-content-start justify-items-center",children:[e("img",{src:s,className:"me-2  mb-2 pb-2"}),e(a,{className:"mb-2 pb-2 title-inter tinysize",children:"Access the Influencer Analyzer(Limited)"})]}),t("div",{className:"d-flex justify-content-start  justify-items-center",children:[e("img",{src:s,className:"me-2 mb-2 pb-2"}),e(a,{className:"mb-2 pb-2 title-inter tinysize",children:"Access the Influencer Finder(Limited)"})]}),t("div",{className:"d-flex justify-content-start",children:[e("img",{src:s,className:"me-2 mb-2 pb-2"}),e(a,{className:"mb-2 pb-2 title-inter tinysize",children:"Messaging System(Limited)"})]}),t("div",{className:"d-flex justify-content-start",children:[e("img",{src:s,className:"me-2 mb-2 pb-2"}),e(a,{className:"mb-2 pb-2 title-inter tinysize",children:"Job Board"})]}),t("div",{className:"d-flex justify-content-start",children:[e("img",{src:s,className:"me-2 mb-2 pb-2"}),e(a,{className:"mb-2 pb-2 title-inter tinysize",children:"Location"})]}),t("div",{className:"d-flex justify-content-start",children:[e("img",{src:s,className:"me-2 mb-2 pb-2"}),e(a,{className:"mb-2 pb-2 title-inter tinysize",children:"Total Reach Count"})]}),t("div",{className:"d-flex justify-content-start",children:[e("img",{src:s,className:"me-2 mb-2 pb-2"}),e(a,{className:"mb-2 pb-2 title-inter tinysize",children:"Engagement Rate"})]}),t("div",{className:"d-flex justify-content-start",children:[e("img",{src:s,className:"me-2 mb-2 pb-2"}),e(a,{className:"mb-2 pb-2 title-inter tinysize",children:"Compensation Method"})]})]}),e("div",{className:"d-flex justify-content-center mt-3",children:e(b,{className:"text-center m-2 w-100 btn btn-outline-primary title-inter smallsize mainButton trial-button",color:"inherit",onClick:p=>{const c={trial:1,email:r};f.post("/api/user-trial",c).then(i=>{i.data.status===200&&i.data.success&&(l(!1),m(N.auth.auth.successful)),i.data.status==="failed"&&(alert(i.data.message),l(!1))})},children:"Start Free trial"})})]})]})})]})}),e("div",{className:"col-md-6 col-sm-12 col-12 pl-2 flex-card",children:t(d,{className:"mainCard",sx:{p:2,borderRadius:5},children:[e(u,{variant:"h6",avatar:e(o,{alt:"Apple",src:"../public/logo192.png"}),sx:{pb:0,fontWeight:"bold",textAlign:"center"},className:"w-100"}),e(h,{className:"d-flex custom-content",children:t("div",{className:" w-100",children:[e(a,{className:"title",variant:"h5",sx:{pb:0,fontWeight:"bold",textAlign:"left"},children:"$99"}),e(a,{className:"title",variant:"h6",sx:{pb:0,fontWeight:"bold",textAlign:"left"},children:"Standard trial"}),e(a,{className:"title",color:"text.secondary",sx:{pb:1,fontWeight:"regular",textAlign:"left"},children:"To familiarize yourself with our tools"}),e("hr",{}),t("div",{className:"col",children:[t("div",{className:"trial-panel",children:[t("div",{className:"d-flex justify-content-start justify-items-center",children:[e("img",{src:s,className:"me-2 mb-2 pb-2"}),e(a,{className:"mb-2 pb-2 title-inter tinysize",children:"Access the Influencer Analyzer(Full)"})]}),t("div",{className:"d-flex justify-content-start  justify-items-center",children:[e("img",{src:s,className:"me-2 mb-2 pb-2"}),e(a,{className:"mb-2 pb-2 title-inter tinysize",children:"Access the Influencer Finder(Full)"})]}),t("div",{className:"d-flex justify-content-start",children:[e("img",{src:s,className:"me-2 mb-2 pb-2"}),e(a,{className:"mb-2 pb-2 title-inter tinysize",children:"Messaging System(Full)"})]}),t("div",{className:"d-flex justify-content-start",children:[e("img",{src:s,className:"me-2 mb-2 pb-2"}),e(a,{className:"mb-2 pb-2 title-inter tinysize",children:"Job Board"})]}),t("div",{className:"d-flex justify-content-start",children:[e("img",{src:s,className:"me-2 mb-2 pb-2"}),e(a,{className:"mb-2 pb-2 title-inter tinysize",children:"Compaign Management"})]}),t("div",{className:"d-flex justify-content-start",children:[e("img",{src:s,className:"me-2 mb-2 pb-2"}),e(a,{className:"mb-2 pb-2",children:"Perfermance Tracking"})]}),t("div",{className:"d-flex justify-content-start",children:[e("img",{src:s,className:"me-2 mb-2 pb-2"}),e(a,{className:"mb-2 pb-2 title-inter tinysize",children:"Reporting"})]}),t("div",{className:"d-flex justify-content-start",children:[e("img",{src:s,className:"me-2 mb-2 pb-2"}),e(a,{className:"mb-2 pb-2 title-inter tinysize",children:"Etc..."})]})]}),e("div",{className:"d-flex justify-content-center mt-3",children:e(b,{className:"text-center m-2 w-100 btn btn-outline-primary title-inter smallsize mainButton trial-button",color:"inherit",onClick:p=>{const c={trial:0,email:r};f.post("/api/user-trial",c).then(i=>{i.data.status===200&&i.data.success&&(l(!1),m(N.auth.auth.successful)),i.data.status==="failed"&&(alert(i.data.message),l(!1))})},children:"Start Standard Trial"})})]})]})})]})})]})})]})]})}export{T as default};
