import{c as d,j as r,F as l,d as a,S as p,l as h,aM as u,f as i,k as n,u as f,r as s}from"./app-28409791.js";import{s as g}from"./index-dd4922ef.js";import{S as x}from"./social-post-add-12a0723c.js";import{S}from"./social-post-card-0ca0d9e5.js";import"./deep-copy-ee95be26.js";import"./CardHeader-aec27fa6.js";import"./Clock-d913e05a.js";import"./Heart-95faea7b.js";import"./Share07-cee1bd5c.js";import"./index-1ce55d6b.js";import"./FaceSmile-7129a273.js";import"./Link01-0f61e6e3.js";import"./Attachment01-05972069.js";import"./Plus-cc06a2e0.js";import"./Image01-62084de8.js";import"./use-mocked-user-2f7e8148.js";import"./get-initials-d1c6cec7.js";import"./CardMedia-1eebfc74.js";const k=()=>{const t=f(),[e,c]=s.useState([]),m=s.useCallback(async()=>{try{const o=await g.getFeed();t()&&c(o)}catch(o){console.error(o)}},[t]);return s.useEffect(()=>{m()},[]),e},V=()=>{const t=k();return d(),r(l,{children:[a(p,{title:"Dashboard: Social Feed"}),a(h,{component:"main",sx:{flexGrow:1,py:8},children:r(u,{maxWidth:"lg",children:[r(i,{spacing:1,children:[a(n,{color:"text.secondary",variant:"overline",children:"Social Feed"}),a(n,{variant:"h4",children:"Here's what your connections posted"})]}),r(i,{spacing:3,sx:{mt:3},children:[a(x,{}),t.map(e=>a(S,{authorAvatar:e.author.avatar,authorName:e.author.name,comments:e.comments,createdAt:e.createdAt,isLiked:e.isLiked,likes:e.likes,media:e.media,message:e.message},e.id))]})]})})]})};export{V as default};
