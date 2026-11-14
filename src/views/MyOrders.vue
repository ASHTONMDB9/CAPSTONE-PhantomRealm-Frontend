<template>
  <section id="my-orders">
    <h1 class="about">My Orders</h1>

    <div v-if="!account" class="text-center text-light">
      <h3>Please log in to see your orders</h3>
      <router-link to="/Login" class="btn mt-3">Log in</router-link>
    </div>

    <div v-else class="container pb-5">
      <div v-if="loading" class="text-center text-light">Loading your orders...</div>

      <div v-else-if="!orders.length" class="text-center text-light">
        <h4>You haven't placed any orders yet</h4>
        <router-link to="/Store" class="btn mt-3">Browse the store</router-link>
      </div>

      <div v-for="order in orders" :key="order.id" class="order-card">
        <div class="d-flex flex-wrap justify-content-between align-items-center mb-3">
          <div>
            <h4 class="mb-0">Order #{{ order.id }}</h4>
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
        <div v-if="!order.items.length" class="text-secondary">
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
              @click="cancel(order.id)"
            >
              Cancel order
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return { loading: true };
  },
  computed: {
    account() {
      return this.$store.state.user?.user || null;
    },
    orders() {
      return this.$store.state.myOrders;
    },
  },
  async mounted() {
    window.scrollTo(0, 0);
    if (this.account) await this.$store.dispatch("getMyOrders");
    this.loading = false;
  },
  methods: {
    money(n) {
      return Number(n).toFixed(2);
    },
    formatDate(d) {
      return new Date(d).toLocaleString();
    },
    cancel(id) {
      this.$store.dispatch("cancelOrder", id);
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
#my-orders {
  background-color: black;
  min-height: 100vh;
  padding-top: 120px;
}
.about {
  color: black;
  text-shadow: 0 0 4px red, 0 0 4px red, 0 0 4px red,
    10px 0px 10px rgb(36, 36, 36);
  font-family: phantom;
  font-size: 90px;
  text-align: center;
  margin-bottom: 40px;
}
.order-card {
  background: #111;
  color: white;
  border: 2px solid red;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
  padding: 20px;
  margin-bottom: 25px;
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
.btn {
  background-color: transparent;
  border: 2px solid red;
  color: white;
}
.btn:hover {
  box-shadow: 0 0 1rem red;
  color: white;
}
</style>
