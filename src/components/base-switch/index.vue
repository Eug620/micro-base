<!--
 * @Author       : Eug
 * @Date         : 2022-04-22 14:27:12
 * @LastEditTime : 2022-04-22 18:31:56
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-base/src/components/base-switch/index.vue
-->
<template>
  <div
    @click="useSwitchClick"
    class="w-10 h-5 rounded-full flex px-0.5 items-center grid"
    :class="[
      useProsValue && 'justify-items-end', 
      disabled ? (useProsValue ? 'bg-blue-300' : 'bg-gray-300') :  (useProsValue ? 'bg-blue-400' : 'bg-gray-400' ),
      disabled ? 'cursor-not-allowed' : 'cursor-pointer'
    ]"
  >
    <div class="w-4 h-4 bg-white rounded-full">
      <template v-if="loading">

      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
defineOptions({
  name: "base-switch"
});
const props = defineProps({
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  value: {
    type: [Boolean, String, Number],
    default: false
  },
  readonley: {
    type: [Boolean],
    default: false
  },
  disabled: {
    type: [Boolean],
    default: false
  },
  loading: {
    type: [Boolean],
    default: false
  }
});

const useProsValue = computed(() => {
  return props.value || props.modelValue;
});
console.log(props);

const emit = defineEmits<{
  (e: "update:modelValue", value: Boolean): void;
}>();

const useSwitchClick = () => {
  if (!props.readonley && !props.disabled) {
    emit("update:modelValue", !useProsValue.value);
  }
};
</script>

<style lang="scss">
</style>