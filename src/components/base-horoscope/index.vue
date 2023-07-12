
<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-03-28 10:22:01
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-07-12 10:54:52
 * @FilePath     : /micro-base/src/components/base-horoscope/index.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-col :span="8">
        <a-card :bordered="false" :class="Props.cardClass" class="!rounded-b-lg">
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
            <a-descriptions class="h-5/6 w-full overflow-auto" :data="topdata" fill :column="2" />
        </a-card>
    </a-col>

    <a-col :span="16">
        <a-card :bordered="false" :class="Props.cardClass" class="!rounded-bl-lg">
            <template #title>
                {{ current.title }}
            </template>
            <template #extra>
                <!-- <a-space wrap align="center" size="large"> -->
                    <a-radio-group type="button" v-model="SystemStore.specialEfficiency"
                        @change="SystemStore.setSpecialEfficiency">
                        <a-radio :value="specialEfficiency" :key="specialEfficiency"
                            v-for="specialEfficiency in SpecialEfficiencyEnum">
                            <i class="fa-regular fa-snowflake" v-if="specialEfficiency === SpecialEfficiencyEnum.XH"></i>
                            <i class="fa-solid fa-clover" v-if="specialEfficiency === SpecialEfficiencyEnum.YH"></i>
                            <i class="fa-solid fa-fan" v-if="specialEfficiency === SpecialEfficiencyEnum.MH"></i>
                        </a-radio>
                        <a-radio :value="false">
                            <i class="fa-solid fa-ban"></i>
                        </a-radio>
                    </a-radio-group>

                    <a-radio-group type="button" class="ml-4" v-model="SystemStore.lang" @change="SystemStore.setLang">
                        <a-radio :value="lang" :key="lang" v-for="lang in LangEnum">{{ lang.toLocaleUpperCase()
                        }}</a-radio>
                    </a-radio-group>

                    <a-radio-group type="button" class="ml-4" v-model="SystemStore.theme" @change="SystemStore.setTheme">
                        <a-radio :value="theme" v-for="theme in ThemeEnum" :key="theme">
                            <i class="fa-solid fa-sun" v-if="theme === ThemeEnum.LIGHT"></i>
                            <i class="fa-solid fa-moon" v-if="theme === ThemeEnum.DARK"></i>
                        </a-radio>
                    </a-radio-group>
                <!-- </a-space> -->
            </template>
            <a-descriptions class="h-5/6 w-full overflow-auto" :data="data" fill :column="1" />
        </a-card>
    </a-col>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue"
import { ThemeEnum, LangEnum, SpecialEfficiencyEnum } from '@/enums/system';
import { useSystemStore } from 'store/app';
const SystemStore = useSystemStore()
const Props = defineProps({
    cardClass: String
})
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
const type = ref('aries')
const time = ref('today')
const data = ref([])
const topdata = ref([])

const useHoroscope = async () => {
    try {
        let result: any = await fetch(`https://api.vvhan.com/api/horoscope?type=${type.value}&time=${time.value}`)
        const res: any = await result.json()
        if (res.success) {
            current.value = Object.assign(current.value, res.data)
            topdata.value = Object.assign([], [
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
                }
            ])
            data.value = Object.assign([], [

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

<style></style>