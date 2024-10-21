import { ofetch } from 'ofetch';

export const $api = ofetch.create({

  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  async onRequest({ options }) {

    const accessToken = useCookie('accessToken').value || import.meta.env.VITE_TOKEN;

    options.headers = {
      ...options.headers,
      Accept: 'application/json',  // Ensure the Accept header is always set
    }

    if (accessToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      }
    }
  },
  async onResponseError({ response }) {
    if (response.status === 401) {
      // Clear the user session and token
      useCookie('accessToken').value = null
      useCookie('userData').value = null

      // Redirect to login page or any other action
      window.location.href = '/login'
    }
  },
})
