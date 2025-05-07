import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./tailwind.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap';
import $ from 'jquery';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.min.js';
import 'flowbite';
window.$ = window.jQuery = $;


AOS.init({});




createApp(App).use(router).mount('#app')