import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'
import { createApp } from 'vue'

// Styles
import VueFileAgentNext from '@boindil/vue-file-agent-next'
import '@boindil/vue-file-agent-next/dist/vue-file-agent-next.css'
import '@core-scss/template/index.scss'
import '@styles/styles.scss'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueSweetalert2 from 'vue-sweetalert2'


// Create vue app
const app = createApp(App)
app.use(VueFileAgentNext)
app.use(VueSweetalert2)


// Register plugins
registerPlugins(app)

// Mount vue app
app.mount('#app')
