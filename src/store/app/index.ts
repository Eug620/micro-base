/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-02-21 14:36:15
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-23 14:52:15
 * @FilePath     : /micro-base/src/store/app/index.ts
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { LangEnum, ThemeEnum, SpecialEfficiencyEnum } from '@/enums/system';
import { defineStore } from 'pinia';
import i18n from '@/locales/i18n';
import { useDBStore } from '@/store/db'
import { DataBaseName, DATABASEPUBLIC } from '@/enums/database';
import { nextTick } from "vue";

export const useSystemStore = defineStore({
  id: 'app',
  state: () => ({
    // 主题
    theme: '',
    // 语言
    lang: '',
    // 菜单栏展开状态
    collapsed: true,
    // 页面特效
    specialEfficiency: <String | boolean>false
  }),
  getters: {
    getTheme(store) {
      return store.theme
    },
    getCollapsed(store) {
      return store.collapsed
    },
    getSpecialEfficiency(store) {
      return store.specialEfficiency
    }
  },
  actions: {
    reload() {
      const db = useDBStore()
      const defaultConfig = db.get({ dbName: DataBaseName.SYSTEM, defaultValue: {} })
      this.setTheme(defaultConfig?.theme)
      this.setLang(defaultConfig?.lang)
      this.setCollapsed(defaultConfig?.collapsed)
      this.setSpecialEfficiency(defaultConfig?.specialEfficiency)
      this.fetchSpecialEfficiency()
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
    },
    setCollapsed(collapsed: boolean, type?: string) {
      if ([void 0, 'clickTrigger'].includes(type)) {
        const db = useDBStore()
        this.collapsed = collapsed
        db.set({ dbName: DataBaseName.SYSTEM, path: DATABASEPUBLIC.COLLAPSED, value: collapsed })
      }
    },
    setSpecialEfficiency(specialEfficiency: SpecialEfficiencyEnum | boolean = false) {
      const db = useDBStore()
      this.specialEfficiency = specialEfficiency
      db.set({ dbName: DataBaseName.SYSTEM, path: DATABASEPUBLIC.SPCIALEFFICIENCY, value: specialEfficiency })
    },
    fetchSpecialEfficiency() {
      if (this.specialEfficiency) {
        const scripts = document.createElement('script')
        scripts.src = `${this.getSpecialEfficiency}`
        nextTick(() => {
          document.body.appendChild(scripts)
        })
      }
    }
  },
});
