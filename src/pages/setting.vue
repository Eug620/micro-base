<!--
 * @Author       : Eug
 * @Date         : 2022-04-20 15:59:50
 * @LastEditTime : 2023-03-27 15:16:53
 * @LastEditors  : eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/pages/setting.vue
-->
<!-- https://fontawesome.com/icons -->
<template>
  <a-card class="ml-2.5 h-full relative setting" :bordered="false">
    {{ $t('message.hello') }}
  </a-card>
</template>

<script setup lang="ts">
import i18n from '@/locales/i18n';
// js中使用
console.log(i18n.global.t('message.hello'));
</script>

<style lang="scss" scoped></style>
