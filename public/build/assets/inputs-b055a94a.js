import{d as e,l as n,j as a,f as r,k as t,bQ as b,av as c,m as o,bz as h,ar as f,bA as v,aN as i,bo as u,T as s,aS as x,c as y,F as g,S as I,aM as k}from"./app-3b15a07b.js";import{P as w}from"./previewer-64de943f.js";import{D as C}from"./DateTimePicker-384f0148.js";import"./CardHeader-44292a17.js";import"./PureDateInput-758f4dd9.js";import"./Grid-ef997d2d.js";import"./createTheme-bd0f03b2.js";import"./DialogActions-cb805279.js";const P=()=>e(n,{sx:{p:3},children:a(r,{spacing:1,children:[e(t,{variant:"subtitle2",children:"System"}),e(t,{color:"text.secondary",variant:"body2",children:"You will receive emails in your business email address"}),a(b,{children:[e(c,{control:e(o,{defaultChecked:!0}),label:e(t,{variant:"body1",children:"Email alerts"})}),e(c,{control:e(o,{}),label:e(t,{variant:"body1",children:"Push Notifications"})}),e(c,{control:e(o,{defaultChecked:!0}),label:e(t,{variant:"body1",children:"Text message"})})]})]})}),j=[{description:"I'm looking for teammates to join in a personal project",title:"I'm a freelancer",value:"freelancer"},{description:"I'm looking for freelancer or contractors to take care of my project",title:"I’m a project owner",value:"projectOwner"},{description:"I'm looking for freelancer or contractors to take care of my project",title:"I want to join affiliate",value:"affiliate"}],S=()=>e(n,{sx:{p:3},children:a(r,{component:h,spacing:4,children:[a(r,{spacing:1,children:[e(t,{variant:"h5",children:"Please select one option"}),e(t,{color:"text.secondary",variant:"body1",children:"Proin tincidunt lacus sed ante efficitur efficitur. Quisque aliquam fringilla velit sit amet euismod."})]}),e(r,{component:h,spacing:3,children:j.map((l,p)=>{const d=p===2;return e(f,{sx:{alignItems:"flex-start",display:"flex",p:2},variant:"outlined",children:e(c,{control:e(v,{}),disabled:d,label:a(n,{sx:{ml:2},children:[e(t,{sx:{color:d?"action.disabled":"text.primary"},variant:"subtitle2",children:l.title}),e(t,{sx:{color:d?"action.disabled":"text.secondary"},variant:"body2",children:l.description})]}),value:l.value},l.value)},l.value)})})]})}),W=()=>e(n,{sx:{p:3},children:a(i,{container:!0,spacing:3,children:[e(i,{xs:12,md:6,children:a(r,{spacing:1,children:[e(t,{variant:"subtitle2",children:"Email Verified"}),e(t,{color:"text.secondary",variant:"body2",children:"Disabling this will automatically send the user a verification email."}),e(u,{defaultChecked:!0})]})}),e(i,{xs:12,md:6,children:a(r,{spacing:1,children:[e(t,{variant:"subtitle2",children:"Email"}),e(t,{color:"text.secondary",variant:"body2",children:"This will give the user discounted prices for all products."}),e(u,{})]})})]})}),D=()=>e(n,{sx:{p:3},children:e(n,{maxWidth:"sm",children:a(i,{container:!0,spacing:4,children:[e(i,{xs:12,sm:6,children:e(s,{fullWidth:!0,label:"Name"})}),e(i,{xs:12,sm:6,children:e(s,{fullWidth:!0,label:"Email Address",required:!0,type:"email"})}),e(i,{xs:12,children:e(s,{fullWidth:!0,label:"Phone number"})}),e(i,{xs:12,sm:6,children:e(s,{fullWidth:!0,label:"State/Region"})}),e(i,{xs:12,sm:6,children:e(s,{fullWidth:!0,label:"City"})})]})})}),m=[{label:"Healthcare",value:"healthcare"},{label:"Makeup",value:"makeup"},{label:"Dress",value:"dress"},{label:"Skincare",value:"skincare"},{label:"Jewelry",value:"jewelry"},{label:"Blouse",value:"blouse"}],T=new Date,E=()=>e(n,{sx:{p:3},children:a(r,{spacing:3,children:[e("div",{children:e(c,{control:e(u,{color:"primary"}),label:"Schedule Publish"})}),e(C,{label:"Start date",onChange:()=>{},renderInput:l=>e(s,{fullWidth:!0,...l}),value:T}),e(s,{defaultValue:m[0].value,fullWidth:!0,label:"Category",name:"category",select:!0,children:m.map(l=>e(x,{value:l.value,children:l.label},l.value))}),a("div",{children:[e("div",{children:e(c,{control:e(o,{defaultChecked:!0}),label:"Published Globally"})}),e("div",{children:e(c,{control:e(o,{defaultChecked:!0}),label:"Enable Contents"})})]})]})}),F=[{element:e(P,{}),title:"Inputs 1"},{element:e(S,{}),title:"Inputs 2"},{element:e(W,{}),title:"Inputs 3"},{element:e(D,{}),title:"Inputs 4"},{element:e(E,{}),title:"Inputs 5"}],B=()=>(y(),a(g,{children:[e(I,{title:"Components: Inputs"}),e(n,{component:"main",sx:{flexGrow:1,py:8},children:e(k,{maxWidth:"lg",children:e(r,{spacing:8,children:F.map(l=>e(w,{title:l.title,children:l.element},l.title))})})})]}));export{B as default};
