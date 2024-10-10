import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import StyleClass from 'primevue/styleclass';

import App from './App.vue'
import router from './router'


import '@/assets/style.css';
import '@/assets/tailwind.css';
import '@/assets/layout/layout.scss'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
      preset: Aura,
      options: {
          darkModeSelector: '.app-dark'
      }
  }
});

app.directive('styleclass', StyleClass);

app.use(createPinia())
app.use(router)
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app')
