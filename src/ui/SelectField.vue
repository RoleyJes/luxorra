<template>
  <select
    :name="name"
    :id="id"
    :value="value"
    class="appearance-none border border-[#e5e5e5] py-2 ps-2.5 pe-7 text-black focus:outline-none"
  >
    <slot></slot>
  </select>
</template>

<script setup>
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
  value: {
    type: [String, Number],
  },
})
</script>

<style lang="scss" scoped></style>
