<template>
  <div class="flex flex-col gap-1.5">
    <label v-if="label" :for="fieldId" class="mb-2 inline-block text-[15px]">{{ label }}</label>

    <!-- Input / Textarea -->
    <component
      :is="as"
      :id="fieldId"
      :type="as === 'input' ? type : undefined"
      :value="modelValue"
      @input="onInput"
      v-bind="$attrs"
      :disabled="disabled"
      :class="[
        'inline-block h-10 w-full bg-white py-2 text-sm text-brand-primary placeholder:text-brand-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        label ? 'px-2.5' : 'px-5',
      ]"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: undefined,
  },
  as: {
    type: String,
    default: "input",
    validator: (val) => ["input", "textarea"].includes(val),
  },
  type: {
    type: String,
    default: "text", // only applies to input
  },
  disabled: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const fieldId = computed(() => props.id || `field-${Math.random().toString(36).slice(2, 9)}`);

function onInput(e) {
  const val = e?.target?.value;
  emit("update:modelValue", val);
}
</script>
