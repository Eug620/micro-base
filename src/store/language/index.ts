/*
 * @Author       : Eug
 * @Date         : 2022-04-28 14:47:43
 * @LastEditTime : 2022-04-28 17:52:50
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/store/language/index.ts
 */
import { defineStore } from 'pinia';
import i18n from '@/locales/i18n';

export const useLanguageStore = defineStore({
  id: 'LanguageStore',
  state: () => ({
    lang: 'zh',
  }),
  actions: {
    toggleLanguage() {
      i18n.global.locale = this.lang as LanguageType;
    },
  },
});
