import{_ as c}from"./AppTextarea-hexXRf6S.js";import{r as n,o as f,f as _,e as o,b as e,v as m,a8 as V,a9 as k}from"./main-C3zi_SKQ.js";import{c as b}from"./commonFunction-DaV-cpx8.js";import{i as s}from"./index-DPjvp4eR.js";import{b as v,V as h}from"./VCard-CiUXVH6b.js";import{V as g}from"./VForm-BglYL0G4.js";import{V as w,a as r}from"./VRow-s-aEvbE2.js";import{V as x}from"./VCardText-haI9Z-IX.js";import"./VInput-DkaOtTDM.js";import"./index-DPXcXuYg.js";import"./index-C8YGC3Io.js";import"./forwardRefs-D3j0TLhE.js";import"./VAvatar-DNScsPhF.js";import"./VImg-CXAH5jII.js";/* empty css              */const q={__name:"index",setup(T){const a=n({yesterday_tasks:"",today_plans:"",blockers:""}),i=n(!1),p=b(),y=async()=>{try{if(!a.value.yesterday_tasks.trim()){s.error("Please fill in what you did yesterday",{position:"top-right",theme:"colored"});return}if(!a.value.today_plans.trim()){s.error("Please fill in what you plan to do today",{position:"top-right",theme:"colored"});return}if(!a.value.blockers.trim()){s.error("Please fill in any blockages",{position:"top-right",theme:"colored"});return}i.value=!0,await p.addDailyTask(a.value),s.success("Daily task has been added successfully",{position:"top-right",theme:"colored"}),a.value={yesterday_tasks:"",today_plans:"",blockers:""}}catch(u){console.error("Failed to submit task:",u)}finally{i.value=!1}};return(u,t)=>{const d=c;return f(),_(h,null,{default:o(()=>[e(v,{class:"text-h5 pa-4"},{default:o(()=>[m(" Submit Your Daily Task ")]),_:1}),e(x,null,{default:o(()=>[e(g,{onSubmit:V(y,["prevent"])},{default:o(()=>[e(w,null,{default:o(()=>[e(r,{cols:"12"},{default:o(()=>[e(d,{modelValue:a.value.yesterday_tasks,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value.yesterday_tasks=l),label:"What did you do yesterday?",rows:"3"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[e(d,{modelValue:a.value.today_plans,"onUpdate:modelValue":t[1]||(t[1]=l=>a.value.today_plans=l),label:"What do you plan to do today?",rows:"3"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:o(()=>[e(d,{modelValue:a.value.blockers,"onUpdate:modelValue":t[2]||(t[2]=l=>a.value.blockers=l),label:"Any Blockages?",rows:"2"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",class:"d-flex justify-end"},{default:o(()=>[e(k,{type:"submit",color:"primary",loading:i.value},{default:o(()=>[m(" Submit Task ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{q as default};
