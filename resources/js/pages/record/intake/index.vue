<script lang="js" setup>
definePage({
  meta: {
    action: 'read',
    subject: 'record',
  },
})
import { commonFunction } from "@/@core/stores/commonFunction";
import Swal from 'sweetalert2';
import { onMounted, ref } from "vue";
import IntakeAdd from "./add.vue";
import IntakeEdit from "./edit.vue";
const commonFunctionStore = commonFunction();
const countryToApply = ref("");
const universityName = ref("");
const universityAddress = ref("");
const universityLogo = ref(null);
const countries = ref([]);
const intakes = ref([]);
const universities = ref([]);
const courseTypes = ["Graduate", "Post Graduate"];
const isNavDrawerOpen = ref(false)
const isNavDrawerOpenEdit= ref(false)
onMounted(async () => {
  isLoading.value = true
  if (commonFunctionStore.countries.length === 0) {
    await commonFunctionStore.getCountries();
  }
  if (commonFunctionStore.courses.length === 0) {
    await commonFunctionStore.getCourses();
  }
  if (commonFunctionStore.intakes.length === 0) {
    await commonFunctionStore.getIntakes();
  }
  if (commonFunctionStore.universities.length === 0) {
    await commonFunctionStore.getUniversities();
  }
  if (commonFunctionStore.courseDetails.length === 0) {
    await commonFunctionStore.getCourseDetails();
  }

  countries.value = commonFunctionStore.countries;
  intakes.value = commonFunctionStore.intakes;
  universities.value = commonFunctionStore.universities;
  isLoading.value = false
});

const headers = [
  { title: 'Name', key: 'name' },
  { title: 'Actions', key: 'actions', sortable: false },
];
const defaultItem = ref({
  id: '',
  name: '',
})
const editedIndex = ref(-1)
const isLoading = ref(false)
const editedItem =ref(defaultItem.value)
const editItem = item => {
  editedItem.value = item
  console.log(editedItem.value)
  isNavDrawerOpenEdit.value= true
}

const deleteItem = async (item) => {
  const data = { ...item };
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to delete this item?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel'
  });

  if (result.isConfirmed) {
    try {
      await commonFunctionStore.deleteIntake(data.id);
      intakes.value = commonFunctionStore.intakes;
      Swal.fire(
        'Deleted!',
        'The item has been deleted.',
        'success'
      );
    } catch (error) {
      Swal.fire(
        'Error!',
        'There was an error deleting the item.',
        'error'
      );
    }
  }
};



</script>

<template>


  <IntakeAdd
      :isNavDrawerOpen="isNavDrawerOpen"
      @update:isNavDrawerOpen="isNavDrawerOpen = $event"
    />
    <IntakeEdit
      :isNavDrawerOpen="isNavDrawerOpenEdit"
      @update:isNavDrawerOpen="isNavDrawerOpenEdit = $event"
      :editedItem="editedItem"
    />
  <VCard :loading="isLoading">
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          offset-md="7"
          md="3"
        >
          <AppTextField
            v-model="search"
            placeholder="Search ..."
            append-inner-icon="tabler-search"
            single-line
            hide-details
            dense
            outlined

          />
        </VCol>
        <VCol cols="12" md="2">
          <VBtn style="z-index: 1001;"
      @click="isNavDrawerOpen = true">Add New</VBtn>
        </VCol>

      </VRow>
    </VCardText>
    <VDataTable
      :headers="headers"
      :items="intakes || []"
      :items-per-page="5"
      class="text-no-wrap color-black table-padding"
    >

      <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn @click="editItem(item)">
          <VIcon icon="tabler-edit" />
        </IconBtn>
        <IconBtn @click="deleteItem(item)">
          <VIcon icon="tabler-trash" />
        </IconBtn>
      </div>
    </template>
    </VDataTable>
  </VCard>
</template>

<style lang="scss">
.form-padding {
  padding: 0rem 2rem 2rem 2rem;
}
.table-padding {
  padding: 0rem 2rem 2rem 2rem;
}
</style>
