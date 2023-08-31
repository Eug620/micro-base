
<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-08-23 11:15:19
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-08-31 16:23:42
 * @FilePath     : /micro-base/src/pages/upload.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-card :bordered="false" class="h-full ml-2.5 ">
        <a-button class="float-right" @click="useCleans" status="danger">清除全部</a-button>
        <a-upload :show-file-list="false" :custom-request="customRequest" class="mb-4" />
        <a-divider class="!mt-1 !mb-2" />


        <template v-for="(item, idx) in fileList" :key="item">
            <a-button class="m-2" status="danger" @click="useDelete(item)">
                <template #icon>
                    <IconDelete />
                </template></a-button>
            <a-link :href="`https://eug.asia/egg/api/assets/${item}`">{{ item
            }}</a-link>

            <a-divider class="!my-1" v-if="idx !== fileList.length - 1" />
        </template>


    </a-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Notification } from '@arco-design/web-vue';
import {
    IconDelete
} from '@arco-design/web-vue/es/icon';
const fileList = ref<string[]>([])
const size = 1024 * 1024

const fetchURL = 'https://eug.asia/egg/api'
// const fetchURL = 'http://127.0.0.1:5000'

const useGetFileList = async () => {
    let res: any = await fetch(`${fetchURL}/assets/list`, {
        method: 'GET',
    })
    let result = await res.json()
    fileList.value = result.data
}


useGetFileList()

const useDelete = async (name: string) => {
    let res: any = await fetch(`${fetchURL}/assets/delete?name=${name}`, {
        method: 'GET',
    })
    let result = await res.json()
    useGetFileList()
}

const useCleans = async (dir?: string) => {
    let res = await fetch(`${fetchURL}/assets/cleans${dir && `?dir=${dir}`}`, {
        method: 'GET',
    })
    let result = await res.json()
    useGetFileList()
}
/**
 * 文件切片
 * @param file 文件
 * @param size 单次传输大小
 */
const createChunkFileList = (file: File, cur: number = 0, size: number = 1024 * 1024) => {
    const list = []
    let idx = 1
    while (cur < file.size) {
        list.push({
            chunk: new File([file.slice(cur, cur + size)],file.name),
            idx: idx
        })
        cur += size
        idx++
    }
    return list
}
/**
 * 自定义上传
 * @param option 
 */
const customRequest = (option: any) => {
    const { onProgress, onError, onSuccess, fileItem, name } = option

    const fileList = createChunkFileList(fileItem.file)
    const requestAll = fileList.map((val: any) => {
        const fmt = new FormData()
        fmt.append('chunk', val.chunk)
        return fetch(`${fetchURL}/assets/upload?idx=${val.idx}`, {
            method: 'POST',
            body: fmt
        })
    })

    Promise.all(requestAll).then(async res => {
        console.log(res,'????');
        
        setTimeout(async () => {
            let res = await fetch(`${fetchURL}/assets/finish?name=${fileItem.name}&size=${size}&total=${fileList.length}`, {
                method: 'GET',
            })
            let result = await res.json()
            if (result.code !== 200) {
                Notification.error({
                    title: "上传失败",
                    content: result.msg,
                });
            } else {
                useGetFileList()
            }
        });
    }).catch(err => {
    })

    return {
    }
};

</script>

<style></style>