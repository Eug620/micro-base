<!--
 * @Author       : Eug
 * @Date         : 2022-04-20 15:59:50
 * @LastEditTime : 2023-03-23 10:39:29
 * @LastEditors  : eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/pages/setting.vue
-->
<!-- https://fontawesome.com/icons -->
<template>
  <div class="h-full pl-2.5 setting-container">
    <a-row :gutter="10" class="mb-2.5">
      <a-col :span="8">
        <a-card :bordered="false" class="setting-container-card">
          <h3 class="animate__animated animate__slideInRight"><i class="fa fa-heart mb-4"></i></h3>
          <h3><i class="fas fa-spinner mb-4"></i></h3>
          <h3 class="animate__animated animate__slideInRight"><i class="fal fa-spinner mb-4"></i></h3>
          <h3>
            <!-- 页面中使用方式 -->
            {{ $t('message.hello') }}
          </h3>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card :bordered="false" class="setting-container-card">
          Card content
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card :bordered="false" class="setting-container-card">
          Card content
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="10">
      <a-col :span="16">
        <a-card :bordered="false" class="setting-container-card">
          Card content
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card :bordered="false" class="setting-container-card">
          Card content
        </a-card>
      </a-col>
    </a-row>
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

<style lang="scss" scoped>
.test-background {
  background-color: rgb(var(--gray-2));
  color: rgb(var(--gray-10));
}

.setting-container {
  &-card {
    height: calc((100vh - 0.625rem) / 2);
  }
}
</style>
