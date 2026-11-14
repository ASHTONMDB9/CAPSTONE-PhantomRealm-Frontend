<template>
  <div class="user-orders">
    <h3 class="section-heading">My Orders</h3>

    <div v-if="loading" class="section-text">Loading your orders...</div>

    <div v-else-if="!orders.length" class="section-text">
      You haven't placed any orders yet.
      <router-link to="/Store">Browse the store</router-link>
    </div>

    <div v-for="order in orders" :key="order.id" class="order-card">
      <div class="order-head">
        <div>
          <div class="order-title">Order #{{ order.id }}</div>
          <div class="order-date">{{ formatDate(order.created_at) }}</div>
        </div>
        <span class="status" :class="'status-' + order.status">{{
          order.status
        }}</span>
      </div>

      <div v-for="item in order.items" :key="item.id" class="line">
        <img v-if="item.image" :src="item.image" class="thumb" alt="" />
        <div class="line-info">
          <div class="line-title">{{ item.title }}</div>
          <div class="line-qty">{{ item.quantity }} × R {{ money(item.price) }}</div>
        </div>
        <div class="line-price">R {{ money(item.price * item.quantity) }}</div>
      </div>
      <div v-if="!order.items.length" class="section-text">
        (No item details recorded for this older order)
      </div>

      <div class="order-foot">
        <div class="order-address">
          <div class="order-label">Delivering to</div>
          {{ order.street_address }}, {{ order.city }}, {{ order.province }},
          {{ order.postcode }}, {{ order.country }}
          <div v-if="order.notes" class="mt-1">Note: {{ order.notes }}</div>
        </div>
        <div class="order-total-box">
          <div class="order-total">Total: R {{ money(order.total) }}</div>
          <button
            v-if="order.status === 'pending'"
            class="site-btn"
            @click="cancel(order)"
          >
            Cancel order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Shows the logged-in user's own orders. Used inside the account page.
export default {
  data() {
    return { orders: [], loading: true };
  },
  async mounted() {
    this.orders = await this.$store.dispatch("getMyOrders");
    this.loading = false;
  },
  methods: {
    money(n) {
      return Number(n).toFixed(2);
    },
    formatDate(d) {
      return new Date(d).toLocaleString();
    },
    async cancel(order) {
      if (await this.$store.dispatch("cancelOrder", order.id)) {
        order.status = "cancelled";
      }
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

/* Same card look as the cart and cart summary */
.order-card {
  background: black;
  border: 3px solid red;
  border-radius: 16px;
  box-shadow: 0 0 20px red;
  padding: 25px;
  margin-bottom: 30px;
  text-align: left;
}
.order-head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}
.order-title {
  font-family: detail;
  font-size: 42px;
  color: black;
  text-shadow: 0 0 4px red, 0 0 6px red;
  line-height: 1.1;
}
.order-date {
  font-family: game;
  color: white;
  font-size: 20px;
}
.status {
  font-family: detail;
  font-size: 24px;
  text-transform: capitalize;
  padding: 4px 18px;
  border-radius: 25px;
  border: 2px solid red;
  color: white;
}
.status-pending {
  box-shadow: 0 0 10px red;
}
.status-processing {
  background: rgba(255, 0, 0, 0.35);
}
.status-shipped {
  background: red;
}
.status-delivered {
  background: white;
  color: black;
  border-color: white;
}
.status-cancelled {
  border-color: #777;
  color: #aaa;
  text-decoration: line-through;
}
.line {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 14px 0;
  border-top: 1px solid red;
}
.thumb {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
}
.line-info {
  flex: 1;
}
.line-title {
  color: white;
  font-size: 24px;
}
.line-qty {
  color: #ddd;
  font-size: 20px;
}
.line-price {
  font-family: detail;
  font-size: 30px;
  color: white;
  text-shadow: 0 0 4px red;
}
.order-foot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid red;
}
.order-address {
  color: #ddd;
  font-size: 20px;
}
.order-label {
  font-family: game;
  color: red;
  font-size: 22px;
}
.order-total-box {
  text-align: right;
}
.order-total {
  font-family: detail;
  font-size: 34px;
  color: white;
  text-shadow: 0 0 6px red;
  margin-bottom: 10px;
}

@media (max-width: 900px) {
  .section-heading {
    font-size: 38px;
  }
  .order-title {
    font-size: 34px;
  }
  .order-total-box {
    text-align: left;
  }
  .line {
    flex-wrap: wrap;
  }
}
</style>
