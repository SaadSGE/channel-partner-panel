import{r as g,o as i,f,e as o,b as t,a7 as e,n as p,a3 as W,cX as j,c as u,v as n,a1 as B,d as a,R as D,U as z}from"./main-DEXLFq5-.js";import{_ as d}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as s,V as b}from"./VRow-DKkqacc7.js";import{_ as N}from"./AppCardCode-a0r-5NbS.js";import{V as v}from"./VAlert-BS3XFoiL.js";/* empty css              */import"./vue3-perfect-scrollbar.esm-CSeKWONk.js";import"./index-dXcoFe5c.js";import"./VCard-BQ9pbwZy.js";import"./VAvatar-BaU-tpmv.js";import"./VImg-BwxQFvJc.js";import"./index-UZWnqimo.js";import"./VCardText-CEHG5Us3.js";import"./VDivider-BGznFT5b.js";const R={__name:"DemoButtonGroup",setup(c){const l=g(1);return(V,_)=>(i(),f(j,{modelValue:p(l),"onUpdate:modelValue":_[0]||(_[0]=r=>W(l)?l.value=r:null),density:"comfortable"},{default:o(()=>[t(e,{icon:"tabler-align-left"}),t(e,{icon:"tabler-align-center"}),t(e,{icon:"tabler-align-right"}),t(e,{icon:"tabler-align-justified"})]),_:1},8,["modelValue"]))}},U={},O={class:"demo-space-x"};function A(c,l){return i(),u("div",O,[t(e,{href:"https://pixinvent.com/"},{default:o(()=>[n(" String Literal ")]),_:1}),t(e,{href:"https://pixinvent.com/",target:"_blank",rel:"noopener noreferrer"},{default:o(()=>[n(" Open New Tab ")]),_:1})])}const q=d(U,[["render",A]]),G={},Q={class:"demo-space-x"};function Y(c,l){return i(),u("div",Q,[t(e,{to:"alert"},{default:o(()=>[n(" String Literal ")]),_:1}),t(e,{color:"warning",to:{path:"alert"}},{default:o(()=>[n(" Object Path ")]),_:1}),t(e,{color:"success",to:{name:"components-alert"}},{default:o(()=>[n(" Named Router ")]),_:1}),t(e,{color:"secondary",to:{path:"alert",query:{plan:"private"}}},{default:o(()=>[n(" With Query ")]),_:1})])}const F=d(G,[["render",Y]]),X=c=>(D("data-v-a713ac43"),c=c(),z(),c),H={class:"demo-space-x"},J=X(()=>a("span",null,"Loading...",-1)),K={class:"custom-loader"},M={__name:"DemoButtonLoaders",setup(c){const l=g([]),V=_=>{l.value[_]=!0,setTimeout(()=>{l.value[_]=!1},3e3)};return(_,r)=>(i(),u("div",H,[t(e,{loading:p(l)[0],disabled:p(l)[0],color:"primary",onClick:r[0]||(r[0]=m=>V(0))},{default:o(()=>[n(" Accept Terms ")]),_:1},8,["loading","disabled"]),t(e,{loading:p(l)[1],disabled:p(l)[1],color:"secondary",onClick:r[1]||(r[1]=m=>V(1))},{default:o(()=>[n(" Upload "),t(B,{end:"",icon:"tabler-cloud-upload"})]),_:1},8,["loading","disabled"]),t(e,{loading:p(l)[2],disabled:p(l)[2],color:"success",onClick:r[2]||(r[2]=m=>V(2))},{loader:o(()=>[J]),default:o(()=>[n(" Loader slot ")]),_:1},8,["loading","disabled"]),t(e,{loading:p(l)[3],disabled:p(l)[3],color:"info",onClick:r[3]||(r[3]=m=>V(3))},{loader:o(()=>[a("span",K,[t(B,{icon:"tabler-refresh"})])]),default:o(()=>[n(" Icon Loader ")]),_:1},8,["loading","disabled"]),t(e,{loading:p(l)[4],disabled:p(l)[4],color:"warning",icon:"tabler-cloud-upload",onClick:r[4]||(r[4]=m=>V(4))},null,8,["loading","disabled"])]))}},Z=d(M,[["__scopeId","data-v-a713ac43"]]),tt={};function ot(c,l){return i(),f(b,null,{default:o(()=>[t(s,{cols:"12",sm:"6"},{default:o(()=>[t(e,{block:""},{default:o(()=>[n(" Block Button ")]),_:1})]),_:1}),t(s,{cols:"12",sm:"6"},{default:o(()=>[t(e,{variant:"outlined",block:""},{default:o(()=>[n(" Block Button ")]),_:1})]),_:1})]),_:1})}const nt=d(tt,[["render",ot]]),et={},at={class:"demo-space-x"};function lt(c,l){return i(),u("div",at,[t(e,{size:"x-large"},{default:o(()=>[n(" Extra large Button ")]),_:1}),t(e,{color:"success",size:"large"},{default:o(()=>[n(" Large Button ")]),_:1}),t(e,{color:"info"},{default:o(()=>[n(" Normal Button ")]),_:1}),t(e,{size:"small",color:"warning"},{default:o(()=>[n(" Small Button ")]),_:1}),t(e,{size:"x-small",color:"error"},{default:o(()=>[n(" Extra small Button ")]),_:1})])}const rt=d(et,[["render",lt]]),ct={},st={class:"demo-space-x"};function it(c,l){return i(),u("div",st,[t(e,{icon:"tabler-briefcase",rounded:""}),t(e,{variant:"tonal",icon:"tabler-user-plus"}),t(e,{icon:"tabler-search",variant:"outlined",color:"success"}),t(e,{icon:"tabler-thumb-up",variant:"text",color:"info"}),t(e,{icon:"tabler-star",variant:"tonal",color:"success",rounded:""}),t(e,{icon:"tabler-heart",variant:"text",color:"error"})])}const dt=d(ct,[["render",it]]),ut={},pt={class:"demo-space-x"};function _t(c,l){return i(),u("div",pt,[t(e,null,{default:o(()=>[n(" Accept "),t(B,{end:"",icon:"tabler-checkbox"})]),_:1}),t(e,{color:"secondary"},{default:o(()=>[t(B,{start:"",icon:"tabler-circle-minus"}),n("Cancel ")]),_:1}),t(e,{color:"success"},{default:o(()=>[n(" Upload "),t(B,{end:"",icon:"tabler-cloud-upload"})]),_:1}),t(e,{color:"info"},{default:o(()=>[t(B,{start:"",icon:"tabler-arrow-left"}),n(" Back ")]),_:1}),t(e,{color:"warning"},{default:o(()=>[t(B,{icon:"tabler-settings"})]),_:1}),t(e,{color:"error"},{default:o(()=>[t(B,{icon:"tabler-circle-off"})]),_:1})])}const Bt=d(ut,[["render",_t]]),Vt={},mt={class:"demo-space-x"};function ft(c,l){return i(),u("div",mt,[t(e,{variant:"tonal"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{color:"secondary",variant:"tonal"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{color:"success",variant:"tonal"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{color:"info",variant:"tonal"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{color:"warning",variant:"tonal"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{color:"error",variant:"tonal"},{default:o(()=>[n(" Error ")]),_:1})])}const vt=d(Vt,[["render",ft]]),gt={},bt={class:"demo-space-x"};function ht(c,l){return i(),u("div",bt,[t(e,{variant:"plain"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{color:"secondary",variant:"plain"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{color:"success",variant:"plain"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{color:"info",variant:"plain"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{color:"warning",variant:"plain"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{color:"error",variant:"plain"},{default:o(()=>[n(" Error ")]),_:1})])}const xt=d(gt,[["render",ht]]),yt={},kt={class:"demo-space-x"};function wt(c,l){return i(),u("div",kt,[t(e,{variant:"text"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{variant:"text",color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{variant:"text",color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{variant:"text",color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{variant:"text",color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{variant:"text",color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const St=d(yt,[["render",wt]]),It={},$t={class:"demo-space-x"};function Et(c,l){return i(),u("div",$t,[t(e,null,{default:o(()=>[n(" Normal Button ")]),_:1}),t(e,{rounded:"lg",color:"secondary"},{default:o(()=>[n(" Rounded Button ")]),_:1}),t(e,{rounded:0,color:"success"},{default:o(()=>[n(" Tile Button ")]),_:1}),t(e,{rounded:"pill",color:"info"},{default:o(()=>[n(" Pill Button ")]),_:1})])}const Tt=d(It,[["render",Et]]),Pt={},Lt={class:"demo-space-x"};function Ct(c,l){return i(),u("div",Lt,[t(e,{variant:"flat"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{variant:"flat",color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{variant:"flat",color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{variant:"flat",color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{variant:"flat",color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{variant:"flat",color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const Wt=d(Pt,[["render",Ct]]),jt={},Dt={class:"demo-space-x"};function zt(c,l){return i(),u("div",Dt,[t(e,{variant:"outlined"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{variant:"outlined",color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{variant:"outlined",color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{variant:"outlined",color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{variant:"outlined",color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{variant:"outlined",color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const Nt=d(jt,[["render",zt]]),Rt={},Ut={class:"demo-space-x"};function Ot(c,l){return i(),u("div",Ut,[t(e,{color:"primary"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const At=d(Rt,[["render",Ot]]),qt={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`},Gt={ts:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`},Qt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Yt={ts:`<script lang="ts" setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    density="comfortable"
  >
    <VBtn icon="tabler-align-left" />
    <VBtn icon="tabler-align-center" />
    <VBtn icon="tabler-align-right" />
    <VBtn icon="tabler-align-justified" />
  </VBtnToggle>
</template>
`,js:`<script setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    density="comfortable"
  >
    <VBtn icon="tabler-align-left" />
    <VBtn icon="tabler-align-center" />
    <VBtn icon="tabler-align-right" />
    <VBtn icon="tabler-align-justified" />
  </VBtnToggle>
</template>
`},Ft={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="tabler-checkbox"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="tabler-circle-minus"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="tabler-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="tabler-settings" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="tabler-circle-off" />
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="tabler-checkbox"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="tabler-circle-minus"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="tabler-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="tabler-settings" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="tabler-circle-off" />
    </VBtn>
  </div>
</template>
`},Xt={ts:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="tabler-briefcase"
      rounded
    />

    <VBtn
      variant="tonal"
      icon="tabler-user-plus"
    />

    <VBtn
      icon="tabler-search"
      variant="outlined"
      color="success"
    />

    <VBtn
      icon="tabler-thumb-up"
      variant="text"
      color="info"
    />

    <VBtn
      icon="tabler-star"
      variant="tonal"
      color="success"
      rounded
    />

    <VBtn
      icon="tabler-heart"
      variant="text"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="tabler-briefcase"
      rounded
    />

    <VBtn
      variant="tonal"
      icon="tabler-user-plus"
    />

    <VBtn
      icon="tabler-search"
      variant="outlined"
      color="success"
    />

    <VBtn
      icon="tabler-thumb-up"
      variant="text"
      color="info"
    />

    <VBtn
      icon="tabler-star"
      variant="tonal"
      color="success"
      rounded
    />

    <VBtn
      icon="tabler-heart"
      variant="text"
      color="error"
    />
  </div>
</template>
`},Ht={ts:`<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`},Jt={ts:`<script lang="ts" setup>
const loadings = ref<boolean[]>([])

const load = (i: number) => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="tabler-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="tabler-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`,js:`<script setup>
const loadings = ref([])

const load = i => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="tabler-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="tabler-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`},Kt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Mt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
`},Zt={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`},to={ts:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`},oo={ts:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`},no={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},eo={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
`},ao=a("p",null,[n("The "),a("code",null,"color"),n(" prop is used to change the background color of the alert.")],-1),lo=a("p",null,[n("The "),a("code",null,"outlined"),n(" variant option is used to create outlined buttons.")],-1),ro=a("p",null,[n("The "),a("code",null,"flat"),n(" buttons still maintain their background color, but have no box shadow.")],-1),co=a("p",null,[n("Use the "),a("code",null,"rounded"),n(" prop to control the border radius of buttons.")],-1),so=a("p",null,[n("Use "),a("code",null,"text"),n(" variant option to create text button. Text buttons have no box shadow and no background.")],-1),io=a("p",null,[n("Use "),a("code",null,"plain"),n(" variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.")],-1),uo=a("p",null,[n("Use "),a("code",null,"tonal"),n(" variant option to a create a light background button.")],-1),po=a("p",null,"Icons can be used inside of buttons to add emphasis to the action.",-1),_o=a("p",null,[n("Use "),a("code",null,"VIcon"),n(" component inside button to create buttons that looks like rest of the theme.")],-1),Bo=a("p",null,"Buttons can be given different sizing options to fit a multitude of scenarios.",-1),Vo=a("p",null,[n("The "),a("code",null,"block"),n(" prop allows buttons to extend the full available width.")],-1),mo=a("p",null,[n("Using the "),a("code",null,"loading"),n(" prop, you can notify a user that there is processing taking place. The default behavior is to use a "),a("code",null,"v-progress-circular"),n(" component but this can be customized.")],-1),fo=a("p",null,[n("Use "),a("code",null,"to"),n(" prop to create button with router support.")],-1),vo=a("p",null,[n("Designates that the component is a link. This is automatic when using the "),a("code",null,"href"),n(" or "),a("code",null,"to"),n(" prop.")],-1),go=a("p",null,[n(" Wrap buttons with the "),a("code",null,"v-btn-toggle"),n(" component to create a group button. You can add a visual divider between buttons with the "),a("code",null,"divided"),n(" prop. ")],-1),Wo={__name:"button",setup(c){return(l,V)=>{const _=At,r=N,m=Nt,h=Wt,x=Tt,y=St,k=xt,w=vt,S=Bt,I=dt,$=rt,E=nt,T=Z,P=F,L=q,C=R;return i(),f(b,null,{default:o(()=>[t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Colors",code:Gt},{default:o(()=>[ao,t(_)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Outlined",code:Kt},{default:o(()=>[lo,t(m)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Flat",code:Qt},{default:o(()=>[ro,t(h)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Rounded",code:Zt},{default:o(()=>[co,t(x)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Text",code:no},{default:o(()=>[so,t(y)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Plain",code:Mt},{default:o(()=>[io,t(k)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Tonal",code:eo},{default:o(()=>[uo,t(w)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Icon",code:Ft},{default:o(()=>[po,t(S)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Icon Only",code:Xt},{default:o(()=>[_o,t(I)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Sizing",code:oo},{default:o(()=>[Bo,t($)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Block",code:qt},{default:o(()=>[Vo,t(E)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Loaders",code:Jt},{default:o(()=>[mo,t(T)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Router",code:to},{default:o(()=>[fo,t(v,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>[n(" Note: On click of the link button, You will get redirected to another page. ")]),_:1}),t(P)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Link",code:Ht},{default:o(()=>[vo,t(v,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>[n(" Note: On click of the link button, You will get redirected to another page. ")]),_:1}),t(L)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(r,{title:"Group",code:Yt},{default:o(()=>[go,t(C)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Wo as default};
