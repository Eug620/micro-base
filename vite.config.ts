/*
 * @Author       : Eug
 * @Date         : 2022-03-23 17:01:11
 * @LastEditTime: 2022-08-27 23:00:08
 * @LastEditors: eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/vite.config.ts
 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
const { resolve } = require('path');

// TODO 解决控制台警报i8n
const getEnvFn = (mode, target) => {
  return loadEnv(mode, process.cwd())[target];
};
// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [
      // scriptName(),
      vue(),
      createHtmlPlugin({
        inject: {
          data: {
            VITE_APP_TITLE: getEnvFn(mode, 'VITE_APP_TITLE'),
          },
        },
      }),
      Components({
        resolvers: [ArcoResolver()],
      }),
    ],
    server: {
      port: 8080,
      fs: {
        strict: false,
      },
      open: true,
      proxy: {
        '/dev_base_api': {
          // target: 'http://127.0.0.1:5000',
          target: 'http://47.93.229.170:5000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev_base_api/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        store: resolve(__dirname, './src/store'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      },
      extensions: ['.js', '.json', '.ts', '.vue'], // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    // css: {
    //   // [WARNING] "@charset" must be the first rule in the file
    //   postcss: {
    //     plugins: [
    //       {
    //         postcssPlugin: 'internal:charset-removal',
    //         AtRule: {
    //           charset: (atRule) => {
    //             if (atRule.name === 'charset') {
    //               atRule.remove();
    //             }
    //           }
    //         }
    //       }
    //     ],
    //   },
    // },
    base: '/',
    build: {
      assetsDir: 'assets',
      //设置为 false 来禁用将构建后的文件写入磁盘
      write: true,
      //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
      emptyOutDir: true,
      //启用/禁用 brotli 压缩大小报告
      brotliSize: true,
      //chunk 大小警告的限制
      chunkSizeWarningLimit: 1000,
      // 移除console
      minify: 'terser',
      terserOptions: {
        compress: {
          //生产环境时移除console
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    //调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
    logLevel: 'info',
    //设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    clearScreen: true,
  });
