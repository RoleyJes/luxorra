<template>
  <section
    class="mx-auto my-16.25 grid w-full max-w-container grid-cols-[270px_1fr] md:my-17.5 lg:mt-20 lg:mb-25"
  >
    <!-- Sidebar filters -->
    <aside>test</aside>

    <!-- Products -->
    <main>
      <ProductCard />
    </main>
  </section>
</template>

<script setup>
import ProductCard from "./ProductCard.vue"
</script>

<style lang="scss" scoped></style>
