import{d,G as p,c as u,e as n,w as _,o as m,b as t,X as o,au as v,av as b,_ as f}from"./index-4c31cb7d.js";import{t as g,v as h}from"./el-table-column-d17b60b1.js";import{c as w}from"./shareWebsite-666b9fda.js";import{g as x}from"./dateFormat-99d748d6.js";import"./request-ac6bd0cc.js";const D=e=>(v("data-v-be968d10"),e=e(),b(),e),V={class:"website-wrapper"},y=D(()=>t("div",null,null,-1)),I=d({__name:"VisitRecord",setup(e){const c=p([]);return(async()=>{const l=await w();c.value=l.data.map(a=>({...a,visitTime:x(a.createdAt,"-",!0)}))})(),(l,a)=>{const i=h,r=g;return m(),u("div",V,[n(r,{data:c.value,border:""},{default:_(()=>[n(i,{prop:"website",align:"center",label:"记录"},{default:_(({row:s})=>[t("div",null,o(s.user),1),t("div",null,o(s.website),1),t("div",null,o(s.visitTime),1),y]),_:1})]),_:1},8,["data"])])}}});const k=f(I,[["__scopeId","data-v-be968d10"]]);export{k as default};