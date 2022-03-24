/*
 * @Author       : Eug
 * @Date         : 2022-03-23 17:01:11
 * @LastEditTime : 2022-03-24 14:51:41
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /test-micro/micro-base/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    fs: {
      strict: false
    },
    open: true,
  },
  css: {
    // [WARNING] "@charset" must be the first rule in the file
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            }
          }
        }
      ],
    },
  }
})
