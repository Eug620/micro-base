/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-03-20 14:31:00
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-07-18 13:46:37
 * @FilePath     : /micro-base/src/eventCenter/index.ts
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
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

// micro-react 事件注册
const useEventCenterForMicroReact = (): void => {
  window.eventCenterForMicroReact = new EventCenterForMicroApp('developer');
  function eventMicroReact(data: any): void {
    console.log('来自子应用developer的数据', data);
    const { callback } = data;
    callback && callback();
  }
  microApp.addDataListener('developer', eventMicroReact, false);
};

export default function useEventCenter() {
  useEventCenterForMicroVue();
  useEventCenterForMicroReact();
}
