import{V as C}from"./VSlideGroupItem-CFEhoH6m.js";import{r as w,a5 as v,bU as x,o as t,f as l,e as d,c as n,F as b,i as q,d as o,y as h,n as i,h as N,a1 as u,x as c,z as f,J as B,b as k,a3 as E}from"./main-DHHr-wHG.js";import{V as _}from"./VAvatar-DXwB4bJ3.js";import{V as $}from"./VSlideGroup-HIFuKKVb.js";const j=["onClick"],D={key:0,class:"stepper-icon-step text-high-emphasis d-flex align-center"},F={class:"stepper-icon"},G={class:"stepper-title font-weight-medium mb-0"},I={key:0,class:"stepper-subtitle mb-0"},L={key:1,class:"d-flex align-center gap-x-3"},U={class:"text-h5",style:{color:"rgb(var(--v-theme-primary))"}},H={class:"d-flex flex-column justify-center"},J={class:"stepper-title font-weight-medium"},O={key:0,class:"stepper-subtitle text-sm text-disabled"},R={key:0,class:"stepper-step-line stepper-chevron-indicator mx-6"},W={__name:"AppStepper",props:{items:{type:Array,required:!0},currentStep:{type:Number,required:!1,default:0},direction:{type:String,required:!1,default:"horizontal"},iconSize:{type:[String,Number],required:!1,default:60},isActiveStepValid:{type:Boolean,required:!1,default:void 0},align:{type:String,required:!1,default:"default"}},emits:["update:currentStep"],setup(z,{emit:V}){const e=z,y=V,r=w(e.currentStep||0),A=v(()=>p=>p<r.value?"stepper-steps-completed":p===r.value?"stepper-steps-active":""),S=v(()=>p=>e.direction==="horizontal"&&e.items.length-1!==p),m=v(()=>e.isActiveStepValid!==void 0);return x(()=>{e.currentStep!==void 0&&e.currentStep<e.items.length&&e.currentStep>=0&&(r.value=e.currentStep),y("update:currentStep",r.value)}),(p,g)=>(t(),l($,{modelValue:i(r),"onUpdate:modelValue":g[0]||(g[0]=s=>E(r)?r.value=s:null),class:h(["app-stepper",`app-stepper-${e.align} ${e.items[0].icon?"app-stepper-icons":""}`]),"show-arrows":"",direction:e.direction},{default:d(()=>[(t(!0),n(b,null,q(e.items,(s,a)=>(t(),l(C,{key:s.title,value:a},{default:d(()=>[o("div",{class:h(["cursor-pointer app-stepper-step pa-1",[!e.isActiveStepValid&&i(m)&&"stepper-steps-invalid",i(A)(a)]]),onClick:K=>!i(m)&&y("update:currentStep",a)},[s.icon?(t(),n("div",D,[o("div",{class:h(["d-flex align-center gap-x-3 step-wrapper",[e.direction==="horizontal"&&"flex-column"]])},[o("div",F,[typeof s.icon=="object"?(t(),l(N(s.icon),{key:0})):(t(),l(u,{key:1,icon:s.icon,size:s.size||e.iconSize},null,8,["icon","size"]))]),o("div",null,[o("p",G,c(s.title),1),s.subtitle?(t(),n("p",I,c(s.subtitle),1)):f("",!0)])],2),i(S)(a)?(t(),l(u,{key:0,class:"flip-in-rtl stepper-chevron-indicator mx-6",size:"20",icon:"tabler-chevron-right"})):f("",!0)])):(t(),n("div",L,[o("div",null,[a>=i(r)?(t(),n(b,{key:0},[!i(m)||e.isActiveStepValid||a!==i(r)?(t(),l(_,{key:0,size:"38",rounded:"",variant:a===i(r)?"elevated":"tonal",color:a===i(r)?"primary":"default"},{default:d(()=>[o("h5",{class:"text-h5",style:B(a===i(r)?{color:"#fff"}:"")},c(a+1),5)]),_:2},1032,["variant","color"])):(t(),l(_,{key:1,color:"error",size:"38",rounded:""},{default:d(()=>[k(u,{icon:"tabler-alert-circle",size:"22"})]),_:1}))],64)):(t(),l(_,{key:1,class:"stepper-icon",variant:"tonal",color:"primary",size:"38",rounded:""},{default:d(()=>[o("h5",U,c(a+1),1)]),_:2},1024))]),o("div",H,[o("div",J,c(s.title),1),s.subtitle?(t(),n("div",O,c(s.subtitle),1)):f("",!0)]),i(S)(a)?(t(),n("div",R,[k(u,{icon:"tabler-chevron-right",size:"20"})])):f("",!0)]))],10,j)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","direction","class"]))}};export{W as _};
