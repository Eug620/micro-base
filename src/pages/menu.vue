<!--
 * @Author: eug yyh3531@163.com
 * @Date: 2022-08-25 14:52:51
 * @LastEditors: eug yyh3531@163.com
 * @LastEditTime: 2022-08-26 13:38:35
 * @FilePath: /micro-base/src/pages/menu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="menu-container">
    <a-card title="Menu">
      <template #extra>
        <a-link>
          <a-button v-if="!getToken" type="primary" @click="useLogin">login</a-button>
        <a-button v-else type="primary" @click="useLogout">logout</a-button>
          <a-button type="primary" style="margin-left:10px" @click="useMenu">menu</a-button>
        </a-link>
      </template>
      <a-form :model="loginForm" auto-label-width>
        <a-form-item field="name" label="name">
          <a-input
            v-model="loginForm.name"
            placeholder="please enter your name..."
          />
        </a-form-item>
        <a-form-item field="password" label="password">
          <a-input
            v-model="loginForm.password"
            placeholder="please enter your password..."
          />
        </a-form-item>
      </a-form>
      <a-descriptions :data="infoData" title="User Info" fill :column="1" />
      <a-descriptions :data="tokenData" title="User Token" fill :column="1" />
      {{ subMenu }}
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { Notification } from '@arco-design/web-vue';
import ServerApi from '@/api';
import { computed, reactive, ref, unref } from 'vue';
import { useUserStore } from 'store/user';
import { storeToRefs } from 'pinia';
const loginLoading = ref(false);
const userStore = useUserStore();
const { getInfo, getToken } = storeToRefs(userStore);
const useLogout = () => {
  userStore.delData();
};

const subMenu = ref([]);
const loginForm = reactive({
  name: '',
  password: '',
});
const keys = computed(() => {
  return Object.keys(unref(getInfo));
});
const infoData = computed(() => {
  return unref(keys).map((k) => {
    return { label: k, value: getInfo.value[k] };
  });
});
const tokenData = computed(() => {
  return getToken.value
    ? [
        {
          label: 'token',
          value: getToken.value,
        },
      ]
    : [];
});
const useLogin = async () => {
  try {
    loginLoading.value = true;
    let res: any = await ServerApi.UserLogin({
      name: loginForm.name,
      password: loginForm.password,
    });
    console.log(res);
    if (res.data) {
        userStore.setData(res.data, res.token);
    } else {
      Notification.error({
        title: 'login',
        content: res.msg,
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    loginLoading.value = false;
  }
};
const useMenu = async () => {
  try {
    let res = await ServerApi.GetBaseMenu();
    console.log(res, 'useMenu result');
    subMenu.value = res.data;
  } catch (err) {
    console.log('useMenu error', err, err.message);
  }
};
</script>

<style lang="scss">
.menu-container {
  padding-left: 10px;
}
</style>