import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/topic',
        name: 'Topic',
        component: () => import("../views/Topic.vue")
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import("../views/Mine.vue")
      },
      {
        path: '/search',
        name: 'Search',
        component: () => import("../views/Search.vue")
      },
      {
        path: '/more',
        name: 'More',
        component: () => import("../views/Home/moreMusic.vue")
      },
      {
        path: '/detail/:id',
        name: 'Detail',
        component: () => import("../views/Home/albumDetail.vue"),
        props: true
      }
    ]
  },
  {
    //需要传入: id、歌手、歌曲名、图片
    path: "/player/:id/:name/:image",
    name: 'Player',
    component: () => import("../views/Player.vue"),
    props: true
  }
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active"
})

export default router
