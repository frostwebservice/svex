import{b6 as m,b7 as A,cv as ee,P as T,r as s,j as r,f as P,d as e,q as D,bo as te,bx as ae,D as V,aG as re,l as I,F as X,k as S,cg as K,aY as ne,b1 as se,aw as _,aO as le,bj as ie,e as ce,T as M,aR as oe,bn as J,bp as ue,B,c as de,S as he,aL as pe,ct as ge,cu as fe,L as N,R as F,p as H,C as me,u as be}from"./app-822dcc1a.js";import{P as ye}from"./Plus-8f60a8cd.js";import{a as ke}from"./apply-pagination-03aa54c3.js";import{M as U}from"./multi-select-a9c93033.js";import{u as ve}from"./use-update-effect-9b756310.js";import{D as Ce}from"./DotsHorizontal-890fa2b3.js";import{I as Se}from"./Image01-cd272c29.js";import{S as Pe}from"./severity-pill-cf846bf9.js";import{T as we,b as G,c as h,a as xe}from"./TableRow-10c73733.js";import{T as Ae}from"./TableHead-331df3c4.js";import{L as Te}from"./LinearProgress-63639935.js";import{G as b}from"./Grid-0b91a245.js";import{T as Ie}from"./TablePagination-941d4e5d.js";import"./LastPage-39484993.js";const g=new Date,Me=[{id:"5ece2c077e39da27658aa8a9",attributes:["Healthcare"],category:"healthcare",createdAt:m(g,1).getTime(),currency:"$",image:"/assets/products/product-1.png",inStock:!0,isAvailable:!0,isShippable:!1,name:"Healthcare Erbology",price:23.99,quantity:85,sku:"401_1BBXBK",status:"published",updatedAt:A(g,6).getTime(),variants:2},{id:"5ece2c0d16f70bff2cf86cd8",attributes:["Makeup"],category:"makeup",createdAt:m(g,3).getTime(),currency:"$",image:"/assets/products/product-2.png",inStock:!1,isAvailable:!1,isShippable:!0,name:"Makeup Lancome Rouge",price:95,quantity:0,sku:"978_UBFGJC",status:"published",updatedAt:m(A(g,8),2).getTime(),variants:1},{id:"5ece2c123fad30cbbff8d060",attributes:["Variety of styles"],category:"jewelry",createdAt:m(g,6).getTime(),currency:"$",image:null,inStock:!0,isAvailable:!0,isShippable:!1,name:"Layering Bracelets Collection",price:155,quantity:48,sku:"211_QFEXJO",status:"draft",updatedAt:m(A(g,2),1).getTime(),variants:5},{id:"5ece2c1be7996d1549d94e34",attributes:["Skincare"],category:"skincare",createdAt:m(g,12).getTime(),currency:"$",image:"/assets/products/product-4.png",inStock:!0,isAvailable:!1,isShippable:!0,name:"Skincare Necessaire",price:17.99,quantity:5,sku:"321_UWEAJT",status:"published",updatedAt:m(A(g,7),1).getTime(),variants:1},{id:"b393ce1b09c1254c3a92c827",attributes:["Skincare"],category:"skincare",createdAt:m(g,4).getTime(),currency:"$",image:"/assets/products/product-5.png",inStock:!0,isAvailable:!1,isShippable:!0,name:"Skincare Soja CO",price:65.99,quantity:10,sku:"592_LDKDI",status:"draft",updatedAt:m(A(g,1),1).getTime(),variants:1},{id:"a6ede15670da63f49f752c89",attributes:["Makeup"],category:"makeup",createdAt:m(g,6).getTime(),currency:"$",image:"/assets/products/product-6.png",inStock:!0,isAvailable:!1,isShippable:!0,name:"Makeup Lipstick",price:76.99,quantity:22,sku:"324_DKSEKD",status:"draft",updatedAt:m(A(g,3),3).getTime(),variants:1},{id:"bcad5524fe3a2f8f8620ceda",attributes:["Healthcare"],category:"healthcare",createdAt:m(g,7).getTime(),currency:"$",image:"/assets/products/product-7.png",inStock:!0,isAvailable:!1,isShippable:!0,name:"Healthcare Ritual",price:115.2,quantity:15,sku:"598_DOKEII",status:"published",updatedAt:m(A(g,5),6).getTime(),variants:1}];class De{getProducts(o={}){const{filters:c,page:y,rowsPerPage:k}=o;let i=ee(Me),l=i.length;return typeof c<"u"&&(i=i.filter(f=>!(typeof c.name<"u"&&c.name!==""&&!f.name.toLowerCase().includes(c.name.toLowerCase())||typeof c.category<"u"&&c.category.length>0&&!c.category.includes(f.category)||typeof c.status<"u"&&c.status.length>0&&!c.status.includes(f.status)||typeof c.inStock<"u"&&!(f.inStock===c.inStock))),l=i.length),typeof y<"u"&&typeof k<"u"&&(i=ke(i,y,k)),Promise.resolve({data:i,count:l})}}const Ve=new De,Q=[{label:"Healthcare",value:"healthcare"},{label:"Makeup",value:"makeup"},{label:"Dress",value:"dress"},{label:"Skincare",value:"skincare"},{label:"Jewelry",value:"jewelry"},{label:"Blouse",value:"blouse"}],z=[{label:"Published",value:"published"},{label:"Draft",value:"draft"}],Be=[{label:"All",value:"all"},{label:"Available",value:"available"},{label:"Out of Stock",value:"outOfStock"}],Y=u=>{const{onFiltersChange:o,...c}=u,y=s.useRef(null),[k,i]=s.useState(""),[l,f]=s.useState([]),v=s.useCallback(()=>{const t={name:void 0,category:[],status:[],inStock:void 0};l.forEach(n=>{switch(n.field){case"name":t.name=n.value;break;case"category":t.category.push(n.value);break;case"status":t.status.push(n.value);break;case"inStock":t.inStock=n.value==="available";break}}),o==null||o(t)},[l,o]);ve(()=>{v()},[l,v]);const L=s.useCallback(t=>{f(n=>n.filter(p=>!(t.field===p.field&&t.value===p.value)))},[]),R=s.useCallback(t=>{var n;t.preventDefault(),i(((n=y.current)==null?void 0:n.value)||"")},[]),O=s.useCallback(t=>{f(n=>{const p=[],w=n.filter(d=>{if(d.field!=="category")return!0;const C=t.includes(d.value);return C&&p.push(d.value),C});return t.length===p.length||t.forEach(d=>{if(!p.includes(d)){const C=Q.find(E=>E.value===d);w.push({label:"Category",field:"category",value:d,displayValue:C.label})}}),w})},[]),q=s.useCallback(t=>{f(n=>{const p=[],w=n.filter(d=>{if(d.field!=="status")return!0;const C=t.includes(d.value);return C&&p.push(d.value),C});return t.length===p.length||t.forEach(d=>{if(!p.includes(d)){const C=z.find(E=>E.value===d);w.push({label:"Status",field:"status",value:d,displayValue:C.label})}}),w})},[]),a=s.useCallback(t=>{f(n=>{const p=n.filter(d=>d.field!=="inStock");switch(t[t.length-1]){case"available":p.push({label:"Stock",field:"inStock",value:"available",displayValue:"Available"});break;case"outOfStock":p.push({label:"Stock",field:"inStock",value:"outOfStock",displayValue:"Out of Stock"});break}return p})},[]),x=s.useMemo(()=>l.filter(t=>t.field==="category").map(t=>t.value),[l]),W=s.useMemo(()=>l.filter(t=>t.field==="status").map(t=>t.value),[l]),j=s.useMemo(()=>{const t=l.filter(n=>n.field==="inStock").map(n=>n.value);return t.length===0&&t.unshift("all"),t},[l]),$=l.length>0;return r("div",{...c,children:[r(P,{alignItems:"center",component:"form",direction:"row",onSubmit:R,spacing:2,sx:{p:2},children:[e(D,{children:e(te,{})}),e(ae,{disableUnderline:!0,fullWidth:!0,inputProps:{ref:y},placeholder:"Search by product name",sx:{flexGrow:1},value:k})]}),e(V,{}),$?e(P,{alignItems:"center",direction:"row",flexWrap:"wrap",gap:1,sx:{p:2},children:l.map((t,n)=>e(re,{label:e(I,{sx:{alignItems:"center",display:"flex","& span":{fontWeight:600}},children:r(X,{children:[e("span",{children:t.label}),":"," ",t.displayValue||t.value]})}),onDelete:()=>L(t),variant:"outlined"},n))}):e(I,{sx:{p:2.5},children:e(S,{color:"text.secondary",variant:"subtitle2",children:"No filters applied"})}),e(V,{}),r(P,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:1,sx:{p:1},children:[e(U,{label:"Category",onChange:O,options:Q,value:x}),e(U,{label:"Status",onChange:q,options:z,value:W}),e(U,{label:"Stock",onChange:a,options:Be,value:j})]})]})};Y.propTypes={onFiltersChange:T.func};const Le=[{label:"Healthcare",value:"healthcare"},{label:"Makeup",value:"makeup"},{label:"Dress",value:"dress"},{label:"Skincare",value:"skincare"},{label:"Jewelry",value:"jewelry"},{label:"Blouse",value:"blouse"}],Z=u=>{const{count:o=0,items:c=[],onPageChange:y=()=>{},onRowsPerPageChange:k,page:i=0,rowsPerPage:l=0}=u,[f,v]=s.useState(null),L=s.useCallback(a=>{v(x=>x===a?null:a)},[]),R=s.useCallback(()=>{v(null)},[]),O=s.useCallback(()=>{v(null),K.success("Product updated")},[]),q=s.useCallback(()=>{K.error("Product cannot be deleted")},[]);return r("div",{children:[e(ne,{children:r(we,{sx:{minWidth:1200},children:[e(Ae,{children:r(G,{children:[e(h,{}),e(h,{width:"25%",children:"Name"}),e(h,{width:"25%",children:"Stock"}),e(h,{children:"Price"}),e(h,{children:"sku"}),e(h,{children:"Status"}),e(h,{align:"right",children:"Actions"})]})}),e(xe,{children:c.map(a=>{const x=a.id===f,W=se(a.price).format(`${a.currency}0,0.00`),j=a.quantity>=10?"success":"error",$=a.status==="published"?"success":"info",t=a.variants>1;return r(s.Fragment,{children:[r(G,{hover:!0,children:[e(h,{padding:"checkbox",sx:{...x&&{position:"relative","&:after":{position:"absolute",content:'" "',top:0,left:0,backgroundColor:"primary.main",width:3,height:"calc(100% + 1px)"}}},width:"25%",children:e(_,{onClick:()=>L(a.id),children:e(D,{children:x?e(le,{}):e(ie,{})})})}),e(h,{width:"25%",children:r(I,{sx:{alignItems:"center",display:"flex"},children:[a.image?e(I,{sx:{alignItems:"center",backgroundColor:"neutral.50",backgroundImage:`url(${a.image})`,backgroundPosition:"center",backgroundSize:"cover",borderRadius:1,display:"flex",height:80,justifyContent:"center",overflow:"hidden",width:80}}):e(I,{sx:{alignItems:"center",backgroundColor:"neutral.50",borderRadius:1,display:"flex",height:80,justifyContent:"center",width:80},children:e(D,{children:e(Se,{})})}),r(I,{sx:{cursor:"pointer",ml:2},children:[e(S,{variant:"subtitle2",children:a.name}),r(S,{color:"text.secondary",variant:"body2",children:["in ",a.category]})]})]})}),r(h,{width:"25%",children:[e(Te,{value:a.quantity,variant:"determinate",color:j,sx:{height:8,width:36}}),r(S,{color:"text.secondary",variant:"body2",children:[a.quantity," ","in stock",t&&` in ${a.variants} variants`]})]}),e(h,{children:W}),e(h,{children:a.sku}),e(h,{children:e(Pe,{color:$,children:a.status})}),e(h,{align:"right",children:e(_,{children:e(D,{children:e(Ce,{})})})})]},a.id),x&&e(G,{children:r(h,{colSpan:7,sx:{p:0,position:"relative","&:after":{position:"absolute",content:'" "',top:0,left:0,backgroundColor:"primary.main",width:3,height:"calc(100% + 1px)"}},children:[e(ce,{children:r(b,{container:!0,spacing:3,children:[r(b,{item:!0,md:6,xs:12,children:[e(S,{variant:"h6",children:"Basic details"}),e(V,{sx:{my:2}}),r(b,{container:!0,spacing:3,children:[e(b,{item:!0,md:6,xs:12,children:e(M,{defaultValue:a.name,fullWidth:!0,label:"Product name",name:"name"})}),e(b,{item:!0,md:6,xs:12,children:e(M,{defaultValue:a.sku,disabled:!0,fullWidth:!0,label:"SKU",name:"sku"})}),e(b,{item:!0,md:6,xs:12,children:e(M,{defaultValue:a.category,fullWidth:!0,label:"Category",select:!0,children:Le.map(n=>e(oe,{value:n.value,children:n.label},n.value))})}),e(b,{item:!0,md:6,xs:12,children:e(M,{defaultValue:a.id,disabled:!0,fullWidth:!0,label:"Barcode",name:"barcode"})})]})]}),r(b,{item:!0,md:6,xs:12,children:[e(S,{variant:"h6",children:"Pricing and stocks"}),e(V,{sx:{my:2}}),r(b,{container:!0,spacing:3,children:[e(b,{item:!0,md:6,xs:12,children:e(M,{defaultValue:a.price,fullWidth:!0,label:"Old price",name:"old-price",InputProps:{startAdornment:e(J,{position:"start",children:a.currency})},type:"number"})}),e(b,{item:!0,md:6,xs:12,children:e(M,{defaultValue:a.price,fullWidth:!0,label:"New price",name:"new-price",InputProps:{startAdornment:e(J,{position:"start",children:"$"})},type:"number"})}),r(b,{item:!0,md:6,xs:12,sx:{alignItems:"center",display:"flex"},children:[e(ue,{}),e(S,{variant:"subtitle2",children:"Keep selling when stock is empty"})]})]})]})]})}),e(V,{}),r(P,{alignItems:"center",direction:"row",justifyContent:"space-between",sx:{p:2},children:[r(P,{alignItems:"center",direction:"row",spacing:2,children:[e(B,{onClick:O,type:"submit",variant:"contained",children:"Update"}),e(B,{color:"inherit",onClick:R,children:"Cancel"})]}),e("div",{children:e(B,{onClick:q,color:"error",children:"Delete product"})})]})]})})]},a.id)})})]})}),e(Ie,{component:"div",count:o,onPageChange:y,onRowsPerPageChange:k,page:i,rowsPerPage:l,rowsPerPageOptions:[5,10,25]})]})};Z.propTypes={count:T.number,items:T.array,onPageChange:T.func,onRowsPerPageChange:T.func,page:T.number,rowsPerPage:T.number};const Re=()=>{const[u,o]=s.useState({filters:{name:void 0,category:[],status:[],inStock:void 0},page:0,rowsPerPage:5}),c=s.useCallback(i=>{o(l=>({...l,filters:i}))},[]),y=s.useCallback((i,l)=>{o(f=>({...f,page:l}))},[]),k=s.useCallback(i=>{o(l=>({...l,rowsPerPage:parseInt(i.target.value,10)}))},[]);return{handleFiltersChange:c,handlePageChange:y,handleRowsPerPageChange:k,state:u}},Oe=u=>{const o=be(),[c,y]=s.useState({products:[],productsCount:0}),k=s.useCallback(async()=>{try{const i=await Ve.getProducts(u);o()&&y({products:i.data,productsCount:i.count})}catch(i){console.error(i)}},[u,o]);return s.useEffect(()=>{k()},[u]),{...c}},ze=()=>{const u=Re(),o=Oe(u.state);return de(),r(X,{children:[e(he,{title:"Dashboard: Product List"}),e(I,{component:"main",sx:{flexGrow:1,py:8},children:e(pe,{maxWidth:"xl",children:r(P,{spacing:4,children:[r(P,{direction:"row",justifyContent:"space-between",spacing:4,children:[r(P,{spacing:1,children:[e(S,{variant:"h4",children:"Products"}),r(ge,{separator:e(fe,{}),children:[e(N,{color:"text.primary",component:F,href:H.dashboard.index,variant:"subtitle2",children:"Dashboard"}),e(N,{color:"text.primary",component:F,href:H.dashboard.products.index,variant:"subtitle2",children:"Products"}),e(S,{color:"text.secondary",variant:"subtitle2",children:"List"})]})]}),e(P,{alignItems:"center",direction:"row",spacing:3,children:e(B,{component:F,href:H.dashboard.products.create,startIcon:e(D,{children:e(ye,{})}),variant:"contained",children:"Add"})})]}),r(me,{children:[e(Y,{onFiltersChange:u.handleFiltersChange}),e(Z,{onPageChange:u.handlePageChange,onRowsPerPageChange:u.handleRowsPerPageChange,page:u.state.page,items:o.products,count:o.productsCount,rowsPerPage:u.state.rowsPerPage})]})]})})})]})};export{ze as default};
