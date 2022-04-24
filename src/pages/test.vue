<!--
 * @Author       : Eug
 * @Date         : 2022-04-20 15:59:50
 * @LastEditTime : 2022-04-22 18:39:26
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/pages/test.vue
-->
<template>
  <div class="h-full flex">
    <base-switch v-model="switchValue" disabled />
    <base-switch v-model="switchValue">
      <template v-if="switchValue">
        <i class="fas fa-sun"></i>
      </template>
      <template v-else>
        <i class="fas fa-moon"></i>
      </template>
    </base-switch>
    <base-switch v-model="switchValue" :loading="isLoading" @change="useChange">
    </base-switch>
    <button
      @click="isLoading = !isLoading"
      class="w-28 h-8 bg-yellow-200 border"
    >
      click
    </button>
    {{ switchValue }}

    <i class="fa fa-heart"></i>
    <i class="fas fa-spinner"></i>

    <h1 class="animate__animated animate__slideInLeft">An animated element</h1>
    <i class="fal fa-spinner"></i>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const switchValue = ref(false);
const isLoading = ref(true);

const useChange = (v: any) => {
  console.log('change', v);
};
</script>

<style></style>
