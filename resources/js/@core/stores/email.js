// src/stores/applicationStore.js
import {
  defineStore
} from 'pinia';

export const useEmailStore = defineStore({
    id: 'email',
    state: () => ({
      receivedEmails: [],
      sentEmails: [],
    }),
    actions: {
      async fetchReceivedEmails() {
        try {
          const response = await $api('/emails/received', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          this.receivedEmails = response.data;
        } catch (error) {
          console.error('Error fetching received emails:', error);
          // Handle error here if necessary
        }
      },

      async fetchSentEmails() {
        try {
          const response = await $api('/emails/sent', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          this.sentEmails = response.data;

        } catch (error) {
          console.error('Error fetching sent emails:', error);
          // Handle error here if necessary
        }
      },
      async sendEmail({ recipients, subject, body }) {
        console.log(recipients)
        console.log(subject)
        console.log(body)
        try {
          const response = await $api('/emails/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              recipients,
              subject,
              body,
            }),
          });
          // Assuming the API returns the sent email data
          this.sentEmails.unshift(response.data);
          return { success: true, message: 'Email sent successfully!' };
        } catch (error) {
          console.error('Error sending email:', error);
          this.errors = error.response
            ? error.response.data.errors
            : ['An unexpected error occurred'];
          return { success: false, message: 'Failed to send email.' };
        }
      },
    },
  });
