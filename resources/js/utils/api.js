import { ofetch } from 'ofetch';



export const $api = ofetch.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  async onRequest({ options, request }) {
    // Skip notification init for notification-related endpoints

    const accessToken = useCookie('accessToken').value
    options.headers = {
      ...options.headers,
      Accept: 'application/json',
    }

    if (accessToken) {
      options.headers.Authorization = `Bearer ${accessToken}`
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
export const $customApi = ofetch.create({
  baseURL: import.meta.env.VITE_PYTHON_API_BASE_URL,
  mode: 'cors', // Explicitly enable CORS
  async onRequest({ options }) {

    options.headers = {
      ...options.headers,
      Accept: 'application/json',
    }

  },
  async onResponseError({ response }) {
    if (response.status === 401) {
      useCookie('accessToken').value = null
      useCookie('userData').value = null
      window.location.href = '/login'
    }
  },
})

