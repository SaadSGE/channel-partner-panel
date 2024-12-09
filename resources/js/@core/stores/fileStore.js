import { $api } from "@/utils/api";
import axios from "axios";
import { defineStore } from "pinia";

const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
};

export const useFileStore = defineStore("fileStore", {
  state: () => ({
    files: [],
    filePaths: [],
    errors: [],
    documents: [],
    studentInfo: {
      generalInfo: {
        address: null,
        city: null,
        country: null,
        date_of_birth: null,
        first_name: null,
        gender: null,
        last_name: null,
        mobile: null,
        passport_number: null,
        visa_refusal: null,
      },
      educationalHistory: [],
      employmentHistory: [],
      englishProficiency: {
        listening: null,
        overall_score: null,
        reading: null,
        speaking: null,
        title: null,
        writing: null,
      },
    },
  }),
  actions: {
    async downloadAllFiles(documents = null) {
      try {
        const filesToDownload = documents.map((file) => ({
          path: file.path,
          file_name: file.filename,
        }));

        const formData = new FormData();
        formData.append("documents", JSON.stringify(filesToDownload));

        const response = await $api("/download-all", {
          method: "POST",
          body: formData,
          onUploadProgress: (event) => {
            if (event.lengthComputable) {
              const progressValue = Math.round(
                (event.loaded / event.total) * 100
              );
              console.log(`Progress: ${progressValue}%`);
            }
          },
        });

        const zipUrl = response.data.zipUrl;
        const link = document.createElement("a");
        link.href = zipUrl;
        link.download = "documents.zip";
        link.click();
      } catch (error) {
        console.error("Error downloading all files:", error);
        this.errors.push(
          error.response
            ? error.response.data.errors
            : ["An unexpected error occurred"]
        );
      }
    },
    addFile(file) {
      this.files.push(file);
    },
    updateFileProgress(fileId, progress) {
      const file = this.files.find((f) => f.id === fileId);
      if (file) {
        file.progress = progress;
      }
    },
    async removeFile(fileId) {
      const fileIndex = this.files.findIndex((f) => f.id === fileId);
      if (fileIndex !== -1) {
        const file = this.files[fileIndex];
        this.filePaths = this.filePaths.filter(
          (item) => item.path !== file.path
        );
        this.files.splice(fileIndex, 1);
      }
    },
    updateFilePath(fileId, path) {
      const file = this.files.find((f) => f.id === fileId);
      if (file) {
        file.path = path;
        this.filePaths.push({
          path: path,
          document_name: file.document_name || null,
        });
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
        filename: file.name || "unnamed_file",
        progress: 0,
        path: "",
        document_name: fieldName,
      };
      this.addFile(fileData);

      const formData = new FormData();
      formData.append("student_document", file);
      formData.append("document_name", fieldName);
      formData.append("filename", file.name || `${fieldName}_document`);

      try {
        const response = await axios.post(
          "https://service.shabujglobal.org/process-document",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: false,
            onUploadProgress: (event) => {
              if (event.lengthComputable) {
                const progressValue = Math.round(
                  (event.loaded / event.total) * 100
                );
                this.updateFileProgress(fileId, progressValue);
              }
            },
          }
        );

        this.updateFilePath(fileId, response.data.data.path);
        this.addDocument(fieldName, response.data.data.path, fieldName);

        if (fieldName === "passport" && response.data.data.general_info) {
          this.studentInfo.generalInfo = response.data.data.general_info;
        }

        if (fieldName === "cv-resume") {
          const { data } = response.data;
          if (data.general_info) {
            this.studentInfo.generalInfo.email = data.general_info.email;
          }
          if (data.educational_history) {
            this.studentInfo.educationalHistory = data.educational_history;
          }

          if (data.employment_history) {
            this.studentInfo.employmentHistory = data.employment_history;
          }

          if (data.english_proficiency && data.english_proficiency.length > 0) {
            this.studentInfo.englishProficiency = data.english_proficiency[0];
          }
        }

        return fileId;
      } catch (error) {
        console.error("Error uploading file:", error);
        this.errors.push(
          error.response
            ? error.response.data.errors
            : ["An unexpected error occurred"]
        );
        throw error;
      }
    },
    addDocument(name, path, document_name = null) {
      const displayName = name
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      this.documents.push({
        name: displayName,
        path,
        document_name: document_name,
      });
    },
    removeDocument(name, path) {
      const index = this.documents.findIndex(
        (doc) => doc.name === name && doc.path === path
      );
      if (index !== -1) {
        this.documents.splice(index, 1);
      }
    },
    clearDocuments() {
      this.documents = [];
    },
    getFilePath(fileId) {
      const file = this.files.find((f) => f.id === fileId);
      return file ? file.path : null;
    },
    resetToInitialState() {
      this.documents = [
        /* ... initial documents array ... */
      ];
      this.studentInfo = {
        /* ... initial studentInfo object ... */
      };
    },
    continueWithoutDocuments() {
      console.log("Continuing without documents, keeping test data");
    },
  },
});
