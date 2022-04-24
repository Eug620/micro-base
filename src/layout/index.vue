<!--
 * @Author       : Eug
 * @Date         : 2022-04-19 14:13:27
 * @LastEditTime : 2022-04-24 14:48:29
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/layout/index.vue
-->
<template>
  <div class="bg-gray-200 w-screen h-screen flex dark:bg-black dark:text-white">
    <div
      class="flex-none h-screen bg-white dark:bg-black overflow-auto border-r light:border-r-zinc-200 dark:border-r-zinc-100"
      :class="isShow ? 'w-52' : 'w-20'"
    >
      <div class="w-full h-full flex flex-col">
        <div class="h-20 bg-green-200" @click="isShow = !isShow">
          {{ isShow }}
        </div>
        <div class="flex-1 bg-white-100">
          <div
            class="text-left pl-2 py-8 text-base border-b-2"
            :class="active === menu.name && 'bg-emerald-200'"
            v-for="menu in menus"
            :key="menu.path"
            @click="useTo(menu)"
          >
            {{ menu.name }}
          </div>
        </div>
        <div class="h-20 light:bg-blue-200 justify-items-center grid">
          <base-switch v-model="themeType" @change="useThemeChange">
            <template v-if="themeType">
              <i class="fas fa-sun"></i>
            </template>
            <template v-else>
              <i class="fas fa-moon"></i>
            </template>
          </base-switch>
        </div>
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
import { useRouter, RouteRecordRaw } from 'vue-router';
import { computed, ref, Ref } from 'vue';
const router = useRouter();
const { routes } = router.options;
// const IconList = Object.values(Icons)
const isShow = ref(false);
const menus = computed(() => {
  return routes[0]?.children || [];
});
const enum ThemeType {
  light = 'light',
  dark = 'dark',
}
const { name } = router.currentRoute.value;
const useTo = (menu: RouteRecordRaw) => {
  router.push({
    name: menu.name,
  });
};
const active = computed(() => {
  return router.currentRoute.value.name;
});
const theme: Ref<ThemeType> = ref(ThemeType.light);
const useTheme = (v: Boolean) => {
  if (v) {
    document.documentElement.classList.remove(ThemeType.dark);
    document.documentElement.classList.add(ThemeType.light);
  } else {
    document.documentElement.classList.add(ThemeType.dark);
    document.documentElement.classList.remove(ThemeType.light);
  }
};

const useMenuItemClick = (menu: any) => {
  router.push({
    name: menu.name,
  });
};

const themeType = ref(true);
const useThemeChange = (v: any) => {
  useTheme(v);
};
</script>

<style lang="scss"></style>
