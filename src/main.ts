/*
 * @Author       : Eug
 * @Date         : 2022-03-23 17:01:11
 * @LastEditTime : 2022-04-01 16:28:48
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import microApp from '@micro-zoe/micro-app'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router';
import useEventCenter from './eventCenter'

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
      // react17: [{
      //   loader(code: string, url: string) {
      //     if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
      //       console.log('react17插件', url)
      //       code = code.replace('window.location.port', '3002')
      //     }
      //     return code
      //   }
      // }],
      chat: [{
        loader(code: string) {
          if (process.env.NODE_ENV === 'development') {
            code = code.replace(/(from|import)(\s*['"])(\/base\/chat\/)/g, (all) => {
              return all.replace('/base/chat/', 'http://127.0.0.1:8081/base/chat/')
            })
          }
          return code
        }
      }],
      developer: [{
        loader(code: string) {
          if (process.env.NODE_ENV === 'development') {
            code = code.replace(/(from|import)(\s*['"])(\/base\/developer\/)/g, (all) => {
              return all.replace('/base/developer/', 'http://127.0.0.1:8082/base/developer/')
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
// 注册事件
useEventCenter()
createApp(App).use(router).use(ElementPlus).mount('#app')
