import{_ as T}from"./TablePagination-S20gGeu5.js";import{_ as $}from"./AppTextField-B60WX0Aj.js";import{c as F}from"./commonFunction-BBIkkxYt.js";import{S as w}from"./sweetalert2-z6gKu1nJ.js";import A from"./add-DWocpMTc.js";import P from"./edit-CRAnCwzw.js";import{V as S}from"./VCardText-CFWpIAj1.js";import{V as E,a as C}from"./VRow-BE7-b1kk.js";import{r as t,H as L,w as z,a as H,o as M,c as Q,b as a,e as i,a7 as R,v as Y,d as j,a1 as x,F as q}from"./main-CB1ztmrq.js";import{V as G}from"./VDataTableServer-CDhipHEY.js";import{V as J}from"./VImg-aBfGFdI_.js";import{V as K}from"./VCard-DL7Xe-R6.js";import"./VDivider-B2-VjAgU.js";import"./VPagination-DWjXlDR-.js";import"./form-CG84QoIb.js";import"./VTextField-Stte9fUB.js";/* empty css                   */import"./VCounter-BNuKemXM.js";import"./index--K34PiND.js";import"./index-B8LI2j_F.js";import"./VField-C9mZ7uAc.js";import"./easing-CjukEv2V.js";import"./VInput-DYfsf7D0.js";import"./forwardRefs-C-GTDzx5.js";import"./api-viss_4dR.js";import"./index-B3bPRkoL.js";import"./AppAutocomplete-AascM8ve.js";import"./VSelect-C7aEFWxn.js";import"./VList-BcHkJGIR.js";import"./ssrBoot-BtzI-Wlt.js";import"./VAvatar-zOVyi6gm.js";import"./dialog-transition-AygzFCa1.js";import"./VMenu-7qjLVDPw.js";import"./VOverlay-CNR7t01e.js";import"./lazy-BxV3eYfm.js";import"./scopeId-7ngYkFKd.js";import"./VCheckboxBtn-BjXKXdI0.js";import"./VSelectionControl-BZEKrAiF.js";import"./VChip-lDnPBPfK.js";import"./VSlideGroup-BPQV0CQ3.js";import"./filter-IqTB1Vw0.js";import"./VNavigationDrawer-i93hua05.js";import"./VForm-6WlEvzXG.js";/* empty css              */import"./VDataTable-B1OK34zP.js";import"./VTable-xLyTcMC4.js";const W={class:"d-flex gap-1"},Ye={__name:"index",setup(X){const y=F();t(""),t(""),t(""),t(null),t([]),t([]);const p=t([]),d=t(!1),u=t(!1),c=t(!1),l=t(""),m=t(10),n=t(1),v=t(0),_=t(),B=t(),k=[{title:"Country",key:"country.name"},{title:"Name",key:"name"},{title:"Logo",key:"logo"},{title:"Address",key:"address"},{title:"Actions",key:"actions",sortable:!1}],h=t({id:1,country:"",name:"",logo:"",address:""}),N=t(-1),V=t(h.value);L(()=>{});const f=async()=>{c.value=!0;try{const r=await y.getUniversities(n.value,l.value,m.value,_.value);p.value=r.data,v.value=r.total}catch(r){console.error("Failed to fetch universities:",r)}finally{c.value=!1}};z([l],()=>{f()});const b=r=>{N.value=p.value.indexOf(r),V.value={...r},u.value=!0},D=async r=>{const e={...r};if((await w.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await y.deleteUniversity(e.id),f(),w.fire("Deleted!","The item has been deleted.","success")}catch{w.fire("Error!","There was an error deleting the item.","error")}},I=r=>{var e,s;_.value=(e=r.sortBy[0])==null?void 0:e.key,B.value=(s=r.sortBy[0])==null?void 0:s.order,f()};return(r,e)=>{const s=$,g=H("IconBtn"),U=T;return M(),Q(q,null,[a(A,{isNavDrawerOpen:d.value,"onUpdate:isNavDrawerOpen":e[0]||(e[0]=o=>d.value=o)},null,8,["isNavDrawerOpen"]),a(P,{isNavDrawerOpen:u.value,"onUpdate:isNavDrawerOpen":e[1]||(e[1]=o=>u.value=o),editedItem:V.value},null,8,["isNavDrawerOpen","editedItem"]),a(K,{loading:c.value},{default:i(()=>[a(S,null,{default:i(()=>[a(E,null,{default:i(()=>[a(C,{cols:"12","offset-md":"7",md:"3"},{default:i(()=>[a(s,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value=o),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),a(C,{cols:"12",md:"2"},{default:i(()=>[a(R,{style:{"z-index":"1001"},onClick:e[3]||(e[3]=o=>d.value=!0)},{default:i(()=>[Y("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),a(G,{headers:k,items:p.value||[],"items-per-page":m.value,class:"text-no-wrap color-black table-padding","onUpdate:itemsPerPage":e[5]||(e[5]=o=>m.value=o),page:n.value,"onUpdate:page":e[6]||(e[6]=o=>n.value=o),"items-length":v.value,"onUpdate:options":I},{"item.logo":i(({item:o})=>[a(J,{src:o.logo,width:"100",height:"100"},null,8,["src"])]),"item.actions":i(({item:o})=>[j("div",W,[a(g,{onClick:O=>b(o)},{default:i(()=>[a(x,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),a(g,{onClick:O=>D(o)},{default:i(()=>[a(x,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),bottom:i(()=>[a(U,{page:n.value,"onUpdate:page":e[4]||(e[4]=o=>n.value=o),"items-per-page":m.value,"total-items":v.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items","items-per-page","page","items-length"])]),_:1},8,["loading"])],64)}}};export{Ye as default};