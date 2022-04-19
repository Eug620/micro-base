<!--
 * @Author       : Eug
 * @Date         : 2022-03-23 17:11:51
 * @LastEditTime : 2022-04-19 19:56:51
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/pages/chat.vue
-->
<template>
  <!-- 线上 -->
  <micro-app
    name="chat"
    url="http://47.93.229.170:8081/base/chat/"
    :data="data"
    macro
    baseRoute="/chat"
    disableSandbox
    inline
  />
  <!-- 本地 -->
  <!-- <micro-app
    name="chat"
    url="http://127.0.0.1:8081/base/chat/"
    :data="data"
    macro
    baseRoute="/chat"
    disableSandbox
    inline
  /> -->
</template>

<script lang="ts" setup>
import { ref } from "vue";

const data = ref({ from: "来自基座的初始化数据" });
</script>

<style>
</style>
