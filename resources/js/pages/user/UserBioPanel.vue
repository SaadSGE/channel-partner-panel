<script setup>
const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
});

const standardPlan = {
  plan: "Standard",
  price: 99,
  benefits: ["10 Users", "Up to 10GB storage", "Basic Support"],
};

const isUserInfoEditDialogVisible = ref(false);
const isUpgradePlanDialogVisible = ref(false);

const resolveUserRoleVariant = (role) => {
  if (role === "channel partner")
    return {
      color: "warning",
      icon: "tabler-user",
    };
  if (role === "editor")
    return {
      color: "success",
      icon: "tabler-circle-check",
    };
  if (role === "admin")
    return {
      color: "primary",
      icon: "tabler-chart-pie-2",
    };
  if (role === "editor")
    return {
      color: "info",
      icon: "tabler-pencil",
    };
  if (role === "admin")
    return {
      color: "secondary",
      icon: "tabler-server-2",
    };

  return {
    color: "primary",
    icon: "tabler-user",
  };
};
</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard v-if="props.userData">
        <VCardText class="text-center pt-12">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            :size="100"
            :color="!props.userData.avatar ? 'primary' : undefined"
            :variant="!props.userData.avatar ? 'tonal' : undefined"
          >
            <VImg v-if="props.userData.avatar" :src="props.userData.avatar" />
            <span v-else class="text-5xl font-weight-medium">
              {{ avatarText(props.userData.full_name) }}
            </span>
          </VAvatar>

          <!-- 👉 User fullName -->
          <h5 class="text-h5 mt-4">
            {{ props.userData.full_name }}
          </h5>

          <!-- 👉 Role chip -->
          <VChip
            label
            :color="resolveUserRoleVariant(props.userData.role).color"
            size="small"
            class="text-capitalize mt-4"
          >
            {{ props.userData.role }}
          </VChip>
        </VCardText>

        <VCardText>
          <!-- 👉 Details -->
          <h5 class="text-h5">Details</h5>

          <VDivider class="my-4" />

          <!-- 👉 User Details list -->
          <VList class="card-list mt-2">
            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Username:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.full_name }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <span class="text-h6">Email:</span>
                <span class="text-body-1">{{ props.userData.email }}</span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Role:
                  <div class="d-inline-block text-capitalize text-body-1">

                    {{ props.userData.role }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Mobile Number:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.mobile_number }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  WhatsApp Number:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.whatsapp_number }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Company Name:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.company_name }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Website:
                  <div class="d-inline-block text-body-1">
                    <a href="{{ props.userData.website }}" target="_blank">
                      {{ props.userData.website }}
                    </a>
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Address:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.address }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  City:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.city }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Post Code:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.post_code }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Country:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.country }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Status:
                  <div class="d-inline-block text-body-1">
                    {{ props.userData.status == 1 ? "Active" : "Inactive" }}
                  </div>
                </h6>
              </VListItemTitle>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>

  </VRow>

  <!-- 👉 Edit user info dialog -->
  <UserInfoEditDialog
    v-model:isDialogVisible="isUserInfoEditDialogVisible"
    :user-data="props.userData"
  />

  <!-- 👉 Upgrade plan dialog -->
  <UserUpgradePlanDialog v-model:isDialogVisible="isUpgradePlanDialogVisible" />
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.5rem;
}

.text-capitalize {
  text-transform: capitalize !important;
}
</style>
