<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-07-12 10:51:53
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-07-12 11:19:52
 * @FilePath     : /micro-base/src/components/base-weibo/index.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-card :bordered="false" class="base-weibo overflow-scroll py-1">
        <a-list class="list-demo-action-layout" :bordered="false" :data="dataSource">
            <template #item="{ item, index }">
                <a-list-item class="list-demo-item  !p-1">
                    <template #actions>
                        <span class="text-xs"><icon-heart />{{ item.hot }}</span>
                    </template>

                    <a-list-item-meta>
                        <template #title>
                            <a-link class="text-xs" :href="item.url"
                                :status="index === 0 ? 'danger' : (index === 2 || index === 1 ? 'warning' : '')">{{
                                    item.title }}</a-link>
                            <!-- <div>{{item.hot}}</div> -->
                        </template>
                        <!-- <template #avatar>
                            <a-avatar shape="square">
                                <img alt="avatar" :src="item.avatar" />
                            </a-avatar>
                        </template> -->
                    </a-list-item-meta>
                </a-list-item>
            </template>
        </a-list>

    </a-card>
</template>

<script setup lang="ts">
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
.list-demo-action-layout .image-area {
    width: 183px;
    height: 119px;
    border-radius: 2px;
    overflow: hidden;
}

.list-demo-action-layout .list-demo-item {
    padding: 20px 0;
    border-bottom: 1px solid var(--color-fill-3);

    &:last-child {
        border-bottom: none;

    }
}

.list-demo-action-layout .image-area img {
    width: 100%;
}

.list-demo-action-layout .arco-list-item-action .arco-icon {
    margin: 0 4px;
}
</style>