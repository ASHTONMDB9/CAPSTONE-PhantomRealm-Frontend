<template>
<div class="container-fluid">
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-line fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Today Sale</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-bar fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Sale</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-area fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Today Revenue</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-pie fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Revenue</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary text-center rounded p-4">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Worldwide Sales</h6>
                                <a href="">Show All</a>
                            </div>
                            <canvas id="worldwide-sales"></canvas>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary text-center rounded p-4">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Salse &amp; Revenue</h6>
                                <a href="">Show All</a>
                            </div>
                            <canvas id="salse-revenue"><i class="fa-solid fa-chart-simple"></i></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid pt-4 px-4">
                <div class="bg-secondary text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">Products</h6>
                        <a href="">Show All</a>
                    </div>

          <form @submit.prevent="addProduct()">
          <input type="text" v-model="title" class="email" placeholder="title" required>
          <div>
          <input type="text" v-model="description" placeholder="description" required>
          </div>
          <div>
          <input type="text" v-model="category" placeholder="category" required>
          </div>
          <div>
          <input type="text" v-model="image" placeholder="image" required>
          </div>
          <div>
          <input type="text" v-model="price" placeholder="price" required>
          </div>
          <div>
          </div>
<button id="addProduct" type="submit" class="btn btn-primary">Add Product</button>
        </form>

                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-white">
                                    <th scope="col"><input class="form-check-input" type="checkbox"></th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in products" v-bind:key="product.id">
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td>{{product.id}}</td>
                                    <td><img v-bind:src="product.image" style="width: 5rem; height: 5rem;"></td>
                                    <td>{{product.title}}</td>
                                    <td>{{product.category}}</td>
                                    <td>{{product.price}}</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    props: ["product"],
    data() {
    return {
      products: null,
      title: "",
      description: "",
      category: "",
      image: "",
      price: "",
    };
  },
  mounted() {
    fetch("https://phantomrealm-api.herokuapp.com/products", {
    })
      .then((res) => res.json())
      .then((data) => (this.products = data), console.log(this.products));
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  methods: {
    addProduct() {
      this.$store.dispatch("addProduct", {
        title: this.title,
        description: this.description,
        category: this.category,
        image: this.image,
        price: this.price,
      });
    },
  },
}
</script>
<style scoped>
.container-fluid {
    padding-top: 180px;
    background-color: black;
} 
</style>