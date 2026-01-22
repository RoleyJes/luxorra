<script setup>
import BreadCrumbs from "@/ui/BreadCrumbs.vue"
import CollectionsLayout from "@/ui/CollectionsLayout.vue"
import ShopPageHeader from "@/ui/ShopPageHeader.vue"

const breadcrumbs = [
  {
    path: "/",
    label: "Home",
  },
  {
    label: "Products",
  },
]
</script>

<template>
  <BreadCrumbs :breadcrumbs="breadcrumbs" title="Products" />

  <!-- Shop page header -->
  <ShopPageHeader />

  <!-- Products grid and sidebar would go here -->
  <CollectionsLayout />
</template>

<style lang="scss" scoped></style>
