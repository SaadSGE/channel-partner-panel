<script setup>
definePage({
  meta: {
    action: 'read',
    subject: 'record',
  },
})
import { commonFunction } from "@/@core/stores/commonFunction";
import Swal from "sweetalert2";
import { ref, watch } from "vue";
import UniversityAdd from "./add.vue";
import UniversityEdit from "./edit.vue";

const commonFunctionStore = commonFunction();
const countryToApply = ref("");
const universityName = ref("");
const universityAddress = ref("");
const universityLogo = ref(null);
const countries = ref([]);
const intakes = ref([]);
const universities = ref([]);
const courseTypes = ["Graduate", "Post Graduate"];
const isNavDrawerOpen = ref(false);
const isNavDrawerOpenEdit = ref(false);
const isLoading = ref(false);
const searchQuery = ref("");
const itemsPerPage = ref(10);
const page = ref(1);
const totalUniversities = ref(0);
const sortBy = ref();
const orderBy = ref();
const headers = [
  { title: 'Country', key: 'country.name' },
  { title: 'Name', key: 'name' },
  { title: 'Logo', key: 'logo' },
  { title: 'Address', key: 'address' },
  { title: 'Actions', key: 'actions', sortable: false },
];

const defaultItem = ref({
  id: 1,
  country: '',
  name: '',
  logo: '',
  address: '',
});
const editedIndex = ref(-1);
const editedItem = ref(defaultItem.value);

// Fetch data on mounted


const fetchUniversities = async () => {
    isLoading.value = true;
    try {
        const response = await commonFunctionStore.getUniversities(
            page.value,
            searchQuery.value,
            itemsPerPage.value,
            sortBy.value,
        );
        universities.value = response.data; // Assuming response contains data in data attribute
        totalUniversities.value = response.total; // Assuming response contains total count in total attribute
    } catch (error) {
        console.error("Failed to fetch universities:", error);
    } finally {
        isLoading.value = false;
    }
};

// Watchers for search query and pagination
watch([searchQuery], () => {
    fetchUniversities();
});

const editItem = (item) => {
  editedIndex.value = universities.value.indexOf(item);
  editedItem.value = { ...item };
  isNavDrawerOpenEdit.value = true;
};

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
      await commonFunctionStore.deleteUniversity(data.id);
      fetchUniversities(); // Refresh data after deletion
      Swal.fire('Deleted!', 'The item has been deleted.', 'success');
    } catch (error) {
      Swal.fire('Error!', 'There was an error deleting the item.', 'error');
    }
  }
};
const updateOptions = (options) => {
  sortBy.value = options.sortBy[0]?.key;
  orderBy.value = options.sortBy[0]?.order;
  fetchUniversities();
};
</script>

<template>
  <UniversityAdd
    :isNavDrawerOpen="isNavDrawerOpen"
    @update:isNavDrawerOpen="isNavDrawerOpen = $event"
  />
  <UniversityEdit
    :isNavDrawerOpen="isNavDrawerOpenEdit"
    @update:isNavDrawerOpen="isNavDrawerOpenEdit = $event"
    :editedItem="editedItem"
  />
  <VCard :loading="isLoading">
    <VCardText>
      <VRow>
        <VCol cols="12" offset-md="7" md="3">
          <AppTextField
            v-model="searchQuery"
            placeholder="Search ..."
            append-inner-icon="tabler-search"
            single-line
            hide-details
            dense
            outlined
          />
        </VCol>
        <VCol cols="12" md="2">
          <VBtn style="z-index: 1001;" @click="isNavDrawerOpen = true">Add New</VBtn>
        </VCol>
      </VRow>
    </VCardText>
    <VDataTableServer
      :headers="headers"
      :items="universities || []"
      :items-per-page="itemsPerPage"
      class="text-no-wrap color-black table-padding"
      v-model:items-per-page="itemsPerPage"
      v-model:page="page"
      :items-length="totalUniversities"
       @update:options="updateOptions"
    >
      <template #item.logo="{ item }">
        <VImg :src="item.logo" width="100" height="100"/>
      </template>
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
      <template #bottom>
        <TablePagination
          v-model:page="page"
          :items-per-page="itemsPerPage"
          :total-items="totalUniversities"
        />
      </template>
    </VDataTableServer>
  </VCard>
</template>

<style lang="scss">
.form-padding {
  padding-block: 0 2rem;
  padding-inline: 2rem;
}

.table-padding {
  padding-block: 0 2rem;
  padding-inline: 2rem;
}
</style>
