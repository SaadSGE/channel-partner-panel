import{_ as T}from"./TablePagination-CvZNgNgM.js";import{_ as $}from"./AppTextField-CFn_jv_O.js";import{c as F}from"./commonFunction-U3XaDVDG.js";import{S as w}from"./sweetalert2-z6gKu1nJ.js";import A from"./add-CPeQp1wN.js";import P from"./edit-BOOGVyhR.js";import{V as S}from"./VCardText-DuS4qxmo.js";import{V as E,a as C}from"./VRow-CT0QuKMD.js";import{r as t,w as L,a as z,o as Q,c as R,b as a,e as n,a7 as Y,v as j,d as q,a1 as x,F as G}from"./main-DPb0_12f.js";import{V as H}from"./VDataTableServer-hZth0G74.js";import{V as J}from"./VImg-DFj61J6e.js";import{V as K}from"./VCard-C0bM0ZXG.js";import"./VDivider-B8LX-A2l.js";import"./VPagination-hxyZ0dLG.js";import"./VTextField-9aIjmxOS.js";import"./index-RtQTYc-4.js";import"./index-D5BOVv8n.js";import"./forwardRefs-D9kYFWgq.js";import"./api-CbkWr8Ve.js";import"./index-BYrzgnBV.js";import"./AppAutocomplete-auFazs0X.js";import"./VSelect-DwHgvjnN.js";import"./VList-BfLBVeHb.js";import"./ssrBoot-WBVlJHJ4.js";import"./VAvatar-DBQAuZOP.js";import"./dialog-transition-CdQQCviD.js";import"./scopeId-BacWre44.js";import"./VMenu-y1B7IMSs.js";import"./VCheckboxBtn-DHRGWJBW.js";import"./VChip-C8WHXIHk.js";import"./filter-CA0zSWB2.js";import"./VNavigationDrawer-CLM2wCJA.js";import"./VForm-BlnZ_x-m.js";/* empty css              */import"./VDataTable-Du65372a.js";import"./VTable-e866QI70.js";const M={class:"d-flex gap-1"},Fe={__name:"index",setup(W){const y=F();t(""),t(""),t(""),t(null),t([]),t([]);const d=t([]),p=t(!1),u=t(!1),c=t(!1),l=t(""),m=t(10),i=t(1),v=t(0),_=t(),B=t(),k=[{title:"Country",key:"country.name"},{title:"Name",key:"name"},{title:"Logo",key:"logo"},{title:"Address",key:"address"},{title:"Actions",key:"actions",sortable:!1}],h=t({id:1,country:"",name:"",logo:"",address:""}),N=t(-1),V=t(h.value),f=async()=>{c.value=!0;try{const r=await y.getUniversities(i.value,l.value,m.value,_.value);d.value=r.data,v.value=r.total}catch(r){console.error("Failed to fetch universities:",r)}finally{c.value=!1}};L([l],()=>{f()});const b=r=>{N.value=d.value.indexOf(r),V.value={...r},u.value=!0},D=async r=>{const e={...r};if((await w.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await y.deleteUniversity(e.id),f(),w.fire("Deleted!","The item has been deleted.","success")}catch{w.fire("Error!","There was an error deleting the item.","error")}},I=r=>{var e,s;_.value=(e=r.sortBy[0])==null?void 0:e.key,B.value=(s=r.sortBy[0])==null?void 0:s.order,f()};return(r,e)=>{const s=$,g=z("IconBtn"),U=T;return Q(),R(G,null,[a(A,{isNavDrawerOpen:p.value,"onUpdate:isNavDrawerOpen":e[0]||(e[0]=o=>p.value=o)},null,8,["isNavDrawerOpen"]),a(P,{isNavDrawerOpen:u.value,"onUpdate:isNavDrawerOpen":e[1]||(e[1]=o=>u.value=o),editedItem:V.value},null,8,["isNavDrawerOpen","editedItem"]),a(K,{loading:c.value},{default:n(()=>[a(S,null,{default:n(()=>[a(E,null,{default:n(()=>[a(C,{cols:"12","offset-md":"7",md:"3"},{default:n(()=>[a(s,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value=o),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),a(C,{cols:"12",md:"2"},{default:n(()=>[a(Y,{style:{"z-index":"1001"},onClick:e[3]||(e[3]=o=>p.value=!0)},{default:n(()=>[j("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),a(H,{headers:k,items:d.value||[],"items-per-page":m.value,class:"text-no-wrap color-black table-padding","onUpdate:itemsPerPage":e[5]||(e[5]=o=>m.value=o),page:i.value,"onUpdate:page":e[6]||(e[6]=o=>i.value=o),"items-length":v.value,"onUpdate:options":I},{"item.logo":n(({item:o})=>[a(J,{src:o.logo,width:"100",height:"100"},null,8,["src"])]),"item.actions":n(({item:o})=>[q("div",M,[a(g,{onClick:O=>b(o)},{default:n(()=>[a(x,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),a(g,{onClick:O=>D(o)},{default:n(()=>[a(x,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),bottom:n(()=>[a(U,{page:i.value,"onUpdate:page":e[4]||(e[4]=o=>i.value=o),"items-per-page":m.value,"total-items":v.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items","items-per-page","page","items-length"])]),_:1},8,["loading"])],64)}}};export{Fe as default};
