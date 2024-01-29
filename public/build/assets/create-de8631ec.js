import{a as W,r as u,c6 as b,p as g,d as e,j as a,f as t,C as h,e as m,aN as n,k as i,T as c,l as y,i as D,av as R,bo as j,aS as G,B as v,c as I,F as T,S as V,aM as L,cn as N,co as $,L as x,R as C}from"./app-3b15a07b.js";import{c as E,a as s,e as M,f}from"./index.esm-40f4c6c0.js";import{u as q}from"./formik.esm-3fceb438.js";import{F as A}from"./file-dropzone-3830d807.js";import{Q as H}from"./quill-editor-092fb4f5.js";import"./tslib.es6-af7906ce.js";import"./Upload01-7446f878.js";import"./bytes-to-size-706bbf81.js";import"./isEqual-9a32d758.js";const J=[{label:"Healthcare",value:"healthcare"},{label:"Makeup",value:"makeup"},{label:"Dress",value:"dress"},{label:"Skincare",value:"skincare"},{label:"Jewelry",value:"jewelry"},{label:"Blouse",value:"blouse"}],K={barcode:"925487986526",category:"",description:"",images:[],name:"",newPrice:0,oldPrice:0,sku:"IYV-8745",submit:null},O=E({barcode:s().max(255),category:s().max(255),description:s().max(5e3),images:M(),name:s().max(255).required(),newPrice:f().min(0).required(),oldPrice:f().min(0),sku:s().max(255)}),Q=P=>{const k=W(),[B,p]=u.useState([]),r=q({initialValues:K,validationSchema:O,onSubmit:async(l,o)=>{try{b.success("Product created"),k.push(g.dashboard.products.index)}catch(d){console.error(d),b.error("Something went wrong!"),o.setStatus({success:!1}),o.setErrors({submit:d.message}),o.setSubmitting(!1)}}}),w=u.useCallback(l=>{p(o=>[...o,...l])},[]),S=u.useCallback(l=>{p(o=>o.filter(d=>d.path!==l.path))},[]),F=u.useCallback(()=>{p([])},[]);return e("form",{onSubmit:r.handleSubmit,...P,children:a(t,{spacing:4,children:[e(h,{children:e(m,{children:a(n,{container:!0,spacing:3,children:[e(n,{xs:12,md:4,children:e(i,{variant:"h6",children:"Basic details"})}),e(n,{xs:12,md:8,children:a(t,{spacing:3,children:[e(c,{error:!!(r.touched.name&&r.errors.name),fullWidth:!0,helperText:r.touched.name&&r.errors.name,label:"Product Name",name:"name",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.name}),a("div",{children:[e(i,{color:"text.secondary",sx:{mb:2},variant:"subtitle2",children:"Description"}),e(H,{onChange:l=>{r.setFieldValue("description",l)},placeholder:"Write something",sx:{height:400},value:r.values.description}),!!(r.touched.description&&r.errors.description)&&e(y,{sx:{mt:2},children:e(D,{error:!0,children:r.errors.description})})]})]})})]})})}),e(h,{children:e(m,{children:a(n,{container:!0,spacing:3,children:[e(n,{xs:12,md:4,children:a(t,{spacing:1,children:[e(i,{variant:"h6",children:"Images"}),e(i,{color:"text.secondary",variant:"body2",children:"Images will appear in the store front of your website."})]})}),e(n,{xs:12,md:8,children:e(A,{accept:{"image/*":[]},caption:"(SVG, JPG, PNG, or gif maximum 900x400)",files:B,onDrop:w,onRemove:S,onRemoveAll:F})})]})})}),e(h,{children:e(m,{children:a(n,{container:!0,spacing:3,children:[e(n,{xs:12,md:4,children:e(i,{variant:"h6",children:"Pricing"})}),e(n,{xs:12,md:8,children:a(t,{spacing:3,children:[e(c,{error:!!(r.touched.oldPrice&&r.errors.oldPrice),fullWidth:!0,label:"Old price",name:"oldPrice",onBlur:r.handleBlur,onChange:r.handleChange,type:"number",value:r.values.oldPrice}),e(c,{error:!!(r.touched.newPrice&&r.errors.newPrice),fullWidth:!0,label:"New Price",name:"newPrice",onBlur:r.handleBlur,onChange:r.handleChange,type:"number",value:r.values.newPrice}),e("div",{children:e(R,{control:e(j,{defaultChecked:!0}),label:"Keep selling when stock is empty"})})]})})]})})}),e(h,{children:e(m,{children:a(n,{container:!0,spacing:3,children:[e(n,{xs:12,md:4,children:e(i,{variant:"h6",children:"Category"})}),e(n,{xs:12,md:8,children:a(t,{spacing:3,children:[e(c,{error:!!(r.touched.category&&r.errors.category),fullWidth:!0,label:"Category",name:"category",onBlur:r.handleBlur,onChange:r.handleChange,select:!0,value:r.values.category,children:J.map(l=>e(G,{value:l.value,children:l.label},l.value))}),e(c,{disabled:!0,error:!!(r.touched.barcode&&r.errors.barcode),fullWidth:!0,label:"Barcode",name:"barcode",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.barcode}),e(c,{disabled:!0,error:!!(r.touched.sku&&r.errors.sku),fullWidth:!0,label:"SKU",name:"sku",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.sku})]})})]})})}),a(t,{alignItems:"center",direction:"row",justifyContent:"flex-end",spacing:1,children:[e(v,{color:"inherit",children:"Cancel"}),e(v,{type:"submit",variant:"contained",children:"Create"})]})]})})},ne=()=>(I(),a(T,{children:[e(V,{title:"Dashboard: Product Create"}),e(y,{component:"main",sx:{flexGrow:1,py:8},children:e(L,{maxWidth:"xl",children:a(t,{spacing:3,children:[a(t,{spacing:1,children:[e(i,{variant:"h4",children:"Create a new product"}),a(N,{separator:e($,{}),children:[e(x,{color:"text.primary",component:C,href:g.dashboard.index,variant:"subtitle2",children:"Dashboard"}),e(x,{color:"text.primary",component:C,href:g.dashboard.products.index,variant:"subtitle2",children:"Products"}),e(i,{color:"text.secondary",variant:"subtitle2",children:"Create"})]})]}),e(Q,{})]})})})]}));export{ne as default};
