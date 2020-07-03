import Vue from 'vue'
import Router from 'vue-router'
import Call from '@/views/Call'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Call',
      name: 'Call',
      component: Call
    }
  ]
})
