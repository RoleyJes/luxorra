<template>
  <div class="w-full">
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      :class="[
        'w-full rounded-md border bg-white px-4 py-3 transition outline-none',
        error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-black',
      ]"
    >
      <option disabled value="">{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>

    <p v-if="error" class="mt-1 text-sm text-red-500">
      {{ error }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  placeholder: String,
  options: {
    type: Array,
    default: () => [],
  },
  error: String,
});

defineEmits(["update:modelValue"]);
</script>
