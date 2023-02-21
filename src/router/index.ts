/*
 * @Author       : Eug
 * @Date         : 2022-03-23 17:10:34
 * @LastEditTime : 2023-02-21 16:26:57
 * @LastEditors  : eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import {
  IconQuestion,
  IconApps,
  IconCode,
  IconTool,
  IconSettings,
  IconCommand
} from '@arco-design/web-vue/es/icon';
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

export const frameIn = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { icon: IconCommand },
    component: () => import('@/pages/dashboard.vue'),
  },
  {
    path: '/setting',
    name: 'setting',
    meta: { icon: IconSettings },
    component: () => import('@/pages/setting.vue'),
  },
  {
    path: '/developer/:page*',
    name: 'developer',
    meta: { icon: IconTool },
    component: () => import('@/pages/developer.vue'),
  },
  {
    path: '/chat/:page*',
    name: 'chat',
    meta: { icon: IconCode },
    component: () => import('@/pages/chat.vue'),
  },
  
]
const routes = [
  {
    path: '/',
    name: 'layout',
    // component: () => import('../layout/index.vue'),
    component: () => import('@/layout/index.vue'),
    meta: { icon: IconApps },
    // redirect: '/chat/',
    redirect: '/dashboard/',
    children: [
      ...frameIn
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    meta: { icon: IconQuestion },
    component: () => import('@/NotFound/index.vue'),
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
