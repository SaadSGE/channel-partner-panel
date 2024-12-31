// src/stores/applicationStore.ts
import { defineStore } from "pinia";
import { handleErrorResponse } from "../utils/helpers";
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    allUsers: [],
    users: [],
    errors: [],
    user: [],
    profile: [],
    channelPartners: [], // Add this line to store channel partners
  }),
  actions: {
    async fetcAllhUser() {
      try {
        const response = await $api("fetch-all-user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        this.allUsers = response.data;
      } catch (error) {
        console.error("Error getting user details:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },
    async fetchUsers(
      page = 1,
      searchQuery = "",
      role = "",
      parentId = "",
      userStatus = "",
      selectedCountry = "",
      selectedMou = "",
      selectedBranch = "",
      selectedAssignedBranch = "", // Add assigned branch parameter
      fetchAll = false
    ) {
      try {
        const response = await $api("/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            page,
            searchQuery,
            role,
            parentId,
            userStatus,
            selectedCountry,
            selectedMou,
            branch_id: selectedAssignedBranch, // Include branch in params
            fetchAll,
          },
        });

        return response;
      } catch (error) {
        console.error("Error getting users list:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },
    async fetchUser(id) {
      try {
        const response = await $api(`/users/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        return response.data;
      } catch (error) {
        console.error("Error getting user details:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },
    async setParent(userId, parentId) {
      try {
        await $api(`/users/${userId}/set-parent`, {
          method: "POST",
          body: JSON.stringify({ parent_id: parentId }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        await this.fetchUsers(); // Re-fetch users after setting parent
        return { success: true, message: "Parent set successfully!" };
      } catch (error) {
        console.error("Error setting parent:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        return { success: false, message: "Failed to set parent." };
      }
    },
    async deleteUser(id) {
      try {
        await $api(`/users/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        await this.fetchUsers(); // Re-fetch users after deletion
        return { success: true, message: "User deleted successfully!" };
      } catch (error) {
        console.error("Error deleting user:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        return { success: false, message: "Failed to delete user." };
      }
    },

    async fetchParentUsers() {
      try {
        const response = await $api("/api/all-user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.parentUsers = response.data; // Store the parent users in the state
      } catch (error) {
        console.error("Error fetching parent users:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },
    async getUserProfile() {
      try {
        const response = await $api("/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        this.profile = response.data; // Store the user's profile in the state
        return response.data; // Return the profile data
      } catch (error) {
        console.error("Error fetching user profile:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error; // Rethrow the error for handling in the component
      }
    },
    async updateUserProfile(profileData) {
      const payload = {
        first_name: profileData.firstName,
        last_name: profileData.lastName,
        mobile_number: profileData.mobileNumber,
        whatsapp_number: profileData.whatsappNumber,
        company_name: profileData.companyName,
        website: profileData.website,
        address: profileData.address,
        city: profileData.city,
        post_code: profileData.postCode,
        country: profileData.country,
      };

      try {
        const response = await $api("/user/profile", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        this.profile = response.data;

        return response.data;
      } catch (error) {
        console.error("Error updating user profile:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },
    async changePassword(passwordData) {
      try {
        const response = await $api("/user/change-password", {
          method: "POST", // Use POST or PUT depending on your API design
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passwordData),
        });

        return response.data; // Return the response data
      } catch (error) {
        handleErrorResponse(error);
      }
    },
    async fetchChannelPartners() {
      try {
        const response = await $api("/channel-partners", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        this.channelPartners = response.data;
        return response.data;
      } catch (error) {
        console.error("Error fetching channel partners:", error);
        this.errors = error.response
          ? error.response.data.errors
          : ["An unexpected error occurred"];
        throw error;
      }
    },
    async updateUserStatus(userId, status) {
      try {
        const response = await $api(`/users/${userId}/status`, {
          method: "PUT",
          body: JSON.stringify({ status }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        return response;
      } catch (error) {
        console.error("Error updating user status:", error);
        throw error;
      }
    },
  },
});
