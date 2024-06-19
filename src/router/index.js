import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    isShow: false,
    children: [
      {
        path: '/first',
        name: 'First',
        //懒加载方式也可选择上方home的方式直接载入 webpack中为打包后的名字
        component: () => import(/* webpackChunkName: "login" */ '../views/first.vue'),
        isShow: true,
        title: '模版相关文档'
      },
      {
        path: '/second',
        name: 'Second',
        component: () => import(/* webpackChunkName: "login" */ '../views/second.vue'),
        isShow: true,
        title: '表格使用'
      },
      {
        path: '/third',
        name: 'Third',
        component: () => import(/* webpackChunkName: "login" */ '../views/third.vue'),
        isShow: true,
        title: 'Third'
      },
    ]
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    isShow: false
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
