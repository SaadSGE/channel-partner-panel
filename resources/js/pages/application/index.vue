<script setup>
definePage({
  meta: {
    action: 'read',
    subject: 'application',
  },
})
import { useApplicationListStore } from '@/@core/stores/applicationList';
import Swal from 'sweetalert2';
import { useRouter } from "vue-router";
const store = useApplicationListStore();
const applicationLists = ref();
const router = useRouter();

onMounted(async () => {
  applicationLists.value = await store.getApplicationList();
});
const search = ref('')

// headers
const headers = [
  {
    title: 'APPLICATION ID',
    key: 'application_id',
  },
  {
    title: 'Student Name',
    key: 'student.name',
  },

{
    title: 'University/Course Details',
    key: 'university.name',
  },
  {
    title: 'Status',
    key: 'status',
  },

  {
    title: 'Date Added',
    key: 'created_at',
  },
  {
    title: 'Action',
    key: 'action',
    sortable:false
  },

]




const resolveStatusColor = status => {
  if (status === 0)
    return 'primary'
  if (status === 1)
    return 'success'
  if (status === 2)
    return 'warning'
    if (status === 3)
    return 'info'
}

const resolveStatusName = status => {
  if (status === 0)
    return 'Pending'
  if (status === 1)
    return 'Application Received'
  if (status === 2)
    return 'Application ok for processing'
    if (status === 3)
    return 'Case Closed'
}

const categoryIconFilter = categoryName => {
  const index = categoryIcons.findIndex(category => category.name === categoryName)
  if (index !== -1)
    return [{
      icon: categoryIcons[index].icon,
      color: categoryIcons[index].color,
    }]

  return [{
    icon: 'tabler-help-circle',
    color: 'primary',
  }]
}

const viewApplicationDetail = (applicationId) => {
  router.push({ name: 'application-details', params: { id: applicationId } });
};

const deleteItem = async (itemId) => {
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
      await store.deleteItem(itemId);
      applicationLists.value = await store.getApplicationList();
      Swal.fire('Deleted!', 'The item has been deleted.', 'success');
    } catch (error) {
      Swal.fire('Error!', 'There was an error deleting the item.', 'error');
    }
  }
}


</script>

<template>
  <div>
    <VCard >


    <VCardText>
      <VRow>
        <VCol
          cols="12"
          offset-md="8"
          md="4"
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
      </VRow>
    </VCardText>

    <!-- 👉 Data Table  -->
    <VDataTable
      :headers="headers"
      :items="applicationLists || []"
      :search="search"
      :items-per-page="5"
      class="text-no-wrap color-black"
    >
    <template #item.student.name="{ item }">
        <p>{{ item.student.first_name}} {{ item.student.last_name}}</p>
      </template>
    <template #item.university.name="{ item }">
      <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-medium text-truncate text-high-emphasis">{{ item.university.name }}</span>
            <span class="text-md">{{ item.course.name }}</span>
            <span class="text-md">{{ item.intake.name }}</span>
          </div>
      </template>
      <template #item.status="{ item }">
        <VChip
          :color="resolveStatusColor(item.status)"
          :class="`text-${resolveStatusColor(item.status)}`"
          size="small"
          class="font-weight-medium"
        >
          {{ resolveStatusName(item.status) }}
        </VChip>
      </template>
      <template #item.action="{ item }">
        <div class="d-flex flex-column ms-3">
          <IconBtn @click="viewApplicationDetail(item.id)">
          <VIcon icon="tabler-eye" />
        </IconBtn>
        <IconBtn @click="deleteItem(item.id)">
          <VIcon icon="tabler-trash" />
        </IconBtn>
        </div>

      </template>

    </VDataTable>
  </VCard>
  </div>
</template>
<style scoped>

</style>
