<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-02-21 15:34:00
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-27 15:17:36
 * @FilePath     : /micro-base/src/pages/dashboard.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <div class="h-full pl-2.5 dashboard-container">
        <a-row :gutter="10">
            <a-col :span="16">
                <a-card :bordered="false" class="dashboard-container-card mb-2.5">
                    <template #title>
                        {{ typedTitle || 'Welcome' }}
                    </template>
                    <span class="dashboard-container-title"></span><br />
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card :bordered="false" class="dashboard-container-card mb-2.5 text-center">
                    <a-space wrap align="center" size="large">
                        <a-radio-group type="button" v-model="SystemStore.specialEfficiency"
                            @change="SystemStore.setSpecialEfficiency">
                            <a-radio :value="specialEfficiency" :key="specialEfficiency"
                                v-for="specialEfficiency in SpecialEfficiencyEnum">
                                <i class="fa-regular fa-snowflake"
                                    v-if="specialEfficiency === SpecialEfficiencyEnum.XH"></i>
                                <i class="fa-solid fa-clover" v-if="specialEfficiency === SpecialEfficiencyEnum.YH"></i>
                                <i class="fa-solid fa-fan" v-if="specialEfficiency === SpecialEfficiencyEnum.MH"></i>
                            </a-radio>
                            <a-radio :value="false">
                                <i class="fa-solid fa-ban"></i>
                            </a-radio>
                        </a-radio-group>

                        <a-radio-group type="button" v-model="SystemStore.lang" @change="SystemStore.setLang">
                            <a-radio :value="lang" :key="lang" v-for="lang in LangEnum">{{ lang.toLocaleUpperCase()
                            }}</a-radio>
                        </a-radio-group>

                        <a-radio-group type="button" v-model="SystemStore.theme" @change="SystemStore.setTheme">
                            <a-radio :value="theme" v-for="theme in ThemeEnum" :key="theme">
                                <i class="fa-solid fa-sun" v-if="theme === ThemeEnum.LIGHT"></i>
                                <i class="fa-solid fa-moon" v-if="theme === ThemeEnum.DARK"></i>
                            </a-radio>
                        </a-radio-group>
                    </a-space>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card :bordered="false" class="dashboard-container-card mb-2.5">
                    <h3 class="animate__animated animate__slideInRight"><i class="fa fa-heart mb-4"></i></h3>
                    <h3><i class="fas fa-spinner mb-4"></i></h3>
                    <h3 class="animate__animated animate__slideInRight"><i class="fal fa-spinner mb-4"></i></h3>
                    <h3>
                        <!-- 页面中使用方式 -->
                        {{ $t('message.hello') }}
                    </h3>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card :bordered="false" class="dashboard-container-card mb-2.5">
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card :bordered="false" class="dashboard-container-card mb-2.5">
                </a-card>
            </a-col>
            <a-col :span="24">
                <a-card :bordered="false" class="dashboard-container-card ">
                </a-card>
            </a-col>
        </a-row>
        <div class="absolute bottom-3 left-0 text-center w-full dashboard-beian">
            <a href="https://beian.miit.gov.cn">豫ICP备2023002857</a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Typed from "typed.js";
import { onActivated, onMounted, ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import { ThemeEnum, LangEnum, SpecialEfficiencyEnum } from '@/enums/system';
import { useSystemStore } from 'store/app';
const SystemStore = useSystemStore()

let typedStrings = ref('')
let typedTitle = ref('')
let typedInstances: any = ref(null)
let timeoutID: any = ref(null)
const resetTyped = ref(false)
const initTyped = () => {
    typedInstances.value = new Typed('.dashboard-title', {
        strings: [typedStrings.value],
        typeSpeed: 60,
        // loop: true,
        cursorChar: ' /',
        // fadeOut: true,
        shuffle: true,
        // backDelay: 8000,
        // startDelay: 4000
        onStringTyped: function () {
            clearTimeout(timeoutID.value)
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
            typedStrings.value = result.data.vhan
            typedTitle.value = result.data.source
            initTyped()
        })
    } catch (err) {
        console.log(err)
    }
}

onMounted(() => {
    useResetTyped()
})

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
.dashboard-container {
    &-card {
        height: calc((100vh - 1.25rem) / 3);
        // margin-bottom: 0.625rem;
    }

    &-title {
        color: rgb(var(--primary-3)) !important;
        font-size: 1rem;
    }

    .typed-cursor {
        color: rgb(var(--danger-3)) !important;
        font-size: 1rem;
    }

    &-beian {
        a {
            color: var(--color-text-1);
            // color: rgb(var(--danger-6))
        }
    }
}
</style>