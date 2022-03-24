<!--
 * @Author       : Eug
 * @Date         : 2022-03-23 17:11:51
 * @LastEditTime : 2022-03-24 11:00:41
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /test-micro/micro-base/src/pages/vue3.vue
-->
<template>
  <div class="vue3">
    <component
      is="micro-app"
      name="vue3"
      url="http://localhost:3001/micro-app/vue3/"
      :data="data"
      macro
      baseRoute="/vue3"
      disableSandbox
      inline
    />
    <!-- <micro-app
      name="vue3"
      url="http://localhost:3001/micro-app/vue3/"
      :data="data"
      macro
      baseRoute="/vue3"
    >
    </micro-app> -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const data = ref({ from: "来自基座的初始化数据" });
</script>

<style>
</style>
