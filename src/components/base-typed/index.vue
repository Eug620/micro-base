

<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-03-28 09:42:36
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-30 10:18:16
 * @FilePath     : /micro-base/src/components/base-typed/index.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-card :bordered="false" class="base-typed">
        <template #title>
            {{ source || 'Welcome' }}
        </template>
        <template #extra>
            <a-radio-group type="button" v-model="loop" @change="useLoopChange">
                <a-radio :value="true">
                    <i class="fa-solid fa-rotate-left"></i>
                </a-radio>
                <a-radio :value="false">
                    <i class="fa-solid fa-ban"></i>
                </a-radio>
            </a-radio-group>
        </template>
        <span class="base-typed-container"></span><br />
    </a-card>
</template>

<script setup lang="ts">
import Typed from "typed.js"
import { onActivated, onMounted, ref } from "vue"
import { onBeforeRouteLeave } from "vue-router"

// 是否循环
const loop = ref(false)
let ian = ref('')
let source = ref('')
let typedInstances: any = ref(null)
let timeoutID: any = ref(null)
const resetTyped = ref(false)
const initTyped = () => {
    typedInstances.value = new Typed('.base-typed-container', {
        strings: [ian.value],
        typeSpeed: 60,
        // loop: true,
        cursorChar: ' /',
        // fadeOut: true,
        shuffle: true,
        // backDelay: 8000,
        // startDelay: 4000
        onStringTyped: function () {
            clearTimeout(timeoutID.value)
            if (!loop.value) return
            timeoutID.value = setTimeout(() => {
                typedInstances.value.destroy()
                useResetTyped()
            }, 9000)
        }
    });
}
const useResetTyped = () => {
    try {
        fetch('https://api.vvhan.com/api/ian?type=json').then(async res => {
            let result = await res.json()
            ian.value = result.data.vhan
            source.value = result.data.source
            initTyped()
        })
    } catch (err) {
        console.log(err)
    }
}

onMounted(() => {
    useResetTyped()
})

const useLoopChange = () => {
    clearTimeout(timeoutID.value)
    if (loop.value) {
        typedInstances.value?.destroy()
        useResetTyped()
    }
}

onBeforeRouteLeave(() => {
    resetTyped.value = true
    clearTimeout(timeoutID.value)
    typedInstances.value?.destroy()
})

onActivated(() => {
    if (resetTyped.value) {
        initTyped()
        resetTyped.value = false
    }
})
</script>

<style lang="scss">
.base-typed {
    &-container {
        color: rgb(var(--primary-3)) !important;
        font-size: 1rem;
    }

    .typed-cursor {
        color: rgb(var(--danger-3)) !important;
        font-size: 1rem;
    }
}
</style>