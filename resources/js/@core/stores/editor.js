import { defineStore } from "pinia";

export const editor = defineStore({
    id: "editor",
    state: () => ({
        editors: []
    }),
    actions: {
        async getEditors() {
            try {
              const response = await $api('/fetch-editor', { method: 'GET' });
              // console.log(response, "editor response")
              this.editors = response.data;
              // console.log(response.data, "editor response")
            } catch (error) {
              console.error('Error fetching editors:', error);
              this.errors = error.response ? error.response.data.errors : ['An unexpected error occurred'];
            }
          },
    }
})
