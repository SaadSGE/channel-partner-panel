<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

const props = defineProps({
  notifications: {
    type: Array,
    required: true,
  },
  badgeProps: {
    type: Object,
    required: false,
    default: undefined,
  },
  location: {
    type: null,
    required: false,
    default: 'bottom end',
  },
})

const emit = defineEmits([
  'read',
  'unread',
  'remove',
  'click:notification',
])

const isAllMarkRead = computed(() => props.notifications.some(item => item.isSeen === false))

const markAllReadOrUnread = () => {
  const allNotificationsIds = props.notifications.map(item => item.id)
  if (!isAllMarkRead.value)
    emit('unread', allNotificationsIds)
  else
    emit('read', allNotificationsIds)
}

const totalUnseenNotifications = computed(() => {
  //if props.notification is not empty then filter the item that is not read
  if (props.notifications && props.notifications.length > 0)
    return props.notifications.filter(item => !item.read).length
  else
    return 0
})

const toggleReadUnread = (read, id) => {
  if (read)
    emit('unread', id)
  else
    emit('read', id)
}

const router = useRouter()

const viewAllNotifications = () => {
  router.push({ name: 'notifications' })
}

// Notices Array (Placeholder - replace with API data)
const notices = ref([
  "Welcome to the Dashboard!",
  "System maintenance is scheduled for Friday.",
  "New updates are available in your profile section.",
]);

// Current notice index
const currentNoticeIndex = ref(0);

// Computed property to get the current notice
const currentNotice = computed(() => notices.value[currentNoticeIndex.value]);

// Function to cycle through notices
const cycleNotices = () => {
  currentNoticeIndex.value = (currentNoticeIndex.value + 1) % notices.value.length;
};

// Timer for rotating notices
let noticeTimer;

onMounted(() => {
  // Start cycling notices every 5 seconds
  noticeTimer = setInterval(cycleNotices, 5000);

  // Fetch notices from API (placeholder function)
  // fetchNoticesFromAPI();
});

onUnmounted(() => {
  // Clear the timer on component unmount
  clearInterval(noticeTimer);
});

// Placeholder function for fetching notices from an API
// const fetchNoticesFromAPI = async () => {
//   // Simulate API call
//   const apiNotices = await new Promise((resolve) =>
//     setTimeout(() => resolve(["New Notice 1", "New Notice 2"]), 2000)
//   );

//   notices.value = apiNotices;
// };


</script>

