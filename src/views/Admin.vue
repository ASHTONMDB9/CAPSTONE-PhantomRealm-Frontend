<template>
    <div v-if="user_type === 'Admin'">

      <h1 class="about d-flex justify-content-center">Admin</h1>

      <button id="off" class="btn btn-danger-outline" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-bars"></i></button>

<div class="offcanvas offcanvas-end bg-dark" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title" style="color: red;" id="offcanvasScrollingLabel">PhantomRealm</h3>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="d-flex align-items-center ms-4 mb-4">
      <div class="position-relative">
          <img class="rounded-circle" src="../assets/Images/possible/cf468dcf-8938-4f68-a0d4-272d2091af53.jpeg" alt="" style="width: 60px; height: 60px;">
          <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-2"></div>
      </div>
      <div class="ms-3">
          <h6 class="mb-0 text-light">Ashton 
            -<span class="text-success"> online</span><br/>
          </h6>
            <span style="color: red;">Admin</span>
      </div>
  </div>

  <div class="offcanvas-body">
    <div class="nav-item nav-link text-dark py-2 ps-2 rounded-pill" style="background-color: red;"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</div>
    
  </div>
</div>
      
        <div id="profit" class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <div class="bg-dark text-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-line fa-3x" style="color: red;"></i>
                            <div class="ms-3">
                                <p class="mb-2">Today Sale</p>
                                <h6 class="mb-0">R 11,639.76</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="bg-dark text-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-bar fa-3x" style="color: red;"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Sale</p>
                                <h6 class="mb-0">R 18,924,327.84</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="bg-dark text-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-area fa-3x" style="color: red;"></i>
                            <div class="ms-3">
                                <p class="mb-2">Today Revenue</p>
                                <h6 class="mb-0">R 76,324.24</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="bg-dark text-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-pie fa-3x" style="color: red;"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Revenue</p>
                                <h6 class="mb-0">R 2,543,472.56</h6>
                            </div>
                        </div>
                    </div>
            </div>

            <div id="charts" class="container-fluid pt-4">
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="bg-dark rounded h-100 p-4">
                            <h6 class="mb-4 text-light">Local Sales</h6>
                            <img src="../assets/Images/singleline.png" id="line-chart" style="display: block; margin-left: auto; margin-right: auto;">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="bg-dark rounded h-100 p-4">
                            <h6 class="mb-4 text-light">International Sales</h6>
                            <img src="../assets/Images/multibar.png" id="salse-revenue" style="display: block; margin-left: auto; margin-right: auto;">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="bg-dark rounded h-100 p-4">
                            <h6 class="mb-4 text-light">Popularity</h6>
                            <img src="../assets/Images/singlebar.png" id="bar-chart" style="display: block; margin-left: auto; margin-right: auto;">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="bg-dark rounded h-100 p-4">
                            <h6 class="mb-4 text-light">Actual/Expected Performance</h6>
                            <img src="../assets/Images/multiline.png" id="worldwide-sales" style="display: block; margin-left: auto; margin-right: auto;">
                        </div>
                    </div>
                </div>
            </div>


            <div class="container-fluid pt-4 px-4">
                <div class="bg-dark text-light text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <h4 class="mb-0">Users</h4>
                    </div>

<div class="table-responsive mt-4">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-white">
                                    <th scope="col"></th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Fullname</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">User type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in users" v-bind:key="user.id">
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td class="text-light">{{user.id}}</td>
                                    <td class="text-light">{{user.full_name}}</td>
                                    <td class="text-light">{{user.email}}</td>
                                    <td class="text-light">{{user.password}}</td>
                                    <td class="text-light">{{user.user_type}}</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                    </div>


            <div class="container-fluid pt-4 px-4">
                <div class="bg-dark text-light text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <h4 class="mb-0">Products</h4>
                    </div>
                    
<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add Product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="addProduct()">
          <textarea type="text" v-model="title" placeholder="title" required></textarea>
          <div>
          <textarea type="text" v-model="description" placeholder="description" required></textarea>
          </div>
          <div>
          <textarea type="text" v-model="category" placeholder="category" required></textarea>
        </div>
          <div>
          <textarea type="text" v-model="image" placeholder="image" required></textarea>
        </div>
        <div>
          <textarea type="text" v-model="price" placeholder="price" required></textarea>
        </div>
        <div>
          </div>
        </form>
    </div>
    <div class="modal-footer">
          <button id="addProduct" type="submit" class="btn btn-primary" @click="addProduct">Add Product</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        
        <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-white">
                                    <th scope="col"></th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Price</th>
                                    <th colspan= "2">Action</th>
                                    <th col="col"><button id="addProduct" type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Product</button></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in products" v-bind:key="product.id">
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td class="text-light">{{product.id}}</td>
                                    <td><img v-bind:src="product.image" style="width: 5rem; height: 5rem;"></td>
                                    <td class="text-light">{{product.title}}</td>
                                    <td class="text-light">{{product.category}}</td>
                                    <td class="text-light">{{product.price}}</td>
                                    <td><button class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#exampleModal${product.id}`">Update</button></td>
                                    <td><button @click="deleteProduct(product.id)" class="btn btn-sm btn-danger" href="">Delete</button></td>


