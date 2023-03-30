<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-03-30 14:03:30
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-30 15:32:02
 * @FilePath     : /micro-base/src/components/base-minio/index.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-card :bordered="false" class="dashboard-container-card mb-2.5">
        <a-table :scroll="{
            x: '100%',
            y: '100%'
        }" stripe :bordered="false" :pagination="false" :columns="tableOptions.columns" :data="tableOptions.data"
            :load-more="useLoadMore">
            <template #name="{ record }">
                <template v-if="record.parentName">
                    <a-link :href="record.parentName ? `http://eug.asia:9000/${record.parentName}/${record.name}` : null">{{
                        record.name }}</a-link>
                </template>
                <template v-else>{{ record.name }}</template>
            </template>
            <template #size="{ record }">
                {{ change(record.size) }}
            </template>
        </a-table>
    </a-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const tableOptions = reactive({
    columns: [{
        title: 'Name',
        slotName: 'name',
    }, {
        title: 'Size',
        slotName: 'size',
    }],
    data: []
})
function change(limit: number) {
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
    fetch('http://eug.asia:5000/minio/bucket/all').then(async res => {
        let result = await res.json()
        tableOptions.data = result.data.map((v: any, idx: number) => {
            v.key = idx
            return v
        })
    })
}
useGetBucket()
const useLoadMore = (record: any, done: Function) => {
    fetch(`http://eug.asia:5000/minio/bucket/${record.name}`).then(async res => {
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

<style></style>