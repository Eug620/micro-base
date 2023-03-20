<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-02-21 15:34:00
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-20 14:03:28
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
import { onMounted } from "vue";
onMounted(() => {
    var typed = new Typed('.dashboard-title', {
        strings: [
            "人这种东西，除了为了永不满足的欲望追求新的刺激之外，也是重视稀少价值之物的奇怪生物。",
            "若批评不自由，则赞美无意义。",
            "渔舟唱晚，响穷彭蠡之滨；雁阵惊寒，声断衡阳之浦。",
            "要超越过去与悲伤，用坚强和笑容去开拓明天。",
            "他们只是想保护自己的灵魂，结果，雪穗从不以真面目示人，亮司则至今仍在黑暗的通风管中徘徊。",
            "一口饭掉一滴泪，一次咀嚼一个叹息。",
            "生活中最重要的事情：不是胜利，而是努力；不是征服，而是奋力拼搏。",
            "活在现实中的人是错的，而那些哭泣的人才是正确的，孤独的我们才有人类的样子。",
            "人生就是一场旅行，没有终点的这条路，和爱着的人肩并肩，寻找着梦的所在。",
            "不怕万人阻挡，就怕自己投降，将来的你一定会感激现在拼命的自己，自己选择的路，再艰难，跪着也要走完。",
            "少年去游荡，中年想掘藏，老年做和尚。",
            "世界上一切不利状况，都是因为当事人的能力不足。",
            "祈祷奇迹，其实不如无尽的练习。",
            "生命值得为之而战。",
            "记忆，总会传承下去，无论是用何种方式。",
            "如果你掉进了黑暗里，你能做的，不过是静心等待，直到你的双眼适应黑暗。"
        ],
        typeSpeed: 60,
        loop: true,
        cursorChar: ' /',
        // fadeOut: true,
        shuffle: true,
        backDelay: 5000
        // startDelay: 4000
    });

    fetch('https://api.vvhan.com/api/joke?type=json').then(async res => {
        let result = await res.json()
        console.log(result);
    })
})

</script>

<style lang="scss">
.dashboard {
    &-title {
        color: rgb(var(--danger-3));

    }

    &-beian {
        a {
            color: var(--color-text-1);
        }
    }
}
</style>