import Echo from 'laravel-echo'

import Pusher from 'pusher-js'

window.Pusher = Pusher

console.log('Initializing Echo...')
window.Echo = new Echo({
  broadcaster: 'reverb',
  key: import.meta.env.VITE_REVERB_APP_KEY,
  wsHost: import.meta.env.VITE_REVERB_HOST,
  wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
  wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
  forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
  enabledTransports: ['ws', 'wss'],
})
console.log('Echo initialized')

window.Echo.channel('test-channel')
  .listen('HelloWorldEvent', e => {
    console.log('Received event in echo.js:', e.message)
  })