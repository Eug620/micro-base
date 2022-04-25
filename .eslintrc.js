/*
 * @Author       : Eug
 * @Date         : 2022-04-24 11:39:32
 * @LastEditTime : 2022-04-24 11:42:45
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true, // 1.解决 'defineProps' is not defined 相关问题(Vue3.2新增)
  },
  extends: [
    'eslint:recommended',
    // "plugin:vue/essential",// 去掉 vue2 规则
    'plugin:@typescript-eslint/recommended',
    // 2
    'plugin:vue/vue3-recommended', // 添加 vue3 规则
    // 3 启用 eslint-config-prettier: 禁用 ESLint部分规则(与 Prettier 冲突) 注意: 一定要放在最后一项
    'prettier',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {},
};
