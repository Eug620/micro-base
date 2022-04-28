<!--
 * @Author       : Eug
 * @Date         : 2022-04-20 15:59:50
 * @LastEditTime : 2022-04-28 17:44:34
 * @LastEditors  : Eug
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
        v-model="LanguageStore.lang"
        @change="LanguageStore.toggleLanguage"
      >
        <a-radio value="en">en</a-radio>
        <a-radio value="zh">zh</a-radio>
        <a-radio value="ja">ja</a-radio>
      </a-radio-group>
    </a-card>

    <a-card :style="{ width: '360px' }" title="主题切换">
      <a-radio-group
        type="button"
        v-model="ThemeStore.theme"
        @change="ThemeStore.toggleTheme"
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
import { useThemeStore } from 'store/theme';
import { useLanguageStore } from 'store/language';

const ThemeStore = useThemeStore();

const LanguageStore = useLanguageStore();
const switchValue = ref(false);
const isLoading = ref(true);
// js中使用
console.log(i18n.global.t('message.hello'));

const localeLang = ref(i18n.global.locale);
const useLangChange = (v: LanguageType) => {
  i18n.global.locale = v;
};
</script>

<style>
.test-background {
  background-color: rgb(var(--gray-2));
  color: rgb(var(--gray-10));
}
</style>
