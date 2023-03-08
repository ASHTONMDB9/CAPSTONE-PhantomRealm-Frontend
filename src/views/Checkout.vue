<template>
    <section id="order">
      <div v-if="user">
        <h1 class="about">Billing Details</h1>
        <div id="form" class="container-fluid">
            <form @submit.prevent="addOrder()">
                <div class="row">
                    <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                  <input type="text" class="form-control" v-model="first_name" id="exampleFormControlInput1" placeholder="John" required>
                </div>
            </div>
            <div class="col-md-6">
                        <div class="mb-3">
                            <label for="first" class="form-label">Last Name</label>
                  <input type="text" class="form-control" v-model="last_name" id="first" placeholder="Doe" required>
                </div>
                </div>
                <div class="mb-3">
                  <label for="last" class="form-label">Country/Region</label>
                  <input type="text" class="form-control" v-model="country" id="last" placeholder="West Pangia" required>
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">Street Address</label>
                  <input type="text" class="form-control" v-model="street_address" id="address" placeholder="23 West Ave" required>
                </div>
                <div class="mb-3">
                  <label for="city" class="form-label">Town/City</label>
                  <input type="text" class="form-control" v-model="city" id="city" placeholder="West City" required>
                </div>
                <div class="mb-3">
                  <label for="province" class="form-label">Province</label>
                  <input type="text" class="form-control" v-model="province" id="province" placeholder="Western Province" required>
                </div>
                <div class="mb-3">
                  <label for="postcode" class="form-label">Postcode/ZIP</label>
                  <input type="text" class="form-control" v-model="postcode" id="postcode" placeholder="4427" required>
                </div>
                <div class="mb-3">
                  <label for="no" class="form-label">Phone Number</label>
                  <input type="tel" class="form-control" v-model="phone_number" id="no" placeholder="0123456789" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email Address</label>
                  <input type="email" class="form-control" v-model="email" id="email" placeholder="example@gmail.com" required>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Additional Notes</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style="height: 262px;"></textarea>
                  <button class="btn" type="submit">Place Order</button>
                </div>
              </div>
            </form>
          </div>
            </div>
            <div v-else>
              <h1 class="text-center text-light">Sign up/Log in to continue</h1>
            </div>
        </section>
            </template>
<script>
export default {
    mounted(){
        window.scrollTo(0,0)
    },
    data() {
    return {
      orders: null,
      first_name: "",
        last_name: "",
        country: "",
        street_address: "",
        city: "",
        province: "",
        postcode: "",
        phone_number: "",
        email: "",
    };
  },
  computed: {
    order() {
      return this.$store.state.order;
    },
    user() {
      // console.log(this.$store.state.user)
      return this.$store.state.user;
    },
  },
  methods: {
    addOrder() {
      this.$store.dispatch("addOrder", {
        first_name: this.first_name ,
        last_name: this.last_name,
        country: this.country,
        street_address: this.street_address,
        city: this.city,
        province: this.province,
        postcode: this.postcode,
        phone_number: this.phone_number,
        email: this.email
      });
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
    text-shadow: 0 0 4px red, 0 0 4px red, 0 0 4px red, 10px 0px 10px rgb(36, 36, 36);
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
button {
    width: 100%;
    margin-top: 10px;
    height: 50px;
    background-color: transparent;
    border: 3px solid red;
    color: white;
    border-radius: 5px;
    text-shadow: 0 0 4px white, 0 0 4px white, 0 0 4px white, 10px 0px 10px rgb(36, 36, 36);
}
</style>