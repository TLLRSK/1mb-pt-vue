import { createApp } from 'vue'
import App from './App.vue'
import { register } from 'swiper/element/bundle';
import './scss/style.scss';

const app = createApp(App)

register();

app.mount('#app')