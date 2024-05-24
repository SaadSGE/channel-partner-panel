import{m as J,u as Z,a as ee,V as le,b as W,g as Y}from"./VSliderTrack-BlhbrV_i.js";import{m as ae,V as q}from"./VInput-CRIVOGRT.js";import{m as te,u as se,V as oe}from"./form-ry3fQnmM.js";import{aH as ue,aK as ne,r as _,bX as re,aL as ie,a4 as E,aQ as de,b as a,F as ce,q as me,o as g,f as S,m as k,a2 as $,e as d,a0 as pe,d as c,t as v}from"./main-Y3Sh28Aw.js";import{_ as ve}from"./AppCardCode-DKygLz7G.js";import{V as fe,a as R}from"./VRow-D4dRKvWi.js";import"./index-CAooBzsD.js";import"./VImg-Dw89oJcw.js";import"./vue3-perfect-scrollbar.esm-Bwp3-Gs6.js";import"./VCard-CqSY8o9d.js";import"./VAvatar-D523BiRc.js";import"./VCardText-D3eZT6Q7.js";import"./VDivider-sjzvBSmX.js";/* empty css              */const be=ue({...te(),...ae(),...J(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),x=ne()({name:"VRangeSlider",props:be(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,s){let{slots:u,emit:o}=s;const l=_(),i=_(),h=_(),{rtlClasses:B}=re();function M(m){if(!l.value||!i.value)return;const p=Y(m,l.value.$el,e.direction),r=Y(m,i.value.$el,e.direction),n=Math.abs(p),f=Math.abs(r);return n<f||n===f&&p<0?l.value.$el:i.value.$el}const P=Z(e),t=ie(e,"modelValue",void 0,m=>m!=null&&m.length?m.map(p=>P.roundValue(p)):[0,0]),{activeThumbRef:b,hasLabels:H,max:I,min:j,mousePressed:K,onSliderMousedown:Q,onSliderTouchstart:X,position:L,trackContainerRef:G}=ee({props:e,steps:P,onSliderStart:()=>{o("start",t.value)},onSliderEnd:m=>{var n;let{value:p}=m;const r=b.value===((n=l.value)==null?void 0:n.$el)?[p,t.value[1]]:[t.value[0],p];!e.strict&&r[0]<r[1]&&(t.value=r),o("end",t.value)},onSliderMove:m=>{var f,w,y,V;let{value:p}=m;const[r,n]=t.value;!e.strict&&r===n&&r!==j.value&&(b.value=p>r?(f=i.value)==null?void 0:f.$el:(w=l.value)==null?void 0:w.$el,(y=b.value)==null||y.focus()),b.value===((V=l.value)==null?void 0:V.$el)?t.value=[Math.min(p,n),n]:t.value=[r,Math.max(r,p)]},getActiveThumb:M}),{isFocused:U,focus:z,blur:A}=se(e),N=E(()=>L(t.value[0])),O=E(()=>L(t.value[1]));return de(()=>{const m=q.filterProps(e),p=!!(e.label||u.label||u.prepend);return a(q,me({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!u["tick-label"]||H.value,"v-slider--focused":U.value,"v-slider--pressed":K.value,"v-slider--disabled":e.disabled},B.value,e.class],style:e.style,ref:h},m,{focused:U.value}),{...u,prepend:p?r=>{var n,f;return a(ce,null,[((n=u.label)==null?void 0:n.call(u,r))??(e.label?a(oe,{class:"v-slider__label",text:e.label},null):void 0),(f=u.prepend)==null?void 0:f.call(u,r)])}:void 0,default:r=>{var w,y;let{id:n,messagesId:f}=r;return a("div",{class:"v-slider__container",onMousedown:Q,onTouchstartPassive:X},[a("input",{id:`${n.value}_start`,name:e.name||n.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[0]},null),a("input",{id:`${n.value}_stop`,name:e.name||n.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[1]},null),a(le,{ref:G,start:N.value,stop:O.value},{"tick-label":u["tick-label"]}),a(W,{ref:l,"aria-describedby":f.value,focused:U&&b.value===((w=l.value)==null?void 0:w.$el),modelValue:t.value[0],"onUpdate:modelValue":V=>t.value=[V,t.value[1]],onFocus:V=>{var D,T,F,C;z(),b.value=(D=l.value)==null?void 0:D.$el,t.value[0]===t.value[1]&&t.value[1]===j.value&&V.relatedTarget!==((T=i.value)==null?void 0:T.$el)&&((F=l.value)==null||F.$el.blur(),(C=i.value)==null||C.$el.focus())},onBlur:()=>{A(),b.value=void 0},min:j.value,max:t.value[1],position:N.value,ripple:e.ripple},{"thumb-label":u["thumb-label"]}),a(W,{ref:i,"aria-describedby":f.value,focused:U&&b.value===((y=i.value)==null?void 0:y.$el),modelValue:t.value[1],"onUpdate:modelValue":V=>t.value=[t.value[0],V],onFocus:V=>{var D,T,F,C;z(),b.value=(D=i.value)==null?void 0:D.$el,t.value[0]===t.value[1]&&t.value[0]===I.value&&V.relatedTarget!==((T=l.value)==null?void 0:T.$el)&&((F=i.value)==null||F.$el.blur(),(C=l.value)==null||C.$el.focus())},onBlur:()=>{A(),b.value=void 0},min:t.value[0],max:I.value,position:O.value,ripple:e.ripple},{"thumb-label":u["thumb-label"]})])}})}),{}}}),Ve={__name:"DemoRangeSliderVertical",setup(e){const s=_([20,40]);return(u,o)=>(g(),S(x,{modelValue:k(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}},_e={__name:"DemoRangeSliderThumbLabel",setup(e){const s=["Winter","Spring","Summer","Fall"],u=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],o=_([1,2]);return(l,i)=>(g(),S(x,{modelValue:k(o),"onUpdate:modelValue":i[0]||(i[0]=h=>$(o)?o.value=h:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":d(({modelValue:h})=>[a(pe,{icon:u[h]},null,8,["icon"])]),_:1},8,["modelValue"]))}},he={__name:"DemoRangeSliderStep",setup(e){const s=_([20,40]);return(u,o)=>(g(),S(x,{modelValue:k(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}},ge={__name:"DemoRangeSliderColor",setup(e){const s=_([10,60]);return(u,o)=>(g(),S(x,{modelValue:k(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),color:"success"},null,8,["modelValue"]))}},Se={__name:"DemoRangeSliderDisabled",setup(e){const s=_([30,60]);return(u,o)=>(g(),S(x,{modelValue:k(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},Re={__name:"DemoRangeSliderBasic",setup(e){const s=_([10,60]);return(u,o)=>(g(),S(x,{modelValue:k(s),"onUpdate:modelValue":o[0]||(o[0]=l=>$(s)?s.value=l:null)},null,8,["modelValue"]))}},ke={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},$e={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`},xe={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},we={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},ye={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},De={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Te=c("p",null,[v("The "),c("code",null,"v-slider"),v(" component is a better visualization of the number input.")],-1),Fe=c("p",null,[v("You cannot interact with "),c("code",null,"disabled"),v(" sliders.")],-1),Ce=c("p",null,[v("Use "),c("code",null,"color"),v(" prop to the sets the slider color. "),c("code",null,"track-color"),v(" prop to sets the color of slider's unfilled track.")],-1),Pe=c("p",null,[c("code",null,"v-range-slider"),v(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Ue=c("p",null,[v(" Using the "),c("code",null,"tick-labels"),v(" prop along with the "),c("code",null,"thumb-label"),v(" slot, you can create a very customized solution. ")],-1),Be=c("p",null,[v("You can use the "),c("code",null,"vertical"),v(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),Qe={__name:"range-slider",setup(e){return(s,u)=>{const o=Re,l=ve,i=Se,h=ge,B=he,M=_e,P=Ve;return g(),S(fe,null,{default:d(()=>[a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Basic",code:ke},{default:d(()=>[Te,a(o)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Disabled",code:xe},{default:d(()=>[Fe,a(i)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Color",code:$e},{default:d(()=>[Ce,a(h)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Step",code:we},{default:d(()=>[Pe,a(B)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Thumb label",code:ye},{default:d(()=>[Ue,a(M)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Vertical",code:De},{default:d(()=>[Be,a(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Qe as default};
