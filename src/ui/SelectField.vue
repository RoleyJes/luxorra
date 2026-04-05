<template>
  <select
    :name="name"
    :id="id"
    v-model="model"
    v-bind="attrs"
    class="appearance-none border border-[#e5e5e5] py-2 ps-2.5 pe-7 text-black focus:outline-none"
  >
    <slot></slot>
  </select>
</template>

<script setup>
import { useAttrs } from "vue";

const attrs = useAttrs();

const model = defineModel();
// const model = defineModel({
//   type: [String, Number],
//   default: "",
// });

defineProps({
  name: {
    type: String,
    required: false,
    default: "",
  },
  id: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
