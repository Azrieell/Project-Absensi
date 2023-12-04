import { createApp } from 'vue';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import router from "./router/index";
import store from "./store/index";  
import "./style.css";
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000/api/v1'
axios.interceptors.request.use(config => {
  // Ambil token dari localStorage
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, error => {
  // Tangani kesalahan pada permintaan
  return Promise.reject(error);
});
const app = createApp(App);     
app.use(store); 
app.use(VueCookies);
app.use(router).mount('#app');