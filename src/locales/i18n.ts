/*
 * @Author       : Eug
 * @Date         : 2022-04-26 12:03:52
 * @LastEditTime : 2022-04-26 14:26:25
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/locales/i18n.ts
 */
import { createI18n } from 'vue-i18n';
import en from './lang/en';
import zh from './lang/zh';
import ja from './lang/ja';
const messages = {
  en: en,
  zh: zh,
  ja: ja,
};
const i18n = createI18n({
  // legacy: false,
  // globalInjection: true,

  locale: 'zh',
  messages,
});

export default i18n;
