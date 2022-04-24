/*
 * @Author       : Eug
 * @Date         : 2022-04-24 15:09:08
 * @LastEditTime : 2022-04-24 15:24:09
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/changelog-tools/format-changelog.js
 */
const replace = require('replace');

// 去掉指导
const reg_notable = /All.*guidelines./;

// 修改标题
const reg_title = /Changelog/;

replace({
  regex: reg_title,
  replacement: 'Micro-Base Changelog',
  paths: ['CHANGELOG.md'],
  recursive: true,
});

replace({
  regex: reg_notable,
  replacement: 'micro-app基座项目',
  paths: ['CHANGELOG.md'],
  recursive: true,
});
