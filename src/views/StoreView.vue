<template>
  <section id="store">

    <div v-if="products" class="store-controls">
      <input
  type="text"
  v-model="searchQuery"
  placeholder="Search..."
/>
  <select v-model="selectedCategory">
    <option value="">All Categories</option>
    <option v-for="cat in categories" :key="cat" :value="cat">
      {{ cat.toUpperCase() }}
    </option>
  </select>

  <select v-model="sortOption">
    <option value="">Sort By</option>
    <option value="price-asc">Price: Low to High</option>
    <option value="price-desc">Price: High to Low</option>
    <option value="title-asc">Name: A–Z</option>
    <option value="title-desc">Name: Z–A</option>
  </select>
</div>

    <div v-if="products" class="container-fluid">
      <div v-for="product in filteredProducts" v-bind:key="product.id">
          <router-link :to="{ name: 'ProductView', params: { id: product.id }}">
            <div class="card ms-3 me-3 mt-4 mb-4">
              <img v-bind:src="product.image" class="card-img">
              <div class="card-img-overlay">
                <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
                </div>
                <h3 class="card-title">{{product.title}}</h3>
                <h5 class="card-text">{{product.category.toUpperCase()}}</h5>
                <h4 class="card-price">R{{product.price}}.00</h4>
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
  data() {
  return {
    products: null,
    selectedCategory: "",
    sortOption: "",
    searchQuery: ""
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
    categories() {
    if (!this.products) return [];
    return [...new Set(this.products.map(p => p.category))];
  },
  filteredProducts() {
  if (!this.products) return [];

  let result = [...this.products];

  if (this.searchQuery) {
    const query = this.searchQuery.toLowerCase();
    result = result.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }
  if (this.selectedCategory) {
    result = result.filter(
      p => p.category === this.selectedCategory
    );
  }
  if (this.sortOption === "price-asc") {
    result.sort((a, b) => a.price - b.price);
  }
  if (this.sortOption === "price-desc") {
    result.sort((a, b) => b.price - a.price);
  }
  if (this.sortOption === "title-asc") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (this.sortOption === "title-desc") {
    result.sort((a, b) => b.title.localeCompare(a.title));
  }

  return result;
}
  },
}
</script>

<style scoped>
#load {
  background-color: black;
  min-height: 100vh;
  display: flex;
  z-index: 1000;
  align-items: center;
  justify-content: center;
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

.store-controls {
  position: relative;
  z-index: 1;
  padding-top: 180px;
  display: flex;
  justify-content: end;
  gap: 20px;
}

.store-controls input {
  background-color: black;
  color: white;
  border: 2px solid red;
  padding: 10px 16px;
  font-family: game;
  font-size: 16px;
  border-radius: 8px;
  width: 220px;
  transition: all 0.3s ease;
}

.store-controls input::placeholder {
  color: white;
}

.store-controls input:focus {
  outline: none;
  box-shadow: 0 0 15px red;
}

.store-controls select {
  background-color: black;
  color: white;
  border: 2px solid red;
  padding: 10px 16px;
  font-family: detail;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.store-controls select:hover {
  box-shadow: 0 0 10px red;
}

.store-controls select:focus {
  box-shadow: 0 0 15px red;
}

.container-fluid {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
  padding-top: 45px;
  padding-bottom: 60px;
}
.card {
  width: 18rem;
  border-radius: 16px;
  overflow: hidden;
  background-color: black;
  transition: 
    transform 0.4s ease,
    box-shadow 0.4s ease;
}
.card-title {
  font-size: 28px;
  margin-bottom: 5px;
}
.card-text {
  font-size: 18px;
  letter-spacing: 1px;
}
.card-price {
  font-size: 26px;
  margin-top: 10px;
}
.card-img {
  height: 22rem;
  object-fit: fill;
  transition: filter 0.4s ease, transform all 0.5s ease;
}
.card:hover {
  background-color: red;
  transform: scale(1.2);
  transition: all 0.5s ease;
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 0 35px rgba(255, 0, 0, 0.6);
}
.card:hover .card-img {
  filter: brightness(0.4);
  filter: opacity(0.7);
  color: red;
}
.card-img-overlay {
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  background: transparent
}
.card .card-img-overlay:hover {
  opacity: 1;
  transition: all 0.5s linear;
  text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 3px 3px 3px red;
  font-family: phantom;
  color: white;
  text-align: start;
  font-size: 30px;
  font-family: game;
}
.rating i {
  font-size: 18px;
  color: black;
}
.card:hover .rating i {
  color: yellow;
}

</style>
