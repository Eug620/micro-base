<!--
 * @Author       : Eug
 * @Date         : 2022-03-23 17:11:51
 * @LastEditTime : 2022-03-25 11:43:39
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/pages/vue3.vue
-->
<template>
  <div class="vue3">
    <!-- <component
      v-bind:is="'micro-app'"
      name="vue3"
      v-bind:url="`http://${process.env.NODE_ENV === 'development' ? 'localhost' : '47.93.229.170'}:8081/micro-app/vue3/`"
      :data="data"
      macro
      baseRoute="/vue3"
      disableSandbox
      inline
    /> -->
    <component
      is="micro-app"
      name="vue3"
      url="http://47.93.229.170:8081/micro-app/vue3/"
      :data="data"
      macro
      baseRoute="/vue3"
      disableSandbox
      inline
    />
    <!-- <micro-app
      name="vue3"
      :url="`http://127.0.0.1:8081/micro-app/vue3/`"
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
