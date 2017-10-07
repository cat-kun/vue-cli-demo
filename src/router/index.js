import Vue from 'vue'
import VueRouter from 'vue-router'

// VueRouter 作为vue的插件
Vue.use(VueRouter)

import home from '@/components/home.vue'
import about from '@/components/about'

// 配置路由
let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: home
        },
        {
            path: '/about',
            component: about
        }
    ]
})

export default router
