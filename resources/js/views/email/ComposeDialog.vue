<script setup>
import { useEmailStore } from '@/@core/stores/email'; // Import email store
import { useRolePermissionStore } from '@/@core/stores/rolePermission'; // Import user store
import { useUserStore } from '@/@core/stores/user';
import { formatKey } from "@/@core/utils/helpers.js";
import { computed, onMounted, ref } from 'vue';
const emit = defineEmits(['close']);

const content = ref('');
const to = ref([]); // Updated to be an array for multiple selections
const subject = ref('');
const message = ref('');
const selectedRoles = ref([]); // To keep track of selected roles

// Import the user store to access all users for autocomplete
const roleStore = useRolePermissionStore()
const userStore = useUserStore();
const emailStore = useEmailStore();

const users = computed(() => userStore.allUsers); // Computed property for all users
const roles = ref([]); // Store roles
const isAdmin = ref(getUserRole() === 'admin');
// Fetch all users and roles when the component is mounted
onMounted(async () => {
  await userStore.fetcAllhUser();
  await fetchAllRoles();
});

// Function to fetch all roles
const fetchAllRoles = async () => {
  try {
    await roleStore.getAllRoles();
    roles.value = roleStore.roles;
  } catch (error) {
    console.error('Error fetching roles:', error);
  }
};

// Watcher to handle changes in selectedRoles
watch(selectedRoles, (newRoles, oldRoles) => {
  const addedRoles = newRoles.filter(role => !oldRoles.includes(role));
  const removedRoles = oldRoles.filter(role => !newRoles.includes(role));

  // Add users with the newly selected roles
  addedRoles.forEach(role => {
    const roleUsers = userStore.allUsers
      .filter(user => user.role === role)
      .map(user => user.id);
    to.value = [...new Set([...to.value, ...roleUsers])];
  });

  // Remove users with the deselected roles
  removedRoles.forEach(role => {
    to.value = to.value.filter(
      userId => !userStore.allUsers.some(user => user.id === userId && user.role === role)
    );
  });
});

const resetValues = () => {
  to.value = [];
  subject.value = '';
  message.value = '';
  content.value = '';
  selectedRoles.value = []; // Reset selected roles
};

const sendEmail = async () => {
  const recipients = to.value;
  const emailData = {
    recipients,
    subject: subject.value,
    body: content.value,
  };

  const result = await emailStore.sendEmail(emailData);

  if (result.success) {
    resetValues(); // Reset the form on success
    emit('close'); // Close the dialog
  } else {
    console.error(result.message); // Log error
    // You can handle errors more gracefully here if needed
  }
};
</script>

<template>
  <VCard class="email-compose-dialog" elevation="10" max-width="35vw">
    <VCardItem class="py-3 px-6">
      <div class="d-flex align-center">
        <h5 class="text-h5">Compose Mail</h5>
        <VSpacer />
        <div class="d-flex align-center gap-x-2">
          <IconBtn size="small" icon="tabler-minus" @click="$emit('close')" />
          <IconBtn size="small" icon="tabler-x" @click="$emit('close'); resetValues()" />
        </div>
      </div>
    </VCardItem>

    <!-- Roles Checkboxes -->
    <div class="px-1 pe-6 py-1" v-if="isAdmin">
      <VCheckbox
        v-for="role in roles"
        :key="role.id"
        :label="formatKey(role.role)"
        :value="role.role"
        v-model="selectedRoles"
        class="cursor-pointer"
      />
    </div>

    <!-- To Field -->
    <div class="px-1 pe-6 py-1">
      <AppAutocomplete
        v-model="to"
        :items="users"
        :item-title="(item) => item.name_with_email"
        :item-value="(item) => item.id"
        multiple
        chips
        closable-chips
      >
        <template #prepend-inner>
          <div class="text-base font-weight-medium text-disabled">
            To:
          </div>
        </template>
      </AppAutocomplete>
    </div>

    <VDivider />
    <div class="px-1 pe-6 py-1">
      <VTextField v-model="subject" density="compact">
        <template #prepend-inner>
          <div class="text-base font-weight-medium text-disabled">Subject:</div>
        </template>
      </VTextField>
    </div>

    <VDivider />

    <!-- Tiptap Editor -->
    <TiptapEditor v-model="content" placeholder="Message" />

    <VDivider />

    <div class="d-flex align-center px-6 py-4">
      <VBtn color="primary" class="me-4" append-icon="tabler-send" @click="sendEmail()">
        Send
      </VBtn>
    </div>
  </VCard>
</template>

<style lang="scss">
@use "@core-scss/base/mixins";

.v-card.email-compose-dialog {
  z-index: 910 !important;
  overflow: auto;
  block-size: 500px;

  @include mixins.elevation(18);

  .v-field--prepended {
    padding-inline-start: 20px;
  }

  .v-field__prepend-inner {
    align-items: center;
    padding: 0;
  }

  .v-card-item {
    background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
  }

  .v-textarea .v-field {
    --v-field-padding-start: 20px;
  }

  .v-field__outline {
    display: none;
  }

  .v-input {
    .v-field__prepend-inner {
      display: flex;
      align-items: center;
      padding-block-start: 0;
    }
  }

  .app-text-field {
    .v-field__input {
      padding-block-start: 6px;
    }

    .v-field--focused {
      box-shadow: none !important;
    }
  }
}

.email-compose-dialog {
  .ProseMirror {
    p {
      margin-block-end: 0;
    }

    padding: 1.5rem;
    block-size: 100px;
    overflow-y: auto;
    padding-block: 0.5rem;

    &:focus-visible {
      outline: none;
    }

    p.is-editor-empty:first-child::before {
      block-size: 0;
      color: #adb5bd;
      content: attr(data-placeholder);
      float: inline-start;
      pointer-events: none;
    }

    ul,
    ol {
      padding-inline: 1.125rem;
    }

    &-focused {
      outline: none;
    }
  }
}
</style>
