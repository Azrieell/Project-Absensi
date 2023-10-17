import { createApp } from 'vue';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import router from "./router/index";
import store from "./store/index";
import "./style.css";
import Vue3Geolocation from 'vue3-geolocation';
import axios from 'axios';

axios.defaults.withCredentials = true;

const app = createApp(App);
app.use(store);
app.use(Vue3Geolocation)
app.use(VueCookies);
app.use(router).mount('#app')
