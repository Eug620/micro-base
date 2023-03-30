

<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-03-28 09:58:02
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-30 09:37:55
 * @FilePath     : /micro-base/src/components/base-carousel/index.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-card :bordered="false" class="base-carousel">
        <template #title>
            {{ carouselList[moveCurrent - 1] && carouselList[moveCurrent - 1].title }}
        </template>
        <template #extra>{{ carouselList[moveCurrent - 1] && carouselList[moveCurrent - 1].info.pingfen }} 分</template>
        <a-carousel v-model:current="moveCurrent" indicator-position="outer" animation-name="card" class="w-full h-3/4"
            :auto-play="true" indicator-type="dot" show-arrow="hover">
            <a-carousel-item class="cursor-pointer" v-for="item in carouselList" :key="item.title">
                <img :src="item?.info?.imgurl" class="h-full m-auto" @click="useToLink(item)" />
            </a-carousel-item>
        </a-carousel>
        <!-- <div class="h-1/6 text-center animate__animated animate__fadeIn">
            {{ carouselList[moveCurrent - 1] && carouselList[moveCurrent - 1].title }}
        </div> -->
    </a-card>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue"
const carouselList: Ref<any[]> = ref([])
const moveCurrent = ref(1)
const init = () => {
    fetch('https://api.vvhan.com/api/douban').then(async (res: any) => {
        const result: any = await res.json()
        carouselList.value = result.data
    })
}
const useToLink = (item: any) => {
    window.open(item?.info?.url)
}

init()
</script>

<style></style>