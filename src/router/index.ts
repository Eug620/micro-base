/*
 * @Author       : Eug
 * @Date         : 2022-03-23 17:10:34
 * @LastEditTime : 2022-04-21 11:56:57
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';

//配置进度条参数
// NProgress.configure({ showSpinner: false, minimum: 0.2, easeing: 'swing', speed: 1000, trickleRate: 0.2 });
NProgress.configure({
  showSpinner: false,
  easing: 'linear',
  speed: 1000,
  minimum: 0.2,
  trickle: false,
  trickleSpeed: 800,
});

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout/index.vue'),
    redirect: '/chat/',
    children: [
      {
        path: '/developer/:page*',
        name: 'developer',
        component: () => import('../pages/developer.vue'),
      },
      {
        path: '/chat/:page*',
        name: 'chat',
        component: () => import('../pages/chat.vue'),
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('../pages/test.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../NotFound/index.vue'),
  },
];

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL || '/micro-app/'), routes: routes
  history: createWebHistory('/base/'),
  routes: routes,
});
router.beforeEach(async (to, from, next) => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
  next();
});
router.afterEach((to) => {
  NProgress.done();
});
export default router;
