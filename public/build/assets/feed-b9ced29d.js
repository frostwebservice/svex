import{c as d,j as r,F as l,d as a,S as p,l as h,aM as u,f as i,k as n,u as f,r as s}from"./app-614b2243.js";import{s as g}from"./index-6782b426.js";import{S as x}from"./social-post-add-725f0cb0.js";import{S}from"./social-post-card-ec75674f.js";import"./deep-copy-ee95be26.js";import"./CardHeader-a019c546.js";import"./Clock-533c4c14.js";import"./Heart-77254f01.js";import"./Share07-053d4f33.js";import"./index-2fe066f9.js";import"./FaceSmile-26fd9035.js";import"./Link01-3350ccdb.js";import"./Attachment01-abc6769a.js";import"./Plus-60cf63de.js";import"./Image01-8729cfe2.js";import"./use-mocked-user-2f7e8148.js";import"./get-initials-d1c6cec7.js";import"./CardMedia-356d4b4a.js";const k=()=>{const t=f(),[e,c]=s.useState([]),m=s.useCallback(async()=>{try{const o=await g.getFeed();t()&&c(o)}catch(o){console.error(o)}},[t]);return s.useEffect(()=>{m()},[]),e},V=()=>{const t=k();return d(),r(l,{children:[a(p,{title:"Dashboard: Social Feed"}),a(h,{component:"main",sx:{flexGrow:1,py:8},children:r(u,{maxWidth:"lg",children:[r(i,{spacing:1,children:[a(n,{color:"text.secondary",variant:"overline",children:"Social Feed"}),a(n,{variant:"h4",children:"Here's what your connections posted"})]}),r(i,{spacing:3,sx:{mt:3},children:[a(x,{}),t.map(e=>a(S,{authorAvatar:e.author.avatar,authorName:e.author.name,comments:e.comments,createdAt:e.createdAt,isLiked:e.isLiked,likes:e.likes,media:e.media,message:e.message},e.id))]})]})})]})};export{V as default};