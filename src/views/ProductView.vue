<template>
    <div v-if="product" id="container-fluid">
        <div v-for="product in product" v-bind:key="product.id" class="item">
            <div class="card mb-3 ms-4 me-4">
  <div class="row g-0">
    <div class="col-md-4">
      <img v-bind:src="product.image" class="img-fluid" style="height: auto;">
    </div>
    <div class="col-md-8">
        <button class="btn ms-3 mt-3" @click="addToCart(product)">Add to Cart</button>
      <div class="card-body">
          <h5 class="card-title">{{product.title}}</h5>
          <p class="card-category">{{product.category.toUpperCase()}}</p>
          <div class="rating mb-3">
            <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
                </div>
        <h6 class="card-text lead">{{product.description}}</h6>
        <hr>
            <h5 class="card-price">R{{product.price}}</h5>
            <router-link to="/Store"><i class="fa-solid fa-arrow-left-long"></i></router-link>
      </div>
    </div>
  </div>
</div> 
        </div>
        </div>
        <div  v-else class="box">
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
    this.$store.dispatch("addToCart", product)
  }
  },
  mounted() {
    fetch("https://capstone-phantomrealm-backend.onrender.com/products/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => (this.product = data));

    console.log(this.product);
    window.scrollTo(0,0);
  },
};
</script>
<style scoped>
 .box{
  padding-top: 100px;
	display: block;
	height: 50vh;
	position: relative;
	margin-left: auto;
  margin-right: auto;
	transition: all .2s ease;
  background-image: url(../assets/Images/sekigan.gif);
}
.loader{
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
.loader:before{
	content: "";
	position: absolute;
	top: -38px;
	border-top: 3px solid red;
	border-right: 3px solid red;
	border-radius: 0 50px 0px  0;
	width: 40px;
	height: 40px;
	background-color: rgba(0, 0, 0, 0.709);
	-webkit-transform-origin:  0% 100%;
			transform-origin:  0% 100% ;
	-webkit-animation: loader2 1.5s linear infinite;
			animation: loader2 1.5s linear infinite;
}
.loader:after{
	content: "";
	position: absolute;
	top: 2px;
	right: 2px;
	border-bottom: 3px solid red;
	border-left: 3px solid red;
	border-radius: 0 0px 0px  50px;
	width: 40px;
	height: 40px;
	background-color: rgba(0, 0, 0, 0.709);
	-webkit-transform-origin:  100% 0%;
			transform-origin:  100% 0% ;
	-webkit-animation: loader2 1.5s linear infinite;
			animation: loader2 1.5s linear infinite;
}
@-webkit-keyframes loader2{
    0%{-webkit-transform:rotate(0deg);}
    100%{-webkit-transform:rotate(360deg);}
}
@keyframes loader2{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
}
.card {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 150px;
    box-shadow: 0px 0px 0px 6px red;
    filter: drop-shadow(0 0 2.3rem red);
    background-color: black;
}
button {
    background: transparent;
    border: 3px solid red;
    color: red;
    border-radius: 30px;
    font-size: 25px;
}
.card-title {
    text-shadow: 0 0 2px red, 0 0 2px red, 0 0 2px red, 3px 3px 3px red;
    font-family: detail;
    color: black;
    font-size: 60px;
}
.card-category {
    text-shadow: 0 0 2px red, 0 0 2px red, 0 0 2px red, 3px 3px 3px red;
    font-size: xx-large;
    font-family: game;
    color: black;
}
.card-text {
    color: white;
    font-size: 30px;
}
.rating i {
  font-size: 25px;
  color: gold;
}
.card-price {
    text-shadow: 0 0 2px red, 0 0 2px red, 0 0 2px red, 3px 3px 3px red;
    font-family: detail;
    color: black;
    font-size: 60px;
}
i {
    font-size: 30px;
    color: red;
}
</style>