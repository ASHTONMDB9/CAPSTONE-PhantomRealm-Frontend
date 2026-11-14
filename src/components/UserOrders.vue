<template>
  <div class="user-orders">
    <h3 class="mb-4">My Orders</h3>

    <div v-if="loading" class="text-secondary">Loading your orders...</div>

    <div v-else-if="!orders.length" class="text-secondary">
      You haven't placed any orders yet.
      <router-link to="/Store" class="text-danger">Browse the store</router-link>
    </div>

    <div v-for="order in orders" :key="order.id" class="order-card text-start">
      <div class="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <div>
          <h5 class="mb-0">Order #{{ order.id }}</h5>
          <small class="text-secondary">{{ formatDate(order.created_at) }}</small>
        </div>
        <span class="badge" :class="badgeClass(order.status)">{{ order.status }}</span>
      </div>

      <div v-for="item in order.items" :key="item.id" class="line">
        <img v-if="item.image" :src="item.image" class="thumb" alt="" />
        <div class="flex-grow-1">
          <div>{{ item.title }}</div>
          <small class="text-secondary"
            >{{ item.quantity }} × R {{ money(item.price) }}</small
          >
        </div>
        <div>R {{ money(item.price * item.quantity) }}</div>
      </div>
      <div v-if="!order.items.length" class="text-secondary small">
        (No item details recorded for this older order)
      </div>

      <div class="d-flex flex-wrap justify-content-between align-items-end mt-3">
        <div class="text-secondary small">
          Delivering to<br />
          {{ order.street_address }}, {{ order.city }}, {{ order.province }},
          {{ order.postcode }}, {{ order.country }}
          <div v-if="order.notes" class="mt-1">Note: {{ order.notes }}</div>
        </div>
        <div class="text-end">
          <div class="fs-5 fw-bold">Total: R {{ money(order.total) }}</div>
          <button
            v-if="order.status === 'pending'"
            class="btn btn-outline-danger btn-sm mt-2"
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
    badgeClass(status) {
      return (
        {
          pending: "bg-warning text-dark",
          processing: "bg-info text-dark",
          shipped: "bg-primary",
          delivered: "bg-success",
          cancelled: "bg-secondary",
        }[status] || "bg-secondary"
      );
    },
  },
};
</script>

<style scoped>
.order-card {
  background: #111;
  color: white;
  border: 1px solid red;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(255, 0, 0, 0.25);
  padding: 20px;
  margin-bottom: 20px;
}
.line {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 0;
  border-top: 1px solid #333;
}
.thumb {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
