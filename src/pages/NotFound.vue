<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
  >
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-900">404</h1>
      <h2 class="mt-4 text-3xl font-semibold text-gray-700">Page Not Found</h2>
      <p class="mt-2 text-lg text-gray-600">Sorry, the page you are looking for doesn't exist.</p>
      <div class="mt-8">
        <RouterLink
          to="/"
          class="hover:bg-brand-primary-dark inline-flex items-center rounded-md border border-transparent bg-brand-primary px-4 py-2 text-sm font-medium text-white shadow-sm focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:outline-none"
        >
          Go Home
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "NotFound",
  components: {
    RouterLink,
  },
};
</script>
