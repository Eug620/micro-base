<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-02-21 15:34:00
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-30 15:14:04
 * @FilePath     : /micro-base/src/pages/dashboard.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <div class="h-full pl-2.5 dashboard-container">
        <a-row :gutter="10">
            <!-- 星座 -->
            <BaseHoroscope card-class="dashboard-container-card  mb-2.5" />
            <a-col :span="8">
                <a-card :bordered="false" class="dashboard-container-card  mb-2.5">
                </a-card>
            </a-col>
            <!-- 电影 -->
            <a-col :span="8">
                <BaseConfigure class="dashboard-container-card mb-2.5" />
            </a-col>
            <a-col :span="8">
                <BaseCarousel class="dashboard-container-card  mb-2.5" />
            </a-col>
             <!-- 随机一言 -->
             <a-col :span="16">
                <BaseMinio/>
            </a-col>
            <a-col :span="8">
                <BaseTyped class="dashboard-container-card mb-2.5" />
            </a-col>
        </a-row>
        <a-card :bordered="false" class="text-center dashboard-beian">
            <a href="https://beian.miit.gov.cn">豫ICP备2023002857</a>
        </a-card>
    </div>
</template>

<script lang="ts" setup>
import BaseTyped from '@/components/base-typed/index.vue'
import BaseCarousel from '@/components/base-carousel/index.vue'
import BaseHoroscope from '@/components/base-horoscope/index.vue'
import BaseConfigure from '@/components/base-configure/index.vue'
import BaseMinio from '@/components/base-minio/index.vue'

</script>

<style lang="scss">
.dashboard-container {
    &-card {
        height: calc((100vh - 1.25rem - 3.25rem) / 3);

        .arco-card-body {
            height: 100%;
        }
    }

    &-beian {
        a {
            color: var(--color-text-1);
            // color: rgb(var(--danger-6))
        }
    }
}
</style>