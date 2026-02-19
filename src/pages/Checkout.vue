<script setup>
import { useUser } from "@/composables/useUser";
import Logo from "@/ui/Logo.vue";
import { Icon } from "@iconify/vue";
import { getFirstLetter } from "@/utils/helpers";

const { user, isFetchingUser } = useUser();
</script>

<template>
  <header class="border-b border-b-neutral-border2">
    <nav class="mx-auto flex w-full max-w-container items-center justify-between py-5.25">
      <RouterLink :to="{ name: 'home' }">
        <Logo />
      </RouterLink>
      <RouterLink :to="{ name: 'cart' }">
        <Icon icon="solar:cart-outline" class="text-2xl" />
      </RouterLink>
    </nav>
  </header>

  <div v-if="isFetchingUser">
    <div class="mx-auto h-10 w-32 animate-pulse rounded bg-neutral-200" />
  </div>
  <main v-else class="grid min-h-[calc(100vh-78px)] grid-cols-1 text-black lg:grid-cols-2">
    <!-- Left -->
    <section class="flex justify-end border-r border-r-neutral-border2">
      <div class="h-full w-full max-w-125.75 p-[3.8rem]">
        <!-- Email -->
        <div class="flex items-center justify-between border-b-neutral-border2 pb-2">
          <div class="flex items-center gap-2">
            <!-- "Icon" -->
            <div class="flex size-8 items-center justify-center rounded-full bg-[#fafafa]">
              <span class="text-xs">{{ getFirstLetter(user.name) }}</span>
            </div>
            <!-- email -->
            <p class="text-sm">{{ user.email }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Right -->
    <section class="bg-[#fafafa]">fuyhk</section>
  </main>
</template>

<style lang="scss" scoped></style>
