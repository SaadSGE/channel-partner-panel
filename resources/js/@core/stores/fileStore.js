// src/store/fileStore.ts
import { defineStore } from 'pinia';
const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
};

export const useFileStore = defineStore('fileStore', {
  state: () => ({
    files: [],
    filePaths: [],
    errors: []
  }),
  actions: {
    addFile(file) {
      this.files.push(file);
    },
    updateFileProgress(fileId, progress) {
      const file = this.files.find(f => f.id === fileId);
      if (file) {
        file.progress = progress;
      }
    },
    removeFile(fileId) {
      var index = this.filePaths.indexOf(fileId);
if (index !== -1) {
  array.splice(index, 1);
}
      const file = this.files.find(f => f.id === fileId);
      if (file) {


        this.filePaths = this.filePaths.filter(path => path !== file.path);
        // Remove the file from files array
        this.files = this.files.filter(f => f.id !== fileId);
      }
    },
    updateFilePath(fileId, path) {
      const file = this.files.find(f => f.id === fileId);
      if (file) {
        file.path = path;
        this.filePaths.push(path);
      }
    },
    async uploadFile(fieldName, file) {
      const fileId = generateUniqueId();
      const fileData = {
        id: fileId,
        filename: file.name,
        progress: 0,
        path: ''
      };
      this.addFile(fileData);

      const formData = new FormData();
      formData.append(fieldName, file);

      try {
        const response = await $api('/student-document-upload', {
          method: 'POST',
          body: formData,
          onUploadProgress: (event) => {
            if (event.lengthComputable) {
              const progressValue = Math.round((event.loaded / event.total) * 100);
              this.updateFileProgress(fileId, progressValue);
            }
          }
        });
        this.updateFilePath(fileId, response.data);
        return response.data;
      } catch (error) {
        console.error('Error uploading file:', error);
        this.errors.push(error.response ? error.response.data.errors : ['An unexpected error occurred']);
        throw error;
      }
    }
  }
});
