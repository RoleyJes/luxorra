<script setup>
import { ref } from "vue"
import FooterCompanies from "./FooterCompanies.vue"
import FooterSocials from "./FooterSocials.vue"

const links = ref([
  { path: "/", label: "Search" },
  { path: "/", label: "About" },
  { path: "/", label: "Contact" },
  { path: "/", label: "Pollicy" },
  { path: "/", label: "Faqs" },
])
</script>

<template>
  <footer class="mt-auto bg-neutral-100 pt-17.5 pb-20 text-sm md:pt-22.5 md:pb-25">
    <div class="mx-auto px-4 md:max-w-180 lg:max-w-240 xl:max-w-300">
      <div class="grid grid-cols-4">
        <div class="col-span-3">
          <nav class="mb-5">
            <ul class="flex flex-col items-center gap-10 md:flex-row">
              <li v-for="(link, i) in links" :key="i">
                <RouterLink
                  :to="link.path"
                  class="text-neutral-500 transition hover:text-brand-primary"
                  >{{ link.label }}
                </RouterLink>
              </li>
            </ul>
          </nav>
          <p class="text-neutral-600">
            © 2018 lezada. All Rights Reserved | <span class="font-bold">(+00) 123 567990</span> |
            contact@lezada.com
          </p>
        </div>
        <div class="col-span-1 lg:text-right">
          <FooterSocials />
          <FooterCompanies />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
