<!--
 * @Author       : Eug
 * @Date         : 2022-03-28 14:09:28
 * @LastEditTime: 2022-09-09 09:55:04
 * @LastEditors: eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/pages/developer.vue
-->
<template>
  <!-- 线上 -->
  <micro-app
    name="developer"
    url="http://47.93.229.170:8082/base/developer/"
    :data="data"
    macro
    baseRoute="/developer"
    disableSandbox
    inline
    keep-alive
  />
  <!-- 本地 -->
  <!-- <micro-app
      name="developer"
      url="http://127.0.0.1:8082/base/developer/"
      :data="data"
      macro
      baseRoute="/developer"
      disableSandbox
      inline
    /> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const data = ref({ from: '来自基座的初始化数据' });
</script>

<style></style>
