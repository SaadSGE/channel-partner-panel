import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as I}from"./index-dXcoFe5c.js";import{V as L}from"./VAvatar-BaU-tpmv.js";import{r as V,a5 as g,o as b,c as k,d as s,x as R,n,b as e,e as t,f,J as T,z as O,a1 as E,a7 as w,a3 as m,F as D,R as Y,U as N,v as c}from"./main-DEXLFq5-.js";import{V as p}from"./VSlider-DLl5cGB2.js";import{a as G}from"./VImg-BwxQFvJc.js";import{a as u,V as _}from"./VRow-DKkqacc7.js";import{V as y}from"./VTextField-YMVwCEg-.js";import{_ as J}from"./AppTextField-DqkBLktw.js";import{_ as q}from"./AppCardCode-a0r-5NbS.js";import"./VSliderTrack-DdtEdBnm.js";import"./VInput-GP-yT9Tv.js";import"./form-B1xJlf5M.js";import"./index-UZWnqimo.js";/* empty css              *//* empty css                   */import"./VCounter-DAizO-YE.js";import"./VField-tGKhD_Vg.js";import"./easing-CjukEv2V.js";import"./forwardRefs-C-GTDzx5.js";import"./vue3-perfect-scrollbar.esm-CSeKWONk.js";import"./VCard-BQ9pbwZy.js";import"./VCardText-CEHG5Us3.js";import"./VDivider-BGznFT5b.js";const H=v=>(Y("data-v-8c67e2ac"),v=v(),N(),v),K={class:"d-flex justify-space-between ma-4"},Q=["textContent"],W=H(()=>s("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),z=40,$=218,X={__name:"DemoSliderAppendAndPrepend",setup(v){const l=V(40),a=V(!1),i=g(()=>l.value<100?"primary":l.value<125?"success":l.value<140?"info":l.value<175?"warning":"error"),r=g(()=>`${60/l.value}s`),o=()=>{l.value>z&&(l.value-=1)},d=()=>{l.value<$&&(l.value+=1)};return(x,h)=>(b(),k(D,null,[s("div",K,[s("div",null,[s("span",{class:"text-6xl font-weight-light",textContent:R(n(l))},null,8,Q),W,e(I,null,{default:t(()=>[n(a)?(b(),f(L,{key:0,color:n(i),style:T({animationDuration:n(r)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):O("",!0)]),_:1})]),s("div",null,[e(w,{color:n(i),icon:"",elevation:"0",onClick:h[0]||(h[0]=C=>a.value=!n(a))},{default:t(()=>[e(E,{size:"large",icon:n(a)?"tabler-pause":"tabler-play"},null,8,["icon"])]),_:1},8,["color"])])]),e(p,{modelValue:n(l),"onUpdate:modelValue":h[1]||(h[1]=C=>m(l)?l.value=C:null),color:n(i),step:1,min:z,max:$,"track-color":"secondary"},{prepend:t(()=>[e(w,{size:"small",variant:"text",icon:"tabler-minus",color:n(i),onClick:o},null,8,["color"])]),append:t(()=>[e(w,{size:"small",variant:"text",icon:"tabler-plus",color:n(i),onClick:d},null,8,["color"])]),_:1},8,["modelValue","color"])],64))}},Z=S(X,[["__scopeId","data-v-8c67e2ac"]]),ee={class:"d-flex justify-space-between"},le={class:"d-flex justify-space-between"},te={class:"d-flex justify-space-between"},oe={__name:"DemoSliderAppendTextField",setup(v){const l=V(161),a=V(105),i=V(225);return(r,o)=>(b(),k(D,null,[e(G,{style:T({background:`rgb(${n(l)}, ${n(a)}, ${n(i)})`}),height:"150px"},null,8,["style"]),e(_,{class:"mt-5"},{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[s("div",ee,[e(p,{modelValue:n(l),"onUpdate:modelValue":o[0]||(o[0]=d=>m(l)?l.value=d:null),max:255,step:1,"prepend-icon":"tabler-letter-r"},null,8,["modelValue"]),e(y,{modelValue:n(l),"onUpdate:modelValue":o[1]||(o[1]=d=>m(l)?l.value=d:null),type:"number",placeholder:"10",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),e(u,{cols:"12"},{default:t(()=>[s("div",le,[e(p,{modelValue:n(a),"onUpdate:modelValue":o[2]||(o[2]=d=>m(a)?a.value=d:null),max:255,step:1,"prepend-icon":"tabler-letter-g"},null,8,["modelValue"]),e(y,{modelValue:n(a),"onUpdate:modelValue":o[3]||(o[3]=d=>m(a)?a.value=d:null),type:"number",placeholder:"20",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),e(u,{cols:"12"},{default:t(()=>[s("div",te,[e(p,{modelValue:n(i),"onUpdate:modelValue":o[4]||(o[4]=d=>m(i)?i.value=d:null),max:255,step:1,"prepend-icon":"tabler-letter-b"},null,8,["modelValue"]),e(y,{modelValue:n(i),"onUpdate:modelValue":o[5]||(o[5]=d=>m(i)?i.value=d:null),type:"number",placeholder:"30",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1})]),_:1})],64))}},se={__name:"DemoSliderVertical",setup(v){const l=V(10);return(a,i)=>(b(),f(p,{modelValue:n(l),"onUpdate:modelValue":i[0]||(i[0]=r=>m(l)?l.value=r:null),direction:"vertical"},null,8,["modelValue"]))}},ae=s("div",{class:"text-caption"}," Show ticks when using slider ",-1),ie=s("div",{class:"text-caption"}," Always show ticks ",-1),ne=s("div",{class:"text-caption"}," Tick size ",-1),re=s("div",{class:"text-caption"}," Tick labels ",-1),de={__name:"DemoSliderTicks",setup(v){const l=V(0),a=V(1),i={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(r,o)=>(b(),f(_,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[ae,e(p,{modelValue:n(l),"onUpdate:modelValue":o[0]||(o[0]=d=>m(l)?l.value=d:null),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ie,e(p,{modelValue:n(l),"onUpdate:modelValue":o[1]||(o[1]=d=>m(l)?l.value=d:null),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ne,e(p,{modelValue:n(l),"onUpdate:modelValue":o[2]||(o[2]=d=>m(l)?l.value=d:null),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[re,e(p,{modelValue:n(a),"onUpdate:modelValue":o[3]||(o[3]=d=>m(a)?a.value=d:null),ticks:i,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1})]),_:1}))}},ce=s("div",{class:"text-caption"}," Show thumb when using slider ",-1),ue=s("div",{class:"text-caption"}," Always show thumb label ",-1),me=s("div",{class:"text-caption"}," Custom thumb size ",-1),pe=s("div",{class:"text-caption"}," Custom thumb label ",-1),Ve={__name:"DemoSliderThumb",setup(v){const l=["😭","😢","😔","🙁","😐","🙂","😊","😁","😄","😍"],a=V(45);return(i,r)=>(b(),f(_,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[ce,e(p,{modelValue:n(a),"onUpdate:modelValue":r[0]||(r[0]=o=>m(a)?a.value=o:null),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ue,e(p,{modelValue:n(a),"onUpdate:modelValue":r[1]||(r[1]=o=>m(a)?a.value=o:null),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[me,e(p,{modelValue:n(a),"onUpdate:modelValue":r[2]||(r[2]=o=>m(a)?a.value=o:null),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[pe,e(p,{modelValue:n(a),"onUpdate:modelValue":r[3]||(r[3]=o=>m(a)?a.value=o:null),"thumb-label":"always"},{"thumb-label":t(({modelValue:o})=>[c(R(l[Math.min(Math.floor(o/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},ve={};function be(v,l){return b(),f(p,{step:10,"show-ticks":"","thumb-size":18,"tick-size":3,"track-size":2})}const fe=S(ve,[["render",be]]),_e={class:"d-flex justify-space-between"},xe={__name:"DemoSliderMinAndMax",setup(v){const l=V(-50),a=V(90),i=V(40);return(r,o)=>{const d=J;return b(),k("div",_e,[e(p,{modelValue:n(i),"onUpdate:modelValue":o[0]||(o[0]=x=>m(i)?i.value=x:null),max:n(a),min:n(l),step:1},null,8,["modelValue","max","min"]),e(d,{modelValue:n(i),"onUpdate:modelValue":o[1]||(o[1]=x=>m(i)?i.value=x:null),type:"number",placeholder:"10",style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])}}},he={__name:"DemoSliderValidation",setup(v){const l=V(30),a=[i=>i<=40||"Only 40 in stock"];return(i,r)=>(b(),f(p,{modelValue:n(l),"onUpdate:modelValue":r[0]||(r[0]=o=>m(l)?l.value=o:null),error:n(l)>40,rules:a,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"]))}},Ce={__name:"DemoSliderStep",setup(v){const l=V(0);return(a,i)=>(b(),f(p,{modelValue:n(l),"onUpdate:modelValue":i[0]||(i[0]=r=>m(l)?l.value=r:null),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue"]))}},we={__name:"DemoSliderIcons",setup(v){const l=V(0),a=V(0),i=V(10);return(r,o)=>(b(),f(_,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(l),"onUpdate:modelValue":o[0]||(o[0]=d=>m(l)?l.value=d:null),"prepend-icon":"tabler-volume"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(a),"onUpdate:modelValue":o[1]||(o[1]=d=>m(a)?a.value=d:null),"append-icon":"tabler-alarm"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(i),"onUpdate:modelValue":o[2]||(o[2]=d=>m(i)?i.value=d:null),"append-icon":"tabler-minus","prepend-icon":"tabler-plus"},null,8,["modelValue"])]),_:1})]),_:1}))}},ye=s("div",{class:"text-caption"}," color ",-1),Se=s("div",{class:"text-caption"}," track-color ",-1),ke=s("div",{class:"text-caption"}," thumb-color ",-1),ge={__name:"DemoSliderColors",setup(v){const l=V(25),a=V(75),i=V(50);return(r,o)=>(b(),f(_,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[ye,e(p,{modelValue:n(l),"onUpdate:modelValue":o[0]||(o[0]=d=>m(l)?l.value=d:null),color:"error"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[Se,e(p,{modelValue:n(a),"onUpdate:modelValue":o[1]||(o[1]=d=>m(a)?a.value=d:null),"track-color":"error"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ke,e(p,{modelValue:n(i),"onUpdate:modelValue":o[2]||(o[2]=d=>m(i)?i.value=d:null),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1})]),_:1}))}},ze={},$e=s("div",{class:"text-caption"}," Disabled ",-1),Re=s("div",{class:"text-caption"}," Readonly ",-1);function Te(v,l){return b(),f(_,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[$e,e(p,{disabled:"",label:"Disabled","model-value":30})]),_:1}),e(u,{cols:"12"},{default:t(()=>[Re,e(p,{readonly:"",label:"Readonly","model-value":30})]),_:1})]),_:1})}const De=S(ze,[["render",Te]]),je={__name:"DemoSliderBasic",setup(v){const l=V(30);return(a,i)=>(b(),f(_,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[e(p)]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(l),"onUpdate:modelValue":i[0]||(i[0]=r=>m(l)?l.value=r:null)},null,8,["modelValue"])]),_:1})]),_:1}))}},Ue={ts:`<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'tabler-pause' : 'tabler-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`,js:`<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})

const animationDuration = computed(() => {
  return \`\${ 60 / bpm.value }s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'tabler-pause' : 'tabler-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`},Ae={ts:`<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-r"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-g"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-b"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-r"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-g"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-b"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`},Fe={ts:`<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`},Be={ts:`<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`},Pe={ts:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`},Me={ts:`<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="tabler-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="tabler-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="tabler-minus"
        prepend-icon="tabler-plus"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="tabler-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="tabler-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="tabler-minus"
        prepend-icon="tabler-plus"
      />
    </VCol>
  </VRow>
</template>
`},Ie={ts:`<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <AppTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`,js:`<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <AppTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`},Le={ts:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`,js:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`},Oe={ts:`<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,js:`<script setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`},Ee={ts:`<script lang="ts" setup>
const satisfactionEmojis = ['😭', '😢', '😔', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const satisfactionEmojis = [
  '😭',
  '😢',
  '😔',
  '🙁',
  '😐',
  '🙂',
  '😊',
  '😁',
  '😄',
  '😍',
]

const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Ye={ts:`<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const value = ref(0)
const fruits = ref(1)

const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`},Ne={ts:`<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`,js:`<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`},Ge={ts:`<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`},Je=s("p",null,[c("The "),s("code",null,"v-slider"),c(" component is a better visualization of the number input.")],-1),qe=s("p",null,[c("You cannot interact with "),s("code",null,"disabled"),c(" and "),s("code",null,"readonly"),c(" sliders.")],-1),He=s("p",null,[c("You can set the colors of the slider using the props "),s("code",null,"color"),c(", "),s("code",null,"track-color"),c(" and "),s("code",null,"thumb-color"),c(".")],-1),Ke=s("p",null,[c("You can add icons to the slider with the "),s("code",null,"append-icon"),c(" and "),s("code",null,"prepend-icon"),c(" props.")],-1),Qe=s("p",null,[c("Using the "),s("code",null,"step"),c(" prop you can control the precision of the slider, and how much it should move each step.")],-1),We=s("p",null,[c("Vuetify includes simple validation through the "),s("code",null,"rules"),c(" prop.")],-1),Xe=s("p",null,[c("You can set "),s("code",null,"min"),c(" and "),s("code",null,"max"),c(" values of sliders.")],-1),Ze=s("p",null,[c("Use "),s("code",null,"thumb-size"),c(", "),s("code",null,"tick-size"),c(", and "),s("code",null,"track-size"),c(" prop to increase and decrease the size of thumb, tick and track. ")],-1),el=s("p",null,[c("You can display a thumb label while sliding or always with the "),s("code",null,"thumb-label"),c(" prop.")],-1),ll=s("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1),tl=s("p",null,[c(" You can use the "),s("code",null,"vertical"),c(" prop to switch sliders to a vertical orientation. ")],-1),ol=s("p",null,[c("Sliders can be combined with other components in its "),s("code",null,"append"),c(" slot, such as "),s("code",null,"v-text-field"),c(", to add additional functionality to the component.")],-1),sl=s("p",null,[c("Use slots such as "),s("code",null,"append"),c(" and "),s("code",null,"prepend"),c(" to easily customize the "),s("code",null,"v-slider"),c(" to fit any situation.")],-1),Rl={__name:"slider",setup(v){return(l,a)=>{const i=je,r=q,o=De,d=ge,x=we,h=Ce,C=he,j=xe,U=fe,A=Ve,F=de,B=se,P=oe,M=Z;return b(),f(_,{class:"match-height"},{default:t(()=>[e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Basic",code:Fe},{default:t(()=>[Je,e(i)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Disabled and Readonly",code:Pe},{default:t(()=>[qe,e(o)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Colors",code:Be},{default:t(()=>[He,e(d)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Icons",code:Me},{default:t(()=>[Ke,e(x)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Step",code:Oe},{default:t(()=>[Qe,e(h)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Validation",code:Ne},{default:t(()=>[We,e(C)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Min and Max",code:Ie},{default:t(()=>[Xe,e(j)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Size",code:Le},{default:t(()=>[Ze,e(U)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Thumb",code:Ee},{default:t(()=>[el,e(A)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Ticks",code:Ye},{default:t(()=>[ll,e(F)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Vertical",code:Ge},{default:t(()=>[tl,e(B)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Append text field",code:Ae},{default:t(()=>[ol,e(P)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Append and prepend",code:Ue},{default:t(()=>[sl,e(M)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Rl as default};
