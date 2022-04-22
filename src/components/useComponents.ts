/*
 * @Author       : Eug
 * @Date         : 2022-04-22 14:26:21
 * @LastEditTime : 2022-04-22 15:44:59
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/components/useComponents.ts
 */
import BaseSwitch from './base-switch/index.vue'
import { App } from 'vue'

export default function (app:App) {
  app.component(BaseSwitch.name, BaseSwitch)
}