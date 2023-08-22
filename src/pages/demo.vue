
<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-08-21 15:26:55
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-08-22 09:54:44
 * @FilePath     : /micro-base/src/pages/demo.vue
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <a-card :bordered="false" class="demo p-2.5 h-full ml-2.5 relative" id="demoContainer">
        <p>{{ mouseX }}/ {{ innerWidth }}</p>
        <p>{{ mouseY }}/{{ innerHeight }}</p>
        {{ comStyle }}
        <div> 角度: {{ gamma }}度</div>
        <div> 象限: 第{{ startText }}象限</div>
        <div class="centers">
            <div class="wtf" :style="{
                // display: display,
                transform: `translate(-50%, -50%) rotate(${gamma}deg)`,
            }">

            </div>
            <div class="lineX"></div>
            <div class="lineY"></div>
        </div>
    </a-card>
</template>

<script lang="ts" setup>
import { computed, onActivated, onMounted, ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";

const mouseX = ref(0)
const mouseY = ref(0)

const innerWidth = ref(0)
const innerHeight = ref(0)
const display = ref('none')
const gamma = ref(0)

const startText = ref('')

const moveInstance = ({ x, y }:MouseEvent) => {
    mouseX.value = x
    mouseY.value = y

    if (mouseX.value >= innerWidth.value / 2) {
        if (mouseY.value >= innerHeight.value / 2) {
            const left = mouseY.value - innerHeight.value / 2
            const top = mouseX.value - innerWidth.value / 2
            gamma.value = Math.round(Math.atan(left / top) * 180 / Math.PI) + 90;
            startText.value = '四'
        } else {
            // 顶边
            const top = mouseX.value - innerWidth.value / 2
            const left = innerHeight.value / 2 - mouseY.value

            gamma.value = Math.round(Math.atan(top / left) * 180 / Math.PI);
            startText.value = '一'

            // console.log(Math.atan2(top, left), Math.tan(top/left));
        }
    } else {
        if (mouseY.value >= innerHeight.value / 2) {
            startText.value = '三'
            const top = mouseX.value - innerWidth.value / 2
            const left = innerHeight.value / 2 - mouseY.value

            gamma.value = Math.round(Math.atan(top / left) * 180 / Math.PI) + 180;
        } else {
            startText.value = '二'
            const top = mouseX.value - innerWidth.value / 2
            const left = mouseY.value - innerHeight.value / 2
            gamma.value = Math.round(Math.atan(left / top) * 180 / Math.PI) + 270;
        }
    }

}
const overInstance = () => {
    display.value = 'block'
    console.log('进入');
}
const outInstance = () => {
    display.value = 'none'
    console.log('离开');
}
/**
 * 2 | 1
 * —————
 * 3 | 4
 */
const initEventListener = () => {
    window.addEventListener('mousemove', moveInstance)
    window.addEventListener('mouseover', overInstance)
    window.addEventListener('mouseout', outInstance)
}
const comStyle = computed(() => {
    return {
        top: `${Math.floor(mouseY.value / innerHeight.value * 100)}%`,
        left: `${Math.floor(mouseX.value / innerWidth.value * 100)}%`
        // transform: `translate(
        //    ${mouseX.value/innerWidth.value*100 -25}%,
        // ${mouseY.value/innerHeight.value*100 -25}%
        // )`
    }
})

onActivated(() => {
    console.log('onActivated');
    initEventListener()

})
onBeforeRouteLeave(() => {
    console.log('leave');
    window.removeEventListener('mousemove',moveInstance)
    window.removeEventListener('mouseover',overInstance)
    window.removeEventListener('mouseout',outInstance)

})
onMounted(() => {
    innerWidth.value = window.innerWidth
    innerHeight.value = window.innerHeight
    console.log(window.innerWidth, window.innerHeight);
    // initEventListener()

})
</script>

<style lang="scss">
.demo {
    .arco-card-body {
        padding: 0 !important;
        height: 100% !important;
        // position: relative;
        // position: absolute;
    }
}


.centers {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background-color: #ccc;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;

    .lineX {
        width: 100%;
        height: 1px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .lineY {
        height: 100%;
        width: 1px;
        background-color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
}

@keyframes grape {
    0% {
        top: 0px;
    }

    100% {
        top: -30px;
    }
}

.wtf {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 10px;
    width: 10px;
    border-radius: 10px;
    background-color: #fff;

    &::before {
        content: '';
        position: absolute;
        width: 10px;
        display: v-bind(display);
        border-radius: 10px;
        height: 10px;
        background-color: #fff;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        animation: .8s grape ease;
    }


}
</style>