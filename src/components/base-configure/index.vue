<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-03-28 10:44:30
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-30 11:24:14
 * @FilePath     : /micro-base/src/components/base-configure/index.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-card :bordered="false" class="base-configure">
        <template #title>
            <a-input placeholder="请输入视频地址" v-model.trim="inputUrl" allow-clear @press-enter="useInputEnter">
            </a-input>
        </template>
        <video-player
            :src="videoOptions.src" 
            :poster="videoOptions.src" 
            preload="auto" 
            loop 
            controls 
            liveui 
            muted 
            autoplay
            playsinline :volume="videoOptions.volume" :playbackRate="videoOptions.playbackRate"
            :language="videoOptions.language" :notSupportedMessage="videoOptions.notSupportedMessage"
            :playbackRates="videoOptions.playbackRates" 
            style="width: 100%;height: calc(100% - 46px)" />
    </a-card>
</template>

<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import { reactive, ref } from 'vue'

const inputUrl = ref('https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4')
const useInputEnter = () => {
    console.log(inputUrl.value);
    videoOptions.src = inputUrl.value
}

// video
const videoOptions = reactive({
    src: inputUrl.value,
    poster: 'http://eug.asia:9000/images/ac4c5ed6-53eb-457c-8350-aef04814335c.jpg',
    volume: .2,
    playbackRate: 1,
    language: 'zh-CN',
    notSupportedMessage: '此视频暂无法播放，请稍后再试',
    playbackRates: [.5, 1, 1.5, 2, 2.5, 3],
})
</script>

<style lang="scss">
.base-configure {
    .arco-card-body {
        padding: 0;
        height: 100%;
    }
}
</style>