/*
 * @Author       : Eug
 * @Date         : 2022-03-23 17:01:11
 * @LastEditTime : 2022-03-25 18:21:05
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import microApp,{ EventCenterForMicroApp } from '@micro-zoe/micro-app'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router';

microApp.start({
  lifeCycles: {
    created() {
      console.log('created 全局监听')
    },
    beforemount() {
      console.log('beforemount 全局监听')
    },
    mounted() {
      console.log('mounted 全局监听')
    },
    unmount() {
      console.log('unmount 全局监听')
    },
    error() {
      console.log('error 全局监听')
    }
  },
  plugins: {
    modules: {
      react17: [{
        loader(code: string, url: string) {
          if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
            console.log('react17插件', url)
            code = code.replace('window.location.port', '3002')
          }
          return code
        }
      }],
      chat: [{
        loader(code: string) {
          if (process.env.NODE_ENV === 'development') {
            code = code.replace(/(from|import)(\s*['"])(\/base\/chat\/)/g, (all) => {
              return all.replace('/base/chat/', 'http://127.0.0.1:8081/base/chat/')
            })
          }
          return code
        }
      }]
    }
  },
  /**
   * 自定义fetch
   * @param url 静态资源地址
   * @param options fetch请求配置项
   * @returns Promise<string>
   */
  fetch(url: string, options: any, appName: string | null) {
    if (url === 'http://localhost:3001/error.js') {
      return Promise.resolve('')
    }

    let config = null
    if (url === 'http://localhost:3001/base/react16/') {
      config = {
        headers: {
          'custom-head': 'custom-head',
        }
      }
    }

    return fetch(url, Object.assign(options, config)).then((res) => {
      return res.text()
    })
  }
})

// 注意：每个vite子应用根据appName单独分配一个通信对象
window.eventCenterForMicroVue = new EventCenterForMicroApp('chat')
function dataListener (data:any):void {
  console.log('来自子应用my-app的数据', data)
  const { callback } = data
  callback()
}
microApp.addDataListener('chat', dataListener, false)
createApp(App).use(router).use(ElementPlus).mount('#app')
