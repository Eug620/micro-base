<!--
 * @Author       : Eug
 * @Date         : 2022-03-28 14:09:28
 * @LastEditTime : 2023-02-25 18:20:04
 * @LastEditors  : Eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : \micro-base\src\pages\developer.vue
-->
<template>
  <div class="developer">
    <!-- 线上 -->
    <micro-app
      name="developer"
      url="https://eug.asia:8082/base/developer/"
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
import { ref } from 'vue';

const data = ref({ from: '来自基座的初始化数据' });
</script>

<style></style>
