import{r as v,w as b,o as x,f as g,e as i,b as s,v as u,x as d,a6 as D,a7 as P}from"./main-cAWQX6jp.js";import{u as w}from"./rolePermission-V_UptGPq.js";import{S as c}from"./sweetalert2-z6gKu1nJ.js";import{V as y,b as S}from"./VCard-4bNPQQjd.js";import{V as C}from"./VCardText-BhEVnKCu.js";import{V as _}from"./VForm-CqrL5QFS.js";import{V as h}from"./VTextField-a5amF184.js";import{V as B}from"./VDialog-Ddzxv7NP.js";const q={__name:"AddEditPermissionDialog",props:{isDialogVisible:Boolean,permission:Object},emits:["update:isDialogVisible","saved"],setup(t,{emit:p}){const o=t,l=p,m=w(),e=v("");b(()=>o.permission,a=>{a?e.value=a.name:e.value=""},{immediate:!0});const f=async()=>{try{o.permission?await m.updatePermission({id:o.permission.id,name:e.value}):await m.createPermission({name:e.value}),r(),l("saved"),c.fire({icon:"success",title:"Success",text:o.permission?"Permission updated successfully":"Permission created successfully"})}catch(a){r(),c.fire({icon:"error",title:"Error",text:a})}},r=()=>{l("update:isDialogVisible",!1),e.value=""};return(a,n)=>(x(),g(B,{"model-value":t.isDialogVisible,"onUpdate:modelValue":r,"max-width":"600px"},{default:i(()=>[s(y,null,{default:i(()=>[s(S,null,{default:i(()=>[u(d(t.permission?"Edit":"Add")+" Permission ",1)]),_:1}),s(C,null,{default:i(()=>[s(_,{onSubmit:D(f,["prevent"])},{default:i(()=>[s(h,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=V=>e.value=V),label:"Permission Name",required:""},null,8,["modelValue"]),s(P,{type:"submit",color:"primary",class:"mt-4"},{default:i(()=>[u(d(t.permission?"Update":"Create")+" Permission ",1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"]))}};export{q as _};