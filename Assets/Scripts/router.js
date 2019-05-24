/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'

import Start from '@Vues/Start'
import Second from '@Vues/Second'

const templates = {
    Start,
    Second
}  

Vue.use(Router)

// var map = [
//     {
//         path: '/',
//         name: 'Start Page',
//         component: Start
//     },
//     {
//         path: '/second',
//         name: 'Second Page!',
//         component: Second
//     }
// ]
// console.warn('map:::: ', map)

var navigation = window.navigation;
console.warn('navigation::: ', navigation)

for (var prop in navigation) {
    var componentName = navigation[prop].component
    componentName = templates[componentName]
    navigation[prop].component = componentName
}

var routes = navigation // map

export default new Router({
    routes: routes
})

