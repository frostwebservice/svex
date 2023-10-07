import{P as p,j as n,f as u,d as e,k as r,q as l,l as g,$ as C,c0 as w,K as L,c3 as T,c4 as k,C as h,bi as q,bj as f,D as I,e as B,B as x,A as y,aN as R,c as z,F as A,S as W,aL as j,aM as m,L as P,R as F,p as M}from"./app-e6e0d569.js";import{C as H}from"./Clock-96c09d83.js";import{L as N}from"./LinearProgress-a17e0579.js";import{S as D,a as G,b as $}from"./Stepper-ef17714d.js";import{R as K}from"./react-markdown-58529a92.js";import{C as O}from"./CardHeader-1855acfb.js";const V=t=>{const{active:i,completed:o,icon:s}=t;return e(C,{sx:{height:24,width:24,...i||o?{backgroundColor:"primary.main",color:"primary.contrastText"}:{backgroundColor:c=>c.palette.mode==="dark"?"neutral.700":"neutral.400",color:"common.white"}},variant:"circular",children:o?e(l,{fontSize:"small",children:e(w,{})}):s})},b=t=>{const{course:i,activeChapter:o=0}=t,s=i.chapters||[];return n("div",{children:[n(u,{alignItems:"center",direction:"row",spacing:2,children:[e(N,{value:i.progress,sx:{flexGrow:1,height:8},variant:"determinate"}),n(r,{color:"text.secondary",variant:"body2",children:[i.progress,"%"]})]}),n(u,{alignItems:"center",direction:"row",spacing:1,sx:{mt:1},children:[e(l,{color:"action",fontSize:"small",children:e(H,{})}),e(r,{color:"text.secondary",variant:"caption",children:i.duration})]}),n(g,{sx:{mt:2},children:[e(r,{variant:"subtitle1",children:i.title}),e(r,{color:"text.secondary",variant:"body2",children:i.description})]}),e(D,{activeStep:o,orientation:"vertical",sx:{mt:3,"& .MuiStepLabel-iconContainer":{pr:3},"& .MuiStepConnector-line":{borderLeftColor:"divider",borderLeftWidth:2}},children:s.map((a,c)=>{const d=c<o;return e(G,{children:n($,{StepIconComponent:V,children:[e(r,{color:d?"primary.main":"text.primary",variant:"subtitle2",children:a.title}),e(r,{color:"text.secondary",variant:"body2",children:a.description})]})},a.title)})})]})};b.propTypes={activeChapter:p.number,course:p.object.isRequired};const _=t=>{const{node:i,inline:o,className:s,children:a,...c}=t,d=/language-(\w+)/.exec(s||"");return!o&&d?e(T,{children:String(a).replace(/\n$/,""),language:d[1],PreTag:"div",style:k,...c}):e("code",{className:s,...c,children:a})},E={code:_},J=L("div")(({theme:t})=>({color:t.palette.text.primary,fontFamily:t.typography.fontFamily,"& blockquote":{borderLeft:`4px solid ${t.palette.text.secondary}`,marginBottom:t.spacing(2),paddingBottom:t.spacing(1),paddingLeft:t.spacing(2),paddingTop:t.spacing(1),"& > p":{color:t.palette.text.secondary,marginBottom:0}},"& code":{color:t.palette.primary.main,fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",fontSize:14,paddingLeft:2,paddingRight:2},"& h1":{fontSize:35,fontWeight:500,letterSpacing:"-0.24px",marginBottom:t.spacing(2),marginTop:t.spacing(6)},"& h2":{fontSize:29,fontWeight:500,letterSpacing:"-0.24px",marginBottom:t.spacing(2),marginTop:t.spacing(6)},"& h3":{fontSize:24,fontWeight:500,letterSpacing:"-0.06px",marginBottom:t.spacing(2),marginTop:t.spacing(6)},"& h4":{fontSize:20,fontWeight:500,letterSpacing:"-0.06px",marginBottom:t.spacing(2),marginTop:t.spacing(4)},"& h5":{fontSize:16,fontWeight:500,letterSpacing:"-0.05px",marginBottom:t.spacing(2),marginTop:t.spacing(2)},"& h6":{fontSize:14,fontWeight:500,letterSpacing:"-0.05px",marginBottom:t.spacing(2),marginTop:t.spacing(2)},"& li":{fontSize:14,lineHeight:1.5,marginBottom:t.spacing(2),marginLeft:t.spacing(4)},"& p":{fontSize:16,lineHeight:1.5,marginBottom:t.spacing(2),"& > a":{color:t.palette.primary.main}}})),S=t=>{const{content:i}=t;return e(J,{children:e(K,{children:i,components:E})})};S.propTypes={content:p.string.isRequired};const v=t=>{const{chapter:i}=t;return n(g,{sx:{position:"relative",pb:6},children:[n(h,{children:[e(O,{title:i.title,subheader:i.description}),n(q,{value:"lesson",sx:{px:3},children:[e(f,{label:"Lesson",value:"lesson"}),e(f,{label:"Resources",value:"resources"})]}),e(I,{}),e(B,{children:e(S,{content:i.lesson||""})})]}),e(g,{sx:{bottom:20,display:"flex",justifyContent:"center",left:0,position:"absolute",right:0,zIndex:1},children:e(h,{elevation:16,children:n(u,{alignItems:"center",direction:"row",spacing:3,sx:{p:1},children:[e(x,{color:"inherit",size:"small",startIcon:e(l,{children:e(y,{})}),children:"Prev"}),e(r,{color:"text.secondary",variant:"subtitle2",children:"1/3"}),e(x,{color:"inherit",size:"small",startIcon:e(l,{children:e(R,{})}),children:"Next"})]})})})]})};v.propTypes={chapter:p.object.isRequired};const Q=()=>({id:"c3a2b7331eef8329e2a87c79",chapters:[{title:"Introduction",description:"Introducing the app and how it works",lesson:""},{title:"Installing required packages",description:"Introducing the library and how it works",lesson:`
Alias animi labque, deserunt distinctio eum excepturi fuga iure labore magni molestias mollitia natus, officia pofro quis sunt 
temporibus veritatis voluptatem, voluptatum. Aut blanditiis esse et illum maxim, obcaecati possimus voluptate! Accusamus adipisci 
amet aperiam, assumenda consequuntur fugiat inventore iusto magnam molestias natus necessitatibus, nulla pariatur.

Adipisci alias animi debitis eos et impedit maiores, modi nam nobis officia optio perspiciatis, rerum. Accusantium esse nostrum odit quis quo:

\`\`\`ts
const mongoose = require('mongoose'),
const uniqueValidator = require('mongoose-unique-validator'),
const bcrypt = require('bcrypt'),

const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;
  
const Email = new Schema({
  address: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\\S+@\\S+\\.\\S+/, 'is invalid'],
    index: true,
  },
  // Change the default to true if you don't need to validate a new user's email address
  validated: { type: Boolean, default: false },
});
\`\`\`
`},{title:"Step title",description:"Introducing the library and how it works",lesson:""}],description:"Introductory course for design and framework basics",duration:"78 hours",progress:50,title:"React and Redux Tutorial"}),ie=()=>{const t=Q();z();const i=1,o=t.chapters[i];return n(A,{children:[e(W,{title:"Dashboard: Academy Course"}),e(g,{component:"main",sx:{flexGrow:1,py:3},children:e(j,{maxWidth:"xl",children:n(m,{container:!0,spacing:4,children:[e(m,{xs:12,md:4,children:n(u,{spacing:3,children:[e("div",{children:n(P,{color:"text.primary",component:F,href:M.dashboard.academy.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[e(l,{sx:{mr:1},children:e(y,{})}),e(r,{variant:"subtitle2",children:"Academy"})]})}),e(b,{activeChapter:i,course:t})]})}),e(m,{xs:12,md:8,children:o&&e(v,{chapter:o})})]})})})]})};export{ie as default};
