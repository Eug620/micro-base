<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-03-30 14:03:30
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-06-27 13:35:55
 * @FilePath     : /micro-base/src/components/base-minio/index.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-table :scroll="{
        x: '100%',
        y: '100%'
    }" :bordered="false" :pagination="false" :columns="tableOptions.columns" :data="tableOptions.data"
        :load-more="useLoadMore">
        <template #name="{ record }">
            <template v-if="record.parentName">
                <a-link :href="record.parentName ? `https://eug.asia/minio/${record.parentName}/${record.name}` : null">{{
                    record.name }}</a-link>
            </template>
            <template v-else>{{ record.name }}</template>
        </template>
        <template #size="{ record }">
            {{ useCalculateSize(record.size) }}
        </template>
        <template #actions="{ record }">
            <template v-if="record.parentName && (record.parentName === 'videos')">
                <IconPlayCircle :size="24" class="cursor-pointer" @click="useActionsClick(record, 'videoPlay')" />
            </template>
            <template v-if="record.parentName && (record.parentName === 'books')">
                <IconBook :size="24" class="cursor-pointer" @click="useActionsClick(record, 'bookPreview')" />
            </template>
            <template v-if="record.parentName && (record.parentName === 'images')">
                <IconSearch :size="24" class="cursor-pointer" @click="useActionsClick(record, 'imagesPreview')" />
            </template>
            <template v-if="record.parentName && (record.parentName === 'music')">
                <IconMusic :size="24" class="cursor-pointer" @click="useActionsClick(record, 'musicPreview')" />
            </template>
        </template>
    </a-table>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import {
    IconPlayCircle,
    IconBook,
    IconSearch,
    IconMusic
} from '@arco-design/web-vue/es/icon';
const emit = defineEmits(['videoPlay', 'bookPreview'])

const tableOptions = reactive({
    columns: [{
        title: '文件名',
        slotName: 'name',
        sortable: {
          sortDirections: ['ascend', 'descend']
        }
    }, {
        title: '大小',
        slotName: 'size',
    }, {
        title: '操作',
        slotName: 'actions',
    }],
    data: []
})
const useActionsClick = (record: any, type: any) => {
    emit(type, {
        url: `https://eug.asia/minio/${record.parentName}/${record.name}`,
        path: record.parentName,
        fileName: record.name,
    })
}
function useCalculateSize(limit: number) {
    if (!limit) return void 0

    var size = "";
    if (limit < 0.1 * 1024) {                            //小于0.1KB，则转化成B
        size = limit.toFixed(2) + "B"
    } else if (limit < 0.1 * 1024 * 1024) {            //小于0.1MB，则转化成KB
        size = (limit / 1024).toFixed(2) + "KB"
    } else if (limit < 0.1 * 1024 * 1024 * 1024) {        //小于0.1GB，则转化成MB
        size = (limit / (1024 * 1024)).toFixed(2) + "MB"
    } else {                                            //其他转化成GB
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB"
    }

    var sizeStr = size + "";                        //转成字符串
    var index = sizeStr.indexOf(".");                    //获取小数点处的索引
    var dou = sizeStr.substr(index + 1, 2)            //获取小数点后两位的值
    if (dou == "00") {                                //判断后两位是否为00，如果是则删除00
        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
    }
    return size;
}
const useGetBucket = () => {
    fetch('https://eug.asia/egg/api/minio/bucket/all').then(async res => {
        let result = await res.json()
        tableOptions.data = result.data.map((v: any, idx: number) => {
            v.key = idx
            return v
        })
    })
}
useGetBucket()
const useLoadMore = (record: any, done: Function) => {
    fetch(`https://eug.asia/egg/api/minio/bucket/${record.name}`).then(async res => {
        let result = await res.json()
        done(result.data.map((v: any, idx: number) => {
            v.key = `${record.key}-${idx}`
            v.parentName = record.name
            v.isLeaf = true
            return v
        }))
    })
}
</script>

<style>
a {
    cursor: pointer;
}
</style>