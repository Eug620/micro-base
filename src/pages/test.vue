<!--
 * @Author       : Eug
 * @Date         : 2022-04-20 15:59:50
 * @LastEditTime: 2022-08-27 05:58:42
 * @LastEditors: eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/pages/test.vue
-->
<template>
  <div class="h-full p-9">
    <!-- <base-switch v-model="switchValue" disabled class="mt-2" />
    <base-switch v-model="switchValue" class="mt-2">
      <template v-if="switchValue">
        <i class="fas fa-sun"></i>
      </template>
      <template v-else>
        <i class="fas fa-moon"></i>
      </template>
    </base-switch>
    <base-switch class="mt-2" v-model="switchValue" :loading="isLoading" @change="useChange"></base-switch>
    <button @click="isLoading = !isLoading" class="w-28 h-8 bg-yellow-200 border mt-2">click</button>
    {{ switchValue }} -->
    <i class="fa fa-heart"></i>
    <i class="fas fa-spinner"></i>

    <h1 class="animate__animated animate__slideInLeft">An animated element</h1>
    <i class="fal fa-spinner"></i>

    <p>
      <!-- 页面中使用方式 -->
      {{ $t('message.hello') }}
    </p>

    <a-card :style="{ width: '360px' }" title="语言切换">
      <a-radio-group
        type="button"
        :default-value="system.lang"
        @change="system.setLang"
      >
        <a-radio value="en">en</a-radio>
        <a-radio value="zh">zh</a-radio>
        <a-radio value="ja">ja</a-radio>
      </a-radio-group>
    </a-card>

    <a-card :style="{ width: '360px' }" title="主题切换">
      <a-radio-group
        type="button"
        :default-value="system.theme"
        @change="system.setTheme"
      >
        <a-radio value="dark">dark</a-radio>
        <a-radio value="light">light</a-radio>
      </a-radio-group>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import i18n from '@/locales/i18n';
import { useSystemStore } from 'store/modules/app'
import { LangEnum } from '@/enums/system';
import { useUserWithStore } from '@/store/modules/user'

const system = useSystemStore()

const switchValue = ref(false);
const isLoading = ref(true);
// js中使用
console.log(i18n.global.t('message.hello'));
</script>

<style>
.test-background {
  background-color: rgb(var(--gray-2));
  color: rgb(var(--gray-10));
}
</style>
