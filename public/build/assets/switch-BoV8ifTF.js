import{V as d}from"./VSwitch-Dy2Ux-Nz.js";import{r as m,o as h,c as v,b as t,n as a,a3 as p,f as b,e as r,v as i,ae as O,d as c,x as L,F as f,i as y}from"./main-CXM0LxHb.js";import{_ as $}from"./AppCardCode-B1xnAh3M.js";import{V as D,a as S}from"./VRow-CND1I_io.js";import"./index-BSKBOqU5.js";import"./VInput-_BxR2brP.js";import"./form-DELZCvUP.js";import"./index-BcdH6rOd.js";import"./VSelectionControl-btzaMaO9.js";import"./vue3-perfect-scrollbar.esm-BEDhIki4.js";import"./VCard-5vWXzH2z.js";import"./VAvatar-DsVtc_uV.js";import"./VImg-B2wtasj7.js";import"./VCardText-D4oyAar5.js";import"./VDivider-CFY18CC_.js";/* empty css              */const U={class:"demo-space-x"},C={__name:"DemoSwitchStates",setup(w){const e=m("on"),o=m("on"),n=m(!0);return(l,s)=>(h(),v("div",U,[t(d,{modelValue:a(e),"onUpdate:modelValue":s[0]||(s[0]=u=>p(e)?e.value=u:null),value:"on",label:"On"},null,8,["modelValue"]),t(d,{label:"Off"}),t(d,{modelValue:a(o),"onUpdate:modelValue":s[1]||(s[1]=u=>p(o)?o.value=u:null),value:"on",disabled:"",label:"On disabled"},null,8,["modelValue"]),t(d,{disabled:"",label:"Off disabled"}),t(d,{modelValue:a(n),"onUpdate:modelValue":s[2]||(s[2]=u=>p(n)?n.value=u:null),loading:"warning",label:`${a(n)?"On":"Off"} loading`},null,8,["modelValue","label"])]))}},T={class:"demo-space-x"},J={__name:"DemoSwitchTrueAndFalseValue",setup(w){const e=m(1),o=m("Show");return(n,l)=>(h(),v("div",T,[t(d,{modelValue:a(e),"onUpdate:modelValue":l[0]||(l[0]=s=>p(e)?e.value=s:null),label:a(e).toString(),"true-value":1,"false-value":0},null,8,["modelValue","label"]),t(d,{modelValue:a(o),"onUpdate:modelValue":l[1]||(l[1]=s=>p(o)?o.value=s:null),label:a(o).toString(),"true-value":"Show","false-value":"Hide"},null,8,["modelValue","label"])]))}},A={__name:"DemoSwitchLabelSlot",setup(w){const e=m(!1);return(o,n)=>(h(),b(d,{modelValue:a(e),"onUpdate:modelValue":n[0]||(n[0]=l=>p(e)?e.value=l:null)},{label:r(()=>[i(" Turn on the progress: "),t(O,{indeterminate:a(e),class:"ms-2"},null,8,["indeterminate"])]),_:1},8,["modelValue"]))}},F={class:"demo-space-x"},M={class:"mt-2 mb-0"},I={__name:"DemoSwitchModelAsArray",setup(w){const e=m(["John"]);return(o,n)=>(h(),v(f,null,[c("div",F,[t(d,{modelValue:a(e),"onUpdate:modelValue":n[0]||(n[0]=l=>p(e)?e.value=l:null),label:"John",value:"John"},null,8,["modelValue"]),t(d,{modelValue:a(e),"onUpdate:modelValue":n[1]||(n[1]=l=>p(e)?e.value=l:null),label:"Jacob",value:"Jacob"},null,8,["modelValue"])]),c("p",M,L(a(e)),1)],64))}},P={class:"demo-space-x"},j={__name:"DemoSwitchColors",setup(w){const e=m(["Primary","Secondary","Success","Info","Warning","Error"]),o=m(["Primary","Secondary","Success","Info","Warning","Error"]);return(n,l)=>(h(),v("div",P,[(h(!0),v(f,null,y(a(o),s=>(h(),b(d,{key:s,modelValue:a(e),"onUpdate:modelValue":l[0]||(l[0]=u=>p(e)?e.value=u:null),label:s,value:s,color:s.toLowerCase()},null,8,["modelValue","label","value","color"]))),128))]))}},z={class:"demo-space-x"},B={__name:"DemoSwitchInset",setup(w){const e=m(!0),o=m(!1);return(n,l)=>(h(),v("div",z,[t(d,{modelValue:a(e),"onUpdate:modelValue":l[0]||(l[0]=s=>p(e)?e.value=s:null),label:`Switch 1: ${a(e).toString()}`},null,8,["modelValue","label"]),t(d,{modelValue:a(o),"onUpdate:modelValue":l[1]||(l[1]=s=>p(o)?o.value=s:null),label:`Switch 2: ${a(o).toString()}`},null,8,["modelValue","label"])]))}},E={class:"demo-space-x"},k={__name:"DemoSwitchBasic",setup(w){const e=m(!0),o=m(!1),n=l=>{const s=l.toString();return s.charAt(0).toUpperCase()+s.slice(1)};return(l,s)=>(h(),v("div",E,[t(d,{modelValue:a(e),"onUpdate:modelValue":s[0]||(s[0]=u=>p(e)?e.value=u:null),label:n(a(e))},null,8,["modelValue","label"]),t(d,{modelValue:a(o),"onUpdate:modelValue":s[1]||(s[1]=u=>p(o)?o.value=u:null),label:n(a(o))},null,8,["modelValue","label"])]))}},W={ts:`<script lang="ts" setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`,js:`<script setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`},H={ts:`<script lang="ts" setup>
const selectedSwitch = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const switches = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`,js:`<script setup>
const selectedSwitch = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const switches = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`},N={ts:`<script lang="ts" setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`},R={ts:`<script lang="ts" setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`,js:`<script setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`},q={ts:`<script lang="ts" setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`,js:`<script setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`},G={ts:`<script setup lang="ts">
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      :label="\`\${switchOnLoading ? 'On' : 'Off'} loading\`"
    />
  </div>
</template>
`,js:`<script setup>
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      :label="\`\${switchOnLoading ? 'On' : 'Off'} loading\`"
    />
  </div>
</template>
`},K={ts:`<script lang="ts" setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`,js:`<script setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`},Q=c("p",null,[i("A "),c("code",null,"v-switch"),i(" in its simplest form provides a toggle between 2 values.")],-1),X=c("p",null,[i("To change the default "),c("code",null,"inset"),i(" switch, simply modify the inset prop to a "),c("code",null,"false"),i(" value.")],-1),Y=c("p",null,[i("Switches can be colored by using any of the builtin colors and contextual names using the "),c("code",null,"color"),i(" prop.")],-1),Z=c("p",null,[i("Multiple "),c("code",null,"v-switch"),i("'s can share the same "),c("code",null,"v-model"),i(" by using an array.")],-1),ee=c("p",null,[i("Switch labels can be defined in "),c("code",null,"label"),i(" slot - that will allow to use HTML content.")],-1),te=c("p",null,[i(" Use "),c("code",null,"false-value"),i(" and "),c("code",null,"true-value"),i(" prop to sets value for truthy and falsy state ")],-1),le=c("p",null,[c("code",null,"v-switch"),i(" can have different states such as "),c("code",null,"default"),i(", "),c("code",null,"disabled"),i(", and "),c("code",null,"loading"),i(".")],-1),fe={__name:"switch",setup(w){return(e,o)=>{const n=k,l=$,s=B,u=j,_=I,g=A,V=J,x=C;return h(),b(D,null,{default:r(()=>[t(S,{cols:"12",md:"6"},{default:r(()=>[t(l,{title:"Basic",code:W},{default:r(()=>[Q,t(n)]),_:1},8,["code"])]),_:1}),t(S,{cols:"12",md:"6"},{default:r(()=>[t(l,{title:"Inset",code:N},{default:r(()=>[X,t(s)]),_:1},8,["code"])]),_:1}),t(S,{cols:"12",md:"6"},{default:r(()=>[t(l,{title:"Colors",code:H},{default:r(()=>[Y,t(u)]),_:1},8,["code"])]),_:1}),t(S,{cols:"12",md:"6"},{default:r(()=>[t(l,{title:"Model as array",code:q},{default:r(()=>[Z,t(_)]),_:1},8,["code"])]),_:1}),t(S,{cols:"12",md:"6"},{default:r(()=>[t(l,{title:"Label slot",code:R},{default:r(()=>[ee,t(g)]),_:1},8,["code"])]),_:1}),t(S,{cols:"12",md:"6"},{default:r(()=>[t(l,{title:"True and False Value",code:K},{default:r(()=>[te,t(V)]),_:1},8,["code"])]),_:1}),t(S,{cols:"12",md:"6"},{default:r(()=>[t(l,{title:"States",code:G},{default:r(()=>[le,t(x)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{fe as default};
