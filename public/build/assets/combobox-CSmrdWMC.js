import{_,V as C}from"./AppCombobox-Bd4s9PFG.js";import{r as u,o as V,f as b,n as r,a3 as d,w as I,aB as P,e as o,b as t,v as i,d as n,x as h}from"./main-CXM0LxHb.js";import{a as A,b as D}from"./VList-CH_t0q4R.js";import{a as p,V as y}from"./VRow-CND1I_io.js";import{V as w}from"./VChip-bIOmRGCx.js";import{V as U}from"./VAvatar-DsVtc_uV.js";import{_ as L}from"./AppCardCode-B1xnAh3M.js";import"./form-DELZCvUP.js";import"./VSelect-C3KxdGye.js";import"./VTextField-kA_9C9zN.js";/* empty css                   */import"./VCounter-C2nOek9O.js";import"./index-BSKBOqU5.js";import"./index-BcdH6rOd.js";import"./VField-B-nwscLN.js";import"./easing-CjukEv2V.js";import"./VInput-_BxR2brP.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-BBedTiE_.js";import"./VMenu-i8A-tyfO.js";import"./VOverlay-8kSjDxfY.js";import"./lazy-BjjeaQ6l.js";import"./scopeId-Du-QC9yq.js";import"./VCheckboxBtn-joMlABKG.js";import"./VSelectionControl-btzaMaO9.js";import"./filter-DyDB6zMA.js";import"./ssrBoot-BC28AIvw.js";import"./VDivider-CFY18CC_.js";/* empty css              */import"./VSlideGroup-qGFySQCB.js";import"./VImg-B2wtasj7.js";import"./vue3-perfect-scrollbar.esm-BEDhIki4.js";import"./VCard-5vWXzH2z.js";import"./VCardText-D4oyAar5.js";const k={__name:"DemoComboboxClearable",setup(g){const e=u(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,l)=>{const m=_;return V(),b(m,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=a=>d(e)?e.value=a:null),items:s,label:"Combobox",multiple:"",placeholder:"deployment",clearable:""},null,8,["modelValue"])}}},R=n("kbd",null,"enter",-1),N={__name:"DemoComboboxNoDataWithChips",setup(g){const e=["Gaming","Programming","Vue","Vuetify"],s=u(["Vuetify"]),c=u(null);return I(s,l=>{l.length>5&&P(()=>s.value.pop())}),(l,m)=>{const a=_;return V(),b(a,{modelValue:r(s),"onUpdate:modelValue":m[0]||(m[0]=f=>d(s)?s.value=f:null),"search-input":r(c),"onUpdate:searchInput":m[1]||(m[1]=f=>d(c)?c.value=f:null),items:e,"hide-selected":"","hide-no-data":!1,placeholder:"deployment",hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":o(()=>[t(A,null,{default:o(()=>[t(D,null,{default:o(()=>[i(' No results matching "'),n("strong",null,h(r(c)),1),i('". Press '),R,i(" to create a new one ")]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"])}}},T={__name:"DemoComboboxMultiple",setup(g){const e=u(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,l)=>{const m=_;return V(),b(y,null,{default:o(()=>[t(p,{cols:"12"},{default:o(()=>[t(m,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=a=>d(e)?e.value=a:null),items:s,placeholder:"deployment",label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(m,{modelValue:r(e),"onUpdate:modelValue":l[1]||(l[1]=a=>d(e)?e.value=a:null),items:s,placeholder:"deployment",label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(m,{modelValue:r(e),"onUpdate:modelValue":l[2]||(l[2]=a=>d(e)?e.value=a:null),placeholder:"deployment",label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(m,{modelValue:r(e),"onUpdate:modelValue":l[3]||(l[3]=a=>d(e)?e.value=a:null),items:s,placeholder:"deployment",label:"I use selection slot",multiple:""},{selection:o(({item:a})=>[t(w,{size:"small"},{prepend:o(()=>[t(U,{start:"",color:"primary",size:"16"},{default:o(()=>[i(h(String(a.title).charAt(0).toUpperCase()),1)]),_:2},1024)]),default:o(()=>[i(" "+h(a.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},$={__name:"DemoComboboxVariant",setup(g){const e=u(["Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,l)=>(V(),b(y,null,{default:o(()=>[t(p,{cols:"12"},{default:o(()=>[t(C,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=m=>d(e)?e.value=m:null),items:s,multiple:"",placeholder:"deployment",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(C,{modelValue:r(e),"onUpdate:modelValue":l[1]||(l[1]=m=>d(e)?e.value=m:null),multiple:"",items:s,placeholder:"deployment",variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(C,{modelValue:r(e),"onUpdate:modelValue":l[2]||(l[2]=m=>d(e)?e.value=m:null),multiple:"",items:s,placeholder:"deployment",variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(C,{modelValue:r(e),"onUpdate:modelValue":l[3]||(l[3]=m=>d(e)?e.value=m:null),multiple:"",items:s,placeholder:"deployment",variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(C,{modelValue:r(e),"onUpdate:modelValue":l[4]||(l[4]=m=>d(e)?e.value=m:null),multiple:"",items:s,variant:"plain",placeholder:"deployment",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}},B={__name:"DemoComboboxDensity",setup(g){const e=u(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,l)=>{const m=_;return V(),b(m,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=a=>d(e)?e.value=a:null),items:s,label:"Combobox",density:"compact",placeholder:"deployment",multiple:""},null,8,["modelValue"])}}},S={__name:"DemoComboboxBasic",setup(g){const e=u("Programming"),s=["Programming","Design","Vue","Vuetify"];return(c,l)=>{const m=_;return V(),b(m,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=a=>d(e)?e.value=a:null),items:s,placeholder:"deployment"},null,8,["modelValue"])}}},j={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`},z={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`},M={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`},W={ts:`<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
                size="16"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
                size="16"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`},F={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`},G={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},O=n("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1),Y=n("p",null,[i(" You can use "),n("code",null,"Density"),i(" prop to reduce combobox height and lower max height of list items. Available options are: "),n("code",null,"default"),i(", "),n("code",null,"comfortable"),i(", and "),n("code",null,"compact"),i(". ")],-1),q=n("p",null,[i("Use "),n("code",null,"solo"),i(", "),n("code",null,"outlined"),i(", "),n("code",null,"underlined"),i(", "),n("code",null,"filled"),i(" and "),n("code",null,"plain"),i(" options of "),n("code",null,"variant"),i(" prop to change the look of combobox. ")],-1),E=n("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),H=n("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),J=n("p",null,[i("Use "),n("code",null,"clearable"),i(" prop to clear combobox.")],-1),Le={__name:"combobox",setup(g){return(e,s)=>{const c=S,l=L,m=B,a=$,f=T,v=N,x=k;return V(),b(y,{class:"match-height"},{default:o(()=>[t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"Basic",code:j},{default:o(()=>[O,t(c)]),_:1},8,["code"])]),_:1}),t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"Density",code:M},{default:o(()=>[Y,t(m)]),_:1},8,["code"])]),_:1}),t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"Variant",code:G},{default:o(()=>[q,t(a)]),_:1},8,["code"])]),_:1}),t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"Multiple",code:W},{default:o(()=>[E,t(f)]),_:1},8,["code"])]),_:1}),t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"No data with chips",code:F},{default:o(()=>[H,t(v)]),_:1},8,["code"])]),_:1}),t(p,{cols:"12",md:"6"},{default:o(()=>[t(l,{title:"Clearable",code:z},{default:o(()=>[J,t(x)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Le as default};
