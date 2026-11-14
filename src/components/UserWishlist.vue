<template>
  <div class="user-wishlist">
    <h3 class="section-heading">My Wishlist</h3>

    <div v-if="loading" class="section-text">Loading your wishlist...</div>

    <div v-else-if="!items.length" class="section-text">
      Nothing on your wishlist yet. Tap the heart on any product in the
      <router-link to="/Store">store</router-link> to save it here.
    </div>

    <div v-if="items.length" class="wish-list">
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

/* Compact cards in a grid; the list scrolls once there are many items */
.wish-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 14px;
  max-height: 440px;
  overflow-y: auto;
  padding: 8px;
}
.wish-item {
  display: grid;
  grid-template-columns: 72px 1fr;
  grid-template-areas:
    "image details"
    "actions actions";
  gap: 10px 14px;
  align-items: center;
  padding: 12px;
  background: black;
  border: 2px solid red;
  border-radius: 12px;
  box-shadow: 0 0 10px red;
}
.wish-image-link {
  grid-area: image;
}
.wish-details {
  grid-area: details;
  min-width: 0;
}
.wish-actions {
  grid-area: actions;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.wish-image {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
}
.wish-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: detail;
  font-size: 26px;
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
  font-size: 17px;
  margin-top: 2px;
}
.wish-price {
  font-family: detail;
  font-size: 24px;
  color: white;
  text-shadow: 0 0 4px red;
}
.wish-actions .site-btn {
  min-width: 0;
  flex: 1;
  padding: 4px 14px;
  font-size: 18px;
}
.wish-remove-btn {
  background: transparent;
  border: none;
  color: red;
  font-size: 22px;
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
  .wish-list {
    grid-template-columns: 1fr;
    max-height: 380px;
  }
}
</style>
