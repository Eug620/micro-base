<!--
 * @Author       : Eug
 * @Date         : 2022-03-23 17:11:51
 * @LastEditTime : 2022-03-25 18:19:43
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/pages/chat.vue
-->
<template>
  <micro-app
    name="chat"
    url="http://127.0.0.1:8081/base/chat/"
    :data="data"
    macro
    baseRoute="/chat"
    disableSandbox
    inline
  >
  </micro-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const data = ref({ from: "来自基座的初始化数据" });
</script>

<style>
</style>
