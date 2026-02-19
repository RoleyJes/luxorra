<script setup>
import { useLogout } from "@/composables/useLogout";
import useOrders from "@/composables/useOrders";
import { useUser } from "@/composables/useUser";
import BreadCrumbs from "@/ui/BreadCrumbs.vue";
import OrderHistorySkeleton from "@/ui/OrderHistorySkeleton.vue";
import AccountDetailsSkeleton from "@/ui/AccountDetailsSkeleton.vue";

const breadcrumbs = [
  {
    path: "/",
    label: "Home",
  },
  {
    label: "Account",
  },
];

const { logout } = useLogout();

const { ordersLength, isFetchingOrders } = useOrders();
const { user, isFetchingUser } = useUser();
</script>

<template>
  <BreadCrumbs :breadcrumbs="breadcrumbs" />
  <main class="mx-auto w-full max-w-container px-3.75 py-20 md:py-25">
    <!-- Header -->
    <div class="mb-3.75 flex items-end justify-between border-b border-b-[#ddd] pb-2.5">
      <h1 class="text-4xl">My Account</h1>

      <button @click="logout" class="text-brand-accent">Logout</button>
    </div>

    <!-- Order history -->
    <section class="mb-8">
      <h2 class="mb-2.5 text-[1.5rem]">Order History</h2>
      <OrderHistorySkeleton v-if="isFetchingOrders" />
      <p v-else-if="ordersLength <= 0">You haven't placed any orders yet.</p>
    </section>

    <!-- Account Details -->
    <section class="mb-4">
      <h2 class="mb-2.5 text-[1.5rem]">Account Details</h2>
      <AccountDetailsSkeleton v-if="isFetchingUser" />
      <div v-else class="space-y-2.5">
        <p>
          <span>{{ user?.name }}</span>
        </p>
        <p>{{ user.email }}</p>
        <p>{{ user.phone_number }}</p>
        <p>{{ user.address }}</p>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
