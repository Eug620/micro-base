/*
 * @Author       : Eug
 * @Date         : 2022-04-28 14:42:06
 * @LastEditTime : 2022-04-28 17:38:35
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/store/theme/index.ts
 */
import { defineStore } from 'pinia';

export const useThemeStore = defineStore({
  id: 'ThemeStore',
  state: () => ({
    // theme: ThemeType.light
    theme: 'light',
  }),
  actions: {
    toggleTheme() {
      if (this.theme === 'dark') {
        // 设置为暗黑主题
        document.body.setAttribute('arco-theme', 'dark');
      } else {
        // 恢复亮色主题
        document.body.removeAttribute('arco-theme');
      }
    },
  },
});
