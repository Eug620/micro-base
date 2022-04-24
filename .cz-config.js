/* 
 * @Author       : Eug
 * @Date         : 2022-04-24 11:31:57
 * @LastEditTime : 2022-04-24 11:58:18
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/.cz-config.js
 */
/*
 * @Author       : Eug
 * @Date         : 2022-02-25 12:03:41
 * @LastEditTime : 2022-02-28 14:33:33
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /appiccms-afn/.cz-config.js
 */
module.exports = {
  types: [
    { value: 'feat', name: 'feat:           新增了一些特性' },
    { value: 'fix', name: 'fix:            修复了一些Bug' },
    { value: 'docs', name: 'docs:           只有文档的变动' },
    {
      value: 'style',
      name: 'style:          只修改了代码的风格, 并不会对代码造成影响, (例如, 空格, 格式化, 丢失引号, 等等)',
    },
    {
      value: 'refactor',
      name: 'refactor:       既无法修复错误也未添加功能的代码更改',
    },
    {
      value: 'perf',
      name: 'perf:           更改代码以提高性能',
    },
    { value: 'test', name: 'test:           添加缺失的测试' },
    {
      value: 'chore',
      name: 'chore:          对构建过程或辅助工具和库的更改，例如文档生成',
    },
    { value: 'revert', name: 'revert:         对提交的代码回滚' },
    { value: 'WIP', name: 'WIP:            工作正在进行中' },
  ],

  scopes: [
    { name: '公共组件' },
    { name: 'package.json' },
    { name: 'mock' },
    { name: 'code-format' },
    { name: 'all' },
  ],
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer:
      'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
