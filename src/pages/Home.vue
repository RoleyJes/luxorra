<script setup>
import TabbedCollectionsDisplay from "@/ui/TabbedCollectionsDisplay.vue";
import FooterBanner from "@/ui/FooterBanner.vue";
import EmblaCarousel from "@/ui/slider/EmblaCarousel.vue";
</script>

<template>
  <main>
    <div class="pt4 lg:pt-8">
      <EmblaCarousel />
    </div>
    <TabbedCollectionsDisplay />
    <FooterBanner />
  </main>
</template>

<style lang="scss" scoped></style>
