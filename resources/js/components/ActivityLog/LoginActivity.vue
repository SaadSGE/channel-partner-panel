<template>
  <VCard title="Recent Login Activity">
    <VCardText>
      <VTimeline side="end" align="start" line-inset="8" truncate-line="start" density="compact">
        <VTimelineItem v-for="activity in loginActivities" :key="activity.id" dot-color="primary" size="x-small">
          <div class="d-flex justify-space-between align-center flex-wrap mb-2">
            <span class="app-timeline-title">Login</span>
            <span class="app-timeline-meta">{{ formatDate(activity.created_at) }}</span>
          </div>
          <div class="app-timeline-text mt-1">
            IP: {{ activity.properties.ip }}
          </div>
        </VTimelineItem>
      </VTimeline>
    </VCardText>
  </VCard>
</template>

<script setup>
import { useAuthStore } from '@/@core/stores/auth';
import { onMounted, ref } from 'vue';

const authStore = useAuthStore();
const loginActivities = ref([]);

const fetchLoginActivity = async () => {
  try {
    const response = await authStore.getLoginActivity();
    loginActivities.value = response.data;
  } catch (error) {
    console.error('Error fetching login activity:', error);
  }
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleString();
};

onMounted(fetchLoginActivity);
</script>
