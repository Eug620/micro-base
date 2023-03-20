<!--
 * @Author       : Eug
 * @Date         : 2022-04-20 15:59:50
 * @LastEditTime : 2023-02-24 20:37:42
 * @LastEditors  : Eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : \micro-base\src\pages\setting.vue
-->
<template>
  <div class="h-full p-2.5">
    <h3 class="animate__animated animate__slideInRight"><i class="fa fa-heart mb-4"></i></h3>
    <h3><i class="fas fa-spinner mb-4"></i></h3>
    <h3 class="animate__animated animate__slideInRight"><i class="fal fa-spinner mb-4"></i></h3>
    <h3>
      <!-- 页面中使用方式 -->
      {{ $t('message.hello') }}
    </h3>

    <a-card class="mb-4 sm:w-1/2 lg:w-2/5  " title="语言切换">
      <a-radio-group type="button" v-model="SystemStore.lang" @change="SystemStore.setLang">
        <a-radio :value="lang" :key="lang" v-for="lang in LangEnum">{{ lang }}</a-radio>
      </a-radio-group>
    </a-card>

    <a-card class="lg:w-2/5 sm:w-1/2" title="主题切换">
      <a-radio-group type="button" v-model="SystemStore.theme" @change="SystemStore.setTheme">
        <a-radio :value="theme" v-for="theme in ThemeEnum" :key="theme">{{ theme }}</a-radio>
      </a-radio-group>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import i18n from '@/locales/i18n';
import { useSystemStore } from 'store/app';
import { ThemeEnum, LangEnum } from '@/enums/system';

const SystemStore = useSystemStore()

// js中使用
console.log(i18n.global.t('message.hello'));

</script>

<style>
.test-background {
  background-color: rgb(var(--gray-2));
  color: rgb(var(--gray-10));
}
</style>
