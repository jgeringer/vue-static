'use strict'

import Vue from 'vue'
import store from '@/Scripts/store'
import router from '@/Scripts/router'

import Navigation from '@Components/Navigation.vue'

import Start from '@Vues/Start'
import Second from '@Vues/Second'

import icon from '@/Vue/Components/icon.vue'
import first from '@Components/first.vue'
import './vueImports'
import ondemand from './ondemand'
import accordion from '@/Scripts/custom/accordion.js'
import { slider } from '@/Scripts/custom/slider.js'

// generate svg sprite
const files = require.context('@/Images/svg/symbol/', false, /.*\.svg$/)
files.keys().forEach(files)

let App = new Vue({ // eslint-disable-line no-unused-vars
    el: '#App',
    router,
    store,
    components: {
        Navigation,
        icon,
        first,
        Start,
        Second
    }
})
ondemand()
accordion()
slider()

console.log('main.js done!!')

// router.addRoutes([
//     {
//         path: '/',
//         name: 'Start Page',
//         component: 'Start'
//     },
//     {
//         path: '/second',
//         name: 'Second Page!',
//         component: 'Second'
//     }
// ])
