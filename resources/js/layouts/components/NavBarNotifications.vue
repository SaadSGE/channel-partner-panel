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
    const currentId = router.currentRoute.value.params.id

    if (currentRouteName === notification.notification_route &&
      currentId == notification.application_id) {


      // If on the same route and same ID, just update hash and reload
      window.location.hash = '#' + (notification.notification_hash)
      window.location.reload()
    }
    else if (currentRouteName == notification.notification_route) {
      // Navigate to the new route and then force reload
      router.push({
        name: notification.notification_route,
        params: { id: notification.application_id },
        hash: '#' + (notification.notification_hash)
      }).then(() => window.location.reload())
    }
    else {
      // If routes or IDs are different, navigate with router.push
      if (notification.application_id) {
        router.push({
          name: notification.notification_route,
          params: { id: notification.application_id },
          hash: '#' + (notification.notification_hash)
        })
      } else {
        router.push({
          name: notification.notification_route,
          hash: '#' + (notification.notification_hash)
        })
      }
    }
  }
}
</script>

<template>
  <Notifications :notifications="notificationStore.notifications" @remove="removeNotification" @read="markRead"
    @unread="markUnRead" @click:notification="handleNotificationClick" />
</template>
