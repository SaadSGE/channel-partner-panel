<template>
  <VCard>
    <VCardTitle>Application Officer Assignments</VCardTitle>
    <VCardText>
      <VRow>
        <VCol cols="12" md="6">
          <AppAutocomplete v-model="selectedOfficer" :items="applicationOfficerOptions" item-title="full_name"
            item-value="id" label="Select Application Officer" placeholder="Search and select an officer" clearable />
        </VCol>
        <VCol cols="12" md="6" class="d-flex align-center">
          <VBtn color="primary" :disabled="!selectedOfficer" @click="assignApplicationOfficer">
            Assign Officer
          </VBtn>
        </VCol>
      </VRow>
      <VRow class="mt-4">
        <VCol cols="12">
          <VTable v-if="filteredOfficers.length">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="officer in filteredOfficers" :key="officer.id">
                <td>{{ officer.user.full_name }}</td>
                <td>{{ officer.user.email }}</td>
                <td>{{ officer.status }}</td>
              </tr>
            </tbody>
          </VTable>
          <VAlert v-else type="info" class="mt-2">
            No assigned officers found.
          </VAlert>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<script setup>
import { useApplicationListStore } from "@/@core/stores/applicationList";
import Swal from 'sweetalert2';
import { computed, onMounted, ref, watch } from 'vue';

const props = defineProps({
  applicationId: {
    type: String,
    required: true,
  },
})

const store = useApplicationListStore()

const selectedOfficer = ref(null)
const listSearch = ref('')

const applicationOfficerOptions = computed(() => store.applicationOfficerOptions)
const assignedOfficers = computed(() => store.applicationOfficers)

const filteredOfficers = computed(() => {
  if (!listSearch.value) return assignedOfficers.value

  const searchTerm = listSearch.value.toLowerCase()

  return assignedOfficers.value.filter(officer =>
    officer.full_name.toLowerCase().includes(searchTerm) ||
    officer.email.toLowerCase().includes(searchTerm) ||
    officer.pivot.status.toLowerCase().includes(searchTerm),
  )
})

const assignApplicationOfficer = async () => {
  try {
    if (!selectedOfficer.value) {
      errorMessage.value = "Please select an officer before assigning."

      return
    }

    // Show confirmation dialog
    const result = await Swal.fire({
      title: 'Confirm Assignment',
      text: "Are you sure you want to assign this application officer?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, assign it!',
    })

    // If user confirms, proceed with assignment
    if (result.isConfirmed) {
      const response = await store.assignApplicationOfficer(props.applicationId, selectedOfficer.value)



      // Check if the response contains any error data
      if (response && !response.status) {
        console.log('hello')
        console.log(response)
        throw new Error(response)
      }

      Swal.fire({
        icon: 'success',
        title: 'Assignment Successful',
        text: 'You have assigned the application officer successfully!',
        confirmButtonText: 'OK',
      })

      // Reset selected officer and fetch updated list
      selectedOfficer.value = null
      await fetchAssignedOfficers()
    }
  } catch (error) {


    Swal.fire({
      icon: 'error',
      title: 'Assignment Failed',
      text: error,
      confirmButtonText: 'OK',
    })
  }
}

const fetchAssignedOfficers = async () => {
  await store.fetchApplicationOfficers(props.applicationId)
}

onMounted(async () => {
  await Promise.all([
    fetchAssignedOfficers(),
    store.loadAllApplicationOfficers(),
  ])
})

watch(() => props.applicationId, fetchAssignedOfficers)
</script>
