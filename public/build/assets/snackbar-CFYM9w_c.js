import{aK as N,bv as h,bA as z,a_ as J,b1 as W,b0 as G,bh as K,aN as X,aO as Q,bx as Y,bC as Z,b4 as aa,b6 as ea,ba as ta,r as V,ar as L,w as R,H as na,bX as la,aT as ia,b as a,bd as oa,a4 as sa,aU as ra,s as A,bM as ca,aA as ba,o as g,c as y,e,v as n,a7 as m,n as S,a3 as p,a1 as _,F as T,f as ua,d}from"./main-BpCE11e0.js";import{m as ka,a as M}from"./VOverlay-AdA8IKZf.js";import{f as ma}from"./forwardRefs-C-GTDzx5.js";import{u as Va}from"./scopeId-CX7PR-6f.js";import{_ as da}from"./AppCardCode-C-QvC2Py.js";import{V as Sa,a as x}from"./VRow-xpAHAmMa.js";import"./easing-CjukEv2V.js";import"./lazy-CUwpKHNm.js";import"./index-BBH5DFp-.js";import"./vue3-perfect-scrollbar.esm-Cyf3jMeJ.js";import"./index-DEDcYJJM.js";import"./VCard-BwVRHlyG.js";import"./VAvatar-CmHxnWRf.js";import"./VImg-BcLxmGl8.js";import"./VCardText-D23fwck5.js";import"./VDivider-CHwI54IN.js";/* empty css              */function pa(s){const l=L(s);let r=-1;function t(){clearInterval(r)}function i(){t(),ba(()=>l.value=s)}function u(v){const c=v?getComputedStyle(v):{transitionDuration:.2},k=parseFloat(c.transitionDuration)*1e3||200;if(t(),l.value<=0)return;const B=performance.now();r=window.setInterval(()=>{const I=performance.now()-B+k;l.value=Math.max(s-I,0),l.value<=0&&t()},k)}return ca(t),{clear:t,time:l,start:u,reset:i}}const fa=N({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...h({location:"bottom"}),...z(),...J(),...W(),...G(),...K(ka({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),f=X()({name:"VSnackbar",props:fa(),emits:{"update:modelValue":s=>!0},setup(s,l){let{slots:r}=l;const t=Q(s,"modelValue"),{locationStyles:i}=Y(s),{positionClasses:u}=Z(s),{scopeId:v}=Va(),{themeClasses:c}=aa(s),{colorClasses:k,colorStyles:B,variantClasses:I}=ea(s),{roundedClasses:o}=ta(s),b=pa(Number(s.timeout)),P=V(),E=V(),$=L(!1);R(t,C),R(()=>s.timeout,C),na(()=>{t.value&&C()});let D=-1;function C(){b.reset(),window.clearTimeout(D);const w=Number(s.timeout);if(!t.value||w===-1)return;const U=la(E.value);b.start(U),D=window.setTimeout(()=>{t.value=!1},w)}function j(){b.reset(),window.clearTimeout(D)}function H(){$.value=!0,j()}function q(){$.value=!1,C()}return ia(()=>{const w=M.filterProps(s),U=!!(r.default||r.text||s.text);return a(M,A({ref:P,class:["v-snackbar",{"v-snackbar--active":t.value,"v-snackbar--multi-line":s.multiLine&&!s.vertical,"v-snackbar--timer":!!s.timer,"v-snackbar--vertical":s.vertical},u.value,s.class],style:s.style},w,{modelValue:t.value,"onUpdate:modelValue":O=>t.value=O,contentProps:A({class:["v-snackbar__wrapper",c.value,k.value,o.value,I.value],style:[i.value,B.value],onPointerenter:H,onPointerleave:q},w.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},v),{default:()=>{var O,F;return[oa(!1,"v-snackbar"),s.timer&&a("div",{key:"timer",class:"v-snackbar__timer"},[a(sa,{ref:E,active:!$.value,color:typeof s.timer=="string"?s.timer:"info",max:s.timeout,"model-value":b.time.value},null)]),U&&a("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((O=r.text)==null?void 0:O.call(r))??s.text,(F=r.default)==null?void 0:F.call(r)]),r.actions&&a(ra,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[a("div",{class:"v-snackbar__actions"},[r.actions()])]})]},activator:r.activator})}),ma({},P)}}),va={class:"demo-space-x"},Ba={__name:"DemoSnackbarTransition",setup(s){const l=V(!1),r=V(!1),t=V(!1);return(i,u)=>(g(),y("div",va,[a(m,{onClick:u[0]||(u[0]=v=>l.value=!0)},{default:e(()=>[n(" fade snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":u[1]||(u[1]=v=>p(l)?l.value=v:null),transition:"fade-transition",location:"top start"},{default:e(()=>[n(" I'm a fade transition snackbar. ")]),_:1},8,["modelValue"]),a(m,{onClick:u[2]||(u[2]=v=>r.value=!0)},{default:e(()=>[n(" Scale snackbar ")]),_:1}),a(f,{modelValue:S(r),"onUpdate:modelValue":u[3]||(u[3]=v=>p(r)?r.value=v:null),transition:"scale-transition",location:"bottom end"},{default:e(()=>[n(" I'm a scale transition snackbar. ")]),_:1},8,["modelValue"]),a(m,{onClick:u[4]||(u[4]=v=>t.value=!0)},{default:e(()=>[n(" scroll y reverse ")]),_:1}),a(f,{modelValue:S(t),"onUpdate:modelValue":u[5]||(u[5]=v=>p(t)?t.value=v:null),transition:"scroll-y-reverse-transition",location:"top end"},{default:e(()=>[n(" I'm a scroll y reverse transition snackbar. ")]),_:1},8,["modelValue"])]))}},_a={class:"demo-space-x"},ga={__name:"DemoSnackbarVariants",setup(s){const l=V(!1),r=V(!1),t=V(!1),i=V(!1),u=V(!1);return(v,c)=>(g(),y("div",_a,[a(m,{onClick:c[0]||(c[0]=k=>l.value=!0)},{default:e(()=>[n(" Default ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":c[1]||(c[1]=k=>p(l)?l.value=k:null),location:"top start"},{default:e(()=>[n(" Jelly chocolate bar candy canes apple pie. ")]),_:1},8,["modelValue"]),a(m,{onClick:c[2]||(c[2]=k=>r.value=!0)},{default:e(()=>[n(" tonal ")]),_:1}),a(f,{modelValue:S(r),"onUpdate:modelValue":c[3]||(c[3]=k=>p(r)?r.value=k:null),location:"top end",variant:"tonal"},{default:e(()=>[n(" Ice cream cake candy canes. ")]),_:1},8,["modelValue"]),a(m,{onClick:c[4]||(c[4]=k=>t.value=!0)},{default:e(()=>[n(" Text ")]),_:1}),a(f,{modelValue:S(t),"onUpdate:modelValue":c[5]||(c[5]=k=>p(t)?t.value=k:null),location:"end center",variant:"text"},{default:e(()=>[n(" Pie icing biscuit soufflé liquorice topping. ")]),_:1},8,["modelValue"]),a(m,{onClick:c[6]||(c[6]=k=>i.value=!0)},{default:e(()=>[n(" Outlined ")]),_:1}),a(f,{modelValue:S(i),"onUpdate:modelValue":c[7]||(c[7]=k=>p(i)?i.value=k:null),location:"bottom end",variant:"outlined",color:"error"},{default:e(()=>[n(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"]),a(m,{onClick:c[8]||(c[8]=k=>u.value=!0)},{default:e(()=>[n(" Flat ")]),_:1}),a(f,{modelValue:S(u),"onUpdate:modelValue":c[9]||(c[9]=k=>p(u)?u.value=k:null),location:"bottom start",variant:"flat",color:"error"},{default:e(()=>[n(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"])]))}},xa={class:"demo-space-x"},ya={__name:"DemoSnackbarPosition",setup(s){const l=V(!1),r=V(!1),t=V(!1),i=V(!1),u=V(!1),v=V(!1),c=V(!1),k=V(!1),B=V(!1);return(I,o)=>(g(),y("div",xa,[a(m,{icon:"",variant:"text",onClick:o[0]||(o[0]=b=>r.value=!0)},{default:e(()=>[a(_,{icon:"tabler-arrow-up"})]),_:1}),a(f,{modelValue:S(r),"onUpdate:modelValue":o[1]||(o[1]=b=>p(r)?r.value=b:null),location:"top"},{default:e(()=>[n(" I'm a top snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:o[2]||(o[2]=b=>t.value=!0)},{default:e(()=>[a(_,{icon:"tabler-arrow-up-right"})]),_:1}),a(f,{modelValue:S(t),"onUpdate:modelValue":o[3]||(o[3]=b=>p(t)?t.value=b:null),location:"top end"},{default:e(()=>[n(" I'm a top right snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:o[4]||(o[4]=b=>c.value=!0)},{default:e(()=>[a(_,{icon:"tabler-arrow-right"})]),_:1}),a(f,{modelValue:S(c),"onUpdate:modelValue":o[5]||(o[5]=b=>p(c)?c.value=b:null),location:"end center"},{default:e(()=>[n(" I'm a center end snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:o[6]||(o[6]=b=>i.value=!0)},{default:e(()=>[a(_,{icon:"tabler-arrow-down-right"})]),_:1}),a(f,{modelValue:S(i),"onUpdate:modelValue":o[7]||(o[7]=b=>p(i)?i.value=b:null),location:"bottom end"},{default:e(()=>[n(" I'm a bottom end snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:o[8]||(o[8]=b=>u.value=!0)},{default:e(()=>[a(_,{icon:"tabler-arrow-down"})]),_:1}),a(f,{modelValue:S(u),"onUpdate:modelValue":o[9]||(o[9]=b=>p(u)?u.value=b:null)},{default:e(()=>[n(" I'm a bottom snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:o[10]||(o[10]=b=>v.value=!0)},{default:e(()=>[a(_,{icon:"tabler-arrow-down-left"})]),_:1}),a(f,{modelValue:S(v),"onUpdate:modelValue":o[11]||(o[11]=b=>p(v)?v.value=b:null),location:"bottom start"},{default:e(()=>[n(" I'm a bottom start snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:o[12]||(o[12]=b=>k.value=!0)},{default:e(()=>[a(_,{icon:"tabler-arrow-left"})]),_:1}),a(f,{modelValue:S(k),"onUpdate:modelValue":o[13]||(o[13]=b=>p(k)?k.value=b:null),location:"start center"},{default:e(()=>[n(" I'm a center start snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:o[14]||(o[14]=b=>l.value=!0)},{default:e(()=>[a(_,{icon:"tabler-arrow-up-left"})]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":o[15]||(o[15]=b=>p(l)?l.value=b:null),location:"top start"},{default:e(()=>[n(" I'm a top start snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:o[16]||(o[16]=b=>B.value=!0)},{default:e(()=>[a(_,{icon:"tabler-arrows-minimize"})]),_:1}),a(f,{modelValue:S(B),"onUpdate:modelValue":o[17]||(o[17]=b=>p(B)?B.value=b:null),location:"center"},{default:e(()=>[n(" I'm a center snackbar. ")]),_:1},8,["modelValue"])]))}},Ia={__name:"DemoSnackbarVertical",setup(s){const l=V(!1);return(r,t)=>(g(),y(T,null,[a(m,{onClick:t[0]||(t[0]=i=>l.value=!0)},{default:e(()=>[n(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":t[3]||(t[3]=i=>p(l)?l.value=i:null),vertical:""},{actions:e(()=>[a(m,{color:"success",onClick:t[1]||(t[1]=i=>l.value=!1)},{default:e(()=>[n(" Undo ")]),_:1}),a(m,{color:"error",onClick:t[2]||(t[2]=i=>l.value=!1)},{default:e(()=>[n(" Close ")]),_:1})]),default:e(()=>[n(" Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy. ")]),_:1},8,["modelValue"])],64))}},wa={__name:"DemoSnackbarTimeout",setup(s){const l=V(!1);return(r,t)=>(g(),y(T,null,[a(m,{onClick:t[0]||(t[0]=i=>l.value=!0)},{default:e(()=>[n(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":t[1]||(t[1]=i=>p(l)?l.value=i:null),timeout:2e3},{default:e(()=>[n(" My timeout is set to 2000. ")]),_:1},8,["modelValue"])],64))}},Ta={__name:"DemoSnackbarMultiLine",setup(s){const l=V(!1);return(r,t)=>(g(),y(T,null,[a(m,{onClick:t[0]||(t[0]=i=>l.value=!0)},{default:e(()=>[n(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":t[2]||(t[2]=i=>p(l)?l.value=i:null),"multi-line":""},{actions:e(()=>[a(m,{color:"error",onClick:t[1]||(t[1]=i=>l.value=!1)},{default:e(()=>[n(" Close ")]),_:1})]),default:e(()=>[n(" I am a multi-line snackbar. I can have more than one line. This is another line that is quite long. ")]),_:1},8,["modelValue"])],64))}},Ca={__name:"DemoSnackbarWithAction",setup(s){const l=V(!1);return(r,t)=>(g(),y(T,null,[a(m,{onClick:t[0]||(t[0]=i=>l.value=!0)},{default:e(()=>[n(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":t[2]||(t[2]=i=>p(l)?l.value=i:null)},{actions:e(()=>[a(m,{color:"error",onClick:t[1]||(t[1]=i=>l.value=!1)},{default:e(()=>[n(" Close ")]),_:1})]),default:e(()=>[n(" Hello, I'm a snackbar with actions. ")]),_:1},8,["modelValue"])],64))}},Oa={__name:"DemoSnackbarBasic",setup(s){const l=V(!1);return(r,t)=>(g(),y(T,null,[a(m,{onClick:t[0]||(t[0]=i=>l.value=!0)},{default:e(()=>[n(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":t[1]||(t[1]=i=>p(l)?l.value=i:null)},{default:e(()=>[n(" Hello, I'm a snackbar ")]),_:1},8,["modelValue"])],64))}},$a={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`},Da={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Ua={ts:`<script lang="ts" setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="tabler-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="tabler-arrow-up-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="tabler-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="tabler-arrow-down-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="tabler-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="tabler-arrow-down-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="tabler-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="tabler-arrow-up-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="tabler-arrows-minimize" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="tabler-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="tabler-arrow-up-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="tabler-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="tabler-arrow-down-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="tabler-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="tabler-arrow-down-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="tabler-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="tabler-arrow-up-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="tabler-arrows-minimize" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`},Pa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`},Ea={ts:`<script lang="ts" setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`},Fa={ts:`<script lang="ts" setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`},Ra={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Aa={ts:`<script lang="ts" setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Ma=d("p",null,[n("The "),d("code",null,"v-snackbar"),n(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")],-1),La=d("p",null,[n("Use "),d("code",null,"actions"),n(" slot to add action button. A "),d("code",null,"v-snackbar"),n(" in its simplest form displays a temporary and closable notification to the user.")],-1),ja=d("p",null,[n("The "),d("code",null,"multi-line"),n(" property extends the height of the "),d("code",null,"v-snackbar"),n(" to give you a little more room for content.")],-1),Ha=d("p",null,[n("The "),d("code",null,"timeout"),n(" property lets you customize the delay before the "),d("code",null,"v-snackbar"),n(" is hidden.")],-1),qa=d("p",null,[n("The "),d("code",null,"vertical"),n(" property allows you to stack the content of your "),d("code",null,"v-snackbar"),n(".")],-1),Na=d("p",null,[n("Use "),d("code",null,"location"),n(" prop to change the position of snackbar.")],-1),ha=d("p",null,[n("Apply different styles to the snackbar using props such as "),d("code",null,"shaped"),n(", "),d("code",null,"rounded"),n(", "),d("code",null,"color"),n(", "),d("code",null,"text"),n(", "),d("code",null,"outlined"),n(", "),d("code",null,"tile"),n(" and more.")],-1),za=d("p",null,"Use transition prop to sets the component transition.",-1),ce={__name:"snackbar",setup(s){return(l,r)=>{const t=Oa,i=da,u=Ca,v=Ta,c=wa,k=Ia,B=ya,I=ga,o=Ba;return g(),ua(Sa,{class:"match-height"},{default:e(()=>[a(x,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"Basic",code:$a},{default:e(()=>[Ma,a(t)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"With Action",code:Aa},{default:e(()=>[La,a(u)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"Multi Line",code:Da},{default:e(()=>[ja,a(v)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"Timeout",code:Pa},{default:e(()=>[Ha,a(c)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"Vertical",code:Ra},{default:e(()=>[qa,a(k)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"Position",code:Ua},{default:e(()=>[Na,a(B)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"Variants",code:Fa},{default:e(()=>[ha,a(I)]),_:1},8,["code"])]),_:1}),a(x,{cols:"12",md:"6"},{default:e(()=>[a(i,{title:"Transition",code:Ea},{default:e(()=>[za,a(o)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ce as default};
