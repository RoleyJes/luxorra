import Blog from "@/pages/Blog.vue";
import Cart from "@/pages/Cart.vue";
import Checkout from "@/pages/Checkout.vue";
import ForgotPassword from "@/pages/auth/ForgotPassword.vue";
import Home from "@/pages/Home.vue";
import Login from "@/pages/auth/Login.vue";
import Signup from "@/pages/auth/Signup.vue";
import Wishlist from "@/pages/Wishlist.vue";
import GeneralLayout from "@/ui/GeneralLayout.vue";
import { createRouter, createWebHistory } from "vue-router";
import Account from "@/pages/Account.vue";
import { useAuthStore } from "@/stores/auth";
import CollectionsQueryView from "@/ui/CollectionsQueryView.vue";
import Catalog from "@/pages/Catalog.vue";
import ProductDetail from "@/pages/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: GeneralLayout,
      children: [
        {
          path: "",
          name: "home",
          component: Home,
        },
        {
          path: "collections",
          name: "collections",
          component: Catalog,
        },
        // This is because both pages are different
        {
          path: "collections/:collection",
          name: "collections-query",
          component: CollectionsQueryView,
        },
        {
          path: "blog",
          component: Blog,
        },

        // There is a /products page in Lezada, but i haven't seen what leads there. I only got there via typing in the url. That's where you get all the collections. The page is also the same for /collections. I just saw that it's the catalog button itself that actually leads to /collections which displays the same thing as /products
        {
          path: "products/:id",
          name: "product-detail",
          component: ProductDetail,
        },
        {
          path: "wishlist",
          component: Wishlist,
          meta: { requiresAuth: true },
        },
        {
          path: "cart",
          name: "cart",
          component: Cart,
          meta: { requiresAuth: true },
        },

        {
          path: "account",
          name: "account",
          meta: { requiresAuth: true },
          component: Account,
        },
        {
          path: "account/login",
          name: "login",
          meta: { requiresGuests: true },
          component: Login,
        },
        {
          path: "account/register",
          name: "signup",
          meta: { requiresGuests: true },
          component: Signup,
        },
        {
          path: "account/forgot-password",
          name: "forgot-password",
          meta: { requiresGuests: true },
          component: ForgotPassword,
        },
      ],
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
      meta: { requiresAuth: true },
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    // back/forward button
    if (savedPosition) {
      return savedPosition;
    }

    // default: scroll to top
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

router.beforeEach((to) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: "login" };
  }

  if (to.meta.requiresGuests && authStore.isAuthenticated) {
    return { name: "home" };
  }
});

export default router;
