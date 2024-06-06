import { createApp } from 'vue'
import App from './App.vue'
import { register } from 'swiper/element/bundle';
import './scss/style.scss';
import {store} from './store/store.js';
const app = createApp(App)
register();

app.use(store);
app.mount('#app');