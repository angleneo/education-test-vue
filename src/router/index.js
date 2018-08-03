import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['pages/login.vue'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['pages/home.vue'], resolve),
      children: [
        {
          path: '/student',
          name: 'student',
          component: resolve => require(['pages/student.vue'], resolve)
        },
        {
          path: '/teacher',
          name: 'teacher',
          component: resolve => require(['pages/teacher.vue'], resolve)
        }
      ]
    }
  ]
})
