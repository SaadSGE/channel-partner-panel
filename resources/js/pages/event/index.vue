<script lang="js" setup>
definePage({
  meta: {
    action: 'read',
    subject: 'dashboard',
  },
})
import { commonFunction } from "@/@core/stores/commonFunction";
import Swal from 'sweetalert2';
import { onMounted, ref } from "vue";
import EventAdd from "./add.vue";
import EventEdit from "./edit.vue";
const commonFunctionStore = commonFunction();
const events = ref([]);
const isNavDrawerOpen = ref(false)
const isNavDrawerOpenEdit = ref(false)
onMounted(async () => {
  await getEvents();
});

const getEvents = async () => {
  isLoading.value = true
  await commonFunctionStore.getEvents();
  events.value = commonFunctionStore.events;
  isLoading.value = false
}

const headers = [
  { title: 'Event Name', key: 'name' },
  { title: 'Description', key: 'description' },
  { title: 'Actions', key: 'actions', sortable: false },
];
const defaultItem = ref({
  id: '',
  name: '',
})
const isLoading = ref(false)
const editedItem = ref(defaultItem.value)
const editItem = item => {
  editedItem.value = item
  isNavDrawerOpenEdit.value = true
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
      await commonFunctionStore.deleteEvent(data.id);
      events.value = commonFunctionStore.events;
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


  <EventAdd :isNavDrawerOpen="isNavDrawerOpen" @update:isNavDrawerOpen="isNavDrawerOpen = $event"
    @updateEvents="getEvents" />
  <EventEdit :isNavDrawerOpen="isNavDrawerOpenEdit" @update:isNavDrawerOpen="isNavDrawerOpenEdit = $event"
    :editedItem="editedItem" />
  <VCard :loading="isLoading">
    <VCardText>
      <VRow>
        <VCol cols="12" offset-md="7" md="3">
          <AppTextField v-model="search" placeholder="Search ..." append-inner-icon="tabler-search" single-line
            hide-details dense outlined />
        </VCol>
        <VCol cols="12" md="2">
          <VBtn style="z-index: 1001;" @click="isNavDrawerOpen = true">Add New</VBtn>
        </VCol>

      </VRow>
    </VCardText>
    <VDataTable :headers="headers" :items="events || []" :items-per-page="10"
      class="text-no-wrap color-black table-padding">

      <template #item.actions="{ item }">
        <div class="d-flex gap-1" v-if="$can('edit', 'event')">
          <IconBtn @click="editItem(item)">
            <VIcon icon="tabler-edit" />
          </IconBtn>
          <IconBtn @click="deleteItem(item)" v-if="$can('delete', 'event')">
            <VIcon icon="tabler-trash" />
          </IconBtn>
        </div>
      </template>
    </VDataTable>
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
