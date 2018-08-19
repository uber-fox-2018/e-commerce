import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Upload from './views/ImageUpload.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Checkout from './views/Checkout.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    }
  ]
})
