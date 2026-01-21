import Blog from "@/pages/Blog.vue"
import Cart from "@/pages/Cart.vue"
import Catalog from "@/pages/Catalog.vue"
import Checkout from "@/pages/Checkout.vue"
import ForgotPassword from "@/pages/ForgotPassword.vue"
import Home from "@/pages/Home.vue"
import Login from "@/pages/Login.vue"
import Shop from "@/pages/Shop.vue"
import Signup from "@/pages/Signup.vue"
import Wishlist from "@/pages/Wishlist.vue"
import GeneralLayout from "@/ui/GeneralLayout.vue"
import { createRouter, createWebHistory } from "vue-router"

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
          component: Catalog,
        },
        {
          path: "collections/:all",
          component: Shop,
        },
        {
          path: "blog",
          component: Blog,
        },
        // {
        //   path: 'products/:id',
        //   name: 'product-details',
        //   // component: ProductDetail,
        //   component: PiniaProductDetail,
        // },
        {
          path: "wishlist",
          component: Wishlist,
          meta: { requiresAuth: true },
        },
        {
          path: "cart",
          component: Cart,
          meta: { requiresAuth: true },
        },
        {
          path: "checkout",
          component: Checkout,
          meta: { requiresAuth: true },
        },

        {
          path: "account/login",
          name: "login",
          component: Login,
        },
        {
          path: "account/register",
          name: "signup",
          component: Signup,
        },
        {
          path: "account/forgot-password",
          name: "forgot-password",
          component: ForgotPassword,
        },

        // {
        //   path: 'account',
        //   redirect: 'account/profile',
        //   component: AccountLayout,
        //   meta: { requiresAuth: true },
        //   children: [
        //     {
        //       path: 'profile',
        //       name: 'profile',
        //       component: Profile,
        //     },
        //     {
        //       path: 'address',
        //       name: 'address',
        //       component: UserAddress,
        //     },
        //   ],
        // },

        // {
        //   path: 'auth',
        //   component: AuthLayout,
        //   name: 'auth',
        //   redirect: '/auth/login',
        //   meta: { requiresGuests: true },
        //   children: [
        //     {
        //       path: 'login',
        //       name: 'login',
        //       component: LogIn,
        //     },
        //     {
        //       path: 'signup',
        //       component: SignUp,
        //     },
        //   ],
        // },
      ],
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    // back/forward button
    if (savedPosition) {
      return savedPosition
    }

    // default: scroll to top
    return {
      top: 0,
      behavior: "smooth",
    }
  },
})

export default router
