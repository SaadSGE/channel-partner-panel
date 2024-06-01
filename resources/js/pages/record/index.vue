
<script lang="js" setup>
import { ref } from "vue";
const isNavDrawerOpen = ref(false)
</script>

<template>
 <VNavigationDrawer
      v-model="isNavDrawerOpen"
      temporary
      touchless
      border="none"
      location="end"
      width="400"
      elevation="10"
      :scrim="false"
      class="app-customizer"
    >
    <div class="customizer-heading d-flex align-center justify-space-between">
        <div>
          <h6 class="text-h6">
            Theme Customizer
          </h6>
          <p class="text-body-2 mb-0">
            Customize & Preview in Real Time
          </p>
        </div>

        <div class="d-flex align-center gap-1">
          <VBtn
            icon
            variant="text"
            size="small"
            color="medium-emphasis"
            @click="resetCustomizer"
          >
            <VBadge
              v-show="isCookieHasAnyValue"
              dot
              color="error"
              offset-x="-29"
              offset-y="-14"
            />

            <VIcon
              size="24"
              color="high-emphasis"
              icon="tabler-refresh"
            />
          </VBtn>

          <VBtn
            icon
            variant="text"
            color="medium-emphasis"
            size="small"
            @click="isNavDrawerOpen = false"
          >
            <VIcon
              icon="tabler-x"
              color="high-emphasis"
              size="24"
            />
          </VBtn>
        </div>
      </div>

      <VDivider />
    </VNavigationDrawer>
    <VBtn
      style="z-index: 1001;"
      @click="isNavDrawerOpen = true"
    >
      Add New
    </VBtn>
</template>
<style lang="scss">
.form-padding {
  padding: 0rem 2rem 2rem 2rem;
}
.app-customizer {
  .customizer-section {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .customizer-heading {
    padding-block: 1rem;
    padding-inline: 1.5rem;
  }

  .custom-input-wrapper {
    .v-col {
      padding-inline: 10px;
    }

    .v-label.custom-input {
      border: none;
      color: rgb(var(--v-theme-on-surface));
      outline: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    }
  }

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }

  .v-label.custom-input.active {
    border-color: transparent;
    outline: 2px solid rgb(var(--v-theme-primary));
  }

  .v-label.custom-input:not(.active):hover {
    border-color: rgba(var(--v-border-color), 0.22);
  }

  .customizer-skins {
    .custom-input.active {
      .customizer-skins-icon-wrapper {
        background-color: rgba(var(--v-global-theme-primary), var(--v-selected-opacity));
      }
    }
  }

  .app-customizer-primary-colors {
    .primary-color-wrapper:not(.active) {
      &:hover {
        outline-color: rgba(var(--v-border-color), 0.22) !important;
      }
    }
  }
}

.app-customizer-toggler {
  position: fixed !important;
  inset-block-start: 20%;
  inset-inline-end: 0;
}
</style>
