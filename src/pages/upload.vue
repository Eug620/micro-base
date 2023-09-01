
<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-08-23 11:15:19
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-09-01 11:39:13
 * @FilePath     : /micro-base/src/pages/upload.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-card :bordered="false" class="h-full ml-2.5 ">
        <a-button class="float-right" @click="() => useCleans()" status="danger">清除全部</a-button>
        <a-upload :disabled="!!uploadPregress.size && pregress !== 1" :show-file-list="false" :custom-request="customRequest"
            class="mb-4 mr-4">
            <!-- <template #upload-button>
                <a-button type="primary" shape="round">
                    <IconUpload/>点击上传
                </a-button>
            </template> -->
        </a-upload>
        <a-progress :animation="true" :steps="5" size="small" :percent="pregress" />
        <a-divider class="!mt-1 !mb-2" />


        <div class="overflow-y-auto" style="height: calc(100vh - 100px);">
            <template v-for="(item, idx) in fileList" :key="item">
                <a-button class="m-2" status="danger" @click="useDelete(item)">
                    <template #icon>
                        <IconDelete />
                    </template></a-button>
                <a-link :href="`https://eug.asia/egg/api/assets/${item}`">{{ item
                }}</a-link>
    
                <a-divider class="!my-1" v-if="idx !== fileList.length - 1" />
            </template>
        </div>


    </a-card>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, unref } from "vue";
import { Notification } from '@arco-design/web-vue';
import {
    IconDelete,
    IconUpload
} from '@arco-design/web-vue/es/icon';
const fileList = ref<string[]>([])
const size = 1024 * 1024
const uploadPregress = ref<Map<string, boolean>>(new Map())

const fetchURL = 'https://eug.asia/egg/api'
// const fetchURL = 'http://127.0.0.1:5000'

const pregress = computed(() => {
    let finish = 0
    let total = 0
    unref(uploadPregress).forEach((value, key) => {
        total += 1
        value && (finish += 1)
    })
    return total && +(finish / total).toFixed(2)
})

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
    let res = await fetch(`${fetchURL}/assets/cleans${dir ? `?dir=${dir}` : ''}`, {
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
            chunk: new File([file.slice(cur, cur + size)], file.name),
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
    unref(uploadPregress).clear()

    const fileList = createChunkFileList(fileItem.file)
    const requestAll = fileList.map((val: any) => {
        unref(uploadPregress).set(val.idx, false)
        const fmt = new FormData()
        fmt.append('chunk', val.chunk)
        return new Promise((resolve, reject) => {
            fetch(`${fetchURL}/assets/upload?idx=${val.idx}`, {
                method: 'POST',
                body: fmt
            }).then((res) => {
                unref(uploadPregress).set(val.idx, true)
                resolve(res)
            })
        })
    })

    Promise.all(requestAll).then(async res => {
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
    }).finally(() => {
        // unref(uploadPregress).clear()
    })

    return {
    }
};

</script>

<style></style>