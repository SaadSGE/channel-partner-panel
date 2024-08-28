<script setup>
definePage({
  meta: {
    action: 'read',
    subject: 'email',

  }
});
import { useEmailStore } from '@/@core/stores/email';
import { useUserStore } from '@/@core/stores/user'; // Import user store
import { computed, ref, watch } from 'vue';
const emit = defineEmits(['close']);

const content = ref('');
const to = ref([]); // Updated to be an array for multiple selections
const subject = ref('');
const message = ref('');

// Import the user store to access all users for autocomplete
const userStore = useUserStore();
const emailStore = useEmailStore();
// Fetch all users when the component is mounted
await userStore.fetcAllhUser();

const items = [
  'Schedule Mail',
  'Save Draft',
  'Sent',
];

const users = computed(() => userStore.allUsers); // Computed property for all users

const resetValues = () => {
  to.value = [];
  subject.value = '';
  message.value = '';
  content.value = '';
};

// Watch for changes in user input for the "to" field
watch(to, (newValue) => {
  // If needed, handle changes in selected users here
});
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
  <VCard class="email-compose-dialog" elevation="10" max-width="30vw">
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
