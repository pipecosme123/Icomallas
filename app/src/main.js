import { createApp } from 'vue';

import { plugin as FormKitPlugin, defaultConfig } from '@formkit/vue';

import 'bootstrap/dist/css/bootstrap.css'

import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(FormKitPlugin, defaultConfig)
  .mount('#app')
