<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-07-12 10:51:53
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-08-11 11:39:01
 * @FilePath     : /micro-base/src/components/base-weibo/index.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-card :bordered="false" class="base-weibo h-auto overflow-hidden py-1 relative">
        <div class="absolute bottom-1 right-1.5">{{ progress }}</div>
        <!-- <template #title>
        </template> -->
        <div class="h-4/5 overflow-scroll">
            <span class=" weibo-container"></span>
            <!-- <a-list class="list-demo-action-layout" :bordered="false" :data="dataSource">
                <template #item="{ item, index }">
                    <a-list-item class="list-demo-item  !p-1">
                        <template #actions>
                            <span class="text-xs">
                                <IconFire />{{ item.hot }}
                            </span>
                        </template>

                        <a-list-item-meta>
                            <template #title>
                                <a-link class="text-xs" :href="item.url"
                                    :status="index === 0 ? 'danger' : (index === 2 || index === 1 ? 'warning' : '')">{{
                                        item.title }}</a-link>
                            </template>
                        </a-list-item-meta>
                    </a-list-item>
                </template>
            </a-list> -->
        </div>

    </a-card>
</template>

<script setup lang="ts">
import { IconFire } from '@arco-design/web-vue/es/icon'
import Typed from 'typed.js'
import { onMounted, reactive, ref, unref } from 'vue'


const dataSource = ref([])
const typedInstances = ref()
const progress = ref('0 / 0')

const init = () => {
    // fetch('https://api.vvhan.com/api/wbhot').then(async (res: any) => {
    //     const result: any = await res.json()
    //     console.log(result);
    //     dataSource.value = result.data
    // })
    fetch('https://api.vvhan.com/api/60s?type=json').then(async (res: any) => {
        const result: any = await res.json()
        typedInstances.value = new Typed('.weibo-container', {
            strings: result.data,
            typeSpeed: 60,
            // loop: true,
            cursorChar: ' /',
            // fadeOut: true,
            // shuffle: true, // 乱序
            backDelay: 6000,
            fadeOut: true,
            // backDelay: 8000,
            // startDelay: 4000
            preStringTyped(idx: number) {
                progress.value = `${idx + 1} / ${result.data.length}`
            },
            onStringTyped(idx: number) {
                // weizi.value = `${idx+1}/${result.data.length}`
            }
        });
    })
}
// init()

onMounted(() => {
    init()
})
</script>

<style lang="scss">
.list-demo-action-layout .list-demo-item {
    // padding: 20px 0;
    border-bottom: 1px solid var(--color-fill-3);

    &:last-child {
        border-bottom: none;
    }
}

.base-weibo {
    .typed-cursor {
        color: rgb(var(--danger-3)) !important;
        font-size: 1rem;
    }

    .weibo-container {
        line-height: 1.4rem;
    }
}
</style>