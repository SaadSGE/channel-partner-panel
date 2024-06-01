<script  setup>
import { commonFunction } from "@/@core/stores/commonFunction";
import { defineEmits, defineProps, onMounted, ref, watch } from "vue";
onMounted(async () => {
  if (commonFunctionStore.courseDetails.length === 0) {
    await commonFunctionStore.getCourseDetails();
  }

  countries.value = commonFunctionStore.countries;
});

const props = defineProps({
  isNavDrawerOpen: Boolean,
  editedItem: Object,
  universities: Array,
});

const commonFunctionStore = commonFunction();
const countryToApply = ref("");
const universityName = ref("");
const universityAddress = ref("");
const universityLogo = ref("");
const newUniversityLogo = ref("")
const rawUniversityLogo = ref([]);
const countries = ref([]);
const intakes = ref([]);
const universities = ref([]);
const isLoading = ref(false);
const courseTypes = ["Graduate", "Post Graduate"];
const id = ref(null);
const refForm = ref(null);
const emits = defineEmits(["update:isNavDrawerOpen"]);
watch(
  () => props.editedItem,
  async (newValue) => {
    if (newValue) {
      countryToApply.value = newValue.country_id;
      universityName.value = newValue.name;
      universityAddress.value = newValue.address;
      universityLogo.value = newValue.logo;
      id.value = newValue.id;
    }
  },
  { immediate: true }
);
const urlToFile = async (url, filename, mimeType) => {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  return new File([buffer], filename, { type: mimeType });
};

// Placeholder for validation rule
const requiredValidator = (value) => !!value || "Required field";

const updateUniversity = async () => {
  refForm.value.validate().then((success) => {
    if (!success.valid) {
      return;
    } else {
      submitUniversity();
    }
  });
};
const showFileAgent = ref(false);
const submitUniversity = async () => {
  const universityData = {
    countryId: countryToApply.value,
    name: universityName.value,
    address: universityAddress.value,
    logo: showFileAgent.value === false ? universityLogo.value : newUniversityLogo.value[0].upload.data,
  };

  try {
    isLoading.value = true;
    await commonFunctionStore.updateUniversity(id.value,universityData);
    isLoading.value = false;

    universityName.value = "";
    universityAddress.value = "";
    universityLogo.value = null;
    countryToApply.value = "";
    emits("update:isNavDrawerOpen", false);
  } catch (error) {
    console.error("Failed to add university:", error);
  }
};
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
        <h6 class="text-h6">Edit University</h6>
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
      @submit.prevent="updateUniversity"
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
        <label class="mb-2" style="font-size: 0.9rem">University Logo</label>

        <div class="image-container" v-if="!showFileAgent">
          <VImg :src="universityLogo" aspect-ratio="16/9" height="150" />
        </div>

        <VueFileAgent
          v-if="showFileAgent"
          :helpText="'Choose university Logo'"
          :deletable="true"
          v-model="newUniversityLogo"
          v-model:rawModelValue="newUniversityLogo"
          :rules="[requiredValidator]"
        ></VueFileAgent>
      </div>
      <VBtn
      v-if="showFileAgent"
        @click="showFileAgent = false"
        color="info"
        class="mb-2 mt-2"
        style="float: right"
      >
      <VIcon

        start
        icon="tabler-arrow-left"
      />
      Back
    </VBtn>

      <VBtn
        v-if="!showFileAgent"
        @click="showFileAgent = true"
        color="success"
        class="mb-2 mt-2"
        style="float: right"
      >
        Change Logo
        <VIcon end icon="tabler-cloud-upload" />
      </VBtn>
      <VBtn
        :loading="isLoading"
        :disabled="isLoading"
        color="primary"
        @click="updateUniversity"
        class="mt-4"
        block
        >Update</VBtn
      >
    </VForm>
  </VNavigationDrawer>
</template>
<style lang="scss">
.form-padding {
  padding: 0rem 2rem 2rem 2rem;
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
        background-color: rgba(
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
.image-container {
  border: 1px dotted gray;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
