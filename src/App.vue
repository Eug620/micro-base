<!--
 * @Author       : Eug
 * @Date         : 2022-03-23 17:01:11
 * @LastEditTime: 2022-08-25 18:28:37
 * @LastEditors: eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/App.vue
-->
<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useUserStore } from 'store/user'
useUserStore().reloadData()
</script>

<style></style>
