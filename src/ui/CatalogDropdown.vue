<template>
  <article
    class="absolute right-1/2 z-9999 mx-auto flex w-full max-w-275 translate-x-1/2 items-center divide-x divide-[#e7e7e7] bg-white px-7.5 py-7.5 shadow-brand transition-all duration-600"
  >
    <ul v-for="obj in data" :key="obj.heading" class="basis-1/4 py-7.5 pe-5.5 not-first:ps-7.5">
      <li>
        <h3 class="mb-6.25 text-[15px] leading-4.5 font-medium text-brand-primary">
          {{ obj.heading }}
        </h3>
        <ul class="flex flex-col gap-3.75">
          <RouterLink
            v-for="link in obj.links"
            :key="link.label"
            :to="link.path"
            class="text-[15px] leading-5.5 text-neutral-500"
          >
            {{ link.label }}
          </RouterLink>
        </ul>
      </li>
    </ul>
  </article>
</template>

<script setup>
import { ref } from "vue"

const data = ref([
  {
    heading: "Popular",
    links: [
      { label: "Casual", path: "/collections/fashion" },
      { label: "Exclusive", path: "/collections/all" },
      { label: "Aligori", path: "/collections/all" },
      { label: "Churidar", path: "/collections/all" },
      { label: "Shalwar", path: "/collections/all" },
      { label: "Jeans", path: "/collections/all" },
      { label: "Dress", path: "/collections/all" },
    ],
  },
  {
    heading: "Best Selling",
    links: [
      { label: "Sandals", path: "/collections/fashion" },
      { label: "Bast shoe", path: "/collections/all" },
      { label: "Blucher shoe", path: "/collections/all" },
      { label: "Boat shoe", path: "/collections/all" },
      { label: "Brogan", path: "/collections/all" },
      { label: "Chelsea boot", path: "/collections/all" },
      { label: "Brothel creeper", path: "/collections/all" },
    ],
  },
  {
    heading: "New Product",
    links: [
      { label: "Belt", path: "/collections/fashion" },
      { label: "Wallets", path: "/collections/all" },
      { label: "Card Holders", path: "/collections/all" },
      { label: "Bags", path: "/collections/all" },
      { label: "Executive bag", path: "/collections/all" },
      { label: "Cufflinks", path: "/collections/all" },
      { label: "Cap", path: "/collections/all" },
    ],
  },
])
</script>

<style lang="scss" scoped></style>
