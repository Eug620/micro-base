<!--
 * @Author       : Eug
 * @Date         : 2022-04-28 14:31:36
 * @LastEditTime : 2023-02-22 14:24:21
 * @LastEditors  : eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/layout/LayoutMenu.vue
-->
<template>
  <a-menu
    v-model:selected-keys="defaultSelectedKey"
    breakpoint="xl"
    accordion
    auto-open-selected
    @menu-item-click="useMenuItemClick"
  >
    <!-- <template v-for="menu in menus"> -->
      <!-- <template v-if="menu.children">
        <a-sub-menu :key="menu.name">
          <template #icon>
            <component :is="menu?.meta?.icon" />
          </template>
          <template #title>{{ $t(`menu.${String(menu.name)}`) }}</template>
          <template v-if="menu.children">
            <a-menu-item :key="m.name" v-for="m in menu.children">
              <template #icon>
                <component :is="m?.meta?.icon" />
              </template>
              {{ $t(`menu.${String(m.name)}`) }}
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
      <template v-else> -->
        <a-menu-item :key="menu.name" v-for="menu in menus">
          <template #icon>
            <component :is="menu?.meta?.icon" />
          </template>
          {{ $t(`menu.${String(menu.name)}`) }}
        </a-menu-item>
      <!-- </template> -->
    <!-- </template> -->
  </a-menu>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { frameIn } from '@/router'
const router = useRouter();
const route = useRoute();
const { routes, history } = router.options;

const menus = computed(() => {
  return frameIn || [];
});

const defaultSelectedKey = ref([route.name]);
const useMenuItemClick = (name: string) => {
  router.push({
    name,
  });
};
</script>

<style></style>
