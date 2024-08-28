<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

const props = defineProps({
  email: {
    type: Object,
    required: true,
  }
});

const emit = defineEmits([
  'close',
]);

</script>

<template>
  <!-- Email View Drawer -->
  <VNavigationDrawer
    temporary
    :model-value="!!props.email"
    location="right"
    :scrim="false"
    floating
    class="email-view"
  >
    <template v-if="props.email">
      <!-- Email Header -->
      <div class="email-view-header d-flex align-center px-5 py-3">
        <IconBtn class="me-2" @click="$emit('close')">
          <VIcon size="22" icon="tabler-chevron-left" class="flip-in-rtl" />
        </IconBtn>
        <div class="d-flex align-center flex-wrap flex-grow-1 overflow-hidden gap-2">
          <div class="text-body-1 text-high-emphasis text-truncate">
            {{ props.email.data.subject }}
          </div>
        </div>
      </div>

      <VDivider />

      <!-- Mail Content -->
      <PerfectScrollbar tag="div" class="mail-content-container flex-grow-1 pa-sm-12 pa-6" :options="{ wheelPropagation: false }">
        <VCard class="mb-4">
          <div class="d-flex align-start align-sm-center pa-6 gap-x-4">
            <VAvatar size="38">
              <VImg :src="props.email.data.sender_avatar" :alt="props.email.data.sender_name" />
            </VAvatar>
            <div class="d-flex flex-wrap flex-grow-1 overflow-hidden">
              <div class="text-truncate">
                <div class="text-body-1 text-high-emphasis text-truncate">
                  {{ props.email.data.sender_name }}
                </div>
                <div class="text-sm">
                  {{ props.email.data.sender_email }}
                </div>
              </div>
              <VSpacer />
              <div class="text-disabled text-base">
                {{ new Date(props.email.created_at).toDateString() }}
              </div>
            </div>
          </div>
          <VDivider />
          <VCardText>
            <div class="text-base" v-html="props.email.data.body" />
          </VCardText>
        </VCard>
      </PerfectScrollbar>
    </template>
  </VNavigationDrawer>
</template>

<style lang="scss">
.email-view {
  inline-size: 100% !important;

  @media only screen and (min-width: 1280px) {
    inline-size: calc(100% - 256px) !important;
  }

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }

  .editor {
    padding-block-start: 0 !important;
    padding-inline: 0 !important;
  }

  .ProseMirror {
    padding: 0.5rem;
    block-size: 100px;
    overflow-y: auto;
    padding-block: 0.5rem;
  }
}

.email-view-action-bar {
  min-block-size: 56px;
}

.mail-content-container {
  background-color: rgb(var(--v-theme-on-surface), var(--v-hover-opacity));

  .mail-header {
    margin-block: 12px;
    margin-inline: 24px;
  }
}
</style>
