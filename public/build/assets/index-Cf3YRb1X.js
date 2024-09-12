import{_ as T}from"./TablePagination-CWET7d-X.js";import{_ as $}from"./AppTextField-NIranakw.js";import{c as F}from"./commonFunction-BF_FJ_wF.js";import{S as w}from"./sweetalert2-z6gKu1nJ.js";import A from"./add-BJiqw3vl.js";import P from"./edit-D8H7uxeM.js";import{V as S}from"./VCardText-B0hdZjM1.js";import{V as E,a as C}from"./VRow-a18vhg8U.js";import{r as t,w as L,a as z,o as Q,c as R,b as a,e as i,a7 as Y,v as j,d as q,a1 as x,F as G}from"./main-BSpI_2CL.js";import{V as H}from"./VDataTableServer-a6MBuFi_.js";import{V as J}from"./VImg-o7pbezjE.js";import{V as K}from"./VCard-CpeE6zKp.js";import"./VDivider-Dgh3-wqM.js";import"./VPagination-CR59s4-D.js";import"./form-CMEPPpeo.js";import"./VTextField-CERBXMv-.js";/* empty css                   */import"./VCounter-Dl8l4qQU.js";import"./index-fUpBkQ-C.js";import"./index-Dd4E7JjT.js";import"./VField-BOwtP06I.js";import"./easing-CjukEv2V.js";import"./VInput-BL92zCDM.js";import"./forwardRefs-C-GTDzx5.js";import"./api-BT0-XMST.js";import"./index-B3bPRkoL.js";import"./AppAutocomplete--FzmpvEa.js";import"./VSelect-CfFRikuZ.js";import"./VList-x2BFwD49.js";import"./ssrBoot-C7OFAziE.js";import"./VAvatar-BRryBAB-.js";import"./dialog-transition-W38b6xcl.js";import"./VMenu-BX-gfm2E.js";import"./VOverlay-B4MR1gw8.js";import"./lazy-iWUArzjE.js";import"./scopeId-CnwtrNNH.js";import"./VCheckboxBtn-Zr57G0GN.js";import"./VSelectionControl-CGuQIYma.js";import"./VChip-zBwYxMgH.js";import"./VSlideGroup-DPanv1s6.js";import"./filter-BUZe0dSK.js";import"./VNavigationDrawer-2Eb2TNN2.js";import"./VForm-DAMOE1Td.js";/* empty css              */import"./VDataTable-Lr4nR7x_.js";import"./VTable-8l_73vwd.js";const M={class:"d-flex gap-1"},je={__name:"index",setup(W){const y=F();t(""),t(""),t(""),t(null),t([]),t([]);const p=t([]),d=t(!1),u=t(!1),c=t(!1),l=t(""),m=t(10),n=t(1),v=t(0),_=t(),B=t(),k=[{title:"Country",key:"country.name"},{title:"Name",key:"name"},{title:"Logo",key:"logo"},{title:"Address",key:"address"},{title:"Actions",key:"actions",sortable:!1}],h=t({id:1,country:"",name:"",logo:"",address:""}),N=t(-1),V=t(h.value),f=async()=>{c.value=!0;try{const r=await y.getUniversities(n.value,l.value,m.value,_.value);p.value=r.data,v.value=r.total}catch(r){console.error("Failed to fetch universities:",r)}finally{c.value=!1}};L([l],()=>{f()});const b=r=>{N.value=p.value.indexOf(r),V.value={...r},u.value=!0},D=async r=>{const e={...r};if((await w.fire({title:"Are you sure?",text:"Do you want to delete this item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{await y.deleteUniversity(e.id),f(),w.fire("Deleted!","The item has been deleted.","success")}catch{w.fire("Error!","There was an error deleting the item.","error")}},I=r=>{var e,s;_.value=(e=r.sortBy[0])==null?void 0:e.key,B.value=(s=r.sortBy[0])==null?void 0:s.order,f()};return(r,e)=>{const s=$,g=z("IconBtn"),U=T;return Q(),R(G,null,[a(A,{isNavDrawerOpen:d.value,"onUpdate:isNavDrawerOpen":e[0]||(e[0]=o=>d.value=o)},null,8,["isNavDrawerOpen"]),a(P,{isNavDrawerOpen:u.value,"onUpdate:isNavDrawerOpen":e[1]||(e[1]=o=>u.value=o),editedItem:V.value},null,8,["isNavDrawerOpen","editedItem"]),a(K,{loading:c.value},{default:i(()=>[a(S,null,{default:i(()=>[a(E,null,{default:i(()=>[a(C,{cols:"12","offset-md":"7",md:"3"},{default:i(()=>[a(s,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value=o),placeholder:"Search ...","append-inner-icon":"tabler-search","single-line":"","hide-details":"",dense:"",outlined:""},null,8,["modelValue"])]),_:1}),a(C,{cols:"12",md:"2"},{default:i(()=>[a(Y,{style:{"z-index":"1001"},onClick:e[3]||(e[3]=o=>d.value=!0)},{default:i(()=>[j("Add New")]),_:1})]),_:1})]),_:1})]),_:1}),a(H,{headers:k,items:p.value||[],"items-per-page":m.value,class:"text-no-wrap color-black table-padding","onUpdate:itemsPerPage":e[5]||(e[5]=o=>m.value=o),page:n.value,"onUpdate:page":e[6]||(e[6]=o=>n.value=o),"items-length":v.value,"onUpdate:options":I},{"item.logo":i(({item:o})=>[a(J,{src:o.logo,width:"100",height:"100"},null,8,["src"])]),"item.actions":i(({item:o})=>[q("div",M,[a(g,{onClick:O=>b(o)},{default:i(()=>[a(x,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),a(g,{onClick:O=>D(o)},{default:i(()=>[a(x,{icon:"tabler-trash"})]),_:2},1032,["onClick"])])]),bottom:i(()=>[a(U,{page:n.value,"onUpdate:page":e[4]||(e[4]=o=>n.value=o),"items-per-page":m.value,"total-items":v.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items","items-per-page","page","items-length"])]),_:1},8,["loading"])],64)}}};export{je as default};