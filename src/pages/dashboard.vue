<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-02-21 15:34:00
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-20 17:09:42
 * @FilePath     : /micro-base/src/pages/dashboard.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-card title="Welcome" class="ml-2.5 h-full relative" :bordered="false">
        <span class="dashboard-title"></span>
        <div class="absolute bottom-3 left-0 text-center w-full dashboard-beian">
            <a href="https://beian.miit.gov.cn">豫ICP备2023002857</a>
        </div>
    </a-card>
</template>

<script lang="ts" setup>
import Typed from "typed.js";
import { onActivated, onMounted, ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";
let stringsArray:any[] = []
let typed: any = null
let timeoutID: any = null
const initTyped = () => {
    typed = new Typed('.dashboard-title', {
        strings: stringsArray,
        typeSpeed: 60,
        // loop: true,
        cursorChar: ' /',
        // fadeOut: true,
        shuffle: true,
        // backDelay: 8000,
        // startDelay: 4000
        onStringTyped: function () {
            clearTimeout(timeoutID)
            timeoutID = setTimeout(() => {
                typed.destroy()
                useResetTyped()
            }, 9000)
        }
    });
}
const useResetTyped = () => {
    fetch('https://api.vvhan.com/api/ian?type=json').then(async res => {
        let result = await res.json()
        stringsArray = [result.data.vhan]
        initTyped()
    })
}

onMounted(() => {
    useResetTyped()
})

onBeforeRouteLeave(() => {
    typed.stop()
    clearTimeout(timeoutID)
})

onActivated(() => {
    typed?.reset()
})

</script>

<style lang="scss">
.dashboard {
    &-title {
        color: rgb(var(--warning-3));

    }

    &-beian {
        a {
            color: var(--color-text-1);
        }
    }
}
</style>