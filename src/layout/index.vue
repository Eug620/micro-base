<!--
 * @Author       : Eug
 * @Date         : 2022-04-26 16:22:06
 * @LastEditTime : 2023-06-27 14:07:42
 * @LastEditors  : eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/layout/index.vue
-->
<template>
  <a-layout class="micro-base-layout">
    <a-layout-sider breakpoint="lg" :width="160" @collapse="systemStore.setCollapsed" collapsible
    :collapsed="systemStore.collapsed">
      <LayoutMenu />
    </a-layout-sider>
    <a-layout class="micro-base-layout-view">
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.fullPath" class="animate__animated animate__fadeIn"
          v-if="!route.meta.keepAlive" />

        <keep-alive>
          <component :is="Component" :key="route.fullPath" class="animate__animated animate__fadeIn"
            v-if="route.meta.keepAlive" />
        </keep-alive>
      </router-view>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import LayoutMenu from './LayoutMenu.vue';
import { useSystemStore } from '@/store/app'
const systemStore = useSystemStore()
</script>

<style lang="scss">
.micro-base-layout {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .logo {
    text-align: center;
  }

  &-view {
    background-color: rgb(var(--gray-2));
    color: rgb(var(--gray-10));
    overflow: hidden;
    width: 100%;
    position: relative;
  }
}
</style>
