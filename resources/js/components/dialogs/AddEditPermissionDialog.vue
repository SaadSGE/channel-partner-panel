<script setup>
import { useRolePermissionStore } from "@/@core/stores/rolePermission";
import Swal from 'sweetalert2';
import { ref, watch } from 'vue';

const props = defineProps({
  isDialogVisible: Boolean,
  permission: Object,
});

const emit = defineEmits(['update:isDialogVisible', 'saved']);

const store = useRolePermissionStore();

const name = ref('');

watch(() => props.permission, (newPermission) => {
  if (newPermission) {
    name.value = newPermission.name;
  } else {
    name.value = '';
  }
}, { immediate: true });

const onSubmit = async () => {
  try {
    if (props.permission) {
      await store.updatePermission({
        id: props.permission.id,
        name: name.value,
      });
    } else {
      await store.createPermission({
        name: name.value,
      });
    }
    closeDialog();
    emit('saved');
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: props.permission ? 'Permission updated successfully' : 'Permission created successfully',
    });
  } catch (error) {
    closeDialog();
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error,
    });
  }
};

const closeDialog = () => {
  emit('update:isDialogVisible', false);
  name.value = '';
};
</script>

<template>
  <VDialog :model-value="isDialogVisible" @update:model-value="closeDialog" max-width="600px">
    <VCard>
      <VCardTitle>
        {{ permission ? 'Edit' : 'Add' }} Permission
      </VCardTitle>
      <VCardText>
        <VForm @submit.prevent="onSubmit">
          <VTextField v-model="name" label="Permission Name" required />
          <VBtn type="submit" color="primary" class="mt-4">
            {{ permission ? 'Update' : 'Create' }} Permission
          </VBtn>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
