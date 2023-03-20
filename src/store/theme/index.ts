/*
 * @Author       : Eug
 * @Date         : 2022-04-28 14:42:06
 * @LastEditTime : 2023-03-20 14:03:13
 * @LastEditors  : eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/store/theme/index.ts
 */
import { defineStore } from 'pinia';
import { useDBStore } from '@/store/db'
import { DataBaseName, DATABASEPUBLIC } from '@/enums/database';
import { ThemeEnum } from '@/enums/system';
import i18n from '@/locales/i18n';

export const useThemeStore = defineStore({
  id: 'ThemeStore',
  state: () => ({
    // theme: ThemeType.light
    theme: '',
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
    getters: {
      getTheme(store: { theme: any; }) {
        return store.theme
      }
    },
    actions: {
      setTheme(theme: ThemeEnum = ThemeEnum.LIGHT) {
        const db = useDBStore()
        this.theme = theme
        document.body.setAttribute('arco-theme', theme);
        db.set({ dbName: DataBaseName.SYSTEM, path: DATABASEPUBLIC.THEME, value: theme })
      },
      reload() {
        const db = useDBStore()
        const defaultConfig = db.get({ dbName: DataBaseName.SYSTEM, defaultValue: {} })
      },
    },
  },
});
