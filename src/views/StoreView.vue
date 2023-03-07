<template>
  <section id="store">
    <div v-if="products" class="container-fluid">
        <div v-for="product in products" v-bind:key="product.id">
          <router-link :to="{ name: 'ProductView', params: { id: product.id }}">
            <div class="card ms-3 me-3 mt-4 mb-4" style="width: 18rem; ">
              <img v-bind:src="product.image" class="card-img" style="height: 22rem;">
              <div class="card-img-overlay">
                <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
                </div>
                <h3 class="card-title">{{product.title}}</h3>
                <h5 class="card-text">{{product.category.toUpperCase()}}</h5>
                <h4 class="card-price">{{product.price}}</h4>
              </div>
              <div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    <div v-else id="load" class="box">
			<div><img src="../assets/Images/Skull.gif"></div>
		</div>

  </section>
</template>
<script>
export default {
    props: ["product"],
    data() {
    return {
      products: null,
    };
  },
  mounted() {
    fetch("https://capstone-phantomrealm-backend.onrender.com/products", {
    })
      .then((res) => res.json())
      .then((productdata) => (this.products = productdata), console.log(this.products));
      window.scrollTo(0,0);
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
}
</script>

<style scoped>
#load {
  background-color: black;
}
.box img{
  padding-top: 100px;
	display: block;
	height: auto;
	margin-left: auto;
  margin-right: auto;
}
  #store {
    background-image: url(../assets/Images/download.gif);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
  }
  .container-fluid {
	  overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 180px;
  }
  .card:hover {
    background-color: red;
    transform: scale(1.2);
    transition: all 0.5s linear;
  }
  .card-img-overlay {
    opacity: 0;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }
  .card .card-img-overlay:hover {
    opacity: 1;
    transition: all 0.5s linear;
    text-shadow: 0 0 2px white, 0 0 2px white, 0 0 2px white, 3px 3px 3px black;
    font-family: phantom;
    color: black;
    text-align: start;
    font-size: 30px;
    font-family: game;
  }
  .rating i {
  font-size: 18px;
  color: black;
}
.card:hover .card-img {
  filter: opacity(0.7);
  color: red;
}
</style>