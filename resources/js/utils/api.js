import { ofetch } from 'ofetch'

export const $api = ofetch.create({
  baseURL: 'https://shabujglobal.org/api',
  async onRequest({ options }) {
    const accessToken = useCookie('accessToken').value
    if (accessToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      }
    }
  },
})
