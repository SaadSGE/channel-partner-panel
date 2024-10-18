import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as p,b as r,ae as e,r as v,H as f,aA as h,e as s,v as o,x as d,n as t,f as y,d as a}from"./main-DliaIfAl.js";import{_ as z}from"./AppCardCode-Dss8uYt8.js";import{V as w,a as m}from"./VRow-BvCtndEa.js";import"./vue3-perfect-scrollbar.esm-BJVFfAwt.js";import"./index-B6_MyPcT.js";import"./VCard-BsMAJOJE.js";import"./VAvatar-DjbtaCRp.js";import"./VImg-MIti5M4t.js";import"./index-B2kEqdsA.js";import"./VCardText-COmIcOQw.js";import"./VDivider-CTbIO-l-.js";/* empty css              */const x={},$={class:"demo-space-x"};function I(u,i){return n(),p("div",$,[r(e,{size:30,width:"3",color:"primary",indeterminate:""}),r(e,{size:40,color:"primary",indeterminate:""}),r(e,{size:50,color:"primary",indeterminate:""}),r(e,{size:60,color:"primary",indeterminate:""})])}const B=g(x,[["render",I]]),D={class:"demo-space-x"},j={__name:"DemoProgressCircularRotate",setup(u){const i=v(),l=v(0);return f(()=>{i.value=setInterval(()=>{if(l.value===100)return l.value=0;l.value+=10},1e3)}),h(()=>{clearInterval(i.value)}),(_,c)=>(n(),p("div",D,[r(e,{rotate:360,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"]),r(e,{rotate:90,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"]),r(e,{rotate:170,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"]),r(e,{rotate:-90,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"])]))}},R={},U={class:"demo-space-x"};function b(u,i){return n(),p("div",U,[r(e,{indeterminate:"",color:"primary"}),r(e,{indeterminate:"",color:"secondary"}),r(e,{indeterminate:"",color:"success"}),r(e,{indeterminate:"",color:"info"}),r(e,{indeterminate:"",color:"warning"}),r(e,{indeterminate:"",color:"error"})])}const k=g(R,[["render",b]]),A={},M={class:"demo-space-x"};function N(u,i){return n(),p("div",M,[r(e,{"model-value":"50",color:"primary"}),r(e,{"model-value":"50",color:"secondary"}),r(e,{"model-value":"50",color:"success"}),r(e,{"model-value":"50",color:"info"}),r(e,{"model-value":"50",color:"warning"}),r(e,{"model-value":"50",color:"error"})])}const S=g(A,[["render",N]]),T={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
`},E={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`},H={ts:`<script setup lang="ts">
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`,js:`<script setup>
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`},q={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
`},F=a("p",null,[o("Alternate colors can be applied to "),a("code",null,"v-progress-circular"),o(" using the "),a("code",null,"color"),o(" prop.")],-1),G=a("p",null,[o("Using the "),a("code",null,"indeterminate"),o(" prop, a "),a("code",null,"v-progress-circular"),o(" continues to animate indefinitely.")],-1),J=a("p",null,[o("The "),a("code",null,"rotate"),o(" prop gives you the ability to customize the "),a("code",null,"v-progress-circular"),o("'s origin.")],-1),K=a("p",null,[o("The "),a("code",null,"size"),o(" and "),a("code",null,"width"),o(" props allow you to easily alter the size and width of the "),a("code",null,"v-progress-circular"),o(" component.")],-1),tr={__name:"progress-circular",setup(u){return(i,l)=>{const _=S,c=z,V=k,C=j,P=B;return n(),y(w,{class:"match-height"},{default:s(()=>[r(m,{cols:"12",md:"6"},{default:s(()=>[r(c,{title:"color",code:T},{default:s(()=>[F,r(_)]),_:1},8,["code"])]),_:1}),r(m,{cols:"12",md:"6"},{default:s(()=>[r(c,{title:"Indeterminate",code:E},{default:s(()=>[G,r(V)]),_:1},8,["code"])]),_:1}),r(m,{cols:"12",md:"6"},{default:s(()=>[r(c,{title:"Rotate",code:H},{default:s(()=>[J,r(C)]),_:1},8,["code"])]),_:1}),r(m,{cols:"12",md:"6"},{default:s(()=>[r(c,{title:"Size",code:q},{default:s(()=>[K,r(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{tr as default};