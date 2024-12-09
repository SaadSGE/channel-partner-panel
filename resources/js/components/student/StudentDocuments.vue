<template>
  <div>
    <VCard v-for="document in documents" :key="document.id" class="mb-2">
      <VCardText class="d-flex justify-space-between align-center">
        <div>
          <VIcon size="28" icon="tabler-file-type-pdf" v-if="document.file_type === 'pdf'" />
          <VIcon size="28" icon="tabler-file-type-png" v-if="document.file_type === 'png'" />
          <VIcon size="26" color="red" icon="tabler-file-type-doc" v-if="document.file_type === 'doc'" />
          <a :href="document.path" target="_blank">{{ document.file_name }}</a>
        </div>
        <VBtn icon @click="downloadFile(document.path)">
          <VIcon size="24" icon="tabler-eye" />
        </VBtn>
      </VCardText>
    </VCard>
  </div>
</template>

<script>
import { useStudentStore } from '@/@core/stores/studentStore';
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const studentStore = useStudentStore();
    const documents = ref([]);

    const fetchDocuments = async () => {
      try {
        const studentId = 123;
        documents.value = await studentStore.getStudentDocuments(studentId);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    const downloadFile = (fileUrl) => {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.target = '_blank';
      link.download = 'document';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    onMounted(fetchDocuments);

    return {
      documents,
      downloadFile,
    };
  },
};
</script>
