<script setup>
// const {
//   data: productList,
//   error,
// } = await useApi('pages/datatable')
// console.log(productList.value)
import { useApplicationListStore } from '@/@core/stores/applicationList';
const store = useApplicationListStore();
const applicationLists = ref();
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
    key: 'student_first_name',
  },


]




const resolveStatusColor = status => {
  if (status === 'Confirmed')
    return 'primary'
  if (status === 'Completed')
    return 'success'
  if (status === 'Cancelled')
    return 'error'
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



    </VDataTable>
  </VCard>
  </div>
</template>
<style scoped>

</style>
