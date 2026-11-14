<template>
  <section id="order">
    <div v-if="account">
      <h1 class="about">Checkout</h1>

      <div v-if="!cart.length" class="text-center text-light py-5">
        <h3>Your cart is empty</h3>
        <router-link to="/Store" class="btn mt-3" style="max-width: 300px"
          >Browse the store</router-link
        >
      </div>

      <div v-else id="form" class="container-fluid py-4">
        <form @submit.prevent="placeOrder" class="w-100">
          <div class="row g-4">
            <!-- LEFT: who + where -->
            <div class="col-lg-7">
              <h4 class="section-heading">Your details</h4>
              <div class="details-card mb-4">
                <div><strong>{{ account.full_name }}</strong></div>
                <div>{{ account.email }}</div>
                <div v-if="account.phone_number">{{ account.phone_number }}</div>
                <small
                  >Taken from your account.
                  <router-link :to="`/user/${account.id}`"
                    >Edit in My Account</router-link
                  ></small
                >
              </div>

              <div v-if="!account.phone_number" class="mb-3">
                <label for="no" class="form-label">Contact Phone Number</label>
                <input
                  type="tel"
                  class="form-control"
                  v-model.trim="phone_number"
                  id="no"
                  placeholder="0123456789"
                  required
                />
              </div>

              <h4 class="section-heading">Delivery address</h4>
              <div class="mb-3">
                <label for="address" class="form-label">Street Address</label>
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="street_address"
                  id="address"
                  placeholder="23 West Ave"
                  autocomplete="street-address"
                  required
                />
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="city" class="form-label">Town/City</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model.trim="city"
                    id="city"
                    autocomplete="address-level2"
                    required
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="province" class="form-label">Province</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model.trim="province"
                    id="province"
                    autocomplete="address-level1"
                    required
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="postcode" class="form-label">Postcode/ZIP</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model.trim="postcode"
                    id="postcode"
                    autocomplete="postal-code"
                    required
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="country" class="form-label">Country/Region</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model.trim="country"
                    id="country"
                    autocomplete="country-name"
                    required
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="notes" class="form-label">Additional Notes</label>
                <textarea
                  class="form-control"
                  id="notes"
                  rows="3"
                  maxlength="1000"
                  v-model="notes"
                ></textarea>
              </div>
            </div>

            <!-- RIGHT: what you're buying -->
            <div class="col-lg-5">
              <div class="summary-card">
                <h4 class="section-heading">Order Summary</h4>
                <div v-for="item in cart" :key="item.id" class="summary-row">
                  <span>{{ item.quantity }} × {{ item.title }}</span>
                  <span class="summary-amount">R {{ formatMoney(item.price * item.quantity) }}</span>
                </div>
                <div class="summary-row summary-total">
                  <span>Total</span>
                  <span class="summary-amount">R {{ formatMoney(cartTotal) }}</span>
                </div>
                <button class="btn" type="submit" :disabled="submitting">
                  {{ submitting ? "Placing order..." : "Place Order" }}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div v-else>
      <h1 class="text-center text-light">
        Please sign up/log in to continue with your purchase
      </h1>
      <div class="d-flex justify-content-center gap-3 mt-4">
        <router-link to="/Login" class="btn" style="max-width: 200px">Log in</router-link>
        <router-link to="/SignUp" class="btn" style="max-width: 200px">Sign Up</router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      street_address: "",
      city: "",
      province: "",
      postcode: "",
      country: "",
      phone_number: "",
      notes: "",
      submitting: false,
    };
  },
  computed: {
    // The logged-in user's details (name, email, phone) come from the account.
    account() {
      return this.$store.state.user?.user || null;
    },
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
  },
  async mounted() {
    window.scrollTo(0, 0);
    if (!this.account) return;
    // Pre-fill the address from the customer's previous order, if any.
    const [last] = await this.$store.dispatch("getMyOrders");
    if (last && !this.street_address) {
      this.street_address = last.street_address;
      this.city = last.city;
      this.province = last.province;
      this.postcode = last.postcode;
      this.country = last.country;
    }
  },
  methods: {
    formatMoney(n) {
      return Number(n).toFixed(2);
    },
    async placeOrder() {
      if (this.submitting) return;
      this.submitting = true;
      await this.$store.dispatch("addOrder", {
        street_address: this.street_address,
        city: this.city,
        province: this.province,
        postcode: this.postcode,
        country: this.country,
        phone_number: this.account.phone_number ? undefined : this.phone_number,
        notes: this.notes,
      });
      this.submitting = false;
    },
  },
};
</script>
<style scoped>
#order {
  padding-top: 120px;
}
.container {
  padding-top: 165px;
}
.about {
  color: black;
  text-shadow: 0 0 4px red, 0 0 4px red, 0 0 4px red,
    10px 0px 10px rgb(36, 36, 36);
  font-family: phantom;
  font-size: 100px;
}
#form {
  background-color: red;
  background-image: url(../assets/Images/REDBLA_1.jpg);
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-label {
  filter: drop-shadow(0px 0px 0.2rem white);
  color: white;
}
.btn {
  width: 100%;
  margin-top: 10px;
  height: 50px;
  background-color: transparent;
  border: 3px solid red;
  color: white;
  border-radius: 5px;
}
.btn:hover {
  box-shadow: 0 0 1rem red;
}

.section-heading {
  font-family: detail;
  font-size: 40px;
  color: black;
  text-shadow: 0 0 6px red, 0 0 10px red;
  margin-bottom: 20px;
}
/* Same look as the cart's Order Summary card */
.details-card {
  background: black;
  border: 3px solid red;
  border-radius: 16px;
  box-shadow: 0 0 20px red;
  color: white;
  font-size: 20px;
  padding: 25px;
}
.details-card strong {
  font-family: detail;
  font-size: 28px;
  font-weight: normal;
  text-shadow: 0 0 4px red;
}
.details-card small {
  display: block;
  margin-top: 8px;
  color: #ddd;
  font-size: 17px;
}
.details-card a {
  color: red;
  text-decoration: none;
}
.details-card a:hover {
  text-shadow: 0 0 8px red;
}
.summary-card {
  background: black;
  border: 3px solid red;
  border-radius: 16px;
  box-shadow: 0 0 25px red;
  color: white;
  padding: 30px;
  height: fit-content;
}
.summary-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 15px;
  font-size: 20px;
}
.summary-amount {
  white-space: nowrap;
}
.summary-total {
  border-top: 1px solid red;
  padding-top: 15px;
  font-family: detail;
  font-size: 26px;
}
.summary-card .btn {
  height: 60px;
  margin-top: 20px;
  font-family: detail;
  font-size: 24px;
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
