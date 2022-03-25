<!--
 * @Author       : Eug
 * @Date         : 2022-03-23 17:01:11
 * @LastEditTime : 2022-03-25 18:16:38
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/App.vue
-->
<template>
  <div class="base-menu">
    <el-menu
      class="base-menu-components"
      :router="true"
      :default-active="activeIndex"
      active-text-color="#545c64"
      background-color="#ffffff"
      text-color="#545c64"
    >
      <el-menu-item
        v-for="menu in menuList"
        :key="menu"
        :index="menu"
        :class="[(activeIndex === menu) && 'base-menu-active']"
      >
        <i class="el-icon-setting"></i>
        <span slot="title">{{menu.replaceAll('/','')}}</span>
      </el-menu-item>
    </el-menu>
  </div>
  <div class="base-view">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated, ref, watch } from "vue";
import { useRouter } from "vue-router";

const activeIndex = ref("/chat/");

const menuList = ref([
  "/chat/", 
  // "/react/"
  ]);
const { currentRoute } = useRouter();
watch(currentRoute, (newVal, oldVal) => {
  activeIndex.value = currentRoute.value.fullPath;
});
</script>

<style>
.base-menu {
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  padding: 0;
}
.base-menu-active{
  background-color: #ccc;
}
.base-menu:hover .base-menu-components {
  transform: translateX(0px);
  transition: all 0.5s ease;
}
.base-menu-components {
  margin-right: 200px;
  height: 100vh;
  transform: translateX(-200px);
  transition: all 0.5s ease;
}

.base-view {
  flex: 1;
}

body {
  margin: 0;
}
</style>