<div class="modal fade" :id="`exampleModal${product.id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Update Product</h5>

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="UpdateProduct(product)">
    
        <textarea type="text" v-model="product.title" placeholder="title" style="height: 100px; width: 680px;" required></textarea>
          <div>
          <textarea type="text" v-model="product.description" placeholder="description" style="height: 330px; width: 680px;" required></textarea>
        </div>
          <div>
          <textarea type="text" v-model="product.category" placeholder="category" style="height: 100px; width: 680px;" required></textarea>
        </div>
          <div>
          <textarea type="text" v-model="product.image" placeholder="image" style="height: 100px; width: 680px;" required></textarea>
        </div>
        <div>
          <textarea type="text" v-model="product.price" placeholder="price" style="height: 100px; width: 680px;" required></textarea>
        </div>
        <div>
          </div>
          <button id="UpdateProduct" type="submit" class="btn btn-primary">Update Product</button>
    </form>
      </div>
    </div>
  </div>
</div>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <h1 class="text-center text-light" style="margin-top: 100px;">Access Denied</h1>
        <h3 class="text-center text-light">You found an Easter Egg you can't open ☹</h3>
        <img class="box" src="../assets/Images/easteregg.gif">

    </div>
    </template>
<script>
export default {
    data() {
    return {
      users: null,
      full_name: "",
      email: "",
      password: "",
      phone_number: "",
      user_type: "User",
      products: null,
      title: "",
      description: "",
      category: "",
      image: "",
      price: "",
    };
  },
  mounted() {
    this.declareAdmin();
    fetch("https://capstone-phantomrealm-backend.onrender.com/products", {
    })
      .then((res) => res.json())
      .then((data) => (this.products = data), console.log(this.products));

      this.declareAdmin();
    fetch("https://capstone-phantomrealm-backend.onrender.com/users", {
    })
      .then((res) => res.json())
      .then((data) => (this.users = data), console.log(this.users));

      this.$store.dispatch("getProduct");
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
    user() {
      return this.$store.state.user;
    },
    user_type() {
      return this.$store.state.user.user.user_type;
    },
    token() {
      return this.$store.state.Token;
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
      }).then(() => {
    this.title = "";
    this.description = "";
    this.category = "";
    this.image = "";
    this.price = "";
  });
    },
    declareAdmin() {
        if  (this.user.user) {
            this.$store.state.user.user_type = this.user.user.user_type;
        }
    },
    deleteProduct(id){
        this.$store.dispatch("deleteProduct",{
            id:id,
            token:this.token
        })
    },
    UpdateProduct(product) {
  this.$store.dispatch("UpdateProduct", {
    id: product.id,
    token: this.token,
    title: product.title,
    description: product.description,
    category: product.category,
    image: product.image,
    price: product.price,
  });
}
  },
}
</script>
<style scoped>
 .about {
  color: black;
  text-shadow: 0 0 4px red, 0 0 4px red, 0 0 4px red, 10px 0px 10px rgb(36, 36, 36);
  font-family: phantom;
  font-size: 100px;
  margin-top: 150px;
}
#profit {
  margin-top: 80px;
  background-color: black;
}
#charts {
  margin-top: 5px;
  background-color: black;
}
.box {
  padding-top: 10px;
	display: block;
	height: auto;
	margin-left: auto;
  margin-right: auto;
}
#off {
  margin-top: -100px;
  display: block;
  margin-left: auto;
  margin-right: 20px;
  height: 60px;
  width: 80px
}

.modal-content {
  background-color: #000;
  color: #f8f9fa;
  border-radius: 12px;
  border: 1px solid red;
  font-family: phantom;
}

.modal-header {
  border-bottom: 1px solid red;
  background-color: #000;
}

.modal-title {
  color: red;
  font-size: 1.5rem;
  text-shadow: 0 0 4px red;
}

.modal-body {
  background-color: #000;
}

.modal-footer {
  border-top: 1px solid red;
  background-color: #000;
}

.modal textarea,
.modal input {
  width: 100%;
  background-color: #111;
  color: #f8f9fa;
  border: 1px solid red;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 15px;
  font-family: phantom;
}

.modal textarea::placeholder,
.modal input::placeholder {
  color: #aaa;
}

.modal .btn-primary {
  background-color: red;
  border: none;
  color: black;
  font-weight: bold;
}

.modal .btn-primary:hover {
  background-color: darkred;
  color: white;
}

.modal .btn-secondary {
  background-color: transparent;
  border: 1px solid red;
  color: red;
}

.modal .btn-secondary:hover {
  background-color: red;
  color: black;
}

.modal .btn-close {
  filter: invert(1);
}

</style>