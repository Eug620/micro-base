/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-02-21 14:36:15
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-02-21 14:36:18
 * @FilePath     : /micro-base/src/store/app/index.ts
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { LangEnum, ThemeEnum } from '@/enums/system';
import { defineStore } from 'pinia';
import i18n from '@/locales/i18n';
import { useDBStore } from '@/store/db'
import { DataBaseName, DATABASEPUBLIC } from '@/enums/database';

export const useSystemStore = defineStore({
  id: 'app',
  state: () => ({
    // 主题
    theme: '',
    // 语言
    lang: ''
  }),
  getters: {
    getTheme(store) {
      return store.theme
    }
  },
  actions: {
    reload() {
      const db = useDBStore()
      const defaultConfig = db.get({ dbName: DataBaseName.SYSTEM, defaultValue: {} })
      this.setTheme(defaultConfig?.theme)
      this.setLang(defaultConfig?.lang)

    },
    setTheme(theme: ThemeEnum = ThemeEnum.DARK) {
      const db = useDBStore()
      this.theme = theme
      document.body.setAttribute('arco-theme', theme);
      db.set({ dbName: DataBaseName.SYSTEM, path: DATABASEPUBLIC.THEME, value: theme })
    },
    setLang(lang: LangEnum = LangEnum.ZH) {
      const db = useDBStore()
      this.lang = lang
      i18n.global.locale = lang
      db.set({ dbName: DataBaseName.SYSTEM, path: DATABASEPUBLIC.LANG, value: lang })
    }
  },
});
