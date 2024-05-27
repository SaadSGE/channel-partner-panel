import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as u,c as g,b as e,a3 as t,r as f,m as v,a2 as h,e as a,d as r,v as L,f as y,G as B,ap as k,w as $,t as o}from"./main--Sxm5_s2.js";import{_ as M}from"./AppCardCode-pIfmYr3w.js";import{V as x,a as p}from"./VRow-iwFKqp57.js";import"./vue3-perfect-scrollbar.esm-BK9G7Rkn.js";import"./index-CGqMMtXP.js";import"./VCard-D_9YY7eU.js";import"./VAvatar-YOWsFQVe.js";import"./VImg-Za-rMnCD.js";import"./VCardText-B_32FgjQ.js";import"./VDivider-Cp-mvYZ4.js";/* empty css              */const I={},D={class:"demo-space-y"};function U(m,l){return u(),g("div",D,[e(t,{color:"rgb(var(--v-theme-primary))","model-value":"75",striped:""}),e(t,{color:"rgb(var(--v-theme-success))","model-value":"55",striped:""}),e(t,{color:"rgb(var(--v-theme-warning))","model-value":"35",striped:""})])}const T=_(I,[["render",U]]),j={class:"demo-space-y"},R={__name:"DemoProgressLinearSlots",setup(m){const l=f(20),d=f(33),c=f(78);return(n,i)=>(u(),g("div",j,[e(t,{modelValue:v(c),"onUpdate:modelValue":i[0]||(i[0]=s=>h(c)?c.value=s:null),color:"primary",height:"8"},null,8,["modelValue"]),e(t,{modelValue:v(l),"onUpdate:modelValue":i[1]||(i[1]=s=>h(l)?l.value=s:null),color:"primary",height:"20"},{default:a(({value:s})=>[r("span",null,L(Math.ceil(s))+"%",1)]),_:1},8,["modelValue"]),e(t,{modelValue:v(d),"onUpdate:modelValue":i[2]||(i[2]=s=>h(d)?d.value=s:null),height:"20",color:"primary"},{default:a(()=>[r("span",null,L(Math.ceil(v(d)))+"%",1)]),_:1},8,["modelValue"])]))}},C={},S={class:"demo-space-y"};function N(m,l){return u(),g("div",S,[e(t,{"model-value":"78",height:"8",color:"primary",rounded:!1}),e(t,{"model-value":"20",color:"primary",height:"20",rounded:!1}),e(t,{"model-value":"33",height:"20",color:"primary",rounded:!1})])}const Y=_(C,[["render",N]]),A={};function E(m,l){return u(),y(t,{color:"primary",indeterminate:"",reverse:""})}const G=_(A,[["render",E]]),q={};function z(m,l){return u(),y(t,{indeterminate:"",color:"primary"})}const F=_(q,[["render",z]]),H={class:"demo-space-y"},J={__name:"DemoProgressLinearBuffering",setup(m){const l=f(10),d=f(20),c=f(),n=()=>{clearInterval(c.value),c.value=setInterval(()=>{l.value+=Math.random()*10+5,d.value+=Math.random()*10+6},2e3)};return B(n),k(()=>{clearInterval(c.value)}),$(l,()=>{if(l.value<100)return!1;l.value=0,d.value=10,n()}),(i,s)=>(u(),g("div",H,[e(t,{modelValue:v(l),"onUpdate:modelValue":s[0]||(s[0]=V=>h(l)?l.value=V:null),color:"primary","buffer-value":v(d)},null,8,["modelValue","buffer-value"])]))}},K={},O={class:"demo-space-y"};function Q(m,l){return u(),g("div",O,[e(t,{"model-value":"15",color:"primary"}),e(t,{"model-value":"30",color:"secondary"}),e(t,{"model-value":"45",color:"success"})])}const W=_(K,[["render",Q]]),X={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`},Z={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      color="success"
    />
  </div>
</template>
`},ee={ts:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`,js:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`},re={ts:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`,js:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`},oe={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`},le={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`},ae={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`},te=r("p",null,[o("Use the props "),r("code",null,"color"),o(" and "),r("code",null,"background-color"),o(" to set colors.")],-1),se=r("p",null,[o("The primary value is controlled by "),r("code",null,"v-model"),o(", whereas the buffer is controlled by the "),r("code",null,"buffer-value"),o(" prop.")],-1),ne=r("p",null,[o("for continuously animating progress bar,use prop "),r("code",null,"indeterminate"),o(". This indicates continuous process. ")],-1),de=r("p",null,[o("Use prop "),r("code",null,"reverse"),o(" to animate continuously in reverse direction. The component also has RTL support.")],-1),ce=r("p",null,[o(" The "),r("code",null," rounded "),o("prop is used to apply a border radius to the v-progress-linear component. By default we have set "),r("code",null,"rounded"),o(" prop true. You can disable it by using "),r("code",null,":rounded='false'"),o(". ")],-1),ie=r("p",null,[o("The v-progress-linear component will be responsive to user input when using "),r("code",null,"v-model"),o(". You can use the default slot or bind a local model to display inside of the progress.")],-1),ue=r("p",null,[o(" The "),r("code",null,"striped"),o(" prop is used to apply striped background.")],-1),we={__name:"progress-linear",setup(m){return(l,d)=>{const c=W,n=M,i=J,s=F,V=G,P=Y,b=R,w=T;return u(),y(x,{class:"match-height"},{default:a(()=>[e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Color",code:Z},{default:a(()=>[te,e(c)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Buffering",code:X},{default:a(()=>[se,e(i)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Indeterminate",code:ee},{default:a(()=>[ne,e(s)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Reversed",code:re},{default:a(()=>[de,e(V)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Rounded",code:oe},{default:a(()=>[ce,e(P)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Slots",code:le},{default:a(()=>[ie,e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(n,{title:"Striped",code:ae},{default:a(()=>[ue,e(w)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{we as default};
