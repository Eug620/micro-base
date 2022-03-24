/*
 * @Author       : Eug
 * @Date         : 2022-03-23 17:10:34
 * @LastEditTime : 2022-03-24 11:30:54
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /test-micro/micro-base/src/router/index.ts
 */
import {createRouter, createWebHistory} from "vue-router";
console.log(import.meta.env.BASE_URL,'!!!');

const routes = [
  {
    path: '/',
    redirect: '/vue3/'
  },
  // {
  //   path: '/react16/:page*',
  //   name: 'react16',
  //   component: React16,
  // },
  {
    path: '/react17/:page*',
    name: 'react17',
    component: () => import('../pages/react17.vue'),
  },
  {
    path: '/vue3/:page*',
    name: 'vue3',
    component: () => import('../pages/vue3.vue'),
  }
];

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL || '/micro-app/'), routes: routes
  history: createWebHistory('/micro-app/'), routes: routes
})

export default router;
