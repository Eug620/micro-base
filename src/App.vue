<!--
 * @Author       : Eug
 * @Date         : 2022-03-23 17:01:11
 * @LastEditTime : 2022-03-23 17:19:47
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /Project/test-micro/micro-base/src/App.vue
-->
<template>
  <div class="menu-con">
    <el-menu class="el-menu-vertical-demo" :router="true" :default-active="activeIndex">
      <el-menu-item index="/react17/">
        <i class="el-icon-menu"></i>
        <span slot="title">react17</span>
      </el-menu-item>
 
      <el-menu-item index="/vue3/">
        <i class="el-icon-setting"></i>
        <span slot="title">vue3</span>
      </el-menu-item>
    </el-menu>
  </div>
  <div class="router-con">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated, ref, watch } from "vue";
import { useRouter } from "vue-router";

const activeIndex = ref("/react16/");
const { currentRoute } = useRouter();
watch(currentRoute, (newVal, oldVal) => {
  activeIndex.value = currentRoute.value.fullPath;
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fff;
  width: 100%;
  /* padding: 10px; */
  box-sizing: border-box;
  display: flex;
}

.menu-con {
  width: 200px;
}

.router-con {
  flex: 1;
}

body {
  margin: 0;
}
</style>
