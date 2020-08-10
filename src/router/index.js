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
      title: 'Ahmed Bassell - Personal Website',
      metaTags: [
        {
          name: 'description',
          content: 'About Ahmed Bassell career & interests'
        },
        {
          property: 'og:description',
          content: 'About Ahmed Bassell career & interests'
        }
      ]
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
