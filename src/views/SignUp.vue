<template>

    <div class="container">
        <h1 class="about">Sign Up</h1>
        <div id="form" class="container-fluid">
            <form @submit.prevent="signUp()">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="name" class="form-label">Full Name</label>
                            <input type="text" v-model="full_name" class="form-control" id="name" placeholder="John Doe" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" v-model="email" class="form-control" id="email" placeholder="johndoe23@gmail.com" required>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="pass" class="form-label">Password</label>
                        <input type="password" v-model="password" class="form-control" id="pass" placeholder="password" required>
                    </div>
                <div class="mb-3">
                  <label for="no" class="form-label">Phone Number</label>
                  <input type="tel" v-model="phone_number" class="form-control" id="no" placeholder="0123456789" required>
                </div>
                <button type="submit" class="btn">Sign up</button>
                </div>
            </form>
        </div>
    </div>
    </template>
<script>
export default {
    data() {
    return {
      full_name: "",
      email: "",
      password: "",
      phone_number: "",
    };
  },
  methods: {
    signUp() {
      this.$store.dispatch("signUp", {
        full_name: this.full_name,
        email: this.email,
        password: this.password,
        phone_number: this.phone_number,
      });
      this.$router.push("/Login");
    },
  },
}
</script>
<style scoped>
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
    height: 55vh;
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