import{r as a,w as i,n as r,o as f,c as d,b as m,a3 as p,a4 as b,z as _}from"./main-kzKK1XE4.js";const k={key:0,class:"position-fixed",style:{"z-index":"9999","inset-block-start":"0","inset-inline":"0 0"}},I={__name:"AppLoadingIndicator",setup(V,{expose:c}){const s=a(20),e=a(10),l=a(!1),t=a(),o=a(!1);i([e,l],()=>{e.value>80&&l.value&&(e.value=82),n()});function n(){clearInterval(t.value),t.value=setInterval(()=>{e.value+=Math.random()*10+5,s.value+=Math.random()*10+6},800)}return c({fallbackHandle:()=>{o.value=!0,e.value=10,l.value=!0,n()},resolveHandle:()=>{l.value=!1,e.value=100,setTimeout(()=>{clearInterval(t.value),e.value=0,s.value=20,o.value=!1},300)}}),(x,u)=>r(o)?(f(),d("div",k,[m(b,{modelValue:r(e),"onUpdate:modelValue":u[0]||(u[0]=v=>p(e)?e.value=v:null),"buffer-value":r(s),color:"primary",height:"2","bg-color":"background"},null,8,["modelValue","buffer-value"])])):_("",!0)}};export{I as _};
