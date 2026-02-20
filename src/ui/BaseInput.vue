<template>
  <div class="w-full">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="[
        'w-full rounded-md border px-4 py-3 transition outline-none',
        error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-black',
      ]"
    />

    <p v-if="error" class="mt-1 text-sm text-red-500">
      {{ error }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: "text",
  },
  error: String,
});

defineEmits(["update:modelValue"]);
</script>
