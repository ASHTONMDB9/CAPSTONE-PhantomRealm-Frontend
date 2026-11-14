<template>
  <div class="user-wishlist">
    <h3 class="section-heading">My Wishlist</h3>

    <div v-if="loading" class="section-text">Loading your wishlist...</div>

    <div v-else-if="!items.length" class="section-text">
      Nothing on your wishlist yet. Tap the heart on any product in the
      <router-link to="/Store">store</router-link> to save it here.
    </div>

    <div v-for="item in items" :key="item.id" class="wish-item">
      <router-link
        :to="{ name: 'ProductView', params: { id: item.id } }"
        class="wish-image-link"
      >
        <img :src="item.image" :alt="item.title" class="wish-image" />
      </router-link>

      <div class="wish-details">
        <router-link
          :to="{ name: 'ProductView', params: { id: item.id } }"
          class="wish-title"
          >{{ item.title }}</router-link
        >
        <div class="wish-category">{{ item.category }}</div>
        <div class="wish-price">R {{ item.price }}</div>
      </div>

      <div class="wish-actions">
        <button class="site-btn" @click="addToCart(item)">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
        <button
          class="wish-remove-btn"
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
/* Matches the site: black text with a red glow for headings, white 20px body text */
.section-heading {
  font-family: detail;
  font-size: 50px;
  color: black;
  text-shadow: 0 0 6px red, 0 0 10px red;
  margin-bottom: 25px;
}
.section-text {
  color: white;
  font-size: 20px;
}
.section-text a {
  color: red;
  text-decoration: none;
}
.section-text a:hover {
  text-shadow: 0 0 8px red;
}
.site-btn {
  background: transparent;
  border: 2px solid red;
  color: white;
  border-radius: 6px;
  min-width: 150px;
  padding: 8px 20px;
  font-family: detail;
  font-size: 20px;
  transition: 0.3s;
}
.site-btn:hover:not(:disabled) {
  background: red;
  color: white;
  box-shadow: 0 0 1rem red;
}
.site-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Same card look as the cart items */
.wish-item {
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 20px;
  background: black;
  border: 3px solid red;
  border-radius: 16px;
  box-shadow: 0 0 20px red;
  margin-bottom: 25px;
}
.wish-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  display: block;
}
.wish-title {
  font-family: detail;
  font-size: 40px;
  color: black;
  text-shadow: 0 0 4px red, 0 0 6px red;
  text-decoration: none;
  line-height: 1.1;
}
.wish-title:hover {
  color: red;
  text-shadow: none;
}
.wish-category {
  font-family: game;
  color: white;
  font-size: 22px;
  margin-top: 6px;
}
.wish-price {
  font-family: detail;
  font-size: 36px;
  color: white;
  text-shadow: 0 0 4px red;
  margin-top: 4px;
}
.wish-actions {
  display: flex;
  align-items: center;
  gap: 18px;
}
.wish-remove-btn {
  background: transparent;
  border: none;
  color: red;
  font-size: 28px;
}
.wish-remove-btn:hover:not(:disabled) {
  text-shadow: 0 0 10px red;
}
.wish-remove-btn:disabled {
  opacity: 0.5;
}

@media (max-width: 900px) {
  .section-heading {
    font-size: 38px;
  }
  .wish-item {
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
  }
  .wish-title {
    font-size: 32px;
  }
  .wish-actions {
    justify-content: center;
  }
}
</style>
