<template>
  <div v-if="product" id="container-fluid">
    <div v-for="product in product" :key="product.id" class="item">
      <div class="card game-shelf-card mb-3 ms-4 me-4">
        <div class="cover-disc-wrapper">
          <div class="game-box-angle">
            <div class="cover-spine">
              <span>{{ product.title }}</span>
            </div>

            <div class="cover-front">
              <img :src="product.image" alt="Game Cover Front" />
            </div>

            <div class="cover-depth"></div>
          </div>

          <div class="game-disc">
            <div class="disc-hole"></div>
            <img :src="product.image" alt="Disc Media" />
          </div>
        </div>

        <div class="manual-wrapper">
          <div class="manual-content">
            <p class="card-category">{{ product.category.toUpperCase() }}</p>
            <h5 class="card-title">{{ product.title }}</h5>

            <div class="rating mb-2">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star-half-stroke"></i>
            </div>

            <div class="manual-text">
              {{ product.description }}
            </div>

            <div
              class="purchase-wrapper mt-3 d-flex justify-content-between align-items-center"
            >
              <h5 class="card-price">R{{ product.price }}</h5>
              <button class="btn add-cart-btn" @click="addToCart(product)">
                Add to Cart
              </button>
            </div>

            <router-link to="/Store" class="back-link mt-2">
              <i class="fa-solid fa-arrow-left-long"></i> Back
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="box">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    item() {
      return this.$store.state.item;
    },
  },
  data() {
    return {
      product: null,
    };
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
  mounted() {
    fetch(
      "https://capstone-phantomrealm-backend.onrender.com/products/" +
        this.$route.params.id
    )
      .then((res) => res.json())
      .then((data) => (this.product = data));

    console.log(this.product);
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.box {
  padding-top: 100px;
  display: block;
  height: 75vh;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.2s ease;
  background-image: url(../assets/Images/loaderback.gif);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.loader {
  position: relative;
  width: 5px;
  height: 5px;
  top: 49%;
  top: -webkit-calc(50% - 43px);
  top: calc(50% - 2.5px);
  left: 49%;
  left: -webkit-calc(50% - 43px);
  left: calc(50% - 2.5px);
  background-color: white;
  border-radius: 50px;
}
.loader:before {
  content: "";
  position: absolute;
  top: -38px;
  border-top: 3px solid red;
  border-right: 3px solid red;
  border-radius: 0 50px 0px 0;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.709);
  -webkit-transform-origin: 0% 100%;
  transform-origin: 0% 100%;
  -webkit-animation: loader2 1.5s linear infinite;
  animation: loader2 1.5s linear infinite;
}
.loader:after {
  content: "";
  position: absolute;
  top: 2px;
  right: 2px;
  border-bottom: 3px solid red;
  border-left: 3px solid red;
  border-radius: 0 0px 0px 50px;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.709);
  -webkit-transform-origin: 100% 0%;
  transform-origin: 100% 0%;
  -webkit-animation: loader2 1.5s linear infinite;
  animation: loader2 1.5s linear infinite;
}
@-webkit-keyframes loader2 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes loader2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.game-shelf-card {
  display: flex;
  flex-direction: row;
  background-color: #000;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 180px;
  box-shadow: 0 0 2rem red;
  padding: 50px;
}

.cover-disc-wrapper {
  flex: 0 0 40%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 20px;
  padding: 10px;
  perspective: 1000px;
}

.game-box-angle {
  width: 250px;
  height: 480px;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(50deg) rotateX(0deg);
}

.cover-spine {
  position: absolute;
  width: 70px;
  height: 100%;
  background: rgb(73, 16, 16);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(-100deg) translateX(-35px);
}
.cover-spine span {
  max-height: 90%;
  overflow: hidden;
  color: white;
  text-align: center;
  line-height: 1.1;
  writing-mode: vertical-rl;
  font-family: detail;
  font-size: clamp(15px, 1.6vw, 50px);
  letter-spacing: 1px;
  padding: 8px 6px;
  border-radius: 6px;
  text-shadow: 0 0 4px black, 0 0 6px black, 1px 1px 2px black;
}
.cover-front {
  position: absolute;
  left: 35px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  backface-visibility: hidden;
}
.cover-front img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.cover-depth {
  position: absolute;
  top: 0;
  left: 120px;
  width: 20px;
  height: 100%;
  transform: rotateY(90deg);
  transform-origin: left;
  z-index: 1;
}
.game-disc {
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.game-disc img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 50%;
  transform: rotate(15deg);
}
.disc-hole {
  position: absolute;
  width: 35px;
  height: 35px;
  background: #000;
  border-radius: 50%;
  border: 5px solid rgb(231, 231, 231);
  z-index: 2;
}
.manual-wrapper {
  flex: 0 0 60%;
  display: flex;
  align-items: flex-start;
  padding: 10px 20px;
}
.manual-content {
  background: #111;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 2rem red;
  flex: 1;
}
.card-category {
  font-family: game;
  color: white;
  font-size: 1rem;
  letter-spacing: 1px;
  text-shadow: 0 0 5px red;
  margin-bottom: 5px;
}
.card-title {
  font-family: detail;
  font-size: 2rem;
  color: black;
  text-shadow: 0 0 10px red;
  margin-bottom: 10px;
}
.rating i {
  font-size: 20px;
  color: gold;
  margin-right: 3px;
}
.manual-text {
  font-size: 20px;
  color: #eee;
  background: rgba(255, 0, 0, 0.05);
  padding: 10px;
  border-radius: 10px;
  max-height: auto;
}
.add-cart-btn {
  background: transparent;
  border: 2px solid red;
  color: red;
  border-radius: 25px;
  padding: 8px 20px;
  font-size: 1rem;
  transition: all 0.3s ease;
}
.add-cart-btn:hover {
  background: red;
  color: black;
  box-shadow: 0 0 1rem red;
}
.card-price {
  font-family: detail;
  font-size: 1.8rem;
  color: white;
  text-shadow: 0 0 8px black;
}
.back-link {
  display: inline-block;
  margin-top: 10px;
  font-size: 20px;
  color: red;
  text-decoration: none;
}
.back-link:hover {
  text-shadow: 0 0 8px red;
}

/* Responsive */
@media (max-width: 992px) {
  .game-shelf-card {
    flex-direction: column;
    align-items: center;
  }
  .cover-disc-wrapper,
  .manual-wrapper {
    flex: 1 1 100%;
    padding: 10px 0;
    justify-content: center;
  }
  .game-box-angle {
    width: 120px;
    height: 200px;
  }
  .game-disc {
    width: 80px;
    height: 80px;
  }
  .card-title {
    font-size: 1.8rem;
  }
  .card-price {
    font-size: 1.5rem;
  }
}
</style>
