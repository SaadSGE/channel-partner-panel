<script setup>
import { useNotificationStore } from '@core/stores/notification';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const notificationStore = useNotificationStore()
const router = useRouter()

onMounted(() => {
  notificationStore.fetchNotifications()
})

const removeNotification = notificationId => {
  notificationStore.notifications = notificationStore.notifications.filter(item => item.id !== notificationId)
}

const markRead = notificationId => {
  notificationStore.markAsRead(notificationId)
}

const markUnRead = notificationId => {
  // This functionality is not implemented in the backend yet
  console.warn('Mark as unread not implemented')
}

const handleNotificationClick = notification => {

  if (!notification.read) {
    markRead(notification.id)
  }
  if (notification.notification_route) {
    const currentRouteName = router.currentRoute.value.name
    if (currentRouteName === notification.notification_route) {
      // If on the same route, just reload the page
      router.go(0)
    } else {
      // If routes are different, navigate without forcing a reload
      if (notification.application_id) {
        router.push({ name: notification.notification_route, params: { id: notification.application_id } })
      } else {
        router.push(notification.notification_route)
      }
    }
  }
}
</script>

<template>
  <Notifications :notifications="notificationStore.notifications" @remove="removeNotification" @read="markRead"
    @unread="markUnRead" @click:notification="handleNotificationClick" />
</template>
