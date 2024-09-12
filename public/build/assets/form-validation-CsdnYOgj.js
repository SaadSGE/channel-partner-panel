import{r as u,b as O,i as D,a as Y,d as x,l as $,p as S,c as j,f as I,e as R,u as J}from"./validators-YBsKPVoB.js";import{r as d,o as g,f as P,e as o,b as l,n as e,a3 as V,a7 as N,v as y,a6 as U,d as L}from"./main-D9zt6FS9.js";import{_ as B}from"./AppTextField-oHRE5LRH.js";import{V as A,a as i}from"./VRow-Bdl3ZYmP.js";import{V as E}from"./VForm-B_eCVbyF.js";import{_ as z}from"./AppCardCode-BGuqUaVi.js";import"./helpers-vQP_iiD7.js";import"./form-q5gDXcS3.js";import"./VTextField-CUQ4ODJV.js";/* empty css                   */import"./VCounter-Bph75DJA.js";import"./index-D2UtjLby.js";import"./index-Dt854w9Y.js";import"./VField-BxAEuVAu.js";import"./easing-CjukEv2V.js";import"./VInput-BbpEo-gz.js";import"./forwardRefs-C-GTDzx5.js";/* empty css              */import"./vue3-perfect-scrollbar.esm-B7EL2YIq.js";import"./VCard-Bydak4v0.js";import"./VAvatar-Cz4Df1UN.js";import"./VImg-BDreuwh-.js";import"./VCardText-teADQ9Oh.js";import"./VDivider-CipwbVrw.js";const G={__name:"DemoFormValidationValidationTypes",setup(T){const w=d(""),h=d(""),F=d(""),n=d(""),m=d(""),c=d(""),b=d(""),s=d(""),p=d(""),v=d(""),f=d(""),q=d(""),k=d();return(r,a)=>{const C=B;return g(),P(e(E),{ref_key:"refForm",ref:k,onSubmit:a[13]||(a[13]=U(()=>{},["prevent"]))},{default:o(()=>[l(A,null,{default:o(()=>[l(i,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(w),"onUpdate:modelValue":a[0]||(a[0]=t=>V(w)?w.value=t:null),"persistent-placeholder":"",placeholder:"This field is required",rules:["requiredValidator"in r?r.requiredValidator:e(u)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(h),"onUpdate:modelValue":a[1]||(a[1]=t=>V(h)?h.value=t:null),"persistent-placeholder":"",placeholder:"Enter Number between 10 & 20",rules:["requiredValidator"in r?r.requiredValidator:e(u),("betweenValidator"in r?r.betweenValidator:e(O))(e(h),10,20)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(F),"onUpdate:modelValue":a[2]||(a[2]=t=>V(F)?F.value=t:null),"persistent-placeholder":"",placeholder:"Must only consist of numbers",rules:["requiredValidator"in r?r.requiredValidator:e(u),"integerValidator"in r?r.integerValidator:e(D)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(n),"onUpdate:modelValue":a[3]||(a[3]=t=>V(n)?n.value=t:null),"persistent-placeholder":"",placeholder:"Must match the specified regular expression : ^([0-9]+)$ - numbers only",rules:["requiredValidator"in r?r.requiredValidator:e(u),("regexValidator"in r?r.regexValidator:e(Y))(e(n),"^([0-9]+)$")]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(m),"onUpdate:modelValue":a[4]||(a[4]=t=>V(m)?m.value=t:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters",rules:["requiredValidator"in r?r.requiredValidator:e(u),"alphaValidator"in r?r.alphaValidator:e(x)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(c),"onUpdate:modelValue":a[5]||(a[5]=t=>V(c)?c.value=t:null),"persistent-placeholder":"",placeholder:"Length must be exactly 3 characters.",rules:["requiredValidator"in r?r.requiredValidator:e(u),("lengthValidator"in r?r.lengthValidator:e($))(e(c),3)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(b),"onUpdate:modelValue":a[6]||(a[6]=t=>V(b)?b.value=t:null),"persistent-placeholder":"",placeholder:"Password Input Field",type:"password",rules:["requiredValidator"in r?r.requiredValidator:e(u),"passwordValidator"in r?r.passwordValidator:e(S)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(s),"onUpdate:modelValue":a[7]||(a[7]=t=>V(s)?s.value=t:null),"persistent-placeholder":"",placeholder:"The digits field must be numeric and exactly contain 3 digits",rules:["requiredValidator"in r?r.requiredValidator:e(u),("lengthValidator"in r?r.lengthValidator:e($))(e(s),3),"integerValidator"in r?r.integerValidator:e(D)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(p),"onUpdate:modelValue":a[8]||(a[8]=t=>V(p)?p.value=t:null),"persistent-placeholder":"",placeholder:"Repeat password must match",type:"password",rules:["requiredValidator"in r?r.requiredValidator:e(u),("confirmedValidator"in r?r.confirmedValidator:e(j))(e(p),e(b))],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(v),"onUpdate:modelValue":a[9]||(a[9]=t=>V(v)?v.value=t:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters, numbers, dashes or underscores",rules:["requiredValidator"in r?r.requiredValidator:e(u),"alphaDashValidator"in r?r.alphaDashValidator:e(I)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(f),"onUpdate:modelValue":a[10]||(a[10]=t=>V(f)?f.value=t:null),"persistent-placeholder":"",placeholder:"Must be a valid email",rules:["requiredValidator"in r?r.requiredValidator:e(u),"emailValidator"in r?r.emailValidator:e(R)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(C,{modelValue:e(q),"onUpdate:modelValue":a[11]||(a[11]=t=>V(q)?q.value=t:null),"persistent-placeholder":"",placeholder:"Must be a valid url",rules:["requiredValidator"in r?r.requiredValidator:e(u),"urlValidator"in r?r.urlValidator:e(J)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(N,{type:"submit",onClick:a[12]||(a[12]=t=>{var M;return(M=e(k))==null?void 0:M.validate()})},{default:o(()=>[y(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}},H={__name:"DemoFormValidationValidatingMultipleRules",setup(T){const w=d(),h=d(),F=d(),n=d(),m=d(),c=d(!1),b=d(!1);return(s,p)=>{const v=B;return g(),P(e(E),{ref_key:"refForm",ref:F,onSubmit:U(()=>{},["prevent"])},{default:o(()=>[l(A,null,{default:o(()=>[l(i,{cols:"12",md:"6"},{default:o(()=>[l(v,{modelValue:e(w),"onUpdate:modelValue":p[0]||(p[0]=f=>V(w)?w.value=f:null),label:"Name",placeholder:"Your Name",rules:["requiredValidator"in s?s.requiredValidator:e(u)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(v,{modelValue:e(h),"onUpdate:modelValue":p[1]||(p[1]=f=>V(h)?h.value=f:null),label:"Email",placeholder:"Your Email",rules:["requiredValidator"in s?s.requiredValidator:e(u),"emailValidator"in s?s.emailValidator:e(R)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(v,{modelValue:e(n),"onUpdate:modelValue":p[2]||(p[2]=f=>V(n)?n.value=f:null),label:"Password",type:e(c)?"text":"password","append-inner-icon":e(c)?"tabler-eye-off":"tabler-eye",placeholder:"Enter Password",rules:["requiredValidator"in s?s.requiredValidator:e(u),"passwordValidator"in s?s.passwordValidator:e(S)],autocomplete:"on","onClick:appendInner":p[3]||(p[3]=f=>c.value=!e(c))},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(v,{modelValue:e(m),"onUpdate:modelValue":p[4]||(p[4]=f=>V(m)?m.value=f:null),label:"Confirm Password",type:e(b)?"text":"password",placeholder:"Confirm Password","append-inner-icon":e(m)?"tabler-eye-off":"tabler-eye",rules:["requiredValidator"in s?s.requiredValidator:e(u),("confirmedValidator"in s?s.confirmedValidator:e(j))(e(m),e(n))],autocomplete:"on","onClick:appendInner":p[5]||(p[5]=f=>b.value=!e(b))},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(N,{type:"submit",onClick:p[6]||(p[6]=f=>{var q;return(q=e(F))==null?void 0:q.validate()})},{default:o(()=>[y(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}},K={__name:"DemoFormValidationSimpleFormValidation",setup(T){const w=d(""),h=d(""),F=d();return(n,m)=>{const c=B;return g(),P(e(E),{ref_key:"refForm",ref:F,onSubmit:U(()=>{},["prevent"])},{default:o(()=>[l(A,null,{default:o(()=>[l(i,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:e(w),"onUpdate:modelValue":m[0]||(m[0]=b=>V(w)?w.value=b:null),label:"First Name",placeholder:"John",rules:["requiredValidator"in n?n.requiredValidator:e(u)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12",md:"6"},{default:o(()=>[l(c,{modelValue:e(h),"onUpdate:modelValue":m[1]||(m[1]=b=>V(h)?h.value=b:null),label:"Email",placeholder:"john@email.com",rules:["requiredValidator"in n?n.requiredValidator:e(u),"emailValidator"in n?n.emailValidator:e(R)]},null,8,["modelValue","rules"])]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(N,{type:"submit",onClick:m[2]||(m[2]=b=>{var s;return(s=e(F))==null?void 0:s.validate()})},{default:o(()=>[y(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}},Q={ts:`<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'

const firstName = ref('')
const email = ref('')

const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="john@email.com"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const firstName = ref('')
const email = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="john@email.com"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},W={ts:`<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'

const name = ref()
const email = ref()
const refForm = ref<VForm>()
const password = ref()
const confirmPassword = ref()
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="name"
          label="Name"
          placeholder="Your Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="Your Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          label="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
          placeholder="Enter Password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="confirmPassword"
          label="Confirm Password"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          placeholder="Confirm Password"
          :append-inner-icon="confirmPassword ? 'tabler-eye-off' : 'tabler-eye'"
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
          @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const name = ref()
const email = ref()
const refForm = ref()
const password = ref()
const confirmPassword = ref()
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="name"
          label="Name"
          placeholder="Your Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="Your Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          label="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
          placeholder="Enter Password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="confirmPassword"
          label="Confirm Password"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          placeholder="Confirm Password"
          :append-inner-icon="confirmPassword ? 'tabler-eye-off' : 'tabler-eye'"
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
          @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},X={ts:`<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length must be exactly 3 characters."
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length must be exactly 3 characters."
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Z=L("p",null,[y("Use "),L("code",null,"Rules"),y(" prop to validate the input.")],-1),ye={__name:"form-validation",setup(T){return(w,h)=>{const F=K,n=z,m=H,c=G;return g(),P(A,null,{default:o(()=>[l(i,{cols:"12"},{default:o(()=>[l(n,{title:"Simple Form Validation",code:Q},{default:o(()=>[Z,l(F)]),_:1},8,["code"])]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(n,{title:"Validating Multiple Rules",code:W},{default:o(()=>[l(m)]),_:1},8,["code"])]),_:1}),l(i,{cols:"12"},{default:o(()=>[l(n,{title:"Validation Types",code:X},{default:o(()=>[l(c)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ye as default};
