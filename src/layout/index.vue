<!--
 * @Author       : Eug
 * @Date         : 2022-04-19 14:13:27
 * @LastEditTime : 2022-04-19 15:45:50
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/layout/index.vue
-->
<template>
  <el-container class="vh-100">
    <el-aside width="200px">
      <el-menu class="w-100 h-100" :default-active="menus[0].name">
        <el-menu-item :index="menu.name" v-for="(menu,idx) in menus" :key="menu.path" @click="useMenuItemClick(menu)">
          <el-icon>
            <component :is="IconList[idx]" />
          </el-icon>
          <span>{{menu.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="padding:0;">
      <router-view v-slot="{ Component, route }">
        <template v-if="route.meta.keepAlive">
          <transition name="el-fade-in">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </template>
        <template v-else>
          <component :is="Component" />
        </template>
      </router-view>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import  * as Icons from "@element-plus/icons-vue";
import { useRouter } from 'vue-router'
import { computed } from 'vue'
const router = useRouter()
const { routes } = router.options
const IconList = Object.values(Icons)

const menus = computed(() => {
  return routes[0]?.children || []
})

const useMenuItemClick = (menu) => {
  router.push({
    name: menu.name
  })
}
</script>

<style>
</style>