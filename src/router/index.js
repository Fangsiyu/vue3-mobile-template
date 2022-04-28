import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About',
      keepAlive: false,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/list',
    name: 'List',
    meta: {
      title: '列表',
      keepAlive: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/UserList.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: {
      title: '列表详情',
      keepAlive: false
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/UserDetail.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('beforeEnter', to, from)
  let currentName = from.name + '_' + to.name;
  console.log(currentName, 'currentName')
  let routerWhiteList = ['Detail_List'];
  if (to.name == 'List' && routerWhiteList.includes(currentName)) {
    to.meta.reload = false;
  } else {
    to.meta.reload = true;
  }
  next()

})

export default router
