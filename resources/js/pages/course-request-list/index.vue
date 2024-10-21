<script setup>
definePage({
  meta: {
    action: 'enable',
    subject: 'course-request-list',
  },
});
import { useCourseRequestStore } from '@/@core/stores/courseRequestStore';
import Swal from 'sweetalert2';
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
    loading.value = true
    await courseRequestStore.completeCourseRequest(id)

    // Reload the course requests after completion
    await courseRequestStore.fetchCourseRequests();
    loading.value = false

    Swal.fire({
      icon: 'success',
      title: 'Course request completed successfully',
      showConfirmButton: false,
      timer: 1500
    })
  } catch (error) {
    console.error('Failed to complete course request:', error)
  }
}
</script>

<template>
  <VCard title="Course Request List">
    <VCardText>
      <VDataTable :headers="headers" :items="courseRequestStore.courseRequests" :loading="loading" class="elevation-1">
        <template v-slot:item.actions="{ item }">
          <VBtn color="primary" size="small" @click="handleComplete(item.id)">
            Complete
          </VBtn>
        </template>
      </VDataTable>
    </VCardText>
  </VCard>
</template>
