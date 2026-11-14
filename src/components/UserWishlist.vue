<template>
  <div class="user-wishlist">
    <h3 class="mb-4">My Wishlist</h3>

    <div v-if="loading" class="text-secondary">Loading your wishlist...</div>

    <div v-else-if="!items.length" class="text-secondary">
      Nothing on your wishlist yet. Tap the heart on any product in the
      <router-link to="/Store" class="text-danger">store</router-link> to save it
      here.
    </div>

    <div v-for="item in items" :key="item.id" class="wish-item">
      <router-link
        :to="{ name: 'ProductView', params: { id: item.id } }"
        class="wish-image-link"
      >
        <img :src="item.image" :alt="item.title" class="wish-image" />
      </router-link>

      <div class="wish-details text-start">
        <router-link
          :to="{ name: 'ProductView', params: { id: item.id } }"
          class="wish-title"
          >{{ item.title }}</router-link
        >
        <div class="text-secondary">{{ (item.category || "").toUpperCase() }}</div>
        <div class="wish-price">R {{ item.price }}</div>
      </div>

      <div class="wish-actions">
        <button class="btn btn-sm wish-cart-btn" @click="addToCart(item)">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
        <button
          class="btn btn-sm wish-remove-btn"
          :disabled="busy === item.id"
          title="Remove from wishlist"
          @click="remove(item)"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// The logged-in user's wishlist, shown on the account page.
export default {
  data() {
    return { items: [], loading: true, busy: null };
  },
  async mounted() {
    this.items = await this.$store.dispatch("getWishlist");
    this.loading = false;
  },
  methods: {
    addToCart(item) {
      // Same cart action the product page uses. The item stays on the wishlist.
      this.$store.dispatch("addToCart", item);
    },
    async remove(item) {
      this.busy = item.id;
      const ok = await this.$store.dispatch("setWishlisted", {
        productId: item.id,
        add: false,
      });
      if (ok) this.items = this.items.filter((i) => i.id !== item.id);
      this.busy = null;
    },
  },
};
</script>

<style scoped>
.wish-item {
  display: grid;
  grid-template-columns: 90px 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 16px;
  background: black;
  border: 2px solid red;
  border-radius: 16px;
  box-shadow: 0 0 14px rgba(255, 0, 0, 0.45);
  margin-bottom: 20px;
}
.wish-image {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
  display: block;
}
.wish-title {
  font-size: 1.4rem;
  color: white;
  text-decoration: none;
  text-shadow: 0 0 4px red;
}
.wish-title:hover {
  color: red;
}
.wish-price {
  font-size: 1.2rem;
  color: white;
  margin-top: 4px;
}
.wish-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
.wish-cart-btn {
  background: transparent;
  border: 2px solid red;
  color: white;
}
.wish-cart-btn:hover {
  background: red;
  color: white;
}
.wish-remove-btn {
  background: transparent;
  border: none;
  color: red;
  font-size: 1.3rem;
}
.wish-remove-btn:disabled {
  opacity: 0.5;
}

@media (max-width: 576px) {
  .wish-item {
    grid-template-columns: 70px 1fr;
  }
  .wish-image {
    width: 70px;
    height: 70px;
  }
  .wish-actions {
    grid-column: 1 / -1;
    justify-content: space-between;
  }
}
</style>
