<!--
 * @Author       : Eug
 * @Date         : 2022-04-19 14:13:27
 * @LastEditTime : 2022-04-21 11:57:25
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/layout/index.vue
-->
<template>
  <div class="bg-gray-200 w-screen h-screen flex dark:bg-black dark:text-white">
    <div
      class="flex-none h-screen bg-white dark:bg-black border-r border-slate-900/10 overflow-auto"
      :class="isShow ? 'w-52' : 'w-20'"
    >
      <div class="w-full h-full flex flex-col">
        <div class="h-20 bg-green-200 dark:bg-gray-200" @click="isShow=!isShow">{{isShow}}</div>
        <div class="flex-1 bg-white-100 dark:bg-gray-300">
          <div
            class="text-left pl-2 py-8 text-base border-b-2"
            :class="active === menu.name && 'bg-emerald-200'"
            v-for="menu in menus"
            :key="menu.path"
            @click="useTo(menu)"
          >{{menu.name}}</div>
        </div>
        <div class="h-20 bg-blue-200 dark:bg-gray-200" @click="useChangeTheme">{{theme}}</div>
      </div>
    </div>

    <div class="flex-1">
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
    </div>
  </div>
</template>

<script setup lang="ts">
// import  * as Icons from "@element-plus/icons-vue";
import { useRouter, RouteRecordRaw } from "vue-router";
import { computed, ref, Ref } from "vue";
const router = useRouter();
const { routes } = router.options;
// const IconList = Object.values(Icons)
const isShow = ref(true);
const menus = computed(() => {
  return routes[0]?.children || [];
});
const enum ThemeType {
  light = "light",
  dark = "dark"
}
const { name } = router.currentRoute.value;
const useTo = (menu: RouteRecordRaw) => {
  router.push({
    name: menu.name
  });
};
const active = computed(() => {
  return router.currentRoute.value.name;
});
const theme: Ref<ThemeType> = ref(ThemeType.light);
const useTheme = (v: ThemeType) => {
  if (v === ThemeType.dark) {
    document.documentElement.classList.add(ThemeType.dark);
  } else {
    document.documentElement.classList.remove(ThemeType.light);
  }
};
const useChangeTheme = () => {
  theme.value =
    theme.value === ThemeType.dark ? ThemeType.light : ThemeType.dark;
  useTheme(theme.value);
};

const useMenuItemClick = (menu: any) => {
  router.push({
    name: menu.name
  });
};
</script>

<style lang="scss">
</style>