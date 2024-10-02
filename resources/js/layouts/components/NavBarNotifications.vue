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
    // Check if the current route is already an application details page
    const isApplicationDetailsPage = router.currentRoute.value.path.startsWith('/application/details/')

    if (isApplicationDetailsPage) {
      // If we're already on an application details page, use push with replace: true
      router.push({ path: notification.notification_route, replace: true })
    } else {
      // Otherwise, push a new route
      router.push(notification.notification_route)
    }
  }
}
</script>

<template>
  <Notifications :notifications="notificationStore.notifications" @remove="removeNotification" @read="markRead"
    @unread="markUnRead" @click:notification="handleNotificationClick" />
</template>
