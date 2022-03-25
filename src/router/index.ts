/*
 * @Author       : Eug
 * @Date         : 2022-03-23 17:10:34
 * @LastEditTime : 2022-03-25 18:20:44
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/router/index.ts
 */
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/',
    redirect: '/chat/'
  },
  {
    path: '/react17/:page*',
    name: 'react17',
    component: () => import('../pages/react17.vue'),
  },
  {
    path: '/chat/:page*',
    name: 'chat',
    component: () => import('../pages/chat.vue'),
  }
];

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL || '/micro-app/'), routes: routes
  history: createWebHistory('/base/'), routes: routes
})

export default router;
