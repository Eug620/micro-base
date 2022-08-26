/*
 * @Author       : Eug
 * @Date         : 2022-04-28 14:40:23
 * @LastEditTime: 2022-08-26 22:50:45
 * @LastEditors: eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/store/index.ts
 */
import { createPinia } from 'pinia';
import { App } from 'vue';

const store = createPinia();

export function setupStore(app: App<Element>) {
    app.use(store)
}
export { store }