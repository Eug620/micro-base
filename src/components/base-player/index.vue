<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-03-28 10:44:30
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-06-27 14:08:28
 * @FilePath     : /micro-base/src/components/base-player/index.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-card :bordered="false" class="base-player" id="BasePlayer">
        <template #title>
            <a-input v-if="visibleStatus.video" class="!w-1/3" placeholder="请输入视频地址" v-model.trim="inputUrl" allow-clear
                @press-enter="useInputEnter">
            </a-input>
            <div v-if="visibleStatus.pdf || visibleStatus.image || visibleStatus.music">
                {{ previewOptions.fileName }}
            </div>
            <div v-if="!isNodata">一不小心空白啦~</div>
        </template>
        <template #extra>
            <a-button type="outline" @click="useSettingDrawer" status="normal" shape="round">
                <template #icon>
                    <IconStorage />
                </template>
            </a-button>
        </template>
        <img v-if="!isNodata" src="@/assets/svg/zw.svg" alt="" style="width: 100%;height: calc(100% - 46px)">

        
        <!-- 视频 -->
        <video-player v-if="visibleStatus.video" :src="videoOptions.src" :poster="videoOptions.poster" preload="auto" loop
            controls liveui muted autoplay playsinline :volume="videoOptions.volume"
            :playbackRate="videoOptions.playbackRate" :language="videoOptions.language"
            :notSupportedMessage="videoOptions.notSupportedMessage" :playbackRates="videoOptions.playbackRates"
            style="width: 100%;height: calc(100% - 46px)" />


        <!-- pdf -->
        <iframe v-if="visibleStatus.pdf" :src="previewOptions.url" style="width: 100%;height: calc(100% - 46px)"></iframe>


        <!-- 图片 -->
        <a-image show-loader v-if="visibleStatus.image" :src='previewOptions.url' :title='previewOptions.path'
            :description='previewOptions.fileName' style="width: 100%;height: calc(100% - 46px)"
            :preview-visible="imagePreviewVisible" @preview-visible-change="() => { imagePreviewVisible = false }">
            <template #extra>
                <div>
                    <span class="mx-2 cursor-pointer" @click="() => { imagePreviewVisible = true }">
                        <IconEye size="26" />
                    </span>
                    <span class="mx-2 cursor-pointer" @click="useImageDownload">
                        <IconDownload size="26" />
                    </span>
                    <a-tooltip :content="previewOptions.path">
                        <span class="mx-2 cursor-pointer">
                            <IconInfoCircle size="26" />
                        </span>
                    </a-tooltip>
                </div>
            </template>
        </a-image>


        <!-- 音频 -->
        <audio class="inset-x-1/2 -translate-x-2/4 -translate-y-2/4 inset-y-1/2 absolute" autoplay loop
            v-if="visibleStatus.music" :src="previewOptions.url" controls />


        <a-drawer :drawer-style="{ zIndex: 1 }" :footer="null" popup-container="#BasePlayer" width="100%"
            @ok="drawerVisible = false" @cancel="drawerVisible = false" :visible="drawerVisible">
            <template #title> Minio </template>
            <BaseMinio @video-play="useVideoPlay" @book-preview="useBookPreview" @images-preview="useImagesPreview"
                @music-preview="useMusicPreview" />
        </a-drawer>

    </a-card>
</template>

<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import { computed, reactive, ref, unref } from 'vue'
import BaseMinio from '@/components/base-minio/index.vue'
import {
    IconEye,
    IconDownload,
    IconInfoCircle,
    IconStorage
} from '@arco-design/web-vue/es/icon';

const inputUrl = ref('')
const useInputEnter = () => {
    videoOptions.src = inputUrl.value
}

interface Visible {
    video?: boolean,
    pdf?: boolean,
    image?: boolean,
    music?: boolean,
}
const visibleStatus = reactive<Visible>({
    video: false,
    pdf: false,
    image: false,
    music: false,
})

const isNodata = computed(() => {
    let keys: string[] = Object.keys(visibleStatus)
    let idx = keys.findIndex((cur) => visibleStatus[cur as (keyof Visible)])
    return idx != -1
})

const resetVisibleStatus = ({ video, pdf, image, music }: Visible) => {
    visibleStatus.pdf = pdf
    visibleStatus.video = video
    visibleStatus.image = image
    visibleStatus.music = music
}
const useVideoPlay = ({ url }: any) => {
    videoOptions.src = url
    inputUrl.value = url
    resetVisibleStatus({ video: true })
}
interface RecordProps {
    fileName?: string
    path?: string
    url?: string
}
const previewOptions = reactive<RecordProps>({})

const initPreviewOptions = ({ url, path, fileName }: RecordProps) => {
    previewOptions.fileName = fileName
    previewOptions.path = path
    previewOptions.url = url
}
const useBookPreview = (record: RecordProps) => {
    initPreviewOptions(record)
    resetVisibleStatus({ pdf: true })
}

const imagePreviewVisible = ref(false)
const useImagesPreview = (record: RecordProps) => {
    initPreviewOptions(record)
    resetVisibleStatus({ image: true })
}
const useImageDownload = () => { }

const useMusicPreview = (record: RecordProps) => {
    initPreviewOptions(record)
    resetVisibleStatus({ music: true })
}

// video
const videoOptions = reactive({
    src: inputUrl.value,
    poster: 'https://eug.asia/minio/images/ac4c5ed6-53eb-457c-8350-aef04814335c.jpg',
    volume: .2,
    playbackRate: 1,
    language: 'zh-CN',
    notSupportedMessage: '此视频暂无法播放，请稍后再试',
    playbackRates: [.5, 1, 1.5, 2, 2.5, 3],
})

// drawer
const drawerVisible = ref(false)
const useSettingDrawer = () => {
    drawerVisible.value = true
}
</script>

<style lang="scss">
.base-player {
    .arco-card-body {
        padding: 0 !important;
        height: 100% !important;
        // position: relative;
        // position: absolute;
    }
}
</style>