
<script setup>
const emit = defineEmits(['toggleComposeDialogVisibility', 'changeFolder']);

const folders = [
  {
    title: 'Inbox',
    prependIcon: 'tabler-mail',
    filter: 'inbox',
  },
  {
    title: 'Sent',
    prependIcon: 'tabler-send',
    filter: 'sent',
  },
];
</script>

<template>
  <div class="d-flex flex-column h-100">
    <!-- Compose Button -->
    <div class="px-6 pb-5 pt-6">
      <VBtn block @click="$emit('toggleComposeDialogVisibility')">
        Compose
      </VBtn>
    </div>

    <!-- Folders -->
    <ul class="email-filters py-4">
      <li
        v-for="folder in folders"
        :key="folder.title"
        class="d-flex align-center cursor-pointer"
        @click="$emit('changeFolder', folder.filter)"
      >
        <VIcon :icon="folder.prependIcon" class="me-2" size="20" />
        <div class="text-base">{{ folder.title }}</div>
      </li>
    </ul>
  </div>
</template>



<style lang="scss">
.email-filters,
.email-labels {
  .email-filter-active,
  .email-label-active {
    &::after {
      position: absolute;
      background: currentcolor;
      block-size: 100%;
      content: "";
      inline-size: 3px;
      inset-block-start: 0;
      inset-inline-start: 0;
    }
  }
}

.email-filters {
  > li {
    position: relative;
    margin-block-end: 4px;
    padding-block: 4px;
    padding-inline: 24px;
  }
}

.email-labels {
  > li {
    position: relative;
    margin-block-end: 0.75rem;
    padding-inline: 24px;
  }
}
</style>
