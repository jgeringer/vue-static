import Vue from 'vue'
Vue.component('secondondemand', () => import(/* webpackChunkName: "secondondemand" */ '@/Vue/OnDemand/secondondemand.vue'))
Vue.component('slide-autoplay', () => import(/* webpackChunkName: "slide-autoplay" */ '@/Vue/OnDemand/slide-autoplay.vue'))
Vue.component('slide-basic', () => import(/* webpackChunkName: "slide-basic" */ '@/Vue/OnDemand/slide-basic.vue'))
Vue.component('slide-thumbnail', () => import(/* webpackChunkName: "slide-thumbnail" */ '@/Vue/OnDemand/slide-thumbnail.vue'))
Vue.component('slider-item', () => import(/* webpackChunkName: "slider-item" */ '@/Vue/OnDemand/slider-item.vue'))
Vue.component('slider', () => import(/* webpackChunkName: "slider" */ '@/Vue/OnDemand/slider.vue'))
