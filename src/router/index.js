import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Ahmed Bassell - About',
      metaTags: [
        {
          name: 'description',
          content: 'Ahmed Bassell\'s  interests'
        },
        {
          property: 'og:description',
          content: 'Ahmed Bassell\'s  interests'
        }
      ]
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'Ahmed Bassell - Blog',
      metaTags: [
        {
          name: 'description',
          content: 'Ahmed Bassell\'s articles'
        },
        {
          property: 'og:description',
          content: 'Ahmed Bassell\'s articles'
        }
      ]
    }
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
