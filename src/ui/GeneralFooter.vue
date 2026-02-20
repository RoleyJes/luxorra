<script setup>
import { ref } from "vue";
import FooterCompanies from "./FooterCompanies.vue";
import FooterSocials from "./FooterSocials.vue";

const links = ref([
  { path: "/", label: "Search" },
  { path: "/", label: "About us" },
  { path: "/", label: "Contact" },
  { path: "/", label: "Policy" },
  { path: "/", label: "Faqs" },
]);

const year = new Date().getFullYear();
</script>

<template>
  <footer class="mt-auto bg-neutral-100 pt-17.5 pb-20 text-sm md:pt-22.5 md:pb-25">
    <div class="mx-auto px-4 md:max-w-180 lg:max-w-240 xl:max-w-container">
      <div class="grid grid-cols-1 gap-y-12 lg:grid-cols-4 lg:gap-y-0">
        <div class="lg:col-span-3">
          <nav class="mb-5">
            <ul class="flex flex-row flex-wrap items-center gap-x-10 gap-y-2">
              <li v-for="(link, i) in links" :key="i">
                <RouterLink
                  :to="link.path"
                  class="text-neutral-500 transition hover:text-brand-primary"
                  >{{ link.label }}
                </RouterLink>
              </li>
            </ul>
          </nav>
          <p class="leading-6 text-neutral-600">
            © {{ year }} Luxorra. All Rights Reserved |
            <span class="font-bold">(+00) 123 567990</span> | contact@Luxorra.com
          </p>
        </div>
        <div class="lg:col-span-1 lg:text-right">
          <FooterSocials />
          <FooterCompanies />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
