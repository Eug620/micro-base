<!--
 * @Author       : Eug
 * @Date         : 2022-03-23 17:01:11
 * @LastEditTime: 2022-08-27 03:10:20
 * @LastEditors: eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/App.vue
-->
<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useUserWithStore } from '@/store/modules/user'
import { useSystemStore } from '@/store/modules/app'


useSystemStore().reload()
useUserWithStore().load()
</script>

<style></style>
