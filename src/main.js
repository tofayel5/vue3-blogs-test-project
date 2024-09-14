import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import router from './router'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import "@bhplugin/vue3-datatable/dist/style.css";
import './permission'
const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
