<template>
  <h2 class="cart-heading">Your Cart:</h2>
  <div class="cart-page">
    <div class="cart">

      <div class="cart-items">

        <div v-for="item in cart" :key="item.id" class="cart-item">
          <img :src="item.image" class="item-image" />

          <div class="item-details">
            <h4 class="item-title">{{ item.title }}</h4>
            <p class="item-category">{{ item.category }}</p>

            <div class="rating">
              <i class="fa-solid fa-star" v-for="i in 3" :key="i"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-regular fa-star"></i>
            </div>

            <div class="item-actions">
              <button @click="decrease(item.id)" class="qty-btn">−</button>
              <span class="qty">{{ item.quantity }}</span>
              <button @click="remove(item.id)" class="delete-btn">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>

          <div class="item-price">
            R {{ item.price * item.quantity }}
          </div>
        </div>
      </div>

      <div class="cart-summary">
        <h3>Order Summary</h3>

        <div class="summary-row">
          <span>Items</span>
          <span>{{ cart.length }}</span>
        </div>

        <div class="summary-row total">
          <span>Total</span>
          <span>R {{ cartTotal }}</span>
        </div>

        <router-link to="/Checkout" class="checkout-btn">
          Proceed to Checkout
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      window.scrollTo(0, 0)
    },
    computed: {
      cart() {
        return this.$store.state.cart
      },
      cartTotal() {
  return this.$store.getters.cartTotal
}
    },
    methods: {
      decrease(id) {
        this.$store.dispatch("decreaseQty", id)
      },
      remove(id) {
        this.$store.dispatch("removeFromCart", id)
      }
    }
  }
  </script>
  
  <style scoped>
    .cart-page {
      margin-top: 160px;
      padding: 40px;
    }
    
    .cart {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 40px;
    }
    
    .cart-heading {
      font-family: phantom;
      color: white;
      text-shadow: 0 0 6px red;
      margin-bottom: 30px;
      text-align: center;
      padding-top: 150px;
      font-size: 100px;
    }
    
    .cart-item {
      display: grid;
      grid-template-columns: 120px 1fr 120px;
      gap: 20px;
      padding: 20px;
      background: black;
      border: 3px solid red;
      border-radius: 16px;
      box-shadow: 0 0 20px red;
      margin-bottom: 25px;
    }
    
    .item-image {
      width: 100%;
      height: 120px;
      object-fit: cover;
      border-radius: 10px;
    }
    
    .item-title {
      font-family: detail;
      font-size: 28px;
      color: black;
      text-shadow: 0 0 4px red;
    }
    
    .item-category {
      font-family: game;
      color: black;
      font-size: 18px;
    }
    
    .item-actions {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-top: 10px;
    }
    
    .qty-btn {
      background: transparent;
      border: 2px solid red;
      color: red;
      font-size: 24px;
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
    
    .delete-btn {
      background: transparent;
      border: none;
      color: red;
      font-size: 24px;
    }
    
    .qty {
      font-size: 22px;
      color: red;
    }
    
    .item-price {
      font-family: detail;
      font-size: 26px;
      color: black;
      text-shadow: 0 0 4px red;
      align-self: center;
    }
    
    .cart-summary {
      background: black;
      border: 3px solid red;
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 0 25px red;
      height: fit-content;
      position: sticky;
      top: 180px;
    }
    
    .cart-summary h3 {
      font-family: detail;
      color: red;
      text-shadow: 0 0 6px red;
      margin-bottom: 20px;
    }
    
    .summary-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      color: black;
      font-size: 20px;
    }
    
    .total {
      font-size: 26px;
      font-family: detail;
    }
    
    .checkout-btn {
      display: block;
      margin-top: 25px;
      text-align: center;
      padding: 15px;
      border: 3px solid red;
      color: red;
      font-size: 22px;
      text-decoration: none;
      border-radius: 12px;
      transition: 0.3s;
    }
    
    .checkout-btn:hover {
      background: red;
      color: black;
    }
    
    /* Media queries */
    @media (max-width: 900px) {
      .cart-wrapper {
        grid-template-columns: 1fr;
      }
      .cart-item {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .item-price {
        margin-top: 10px;
      }
    }
    </style>
    
  