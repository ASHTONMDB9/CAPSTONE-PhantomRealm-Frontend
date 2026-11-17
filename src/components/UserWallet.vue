<template>
  <div class="user-wallet">
    <h3 class="section-heading">My Wallet</h3>

    <div class="wallet-card">
      <div class="wallet-label">Available credits</div>
      <div class="wallet-balance">{{ balance === null ? "..." : fmt(balance) }}</div>
      <div class="wallet-sub">1 credit = R1 in the store</div>
    </div>

    <div v-if="transactions.length" class="tx-list">
      <div v-for="t in transactions" :key="t.id" class="tx-row">
        <div class="tx-info">
          <div class="tx-title">{{ describe(t) }}</div>
          <div class="tx-date">{{ formatDate(t.created_at) }}</div>
        </div>
        <div class="tx-amounts">
          <div class="tx-amount" :class="t.amount < 0 ? 'out' : 'in'">
            {{ t.amount < 0 ? "-" : "+" }} {{ fmt(Math.abs(t.amount)) }}
          </div>
          <div class="tx-after">Balance {{ fmt(t.balance_after) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// The logged-in user's credits wallet, shown on the account page.
export default {
  data() {
    return { transactions: [], loadedBalance: undefined };
  },
  computed: {
    balance() {
      return this.$store.state.wallet;
    },
  },
  watch: {
    // e.g. after cancelling an order the balance changes, so reload the activity
    balance(now) {
      if (now !== this.loadedBalance) this.load();
    },
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      const data = await this.$store.dispatch("getWallet");
      this.loadedBalance = data.balance;
      this.transactions = data.transactions || [];
    },
    fmt(n) {
      return Number(n).toLocaleString("en-US", { maximumFractionDigits: 2 });
    },
    formatDate(d) {
      return new Date(d).toLocaleString();
    },
    describe(t) {
      if (t.type === "bonus") return "Welcome credits";
      const order = t.order_id ? `order #${t.order_id}` : "an order";
      return t.type === "refund" ? `Refund for ${order}` : `Payment for ${order}`;
    },
  },
};
</script>

<style scoped>
.section-heading {
  font-family: detail;
  font-size: 50px;
  color: black;
  text-shadow: 0 0 6px red, 0 0 10px red;
  margin-bottom: 25px;
}
.wallet-card {
  background: black;
  border: 3px solid red;
  border-radius: 16px;
  box-shadow: 0 0 20px red;
  padding: 25px;
  text-align: center;
  margin-bottom: 20px;
}
.wallet-label {
  font-family: game;
  font-size: 24px;
  color: white;
}
.wallet-balance {
  font-family: detail;
  font-size: 72px;
  line-height: 1.1;
  color: white;
  text-shadow: 0 0 8px red, 0 0 14px red;
}
.wallet-sub {
  color: #ddd;
  font-size: 18px;
}
.tx-list {
  max-height: 300px;
  overflow-y: auto;
  padding: 4px 8px;
}
.tx-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 12px 0;
  border-bottom: 1px solid red;
}
.tx-title {
  color: white;
  font-size: 20px;
}
.tx-date {
  color: #ddd;
  font-size: 16px;
}
.tx-amounts {
  text-align: right;
  white-space: nowrap;
}
.tx-amount {
  font-family: detail;
  font-size: 28px;
}
.tx-amount.out {
  color: red;
  text-shadow: 0 0 4px black;
}
.tx-amount.in {
  color: white;
  text-shadow: 0 0 6px red;
}
.tx-after {
  color: #ddd;
  font-size: 16px;
}

@media (max-width: 900px) {
  .section-heading {
    font-size: 38px;
  }
  .wallet-balance {
    font-size: 52px;
  }
}
</style>
