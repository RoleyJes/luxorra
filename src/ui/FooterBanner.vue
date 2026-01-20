<template>
  <section class="mx-auto mt-13 mb-20 max-w-192.5 px-1 text-center lg:px-0">
    <!-- Footer banner image -->
    <div class="fle item-center justif-center mb-8.75">
      <RouterLink to="/">
        <img :src="cabinet" alt="cabinet" class="" />
      </RouterLink>
    </div>

    <!-- Footer banner tags -->
    <div class="mb-8.75 flex items-center justify-center gap-5">
      <RouterLink
        v-for="(link, i) in links"
        :key="i"
        :to="link.path"
        class="pb0.75 border-b border-b-transparent text-lg text-neutral-500 transition-all duration-300 hover:border-b-[#d6d6d6]"
      >
        {{ link.label }}
      </RouterLink>
    </div>

    <!-- Footer banner content -->
    <article>
      <p class="mb-7.5 text-3xl leading-10.5 md:text-[40px] md:leading-14">
        Up To 40% Off Final Sale Items. Caught in the moment!
      </p>

      <ButtonOrLink text="show now" type="medium" />
    </article>
  </section>
</template>

<script setup>
import cabinet from "@/assets/cabinet.webp"
import ButtonOrLink from "@/ui/ButtonOrLink.vue"
import { ref } from "vue"

const links = ref([
  { label: "#summer", path: "/" },
  { label: "#shelf", path: "/" },
  { label: "#Sale", path: "/" },
])
</script>

<style lang="scss" scoped></style>
