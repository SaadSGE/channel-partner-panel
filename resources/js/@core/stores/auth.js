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
          body: form
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

    async getLoginActivity() {
      try {
        const response = await $api('/user/login-activity', {
          method: 'GET',
        });
        return response.data;
      } catch (error) {
        console.error('Error fetching login activity:', error);
        throw error;
      }
    },

    // Implementation of the updateUser function
    async updateUser(form) {
      try {
        // Create FormData object
        const formData = new FormData();

        // Append basic user data to FormData
        formData.append('first_name', form.firstName);
        formData.append('last_name', form.lastName);
        formData.append('email', form.email);
        formData.append('mobile_number', form.mobileNumber);
        formData.append('whatsapp_number', form.whatsappNumber);
        formData.append('company_name', form.companyName);
        formData.append('website', form.website);
        formData.append('address', form.address);
        formData.append('city', form.city);
        formData.append('post_code', form.postCode);
        formData.append('country', form.country);
        formData.append('role', form.role);
        formData.append('status', form.status);
        formData.append('_method','PUT');

        // Handle recruit countries
        if (Array.isArray(form.recruitCountries)) {
          form.recruitCountries.forEach((country, index) => {
            formData.append(`recruit_countries[${index}]`, country);
          });
        }

        // Append files to FormData if present
        if (form.agreement) {
          formData.append('agreement', form.agreement[0]);
        }

        if (form.commission_structure) {
          formData.append('commission_structure', form.commission_structure[0]);
        }

        // Send the PUT request with FormData
        const response = await $api(`/users/${form.id}`, {
          method: 'POST',
          body: formData, // Send FormData directly
        });

        return response.data;

      } catch (error) {
        console.error('Error updating user:', error);
        this.errors = error.response?.data.errors || ['An unexpected error occurred'];
        throw error;
      }
    },
    async resetPassword(email) {
      try {
        const response = await $api('/reset-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        return response.data;
      } catch (error) {
        handleErrorResponse(error)
      }
    }


  },
});
