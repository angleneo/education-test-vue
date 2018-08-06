import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/Login.vue'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/views/Home.vue'], resolve),
      children: [
        {
          path: '/home',
          name: 'student',
          component: resolve => require(['@/views/student/index.vue'], resolve)
        },
        {
          path: '/teacher',
          name: 'teacher',
          component: resolve => require(['@/views/teacher/index.vue'], resolve)
        }
      ]
    }
  ]
});
