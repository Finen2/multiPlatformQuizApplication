import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/gameView',
    name: 'gameView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/GameView.vue'),
  },
  {
    path: '/mode',
    name: 'mode',
    component: () => import('@/views/Mode.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/Settings.vue'),
    children: [
      {
        path: '/writeQuestions',
        name: 'writeQuestions',
        component: () => import('@/views/settingsViews/WriteQuestions.vue'),
      },
      // {
      //   path: '/getQuestions',
      //   name: 'getQuestions',
      //   component: () => import('@/views/settingsViews/GetQuestions.vue'),
      // },
      // {
      //   path: '/chooseQuestions',
      //   name: 'chooseQuestions',
      //   component: () => import('@/views/settingsViews/ChooseQuestions.vue'),
      // },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
