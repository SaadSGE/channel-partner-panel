import { defineStore } from 'pinia';
import { handleErrorResponse } from '../utils/helpers';

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: [],
    errors: []
  }),
  actions: {
    async register(form) {
      try {
        const response = await $api('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });

        this.errors = {};
        return response.data;

      } catch (error) {
        handleErrorResponse(error)
      }
    },

    async login(email, password) {
      try {
        const response = await $api('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        return response.data;
      } catch (error) {
        console.error('Error logging in:', error);
        throw error;
      }
    },

    // Implementation of the updateUser function
    async updateUser(form) {
      try {
        // Rearranging and ensuring the form fields match the validation rules
        const userData = {
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          mobile_number: form.mobileNumber,
          whatsapp_number: form.whatsappNumber,
          company_name: form.companyName,
          website: form.website,
          address: form.address,
          city: form.city,
          post_code: form.postCode,
          country: form.country,
          role: form.role,
          status: form.status,
          recruit_countries: form.recruitCountries,

        };


        const response = await $api(`/users/${form.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        // Update the user in the store if needed
        // this.user = response.data;

        return response.data;
      } catch (error) {
        console.error('Error updating user:', error);
        this.errors = error.response?.data.errors || ['An unexpected error occurred'];
        throw error;
      }
    }

  },
});
