<script setup>
import { ref } from "vue"
import Logo from "./Logo.vue"
import { Icon } from "@iconify/vue"
import CatalogDropdown from "./CatalogDropdown.vue"

const mobileOpen = ref(false)
const navLinks = ref([
  { path: "/", label: "Home" },
  { path: "/collections/all", label: "Shop" },
  { path: "/collections", label: "Catalog" },
  { path: "/blog", label: "Blog" },
])

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}
</script>

<template>
  <header class="fixed top-0 z-50 w-full bg-white backdrop-blur-sm">
    <div class="mx-auto flex h-20 max-w-369 items-center justify-between px-4 md:px-10 lg:px-12">
      <!-- logo -->
      <div class="shrink-0">
        <RouterLink to="/">
          <!-- <img src="/logo.png" alt="Logo" class="h-10 w-auto" /> -->
          <Logo />
        </RouterLink>
      </div>

      <!-- nav (desktop) -->
      <nav class="hidden space-x-12.5 text-base text-neutral-500 md:flex">
        <RouterLink
          v-for="(link, i) in navLinks"
          :key="i"
          :to="link.path"
          class="group transition hover:text-brand-primary"
          >{{ link.label }}
        </RouterLink>

        <!-- dropdown example -->
        <!-- <div class="group relative">
          <button class="transition hover:text-orange-500">Shop</button>
          <div
            class="pointer-events-none absolute left-0 mt-2 w-40 border border-gray-200 bg-white opacity-0 shadow-lg transition group-hover:pointer-events-auto group-hover:opacity-100"
          >
            <a href="/catalog" class="block px-4 py-2 hover:bg-gray-50">All Products</a>
            <a href="/new" class="block px-4 py-2 hover:bg-gray-50">New Arrivals</a>
          </div>
        </div> -->
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

    <!-- Catalog Dropdown -->
    <!-- <div class="absolute w-full"> -->
    <CatalogDropdown />
    <!-- </div> -->

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
