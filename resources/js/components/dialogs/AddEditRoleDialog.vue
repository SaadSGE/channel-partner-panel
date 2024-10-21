<script lang="js" setup>
import { useRolePermissionStore } from "@/@core/stores/rolePermission";
import { formatKey } from "@/@core/utils/helpers.js";
import { computed, onMounted, ref, watch } from 'vue';
import { VForm } from 'vuetify/components/VForm';
const store = useRolePermissionStore();
const permissions = ref([]);
const customPermissionKeys = ref([]); // Array to store keys of custom permissions

onMounted(async () => {
  await store.getAllPermission();
  permissions.value = store.permissions;
  console.log(permissions.value);

  // Extract custom permission keys
  permissions.value.forEach(permission => {
    customPermissionKeys.value = [
      ...new Set([
        ...customPermissionKeys.value,
        ...Object.keys(permission.custom_permissions || {})
      ])
    ];
  });
});

const props = defineProps({
  rolePermissions: {
    type: Object,
    required: false,
    default: () => ({
      id: '',
      name: '',
      permissions: [],
    }),
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits([
  'update:isDialogVisible',
  'update:rolePermissions',
]);

const isSelectAll = ref(false);
const role = ref('');
const roleId = ref(null);
const refPermissionForm = ref();

const checkedCount = computed(() => {
  let counter = 0;
  permissions.value.forEach(permission => {
    Object.entries(permission).forEach(([key, value]) => {
      if (key !== 'name' && value) {
        counter++;
      }
    });

    Object.values(permission.custom_permissions || {}).forEach(value => {
      if (value) counter++;
    });
  });
  return counter;
});

const isIndeterminate = computed(() => {
  return (
    checkedCount.value > 0 &&
    checkedCount.value < permissions.value.length * (4 + customPermissionKeys.value.length)
  );
});

watch(isSelectAll, val => {
  permissions.value = permissions.value.map(permission => ({
    ...permission,
    read: val,
    edit: val,
    create: val,
    delete: val,
    custom_permissions: Object.fromEntries(
      Object.entries(permission.custom_permissions || {}).map(([key]) => [key, val])
    )
  }));
});

watch(isIndeterminate, () => {
  if (!isIndeterminate.value) {
    isSelectAll.value = false;
  }
});

watch(permissions, () => {
  if (checkedCount.value === permissions.value.length * (4 + customPermissionKeys.value.length)) {
    isSelectAll.value = true;
  }
}, { deep: true });

watch(props, () => {
  if (props.rolePermissions && props.rolePermissions.permissions.length) {
    role.value = props.rolePermissions.name;
    roleId.value = props.rolePermissions.id;

    permissions.value = permissions.value.map(permission => {
      const rolePermission = props.rolePermissions?.permissions.find(item => item.name === permission.name);
      if (rolePermission) {
        return {
          ...permission,
          ...rolePermission,
          custom_permissions: {
            ...permission.custom_permissions,
            ...(rolePermission.custom_permissions || {})
          }
        };
      }
      return permission;
    });
  }
});

const onSubmit = async () => {
  const rolePermissions = {
    id: roleId.value,
    name: role.value,
    permissions: permissions.value,
  };

  try {
    await store.setRolePermission(rolePermissions);
    emit('update:rolePermissions', rolePermissions);
    emit('update:isDialogVisible', false);
    emit('roleSubmitted');
    isSelectAll.value = false;
    refPermissionForm.value?.reset();
  } catch (error) {
    console.error('Failed to save role permissions:', error);
  }
};

const onReset = () => {
  emit('update:isDialogVisible', false);
  isSelectAll.value = false;
  refPermissionForm.value?.reset();
};
</script>


<template>
  <VDialog :width="$vuetify.display.smAndDown ? 'auto' : 900" :model-value="props.isDialogVisible"
    @update:model-value="onReset">
    <DialogCloseBtn @click="onReset" />

    <VCard class="pa-sm-10 pa-2">
      <VCardText>
        <h4 class="text-h4 text-center mb-2">
          {{ props.rolePermissions.name ? 'Edit' : 'Add New' }} Role
        </h4>
        <p class="text-body-1 text-center mb-6">
          Set Role Permissions
        </p>

        <VForm ref="refPermissionForm">
          <AppTextField v-model="role" label="Role Name" placeholder="Enter Role Name" />

          <h5 class="text-h5 my-6">
            Role Permissions
          </h5>

          <VTable class="permission-table text-no-wrap mb-6">
            <!-- Group for Read, Create, Edit, Delete -->
            <template v-for="permission in permissions" :key="permission.name">
              <tr v-if="!permission.custom"> <!-- Only show non-custom permissions -->
                <td>
                  <h6 class="text-h6">{{ formatKey(permission.name) }}</h6>
                </td>
                <td>
                  <div class="d-flex justify-end">
                    <VCheckbox v-model="permission.read" label="Read" />
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-end">
                    <VCheckbox v-model="permission.create" label="Create" />
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-end">
                    <VCheckbox v-model="permission.edit" label="Edit" />
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-end">
                    <VCheckbox v-model="permission.delete" label="Delete" />
                  </div>
                </td>
              </tr>
            </template>
          </VTable>

          <h5 class="text-h5 my-6">
            Custom Permissions
          </h5>

          <VTable class="permission-table text-no-wrap mb-6">
            <!-- Custom permissions group -->
            <template v-for="permission in permissions" :key="permission.name">
              <template v-if="permission.custom"> <!-- Only show custom permissions -->
                <tr v-for="(enabled, customPermission) in permission.custom_permissions" :key="customPermission">
                  <td>
                    <h6 class="text-h6">{{ formatKey(permission.name) }} {{ formatKey(customPermission) }}</h6>
                  </td>
                  <td colspan="4">
                    <div class="d-flex justify-end">
                      <VCheckbox v-model="permission.custom_permissions[customPermission]" />
                    </div>
                  </td>
                </tr>
              </template>
            </template>
          </VTable>

          <div class="d-flex align-center justify-center gap-4">
            <VBtn @click="onSubmit">
              Submit
            </VBtn>

            <VBtn color="secondary" variant="tonal" @click="onReset">
              Cancel
            </VBtn>
          </div>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>



<style lang="scss">
.permission-table {
  td {
    border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    padding-block: 0.5rem;

    .v-checkbox {
      min-inline-size: 4.75rem;
    }

    &:not(:first-child) {
      padding-inline: 0.5rem;
    }

    .v-label {
      white-space: nowrap;
    }
  }
}
</style>
