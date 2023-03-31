<!--
 * @Author       : Eug
 * @Date         : 2022-04-20 15:59:50
 * @LastEditTime : 2023-03-31 15:12:54
 * @LastEditors  : eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/pages/player.vue
-->
<!-- https://fontawesome.com/icons -->
<template>
  <!-- <a-card class="ml-2.5 h-full relative setting" :bordered="false">
    {{ $t('message.hello') }}
  </a-card> -->
  <BasePlayer class="h-full ml-2.5 relative"/>
</template>

<script setup lang="ts">
import i18n from '@/locales/i18n';
import BasePlayer from "@/components/base-player/index.vue";
// js中使用
console.log(i18n.global.t('message.hello'));
</script>

<style lang="scss" scoped></style>
