/*
 * @Author       : Eug
 * @Date         : 2022-04-22 14:26:21
 * @LastEditTime: 2022-08-27 19:34:46
 * @LastEditors: eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/components/useComponents.ts
 */
import BaseSwitch from './base-switch/index.vue';
import BaseSignIn from './base-sign-in/index.vue';
import BaseSignUp from './base-sign-up/index.vue';
import BaseSignOut from './base-sign-out/index.vue';
import { App } from 'vue';

export default function (app: App) {
  app.component(BaseSwitch.name, BaseSwitch);
  app.component(BaseSignIn.name, BaseSignIn);
  app.component(BaseSignUp.name, BaseSignUp);
  app.component(BaseSignOut.name, BaseSignOut);
}
