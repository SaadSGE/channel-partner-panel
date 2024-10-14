<script setup>
definePage({
  meta: {
    action: 'read',
    subject: 'dashboard',
  },
});
import { useCourseRequestStore } from '@/@core/stores/courseRequestStore';
import { onMounted, ref } from 'vue';


const courseRequestStore = useCourseRequestStore()

const headers = [
  { title: 'University Name', key: 'university_name' },
  { title: 'Course Name', key: 'course_name' },
  { title: 'Intake Name', key: 'intake' },
  { title: 'Company Name', key: 'user.company_name_with_email' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const loading = ref(false)

onMounted(async () => {
  loading.value = true
  await courseRequestStore.fetchCourseRequests()
  loading.value = false
})

const handleComplete = async (id) => {
  try {
    await courseRequestStore.completeCourseRequest(id)
    // You can add a success message here if needed
  } catch (error) {
    // Handle error (e.g., show an error message)
    console.error('Failed to complete course request:', error)
  }
}
</script>

<template>
  <VCard title="Course Request List">
    <VCardText>
      <VDataTable :headers="headers" :items="courseRequestStore.courseRequests" :loading="loading" class="elevation-1">
        <template v-slot:item.actions="{ item }">
          <VBtn color="primary" size="small" @click="handleComplete(item.raw.id)">
            Complete
          </VBtn>
        </template>
      </VDataTable>
    </VCardText>
  </VCard>
</template>