<template>
  <div class="notice-container">
    <div class="notice-ticker">
      <span class="notice-text">
        <span v-for="(notice, index) in notices" :key="index" class="notice-item">
          {{ notice }}
        </span>
      </span>
    </div>
  </div>

  <IconBtn id="notification-btn">
    <VBadge :content="totalUnseenNotifications" color="error" offset-x="2" offset-y="3">
      <VIcon size="28" icon="tabler-bell" />
    </VBadge>

    <VMenu activator="parent" width="380px" :location="props.location" offset="12px" :close-on-content-click="true">
      <VCard class="d-flex flex-column">
        <!-- 👉 Header -->
        <VCardItem class="notification-section">
          <VCardTitle class="text-h6">
            Notifications
          </VCardTitle>

          <template #append>
            <VChip v-show="props.notifications.some(n => !n.isSeen)" size="small" color="primary" class="me-2">
              {{ totalUnseenNotifications }} New
            </VChip>
            <IconBtn v-show="props.notifications.length" size="34" @click="markAllReadOrUnread">
              <VIcon size="20" color="high-emphasis" :icon="!isAllMarkRead ? 'tabler-mail' : 'tabler-mail-opened'" />

              <VTooltip activator="parent" location="start">
                {{ !isAllMarkRead ? 'Mark all as unread' : 'Mark all as read' }}
              </VTooltip>
            </IconBtn>
          </template>
        </VCardItem>

        <VDivider />

        <!-- 👉 Notifications list -->
        <PerfectScrollbar :options="{ wheelPropagation: false }" style="max-block-size: 23.75rem;">
          <VList class="notification-list rounded-0 py-0">
            <template v-for="(notification, index) in props.notifications" :key="notification.id">
              <VDivider v-if="index > 0" />
              <VListItem link lines="one" min-height="66px" class="list-item-hover-class"
                :class="{ 'unread-notification': !notification.read }"
                @click="$emit('click:notification', notification)">
                <!-- Slot: Prepend -->
                <!-- Handles Avatar: Image, Icon, Text -->
                <div class="d-flex align-start gap-3">
                  <VAvatar size="40" :color="notification.color && notification.icon ? notification.color : undefined"
                    :image="notification.img || undefined" :icon="notification.icon || undefined"
                    :variant="notification.img ? undefined : 'tonal'">
                    <span v-if="notification.text">{{ avatarText(notification.text) }}</span>
                  </VAvatar>

                  <div>
                    <p class="text-sm font-weight-medium mb-1">
                      {{ notification.title }}
                    </p>
                    <p class="text-body-2 mb-2" style="letter-spacing: 0.4px !important; line-height: 18px;">
                      {{ notification.message }}
                    </p>
                    <p class="text-sm text-disabled mb-0" style="letter-spacing: 0.4px !important; line-height: 18px;">
                      {{ notification.time }}
                    </p>
                  </div>
                  <VSpacer />

                  <div class="d-flex flex-column align-end">
                    <VIcon size="10" icon="tabler-circle-filled" :color="!notification.read ? 'primary' : '#a8aaae'"
                      :class="`${notification.read ? 'visible-in-hover' : ''}`" class="mb-2"
                      @click.stop="toggleReadUnread(notification.read, notification.id)" />
                  </div>
                </div>
              </VListItem>
            </template>

            <VListItem v-show="!props.notifications.length" class="text-center text-medium-emphasis"
              style="block-size: 56px;">
              <VListItemTitle>No Notification Found!</VListItemTitle>
            </VListItem>
          </VList>
        </PerfectScrollbar>

        <VDivider />

        <!-- 👉 Footer -->
        <VCardText v-show="props.notifications.length" class="pa-4">
          <VBtn block size="small" @click="viewAllNotifications">
            View All Notifications
          </VBtn>
        </VCardText>
      </VCard>
    </VMenu>
  </IconBtn>
</template>

<style lang="scss">
.notice-container {
  position: absolute;
  z-index: 1000;
  left: 10px;
  overflow: hidden;
  width: 90%;

  // padding: 0.5rem 1rem;

  // background-color: #f4f4f4;

  // box-shadow: 0 2px 4px rgba(0, 0, 0, 10%);
  white-space: nowrap;
}

.notice-ticker {
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
}

.notice-text {
  display: inline-block;
  animation: scroll-left 15s linear infinite;

  /* Controls the scrolling speed */
  white-space: nowrap;
}

.notice-item {
  display: inline-block;
  padding: 0 1rem;
}

@keyframes scroll-left {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

#notification-btn {
  margin-right: 10px;
}

.notification-section {
  padding-block: 0.75rem;
  padding-inline: 1rem;
}

.list-item-hover-class {
  .visible-in-hover {
    display: none;
  }

  &:hover {
    .visible-in-hover {
      display: block;
    }
  }
}

.notification-list.v-list {
  .v-list-item {
    border-radius: 0 !important;
    margin: 0 !important;
    padding-block: 0.75rem !important;

    &.unread-notification {
      background-color: rgba(var(--v-theme-primary), 0.05);
    }
  }
}

// Badge Style Override for Notification Badge
.notification-badge {
  .v-badge__badge {
    /* stylelint-disable-next-line liberty/use-logical-spec */
    min-width: 18px;
    padding: 0;
    block-size: 18px;
  }
}
</style>
