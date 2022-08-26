<!--
 * @Author: eug yyh3531@163.com
 * @Date: 2022-08-25 14:52:51
 * @LastEditors: eug yyh3531@163.com
 * @LastEditTime: 2022-08-27 04:37:02
 * @FilePath: /micro-base/src/pages/menu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="menu-container">
    <a-card title="User">
      <template #extra>
        <a-link>
          <a-button v-if="!userStore.isLogin" type="primary" @click="useLogin"
            >login</a-button
          >
          <a-button v-else type="primary" @click="userStore.logout"
            >logout</a-button
          >
        </a-link>
      </template>
      <template v-if="!userStore.isLogin">
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
      </template>
      <template v-else>
        <a-descriptions :data="infoData" title="User Info" fill :column="1" />
      </template>
    </a-card>

    <a-card title="Menu" style="margin-top: 10px">
      <template #extra>
        <a-button
          :disabled="!userStore.isLogin"
          type="primary"
          @click="useAddMenu"
          >add</a-button
        >
        <a-button style="margin-left:10px;" :disabled="!userStore.isLogin" type="primary" @click="useMenu"
          >menu</a-button
        >
      </template>
      <a-table
        stripe
        table-layout-fixed
        row-key="id"
        :columns="columns"
        :data="subMenu"
      >
        <template #custom="{ record }">
          <a-button @click="() => useEditRoute(record)">Edit</a-button>
        </template>
      </a-table>
    </a-card>

    <!-- edit draw -->
    <a-drawer
      :mask-closable="false"
      width="50%"
      :visible="visibleDrawer"
      @ok="useSubmitEdit"
      @cancel="useCancelEdit"
      unmountOnClose
    >
      <template #title>
        {{ isEdit ? '编辑' : '新增' }}
      </template>
      <a-form :model="menuForm" auto-label-width>
        <a-form-item field="name" label="name">
          <a-input v-model="menuForm.name" placeholder="please enter name..." />
        </a-form-item>
        <a-form-item field="description" label="description">
          <a-input
            v-model="menuForm.description"
            placeholder="please enter description..."
          />
        </a-form-item>

        <a-form-item field="path" label="path">
          <a-input v-model="menuForm.path" placeholder="please enter path..." />
        </a-form-item>
        <a-form-item field="component_path" label="component_path">
          <a-input
            v-model="menuForm.component_path"
            placeholder="please enter component_path..."
          />
        </a-form-item>
        <a-form-item field="affix" label="affix">
          <a-switch v-model="menuForm.affix" />
        </a-form-item>
        <a-form-item field="isEle" label="isEle">
          <a-switch v-model="menuForm.isEle" />
        </a-form-item>
        <a-form-item field="type" label="type">
          <a-input-number
            v-model="menuForm.type"
            placeholder="please enter component_path..."
          />
        </a-form-item>
        <a-form-item field="api" label="api">
          <a-input v-model="menuForm.api" placeholder="please enter api..." />
        </a-form-item>
        <a-form-item field="parent_id" label="parent_id">
          <a-input
            v-model="menuForm.parent_id"
            placeholder="please enter parent_id..."
          />
        </a-form-item>
        <a-form-item field="cache" label="cache">
          <a-switch v-model="menuForm.cache" />
        </a-form-item>
        <a-form-item field="sort_id" label="sort_id">
          <a-input-number
            v-model="menuForm.sort_id"
            placeholder="please enter sort_id..."
          />
        </a-form-item>
        <a-form-item field="enable" label="enable">
          <a-switch v-model="menuForm.enable" />
        </a-form-item>
        <a-form-item field="icon" label="icon">
          <a-input v-model="menuForm.icon" placeholder="please enter icon..." />
        </a-form-item>
        <a-form-item field="isChecked" label="isChecked">
          <a-switch v-model="menuForm.isChecked" />
        </a-form-item>
        <a-form-item field="redirect" label="redirect">
          <a-input
            v-model="menuForm.redirect"
            placeholder="please enter redirect..."
          />
        </a-form-item>
        <a-form-item field="service" label="service">
          <a-input
            v-model="menuForm.service"
            placeholder="please enter your service..."
          />
        </a-form-item>
      </a-form>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { Notification } from '@arco-design/web-vue';
import ServerApi from '@/api';
import { computed, reactive, ref, unref } from 'vue';
// import { useUserStore } from 'store/user';
import { storeToRefs } from 'pinia';
import { useUserWithStore } from '@/store/modules/user';
const userStore = useUserWithStore();
const loginLoading = ref(false);
const { getInfo } = storeToRefs(userStore);
console.log(userStore.info, '????');

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
const useLogin = async () => {
  try {
    let res: any = await userStore.login(loginForm);
  } catch (err) {
    console.log(err);
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
const useAddMenu = () => {
  isEdit.value = false;
  visibleDrawer.value = true;
};
const dataIndex = [
  'custom',
  'id',
  'name',
  'description',
  'path',
  'component_path',
  'affix',
  'isEle',
  'type',
  'api',
  'parent_id',
  'cache',
  'sort_id',
  'enable',
  'icon',
  'ct',
  'isChecked',
  'redirect',
  'service',
];

const columns = dataIndex.map((v: string, i) => ({
  width: 200,
  ellipsis: true,
  title: v,
  [i ? 'dataIndex' : 'slotName']: v,
}));

const isEdit = ref(false);
const visibleDrawer = ref(false);

const baseItem = {
  name: '',
  description: '',
  path: '',
  component_path: '',
  affix: false,
  isEle: false,
  type: 0,
  api: '',
  parent_id: '',
  cache: false,
  sort_id: 0,
  enable: false,
  icon: '',
  isChecked: false,
  redirect: '',
  service: '',
}
const menuForm = reactive({
  name: '',
  description: '',
  path: '',
  component_path: '',
  affix: false,
  isEle: false,
  type: 0,
  api: '',
  parent_id: '',
  cache: false,
  sort_id: 0,
  enable: false,
  icon: '',
  isChecked: false,
  redirect: '',
  service: '',
});
const useEditRoute = (record) => {
  isEdit.value = true
  visibleDrawer.value = true;
};

const useSubmitEdit = async () => {
  try {
    let res:any = await ServerApi.AddBaseMenu(menuForm)
    console.log(res);
    if (res.code === 200) {
      Notification.success({
        title: 'Add Success',
        content: res.msg
      })
      useCancelEdit()
    } else {
      Notification.error({
      title: 'Error',
      content: res.msg
    })
    }
    
  } catch (error) {
    Notification.error({
      title: 'Error',
      content: error
    })
  }
};
const useResetDrawer = () => {
  for (const key in baseItem) {
    menuForm[key] = baseItem[key]
  }
}
const useCancelEdit = () => {
  visibleDrawer.value = false;
  useResetDrawer()

};
</script>

<style lang="scss">
.menu-container {
  padding-left: 10px;
}
</style>