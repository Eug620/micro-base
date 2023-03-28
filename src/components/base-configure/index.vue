<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-03-28 10:44:30
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-28 10:46:03
 * @FilePath     : /micro-base/src/components/base-configure/index.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-card :bordered="false" class="text-center">
        <a-space wrap align="center" size="large">
            <a-radio-group type="button" v-model="SystemStore.specialEfficiency" @change="SystemStore.setSpecialEfficiency">
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
</template>

<script setup lang="ts">
import { ThemeEnum, LangEnum, SpecialEfficiencyEnum } from '@/enums/system';
import { useSystemStore } from 'store/app';
const SystemStore = useSystemStore()
</script>

<style></style>