import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import App from './App.vue';
import router from './router';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import './assets/tailwind.css';

createApp(App)
  .use(router)
  .use(PrimeVue)
  .use(ConfirmationService)
  .use(ToastService)
  .mount('#app');
