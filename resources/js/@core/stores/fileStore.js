import { defineStore } from 'pinia';

const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
};

export const useFileStore = defineStore('fileStore', {
  state: () => ({
    files: [],
    filePaths: [],
    errors: [],
    documents: [],
  }),
  actions: {
    async downloadAllFiles(documents = null) {
      console.log(documents)
      try {
        // If no documents are passed, use the store's files
        const filesToDownload = documents.map(file => ({
          path: file.path,
          file_name: file.filename,
        }));

        const formData = new FormData();
        formData.append('documents', JSON.stringify(filesToDownload));

        const response = await $api('/download-all', {
          method: 'POST',
          body: formData,
          // You can add a progress handler if needed
          onUploadProgress: (event) => {
            if (event.lengthComputable) {
              const progressValue = Math.round((event.loaded / event.total) * 100);
              console.log(`Progress: ${progressValue}%`);  // Optional: Handle progress UI updates
            }
          }
        });

        const zipUrl = response.data.zipUrl;
        const link = document.createElement('a');
        link.href = zipUrl;
        link.download = 'documents.zip';
        link.click();

      } catch (error) {
        console.error('Error downloading all files:', error);
        this.errors.push(error.response ? error.response.data.errors : ['An unexpected error occurred']);
      }
    },
    addFile(file) {
      this.files.push(file);
    },
    updateFileProgress(fileId, progress) {
      const file = this.files.find(f => f.id === fileId);
      if (file) {
        file.progress = progress;
      }
    },
    async removeFile(fileId) {
      const fileIndex = this.files.findIndex(f => f.id === fileId);
      if (fileIndex !== -1) {
        const file = this.files[fileIndex];
        this.filePaths = this.filePaths.filter(path => path !== file.path);
        this.files.splice(fileIndex, 1);
      }
    },
    updateFilePath(fileId, path) {
      const file = this.files.find(f => f.id === fileId);
      if (file) {
        file.path = path;
        this.filePaths.push(path);
      }
    },
    resetFiles() {
      this.files = [];
      this.filePaths = [];
      this.errors = [];
    },
    async uploadFile(fieldName, file) {
      const fileId = generateUniqueId();
      const fileData = {
        id: fileId,
        filename: file.name || 'unnamed_file',
        progress: 0,
        path: ''
      };
      this.addFile(fileData);

      const formData = new FormData();
      formData.append('student_document', file);
      formData.append('document_name', fieldName);
      formData.append('filename', file.name || `${fieldName}_document`);

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
        this.addDocument(fieldName, response.data);

        return fileId;
      } catch (error) {
        console.error('Error uploading file:', error);
        this.errors.push(error.response ? error.response.data.errors : ['An unexpected error occurred']);
        throw error;
      }
    },
    addDocument(name, path) {
      // Convert field name to display name
      const displayName = name
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      this.documents.push({
        name: displayName,
        path,
      });
    },
    removeDocument(name, path) {
      const index = this.documents.findIndex(doc =>
        doc.name === name && doc.path === path
      );
      if (index !== -1) {
        this.documents.splice(index, 1);
      }
    },
    clearDocuments() {
      this.documents = [];
    },
  }
});
