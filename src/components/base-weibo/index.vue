<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-07-12 10:51:53
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-07-12 11:40:06
 * @FilePath     : /micro-base/src/components/base-weibo/index.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-card :bordered="false" class="base-weibo h-auto overflow-hidden py-1">
        <template #title>
            微博
        </template>
        <div class="h-4/5 overflow-scroll">
            <a-list class="list-demo-action-layout" :bordered="false" :data="dataSource">
                <template #item="{ item, index }">
                    <a-list-item class="list-demo-item  !p-1">
                        <template #actions>
                            <span class="text-xs"><IconFire/>{{ item.hot }}</span>
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
            </a-list>
        </div>

    </a-card>
</template>

<script setup lang="ts">
import { IconFire } from '@arco-design/web-vue/es/icon'
import { reactive, ref } from 'vue'


const dataSource = ref([])

const init = () => {
    fetch('https://api.vvhan.com/api/wbhot').then(async (res: any) => {
        const result: any = await res.json()
        console.log(result);
        dataSource.value = result.data
    })
}
init()
</script>

<style lang="scss">
.list-demo-action-layout .list-demo-item {
    // padding: 20px 0;
    border-bottom: 1px solid var(--color-fill-3);
    &:last-child {
        border-bottom: none;
    }
}
</style>