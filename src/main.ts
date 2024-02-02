import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue3 } from 'bootstrap-vue-3'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)
// Make BootstrapVue available throughout your project
app.use(BootstrapVue3)

app.mount('#app')
