/*
 * @Author: eug yyh3531@163.com
 * @Date: 2022-07-03 13:50:39
 * @LastEditors: eug yyh3531@163.com
 * @LastEditTime: 2022-08-26 22:54:31
 * @FilePath: /micro-base/src/eventCenter/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import microApp, { EventCenterForMicroApp } from '@micro-zoe/micro-app';

// micro-vue 事件注册
const useEventCenterForMicroVue = (): void => {
  window.eventCenterForMicroVue = new EventCenterForMicroApp('chat');
  function eventMicroVue(data: any): void {
    console.log('来自子应用chat的数据', data);
    const { callback } = data;
    callback();
  }
  microApp.addDataListener('chat', eventMicroVue, false);
};

export function useMicroEvent() {
  useEventCenterForMicroVue();
}
