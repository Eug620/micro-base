<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-02-22 10:35:27
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-02-22 11:09:57
 * @FilePath     : /micro-base/src/pages/playground.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-card class="ml-2.5 h-full relative playground-container" :class="{ dark: SystemStore.theme === ThemeEnum.DARK }"
        :bordered="false">
        <Repl :store="store" style="height:100vh;" />
    </a-card>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { Repl, ReplStore } from '@vue/repl'
import '@vue/repl/style.css'
import { useSystemStore } from 'store/app';
import { ThemeEnum } from '@/enums/system';

const SystemStore = useSystemStore()

// retrieve some configuration options from the URL
const query = new URLSearchParams(location.search)

const store = new ReplStore({
    // initialize repl with previously serialized state
    serializedState: location.hash.slice(1),

    // starts on the output pane (mobile only) if the URL has a showOutput query
    showOutput: query.has('showOutput'),
    // starts on a different tab on the output pane if the URL has a outputMode query
    // and default to the "preview" tab
    outputMode: (query.get('outputMode') || 'preview'),

    // specify the default URL to import Vue runtime from in the sandbox
    // default is the CDN link from unpkg.com with version matching Vue's version
    // from peerDependency
    defaultVueRuntimeURL: 'https://cdn.jsdelivr.net/npm/vue@3.2.25/dist/vue.runtime.esm-browser.js',
    defaultVueServerRendererURL: 'https://cdn.jsdelivr.net/npm/@vue/server-renderer@3.2.25/dist/server-renderer.cjs.prod.js'
})

// persist state to URL hash
watchEffect(() => history.replaceState({}, '', store.serialize()))
// console.log(store.getFiles());
// store.setFiles({'Comp.vue': ''})

// pre-set import map
store.setImportMap({
    imports: {
        'eug-tools': 'https://cdn.jsdelivr.net/npm/eug-tools@0.0.6/dist/e-tools.esm-bundler.js'
    }
})

// use a specific version of Vue
// store.setVueVersion('3.2.25')

</script>

<style lang="scss">
.playground-container {
    .arco-card-size-medium,
    .arco-card-body {
        padding: 0px !important;
    }
}
</style>