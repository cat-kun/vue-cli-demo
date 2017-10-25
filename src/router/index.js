import Vue from 'vue'
import VueRouter from 'vue-router'

// VueRouter 作为vue的插件
Vue.use(VueRouter)

import home from '@/components/home'
import document from '@/components/document'
import about from '@/components/about'
import user from '@/components/user'

import hobby from '@/views/hobby'
import work from '@/views/work'
import study from '@/views/study'
import slider from '@/components/slider'

// 配置路由
let router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    scrollBehavior (to, from, savePosition){
        /* console.log(to);
        console.log(from);
        console.log(savePosition); */
        /* if(savePosition){
            return savePosition;
        }else{
            return {
                x: 0,
                y: 0
            }
        } */
        // 另一种方式
        if(to.hash){
            return {
                selector: to.hash
            }
        }
    },
    routes: [
        {
            path: '/',
            component: home,
            meta: {
                index: 0
            }
        },
        {
            path: '/home',
            name: 'Home',
            component: home,
            alias: '/index'
        },
        {
            path: '/document',
            name: 'Document',
            meta: {
                index: 1
            },
            components: {
                default: document,
                slider: slider
            }
        },
        {
            path: '/about',
            component: about,
            children: [
                {
                    path: '', //默认的子路由
                    name: 'About',
                    component: study,
                    meta: {
                        index: 2
                    }
                },
                {
                    path: '/work',
                    name: 'Work',
                    component: work
                },
                {
                    path: '/hobby',
                    name: 'Hobby',
                    component: hobby
                }
            ]
        },
        {
            path: '/user/:type?/:userId?', // ? userId 可有可无
            component: user,
            meta: {
                index: 3
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

export default router
