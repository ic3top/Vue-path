import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

createApp(App).use(router).use(PrimeVue).mount('#app');
