<template>
  <VCard>
    <VCardTitle>All Notifications</VCardTitle>
    <VCardText>
      <VList>
        <template v-for="notification in notifications" :key="notification.id">
          <VListItem :class="{ 'unread-notification': !notification.read }"
            @click="handleNotificationClick(notification)">
            <template #prepend>
              <VAvatar :color="notification.color" :icon="notification.icon" variant="tonal" />
            </template>
            <VListItemTitle>{{ notification.title }}</VListItemTitle>
            <VListItemSubtitle>{{ notification.message }}</VListItemSubtitle>
            <template #append>
              <VListItemAction>
                <small>{{ notification.time }}</small>
              </VListItemAction>
            </template>
          </VListItem>
          <VDivider />
        </template>
      </VList>
      <div class="text-center mt-4">
        <VPagination v-model="currentPage" :length="totalPages" @update:model-value="fetchNotifications" />
      </div>
    </VCardText>
  </VCard>
</template>

<script setup>
definePage({
  meta: {
    public: true,
  },
})
import { useNotificationStore } from '@/@core/stores/notification';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const notificationStore = useNotificationStore()
const router = useRouter()

const notifications = ref([])
const currentPage = ref(1)
const totalPages = ref(1)
const perPage = ref(10)

const fetchNotifications = async () => {
  try {
    const response = await notificationStore.fetchAllNotifications(currentPage.value, perPage.value)
    console.log('API Response:', response) // Debug: Log the entire response
    notifications.value = response.notifications || [] // Ensure it's an array even if undefined
    totalPages.value = response.last_page || 1 // Provide a default value
    console.log('Notifications:', notifications.value) // Debug: Log the notifications
  } catch (error) {
    console.error('Error fetching notifications:', error)
  }
}

const handleNotificationClick = (notification) => {
  if (!notification.read) {
    notificationStore.markAsRead(notification.id)
  }
  if (notification.notification_route) {
    router.push({ name: notification.notification_route, params: { id: notification.application_id } })
  }
}

onMounted(() => {
  fetchNotifications()
})
</script>

<style scoped>
.unread-notification {
  background-color: rgba(var(--v-theme-primary), 0.05);
}
</style>
