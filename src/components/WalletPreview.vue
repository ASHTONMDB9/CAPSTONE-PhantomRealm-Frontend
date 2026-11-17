<template>
  <div class="wallet-preview">
    <h4 class="wallet-heading">Wallet</h4>

    <div v-if="!loggedIn" class="wallet-note">
      <router-link to="/Login">Log in</router-link> to pay with your in-store
      credits.
    </div>

    <template v-else>
      <div class="wallet-row">
        <span>Balance</span>
        <span>{{ balance === null ? "..." : fmt(balance) }}</span>
      </div>
      <div class="wallet-row">
        <span>This order</span>
        <span class="deduct">- {{ fmt(total) }}</span>
      </div>
      <div class="wallet-row wallet-left" :class="{ short: insufficient }">
        <span>Left after order</span>
        <span>{{ balance === null ? "..." : fmt(remaining) }}</span>
      </div>
      <div v-if="insufficient" class="wallet-warning">
        Not enough credits for this order. Remove something from your cart.
      </div>
    </template>
  </div>
</template>

<script>
// Shows how many credits this order will use and what is left. Used in the
// cart and at checkout. The server checks the real total again when you order.
export default {
  props: { total: { type: Number, default: 0 } },
  computed: {
    loggedIn() {
      return !!this.$store.state.Token;
    },
    balance() {
      return this.$store.state.wallet;
    },
    remaining() {
      return this.balance - this.total;
    },
    insufficient() {
      return this.balance !== null && this.remaining < 0;
    },
  },
  mounted() {
    if (this.loggedIn) this.$store.dispatch("getWallet");
  },
  methods: {
    fmt(n) {
      return Number(n).toLocaleString("en-US", { maximumFractionDigits: 2 });
    },
  },
};
</script>

<style scoped>
.wallet-preview {
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid red;
  color: white;
}
.wallet-heading {
  font-family: detail;
  font-size: 30px;
  color: black;
  text-shadow: 0 0 6px red;
  margin-bottom: 14px;
}
.wallet-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 20px;
  margin-bottom: 10px;
}
.deduct {
  color: red;
  text-shadow: 0 0 4px black;
}
.wallet-left {
  font-family: detail;
  font-size: 26px;
  text-shadow: 0 0 4px red;
}
.wallet-left.short {
  color: red;
}
.wallet-warning {
  margin-top: 6px;
  color: red;
  font-size: 18px;
}
.wallet-note {
  font-size: 18px;
}
.wallet-note a {
  color: red;
  text-decoration: none;
}
</style>
