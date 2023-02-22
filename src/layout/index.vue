<!--
 * @Author       : Eug
 * @Date         : 2022-04-26 16:22:06
 * @LastEditTime : 2023-02-22 13:16:13
 * @LastEditors  : eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/layout/index.vue
-->
<template>
  <a-layout class="micro-base-layout">
    <a-layout-sider breakpoint="lg" :width="200" collapsible>
      <LayoutMenu />
    </a-layout-sider>
    <a-layout class="micro-base-layout-view">
      <router-view v-slot="{ Component, route }">
        <component
          :is="Component"
          :key="route.fullPath"
          class="animate__animated animate__fadeIn"
          v-if="!route.meta.keepAlive"
        />

        <keep-alive>
          <component
            :is="Component"
            :key="route.fullPath"
            class="animate__animated animate__fadeIn"
            v-if="route.meta.keepAlive"
          />
        </keep-alive>
      </router-view>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import LayoutMenu from './LayoutMenu.vue';
const switchTheme = ref('light');

const useThemeChange = (value: any) => {
  if (value === 'dark') {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    // 设置为暗黑主题
    // 恢复亮色主题
    document.body.removeAttribute('arco-theme');
  }
};
</script>

<style lang="scss">
.micro-base-layout {
  height: 100vh;
  overflow: hidden;
  .logo {
    text-align: center;
  }

  &-view {
    background-color: rgb(var(--gray-2));
    color: rgb(var(--gray-10));
  }
}
</style>
