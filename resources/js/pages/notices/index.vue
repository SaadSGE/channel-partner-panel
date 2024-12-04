<script lang="js" setup>
definePage({
    meta: {
        action: 'read',
        subject: 'dashboard',
    },
})
import { commonFunction } from "@/@core/stores/commonFunction";
import Swal from 'sweetalert2';
import { onMounted, ref } from "vue";
import NoticeAdd from "./add.vue";
const commonFunctionStore = commonFunction();
const notices = ref([]);

const isNavDrawerOpen = ref(false);

onMounted(async () => {
    isLoading.value = true

    if (commonFunctionStore.notices.length === 0) {
        await commonFunctionStore.getNotices();
    }

    notices.value = commonFunctionStore.notices;
    isLoading.value = false
});

const headers = [
    { title: 'Notice', key: 'content' },
    { title: "Status", key: 'status', },
    { title: 'Actions', key: 'actions', sortable: false },
];
const defaultItem = ref({
    id: '',
    name: '',
})
const editedIndex = ref(-1)
const isLoading = ref(false)
const editedItem = ref(defaultItem.value)
const editItem = item => {
    editedItem.value = item
    isNavDrawerOpenEdit.value = true
}


const updateNoticeStatus = async (notice) => {
    notice.statusLoading = true;
    try {
        const response = await commonFunctionStore.updateNoticeStatus(notice.id, notice.status);
        if (response.status) {
            Swal.fire("Success!", "Notice status updated successfully!", "success");
        } else {
            Swal.fire("Error!", "Failed to update notice status.", "error");
            notice.status = notice.status === 1 ? 0 : 1; // Revert the switch if the update failed
        }
    } catch (error) {
        console.error("Error updating notice status:", error);
        Swal.fire("Error!", "Failed to update notice status.", "error");
        notice.status = notice.status === 1 ? 0 : 1; // Revert the switch if the update failed
    } finally {
        notice.statusLoading = false;
    }
};

const deleteNotice = async (item) => {
    const data = { ...item };
    const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to delete this notice?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel'
    });

    if (result.isConfirmed) {
        try {
            await commonFunctionStore.deleteNotice(data.id);
            notices.value = commonFunctionStore.notices;
            Swal.fire(
                'Deleted!',
                'The item has been deleted.',
                'success'
            );
        } catch (error) {
            Swal.fire(
                'Error!',
                'There was an error deleting the item.',
                'error'
            );
        }
    }
};



</script>

<template>


    <NoticeAdd :isNavDrawerOpen="isNavDrawerOpen" @update:isNavDrawerOpen="isNavDrawerOpen = $event" />
    <VCard :loading="isLoading">
        <VCardText>
            <VRow>
                <VCol cols="12" offset-md="7" md="3">
                    <AppTextField v-model="search" placeholder="Search ..." append-inner-icon="tabler-search"
                        single-line hide-details dense outlined />
                </VCol>
                <VCol cols="12" md="2">
                    <VBtn style="z-index: 1001;" @click="isNavDrawerOpen = true">Add New</VBtn>
                </VCol>

            </VRow>
        </VCardText>
        <VDataTable :headers="headers" :items="notices || []" :items-per-page="5"
            class="text-no-wrap color-black table-padding">

            <template #item.actions="{ item }">
                <IconBtn @click="deleteNotice(item)">
                    <VIcon icon="tabler-trash" />
                </IconBtn>
            </template>
            <template #item.status="{ item }">
                <VSwitch v-model="item.status" :true-value="true" :false-value="false"
                    @change="updateNoticeStatus(item)" :loading="item.statusLoading" />
            </template>
        </VDataTable>
    </VCard>
</template>
