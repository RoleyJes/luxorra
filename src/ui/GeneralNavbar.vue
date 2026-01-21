<script setup>
import { ref } from "vue"
import Logo from "./Logo.vue"
import { Icon } from "@iconify/vue"
import CatalogDropdown from "./CatalogDropdown.vue"

const mobileOpen = ref(false)
const navLinks = ref([
  { path: "/", label: "Home" },
  { path: "/collections/all", label: "Shop" },
  { path: "/collections", label: "Catalog", dropdown: true },
  { path: "/blog", label: "Blog" },
])

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-white backdrop-blur-sm">
    <div class="mx-auto flex h-20 max-w-369 items-center justify-between px-4 md:px-10 lg:px-12">
      <!-- logo -->
      <div class="shrink-0">
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </div>

      <!-- nav (desktop) -->
      <nav class="hidden space-x-12.5 text-base text-neutral-500 md:flex">
        <div v-for="(link, i) in navLinks" :key="i" class="">
          <RouterLink
            v-if="!link.dropdown"
            :to="link.path"
            class="leading-20 underline-offset-4 transition duration-300 hover:text-brand-primary hover:underline"
            >{{ link.label }}
          </RouterLink>

          <div v-else class="group">
            <RouterLink
              :to="link.path"
              class="flex items-center gap-0.5 leading-20 underline-offset-4 transition duration-300 hover:text-brand-primary hover:underline"
              >{{ link.label }}
              <Icon icon="ion:chevron-down-outline" class="text-[#d0d0d0]" />
            </RouterLink>

            <!-- Catalog Dropdown -->
            <CatalogDropdown
              class="invisible opacity-0 transition-all duration-600 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
            />
          </div>
        </div>
      </nav>

      <!-- icons -->
      <div class="flex items-center space-x-3 text-brand-primary md:space-x-6">
        <button class="text-xl">
          <Icon icon="mdi:search" class="size-5" />
        </button>
        <button class="text-xl">
          <Icon icon="mdi:user" class="size-5" />
        </button>
        <button class="text-xl">
          <Icon icon="mdi:heart-outline" class="size-5" />
        </button>
        <button class="text-xl">
          <Icon icon="mdi:cart" class="size-5" />
        </button>
      </div>

      <!-- hamburger (mobile) -->
      <button @click="toggleMobile" class="text-2xl text-gray-700 hover:text-orange-500 md:hidden">
        <Icon icon="mdi-light:menu" class="size-6" />
      </button>
    </div>

    <!-- mobile nav -->
    <transition name="slide">
      <nav v-if="mobileOpen" class="border-t border-gray-200 bg-white md:hidden">
        <a href="/" class="block px-4 py-3 hover:bg-gray-100">Home</a>
        <a href="/shop" class="block px-4 py-3 hover:bg-gray-100">Shop</a>
        <a href="/blog" class="block px-4 py-3 hover:bg-gray-100">Blog</a>
        <a href="/contact" class="block px-4 py-3 hover:bg-gray-100">Contact</a>
      </nav>
    </transition>
  </header>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
}
.slide-enter-to,
.slide-leave-from {
  max-height: 500px;
}
</style>
