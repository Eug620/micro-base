<!--
 * @Author       : Eug
 * @Date         : 2022-03-23 17:01:11
 * @LastEditTime: 2022-08-27 19:57:18
 * @LastEditors: eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/App.vue
-->
<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user'
import { useSystemStore } from '@/store/modules/app'

// 配置信息
useSystemStore().reload()
// 用户信息
useUserStore().load()
</script>

<style></style>
