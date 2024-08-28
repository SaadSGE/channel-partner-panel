<script setup>
definePage({
  meta: {
    public: 'true',
    layoutWrapperClasses: 'layout-content-height-fixed'
  }

});
import { useEmailStore } from '@/@core/stores/email';
import ComposeDialog from '@/views/email/ComposeDialog.vue';
import EmailLeftSidebarContent from '@/views/email/EmailLeftSidebarContent.vue';
import EmailView from '@/views/email/EmailView.vue';
import { computed, ref } from 'vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

// Define page metadata


// Composables and Store
const { isLeftSidebarOpen } = useResponsiveLeftSidebar();
const emailStore = useEmailStore(); // Use the email store

// State management
const isComposeDialogVisible = ref(false);
const selectedEmails = ref([]);
const openedEmail = ref(null);
const currentFolder = ref('inbox'); // Default to 'inbox' folder

// Fetch emails based on the current folder
const fetchEmails = async () => {
  if (currentFolder.value === 'inbox') {
    await emailStore.fetchReceivedEmails();
  } else if (currentFolder.value === 'sent') {
    await emailStore.fetchSentEmails();
  }
};

// Initial fetch for Inbox
await fetchEmails();

const emails = computed(() => {
  if (currentFolder.value === 'inbox') {
    return emailStore.receivedEmails || [];
  } else if (currentFolder.value === 'sent') {
    return emailStore.sentEmails || [];
  }
  return [];
});

const toggleSelectedEmail = (emailId) => {
  const emailIndex = selectedEmails.value.indexOf(emailId);
  if (emailIndex === -1) {
    selectedEmails.value.push(emailId);
  } else {
    selectedEmails.value.splice(emailIndex, 1);
  }
};

const selectAllEmailCheckbox = computed(() => {
  return emails.value.length > 0 && emails.value.length === selectedEmails.value.length;
});

const isSelectAllEmailCheckboxIndeterminate = computed(() => Boolean(selectedEmails.value.length) && emails.value.length !== selectedEmails.value.length);

const selectAllCheckboxUpdate = () => {
  selectedEmails.value = !selectAllEmailCheckbox.value ? emails.value.map(email => email.id) : [];
};

// Function to handle folder change
const handleFolderChange = async (folder) => {
  currentFolder.value = folder;
  await fetchEmails();
};

// Function to open an email
const openEmail = (email) => {
  openedEmail.value = email;
};

</script>

<template>
  <VLayout style="min-block-size: 100%;" class="email-app-layout">
    <VNavigationDrawer v-model="isLeftSidebarOpen" absolute touchless location="start" :temporary="$vuetify.display.mdAndDown">
      <EmailLeftSidebarContent @toggle-compose-dialog-visibility="isComposeDialogVisible = !isComposeDialogVisible" @changeFolder="handleFolderChange" />
    </VNavigationDrawer>
    <EmailView
      :email="openedEmail"
      @close="openedEmail = null"
    />
    <VMain>
      <VCard flat class="email-content-list h-100 d-flex flex-column">
        <div class="d-flex align-center">
          <IconBtn class="d-lg-none ms-3" @click="isLeftSidebarOpen = true">
            <VIcon icon="tabler-menu-2" />
          </IconBtn>

          <VTextField
            v-model="q"
            density="default"
            class="email-search px-sm-2 flex-grow-1 py-1"
            placeholder="Search mail">
            <template #prepend-inner>
              <VIcon icon="tabler-search" size="24" class="me-1 text-medium-emphasis" />
            </template>
          </VTextField>
        </div>
        <VDivider />

        <PerfectScrollbar tag="ul" :options="{ wheelPropagation: false }" class="email-list">
          <template v-if="emails.length > 0">
            <li
              v-for="email in emails"
              :key="email.id"
              class="email-item d-flex align-center pa-4 gap-2 cursor-pointer"
              :class="[{ 'email-read': email.read_at }]"
              @click="openEmail(email)"
            >
              <VCheckbox :model-value="selectedEmails.includes(email.id)" class="flex-shrink-0" @update:model-value="toggleSelectedEmail(email.id)" @click.stop />
              <h6 class="text-h6">{{ email.data.sender_name }}</h6>
              <span class="text-body-2 truncate">{{ email.data.subject }}</span>
              <VSpacer />
              <div class="email-meta align-center gap-2" :class="$vuetify.display.xs ? 'd-none' : ''">
                <span class="text-sm text-disabled">{{ new Date(email.created_at).toLocaleString() }}</span>
              </div>
            </li>
          </template>
          <!-- Show No Email Found Message -->
          <template v-else>
            <li class="py-4 px-5 text-center">
              <span class="text-high-emphasis">No emails found.</span>
            </li>
          </template>
        </PerfectScrollbar>
      </VCard>
      <ComposeDialog v-show="isComposeDialogVisible" @close="isComposeDialogVisible = false" />
    </VMain>
  </VLayout>
</template>


<style lang="scss">
@use "@styles/variables/vuetify.scss";
@use "@core-scss/base/mixins.scss";

// ℹ️ Remove border. Using variant plain cause UI issue, caret isn't align in center
.email-search {
  .v-field__outline {
    display: none;
  }

  .v-field__field {
    .v-field__input {
      font-size: 0.9375rem !important;
      line-height: 1.375rem !important;
    }
  }
}

.email-app-layout {
  border-radius: vuetify.$card-border-radius;

  @include mixins.elevation(vuetify.$card-elevation);

  $sel-email-app-layout: &;

  @at-root {
    .skin--bordered {
      @include mixins.bordered-skin($sel-email-app-layout);
    }
  }
}

.email-content-list {
  border-end-start-radius: 0;
  border-start-start-radius: 0;
}

.email-list {
  white-space: nowrap;

  .email-item {
    block-size: 4.375rem;
    transition: all 0.2s ease-in-out;
    will-change: transform, box-shadow;

    &.email-read {
      background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
    }

    & + .email-item {
      border-block-start: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    }
  }

  .email-item .email-meta {
    display: flex;
  }

  .email-item:hover {
    transform: translateY(-2px);

    @include mixins.elevation(4);

    // ℹ️ Don't show actions on hover on mobile & tablet devices
    @media screen and (min-width: 1280px) {
      .email-actions {
        display: block !important;
      }

      .email-meta {
        display: none;
      }
    }

    + .email-item {
      border-color: transparent;
    }

    @media screen and (max-width: 600px) {
      .email-actions {
        display: none !important;
      }
    }
  }
}

.email-compose-dialog {
  position: absolute;
  inset-block-end: 0;
  inset-inline-end: 0;
  min-inline-size: 100%;

  @media only screen and (min-width: 800px) {
    min-inline-size: 712px;
  }
}
</style>

