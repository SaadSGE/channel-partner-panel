import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

window.Pusher = Pusher

const accessToken = useCookie('accessToken')
const userData = useCookie('userData')
console.log('Initializing Echo...')
window.Echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
    wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
    authEndpoint: '/broadcasting/auth',
    auth: {
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + accessToken.value
        }
    }
})



// Listen on private channel
window.Echo.private(`App.Models.User.${userData.value.id}`)
    .listen('.new.application.event', (e) => {
        console.log('New application event received:', e)
        showNotification(e.details)
    })
    .listen('.application.event', (e) => {
        console.log('Application event received:', e)
        showNotification(e.details)
    })
    .listen('.university.communication.event', (e) => {
        console.log('University communication event received:', e)
        showNotification(e.details)
    })
    .listen('.application.officer.assigned.event', (e) => {
        console.log('Application officer assigned event received:', e)
        showNotification(e.details)
    })
    .listen('.application.request.accepted.event', (e) => {
        console.log('Application request accepted event received:', e)
        showNotification(e.details)
    })
    .listen('.application.request.rejected.event', (e) => {
        console.log('Application request rejected event received:', e)
        showNotification(e.details)
    })
    .listen('.aco.ao.communication.added.event', (e) => {
        console.log('ACO-AO communication added event received:', e)
        showNotification(e.details)
    })
    .listen('.compliance.officer.assigned.event', (e) => {
        console.log('Compliance officer assigned event received:', e)
        showNotification(e.details)
    })
    .listen('.compliance.request.accepted.event', (e) => {
        console.log('Compliance request accepted event received:', e)
        showNotification(e.details)
    })
    .listen('.compliance.request.rejected.event', (e) => {
        console.log('Compliance request rejected event received:', e)
        showNotification(e.details)
    })
    .listen('.aco.co.communication.added.event', (e) => {
        console.log('ACO-CO communication added event received:', e)
        showNotification(e.details)
    })
    .listen('.comment.added.event', (e) => {
        console.log('Comment added event received:', e)
        showNotification(e.details)
    })

const showNotification = (details) => {
    console.log('Showing notification:', details)
}


