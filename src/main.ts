/*
 * @Author       : Eug
 * @Date         : 2022-03-23 17:01:11
 * @LastEditTime : 2022-03-24 17:06:02
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import microApp from '@micro-zoe/micro-app'
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
      vue3: [{
        loader(code: string) {
          if (process.env.NODE_ENV === 'development') {
            console.log(code, 'vue3 plugins development');
            code = code.replace(/(from|import)(\s*['"])(\/micro-app\/vue3\/)/g, (all) => {
              return all.replace('/micro-app/vue3/', 'http://127.0.0.1:8081/micro-app/vue3/')
            })
          } else {
            console.log(code, 'vue3 plugins production');
            code = code.replace(/(from|import)(\s*['"])(\/micro-app\/vue3\/)/g, (all) => {
              return all.replace('/micro-app/vue3/', 'http://127.0.0.1:8081/micro-app/vue3/')
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
    console.log(url, options, appName);
    
    if (url === 'http://localhost:3001/error.js') {
      return Promise.resolve('')
    }

    let config = null
    if (url === 'http://localhost:3001/micro-app/react16/') {
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

createApp(App).use(router).use(ElementPlus).mount('#app')
