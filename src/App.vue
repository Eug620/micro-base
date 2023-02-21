<!--
 * @Author       : Eug
 * @Date         : 2022-03-23 17:01:11
 * @LastEditTime : 2023-02-21 14:37:29
 * @LastEditors  : eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/App.vue
-->
<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useSystemStore } from '@/store/app'
const systemStore = useSystemStore()

// 配置信息
systemStore.reload()
</script>

<style></style>
