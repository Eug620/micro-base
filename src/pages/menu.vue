<!--
 * @Author: eug yyh3531@163.com
 * @Date: 2022-08-25 14:52:51
 * @LastEditors: eug yyh3531@163.com
 * @LastEditTime: 2022-08-26 12:44:31
 * @FilePath: /micro-base/src/pages/menu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <h3>menu</h3>
        <p>{{getInfo}}</p>
        <p>{{getToken}}</p>
        <p><a-button type="primary" @click="useLogin">login</a-button></p>
        <p><a-button type="primary" @click="useLogout">logout</a-button></p>
        <p><a-button type="primary" @click="useMenu">menu</a-button></p>
    </div>
</template>

<script setup lang="ts">
import { Notification } from '@arco-design/web-vue'

import ServerApi from '@/api'
import { ref } from 'vue-demi';
import { useUserStore } from 'store/user'
import { storeToRefs } from 'pinia';
const loginLoading = ref(false)
const userStore = useUserStore()
const { getInfo, getToken } = storeToRefs(userStore)
const useLogout = () => {
    userStore.delData()
}
const useLogin = async () => {
    try {
        loginLoading.value = true
        let res:any = await ServerApi.UserLogin({
            name: 'admin',
            password: 'admin'
        })
        console.log(res);
        userStore.setData(res.data, res.token)
        
    } catch (err) {
        console.log(err);
    } finally {
        loginLoading.value = false
    }
}
const useMenu = async () => {
    try {
        let res = await ServerApi.GetBaseMenu()
        console.log(res, 'useMenu result');
        
    } catch(err) {
        console.log('useMenu error',err,err.message);
        // TODO AppContext
        Notification.error(err.message)
    }
}

useMenu()
</script>

<style>

</style>