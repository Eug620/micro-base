module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 把头部的大写关了
    'header-case': [0, 'never', 72],
  },
};
