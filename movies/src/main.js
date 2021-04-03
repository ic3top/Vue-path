import 'mdb-vue-ui-kit/css/mdb.min.css';
import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import store from './store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'root',
      component: App
    }
  ]
});

createApp(App).use(store).use(router).mount('#app');
