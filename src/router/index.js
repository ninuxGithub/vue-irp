import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/readme'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                	path: '/studenttable',
                	component: resolve => require(['../components/page/StudentTable.vue'], resolve)
                },
                {
                	path: '/demo',
                	component: resolve => require(['../components/page/Demo.vue'], resolve)
                },
                {
                	path: '/mergeTable',
                	component: resolve => require(['../components/page/MergeTable.vue'], resolve)
                }

            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve)
        },
    ]
})
