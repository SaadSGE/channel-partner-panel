import{m as K,b as Q,a as X}from"./form-_YereJuA.js";import{c as Y}from"./index-Ct-Eh3yE.js";import{aK as D,aL as N,aN as F,a5 as s,cf as C,be as j,aT as H,b as o,cg as G,aQ as L,aO as J,r as W,as as R,n as Z,bq as ee,at as ae,H as te,bL as T,w as B,aB as ne,aS as E,aV as O,aX as se,b7 as le,b_ as ie}from"./main-cAWQX6jp.js";import{m as ue,M as re}from"./index-Hi4wUk4K.js";const oe=D({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...N(),...ue({transition:{component:Y,leaveAbsolute:!0,group:!0}})},"VMessages"),de=F()({name:"VMessages",props:oe(),setup(e,c){let{slots:b}=c;const a=s(()=>C(e.messages)),{textColorClasses:v,textColorStyles:t}=j(s(()=>e.color));return H(()=>o(re,{transition:e.transition,tag:"div",class:["v-messages",v.value,e.class],style:[t.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&a.value.map((i,d)=>o("div",{class:"v-messages__message",key:`${d}-${a.value}`},[b.message?b.message({message:i}):i]))]})),{}}}),ce=D({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...K()},"validation");function ve(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G(),b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:L();const a=J(e,"modelValue"),v=s(()=>e.validationValue===void 0?a.value:e.validationValue),t=Q(),i=W([]),d=R(!0),I=s(()=>!!(C(a.value===""?null:a.value).length||C(v.value===""?null:v.value).length)),p=s(()=>!!(e.disabled??(t==null?void 0:t.isDisabled.value))),M=s(()=>!!(e.readonly??(t==null?void 0:t.isReadonly.value))),g=s(()=>{var n;return(n=e.errorMessages)!=null&&n.length?C(e.errorMessages).concat(i.value).slice(0,Math.max(0,+e.maxErrors)):i.value}),f=s(()=>{let n=(e.validateOn??(t==null?void 0:t.validateOn.value))||"input";n==="lazy"&&(n="input lazy");const l=new Set((n==null?void 0:n.split(" "))??[]);return{blur:l.has("blur")||l.has("input"),input:l.has("input"),submit:l.has("submit"),lazy:l.has("lazy")}}),y=s(()=>{var n;return e.error||(n=e.errorMessages)!=null&&n.length?!1:e.rules.length?d.value?i.value.length||f.value.lazy?null:!0:!i.value.length:!0}),S=R(!1),k=s(()=>({[`${c}--error`]:y.value===!1,[`${c}--dirty`]:I.value,[`${c}--disabled`]:p.value,[`${c}--readonly`]:M.value})),h=s(()=>e.name??Z(b));ee(()=>{t==null||t.register({id:h.value,validate:u,reset:x,resetValidation:V})}),ae(()=>{t==null||t.unregister(h.value)}),te(async()=>{f.value.lazy||await u(!0),t==null||t.update(h.value,y.value,g.value)}),T(()=>f.value.input,()=>{B(v,()=>{if(v.value!=null)u();else if(e.focused){const n=B(()=>e.focused,l=>{l||u(),n()})}})}),T(()=>f.value.blur,()=>{B(()=>e.focused,n=>{n||u()})}),B([y,g],()=>{t==null||t.update(h.value,y.value,g.value)});function x(){a.value=null,ne(V)}function V(){d.value=!0,f.value.lazy?i.value=[]:u(!0)}async function u(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const l=[];S.value=!0;for(const m of e.rules){if(l.length>=+(e.maxErrors??1))break;const r=await(typeof m=="function"?m:()=>m)(v.value);if(r!==!0){if(r!==!1&&typeof r!="string"){console.warn(`${r} is not a valid value. Rule functions must return boolean true or a string.`);continue}l.push(r||"")}}return i.value=l,S.value=!1,d.value=n,i.value}return{errorMessages:g,isDirty:I,isDisabled:p,isReadonly:M,isPristine:d,isValid:y,isValidating:S,reset:x,resetValidation:V,validate:u,validationClasses:k}}const ge=D({id:String,appendIcon:E,centerAffix:{type:Boolean,default:!0},prependIcon:E,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":O(),"onClick:append":O(),...N(),...se(),...ce()},"VInput"),pe=F()({name:"VInput",props:{...ge()},emits:{"update:modelValue":e=>!0},setup(e,c){let{attrs:b,slots:a,emit:v}=c;const{densityClasses:t}=le(e),{rtlClasses:i}=ie(),{InputIcon:d}=X(e),I=L(),p=s(()=>e.id||`input-${I}`),M=s(()=>`${p.value}-messages`),{errorMessages:g,isDirty:f,isDisabled:y,isReadonly:S,isPristine:k,isValid:h,isValidating:x,reset:V,resetValidation:u,validate:n,validationClasses:l}=ve(e,"v-input",p),m=s(()=>({id:p,messagesId:M,isDirty:f,isDisabled:y,isReadonly:S,isPristine:k,isValid:h,isValidating:x,reset:V,resetValidation:u,validate:n})),P=s(()=>{var r;return(r=e.errorMessages)!=null&&r.length||!k.value&&g.value.length?g.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return H(()=>{var $,w,z,A;const r=!!(a.prepend||e.prependIcon),U=!!(a.append||e.appendIcon),_=P.value.length>0,q=!e.hideDetails||e.hideDetails==="auto"&&(_||!!a.details);return o("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},t.value,i.value,l.value,e.class],style:e.style},[r&&o("div",{key:"prepend",class:"v-input__prepend"},[($=a.prepend)==null?void 0:$.call(a,m.value),e.prependIcon&&o(d,{key:"prepend-icon",name:"prepend"},null)]),a.default&&o("div",{class:"v-input__control"},[(w=a.default)==null?void 0:w.call(a,m.value)]),U&&o("div",{key:"append",class:"v-input__append"},[e.appendIcon&&o(d,{key:"append-icon",name:"append"},null),(z=a.append)==null?void 0:z.call(a,m.value)]),q&&o("div",{class:"v-input__details"},[o(de,{id:M.value,active:_,messages:P.value},{message:a.message}),(A=a.details)==null?void 0:A.call(a,m.value)])])}),{reset:V,resetValidation:u,validate:n,isValid:h,errorMessages:g}}});export{pe as V,ge as m};