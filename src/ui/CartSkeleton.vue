<template>
  <main class="mx-auto w-full max-w-container px-3.75 py-20 md:py-25">
    <!-- Cart items table skeleton -->
    <section class="animate-pulse">
      <!-- Headers -->
      <div class="grid grid-cols-[1fr_163px_286px_163px_160px] border border-neutral-200">
        <div class="h-6 border-r border-r-neutral-200 bg-neutral-200 py-4" />
        <div class="h-6 border-r border-r-neutral-200 bg-neutral-200 py-4" />
        <div class="h-6 border-r border-r-neutral-200 bg-neutral-200 py-4" />
        <div class="h-6 border-r border-r-neutral-200 bg-neutral-200 py-4" />
        <div class="h-6 bg-neutral-200 py-4" />
      </div>

      <!-- Rows (3 items) -->
      <div
        v-for="i in 3"
        :key="i"
        class="relative grid h-40 grid-cols-[1fr_163px_286px_163px_160px] divide-x divide-neutral-200 overflow-hidden border-x border-b border-neutral-200"
      >
        <!-- Image and name cell -->
        <div class="grid grid-cols-[115px_1fr] divide-x divide-neutral-200">
          <div class="flex items-center justify-center bg-neutral-200" />
          <div class="flex items-center justify-center bg-neutral-200 ps-6.25 pe-3.75" />
        </div>

        <!-- Price -->
        <div class="flex items-center justify-center ps-6.25 pe-3.75">
          <div class="h-5 w-24 rounded bg-neutral-200" />
        </div>

        <!-- Quantity -->
        <div class="flex items-center justify-center ps-6.25 pe-3.75">
          <div class="h-10 w-28 rounded bg-neutral-200" />
        </div>

        <!-- Total -->
        <div class="flex items-center justify-center ps-6.25 pe-3.75">
          <div class="h-5 w-24 rounded bg-neutral-200" />
        </div>

        <!-- Delete btn -->
        <div class="flex items-center justify-center ps-6.25 pe-3.75">
          <div class="h-11 w-11 rounded-full bg-neutral-200" />
        </div>
      </div>
    </section>

    <!-- Control buttons skeleton -->
    <div class="mt-7.5 mb-32.5 animate-pulse border-b border-b-neutral-border pb-7.5">
      <div class="flex justify-end gap-3">
        <div class="h-12 w-48 rounded bg-neutral-200" />
        <div class="h-12 w-32 rounded bg-neutral-200" />
      </div>
    </div>

    <!-- Delivery & total section skeleton -->
    <div class="grid animate-pulse grid-cols-1 gap-7.5 lg:grid-cols-2">
      <!-- Delivery section -->
      <section class="space-y-12.5">
        <div class="mb-6.25 h-8 w-64 rounded bg-neutral-200" />
        <div class="space-y-3.75">
          <div class="h-11 w-75 rounded bg-neutral-200" />
          <div class="h-11 w-75 rounded bg-neutral-200" />
          <div class="h-16 w-full rounded bg-neutral-200" />
        </div>
      </section>

      <!-- Total section -->
      <section class="bg-neutral-100 p-10">
        <div class="mx-auto mb-10 h-10 w-48 rounded bg-neutral-300" />
        <div class="mb-7.5 border border-neutral-300">
          <div class="flex border-b border-b-neutral-300">
            <div
              class="h-5 basis-[58%] rounded border-r border-r-neutral-300 bg-neutral-200 px-2.5 py-4"
            />
            <div class="ms-auto me-0 h-5 w-32 rounded bg-neutral-200 py-4 ps-2.5 pe-3.75" />
          </div>
          <div class="flex">
            <div
              class="h-5 basis-[58%] rounded border-r border-r-neutral-300 bg-neutral-200 px-2.5 py-4"
            />
            <div class="ms-auto me-0 h-5 w-32 rounded bg-neutral-200 py-4 ps-2.5 pe-3.75" />
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div class="mb-2.5 h-4 w-80 rounded bg-neutral-200" />
          <div class="mt-5 h-12 w-72 rounded bg-neutral-200" />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
