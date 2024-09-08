<script  setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { defineEmits, defineProps, ref } from "vue";
const loadings = ref([]);

const commonFunctionStore = commonFunction();
const countryToApply = ref("");
const universityName = ref("");
const universityAddress = ref("");
const universityLogo = ref();
const rawUniversityLogo = ref();
const countries = ref([]);
const intakes = ref([]);
const universities = ref([]);
const isLoading = ref(false);
const courseTypes = ["Graduate", "Post Graduate"];
const props = defineProps({
  isNavDrawerOpen: Boolean,
});
const refForm = ref(null);
const emits = defineEmits(["update:isNavDrawerOpen"]);
onMounted(async () => {
  if (commonFunctionStore.countries.length === 0) {
    await commonFunctionStore.getCountries();
  }
  countries.value = commonFunctionStore.countries;

});

// Placeholder for validation rule
const requiredValidator = (value) => !!value || "Required field";
const uploadUrl = '/api/university-logo-upload'
const addUniversity = async () => {
  refForm.value.validate().then((success) => {
    if (!success.valid) {
      return;
    }
    else {
      submitUniversity()
    }
  });

};
const submitUniversity = async() =>{
  const universityData = {
    countryId: countryToApply.value,
    name: universityName.value,
    address: universityAddress.value,
    logo: universityLogo.value[0].upload.data,
  };

  try {
    isLoading.value = true;
    await commonFunctionStore.addUniversity(universityData);
    isLoading.value = false;
    // Clear the form fields
    universityName.value = "";
    universityAddress.value = "";
    universityLogo.value = null;
    countryToApply.value = "";
    emits("update:isNavDrawerOpen", false);
  } catch (error) {
    console.error("Failed to add university:", error);
  }
}
</script>
<template>
  <VNavigationDrawer
    v-model="props.isNavDrawerOpen"
    temporary
    touchless
    border="none"
    location="end"
    width="400"
    elevation="10"
    :scrim="false"
    class="app-customizer"
  >
    <div class="customizer-heading d-flex align-center justify-space-between">
      <div>
        <h6 class="text-h6">Add New University</h6>
      </div>

      <div class="d-flex align-center gap-1">
        <VBtn
          icon
          variant="text"
          color="medium-emphasis"
          size="small"
          @click="emits('update:isNavDrawerOpen', false)"
        >
          <VIcon icon="tabler-x" color="high-emphasis" size="24" />
        </VBtn>
      </div>
    </div>

    <VDivider />
    <VForm
      ref="refForm"
      @submit.prevent="addUniversity"
      class="form-padding mt-4"
    >
      <AppAutocomplete
        v-model="countryToApply"
        :items="countries"
        :item-title="(item) => item.name"
        :item-value="(item) => item.id"
        label="Country"
        placeholder="Select Country"
        :rules="[requiredValidator]"
        class="mb-2"
      />

      <AppTextField
        v-model="universityName"
        label="University Name"
        :rules="[requiredValidator]"
        class="mb-2"
      />
      <AppTextField
        v-model="universityAddress"
        label="University Address"
        :rules="[requiredValidator]"
        class="mb-2"
      />

      <div class="mb-2">
        <label class="mb-2" style="font-size: 0.9rem;">University Logo</label>

        <VueFileAgent
          :multiple="false"
          :uploadUrl="uploadUrl"
          :helpText="'Choose university Logo'"
          :deletable="true"
          v-model="universityLogo"
          v-model:rawModelValue="rawUniversityLogo"
          :rules="[requiredValidator]"
        ></VueFileAgent>
      </div>

      <VBtn
        :loading="isLoading"
        :disabled="isLoading"
        color="primary"
        @click="addUniversity"
        class="mt-4"
        block
        >Add</VBtn
      >
    </VForm>
  </VNavigationDrawer>
</template>
<style lang="scss">
.form-padding {
  padding-block: 0 2rem;
  padding-inline: 2rem;
}

.app-customizer {
  .customizer-section {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .customizer-heading {
    padding-block: 1rem;
    padding-inline: 1.5rem;
  }

  .custom-input-wrapper {
    .v-col {
      padding-inline: 10px;
    }

    .v-label.custom-input {
      border: none;
      color: rgb(var(--v-theme-on-surface));
      outline: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    }
  }

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }

  .v-label.custom-input.active {
    border-color: transparent;
    outline: 2px solid rgb(var(--v-theme-primary));
  }

  .v-label.custom-input:not(.active):hover {
    border-color: rgba(var(--v-border-color), 0.22);
  }

  .customizer-skins {
    .custom-input.active {
      .customizer-skins-icon-wrapper {
        background-color:
          rgba(
            var(--v-global-theme-primary),
            var(--v-selected-opacity)
          );
      }
    }
  }

  .app-customizer-primary-colors {
    .primary-color-wrapper:not(.active) {
      &:hover {
        outline-color: rgba(var(--v-border-color), 0.22) !important;
      }
    }
  }
}

.app-customizer-toggler {
  position: fixed !important;
  inset-block-start: 20%;
  inset-inline-end: 0;
}
</style>
