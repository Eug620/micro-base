<!--
 * @Author       : Eug
 * @Date         : 2022-04-20 15:59:50
 * @LastEditTime : 2022-04-22 18:39:26
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/pages/test.vue
-->
<template>
  <div class=" h-full flex">
    <base-switch v-model="switchValue" disabled />{{switchValue}}
    <base-switch v-model="switchValue"  />{{switchValue}}
    <base-switch v-model="switchValue" :loading="isLoading" />{{switchValue}}
    <button @click="isLoading = !isLoading" class="w-28 h-8 bg-yellow-200 border">click</button>
    <nav>
  <i class="fa fa-heart"></i>
</nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const switchValue = ref(false)
const isLoading = ref(true)
</script>

<style>
</style>