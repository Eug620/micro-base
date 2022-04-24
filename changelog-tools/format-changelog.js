/*
 * @Author       : Eug
 * @Date         : 2022-04-24 15:09:08
 * @LastEditTime : 2022-04-24 15:09:09
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
  replacement: 'Appic Changelog',
  paths: ['CHANGELOG.md'],
  recursive: true,
});

replace({
  regex: reg_notable,
  replacement:
    'Automatically Generate Appic Changelog, Remember not to modify changelog manually',
  paths: ['CHANGELOG.md'],
  recursive: true,
});
