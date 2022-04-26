<!--
 * @Author       : Eug
 * @Date         : 2022-04-20 15:59:50
 * @LastEditTime : 2022-04-26 14:44:33
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/pages/test.vue
-->
<template>
  <div class="h-full">
    <base-switch v-model="switchValue" disabled class="mt-2" />
    <base-switch v-model="switchValue" class="mt-2">
      <template v-if="switchValue">
        <i class="fas fa-sun"></i>
      </template>
      <template v-else>
        <i class="fas fa-moon"></i>
      </template>
    </base-switch>
    <base-switch
      class="mt-2"
      v-model="switchValue"
      :loading="isLoading"
      @change="useChange"
    ></base-switch>
    <button
      @click="isLoading = !isLoading"
      class="w-28 h-8 bg-yellow-200 border mt-2"
    >
      click
    </button>

    {{ switchValue }}
    <i class="fa fa-heart"></i>
    <i class="fas fa-spinner"></i>

    <h1 class="animate__animated animate__slideInLeft">An animated element</h1>
    <i class="fal fa-spinner"></i>

    <div class="mt-2">
      <p>
        <!-- 页面中使用方式 -->
        {{ $t('message.hello') }}
      </p>
      <p>
        <button
          @click="i18n.global.locale = 'en'"
          class="w-28 h-8 bg-yellow-200 border"
        >
          en
        </button>
        <button
          @click="i18n.global.locale = 'zh'"
          class="w-28 h-8 bg-yellow-200 border"
        >
          zh
        </button>
        <button
          @click="i18n.global.locale = 'ja'"
          class="w-28 h-8 bg-yellow-200 border"
        >
          ja
        </button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import i18n from '../locales/i18n';
const switchValue = ref(false);
const isLoading = ref(true);
// js中使用
console.log(i18n.global.t('message.hello'));

const useChange = (v: any) => {
  console.log('change', v);
};
</script>

<style></style>
