<template>
  <article
    class="absolute top-20 right-1/2 z-9999 mx-auto flex w-full max-w-275 translate-x-1/2 translate-y-8 items-center divide-x divide-[#e7e7e7] bg-white px-7.5 pt-7.5 pb-7 shadow-brand"
  >
    <!-- Links -->
    <ul v-for="obj in data" :key="obj.heading" class="basis-1/4 pe-5.5 pb-7.5 not-first:ps-7.5">
      <li>
        <h3 class="mb-6.25 text-[15px] leading-4.5 font-medium text-brand-primary">
          {{ obj.heading }}
        </h3>
        <ul class="flex flex-col gap-3.75">
          <RouterLink
            v-for="link in obj.links"
            :key="link.label"
            :to="link.path"
            class="w-fit border-b border-b-transparent text-[15px] leading-5.5 text-neutral-500 transition-all duration-250 ease-out hover:border-b-[#e7e7e7] hover:text-brand-primary"
          >
            {{ link.label }}
          </RouterLink>
        </ul>
      </li>
    </ul>

    <!-- Carousel -->
    <div class="pb7.5 basis-1/4 px-4.5">
      <div class="w-50">
        <img :src="catalog1" alt="Coco rose body" class="object-contain" />
      </div>

      <div class="mt-3">
        <RouterLink> Coco Rose Body </RouterLink>
        <p class="flex gap-5 text-sm font-semibold">
          <span class="">$55.00</span>
          <span class="text-[#aaaaaa] line-through">$75.00</span>
        </p>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue"
import catalog1 from "@/assets/navbar/catalog1.webp"
// import catalog2 from "@/assets/navbar/catalog2.webp"

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
