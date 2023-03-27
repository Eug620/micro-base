<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-02-21 15:34:00
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-27 17:48:51
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
                    <a-carousel v-model:current="moveCurrent" indicator-position="outer" animation-name="card"
                        class="w-full h-5/6" :auto-play="true" indicator-type="dot" show-arrow="hover">
                        <a-carousel-item class="cursor-pointer" v-for="item in doubanList" :key="item.title">
                            <img :src="item?.info?.imgurl" class="h-full m-auto" @click="useToDouBan(item)" />
                        </a-carousel-item>
                    </a-carousel>
                    <div class="h-1/6 text-center animate__animated animate__fadeIn">
                        {{ doubanList[moveCurrent - 1] && doubanList[moveCurrent - 1].title }}
                    </div>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card :bordered="false" class="dashboard-container-card mb-2.5">

                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card :bordered="false" class="dashboard-container-card">
                </a-card>
            </a-col>
            <a-col :span="16">
                <a-card :bordered="false" class="dashboard-container-card ">
                    <template #title>
                        <a-space fill align="center">
                            <a-select placeholder="Please select ..." v-model="type">
                                <a-option :value="item.value" v-for="item in typeList" :key="item.value">{{ item.label
                                }}</a-option>
                            </a-select>
                            <a-select placeholder="Please select ..." v-model="time">
                                <a-option :value="item.value" v-for="item in timeList" :key="item.value">{{ item.label
                                }}</a-option>
                            </a-select>
                        </a-space>
                    </template>
                    <a-descriptions class="h-3/4 w-full overflow-scroll" :data="data" fill column="1" />
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
import { onActivated, onMounted, Ref, ref, watchEffect } from "vue";
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
    typedInstances.value = new Typed('.dashboard-container-title', {
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


const doubanList: Ref<any[]> = ref([])
const moveCurrent = ref(1)
const initDouBan = () => {
    fetch('https://api.vvhan.com/api/douban').then(async (res: any) => {
        const result: any = await res.json()
        console.log(result);

        doubanList.value = result.data
    })
}
const useToDouBan = (item: any) => {
    window.open(item?.info?.url)
}

initDouBan()


// 星座
const current: any = ref({})

const typeList = ref([
    {
        label: '白羊座',
        value: 'aries'
    }, {
        label: '金牛座',
        value: 'taurus'
    },
    {
        label: '双子座',
        value: 'gemini'
    },
    {
        label: '巨蟹座',
        value: 'cancer'
    },
    {
        label: '狮子座',
        value: 'leo'
    },
    {
        label: '处女座',
        value: 'virgo'
    },
    {
        label: '天秤座',
        value: 'libra'
    },
    {
        label: '天蝎座',
        value: 'scorpio'
    },
    {
        label: '射手座',
        value: 'sagittarius'
    },
    {
        label: '摩羯座',
        value: 'capricorn'
    },
    {
        label: '水瓶座',
        value: 'aquarius'
    },
    {
        label: '双鱼座',
        value: 'pisces'
    },
])
const timeList = ref([
    {
        label: '今天',
        value: 'today'
    },
    {
        label: '明天',
        value: 'nextday'
    },
    {
        label: '本周',
        value: 'week'
    },
    {
        label: '今年',
        value: 'year'
    },
    {
        label: '❤️',
        value: 'love'
    }
])
const type = ref('leo')
const time = ref('today')
const data = ref([])
const useHoroscope = async () => {
    try {
        let result: any = await fetch(`https://api.vvhan.com/api/horoscope?type=${type.value}&time=${time.value}`)
        const res: any = await result.json()
        if (res.success) {
            current.value = Object.assign(current.value, res.data)
            data.value = Object.assign([], [
                {
                    label: '更新时间',
                    value: current.value.time
                },
                {
                    label: '综合运势',
                    value: current.value.fortune.all
                },
                {
                    label: '爱情运势',
                    value: current.value.fortune.love
                },
                {
                    label: '学业工作',
                    value: current.value.fortune.work
                },
                {
                    label: '财富运势',
                    value: current.value.fortune.money
                },
                {
                    label: '健康指数',
                    value: current.value?.index?.health
                },
                {
                    label: '商谈指数',
                    value: current.value?.index?.discuss
                },
                {
                    label: '幸运颜色',
                    value: current.value.luckycolor
                },
                {
                    label: '幸运数字',
                    value: current.value.luckynumber
                },
                {
                    label: '速配星座',
                    value: current.value.luckyconstellation
                },
                {
                    label: '短评',
                    value: current.value.shortcomment
                },
                {
                    label: '综合运势',
                    value: current.value?.fortunetext?.all
                },
                {
                    label: '爱情运势',
                    value: current.value.fortunetext.love
                },
                {
                    label: '学业工作',
                    value: current.value.fortunetext.work
                },
                {
                    label: '财富运势',
                    value: current.value.fortunetext.money
                },
                {
                    label: '健康运势',
                    value: current.value.fortunetext.health
                },
            ])
        }
    } catch (error) {
        console.log(error);
    }
};
watchEffect(() => useHoroscope())
</script>

<style lang="scss">
.dashboard-container {
    &-card {
        height: calc((100vh - 1.25rem) / 3);

        // margin-bottom: 0.625rem;
        .arco-card-body {
            height: 100%;
        }
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