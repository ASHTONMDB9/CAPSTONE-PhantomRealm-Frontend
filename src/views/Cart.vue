<template>
    <div class="container">
          <button class="btn" id="checkout"><router-link class="checkout" to="/Checkout">Checkout</router-link></button>
        <div v-for="product in cartProducts" v-bind:key="product.id" class="item">
            <div class="card mb-3 ms-4 me-4">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img v-bind:src="product.image" class="img-fluid">
                    </div>
                    <div class="col-md-8">
                    <button id="delete" @click="deleteFromCart(product.id)" class="btn"><i class="fa-solid fa-trash"></i></button>
      <div class="card-body">
        <h5  class="card-title">ID:{{product.id}}</h5>
          <h5 class="card-title">{{product.title}}</h5>
          <p class="card-category">{{product.category.toUpperCase()}}</p>
          <div class="rating text-center">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
                </div>
            <hr>
            <h5 class="card-price">{{product.price}}</h5>
        </div>
    </div>
</div>
</div>
</div> 
</div>
  </template>
  <script>
  export default {
    mounted(){
        window.scrollTo(0,0)
    },
    data() {
      return {
        total: "",
      };
    },
    methods: {
      deleteFromCart(id) {
        return this.$store.dispatch("deleteFromCart", id);
      },
    },
  
    computed: {
      cartProducts() {
        return this.$store.state.cart;
      },
      product() {
        return this.$store.state.product;
      },
    },
  };
  </script>
  <style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-shadow: 0px 0px 0px 6px red;
    filter: drop-shadow(0 0 2.3rem red);
    align-items: center;
    margin-top: 180px;
    padding-top: 50px;
    padding-bottom: 50px;
    height: auto;
}
.card {
    display: flex;
    margin-top: 50px;
    box-shadow: 0px 0px 0px 6px red;
    filter: drop-shadow(0 0 2.3rem red);
    background-color: black;
}
.img-fluid {
    display: flex;
    height: 500px;
    width: 100vh;
    justify-content: flex-start;
    align-items: flex-start;
}
#delete {
    background: transparent;
    border: 3px solid red;
    color: red;
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    border-radius: 30px;
    font-size: 50px;
}
.card-title {
    text-shadow: 0 0 2px red, 0 0 2px red, 0 0 2px red, 3px 3px 3px red;
    font-family: detail;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 60px;
}
.card-category {
    text-shadow: 0 0 2px red, 0 0 2px red, 0 0 2px red, 3px 3px 3px red;
    font-size: xx-large;
    font-family: game;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
}
.card-price {
    text-shadow: 0 0 2px red, 0 0 2px red, 0 0 2px red, 3px 3px 3px red;
    font-family: detail;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 60px;
}
i {
    font-size: 30px;
    color: red;
}
#checkout {
    background: transparent;
    border: 3px solid red;
    color: red;
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    font-size: 25px;
    text-decoration-color: red;
}
.checkout {
    color: red;
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    font-size: 25px;
}
.rating i {
  font-size: 18px;
  color: gold;
}
  </style>
  