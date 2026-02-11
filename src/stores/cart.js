import { defineStore } from "pinia";
import { computed } from "vue";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  const offcanvasCart = ref(false);

  const count = computed(() => cart.value.length);

  const totalAmt = computed(() =>
    cart.value.reduce((acc, cur) => {
      return acc + cur.price * cur.qty;
    }, 0),
  );

  function getIndex(id) {
    return cart.value.findIndex((i) => i.id === id);
  }

  function getSingleItem(id) {
    return cart.value.find((i) => i.id === id);
  }

  function toggleOffcanvasCart() {
    offcanvasCart.value = !offcanvasCart.value;
  }

  function addToCart(item) {
    // const index = cart.value.findIndex((i) => i.id === item.id);
    const index = getIndex(item.id);

    if (index !== -1) {
      cart.value[index].qty++;
    } else {
      cart.value.push({ ...item, qty: 1 });
    }
  }

  function deleteFromCart(item) {
    const index = getIndex(item.id);

    if (index !== -1) {
      cart.value.splice(index, 1);
    }
  }

  return {
    cart,
    offcanvasCart,
    toggleOffcanvasCart,
    addToCart,
    count,
    totalAmt,
    deleteFromCart,
    getSingleItem,
  };
});
