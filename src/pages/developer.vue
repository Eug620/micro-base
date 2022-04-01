<!--
 * @Author       : Eug
 * @Date         : 2022-03-28 14:09:28
 * @LastEditTime : 2022-04-01 16:38:02
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/pages/developer.vue
-->
<template>
  <div class="developer">
    <!-- 线上 -->
    <micro-app
      name="developer"
      url="http://47.93.229.170:8082/base/developer/"
      :data="data"
      macro
      baseRoute="/developer"
      disableSandbox
      inline
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const data = ref({ from: "来自基座的初始化数据" });
</script>

<style>
</style>
