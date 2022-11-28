import { createApp } from 'vue'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'
import './style.css'
import router from './router/index.js'
import store from './store'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Quasar, {
  plugins: {}, 
})


app.mount('#app')