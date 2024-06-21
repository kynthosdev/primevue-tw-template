import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import Kynthos from '@/presets/kynthos'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true,
  ripple: true,
  pt: Kynthos
})

app.use(createPinia())
app.use(router)

app.mount('#app')
