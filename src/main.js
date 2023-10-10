import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/index";
import store from "./store/index";
import "./style.css";
import Vue3Geolocation from 'vue3-geolocation';

const app = createApp(App);
app.use(store);
app.use(Vue3Geolocation);
app.use(router).mount('#app')
