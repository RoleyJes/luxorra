<template>
  <div class="w-full bg-[#f6f6f6] py-7.5">
    <div class="mx-auto max-w-container px-3.75">
      <p v-if="title" class="mb-5 text-3xl leading-[1.2] md:text-5xl">{{ title }}</p>
      <div class="flex w-full items-center gap-3">
        <template v-for="(link, i) in breadcrumbs" :key="i">
          <component
            :is="link.path ? 'RouterLink' : 'p'"
            :to="link.path"
            :class="[
              'text-sm tracking-wider transition-all',
              !link.path
                ? 'text-neutral-400'
                : 'text-neutral-700 hover:underline hover:underline-offset-4',
            ]"
            >{{ link.label }}</component
          >
          <span class="text-primary/50 text-xs last:hidden">/</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
})
</script>

<style lang="scss" scoped></style>
