import{E as s,b4 as B,j as t,C as y,d as e,R as n,p as c,e as D,l as u,b5 as I,L as g,k as a,f as l,a1 as q,c as k,F as L,S as T,aE as M,c6 as N,c7 as S,B as m,D as j,aF as b,J as x,K as G,aG as E,u as W,r as p}from"./app-7d1d9a01.js";import{P as F,b as O}from"./post-newsletter-f6c8ea2f.js";import{g as H}from"./get-initials-d1c6cec7.js";import{C as J}from"./CardMedia-c86eb0cc.js";import"./deep-copy-ee95be26.js";import"./index-1eeef8a2.js";const v=i=>{const{authorAvatar:r,authorName:d,category:h,cover:o,publishedAt:f,readTime:w,shortDescription:A,title:C,...P}=i,R=B(f,"MMM d, yyyy");return t(y,{...P,children:[e(J,{component:n,href:c.dashboard.blog.postDetails,image:o,sx:{height:280}}),t(D,{children:[e(u,{sx:{mb:2},children:e(I,{label:h})}),e(g,{color:"text.primary",component:n,href:c.dashboard.blog.postDetails,variant:"h5",children:C}),e(a,{color:"text.secondary",sx:{height:48,mt:1,overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical",WebkitLineClamp:2},variant:"body1",children:A}),t(l,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:2,sx:{mt:2},children:[t(l,{alignItems:"center",direction:"row",spacing:2,children:[e(q,{src:r,children:H(d)}),t(a,{variant:"subtitle2",children:["By"," ",d," ","•"," ",R]})]}),t(a,{align:"right",color:"text.secondary",sx:{flexGrow:1},variant:"body2",children:[w," read"]})]})]})]})};v.propTypes={authorAvatar:s.string.isRequired,authorName:s.string.isRequired,category:s.string.isRequired,cover:s.string.isRequired,publishedAt:s.number.isRequired,readTime:s.string.isRequired,shortDescription:s.string.isRequired,title:s.string.isRequired};const K=()=>{const i=W(),[r,d]=p.useState([]),h=p.useCallback(async()=>{try{const o=await O.getPosts();i()&&d(o)}catch(o){console.error(o)}},[i]);return p.useEffect(()=>{h()},[]),r},Z=()=>{const i=K();return k(),t(L,{children:[e(T,{title:"Blog: Post List"}),e(u,{component:"main",sx:{flexGrow:1,py:8},children:t(M,{maxWidth:"xl",children:[t(l,{spacing:1,children:[e(a,{variant:"h3",children:"Blog"}),t(N,{separator:e(S,{}),children:[e(g,{color:"text.primary",component:n,href:c.dashboard.index,variant:"subtitle2",children:"Dashboard"}),e(g,{color:"text.primary",component:n,href:c.dashboard.blog.index,variant:"subtitle2",children:"Blog"}),e(a,{color:"text.secondary",variant:"subtitle2",children:"List"})]})]}),t(y,{elevation:16,sx:{alignItems:"center",borderRadius:1,display:"flex",justifyContent:"space-between",mb:8,mt:6,px:3,py:2},children:[e(a,{variant:"subtitle1",children:"Hello, Admin"}),e(m,{component:n,href:c.dashboard.blog.postCreate,variant:"contained",children:"New Post"})]}),e(a,{variant:"h4",children:"Recent Articles"}),e(a,{color:"text.secondary",sx:{mt:2},variant:"body1",children:"Discover the latest news, tips and user research insights from Acme."}),e(a,{color:"text.secondary",variant:"body1",children:"You will learn about web infrastructure, design systems and devops APIs best practices."}),e(j,{sx:{my:4}}),e(b,{container:!0,spacing:4,children:i.map(r=>e(b,{xs:12,md:6,children:e(v,{authorAvatar:r.author.avatar,authorName:r.author.name,category:r.category,cover:r.cover,publishedAt:r.publishedAt,readTime:r.readTime,shortDescription:r.shortDescription,title:r.title,sx:{height:"100%"}})},r.title))}),t(l,{alignItems:"center",direction:"row",justifyContent:"center",spacing:1,sx:{mt:4,mb:8},children:[e(m,{disabled:!0,startIcon:e(x,{children:e(G,{})}),children:"Newer"}),e(m,{endIcon:e(x,{children:e(E,{})}),children:"Older posts"})]}),e(u,{sx:{mt:8},children:e(F,{})})]})})]})};export{Z as default};
